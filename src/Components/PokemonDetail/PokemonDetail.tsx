import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { QUERY_KEYS } from "../../queries/queryKeys";
import { errorToString } from "../../utils";
import { fetchPokemonDetails } from "../../queries/requests";

export const PokemonDetail = () => {
  const { name } = useParams<{ name: string }>();
  const {
    data: pokemon,
    error,
    isLoading,
    isError,
  } = useQuery([QUERY_KEYS.POKEMON_DETAILS, name], fetchPokemonDetails);

  if (isLoading) {
    return <div>Loading…</div>;
  }

  if (isError || !pokemon) {
    return <div>Error! {errorToString(error)}</div>;
  }

  return (
    <div className="container m-6">
      <div className="card ">
        <div className="card-image">
          <h2 className="is-size-2">
            {pokemon.name} #{pokemon.id}
          </h2>
          <figure>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </figure>
        </div>

        <div className="columns m-2">
          <div className="column">
            <p className="subtitle is-6">Weight</p>
            <p className="box subtitle is-6">{pokemon.weight} lbs</p>
          </div>
          <div className="column">
            <p className="subtitle is-6">Height</p>
            <p className="box subtitle is-6">{pokemon.height}</p>
          </div>
        </div>
        <div className="columns m-2">
          <div className="column ">
            <p className="subtitle is-6">Abilities</p>
            <p className="box subtitle is-6">
              {pokemon.abilities[0]?.ability.name}
            </p>
          </div>
        </div>
        <div className="columns has-text-centered m-2">
          {pokemon.types.map((item) => (
            <div key={item.type.name} className="column">
              <p className="subtitle has-text-centered is-6">Type</p>
              <p className="box subtitle is-6">{item.type.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
