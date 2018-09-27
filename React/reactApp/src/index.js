import './styles/global.css'
import icon from  './img/dog.png'

let img = new Image();
img.src = icon;

let el = document.createElement('h1');
el.innerText = "hello React --TM";
document.body.appendChild(el);
document.body.appendChild(img);