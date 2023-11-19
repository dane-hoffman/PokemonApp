import React from 'react';

function SinglePokemon({ setMode, selectedPokemon }) {
  const handleBackClick = () => {
    setMode('pokemonList');
  };

  return (
    <>
      <h1>SinglePokemon Component</h1>
      <button onClick={handleBackClick}>Back</button>
      <div>
        {selectedPokemon && <p>{selectedPokemon.name}</p>}
        {/* More details */}
      </div>
    </>
  );
}

export default SinglePokemon;


