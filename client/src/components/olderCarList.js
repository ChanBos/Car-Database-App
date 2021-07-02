// Imported react libraries and hooks.
import React, { useState, useEffect } from "react";
// Requiring Axios.
import axios from "axios";

/**
 * @param {*} props _id, Model, Make, Registration, Owner and Address.
 * @returns A table that displays all of the above mentioned information from the database.
 */

// Create the props that will be rendered for the table output
const Car = ({ _id, Model, Make, Registration, Owner }) => (
  <tr>
    <td>{_id}</td>
    <td>{Model}</td>
    <td>{Make}</td>
    <td>{Registration}</td>
    <td>{Owner}</td>
  </tr>
);

// Set the initial state of cars.
const OlderCarList = () => {
  const [cars, setCars] = useState([]);

  // Utilized the useEffect() hook to get/ read the information from the database and respond displaying the data. If an error occurs the error
  // will be logged to console.
  useEffect(() => {
    axios
      .get("cars/older/model?olderCars")
      .then((res) => {
        const data = res.data;
        setCars(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="listcontainer">
      <h6>Looking for vintage models older 5 years?</h6>
      <table>
        <thead>
          <tr className="theaderrow">
            <th id="th-cell-left">ID</th>
            <th>Model</th>
            <th>Make</th>
            <th>Registration</th>
            <th id="th-cell-right">Owner</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <Car key={car._id} {...car} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Exported CarList to App.js.
export default OlderCarList;
