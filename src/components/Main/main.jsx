import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import StyledMain from "./main.style";
import Node from "../Node/node";
import { formatAsTreeData } from "./helpers";

const recursion = (node) => {
  return (
    <Node x={node}>
      {node.children.length !== 0 && (
        <>{node.children.map((child) => recursion(child))}</>
      )}
    </Node>
  );
};

function Main() {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.xReducer.list);

  useEffect(() => {
    dispatch({
      type: "DATA",
      payload: formatAsTreeData(),
    });
  }, []);

  return (
    <StyledMain>
      <>{list && list.length !== 0 && list.map((x) => recursion(x))}</>
    </StyledMain>
  );
}

export default Main;
