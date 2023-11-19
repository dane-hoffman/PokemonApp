import React, { useState, useEffect } from 'react'; // Import React, useState, and useEffect hooks

const fetchPokemonAPI = async () => { // Async function to fetch Pokemon data from API
  const response = await fetch('https://pokeapi.co/api/v2/pokemon'); // Fetch data from PokeAPI
  const result = await response.json(); // Parse response to JSON
  return result.results; // Return array of Pokemon
};

function PokemonList({ setMode, setSelectedPokemon }) { // Define PokemonList component
  const [pokemonList, setPokemonList] = useState([]); // State for pokemonList: initially empty array

  useEffect(() => { // useEffect to fetch data when component mounts
    const fetchData = async () => {
      const data = await fetchPokemonAPI(); // Fetch Pokemon data
      setPokemonList(data); // Update pokemonList state with fetched data
    };

    fetchData(); // Call fetchData function
  }, []); // Empty dependency array runs the effect only once, on component mount

  const handleCreatePokemonClick = () => { // Function to handle "Create a Pokemon" button click
    setMode('createPokemon'); // Set mode to 'createPokemon'
  };

  const handleListItemClick = (pokemon) => { // Function to handle click on a Pokemon list item
    setSelectedPokemon(pokemon); // Set selectedPokemon to the clicked Pokemon
    setMode('singlePokemon'); // Set mode to 'singlePokemon'
  };

  return ( // Return JSX
    <>
      <h1>PokemonList Component</h1>
      <button onClick={handleCreatePokemonClick}>Create a Pokemon</button> {/* Button to create a new Pokemon */}
      <p>List of Pokemon:</p>
      <ul>
        {pokemonList.map((pokemon, index) => ( // Map through pokemonList and display each Pokemon name as a list item
          <li key={index} onClick={() => handleListItemClick(pokemon)}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  );
}

export default PokemonList; // Export PokemonList component

