const hideBtn = document.getElementById('hideBtn');
const nav = document.querySelectorAll('nav .card');
const sidebar = document.querySelectorAll('aside .card');
const centerCards = document.querySelectorAll('section .card');
const section = document.querySelector('section');

function toggleOpen() {
    nav.forEach((card)=> card.classList.toggle('activeleft'));
    sidebar.forEach((card)=> card.classList.toggle('activeright'));
    section.classList.toggle('activeCenter');
    centerCards.forEach((card)=> card.classList.toggle('activeCenter'));
}

hideBtn.addEventListener('click', toggleOpen);