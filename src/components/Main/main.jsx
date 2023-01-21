import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import StyledMain from "./main.style";
import Node from "../Node/node";
import { formatAsTreeData, data } from "./helpers";

const recursion = (node) => {
  return (
    <Node node={node} className={node.parent_node === null ? "tree" : ""}>
      {node.children.length !== 0 && (
        <>{node.children.map((child) => recursion(child))}</>
      )}
    </Node>
  );
};

function Main({}) {
    
  const initialList = useSelector((state) => state.actionReducer.initialList);
  const list = useSelector((state) => state.actionReducer.listAsTree);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "GET_ DATA",
      payload: {
        initialList: data,
      },
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: "FORMAT_ DATA",
      payload: {
        listAsTree: formatAsTreeData(initialList),
      },
    });
  }, [initialList]);

  return (
    <StyledMain>
      <ul className="tree-container">
        {list && list.length !== 0 && list.map((x) => recursion(x))}
      </ul>
    </StyledMain>
  );
}

export default Main;
