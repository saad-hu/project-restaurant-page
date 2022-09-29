//this module exports a class. the class has methods which takes body(or any container) as an arguments. the method adds header or footer element to the body

class createHeaderFooter {
    // constructor(body) {
    //     this.body = body;
    // }

    static createHeader(body) {

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
        for (let i = 0; i < 3; i++) {
            let navItem = document.createElement('li');
            //giving text to each item according to i
            switch (i) {
                case 0:
                    navItem.textContent = 'Home';
                    navItem.className = 'nav-item home-tab-button active';
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

        //appending complete header to body taken as argument
        body.appendChild(header);
    }

    static createFooter(body) {
        let footer = document.createElement('footer');
        footer.className = 'footer';
        footer.innerHTML = 'Copyright <a href="https://github.com/saad-hu">saad-hu</a>';
        //appending complete footer to body taken as argument
        body.appendChild(footer);
    }
}

export default createHeaderFooter;