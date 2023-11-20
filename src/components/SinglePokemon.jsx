import React, { useState, useEffect } from 'react'; // Import React, useState, and useEffect hooks
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function SinglePokemon({ setMode, selectedPokemon }) { // Define SinglePokemon component
  const [pokemonData, setPokemonData] = useState(null); // State to hold fetched data

  const fetchPokemonData = async () => { // Async function to fetch detailed Pokemon data
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon.name}`); // Fetch data of the selected Pokemon
    const result = await response.json(); // Parse response to JSON
    console.log(result); // Log the fetched data to console (for demonstration)
    return result; // Return fetched Pokemon data
  };

  useEffect(() => { // useEffect to fetch data when selectedPokemon changes
    const fetchData = async () => {
      const data = await fetchPokemonData(selectedPokemon); // Fetch detailed Pokemon data
      setPokemonData(data); // Update pokemonData state with fetched data
    };

    fetchData(); // Call fetchData function
  }, [selectedPokemon]); // Dependency array watches for changes in selectedPokemon

  const handleBackClick = () => { // Function to handle "Back" button click
    setMode('pokemonList'); // Set mode to 'pokemonList'
  };

  return ( // Return JSX
    <>
        <Container>
      <Row>
        <Col>1 of 3</Col>
        <Col xs={6}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col xs={5}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>

    <Card style={{ width: '15rem' }}>
  {pokemonData && pokemonData.sprites && (
    <Card.Img variant="top" src={pokemonData.sprites.front_default} alt={pokemonData.name} />
  )}
  <Card.Body>
    <Card.Title>{pokemonData ? pokemonData.name : selectedPokemon.name}</Card.Title>
    {pokemonData && pokemonData.stats && pokemonData.stats.length > 0 ? (
      <div>
        <h4>Stats:</h4>
        <ul>
          {pokemonData.stats.map((statData, index) => (
            <li key={index}>
              {statData.stat.name}: {statData.base_stat}
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <p>No stats available</p>
    )}
  </Card.Body>
</Card>



      <h1>SinglePokemon Component</h1>
      <button onClick={handleBackClick}>Back</button> {/* Button to go back to PokemonList */}
    </>
  );
}

export default SinglePokemon; // Export SinglePokemon component


