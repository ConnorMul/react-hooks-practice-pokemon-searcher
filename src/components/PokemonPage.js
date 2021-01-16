import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [sprite, setSprite] = useState("front")
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(resp => resp.json())
    .then(pokemonObjs => setPokemon(pokemonObjs))
  }, [])

  const searchedPokemon = pokemon.filter((poke) =>
     poke.name.includes(search)
  )

  function handleAddPokemon(newPokemon) {
    setPokemon([...pokemon, newPokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm 
        onFormSubmit={handleAddPokemon}
      />
      <br />
      <Search 
        search={search}
        setSearch={setSearch}
      />
      <br />
      <PokemonCollection 
        pokemon={searchedPokemon}
        sprite={sprite}
        onPokeClick={setSprite}
      />
    </Container>
  );
}

export default PokemonPage;
