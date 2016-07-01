var React = require('react');
var PokemonStore = require("../../stores/pokemon")
var PokemonActions = require("../../actions/pokemon_actions")
var PokemonIndexItem = require("./pokemon_index_item")

var PokemonsIndex = React.createClass({
  getInitialState: function() {
    return {
      pokemons: PokemonStore.all()
    };
  },
  componentDidMount: function() {
    this.pokemonListener = PokemonStore.addListener(this._onChange);
    PokemonActions.fetchAllPokemons();
  },
  _onChange: function() {
    this.setState({
      pokemons: PokemonStore.all()
    })
  },
  componentWillUnmount: function() {
    this.pokemonListener.remove();
  },
  render: function() {
    return (
      <div>
        {this.state.pokemons.map((pokemon) => {
          return <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />
        })}
      </div>
    );
  }
});

module.exports = PokemonsIndex;
