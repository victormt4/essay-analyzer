import React from 'react';
import {Input, Icon} from "antd";
import './App.css';
import WordCount from "../WordCount/WordCount";

function App() {

    const [words, setWords] = React.useState([]);

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

    return (
        <>
            <header className="header"><Icon type="form"/> Essay Analyzer</header>
            <main className="content">
                <div className="container">
                    <div className="input-text-container">
                        <Input.TextArea className="input-text" onChange={processText} autoSize={true} />
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
