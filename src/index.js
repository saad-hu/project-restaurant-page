import './style.css';
import createHomeTab from './home.js';
import createHeaderFooter from './header-footer.js';
import createMenuTab from './menu.js';





//reference to body. body will have three elements appended to it: .header, .main-container, .footer
let body = document.querySelector('body');
//creating main container in which all of the tabs data will go
let mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');


window.addEventListener('load', () => {
    createHeaderFooter.createHeader(body);
    //appending main container to body
    body.appendChild(mainContainer);
    createHeaderFooter.createFooter(body);

    createHomeTab(mainContainer);
    // deleteChildren(mainContainer);
});


// createMenuTab(mainContainer);










//refernce to each tab's button
let homeTabButton = document.querySelector('.home-tab-button');
let menuTabButton = document.querySelector('.menu-tab-button');
let contactTabButton = document.querySelector('.contact-tab-button');


function deleteChildren(parentContainer) {
    while(parentContainer.lastChild) {
        parentContainer.removeChild(parentContainer.lastChild);
    }
}