import React, { useReducer } from "react";
import StyledNode from "./node.style";
import { useDispatch } from "react-redux";
import * as Icon from "react-bootstrap-icons";

import ActionModal from "../Modal/actionModal";
import { ADD, DELETE, EDIT } from "../../common/constants";
import { getNumberOfChildren, reducer } from "./helpers";
import Menu from "../Menu/menu";

function Node({ node, className, children }) {;

  const [state, localDispatch] = useReducer(reducer, {
    isExpanded: true,
    show: false,
    handleAction: "",
    actionName: null,
  })

  const dispatch = useDispatch();
  const handleClose = () => localDispatch({ type: "SHOW", payload: false});

  const dispatchAction = (actionName, node) => {
    return () => {
      dispatch({
        type: actionName,
        payload: {
          node,
        },
      });

      localDispatch({ type: "SHOW", payload: false});
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
    localDispatch({ type: "EXPANDED"})
  };

  const setActions = (actionName) => {
    localDispatch({ type: "ACTION_NAME", payload: actionName});
    localDispatch({ type: "SHOW", payload: true});

    if (actionName === DELETE)
      return localDispatch({ type: "HANDLE_ACTION", payload: dispatchAction(actionName, node)});
    else if (actionName === ADD) {
      return localDispatch({ type: "HANDLE_ACTION", payload: addNode });
    } else if (actionName === EDIT) {
      return localDispatch({ type: "HANDLE_ACTION", payload: editNode });
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
            state.isExpanded? (
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

      {state.isExpanded && <ul className={`children ${className}`}>{children}</ul>}

      {state.handleAction && (
        <ActionModal
          handleClose={handleClose}
          handleAction={state.handleAction}
          actionName={state.actionName}
          show={state.show}
          name={node.name}
        />
      )}
    </StyledNode>
  );
}

export default Node;
