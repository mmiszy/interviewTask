import axios from "axios";
import PropTypes from "prop-types";

export const fetchPokemonBriefsQuery = async ({ queryKey }) => {
  const nextPageUrl = queryKey[1];
  const { data } = await axios.get(nextPageUrl, {
    params: {
      limit: 20,
    },
  });

  return data;
};

fetchPokemonBriefsQuery.propTypes = {
  queryKey: PropTypes.arrayOf(PropTypes.string),
};
