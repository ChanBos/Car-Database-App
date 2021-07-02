// Imported react libraries and hooks.
import React, { useState } from "react";
// Requiring Axios.
import axios from "axios";
// Imported components from React Bootstrap.
import {
  Button,
  Container,
  Form,
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";
// Imported icons from FontAwesome.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// Imported Swal from sweetalert2.
import Swal from "sweetalert2";

/**
 * @param {*} cars
 * @param {*} setCars
 * Created a search component with an input area, dropdown menu for the categories and a search button.
 * Set the initial states of the prop values using the useState() hook.
 */

const CarEdit = ({ cars, setCars }) => {
  const [id, setId] = useState("");
  const [Model, setModel] = useState("");
  const [Make, setMake] = useState("");
  const [Owner, setOwner] = useState("");
  const [Registration, setRegistration] = useState("");
  const [Address, setAddress] = useState("");
  const [previousOwners, setPreviousOwners] = useState("");

  /**
   * Assigned an event.preventDefault() method to ensure that the page is not refreshed once the create function is executed.
   * Fetching the content from http://localhost:8080/api/create. Utilizing the Post method and added a header to set the content type to JSON.
   * Added the necessary props to alocate values to and stringified the content to be added to the JSON file.
   * If successful a modal (Sweetalert2 - Swal.fire) will appear to confirm success and the content will be added to the UI as objects.
   * If unsuccessful a modal (Sweetalert2 - Swal.fire) will appear displaying an error. An error will occur if all the information is not
   * entered as set in the backend/ server side and the content will be returned unchanged.
   * @param {*} e Posting content to JSON as a string and returning the content as objects to the UI.
   */

  const create = (e) => {
    e.preventDefault();

    axios
      .post("cars/create", {
        Model,
        Make,
        Owner,
        Registration,
        Address,
        previousOwners,
      })
      .then((response) => {
        Swal.fire({
          imageUrl: "./images/success.gif",
          imageWidth: 150,
          imageHeight: 150,
          imageAlt: "Error",
          confirmButtonColor: "#007aff",
          width: 400,
          title: "SUCCESS!",
        });
        setCars(response.data);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          imageUrl: "./images/exclamation.gif",
          imageWidth: 150,
          imageHeight: 150,
          imageAlt: "Error",
          confirmButtonColor: "#ff0000",
          width: 400,
          title: "ERROR!",
          text: "User data missing",
        }).then(function () {
          window.location.reload();
        });
      });
  };

  /**
   * Assigned an event.preventDefault() method to ensure that the page is not refreshed once the update function is executed.
   * Fetching the content from http://localhost:8080/api/update/ (an ID should be entered to update that specific car). Utilizing the
   * Put method and added a header to set the content type to JSON.
   * Added the necessary props to alocate values to and stringified the content to be added to the JSON file.
   * If successful a modal (Sweetalert2 - Swal.fire) will appear to confirm success and the content will be added to the UI as objects.
   * If unsuccessful a modal (Sweetalert2 - Swal.fire) will appear displaying an error. An error will occur if all the information is not
   * entered as set in the backend/ server side and the content will be returned unchanged.
   * @param {*} e Updating content, that exists in the JSON file, as a string and returning the content as objects to the UI.
   */

  const updateOne = (e) => {
    e.preventDefault();

    axios
      .put(`cars/updateOne/${id}`, {
        Model: Model,
        Make: Make,
        Owner: Owner,
        Registration: Registration,
        Address: Address,
        previousOwners: previousOwners,
      })
      .then((response) => {
        Swal.fire({
          imageUrl: "./images/success.gif",
          imageWidth: 150,
          imageHeight: 150,
          imageAlt: "Error",
          confirmButtonColor: "#007aff",
          width: 400,
          title: "SUCCESS!",
        });
        setCars(response.data);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          imageUrl: "./images/exclamation.gif",
          imageWidth: 150,
          imageHeight: 150,
          imageAlt: "Error",
          confirmButtonColor: "#ff0000",
          width: 400,
          title: "ERROR!",
          text: "User data missing",
        }).then(function () {
          window.location.reload();
        });
      });
  };

  /**
   * Assigned an event.preventDefault() method to ensure that the page is not refreshed once the update function is executed.
   * Fetching the content from http://localhost:8080/api/update/ (an ID should be entered to update that specific car). Utilizing the
   * Put method and added a header to set the content type to JSON.
   * Added the necessary props to alocate values to and stringified the content to be added to the JSON file.
   * If successful a modal (Sweetalert2 - Swal.fire) will appear to confirm success and the content will be added to the UI as objects.
   * If unsuccessful a modal (Sweetalert2 - Swal.fire) will appear displaying an error. An error will occur if all the information is not
   * entered as set in the backend/ server side and the content will be returned unchanged.
   * @param {*} e Updating content, that exists in the JSON file, as a string and returning the content as objects to the UI.
   */

  const updateMany = (e) => {
    e.preventDefault();

    axios
      .put(`cars/updateMany${Model}`, {
        Make: Make,
        Owner: Owner,
        Registration: Registration,
        Address: Address,
        previousOwners: previousOwners,
      })
      .then((response) => {
        Swal.fire({
          imageUrl: "./images/success.gif",
          imageWidth: 150,
          imageHeight: 150,
          imageAlt: "Error",
          confirmButtonColor: "#007aff",
          width: 400,
          title: "SUCCESS!",
        });
        setCars(response.data);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          imageUrl: "./images/exclamation.gif",
          imageWidth: 150,
          imageHeight: 150,
          imageAlt: "Error",
          confirmButtonColor: "#ff0000",
          width: 400,
          title: "ERROR!",
          text: "User data missing",
        }).then(function () {
          window.location.reload();
        });
      });
  };

  /**
   * Assigned an event.preventDefault() method to ensure that the page is not refreshed once the delete function is executed.
   * Fetching the content from http://localhost:8080/api/delete/ (an ID should be entered to update that specific car). Utilizing the
   * Delete method and added a header to set the content type to JSON.
   * If successful a modal (Sweetalert2 - Swal.fire) will appear to confirm success and the content will be removed from the JSON file and UI.
   * If unsuccessful a modal (Sweetalert2 - Swal.fire) will appear displaying an error.
   * @param {*} e Deleting content that exists in the JSON file.
   */

  const remove = (e) => {
    e.preventDefault();

    axios
      .delete(`cars/delete/${id}`)
      .then((response) => {
        Swal.fire({
          imageUrl: "./images/success.gif",
          imageWidth: 150,
          imageHeight: 150,
          imageAlt: "Error",
          confirmButtonColor: "#007aff",
          width: 400,
          title: "SUCCESS!",
        });
        setCars(response.data);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          imageUrl: "./images/exclamation.gif",
          imageWidth: 150,
          imageHeight: 150,
          imageAlt: "Error",
          confirmButtonColor: "#ff0000",
          width: 400,
          title: "ERROR!",
        }).then(function () {
          window.location.reload();
        });
      });
  };

  /**
   * Added the handleChange() function to the onChange() event to set the new values of the props when values are entered into the input
   * elements.
   * Created buttons for the cars app. Passed onClick() events to create, update and delete cars.
   * @returns Form with labels, input and button elements that can be used to add, update and delete cars.
   */

  return (
    <div>
      <Container>
        <Form className="d-flex flex-column">
          <FormGroup>
            <FormLabel htmlFor="id">ID:</FormLabel>
            <FormControl
              type="text"
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="model">Model:</FormLabel>
            <FormControl
              type="text"
              name="model"
              value={Model || ""}
              onChange={(e) => setModel(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="make">Make:</FormLabel>
            <FormControl
              type="text"
              name="make"
              value={Make || ""}
              onChange={(e) => setMake(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="owner">Owner:</FormLabel>
            <FormControl
              type="text"
              name="owner"
              value={Owner || ""}
              onChange={(e) => setOwner(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="registration">Registration:</FormLabel>
            <FormControl
              type="text"
              name="registration"
              value={Registration || ""}
              onChange={(e) => setRegistration(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="address">Address:</FormLabel>
            <FormControl
              type="text"
              name="address"
              value={Address || ""}
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="previousOwners">Previous Owners:</FormLabel>
            <FormControl
              type="text"
              name="previousOwners"
              value={previousOwners || ""}
              onChange={(e) => setPreviousOwners(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Button
              type="button"
              title="Add New Car"
              onClick={(e) => create(e)}
            >
              <FontAwesomeIcon icon={faPlus} />
              Add
            </Button>
            <Button
              type="button"
              title="Update a Car"
              onClick={(e) => updateOne(e)}
            >
              <FontAwesomeIcon icon={faEdit} />
              <span id="editone">x1</span> Update
            </Button>
            <Button
              type="button"
              title="Update Many Cars"
              onClick={(e) => updateMany(e)}
            >
              <FontAwesomeIcon icon={faEdit} />
              <span id="editmany">+</span> Update
            </Button>
            <Button
              type="button"
              title="Delete a Car"
              onClick={(e) => remove(e)}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
              Delete
            </Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
};

// Exported CarEdit to App.js.
export default CarEdit;
