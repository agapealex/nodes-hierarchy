import React, { useState } from "react";
import StyledNode from "./node.style";
import { useDispatch } from "react-redux";
import * as Icon from "react-bootstrap-icons";

import ActionModal from "../Modal/actionModal";
import { ADD, DELETE, EDIT } from "../../common/constants";
import { getNumberOfChildren } from "./helpers";
import Menu from "../Menu/menu";

function Node({ node, className, children }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [show, setShow] = useState(false);
  const [handleAction, setHandleAction] = useState(null);
  const [actionName, setActionName] = useState("");

  const dispatch = useDispatch();
  const handleClose = () => setShow(false);

  const dispatchAction = (actionName, node) => {
    return () => {
      dispatch({
        type: actionName,
        payload: {
          node,
        },
      });

      setShow(false);
    };
  };

  const editNode = (nodeName) => {
    let updatedNode = structuredClone(node);
    updatedNode.name = nodeName;

    dispatchAction(EDIT, updatedNode)();
  };

  const addNode = (nodeName) => {
    let updatedNode = structuredClone(node);
    updatedNode.newChildName = nodeName;

    dispatchAction(ADD, updatedNode)();
  };

  const expandNode = () => {
    setIsExpanded(!isExpanded);
  };

  const setActions = (actionName) => {
    setActionName(actionName);
    setShow(true);

    if (actionName === DELETE)
      return setHandleAction(() => dispatchAction(actionName, node));
    else if (actionName === ADD) {
      return setHandleAction(() => addNode);
    } else if (actionName === EDIT) {
      return setHandleAction(() => editNode);
    }
  };

  let numberOfChildren = {
    number: 0,
  };

  getNumberOfChildren(node, numberOfChildren);

  return (
    <StyledNode>
      <div className="node">
        <div className="expand-node" onClick={expandNode}>
          {numberOfChildren.number > 0 ? (
            isExpanded ? (
              <Icon.DashCircleFill className="expand-icon" />
            ) : (
              <Icon.PlusCircleFill className="expand-icon" />
            )
          ) : null}
        </div>
        <div className="node-details">
          <div className="node-name">{node.name}</div>
          <div className="number-children">
            {numberOfChildren.number} nodes under
          </div>
          <Menu setActions={setActions} />
        </div>
      </div>

      {isExpanded && <ul className={`children ${className}`}>{children}</ul>}

      {handleAction && (
        <ActionModal
          handleClose={handleClose}
          handleAction={handleAction}
          actionName={actionName}
          show={show}
          name={node.name}
        />
      )}
    </StyledNode>
  );
}

export default Node;
