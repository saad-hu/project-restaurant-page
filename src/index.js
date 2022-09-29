import './style.css';
import steakGif from './images/steak.gif';


//code for header starts here
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

//refernce to home tab
let homeTab = document.createElement('div');
homeTab.classList.add('home-tab');

let homeIntroPara = document.createElement('p');
homeIntroPara.classList.add('home-intro-para');

homeIntroPara.textContent = 'Bistecca brings you the ultimate world of flavors. A fine dining restaurant with excellent food, great ambience and exceptional service. Order your favorite dish online from Bistecca and witness the best gourmet experience.'

mainContainer.appendChild(homeIntroPara);


let homeGif = new Image();
homeGif.classList.add('home-steak-gif');
homeGif.src = steakGif;
mainContainer.appendChild(homeGif);


let homeSincePara = document.createElement('p');
homeSincePara.textContent = 'Serving the best steaks in town since 1980';
mainContainer.appendChild(homeSincePara);

//appending main container to body
body.appendChild(mainContainer);


let footer = document.createElement('footer');
footer.className = 'footer';
footer.innerHTML = 'Copyright <a href="https://github.com/saad-hu">saad-hu</a>';
body.appendChild(footer);