import PropTypes from "prop-types";

interface LoadMoreProps {
  onLoadMore: React.MouseEventHandler<HTMLButtonElement>;
}

export const LoadMore = ({ onLoadMore }: LoadMoreProps) => {
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
