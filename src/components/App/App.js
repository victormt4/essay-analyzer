import React from 'react';
import {Input, Icon, Switch} from "antd";
import './App.css';
import WordCount from "../WordCount/WordCount";

function App() {

    const [words, setWords] = React.useState([]);
    const [nightMode, setNightMode] = React.useState(false);

    function processText(e) {

        const text = e.target.value;

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
                <div className="container">
                    <div className="input-text-container">
                        <Input.TextArea className="input-text" onChange={processText} autoSize={true}/>
                    </div>
                    <aside className="aside">
                        <WordCount words={words}/>
                    </aside>
                </div>
            </main>
            <footer className="footer"><a href="https://github.com/victormt4/essay-analyzer" target="_blank"
                                          rel="noopener noreferrer"><Icon type="github"/> Repo</a>
            </footer>
        </>
    );
}

export default App;
