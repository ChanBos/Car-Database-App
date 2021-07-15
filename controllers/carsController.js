// Requiring the schemas that has been created in the carsModel.js file.
const Car = require("../models/carsModel.js");
// Requiring Mongoose.
const mongoose = require("mongoose");

/**
 * POST/ CREATE:
 * @required  Body properties: Model, Make, Owner, Registration, and the Address
 * @param {*} req Creating a new post with the property.
 * @param {*} res Updated copy of the content (copyContent).
 * @returns List of cars and a confirmation message is returned to confirm that the post has been created or an error message should the
 * request be unsuccessful.
 */

exports.createController = (req, res) => {
  let car = new Car({
    Model: req.body.Model,
    Make: req.body.Make,
    Owner: req.body.Owner,
    Registration: req.body.Registration,
    Address: req.body.Address,
    previousOwners: req.body.previousOwners,
  });
  car
    .save()
    .then((cars) => res.json(cars))
    .catch((err) => res.status(400).json("Error creating the car." + err));
};

/**
 * GET/ READ:
 * @required  Content.
 * @param {*} req Getting the array of cars.
 * @param {*} res Copy of the content (copyContent).
 * @returns A list of the current cars that are already written.
 */

// Requesting all the cars' information from MongoDB and retuning the response with the information.
exports.getAllController = (req, res) => {
  Car.find()
    .then((cars) => res.json(cars))
    .catch((err) =>
      res.status(400).json("Error getting the cars' information." + err)
    );
};

// Requesting all the cars' information from MongoDB and retuning the response with the information.
exports.getOlderCars = (req, res) => {
  Car.find({ Model: { $lt: 2016 } })
    .then((cars) => res.json(cars))
    .catch((err) =>
      res.status(400).json("Error getting the cars' information." + err)
    );
};

/**
 * PUT/ UPDATE:
 * @required Body properties: id.
 * @param {*} req Post with the matching id to be returned and updated with the new post.
 * @param {*} res Updated copy of the content (copyContent).
 * @returns List of cars and a confirmation message is returned to confirm that the post has been updatedor an error message should the request
 * be unsuccessful.
 */

// Fetching the information of one car by id for updating. Using $set to set the information for the relevant car with the matching id.
exports.updateOneController = (req, res) => {
  Car.findOneAndUpdate(
    req.params.id,
    {
      $set: {
        Model: req.body.Model,
        Make: req.body.Make,
        Owner: req.body.Owner,
        Registration: req.body.Registration,
        Address: req.body.Address,
        previousOwners: req.body.previousOwners,
      },
    },
    { new: true }
  )
    .then((cars) => res.json(cars))
    .catch((err) => res.status(400).json("Error updating the car." + err));
};

// Allowing a user to update more than one car, using the model year of the car. Using $set to set the information for the relevant cars with
// the matching model years.
exports.updateManyController = (req, res) => {
  Car.updateMany(
    {
      Model: req.params.Model,
    },
    {
      $set: {
        Make: req.body.Make,
        Owner: req.body.Owner,
        Registration: req.body.Registration,
        Address: req.body.Address,
        previousOwners: req.body.previousOwners,
      },
    }
  )
    .then((cars) => res.json(cars))
    .catch((err) => res.status(400).json("Error updating the car." + err));
};

/**
 * DELETE:
 * @required  Body properties: id.
 * @param {*} req Post with the matching id to be deleted.
 * @param {*} res Updated copy of the content (copyContent).
 * @returns List of cars and a confirmation message is returned to confirm that the post has been deleted or an error message should the
 * request be unsuccessful.
 */

// Fetching the information of one car by id for deletion.
exports.removeOneController = (req, res) => {
  Car.findByIdAndRemove(req.params.id)
    .then((cars) => res.json(cars))
    .catch((err) => res.status(400).json({message: "Error deleting the car." + err}));
};
