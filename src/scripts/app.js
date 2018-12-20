const hamburger = require('./common/hamburger');
const menu = require('./common/menu');

if (document.querySelector('.header')) {
    hamburger();
    menu();
}
