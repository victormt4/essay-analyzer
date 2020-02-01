import React from 'react';
import {Input, Icon} from "antd";
import './App.css';

function App() {
    return (
        <>
            <header className="header">Essay Analyzer</header>
            <main className="content">
                <div className="container">
                    <div className="input-text-container">
                        <Input.TextArea/>
                    </div>
                </div>
            </main>
            <footer className="footer"><a href="https://github.com/victormt4/essay-analyzer" target="_blank"><Icon type="github"/> Repo</a>
            </footer>
        </>
    );
}

export default App;
