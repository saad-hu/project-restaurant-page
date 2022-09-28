/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/

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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5sZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbi8vY3JlYXRpbmcgaGVhZGVyIGVsZW1lbnRcbmxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbmhlYWRlci5jbGFzc05hbWUgPSAnaGVhZGVyJztcblxuLy9jcmVhdGluZyBoZWFkaW5nIGVsZW1lbnQgYW5kIGFwcGVuZGluZyBpdCB0byBoZWFkZXJcbmxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5oZWFkaW5nLmNsYXNzTmFtZSA9ICdoZWFkaW5nJztcbmhlYWRpbmcudGV4dENvbnRlbnQgPSAnQmlzdGVjY2EnXG5oZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbi8vY3JlYXRpbmcgbmF2aWdhdGlvbiBlbGVtZW50XG5sZXQgbmF2aWdhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5uYXZpZ2F0aW9uLmNsYXNzTmFtZSA9ICduYXZpZ2F0aW9uIG9wdGlvbnMnO1xuLy90aGlzIGFkZHMgaXRlbXMgdG8gdGhlIHRoZSBuYXZpZ2F0aW9uIG1lbnVcbmZvcihsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICBsZXQgbmF2SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbmF2SXRlbS5jbGFzc05hbWUgPSAnbmF2LWl0ZW0nO1xuICAgIC8vZ2l2aW5nIHRleHQgdG8gZWFjaCBpdGVtIGFjY29yZGluZyB0byBpXG4gICAgc3dpdGNoKGkpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgbmF2SXRlbS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBuYXZJdGVtLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIG5hdkl0ZW0udGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgbmF2aWdhdGlvbi5hcHBlbmRDaGlsZChuYXZJdGVtKTtcbn1cbi8vYXBwZW5kaW5nIG5hdmlnYXRpb24gdG8gaGVhZGVyXG5oZWFkZXIuYXBwZW5kQ2hpbGQobmF2aWdhdGlvbik7XG5cblxuXG5cbmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==