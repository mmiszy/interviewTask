interface SearchPokemonProps {
  onSearch: (value: string) => void;
  value: string;
}

export const SearchPokemon = ({ onSearch, value }: SearchPokemonProps) => {
  const onFilterPokemonsByName: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => onSearch(e.currentTarget.value);

  return (
    <nav className="m-6" role="navigation">
      <label>
        Search Pokemons
        <input
          className="input is-rounded ds-input"
          onChange={onFilterPokemonsByName}
          value={value}
        />
      </label>
    </nav>
  );
};
