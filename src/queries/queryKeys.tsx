export const QUERY_KEYS = {
  POKEMON_BRIEFS: "pokemonBriefs",
  POKEMON_DETAILS: "pokemonDetails",
} as const;

export type QueryKeyName = typeof QUERY_KEYS[keyof typeof QUERY_KEYS];
export type QueryKey = [QueryKeyName, string, ...string[]];
