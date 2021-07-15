// Imported React libraries and Component from React.
import React, { useState } from "react";
// Imported Modal and Button from React Bootstrap.
import { Modal, Button } from "react-bootstrap";
// Imported icon from FontAwesome.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

/**
 * Set the initial state of the modal to not show.
 * Set the handlers to show the modal once the handleShow() function is called (boolean = true) and to not show
 * once the onHide() function is called (boolean = false).
 */

const UsageInstructions = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /**
   * Returning the buttons and the modal that has been created.
   * Passed the "handleShow" handler to the onClick event of the icon/ button.
   * Passed the "handleClose" handler to the onHide event of the top close button and to the onClick event of the "OK" button. The modal will
   * also close if the user clicks "outside of the modal."
   * @returns Buttons that show/ hide modal.
   */

  return (
    <div id="headersection2">
      <FontAwesomeIcon
        icon={faInfoCircle}
        title="View Older Cars"
        onClick={handleShow}
      />
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Usage Instructions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            To <b>CREATE</b> a new car enter the model, make, owner,
            registration, address and previous owners into the input fields.
            Click on the "<b>Add</b>" button. An ID will be generated for you.
          </p>
          <p>
            To <b>UPDATE ONE</b> existing car entry enter the ID and make the
            changes that you wish to make to the model, make, owner,
            registration, address and previous owners by inputting the
            information into the input fields. Click on the "<b>x1 Update</b>"
            button.
          </p>
          <p>
            To <b>UPDATE MORE THAN ONE</b> existing car, enter the Model year
            and make the changes that you wish to make to the make, owner,
            registration, address and previous owners by inputting the
            information into the input fields. Click on the "<b>+ Update</b>"
            button. This feature allows you to populate the same information for
            all car entries with the same model year.
          </p>
          <p>
            To <b>DELETE</b> an existing car entry enter the ID of the car entry
            that you wish to remove. Click on the "<b>Delete</b>" button.
          </p>
          <p>
            The table on the right-hand side will show the list of car entries
            that you have added and will update accordingly if any changes are
            made.
          </p>
          <p>
            For any changes made an alert will appear confirming that the change
            was successful or whether an error has occured performing the
            operation.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <div id="modalfootercontainer1">
            <img src="./images/list.gif" alt="List" />
            <h4 id="modalfootertext">HAPPY LISTING!</h4>
          </div>
          <Button
            variant="primary"
            onClick={handleClose}
            title="OK"
            id="modalfooterbutton"
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

// Exported UsageInstructions to the Header component.
export default UsageInstructions;
