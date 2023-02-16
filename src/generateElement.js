export default function generateElement(element, className, text) {
    let e = document.createElement(element);
    if(className != ''){
        for(let i of className.split(' ')){
            e.classList.add(i);
        }
    }
    e.textContent = text;
    return e;
}