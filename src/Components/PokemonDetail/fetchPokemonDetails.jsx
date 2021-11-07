import axios from "axios";
import PropTypes from "prop-types";

export const fetchPokemonDetails = async ({ queryKey }) => {
  const pokemonName = queryKey[1];
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  return data;
};
fetchPokemonDetails.propTypes = {
  queryKey: PropTypes.arrayOf(PropTypes.string),
};
