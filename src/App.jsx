import React, {useState} from 'react';
import PokemonList from './components/PokemonList';
import SinglePokemon from './components/SinglePokemon';
import CreatePokemon from './components/CreatePokemon';

function App() {
  const [mode, setMode] = useState ('pokemonList')

  return (
    <>
 {mode === 'pokemonList' && <PokemonList setMode={setMode}/>}
 {mode === 'singlePokemon' && <SinglePokemon setMode={setMode}/>}
 {mode === 'createPokemon' && <CreatePokemon setMode={setMode}/>}
    </>

  )
}

export default App