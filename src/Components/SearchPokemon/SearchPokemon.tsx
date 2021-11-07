interface SearchPokemonProps {
  onFilterPokemonsByName: React.ChangeEventHandler<HTMLInputElement>;
}

export const SearchPokemon = ({
  onFilterPokemonsByName,
}: SearchPokemonProps) => {
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
