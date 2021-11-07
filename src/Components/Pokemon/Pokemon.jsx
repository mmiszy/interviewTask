import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Pokemon = ({ name, id }) => {
  return (
    <div className="column is-one-quarter-fullhd ">
      <div className="box has-text-centered    ">
        <Link className="has-text-grey " to={`/pokemons/${name}`}>
          <figure className=" image has-text-centered is-128x128 m-auto">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`}
              alt={name}
            />
          </figure>
          {name} #{id}
        </Link>
      </div>
    </div>
  );
};

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
