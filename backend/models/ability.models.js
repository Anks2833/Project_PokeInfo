import mongoose from "mongoose"

const abilitySchema = new mongoose.Schema({

  number: {
    type: String
  },

  ability: {
    type: String,
  }

});

// Creating the model from the schema
const abilityModel = mongoose.model('ability', abilitySchema);

export { abilityModel }
