import React from 'react';

const handleBackClick = (setMode) =>{
    setMode('createPokemon')
   }

function PokemonList({setMode}){
    //FETCH API 'response'
    //FETCH API JSON 'result'
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