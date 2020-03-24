import React from "react";
import './WordCount.css';

export default function WordCount(props) {

    return (<div className="word-count">
        {props.words.sort(((a, b) => {
            if (a.count < b.count) return 1;
            else if (a.count > b.count) return -1;
            else return 0;
        })).map(word => (<div key={`${word.value}_${word.count}${word.line ? `_${word.line}` : ''}`} className="word-count-group">
            <span className="word-count-title">{word.value}</span>
            <span className="word-count-subtitle">{word.count} repetições</span>
        </div>))}
    </div>);
}