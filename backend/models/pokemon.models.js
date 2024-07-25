import mongoose from "mongoose"

const PokemonSchema = new mongoose.Schema({
  number: {
    type: String,
    unique: true // Ensures each Pokémon has a unique number
  },

  name: {
    type: String,
    unique: true // Ensures each Pokémon has a unique name
  },

  image: {
    type: String,
  },

  description: {
    type: String,
    // required: true
  },

  type1: {
    type: String,
  },

  type2: {
    type: String,
  },

  abilities: [{
    type: String
  }],

  gender1: {
    type: String
  },

  gender2: {
    type: String
  },

  category: {
    type: String
  },

  height: {
    type: Number
  },

  weight: {
    type: Number
  },

  weakness: [{
    type: String,
  }]

});

// Creating the model from the schema
const pokemonModel = mongoose.model('Pokemon', PokemonSchema);

export { pokemonModel }
