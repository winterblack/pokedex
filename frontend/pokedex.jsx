var React = require('react');
var ReactDOM = require("react-dom");
var PokemonsIndex = require("./components/pokemons/pokemons_index");
var reactRouter = require("react-router")
var Router = reactRouter.Router
var Route = reactRouter.Route
var hashHistory = reactRouter.hashHistory
var App = require("./components/app")
var PokemonDetail = require("./components/pokemons/pokemon_detail")

var routes = (
  <Route path="/" component={App}>
    <Route path="pokemon/:pokemonId" component={PokemonDetail} />
  </Route>
)

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById("root")
  );
})
