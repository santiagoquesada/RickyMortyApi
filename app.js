const URL = "https://rickandmortyapi.com/api/character";

const imgChar = document.getElementById("img-card");
const nameChar = document.getElementById("name-card");
const speciesChar = document.getElementById("species");
const gender = document.getElementById("gender-card");
const origin = document.getElementById("origin");
const button = document.getElementById("button");

button.addEventListener("click", getApi);

function getApi() {
    fetch(URL)
    .then(response => response.json())
    .then(data => data["results"].map(results => {

        const img = document.createElement("img");
        img.src = results["image"];
        img.classList.add("image");

        const name = document.createElement("p");
        name.textContent = results["name"];
        name.classList.add("name");

        const species = document.createElement("p");
        species.textContent = results["species"];
        species.classList.add("species");

        const origin = document.createElement("p");
        origin.textContent = results["origin"].name;
        origin.classList.add("origin");

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(species);
        card.appendChild(origin);


    }))
}



// (imgChar.src = data.results[0].image, 
//     nameChar.textContent = data.results[0].name, 
//     speciesChar.textContent = data.results[0].species,  
//     origin.textContent = data.results[0].origin.name,  
//     gender.textContent = data.results[0].gender)