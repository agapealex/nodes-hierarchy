import React, { useState } from "react";
import StyledNode from "./node.style";
import { useDispatch } from "react-redux";
import ActionModal from "../Modal/actionModal";
import * as Icon from "react-bootstrap-icons";

import { ADD, DELETE, EDIT } from "../../common/constants";
import { getNumberOfChildren } from "./helpers";
import Menu from "../Menu/menu";

function Node({ node, children }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [show, setShow] = useState(false);
  const [handleAction, setHandleAction] = useState(() => {});
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

  const changeTree = (actionName) => {
    setActionName(actionName);
    setShow(true);

    if (actionName === DELETE)
      return setHandleAction(() => dispatchAction(actionName, node));
    // it is calling action if is not a callback
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
      <div
        className="node-container show"
        style={{ display: "block", position: "static", overflow: "inherit" }}
      >
        <div className="node">
          <div className="expand-node" onClick={expandNode}>
            {numberOfChildren.number > 0 ? (
              isExpanded ? (
                <Icon.DashCircleFill />
              ) : (
                <Icon.PlusCircleFill />
              )
            ) : (
              null
            )}
          </div>
          <div className="node-details">
            <div className="node-name">{node.name}</div>
            <div className="number-children">
              {numberOfChildren.number} nodes under
            </div>
            <Menu changeTree={changeTree} />
          </div>
        </div>

        {isExpanded && <ul className="children">{children}</ul>}

        <ActionModal
          handleClose={handleClose}
          handleAction={handleAction}
          actionName={actionName}
          show={show}
        />
      </div>
    </StyledNode>
  );
}

export default Node;
