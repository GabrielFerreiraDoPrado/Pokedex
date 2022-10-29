const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const gen1 = document.getElementById('gen1');
const gen2 = document.getElementById('gen2');
const gen3 = document.getElementById('gen3');
const gen4 = document.getElementById('gen4');
const gen5 = document.getElementById('gen5');
const gen6 = document.getElementById('gen6');
const gen7 = document.getElementById('gen7');
const gen8 = document.getElementById('gen8');
let isButtonAlive = true;

const limit = 12;
let offset = 0;
let maxRecords = 151;

function setButtonsDefaultColor() {
    loadMoreButton.style.backgroundColor= '#6c69db';
    loadMoreButton.textContent = 'Load More';
    gen1.style.backgroundColor= '#6c69db';
    gen2.style.backgroundColor= '#6c69db';
    gen3.style.backgroundColor= '#6c69db';
    gen4.style.backgroundColor= '#6c69db';
    gen5.style.backgroundColor= '#6c69db';
    gen6.style.backgroundColor= '#6c69db';
    gen7.style.backgroundColor= '#6c69db';
    gen8.style.backgroundColor= '#6c69db';
}

function convertPokemonToLi(pokemon) {
    return `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" 
                        alt="${pokemon.name}">
                </div>
                
            </li>
            `;
    }

function loadPokemonItems(offset, limit) {
    
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    
        pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');
    
    });
}

function reloadPokemonItems(offset, limit) {
    
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    
        pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('');
    
    });
}

loadPokemonItems(offset, limit);
gen1.style.backgroundColor = '#2e2c67';



loadMoreButton.addEventListener('click', () => {
    offset += limit;

    const qtdRecordNextPage = offset + limit;

    if(qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItems(offset, newLimit);

        loadMoreButton.style.backgroundColor = '#fff';
        loadMoreButton.textContent = '';
    } else {
        loadPokemonItems(offset, limit);
    } 
});

gen1.addEventListener('click',() => {
    if (maxRecords !== 151) {
    setButtonsDefaultColor();
    gen1.style.backgroundColor = '#2e2c67';
    offset = 0;
    maxRecords = 151;
    reloadPokemonItems(offset, limit);
    loadMoreButton.parentElement.appendChild(loadMoreButton);
    }
});

gen2.addEventListener('click',() => {
    if (maxRecords !== 251) {
    setButtonsDefaultColor();
    gen2.style.backgroundColor = '#2e2c67';
    offset = 151;
    maxRecords = 251;
    reloadPokemonItems(offset, limit);
    loadMoreButton.parentElement.appendChild(loadMoreButton);
    }
});

gen3.addEventListener('click',() => {
    if (maxRecords !== 386) {
    setButtonsDefaultColor();
    gen3.style.backgroundColor = '#2e2c67';
    offset = 251;
    maxRecords = 386;
    reloadPokemonItems(offset, limit);
    loadMoreButton.parentElement.appendChild(loadMoreButton);
    }
});

gen4.addEventListener('click',() => {
    if (maxRecords !== 493) {
    setButtonsDefaultColor();
    gen4.style.backgroundColor = '#2e2c67';
    offset = 386;
    maxRecords = 493;
    reloadPokemonItems(offset, limit);
    loadMoreButton.parentElement.appendChild(loadMoreButton);
    }
});

gen5.addEventListener('click',() => {
    if (maxRecords !== 649) {
    setButtonsDefaultColor();
    gen5.style.backgroundColor = '#2e2c67';
    offset = 493;
    maxRecords = 649;
    reloadPokemonItems(offset, limit);
    loadMoreButton.parentElement.appendChild(loadMoreButton);
    }
});

gen6.addEventListener('click',() => {
    if (maxRecords !== 721) {
    setButtonsDefaultColor();
    gen6.style.backgroundColor = '#2e2c67';
    offset = 649;
    maxRecords = 721;
    reloadPokemonItems(offset, limit);
    loadMoreButton.parentElement.appendChild(loadMoreButton);
    }
});

gen7.addEventListener('click',() => {
    if (maxRecords !== 809) {
    setButtonsDefaultColor();
    gen7.style.backgroundColor = '#2e2c67';
    offset = 721;
    maxRecords = 809;
    reloadPokemonItems(offset, limit);
    loadMoreButton.parentElement.appendChild(loadMoreButton);
    }
});

gen8.addEventListener('click',() => {
    if (maxRecords !== 905) {
    setButtonsDefaultColor();
    gen8.style.backgroundColor = '#2e2c67';
    offset = 809;
    maxRecords = 905;
    reloadPokemonItems(offset, limit);
    loadMoreButton.parentElement.appendChild(loadMoreButton);
    }
});