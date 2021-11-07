import React from "react";
import PropTypes from "prop-types";

export const SearchPokemon = ({ onFilterPokemonsByName }) => {
  return (
    <nav className="m-6" role="navigation">
      <input
        className="input is-rounded ds-input"
        onChange={onFilterPokemonsByName}
        aria-label="search input"
        placeholder="Search the pocemons"
        type="text"
        name=""
        id=""
      />
    </nav>
  );
};
SearchPokemon.propTypes = {
  onFilterPokemonsByName: PropTypes.func.isRequired,
};
