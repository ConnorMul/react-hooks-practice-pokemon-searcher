import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon, sprite, onPokeClick }) {
  
  const mappedPokemon = pokemon.map((poke) => {
    return (
    <PokemonCard 
      key={poke.id}
      name={poke.name}
      hp={poke.hp}
      sprites={poke.sprites}
      sprite={sprite}
      onPokeClick={onPokeClick}
    />)
  })
  
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {mappedPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
