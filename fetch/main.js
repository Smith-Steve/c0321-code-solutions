const initParameters = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
}; const urlUsers = 'https://jsonplaceholder.typicode.com/users';

fetch(urlUsers, initParameters)
  .then(response => response.json())
  .then(data => console.log(data));

const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/150';

fetch(urlPokemon, initParameters)
  .then(response => response.json())
  .then(mewTwo => {
    console.log('name: ', mewTwo.name);
  });
