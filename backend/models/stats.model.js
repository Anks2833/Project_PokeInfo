import mongoose from "mongoose"

const statsSchema = new mongoose.Schema({

  number: {
    type: String
  },

  hp: {
    type: Number
  },

  attack: {
    type: Number
  },

  defense: {
    type: Number
  },

  specialattack: {
    type: Number
  },

  specialdefense: {
    type: Number
  },

  speed: {
    type: Number
  }
  
});

// Creating the model from the schema
const statsModel = mongoose.model('Stat', statsSchema);

export { statsModel }
