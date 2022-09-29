import './style.css';
import createHomeTab from './home.js';

//reference to body. body will have three elements appended to it: .header, .main-container, .footer
let body = document.querySelector('body');

//creating header element
let header = document.createElement('header');
header.className = 'header';

//creating heading element and appending it to header
let heading = document.createElement('div');
heading.className = 'heading';
heading.textContent = 'Bistecca'
header.appendChild(heading);

//creating navigation element
let navigation = document.createElement('ul');
navigation.className = 'navigation options';
//this adds items to the the navigation menu
for(let i = 0; i < 3; i++) {
    let navItem = document.createElement('li');
    //giving text to each item according to i
    switch(i) {
        case 0:
            navItem.textContent = 'Home';
            navItem.className = 'nav-item home-tab-button';
            break;
        case 1:
            navItem.textContent = 'Menu';
            navItem.className = 'nav-item menu-tab-button';
            break;
        case 2:
            navItem.textContent = 'Contact';
            navItem.className = 'nav-item contact-tab-button';
            break;
    }
    navigation.appendChild(navItem);
}
//appending navigation to header
header.appendChild(navigation);

//appending header to body
body.appendChild(header);






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








let footer = document.createElement('footer');
footer.className = 'footer';
footer.innerHTML = 'Copyright <a href="https://github.com/saad-hu">saad-hu</a>';
body.appendChild(footer);