import './style.css';
import Icon from './latte.png';
import generateElement from './generateElement';

function header() {
    let h = generateElement('header', '', '');

    let name = generateElement('h1', 'name', 'Cafe Bean');
    h.appendChild(name);

    let nav = generateElement('nav', '', '');

    let homeBtn = generateElement('button', 'nav-btn active', 'Home');
    nav.appendChild(homeBtn);

    let menuBtn = generateElement('button', 'nav-btn', 'Menu');
    nav.appendChild(menuBtn);

    let aboutBtn = generateElement('button', 'nav-btn', 'About');
    nav.appendChild(aboutBtn);

    h.appendChild(nav);
    
    return h;
}

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
    div.appendChild(header());
    div.appendChild(home());
    return div;
}