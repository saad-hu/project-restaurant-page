//this module exports a function which appends home tab elements, to the container given to it as an argument

import steakGif from './images/steak.gif';

//this function takes a container as an argument. all the elements created in the function, will be appended to this container 
function createHomeTab(container) {
    //refernce to home tab. this is the container in which all fo the sub elements will be appended to, such as paragraphs, images etc 
    let homeTab = document.createElement('div');
    homeTab.classList.add('home-tab');

    //first para in home tab
    let homeIntroPara = document.createElement('p');
    homeIntroPara.classList.add('home-intro-para');
    homeIntroPara.textContent = 'Bistecca brings you the ultimate world of flavors. A fine dining restaurant with excellent food, great ambience and exceptional service. Order your favorite dish online from Bistecca and witness the best gourmet experience.'
    homeTab.appendChild(homeIntroPara);

    //image for home tab
    let homeGif = new Image();
    homeGif.classList.add('home-steak-gif');
    homeGif.src = steakGif;
    homeTab.appendChild(homeGif);

    //second para in home tab
    let homeSincePara = document.createElement('p');
    homeSincePara.textContent = 'Serving the best steaks in town since 1980';
    homeTab.appendChild(homeSincePara);

    //appending the homeTab to the container taken as an input parameter
    container.appendChild(homeTab);
}

export default createHomeTab;