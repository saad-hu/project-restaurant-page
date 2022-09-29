import './style.css';
import createHomeTab from './home.js';
import createHeaderFooter from './header-footer.js';
import menuData from './menu-data.json';





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

    // createHomeTab(mainContainer);
    // deleteChildren(mainContainer);
});




let menuTab = document.createElement('div');
menuTab.classList.add('menu-tab');

console.log(menuData);


for (let i = 0; i < menuData.length; i++) {
    let menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    let name = document.createElement('p');
    name.classList.add('menu-name');
    name.textContent = menuData[i].name;
    menuItem.appendChild(name);

    let menuImg = require(`./images/steak-menu-${i}.jpg`);
    let img = new Image();
    img.classList.add('menu-img');
    img.src = menuImg;
    menuItem.appendChild(img);

    let price = document.createElement('p');
    price.classList.add('menu-price');
    price.textContent = `$${menuData[i].price}`;
    menuItem.appendChild(price);

    menuTab.appendChild(menuItem);
}

console.log(menuTab);
mainContainer.appendChild(menuTab);








//refernce to each tab's button
let homeTabButton = document.querySelector('.home-tab-button');
let menuTabButton = document.querySelector('.menu-tab-button');
let contactTabButton = document.querySelector('.contact-tab-button');


function deleteChildren(parentContainer) {
    while(parentContainer.lastChild) {
        parentContainer.removeChild(parentContainer.lastChild);
    }
}