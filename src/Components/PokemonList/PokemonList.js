import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { Pokemon } from "../Pokemon/Pokemon";
import { fetchPokemonBriefsQuery } from "./fetchPokemonBriefsQuery";
import { LoadMore } from "../LoadMore/LoadMore";
import { fetchPokemonDetails } from "../PokemonDetail/fetchPokemonDetails";
import { queryClient } from "../../Api/queryClient";
import { SearchPokemon } from "../SearchPokemon/SearchPokemon";
import { QUERY_KEYS } from "../../Api/queryKeys";

export const PokemonList = () => {
  const [pokemonBriefs, setPokemonBriefs] = useState([]);
  const [currentlyPokemons, setCurrentlyPokemons] = useState([]);
  const [pokemonBriefsNextPageUrl, setPokemonBriefsNextPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [hasNextPagePokemonBriefs, setHasNextPagePokemonBriefs] =
    useState(true);
  const [isSearching, setIsSearching] = useState(true);

  const handleFilterPokemonsByName = (event) => {
    if (event.target.value.length !== 0) {
      setIsSearching(false);
    } else {
      setIsSearching(true);
    }

    const filterPokemons = pokemonBriefs.filter((pokemon) =>
      pokemon.name.includes(event.target.value)
    );
    setCurrentlyPokemons(filterPokemons);
  };
  const { data, error, isError, isLoading } = useQuery(
    [QUERY_KEYS.POKEMON_BRIEFS, pokemonBriefsNextPageUrl],
    fetchPokemonBriefsQuery
  );

  const handleLoadMorePokemonBriefs = () => {
    setPokemonBriefsNextPageUrl(data.next);
  };

  useEffect(() => {
    if (!data) {
      return;
    }
    data.results.forEach((pokemon) =>
      queryClient.prefetchQuery(
        [QUERY_KEYS.POKEMON_DETAILS, pokemon.name],
        fetchPokemonDetails
      )
    );
    const BriefsPokemonsWithId = data.results.map((pokemon) => {
      const pokemonId = Number(
        pokemon.url.substring(
          pokemon.url.indexOf("pokemon") + 8,
          pokemon.url.lastIndexOf("/")
        )
      );
      return { name: pokemon.name, id: pokemonId };
    });

    setPokemonBriefs((prev) => [...prev, ...BriefsPokemonsWithId]);

    setCurrentlyPokemons((prev) => [...prev, ...BriefsPokemonsWithId]);

    if (!data.next) {
      setHasNextPagePokemonBriefs(false);
      return;
    }
    queryClient.prefetchQuery(
      ["pokemonBriefs", data.next],
      fetchPokemonBriefsQuery
    );
  }, [data]);

  if (isError) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <>
      <SearchPokemon onFilterPokemonsByName={handleFilterPokemonsByName} />

      <div className="columns  is-flex-wrap-wrap is-mobile is-half-desktop ">
        {currentlyPokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} name={pokemon.name} id={pokemon.id} />
        ))}
      </div>

      {isLoading && <span className="button is-loading">Loading</span>}
      {hasNextPagePokemonBriefs && isSearching ? (
        <LoadMore onLoadMore={handleLoadMorePokemonBriefs} />
      ) : null}
    </>
  );
};
