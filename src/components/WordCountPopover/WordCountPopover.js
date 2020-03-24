import React from "react";
import {Popover, Button} from "antd";
import './WordCountPopover.css';

export default function WordCountPopover (props) {

    let content = (
        <div className="word-count-popover-content">
            { props.words.sort(((a, b) => {
                if (a.count < b.count) return 1;
                else if (a.count > b.count) return -1;
                else return 0;
            })).map(word => (<div key={word.value} className="word-count-group">
                <span className="word-count-popover-title">{word.value}</span>
                <span className="word-count-popover-subtitle">{word.count} repetições</span>
            </div>))}
        </div>
    );

    return (
        <div className="word-count-popover">
            <Popover content={content} trigger="click" placement="bottomRight">
                <Button shape="round" type="primary" >{props.words ? props.words.length : 0} palavras com repetições</Button>
            </Popover>
        </div>
    )

}