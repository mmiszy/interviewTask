import React from "react";
import { Switch, Route } from "react-router-dom";
import { PokemonList } from "../PokemonList/PokemonList";
import { PokemonDetail } from "../PokemonDetail/PokemonDetail";

export const Main = () => {
  return (
    <main className="container is-widescreen has-text-centered  ">
      <Switch>
        <Route exact path="/">
          <PokemonList />
        </Route>
        <Route exact path="/pokemons/:id">
          <PokemonDetail />
        </Route>
      </Switch>
    </main>
  );
};
