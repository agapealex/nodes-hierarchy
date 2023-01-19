import React from "react";
import StyledNode from "./node.style";
import { useSelector, useDispatch } from "react-redux";

function Node({ node, children }) {
  // const list = useSelector((state) => state.xReducer.listAsTree);

  const dispatch = useDispatch();

  const removeNode = (node) => {
    dispatch({
      type: "DELETE",
      payload: {
        node,
      },
    });
  };
  
  return (
    <StyledNode>
      <div className="node">
        <div className="expand-node">f</div>
        <div className="node-details">{node.id}</div>
        <button onClick={() => removeNode(node)}> delete</button>
      </div>
      {children}
    </StyledNode>
  );
}

export default Node;
