
fetch('https://api.github.com/users/jckuhl/repos')
    .then(data => data.json())
    .then(data => {
        const cardHolder = document.querySelector('.cardholder');
        const cardData = data.filter(repo => !repo.fork && !repo.archived);
        cardData.forEach(repo => {
            const article = document.createElement('article');
            article.classList.add('card');
            article.innerHTML = `<h2>${repo.name.split('-').join(' ')}</h2>
                <p><a href="${repo.html_url}" target="_blank">Github</a></p>
                <p>${repo.description}</p>`;
            cardHolder.appendChild(article);
            fetch(repo.languages_url)
                .then(data => data.json())
                .then(data => {
                    console.log(data);
                })
                .catch(error=> console.error(error));
        });
    })
    .catch(error => console.error(data))

