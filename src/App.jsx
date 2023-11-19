import React, { useState } from 'react';
import PokemonList from './components/PokemonList';
import SinglePokemon from './components/SinglePokemon';
import CreatePokemon from './components/CreatePokemon';

function App() {
  const [mode, setMode] = useState('pokemonList');
  const [selectedPokemon, setSelectedPokemon] = useState(null); // State to hold selected Pokemon

  return (
    <>
      {mode === 'pokemonList' && <PokemonList setMode={setMode} setSelectedPokemon={setSelectedPokemon} />}
      {mode === 'singlePokemon' && <SinglePokemon setMode={setMode} selectedPokemon={selectedPokemon} />} {/* Pass selectedPokemon */}
      {mode === 'createPokemon' && <CreatePokemon setMode={setMode} />}
    </>
  );
}

export default App;
