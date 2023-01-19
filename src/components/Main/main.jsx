import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import StyledMain from "./main.style";
import Node from "../Node/node";
import { formatAsTreeData, data } from "./helpers";

const recursion = (node) => {
  return (
    <Node node={node}>
      {node.children.length !== 0 && (
        <>{node.children.map((child) => recursion(child))}</>
      )}
    </Node>
  );
};

function Main({}) {
    
  const initialList = useSelector((state) => state.xReducer.initialList);
  const list = useSelector((state) => state.xReducer.listAsTree);

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
      {list && list.length !== 0 && list.map((x) => recursion(x))}
    </StyledMain>
  );
}

export default Main;
