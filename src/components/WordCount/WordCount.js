import React from "react";
import './WordCount.css';

export default function WordCount(props) {

    if (props.words.length)

        return (<div className="word-count">
            {props.words.map(word => <div key={word.value} className="word-count-group">
                <span className="word-count-title">{word.value}</span>
                <span className="word-count-subtitle">{word.count} repetições</span>
            </div>)}
        </div>);

    else return null;
}