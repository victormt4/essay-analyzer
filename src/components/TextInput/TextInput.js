import React from "react";
import {Input, Button} from "antd";
import './TextInput.css';
import image from '../../empty_image.svg'

export default function TextInput(props) {

    const inputRef = React.useRef(null);

    function getHighlightedText() {

        let highlightedText = props.value;

        props.words.forEach(word => {

            let regex = new RegExp(`${word.value}(?=[\\s.;])`, 'gi');

            highlightedText = highlightedText.replace(regex, `<mark class="mark" data-word-value="${word.value}">${word.value}</mark>`)
        });

        return {__html: highlightedText};
    }

    return (<>
        <div className="input-text-container">
            {props.enableHighlights && <div onClick={event => {

                if (event.target.tagName.toUpperCase() === 'MARK') props.setWord(event.target.getAttribute('data-word-value'));
                else inputRef.current.focus()

            }} id="input-text-highlight-container" dangerouslySetInnerHTML={getHighlightedText()}/>}
            <Input.TextArea ref={inputRef} value={props.value} className="input-text"
                            onChange={event => props.processText(event.target.value, event)} autoSize={true}/>
            {props.value.length === 0 && <div className="image-container">
                <img src={image} alt="Vazio"/>
                <span>Não encontrei nenhum texto, que tal escrever algo? Mínimo de 120 caracteres</span>
            </div>}
        </div>
    </>)
}