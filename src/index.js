import './style.css';
import Icon from './bsc.png';

function component() {
    const element = document.createElement('div');

    element.textContent = 'hello';
    element.classList.add('rojo');

    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());