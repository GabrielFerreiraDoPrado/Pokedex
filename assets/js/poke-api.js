const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon();
    
    let num = pokeDetail.id;
    if (num < 10) {
        pokemon.number = '00' + num;
    } else if (num < 100) {
        pokemon.number = '0' + num;
    } else {
        pokemon.number = num;
    }
    
    pokemon.name = pokeDetail.name;

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;
    pokemon.types = types;
    pokemon.type = type;

    if(num < 650) {
        pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;
    } else {
        pokemon.photo = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png`;
    }

    return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
           .then((response) => response.json())
           .then(convertPokeApiDetailToPokemon);
}

pokeApi.getPokemons = (offset, limit) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonDetails) => pokemonDetails)
    .catch((error) => console.error(error));
}
