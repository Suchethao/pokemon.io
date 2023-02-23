

import React, { useState, useEffect } from "react";
import './Home.css';

const Home = () => {
  const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0);
  const [pokemonData, setPokemonData] = useState([]);
  

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then(response => response.json())
      .then(data => {
        setPokemonData(data.results);
      });
  }, []);

  const nextPokemon = () => {
    setCurrentPokemonIndex((currentPokemonIndex + 1) % pokemonData.length);
  };

  const prevPokemon = () => {
    setCurrentPokemonIndex((currentPokemonIndex + pokemonData.length - 1) % pokemonData.length);
  };

  if (!pokemonData.length) {
    return <div>Loading...</div>;
  }

  return (
<div className="pokemon-container">
  <img className="pokemon-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentPokemonIndex + 1}.png`} alt="pokemon" />
  <h3 className="pokemon-description">{pokemonData[currentPokemonIndex].name}</h3>
  <button className="prev-arrow" onClick={prevPokemon}>&#9664;</button>
  <button className="next-arrow" onClick={nextPokemon}>&#9654;</button>
</div>

  );
};


export default Home;
