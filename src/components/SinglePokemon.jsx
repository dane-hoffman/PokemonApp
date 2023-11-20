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
    {pokemonData && pokemonData.sprites && ( // Check if pokemonData and sprites exist before accessing
    <Card.Img variant="top" src={pokemonData.sprites.front_default} alt={pokemonData.name} />
  )}
      <Card.Body>
        <Card.Title>{selectedPokemon.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

      <h1>SinglePokemon Component</h1>
      <button onClick={handleBackClick}>Back</button> {/* Button to go back to PokemonList */}
      <div>
        {pokemonData && ( // Conditionally render if pokemonData exists
          <div>
            <h4>{pokemonData.name}</h4> {/* Display Pokemon's name */}
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} /> {/* Display Pokemon's image */}
            <h4>Type: {pokemonData.types[0].type.name}</h4> {/* Display Pokemon's type */}
            <ul>
              <h4>Stats:</h4>
              {pokemonData.stats.map((statData, index) => ( // Map through Pokemon's stats and display them
                <p key={index}>{statData.stat.name}: {statData.base_stat}</p>
              ))}
            </ul>
            {/* Display other relevant data */}
          </div>
        )}
      </div>
    </>
  );
}

export default SinglePokemon; // Export SinglePokemon component


