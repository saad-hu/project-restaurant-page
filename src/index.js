import './style.css';

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
    navItem.className = 'nav-item';
    //giving text to each item according to i
    switch(i) {
        case 0:
            navItem.textContent = 'Home';
            break;
        case 1:
            navItem.textContent = 'Menu';
            break;
        case 2:
            navItem.textContent = 'Contact';
            break;
    }
    navigation.appendChild(navItem);
}
//appending navigation to header
header.appendChild(navigation);

body.appendChild(header);
