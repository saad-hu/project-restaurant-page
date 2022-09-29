import './style.css';
import createHomeTab from './home.js';
import createHeaderFooter from './header-footer.js';

//reference to body. body will have three elements appended to it: .header, .main-container, .footer
let body = document.querySelector('body');


createHeaderFooter.createHeader(body);




//creating main container in which all of the tabs data will go
let mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
//refernce to each tab's button
let homeTabButton = document.querySelector('.home-tab-button');
let menuTabButton = document.querySelector('.menu-tab-button');
let contactTabButton = document.querySelector('.contact-tab-button');
//appending main container to body
body.appendChild(mainContainer);



createHomeTab(mainContainer);



createHeaderFooter.createFooter(body);