import { getElement, createSetElement } from './util';
import createMenu from './components/menu';
import createMain from './components/mainbody';
import navbar from './components/navbar';
import './sass/main.scss';

const body = getElement('body');
const nav = navbar();
const menu = createMenu();
const mainBody = createMain();

const main = createSetElement('div', {
  class: 'main'
});

main.appendChild(menu);
main.appendChild(mainBody);

body.appendChild(nav);
body.appendChild(main);
// body.appendChild(menu)

console.log('Hello world');
