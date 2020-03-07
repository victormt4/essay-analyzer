import React from "react";
import './SynonymsSelector.css';

export default function SynonymsSelector(props) {

    const [state, setState] = React.useState({
        requestStatus: -1,
        synonyms: []
    });

    React.useEffect(() => {

        setState(prevState => ({...prevState, requestStatus: 1}));

        let request = fetch(`https://cors-anywhere.herokuapp.com/https://www.sinonimos.com.br/${props.word.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`, {
            method: 'GET',
            headers: {'x-requested-with': 'xmlhttprequest', 'Content-Type': 'text/plain; charset=ISO-8859-1'}
        });

        request
            .then(res => res.text())
            .then(html => {

                let el = document.createElement('div');

                el.innerHTML = html;

                let synonyms = el.querySelectorAll('.s-wrapper .sinonimos a');

                let words = [];

                synonyms.forEach(synonym => {

                    words.push(synonym.innerText);
                });

                setState(prevState => ({...prevState, synonyms: words, requestStatus: 200}))

            }).catch(error => console.log(error))

    }, [props.word]);

    return (<div className="synonyms-selector">
        {!props.hideTitle && <span className="synonyms-selector-title">{props.word}</span>}
        <div className="synonyms-container">
            {state.requestStatus === 200
                ? state.synonyms.slice(0, 10).map(synonym => <span key={synonym} onClick={() => props.replaceWord(synonym)} >{synonym}</span>)
                : <span>carregando...</span>
            }
        </div>
    </div>)
}