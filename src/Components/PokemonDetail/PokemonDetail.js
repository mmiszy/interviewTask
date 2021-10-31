import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchPokemonDetails } from "./fetchPokemonDetails";
import { QUERY_KEYS } from "../../Api/queryKeys";

export const PokemonDetail = () => {
  const { id } = useParams();
  const { data, error, isLoading, isError } = useQuery(
    [QUERY_KEYS.POKEMON_DETAILS, id],
    fetchPokemonDetails
  );

  if (isLoading) {
    return <div>IsLoading</div>;
  }

  if (isError) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <div className="container m-6">
      <div className="card ">
        <div className="card-image">
          <h2 className="is-size-2">
            {data.name} #{data.id}{" "}
          </h2>
          <figure>
            <img src={data.sprites.front_default} alt={data.name} />
          </figure>
        </div>

        <div className="columns m-2">
          <div className="column">
            <p className="subtitle is-6"> Weight </p>
            <p className="box subtitle is-6"> {data.weight} lbs</p>
          </div>
          <div className="column">
            <p className="subtitle is-6"> Height </p>
            <p className="box subtitle is-6"> {data.height} </p>
          </div>
        </div>
        <div className="columns m-2">
          <div className="column ">
            <p className="subtitle is-6"> Abilities </p>
            <p className="box subtitle is-6">
              {data.abilities[0].ability.name}
            </p>
          </div>
        </div>
        <div className="columns has-text-centered m-2">
          {data.types.map((item) => (
            <div key={item.type.name} className="column ">
              <p className="subtitle has-text-centered is-6"> Type</p>
              <p className="box subtitle is-6" key={item.type.name}>
                {item.type.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
