import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { ADD, DELETE, EDIT } from "../../common/constants";

const ActionModal = ({ handleAction, handleClose, actionName, show }) => {
  const [nameValue, setNameValue] = useState("");

  const handleChange = (e) => {
    setNameValue(e.target.value);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>The tree will be modified</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to {actionName} the node?
        {(actionName === EDIT || actionName === ADD) && (
          <Form.Group>
            <Form.Label>Then type the name of node: </Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              value={nameValue}
            />
          </Form.Group>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          type="submit"
          onClick={() => {
            const action = handleAction(nameValue);
            setNameValue("");

            return action;
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ActionModal;