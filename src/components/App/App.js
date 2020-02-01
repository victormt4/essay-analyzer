import React from 'react';
import {Input, Icon, Switch} from "antd";
import './App.css';
import WordCount from "../WordCount/WordCount";

function App() {

    const [text, setText] = React.useState('');
    const [words, setWords] = React.useState([]);

    function processText(e) {

        const text = e.target.value;
        setText(text);

        let textArray = text.split(' ');

        let wordsCount = [];

        textArray.forEach(word => {

            if (word.length >= 3) {

                let wordCount = wordsCount.find(wordObject => wordObject.value === word.toLowerCase());

                if (wordCount) wordCount.count = wordCount.count + 1;
                else wordsCount.push({value: word.toLowerCase(), count: 1});
            }
        });

        setWords(wordsCount.filter(word => word.count > 2));
    }

    function getHighlightedText() {

        let highlightedText = text;

        words.forEach(word => {

            let regex = new RegExp(`${word.value}(?=[\\s.;])`, 'gi');

            highlightedText = highlightedText.replace(regex, `<mark class="mark">${word.value}</mark>`)
        });

        return {__html: highlightedText};
    }

    function toggleNightMode(enable) {

        let body = document.querySelector('body');

        if (enable) body.classList.add('dark-mode');
        else body.classList.remove('dark-mode')
    }

    return (
        <>
            <header className="header">
                <h1><Icon type="form"/> Essay Analyzer</h1>
                <div className="toggle-dark-mode-container">
                    <Switch
                        checkedChildren={<Icon type="bulb" theme="filled"/>}
                        unCheckedChildren={<Icon type="bulb"/>}
                        onChange={toggleNightMode}
                    /></div>
            </header>
            <main className="content">
                <aside className="aside"/>
                <div className="container">
                    <span className="container-subtitle">Cole um texto aqui</span>
                    <div className="input-text-container">
                        <div id="input-text-highlight-container" dangerouslySetInnerHTML={getHighlightedText()} />
                        <Input.TextArea className="input-text" onChange={processText} autoSize={true} />
                    </div>
                </div>
                <aside className="aside">
                    <WordCount words={words}/>
                </aside>
            </main>
            <footer className="footer">
                <a href="https://github.com/victormt4/essay-analyzer" target="_blank" rel="noopener noreferrer"><Icon type="github"/></a>
                <a href="mailto:victor.mt4@gmail.com"><Icon type="mail" theme="filled" /></a>
                <a href="https://www.linkedin.com/in/victor-mota-a01b8714a/" target="_blank" rel="noopener noreferrer"><Icon type="linkedin" theme="filled" /></a>
            </footer>
        </>
    );
}

export default App;
