export const carregarPokemons = () =>
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=200").then((res) => res.json())