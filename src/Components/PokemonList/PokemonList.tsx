import { useQuery } from "react-query";
import { Pokemon } from "../Pokemon/Pokemon";
import { QUERY_KEYS } from "../../queries/queryKeys";
import { errorToString } from "../../utils";
import { fetchPokemonBriefs } from "../../queries/requests";

export const PokemonList = () => {
  const {
    data: pokemons,
    error,
    isError,
    isLoading,
  } = useQuery([QUERY_KEYS.POKEMON_BRIEFS], fetchPokemonBriefs);

  if (isError) {
    return <div>Error! {errorToString(error)}</div>;
  }

  return (
    <>
      {/* <SearchPokemon onFilterPokemonsByName={handleFilterPokemonsByName} /> */}

      <div className="columns  is-flex-wrap-wrap is-mobile is-half-desktop ">
        {pokemons?.results.map((pokemon) => (
          <Pokemon key={pokemon.url} name={pokemon.name} url={pokemon.url} />
        ))}
      </div>

      {isLoading && <span className="button is-loading">Loading</span>}
    </>
  );
};
