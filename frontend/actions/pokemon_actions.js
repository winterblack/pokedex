const Dispatcher = require("../dispatcher/dispatcher");
const ApiUtil = require("../utils/api_util");

module.exports = {
  receiveAllPokemons(pokemons) {
    Dispatcher.dispatch({
      type: "pokemons recieved",
      property: pokemons
    })
  },
  fetchAllPokemons() {
    ApiUtil.fetchAllPokemons(this.receiveAllPokemons)
  }
}
