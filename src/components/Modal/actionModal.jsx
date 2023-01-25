import React, { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { convertUpperCamelCase } from "../../common/utils";
import { ADD, EDIT } from "../../common/constants";

const ActionModal = ({ handleAction, handleClose, actionName, show, name }) => {
  const [nameValue, setNameValue] = useState(name);
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setNameValue(e.target.value);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Form
        onSubmit={(event) => {
          const action = handleAction(nameValue);
          setNameValue(nameValue);
          event.preventDefault();
          event.stopPropagation();

          return action;
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>The tree will be modified</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to {actionName.toLowerCase()} the node?
          {(actionName === EDIT || actionName === ADD) && (
            <Form.Group>
              <Form.Label>Then type the name of node: </Form.Label>
              <Form.Control
                ref={inputRef}
                type="text"
                onChange={handleChange}
                value={nameValue}
                required
              />
            </Form.Group>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            {convertUpperCamelCase(actionName)} node
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ActionModal;
