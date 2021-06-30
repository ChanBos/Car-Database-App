// -------------- To set up previousOwners.

// Requiring Mongoose.
const mongoose = require("mongoose");

/**
 * Created a model, defining the schemas of the cars in order to save and retrieve data.
 * Set the type to strings and set all the fields as required.
 * Set the default of the "Owner" schema to "anonymous".
 */

const carSchema = mongoose.Schema({
  Model: {
    type: String,
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
