import mongoose from "mongoose"

const PokemonSchema = new mongoose.Schema({
  number: {
    type: String,
    unique: true 
  },

  name: {
    type: String,
    unique: true
  },

  image: {
    type: String,
  },

  description: {
    type: String,
  },

  type1: {
    type: String,
  },

  type2: {
    type: String,
  },

  ability: {
    type: String
  },

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
  }],

  region: [{
    type: String
  }],

});

// Creating the model from the schema
const pokemonModel = mongoose.model('Pokemon', PokemonSchema);

export { pokemonModel }
