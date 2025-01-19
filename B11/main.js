const pokemon=[
    {
        name:"Bulbasaur",
        src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    {
        name:"Ivysaur",
        src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
    },
    {
        name:"Venusaur",
        src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
    },
    {
        name:"Charmander",
        src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    {
        name:"Charmeleon",
        src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
    },
    {
        name:"Charizard",
        src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
    },
    {
        name:"Caterpie",
        src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
    },
    {
        name:"Metapod",
        src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
    },
    {
        name:"Butterfree",
        src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
    },
    {
        name:"Ekans",
        src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png"
    },
    {
        name:"Arbok",
        src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"
    }
]

function handle(event){
    event.preventDefault();
    const number = document.getElementById("num").value;
    if(number >= 1 && number < 1000){
        for(let i = 0; i < number; i++){
            displayPokemon();
        }
        console.log((document.getElementById("num")).value)
    }
    else{
        console.warn("error");
    }
}
let current = 0
var pokemonInfo = ''; 
const numOfPokemon = 11
function displayPokemon(){
    
        pokemonInfo += `
            <container>
                <h2 style="text-align: center;">${pokemon[current].name}</h2>
                <img src="${pokemon[current].src}" alt="${pokemon[current].name}">
            </container>
        `;

    // Insert the HTML content into the 'pokemonInfo' div
    document.getElementById("pokemonInfo").innerHTML = pokemonInfo;
    current = (++current) % numOfPokemon;
}

var intervalID

function intervalID() {
    intervalID = setInterval(displayPokemon, 1000);  
}

function stopInterval(){
    clearInterval(intervalID);
}

