import React from 'react';

const handleBackClick = (setMode) =>{
    setMode('createPokemon')
   }

const fetchPokemonAPI = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const result = await response.json();
    const pokemonList = result.results;
    pokemonList.forEach(pokemon => {
        console.log(pokemon.name);
    });

   };

function PokemonList({setMode}){
    fetchPokemonAPI();
    //MAP through array
        //Render 'PokemonList' to the screen
        //onClick forEach 'PokemonList' item >>> 'SinglePokemon' view

    //Create a button going to 'CreatePokemon' view

    return(
        <>
        <h1>PokemonList Component</h1>
        <button onClick={() => handleBackClick(setMode)}>Create a Pokemon</button>
        <p >List of Pokemon</p>
        </>
    )
}

export default PokemonList;