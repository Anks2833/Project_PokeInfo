import mongoose from "mongoose"

const evolutionSchema = new mongoose.Schema({

  name1: {
    type: String
  },

  number1: {
    type: String
  },

  image1: {
    type: String
  },

  type11: {
    type: String
  },

  type21: {
    type: String
  },

  name2: {
    type: String
  },

  number2: {
    type: String
  },

  image2: {
    type: String
  },

  type12: {
    type: String
  },

  type22: {
    type: String
  },

  name3: {
    type: String
  },

  number3: {
    type: String
  },

  image3: {
    type: String
  },

  type13: {
    type: String
  },

  type23: {
    type: String
  }
  
});

// Creating the model from the schema
const evolutionModel = mongoose.model('Evolution', evolutionSchema);

export { evolutionModel }
