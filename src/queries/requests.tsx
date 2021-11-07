import PokeAPI from "pokeapi-typescript";

import { QueryFunctionContext } from "react-query";
import { QueryKey } from "./queryKeys";

export const fetchPokemonDetails = async ({
  queryKey,
}: QueryFunctionContext<QueryKey>) => {
  const [_, pokemonName] = queryKey;
  return PokeAPI.Pokemon.fetch(pokemonName);
};

export const fetchPokemonBriefs = async () => {
  return PokeAPI.Pokemon.listAll();
};
