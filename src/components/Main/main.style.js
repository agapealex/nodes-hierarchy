import styled, {css} from "styled-components";

const StyledMain = styled.div`

  ${
    ({ theme: { colors, size}}) => css`
    padding-right: ${size.xxl};
    width: 700px;
  
    .tree-container{
      padding: ${size.xl} 0;
  
      > * {
          margin-top: -${size.m};
        }
    } 
    
    ul.tree,
    ul.tree ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    ul.tree ul {
      margin-left: ${size.l};
    }
    ul.tree li {
      margin: -15px 0 0 0;
      padding-left: 7px;
      line-height: ${size.m};
      color: #369;
      font-weight: bold;
      border-left: 1px solid ${colors.gray};
  
      &:last-child {
          border-left: none;
          margin-top: -38px;
      
          &:before {
            height: 45px;
          }
        }
  
        &:before {
          border-bottom: 1px solid ${colors.gray};
        }
  
        &:last-child:before {
          border-left: 1px solid ${colors.gray};
        }
    }
  
    li:before {
      position: relative;
      top: ${size.xl};
      left: -7px;
      width: ${size.l};
      content: "";
      display: inline-block;
      height: ${size.xl};
    }
    `
  }
`;

export default StyledMain;
