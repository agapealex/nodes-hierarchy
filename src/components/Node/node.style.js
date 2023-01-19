import styled from "styled-components";

const StyledNode = styled.div`

  padding-left: 50px;

  .node {
    display: flex;
  }

  .expand-node {
    width: 50px;
    background-color: red;
    margin: 10px 0 10px 0;
  }

  .node-details {
    background-color: green;
    margin: 10px 0 10px 0;
    height: 30px;
    width: 100%;
  }

  .children{
  }
`;

export default StyledNode;
