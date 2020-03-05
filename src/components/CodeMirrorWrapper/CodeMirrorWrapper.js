import React from 'react';
import CodeMirror from "codemirror/src/codemirror"
import searchcursor from "./addons/searchcursor";
import 'codemirror/lib/codemirror.css';
import "./CodeMirrorWrapper.css";
import image from '../../empty_image.svg';

class CodeMirrorWrapper extends React.Component {

    constructor(props) {

        super(props);

        searchcursor(CodeMirror);

        this.processText = this.processText.bind(this)
    }

    componentDidMount() {

        this.editor = CodeMirror(document.getElementById('code-mirror-node'), {
            lineWrapping: true
        });

        this.editor.on('change', this.processText)

    }

    processText(instance, changeObj) {

        let text = this.editor.getValue();

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

                this.editor.markText(position.from, position.to, {
                        className: 'text-marker'
                    }
                )
            }
        })
    }

    clearMarks() {

        let marks = this.editor.getAllMarks();

        marks.forEach(mark => mark.clear())
    }

    render() {
        return (
            <div className="code-mirror-wrapper">
                <div id="code-mirror-node"/>
            </div>
        )
    }

}

export default CodeMirrorWrapper;