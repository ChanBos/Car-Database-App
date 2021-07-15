// Requiring Mongoose.
const mongoose = require("mongoose");

/**
 * Created a model, defining the schemas of the cars in order to save and retrieve data.
 * Set the type of the model to number, the previous owners to an array and the make, owner, registration and address to strings.
 */

const carSchema = mongoose.Schema({
  Model: {
    type: Number,
  },
  Make: {
    type: String,
  },
  Owner: {
    type: String,
  },
  Registration: {
    type: String,
  },
  Address: {
    type: String,
  },
  previousOwners: {
    type: Array,
  },
});

// Exporting CarShema to server.js.
module.exports = mongoose.model("Cars", carSchema);
