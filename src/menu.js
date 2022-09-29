//importing the json file which contains details of each menu item
import menuData from './menu-data.json';

function createMenuTab(container) {
    //refernce to menu tab. this is the container in which all fo the menu items will be appended to.
    let menuTab = document.createElement('div');
    menuTab.classList.add('menu-tab');

    //looping thorugh the items provided in menu-data.json to create each menu item
    for (let i = 0; i < menuData.length; i++) {
        //each menu item will contain name,image and price
        let menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        //name is taken from menuData
        let name = document.createElement('p');
        name.classList.add('menu-name');
        name.textContent = menuData[i].name;
        menuItem.appendChild(name);

        //creating menu image. menuImg contains the reference to each image
        let menuImg = require(`./images/steak-menu-${i}.jpg`);
        let img = new Image();
        img.classList.add('menu-img');
        img.src = menuImg;
        menuItem.appendChild(img);

        //price is taken from menuData
        let price = document.createElement('p');
        price.classList.add('menu-price');
        price.textContent = `$${menuData[i].price}`;
        menuItem.appendChild(price);

        //appedning the current menuItem to the menuTab
        menuTab.appendChild(menuItem);
    }

    //finally appening the complete menuTab, which contains all the menuItems, to the container provided as an argument 
    container.appendChild(menuTab);
}

export default createMenuTab;