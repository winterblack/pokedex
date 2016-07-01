var React = require('react');
var PokemonStore = require("../../stores/pokemon");
var PokemonActions = require("../../actions/pokemon_actions");

var PokemonDetail = React.createClass({
  getStateFromStore() {
    return {pokemon: PokemonStore.find(parseInt(this.props.params.pokemonId))}
  },
  _onChange() {
    this.setState(this.getStateFromStore())
  },
  getInitialState() {
    return this.getStateFromStore()
  },
  componentDidMount: function() {
    this.pokemonListener = PokemonStore.addListener(this._onChange)
  },
  render: function() {
    if(this.state.pokemon === undefined) {return <div/> }
    return (
      <div>
        <div className="pokemon-detail-pane">
          <div className="detail">
            <img src={this.state.pokemon.image_url} />
            {["name", "attack", "defense", "poke-type", "moves"].map((attr) => {
              return <p key={attr}>{attr}: {this.state.pokemon[attr]}</p>
            })}
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }

});

module.exports = PokemonDetail;
