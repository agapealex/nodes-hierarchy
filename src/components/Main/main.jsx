import React from "react";
import StyledMain from "./main.style";
import Node from "../Node/node";
import { formatAsDomData } from "./helpers";

function Main() {
  const list = [1, 2, 3];

  formatAsDomData();

  return (
    <StyledMain>
      {list.map((x) => (
        <Node x={x} />
      ))}
    </StyledMain>
  );
}

export default Main;
