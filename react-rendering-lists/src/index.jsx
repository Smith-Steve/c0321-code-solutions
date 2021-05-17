import React from 'react';
import ReactDOM from 'react-dom';

function RenderPokemon(props) {
  const pokemonDictionary = props.pokedex;
  const pokemonDeployedToDOM = pokemonDictionary.map(pokemon =>
    <li key={pokemon.number}>{pokemon.name}</li>
  );
  return (
    <ul>{pokemonDeployedToDOM}</ul>
  );
}

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

ReactDOM.render(
  <RenderPokemon pokedex={pokedex} />,
  document.getElementById('root')
);
