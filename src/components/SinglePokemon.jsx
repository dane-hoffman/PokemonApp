import React from 'react';

const handleBackClick = (setMode) =>{
    setMode('pokemonList')
   }
function SinglePokemon({setMode}){
    return (
        <>
        <h1>SinglePokemon Component</h1>
        <button onClick={() => handleBackClick(setMode)}>Back</button>
        </>
    )

}

export default SinglePokemon;