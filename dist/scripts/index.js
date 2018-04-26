(function() {

    'use strict';

    const cards = Array.from(document.querySelectorAll('.cardholder .card'));
    const techs = document.querySelectorAll('.techstack figure');
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
    techs.forEach( (tech)=> tech.addEventListener('click', ()=> {
        const techImg = tech.children[0];
        if(techImg.classList.contains('deselected')) {
            // select the technology
            techImg.classList.remove('deselected');
            techImg.classList.add('selected');
            console.log(event.target.dataset.tech);
            techs.forEach( (tech)=> {
                // remove the selected class from any previously select technology
                if(event.target.dataset.tech != tech.dataset.tech) {
                    techImg.classList.remove('selected');
                    techImg.classList.add('deselected');
                }
            });
            displayTech(tech.dataset.tech);
        } else {
            techImg.classList.remove('selected');
            techImg.classList.add('deselected');
            displayTech('all');
        }
    }));

})();