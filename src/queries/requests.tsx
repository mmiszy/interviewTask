import PokeAPI from "pokeapi-typescript";

import { QueryFunctionContext } from "react-query";
import { QueryKey } from "./queryKeys";

export const fetchPokemonDetails = async ({
  queryKey,
}: QueryFunctionContext<QueryKey>) => {
  const [_, pokemonName] = queryKey;
  return PokeAPI.Pokemon.resolve(pokemonName);
};

export const fetchPokemonBriefs = async ({
  queryKey,
}: QueryFunctionContext<QueryKey>) => {
  const [_, search] = queryKey;
  const list = await PokeAPI.Pokemon.listAll();
  if (search) {
    return {
      ...list,
      results: list.results.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      ),
    };
  }
  return list;
};
