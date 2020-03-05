import React from 'react';
import CodeMirror from "codemirror/src/codemirror"
import searchcursor from "./addons/searchcursor";
import 'codemirror/lib/codemirror.css';
import "./CodeMirrorWrapper.css";
import image from '../../empty_image.svg';
import PopupWord from "./popupWord/PopupWord";

class CodeMirrorWrapper extends React.Component {

    constructor(props) {

        super(props);

        this.state = {enableBackground: true};

        searchcursor(CodeMirror);

        this.popupOpen = false;

        this.processText = this.processText.bind(this);
        this.clickOnWord = this.clickOnWord.bind(this);
    }

    componentDidMount() {

        this.editor = CodeMirror(document.getElementById('code-mirror-node'), {
            lineWrapping: true
            // lineNumbers: true
        });
        this.editor.focus();

        this.editor.on('change', this.processText);
        this.editor.getWrapperElement().addEventListener('click', this.clickOnWord);
    }

    processText(instance, changeObj) {

        let text = this.editor.getValue();

        if (text.length) this.setState({enableBackground: false});
        else this.setState({enableBackground: true});

        let wordsCount = [];

        text.split(' ').forEach(word => {

            if (word.length >= 3) {

                let wordCount = wordsCount.find(wordObject => wordObject.value === word.toLowerCase());

                if (wordCount) wordCount.count = wordCount.count + 1;
                else wordsCount.push({value: word.toLowerCase(), count: 1});
            }
        });

        wordsCount = wordsCount.filter(obj => obj.count > 2);

        this.highlightText(wordsCount);
        this.props.setWords(wordsCount);
    }

    highlightText(wordsCount) {

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

                let mark = this.editor.markText(position.from, position.to, {
                    className: 'text-marker'
                });

                mark.word = word;
            }
        })
    }

    clearMarks() {

        let marks = this.editor.getAllMarks();

        marks.forEach(mark => mark.clear())
    }

    clickOnWord(event) {

        let lineCh = this.editor.coordsChar({left: event.clientX, top: event.clientY});
        let markers = this.editor.findMarksAt(lineCh);

        if (markers.length && !this.popupOpen) {

            event.stopPropagation();
            event.preventDefault();

            let marker = markers[0];

            this.currentPopup = PopupWord.createNode(marker);
            this.currentPopup.addEventListener('click', () => {

                this.popupOpen = false;
                this.currentPopup.remove()
            });

            this.popupOpen = true;

            this.editor.addWidget(lineCh, this.currentPopup);
        }
    }

    render() {
        return (
            <div className="code-mirror-wrapper" style={{position: 'relative'}}>
                <div id="code-mirror-node"/>
                {this.state.enableBackground && <div className="image-container">
                    <img src={image} alt="Vazio"/>
                    <span>Que tal escrever algo? Mínimo de 120 caracteres</span>
                </div>}
            </div>
        )
    }

}

export default CodeMirrorWrapper;