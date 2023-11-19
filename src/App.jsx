import React, { useState } from 'react'; // Import React and useState hook
import PokemonList from './components/PokemonList'; // Import PokemonList component
import SinglePokemon from './components/SinglePokemon'; // Import SinglePokemon component
import CreatePokemon from './components/CreatePokemon'; // Import CreatePokemon component

function App() { // Define App component
  const [mode, setMode] = useState('pokemonList'); // State for mode: default mode is 'pokemonList'
  const [selectedPokemon, setSelectedPokemon] = useState(null); // State for selectedPokemon: initially null

  return ( // Return JSX
    <>
      {mode === 'pokemonList' && <PokemonList setMode={setMode} setSelectedPokemon={setSelectedPokemon} />} {/* Render PokemonList component if mode is 'pokemonList' */}
      {mode === 'singlePokemon' && <SinglePokemon setMode={setMode} selectedPokemon={selectedPokemon} />} {/* Render SinglePokemon component if mode is 'singlePokemon' */}
      {mode === 'createPokemon' && <CreatePokemon setMode={setMode} />} {/* Render CreatePokemon component if mode is 'createPokemon' */}
    </>
  );
}

export default App; // Export App component

