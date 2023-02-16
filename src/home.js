import './style.css';
import Icon from './latte.png';
import generateElement from './generateElement.js';
import makeHeader from './makeHeader.js';


function home() {
    // let mainDiv = generateElement('div', 'main', '');
    let h = generateElement('div', 'home', '');
    h.id = 'main';
    
    let welcome = generateElement('p', '', 'Welcome');
    h.appendChild(welcome);

    let desc = generateElement('p', '', 'To the best coffee shop in town');
    h.appendChild(desc);

    let img = new Image();
    img.classList.add('round');
    img.src = Icon;
    img.alt = 'latte';
    h.appendChild(img);

    let outro = generateElement('p', '', 'Order online or visit us today!');
    h.appendChild(outro);

    return h;
}

export default function homePage() {
    let div = document.createElement('div');
    div.id = 'content';
    div.appendChild(makeHeader('home'));
    div.appendChild(home());
    return div;
}