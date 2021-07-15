// Imported react libraries and hooks.
import React, { useState, useEffect } from "react";
// Requiring Axios.
import axios from "axios";
// Imported components from React Bootstrap.
import { Button, Modal } from "react-bootstrap";

/**
 * @param {*} props Model, Make, Registration and Owner.
 * @returns A table that displays all of the above mentioned information from the database.
 */

// Create the props that will be rendered for the table output
// Iterating over the items via the mapping method in the <tbody> element that will return the <td> elements of the table.
const Car = ({ Model, Make, Registration, Owner }) => (
  <tr>
    <td>{Model}</td>
    <td>{Make}</td>
    <td>{Registration}</td>
    <td>{Owner}</td>
  </tr>
);

// Set the initial state of cars.
// Set the initial state of the modal to not show.
// Set the handlers to show the modal once the handleShow() function is called (boolean = true) and to not show
// once the onHide() function is called (boolean = false).
const OlderCarList = () => {
  const [cars, setCars] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Utilized the useEffect() hook to get/ read the information from the database and respond displaying the data. If an error occurs the error
  // will be logged to console.
  useEffect(() => {
    axios
      .get("cars/olderCars")
      .then((res) => {
        const data = res.data;
        setCars(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="listcontainer">
      <div id="oldercarscontainer">
        <h6 id="oldercarsheader">
          Looking for vintage models older than five years?
        </h6>
        <Button type="button" title="Add New Car" onClick={handleShow}>
          Click Here
        </Button>
      </div>
      <Modal show={show} onHide={handleClose} id="oldercarsmodal" centered>
        <Modal.Header closeButton>
          <Modal.Title>Cars Older than Five Years</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table>
            <thead>
              <tr className="theaderrow">
                <th className="th-cell-left">Model</th>
                <th>Make</th>
                <th>Registration</th>
                <th className="th-cell-right">Owner</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car) => (
                <Car key={car._id} {...car} />
              ))}
            </tbody>
          </table>
        </Modal.Body>
      </Modal>
    </div>
  );
};

// Exported CarList to App.js.
export default OlderCarList;
