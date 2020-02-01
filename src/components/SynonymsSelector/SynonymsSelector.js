import React from "react";
import './SynonymsSelector.css';

export default function SynonymsSelector(props) {
    return (<div className="synonyms-selector">
        <span className="synonyms-selector-title">{props.word}</span>
    </div>)
}