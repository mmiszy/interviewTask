import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="m-4">
      <Link className="has-text-grey" to="/">
        <h1 className="has-text-centered is-size-1">Pokemon App</h1>{" "}
      </Link>
    </header>
  );
};
