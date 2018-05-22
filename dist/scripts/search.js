const searchBtn = document.querySelector('header button');
const searchBox = document.querySelector('header input[type="text"]');

function addMultipleListeners(element, handler, ...eventTypes) {
    eventTypes.forEach( event=> {
        element.addEventListener(event, handler);
    });
}

function toggleShadow() {
    searchBtn.classList.toggle('shadowed');
    searchBox.classList.toggle('shadowed');
}

addMultipleListeners(searchBtn, toggleShadow, 'mouseup', 'mousedown')