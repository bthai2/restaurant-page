import generateElement from './generateElement.js';

export default function header(activeBtn) {
    let h = generateElement('header', '', '');

    let name = generateElement('h1', 'name', 'Cafe Bean');
    h.appendChild(name);

    let nav = generateElement('nav', '', '');

    let homeBtn = generateElement('button', 'nav-btn', 'Home');
    homeBtn.id = 'nav-home';
    

    let menuBtn = generateElement('button', 'nav-btn', 'Menu');
    menuBtn.id = 'nav-menu';
    

    let aboutBtn = generateElement('button', 'nav-btn', 'About');
    aboutBtn.id = 'nav-about';

    if(activeBtn === 'home'){
        homeBtn.classList.add('active');
    } else if(activeBtn === 'menu'){
        menuBtn.classList.add('active');
    } else {
        aboutBtn.classList.add('active');
    }
    
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(aboutBtn);
    h.appendChild(nav);
    
    return h;
}