import { useQuery } from "react-query";
import { Pokemon } from "../Pokemon/Pokemon";
import { QUERY_KEYS } from "../../queries/queryKeys";
import { errorToString } from "../../utils";
import { fetchPokemonBriefs } from "../../queries/requests";
import { SearchPokemon } from "../SearchPokemon/SearchPokemon";
import { useState } from "react";
import { useDebouncedState } from "../../hooks/useDebouncedState";

export const PokemonList = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebouncedState(search);
  const {
    data: pokemons,
    error,
    isError,
    isLoading,
  } = useQuery(
    [QUERY_KEYS.POKEMON_BRIEFS, debouncedSearch],
    fetchPokemonBriefs
  );

  if (isError) {
    return <div>Error! {errorToString(error)}</div>;
  }

  return (
    <>
      <SearchPokemon onSearch={setSearch} value={search} />

      <div className="columns  is-flex-wrap-wrap is-mobile is-half-desktop ">
        {pokemons?.results.map((pokemon) => (
          <Pokemon key={pokemon.url} name={pokemon.name} url={pokemon.url} />
        ))}
      </div>

      {isLoading && <span className="button is-loading">Loading</span>}
    </>
  );
};
