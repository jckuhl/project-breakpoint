(function() {

    'use strict';

    const cards = Array.from(document.querySelectorAll('.cardholder .card'));
    const logos = document.querySelectorAll('.techstack figure');
    const cardholder = document.querySelector('.cardholder');

    // returns an array of cards matching the selected technology
    function filterByTech(tech) {
        return cards.filter( (card)=> card.dataset.tech.split(' ').includes(tech) );
    }

    // create the div elements for the cards
    function createCards(card) {
        const art = document.createElement('article');
        art.classList.add('card');
        art.innerHTML = card.innerHTML;
        cardholder.appendChild(art);
    }

    // display either all of the cards, or the filtered array of cards
    function displayTech(tech) {
        cardholder.innerHTML = '';
        if(tech === 'all') { 
            cards.forEach( (card)=> createCards(card) );
        } else {
            filterByTech(tech).forEach( (card)=> createCards(card) );
        }
    }

    // add event listeners to the images in the tech filter
    logos.forEach( (logo)=> logo.addEventListener('click', ()=> {
        const logoImg = logo.children[0];
        const technology = logo.dataset.tech;
        if(logoImg.classList.contains('deselected')) {
            // select the technology
            logoImg.classList.remove('deselected');
            logoImg.classList.add('selected');
            logos.forEach( (logo)=> {
                // remove the selected class from any previously select technology
                if(event.target.closest('figure').dataset.tech != logo.dataset.tech) {
                    //console.log(tech.children);
                    logo.children[0].classList.remove('selected');
                    logo.children[0].classList.add('deselected');
                }
            });
            displayTech(technology);
        } else {
            logoImg.classList.remove('selected');
            logoImg.classList.add('deselected');
            displayTech('all');
        }
    }));

})();