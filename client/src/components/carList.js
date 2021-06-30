// Imported react libraries and hooks.
import React, { useState, useEffect } from "react";
// Requiring Axios.
import axios from "axios";

/**
 * @param {*} props _id, Model, Make, Registration, Owner and Address.
 * @returns A table that displays all of the above mentioned information from the database.
 */

// Create the props that will be rendered for the table output
const Car = (props) => (
  <tr>
    <td>{props.car._id}</td>
    <td>{props.car.Model}</td>
    <td>{props.car.Make}</td>
    <td>{props.car.Registration}</td>
    <td>{props.car.Owner}</td>
    <td>{props.car.Address}</td>
    <td>{props.car.previousOwners}</td>
  </tr>
);

// Set the initial state of cars.
const CarList = () => {
  const [cars, setCars] = useState([]);

  // Utilized the useEffect() hook to get/ read the information from the database and respond displaying the data. If an error occurs the error
  // will be logged to console.
  useEffect(() => {
    axios
      .get("/cars/")
      .then((res) => {
        const data = res.data;
        setCars(data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Utilizing the map method to iterate over the array items and to display the necessary data. Calling this function in the <tbody> element.
  const carList = () => {
    return cars.map((currentcar) => {
      return <Car car={currentcar} key={currentcar._id} />;
    });
  };

  return (
    <div id="listcontainer">
      <h6>Car List</h6>
      <table>
        <thead>
          <tr className="theaderrow">
            <th id="th-cell-left">ID</th>
            <th>Model</th>
            <th>Make</th>
            <th>Registration</th>
            <th>Owner</th>
            <th>Address</th>
            <th id="th-cell-right">Previous Owners</th>
          </tr>
        </thead>
        <tbody>{carList()}</tbody>
      </table>
    </div>
  );
};

// Exported CarList to App.js.
export default CarList;
