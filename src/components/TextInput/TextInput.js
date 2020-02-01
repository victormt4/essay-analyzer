import React from "react";
import {Input} from "antd";
import './TextInput.css';

export default function TextInput(props) {

    function getHighlightedText() {

        let highlightedText = props.text;

        props.words.forEach(word => {

            let regex = new RegExp(`${word.value}(?=[\\s.;])`, 'gi');

            highlightedText = highlightedText.replace(regex, `<mark class="mark">${word.value}</mark>`)
        });

        return {__html: highlightedText};
    }

    return (<>
        <span className="container-subtitle">Cole um texto aqui</span>
        <div className="input-text-container">
            <div id="input-text-highlight-container" dangerouslySetInnerHTML={getHighlightedText()}/>
            <Input.TextArea className="input-text" onChange={props.processText} autoSize={true}/>
        </div>
    </>)
}