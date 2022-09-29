import './style.css';
import createHeaderFooter from './header-footer.js';
import createHomeTab from './home.js';
import createMenuTab from './menu.js';


//reference to body. body will have three elements appended to it: .header, .main-container, .footer
let body = document.querySelector('body');
//creating main container in which all of the tabs data will go
let mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');

//when the window loads, this block of code is run. header, home tab and footer are added to the dom
createHeaderFooter.createHeader(body);
//appending main container to body
body.appendChild(mainContainer);
createHomeTab(mainContainer);
createHeaderFooter.createFooter(body);


//reference to each menu tab's button
let homeTabButton = document.querySelector('.home-tab-button');
let menuTabButton = document.querySelector('.menu-tab-button');
let contactTabButton = document.querySelector('.contact-tab-button');
//a nodelist of reference of all nav-item buttons
let allNavButtons = document.querySelectorAll('.nav-item');


homeTabButton.addEventListener('click', () => {
    deleteChildren(mainContainer);
    createHomeTab(mainContainer);
    makeCurrentNavButtonActive(homeTabButton);
});

menuTabButton.addEventListener('click', () => {
    deleteChildren(mainContainer);
    createMenuTab(mainContainer);
    makeCurrentNavButtonActive(menuTabButton);
});









function makeCurrentNavButtonActive(currentNavButton) {
    allNavButtons.forEach(button => {
        if(button === currentNavButton) currentNavButton.classList.add('active');
        else button.classList.remove('active');
    })
}

function deleteChildren(parentContainer) {
    while (parentContainer.lastChild) {
        parentContainer.removeChild(parentContainer.lastChild);
    }
}