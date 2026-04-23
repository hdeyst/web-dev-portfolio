function fetchAboutMeData() {
    fetch('aboutMe.json')
        .then(response => response.json())
        .then(data => {
            const funfacts = document.getElementById("funFacts");
            data.forEach(topic => {
                const card = document.createElement("div");
                card.classList.add('funFactCard');

                card.innerHTML += `
                    <h3>${topic.title}</h3>
                    <ul>`
                for (let i = 0; i < topic.items.length; i++) {
                    card.innerHTML += `<li class="indent">${topic.items[i]}</li>`
                }
                card.innerHTML += `</ul>`
                console.log(card.innerHTML);
                funfacts.appendChild(card);
            })
        })
    }
let data = fetchAboutMeData();
console.log(data)
