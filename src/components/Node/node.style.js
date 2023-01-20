import styled from "styled-components";

const StyledNode = styled.div`

  padding-left: 50px;

  .node {
    display: flex;
  }

  .expand-node {
    width: 50px;
    background-color: #DCDCDC;
    margin: 10px 0 10px 0;
  }

  .node-details {
    background-color: green;
    margin: 10px 0 10px 0;
    height: 30px;
    width: 100%;
  }

  .three-dots{
    color: #DCDCDC;
    margin-top: 15px;
  }
`;

export default StyledNode;
