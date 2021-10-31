import React from "react";
import PropTypes from "prop-types";

export const LoadMore = ({ onLoadMore }) => {
  return (
    <button
      type="submit"
      onClick={onLoadMore}
      className="button is-large has-text-centered "
    >
      Load More
    </button>
  );
};

LoadMore.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
