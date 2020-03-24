import React from 'react';
import {Switch} from "antd";
import {BulbOutlined, BulbFilled, GithubOutlined, MailFilled, LinkedinFilled} from "@ant-design/icons";
import './App.css';
import WordCount from "../WordCount/WordCount";
import TextInput from "../TextInput/TextInput";
import SynonymsSelector from "../SynonymsSelector/SynonymsSelector";
import MediaQueries from "../../libs/MediaQueries";
import WordCountPopover from "../WordCountPopover/WordCountPopover";
import CodeMirrorWrapper from "../CodeMirrorWrapper/CodeMirrorWrapper";

function App() {

    const [text, setText] = React.useState('');
    const [words, setWords] = React.useState([]);
    const [word, setWord] = React.useState(null);
    const [enableHighlights, setEnableHighlights] = React.useState(false);
    const [desktopMode, setDesktopMode] = React.useState(MediaQueries.MD());

    function processText(value, e) {

        const inputText = typeof value === 'string' ? value : e.target.value;

        setText(inputText);

        if (inputText.length >= 120) {

            setEnableHighlights(true);

            let textArray = inputText.split(' ');

            let wordsCount = [];

            textArray.forEach(word => {

                if (word.length >= 3) {

                    let wordCount = wordsCount.find(wordObject => wordObject.value === word.toLowerCase());

                    if (wordCount) wordCount.count = wordCount.count + 1;
                    else wordsCount.push({value: word.toLowerCase(), count: 1});
                }
            });

            setWords(wordsCount.filter(word => word.count > 2));

        } else {

            setEnableHighlights(false);
            setWords([]);
            setWord(null);
        }
    }

    function toggleNightMode(enable) {

        let body = document.querySelector('body');

        if (enable) body.classList.add('dark-mode');
        else body.classList.remove('dark-mode')
    }

    //Criando evento para detecar resize da janela
    React.useEffect(() => {

        let resizeHandler = function (event) {

            setDesktopMode(MediaQueries.MD());
        };

        window.addEventListener('resize', resizeHandler);

        //Cleanup
        return () => window.removeEventListener('resize', resizeHandler);

    }, []);

    React.useEffect(() => {

        let handler = function (event) {

            let header = document.querySelector('.header');

            if (event.target.scrollTop >= 50)  header.classList.add('box-shadow');
            else  header.classList.remove('box-shadow');
        };

        document.body.addEventListener('scroll', handler);

        return () => document.body.removeEventListener('scroll', handler);

    });

    return <>
        <header className="header">
            <h1>eSSay</h1>
            <div className="toggle-dark-mode-container">
                <Switch
                    checkedChildren={<BulbFilled/>}
                    unCheckedChildren={<BulbOutlined/>}
                    onChange={toggleNightMode}
                /></div>
        </header>
        <main className="content">
            {desktopMode && <aside className="aside">
                {word !== null && <SynonymsSelector word={word}/>}
            </aside>}
            <div className="container">
                {!desktopMode && <WordCountPopover words={words}/>}
                {/*<TextInput*/}
                {/*    value={text}*/}
                {/*    words={words}*/}
                {/*    processText={processText}*/}
                {/*    enableHighlights={enableHighlights}*/}
                {/*    setWord={setWord}*/}
                {/*/>*/}
                <CodeMirrorWrapper
                    setWords={setWords}
                />
            </div>
            {desktopMode && <aside className="aside">
                {words.length > 0 && <WordCount words={words}/>}
            </aside>}
        </main>
        <footer className="footer">
            <a href="https://github.com/victormt4/essay-analyzer" target="_blank"
               rel="noopener noreferrer"><GithubOutlined/></a>
            <a href="mailto:victor.mt4@gmail.com"><MailFilled/></a>
            <a href="https://www.linkedin.com/in/victor-mota-a01b8714a/" target="_blank"
               rel="noopener noreferrer"><LinkedinFilled/></a>
        </footer>
    </>;
}

export default App;
