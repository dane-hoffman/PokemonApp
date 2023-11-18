import React from 'react';

const handleBackClick = (setMode) =>{
    setMode('createPokemon')
   }

const fetchPokemonAPI = async () => {
    //FETCH API 'response'
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    console.log(response);
    //FETCH API JSON 'result'
   }

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
        </>
    )
}

export default PokemonList;