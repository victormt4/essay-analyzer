import React from "react";
import './SynonymsSelector.css';

export default function SynonymsSelector(props) {

    const [state, setState] = React.useState({
        requestStatus: -1,
        synonyms: []
    });

    React.useEffect(() => {

        setState(prevState => ({...prevState, requestStatus: 1}));

        let apiUrl = process.env.REACT_APP_API_URL;

        let request = fetch(`${apiUrl}/synonyms/${props.word.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`, {
            method: 'GET'
        });

        request
            .then(res => res.json())
            .then(words => {

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