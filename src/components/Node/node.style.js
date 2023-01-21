import styled from "styled-components";

const StyledNode = styled.li`
  padding-left: 30px;

  .node {
    display: flex;

    .expand-node {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      color: #a8acb4;

      .expand-icon{
        line-height: 28px;
      }
    }
  }

  .children.tree{
    padding-left: 22px;
  }
  
  .node-details {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 30px;
    height: 40px;
    width: 100%;
    border: solid 1px #dcdcdc;
    -webkit-box-shadow: -1px 2px 3px 1px rgba(169, 169, 169, 0.21);
    box-shadow: -1px 2px 3px 1px rgba(169, 169, 169, 0.21);

    > * {
      &:last-child,
      &:nth-child(2) {
        right: 0;
        position: absolute;
      }
      &:nth-child(2) {
        margin-right: 30px;
      }
    }

    .node-name {
      color: #a8acb4;
      font-size: 13px;
      font-weight: 500;
      font-family: "Open Sans", sans-serif;
      user-select: none;
    }

    .number-children {
      color: #a8acb4;
      font-size: 12px;
      font-weight: 300;
      font-family: "Open Sans", sans-serif;
      user-select: none;
    }
  }

  .three-dots {
    color: #dcdcdc;
  }
`;

export default StyledNode;
