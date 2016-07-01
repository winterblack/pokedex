const Store = require("flux/utils").Store
const Dispatcher = require("../dispatcher/dispatcher")

let _pokemons = {}

const PokemonStore = new Store(Dispatcher)

function resetPokemons(pokemons) {
  _pokemons = {}
  pokemons.forEach(function (pokemon) {
    _pokemons[pokemon.id] = pokemon
  })
}

PokemonStore.__onDispatch = function(action) {
  switch(action.type) {
    case "pokemons recieved":
      resetPokemons(action.property)
      this.__emitChange()
      break
  }
}

PokemonStore.all = function() {
  var pokemons = []
  Object.keys(_pokemons).forEach(function(key) {
    pokemons.push(_pokemons[key])
  })
  return pokemons
}

module.exports = PokemonStore
