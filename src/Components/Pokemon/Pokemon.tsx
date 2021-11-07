import { useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { QUERY_KEYS } from "../../queries/queryKeys";
import { fetchPokemonDetails } from "../../queries/requests";
import { getPokemonIdFromUrl } from "../../utils";

interface PokemonProps {
  name: string;
  url: string;
}

export const Pokemon = ({ name, url }: PokemonProps) => {
  const id = getPokemonIdFromUrl(url);

  const queryClient = useQueryClient();

  const prefetchPokemon = () => {
    return queryClient.prefetchQuery(
      [QUERY_KEYS.POKEMON_DETAILS, name],
      fetchPokemonDetails
    );
  };

  return (
    <div className="column is-one-quarter-fullhd">
      <div className="box has-text-centered">
        <Link
          className="has-text-grey"
          to={`/pokemons/${name}`}
          onMouseOver={prefetchPokemon}
        >
          <figure className=" image has-text-centered is-128x128 m-auto">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              alt={name}
              loading="lazy"
            />
          </figure>
          {name} #{id}
        </Link>
      </div>
    </div>
  );
};
