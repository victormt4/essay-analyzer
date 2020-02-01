import React from "react";
import {Input, Button} from "antd";
import './TextInput.css';

export default function TextInput(props) {



    const inputRef = React.useRef(null);

    function getHighlightedText() {

        let highlightedText = props.text;

        props.words.forEach(word => {

            let regex = new RegExp(`${word.value}(?=[\\s.;])`, 'gi');

            highlightedText = highlightedText.replace(regex, `<mark class="mark" data-word-value="${word.value}">${word.value}</mark>`)
        });

        return {__html: highlightedText};
    }

    function showSynonyms(word) {

        // fetch(`https://www.sinonimos.com.br/${word}/`).then(
        //     res => {
        //         console.log(res)
        //     }
        // );

    }

    return (<>
        <div className="text-input-header-container">
            <span className="text-input-header">Cole um texto aqui</span>
            <Button size="small" onClick={() => props.processText('')}>Limpar</Button>
        </div>
        <div className="input-text-container">
            {props.enableHighlights && <div onClick={event => {

                if (event.target.tagName.toUpperCase() === 'MARK') showSynonyms(event.target.getAttribute('data-word-value'));
                else inputRef.current.focus()

            }} id="input-text-highlight-container" dangerouslySetInnerHTML={getHighlightedText()}/>}
            <Input.TextArea ref={inputRef} value={props.text} className="input-text"
                            onChange={event => props.processText(event.target.value, event)} autoSize={true}/>
        </div>
    </>)
}