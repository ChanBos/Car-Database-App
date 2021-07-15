// Requiring Express.
const express = require("express");
// Requiring Router from Express.
const router = express.Router();
// Requiring controllers from the controllers folder's carsController.js.
const cars = require("../controllers/carsController.js");

router.post("/create", cars.createController);
router.get("/", cars.getAllController);
router.get("/olderCars", cars.getOlderCars);
router.put("/updateOne/:id", cars.updateOneController);
router.put("/updateMany/:Model", cars.updateManyController);
router.delete("/delete/:id", cars.removeOneController);

// Exporting controllers to server.js.
module.exports = router;
