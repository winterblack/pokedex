var React = require('react');
var PropTypes = React.PropTypes;

var PokemonIndexItem = React.createClass({

  render: function() {
    return (
      <div className="poke-list-item">
        <div>{this.props.pokemon.name}</div>
        <div>{this.props.pokemon.poke_type}</div>
      </div>
    );
  }

});

module.exports = PokemonIndexItem;
