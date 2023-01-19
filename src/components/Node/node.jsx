import React, { useState } from "react";
import StyledNode from "./node.style";
import { useSelector, useDispatch } from "react-redux";

function Node({ node, children }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const dispatch = useDispatch();

  const removeNode = (node) => {
    dispatch({
      type: "DELETE",
      payload: {
        node,
      },
    });
  };

  const addNode = (node) => {
    dispatch({
      type: "ADD",
      payload: {
        node,
      },
    });
  };

  const editNode = (node) =>{
    let updatedNode = structuredClone(node);
    updatedNode.name = "nume node";

    dispatch({
        type: "EDIT",
        payload: {
            node: updatedNode,
        },
      });
  }

  const expandNode = () => {
    setIsExpanded(!isExpanded);
  };

  //   console.log(isExpanded, "$$$")

  return (
    <StyledNode>
      <div className="node" >
        <div className="expand-node" onClick={() => expandNode()}>f</div>
        <div className="node-details">{node.name}</div>
        <button onClick={() => addNode(node)}> add</button>
        <button onClick={() => editNode(node)}> edit</button>
        <button onClick={() => removeNode(node)}> delete</button>
      </div>
      {isExpanded && <div className="children">{children}</div>}
    </StyledNode>
  );
}

export default Node;
