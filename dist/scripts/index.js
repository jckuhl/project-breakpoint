!function() {

    "use strict"

    const cards = Array.from(document.querySelectorAll('.cardholder .card'));
    const techs = Array.from(document.querySelectorAll('.techstack img'));
    const cardholder = document.querySelector('.cardholder');

    // cards.forEach( (card)=> console.log(card.dataset.tech));

    // returns an array of cards matching the selected technology
    function filterByTech(tech) {
        return cards.filter( (card)=> card.dataset.tech.split(' ').includes(tech) );
    }

    // create the div elements for the cards
    function createCards(card) {
        let div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = card.innerHTML;
        cardholder.appendChild(div);
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
        if(tech.classList.contains('deselected')) {
            // select the technology
            tech.classList.remove('deselected');
            tech.classList.add('selected');
            techs.forEach( (tech)=> {
                // remove the selected class from any previously select technology
                if(event.target.alt != tech.alt) {
                    tech.classList.remove('selected');
                    tech.classList.add('deselected');
                }
            });
            displayTech(tech.alt);
        } else {
            tech.classList.remove('selected');
            tech.classList.add('deselected');
            displayTech('all');
        }
    }));

}();