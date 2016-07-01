module.exports = {
  fetchAllPokemons(callback) {
    $.ajax({
      url: "api/pokemon",
      success: callback
    })
  }
}
