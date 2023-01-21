import styled from "styled-components";

const StyledMain = styled.div`
  padding-right: 30px;
  width: 700px;

  .tree-container{
    padding: 30px 0;

    > * {
        margin-top:-20px;
      }
  } 
  
  ul.tree,
  ul.tree ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul.tree ul {
    margin-left: 22px;
  }
  ul.tree li {
    margin: -15px 0 0 0;
    padding-left: 7px;
    line-height: 20px;
    color: #369;
    font-weight: bold;
    border-left: 1px solid #a8acb4;

    &:last-child {
        border-left: none;
        margin-top: -38px;
    
        &:before {
          height: 45px;
        }
      }

      &:before {
        border-bottom: 1px solid #a8acb4;
      }

      &:last-child:before {
        border-left: 1px solid #a8acb4;
      }
  }

  li:before {
    position: relative;
    top: 25px;
    left: -7px;
    width: 22px;
    content: "";
    display: inline-block;
    height: 25px;
  }
`;

export default StyledMain;
