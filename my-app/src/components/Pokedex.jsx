import React, { useEffect, useState } from 'react';

const Pokedex = () => {
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemonData = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/125/`);
      const data = await response.json();
      setPokemon(data);
    } catch (error) {
      console.log('Error fetching:', error);
    }
  };
  
  useEffect(() => {
    
    fetchPokemonData();
    
  }, [])

  
  console.log(pokemon);
 
  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
   Hola
   </div>
  );
};

export default Pokedex;
