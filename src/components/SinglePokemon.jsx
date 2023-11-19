import React, { useState, useEffect } from 'react';


function SinglePokemon({ setMode, selectedPokemon }) {
  const [pokemonData, setPokemonData] = useState(null); // State to hold fetched data

  const fetchPokemonData = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon.name}`);
    const result = await response.json();
    console.log(result);
    return result; // Return the fetched data
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemonData(selectedPokemon);
      setPokemonData(data); // Update state with fetched data
    };

    fetchData();
  }, [selectedPokemon]);

  const handleBackClick = () => {
    setMode('pokemonList');
  };

  return (
    <>
      <h1>SinglePokemon Component</h1>
      <button onClick={handleBackClick}>Back</button>
      <div>
        {pokemonData && (
          <div>
            <h4>{pokemonData.name}</h4>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
            <h4>Type: {pokemonData.types[0].type.name}</h4>
            <ul>
            <h4>Stats:</h4>
    {pokemonData.stats.map((statData, index) => (
      <p key={index}>{statData.stat.name}:{statData.base_stat}</p>
    ))}
            </ul>
            
            {/* Display other relevant data */}
          </div>
        )}
      </div>
    </>
  );
}

export default SinglePokemon;

