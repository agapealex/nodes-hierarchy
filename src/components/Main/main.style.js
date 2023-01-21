import styled from "styled-components";

const StyledMain = styled.div`
  padding: 0 30px 0 0;
  width: 800px;

  ul.tree,
  ul.tree ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul.tree ul {
    margin-left: 22px; ////////////
  }
  ul.tree li {
    margin: 0;
    padding-left: 7px;
    line-height: 20px;
    color: #369;
    font-weight: bold;
    border-left: 1px solid rgb(100, 100, 100);
  }
  ul.tree li:last-child {
    border-left: none;
    margin-top: -26px; ///////
    // padding-top: -26px;
    // top: 2.6em;

    &:before {
      height: 56px;
    }
  }

  li:before {
    position: relative;
    top: 1.6em; /////
    left: -7px;
    width: 22px; ////////////
    content: "";
    // color: white;
    display: inline-block;
    height: 27px; /////
  }

  .tree li:before {
    border-bottom: 1px solid rgb(100, 100, 100);
  }
  ul.tree li:last-child:before {
    border-left: 1px solid rgb(100, 100, 100);
  }

  .expand-line {
     position: relative;
     top: 1.3em; /////
     left: -9px;
    //  height: 2px; ////////////
    content: "";
    // color: white;
    // display: inline-block;
    height: 27px; /////
    border-left: 1px solid rgb(100, 100, 100);
  }
`;

export default StyledMain;