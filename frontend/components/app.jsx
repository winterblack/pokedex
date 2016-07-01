var React = require('react');
var PokemonsIndex = require("./pokemons/pokemons_index")

var App = React.createClass({

  render: function() {
    return (
      <div className="pokedex">
        <div className="pokemon-index-pane"/>
        <PokemonsIndex/>
      </div>
    );
  }

});

module.exports = App;
