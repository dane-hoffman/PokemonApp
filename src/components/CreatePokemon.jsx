import React from 'react';

const handleBackClick =(setMode) => {
    setMode('pokemonList');
}

function CreatePokemon ({setMode}){
    return (
        <>
        <h1>CreatePokemon Component</h1>
        <button onClick={()=>handleBackClick(setMode)}>Back to<br></br>Pokemon List</button>
        {/* Form the take for user input data to create new Pokemon */}
        </>
        )
}

export default CreatePokemon;