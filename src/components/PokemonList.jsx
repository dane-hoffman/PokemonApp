import React, { useState, useEffect } from 'react';

const fetchPokemonAPI = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const result = await response.json();
  return result.results;
};

function PokemonList({ setMode }) {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemonAPI();
      setPokemonList(data);
    };

    fetchData();
  }, []);

  const handleBackClick = () => {
    setMode('createPokemon');
  };

  const handleListItemClick = () => {
    setMode('singlePokemon');
  };

  return (
    <>
      <h1>PokemonList Component</h1>
      <button onClick={handleBackClick}>Create a Pokemon</button>
      <p>List of Pokemon:</p>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index} onClick={() => handleListItemClick(setMode)}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  );
}

export default PokemonList;
