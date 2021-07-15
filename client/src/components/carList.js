// Imported react libraries and hooks.
import React, { useState, useEffect } from "react";
// Requiring Axios.
import axios from "axios";
// Imported components.
import OlderCarList from "./olderCarList.js";

/**
 * Created a new array for the previous owners, iterated over the items and pushing and returning the data by joining them by a ", ".
 * @param {*} props _id, Model, Make, Registration, Owner, Address, previousOwners.
 * @returns A table that displays all of the above mentioned information from the database.
 */

const getPreviousOwners = (inputArray) => {
  let newArray = [];

  if (inputArray[0]) {
    for (const owner in inputArray[0]) {
      const currentPreviousOwner = inputArray[0][owner];
      newArray.push(currentPreviousOwner);
    }
  }
  return newArray.join(", ");
};

const Car = ({
  _id,
  Model,
  Make,
  Registration,
  Owner,
  Address,
  previousOwners,
}) => (
  <tr>
    <td>{_id}</td>
    <td>{Model}</td>
    <td>{Make}</td>
    <td>{Registration}</td>
    <td>{Owner}</td>
    <td>{Address}</td>
    <td>{getPreviousOwners(previousOwners)}</td>
  </tr>
);

// Set the initial state of cars.
const CarList = () => {
  const [cars, setCars] = useState([]);

  // Utilized the useEffect() hook to get/ read the information from the database and respond displaying the data. If an error occurs the error
  // will be logged to console.
  useEffect(() => {
    axios
      .get("cars")
      .then((res) => {
        const data = res.data;
        setCars(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="listcontainer">
      <h6>Car List</h6>
      <table>
        <thead>
          <tr className="theaderrow">
            <th className="th-cell-left">ID</th>
            <th>Model</th>
            <th>Make</th>
            <th>Registration</th>
            <th>Owner</th>
            <th>Address</th>
            <th className="th-cell-right">Previous Owners</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <Car key={car._id} {...car} />
          ))}
        </tbody>
      </table>
      <OlderCarList />
    </div>
  );
};

// Exported CarList to App.js.
export default CarList;
