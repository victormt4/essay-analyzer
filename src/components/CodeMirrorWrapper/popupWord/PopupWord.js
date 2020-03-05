import './PopupWord.css';

const PopupWord = {

    createNode: function (marker) {

        let div = document.createElement('div');
        div.id = 'container-popup-word';
        div.innerText = marker.word.value;
        div.style.position = 'absolute';
        div.classList.add('popup-word');

        div.addEventListener('click', function () {
            this.remove();
        });

        return div;
    }

};
export default PopupWord;