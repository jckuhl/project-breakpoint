!function() {

    const cards = Array.from(document.querySelectorAll('.cardholder .card'));
    const techs = Array.from(document.querySelectorAll('.techstack img'));

    cards.forEach( (card)=> console.log(card.dataset.tech));

    function filterByTech(tech) {
        return cards.filter((card)=> card.dataset.tech.split(' ').includes(tech));
    }

    function displayTech(tech) {
        const cardholder = document.querySelector('.cardholder');
        cardholder.innerHTML = '';
        filterByTech(tech).forEach( (card)=> {
            let div = document.createElement('div');
            div.classList.add('card');
            div.innerHTML = card.innerHTML;
            cardholder.appendChild(div);
        });
    }

    techs.forEach( (tech)=> tech.addEventListener('click', ()=> {
        displayTech(tech.alt);
    }));

}();