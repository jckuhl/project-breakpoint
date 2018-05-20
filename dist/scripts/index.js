(function() {

    'use strict';

    const cards = Array.from(document.querySelectorAll('.cardholder .card'));
    const logos = document.querySelectorAll('.techstack figure');
    const cardholder = document.querySelector('.cardholder');
    const typeSelect = document.getElementById('typeSelect');
    let type = 'any';

    // returns an array of cards matching the selected technology
    function filterByTech(tech) {
        const filtered = cards.filter( (card)=> card.dataset.tech.split(' ').includes(tech) );
        if(type != 'any') {
            return filtered.filter( (card)=> card.dataset.tech.split(' ').includes(type) );
        }
        return filtered;
    }

    // create the div elements for the cards
    function createCards(cardHTML) {
        const art = document.createElement('article');
        art.classList.add('card');
        art.innerHTML = cardHTML;
        cardholder.appendChild(art);
    }

    // display either all of the cards, or the filtered array of cards
    function displayTech(tech) {
        cardholder.innerHTML = '';
        if(tech === 'all') { 
            cards.forEach( (card)=> createCards(card.innerHTML) );
        } else {
            const filtered = filterByTech(tech);
            if(filtered.length) {
                filtered.forEach( (card)=> createCards(card.innerHTML) );
            } else {
                const cardHTML = `
                    <h2>No matches</h2>
                    <br>
                    <p>Sorry, nothing was found that matched your filter.</p>`;
                typeSelect.value = 'any';
                createCards(cardHTML);
            }
        }
    }

    function choseTech(logo) {
        const logoImg = logo.children[0];
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
            displayTech(logo.dataset.tech);
        } else {
            logoImg.classList.remove('selected');
            logoImg.classList.add('deselected');
            displayTech('all');
        }
    }

    // add event listeners to the images in the tech filter
    logos.forEach( (logo)=> logo.addEventListener('click', ()=> {
        choseTech(logo);
    }));

    // add change event listener to the type selector
    typeSelect.addEventListener('change', ()=> {
        type = typeSelect.value;
        const imgs = Array.from(document.querySelectorAll('.techstack img'));
        // grab the only selected image
        const selected = imgs.filter( (img)=> img.classList.contains('selected'))[0];
        if(selected) {
            displayTech(selected.closest('figure').dataset.tech);
        }
    });

})();