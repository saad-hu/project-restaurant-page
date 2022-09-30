//this module exports a function which appends contact tab elements, to the container given to it as an argument

import phoneImg from './images/telephone-128x128.png';
import addressImg from './images/address-128x128.png';

function createContactTab(container) {
    //refernce to contact tab. this is the container in which all fo the contact items will be appended to.
    let contactTab = document.createElement('div');
    contactTab.classList.add('contact-tab');

    //container for phone number
    let phoneNumberContainer = document.createElement('div');
    phoneNumberContainer.className = 'phone-number contact-info';
    //creating and appending image for phone number container
    let phoneImage = new Image();
    phoneImage.src = phoneImg;
    phoneNumberContainer.appendChild(phoneImage);
    //creating and appending the phone number itself to phone number container
    let phoneNumber = document.createElement('p');
    phoneNumber.textContent = '123-456789';
    phoneNumberContainer.appendChild(phoneNumber);
    //appending the phoneNumberContainer to the contact tab
    contactTab.appendChild(phoneNumberContainer);


    //container for address
    let addressContainer = document.createElement('div');
    addressContainer.className = 'address contact-info';
    //creating and appending image for address container
    let addressImage = new Image();
    addressImage.src = addressImg;
    addressContainer.appendChild(addressImage);
    //creating and appending the address itself to address container
    let address = document.createElement('p');
    address.textContent = 'Fourth Ave, San Diego, United States';
    addressContainer.appendChild(address);
    //appending the addressContainer to the contact tab
    contactTab.appendChild(addressContainer);

    //appedning the complete contact tab to the container taken as an argument
    container.appendChild(contactTab);
}

export default createContactTab;