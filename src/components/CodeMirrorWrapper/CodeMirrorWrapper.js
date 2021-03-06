import React from 'react';
import {Drawer, Alert} from "antd";
import CodeMirror from "codemirror/src/codemirror"
import searchcursor from "./addons/searchcursor";
import 'codemirror/lib/codemirror.css';
import "./CodeMirrorWrapper.css";
import image from '../../empty_image.svg';
import PopupWord from "./popupWord/PopupWord";
import SynonymsSelector from "../SynonymsSelector/SynonymsSelector";

class CodeMirrorWrapper extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            enableBackground: true,
            drawer: false,
            marker: null
        };

        this.config = {
            checkMode: 'PARAGRAPH'
        };

        searchcursor(CodeMirror);

        this.popupOpen = false;

        this.processText = this.processText.bind(this);
        this.clickOnWord = this.clickOnWord.bind(this);
        this.replaceWord = this.replaceWord.bind(this);
    }

    componentDidMount() {

        this.editor = CodeMirror(document.getElementById('code-mirror-node'), {
            lineWrapping: true,
            // lineNumbers: true
        });
        this.editor.focus();

        this.editor.on('change', this.processText);
        this.editor.getWrapperElement().addEventListener('click', this.clickOnWord);
    }

    processText(instance, changeObj) {

        let text = this.editor.getValue();

        if (text.length) {

            let afterHighlightCallback = null;

            //Checando se o usuário alterou o texto utilizando a funcionalidade de substituir sinônimos
            if (this.state.marker && this.state.marker.word.value.toLowerCase() === changeObj.removed[0].toLowerCase())
                //Salvando a animação da palavra alterada para ser executada depois a fim de evitar conflitos entre os marcadores do CodeMirror
                afterHighlightCallback = () => this.highlightTextChange(changeObj);

            this.setState({enableBackground: false});

            let wordsCount = [];

            if (this.config.checkMode === 'PARAGRAPH') { //Checando repetições por parágrafo

                let lineNumber = 0;

                this.editor.eachLine(line => {

                    if (line.text.length > 0) {

                        line.text.split(' ').forEach(word => {

                            if (word.length >= 3) {

                                let wordCount = wordsCount.find(wordObject => wordObject.value === word.toLowerCase() && wordObject.line === lineNumber);

                                if (wordCount) wordCount.count = wordCount.count + 1;
                                else wordsCount.push({value: word.toLowerCase(), count: 1, line: lineNumber});
                            }
                        });

                    }

                    lineNumber++;
                });

            } else { //Checando repetições no texto completo

                text.split(' ').forEach(word => {

                    if (word.length >= 3) {

                        let wordCount = wordsCount.find(wordObject => wordObject.value === word.toLowerCase());

                        if (wordCount) wordCount.count = wordCount.count + 1;
                        else wordsCount.push({value: word.toLowerCase(), count: 1});
                    }
                });
            }

            wordsCount = wordsCount.filter(obj => obj.count > 2);

            this.highlightText(wordsCount, afterHighlightCallback);
            this.props.setWords(wordsCount);

        } else this.setState({enableBackground: true});
    }

    highlightTextChange(changeObj) {

        let {from, to, text, removed} = changeObj;
        let difference;

        difference = text[0].length - removed[0].length;

        to.ch = to.ch + difference;

        let mark = this.editor.markText(from, to, {
            className: 'text-marker-recent-replaced'
        });

        setTimeout(() => {

            mark.clear();

        }, 1000)
    }

    highlightText(wordsCount, afterHighlightCallback) {

        this.clearMarks();

        wordsCount.forEach(word => {

            let regex = new RegExp(`(?<=(^|\\s))${word.value}(?=[\\s.;\\b])`, 'gi');

            let cursor = this.editor.getSearchCursor(regex);

            let currentWord = null;

            while (currentWord = cursor.findNext()) {

                let position = {
                    from: cursor.from(),
                    to: cursor.to()
                };

                //Checando se a linha da palavra encontrada é a mesma do objeto de palavras repetidas
                if (word.line === undefined || word.line === position.from.line) {

                    let mark = this.editor.markText(position.from, position.to, {
                        className: 'text-marker'
                    });

                    mark.word = word;
                }
            }
        });

        if (typeof afterHighlightCallback === 'function') afterHighlightCallback();
    }

    clearMarks() {
        let marks = this.editor.getAllMarks();
        marks.forEach(mark => mark.clear())
    }

    clickOnWord(event) {

        let lineCh = this.editor.coordsChar({left: event.clientX, top: event.clientY});
        let markers = this.editor.findMarksAt(lineCh);

        if (markers.length) {

            this.setState({
                drawer: true,
                marker: markers[0]
            })

        }

        // if (markers.length && !this.popupOpen) {
        //
        //     event.stopPropagation();
        //     event.preventDefault();
        //
        //     let marker = markers[0];
        //
        //     this.currentPopup = PopupWord.createNode(marker);
        //     this.currentPopup.addEventListener('click', () => {
        //
        //         this.popupOpen = false;
        //         this.currentPopup.remove()
        //     });
        //
        //     this.popupOpen = true;
        //
        //     this.editor.addWidget(lineCh, this.currentPopup);
        // }
    }

    replaceWord(word) {

        this.setState({drawer: false});
        let {from, to} = this.state.marker.find();
        this.editor.replaceRange(word, from, to);
    }

    render() {
        return (
            <>
                <div className="code-mirror-wrapper" style={{position: 'relative'}}>
                    <div id="code-mirror-node"/>
                    {this.state.enableBackground && <div className="image-container">
                        <img src={image} alt="Vazio"/>
                        <span>Que tal escrever algo? Mínimo de 120 caracteres</span>
                    </div>}
                </div>
                {this.state.marker !== null &&
                <Drawer
                    title={`Sinônimos de "${this.state.marker.word.value}"`}
                    placement="bottom"
                    closable={true}
                    onClose={() => this.setState({drawer: false})}
                    visible={this.state.drawer}
                    height="50%"
                >
                    <Alert
                        closable={true}
                        message="Dica: clique em um dos sinônimos para substituir no texto"
                        type="success"
                    />
                    <SynonymsSelector
                        word={this.state.marker.word.value}
                        hideTitle={true}
                        replaceWord={this.replaceWord}
                    />
                </Drawer>}
            </>
        )
    }

}

export default CodeMirrorWrapper;