import React, { useState, useEffect } from 'react';

const fetchPokemonAPI = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const result = await response.json();
  return result.results;
};

function PokemonList({ setMode, setSelectedPokemon }) {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemonAPI();
      setPokemonList(data);
    };

    fetchData();
  }, []);

  const handleCreatePokemonClick = () => {
    setMode('createPokemon');
  };

  const handleListItemClick = (pokemon) => {
    setSelectedPokemon(pokemon); // Set the selected Pokemon
    setMode('singlePokemon');
  };

  return (
    <>
      <h1>PokemonList Component</h1>
      <button onClick={handleCreatePokemonClick}>Create a Pokemon</button>
      <p>List of Pokemon:</p>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index} onClick={() => handleListItemClick(pokemon)}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  );
}

export default PokemonList;
