// import Alpine from 'alpinejs'
// window.Alpine = Alpine
// Alpine.start()
import createElement from '../../src/js/vDom/createElement';
import render from '../../src/js/vDom/render';
import build from '../../src/js/vDom/build';

let virtualDomElement = createElement('div', {
       attrs: {
              id: 'container'
       },
       children: [
              createElement('p', {
                     attrs: {
                            id:'text-vdom',
                     },
                     children: ['hello word from vdom js hola test fak test dom'],
              }),
       ]
});
let el = render(virtualDomElement);
let root = build(el, document.querySelector('#root'));