import styled, { css } from "styled-components";

const StyledNode = styled.li`
  ${({ theme: { colors, size, inputFields, fonts } }) => css`
    padding-left: ${size.xxl};

    .node {
      display: flex;

      .expand-node {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        color: ${colors.gray};

        .expand-icon {
          line-height: 28px;
        }
      }
    }

    .children.tree {
      padding-left: ${size.l};
    }

    .node-details {
      display: flex;
      align-items: center;
      position: relative;
      padding-left: ${size.xxl};
      height: 40px;
      width: 100%;
      border: ${inputFields.borderProps.border};
      -webkit-box-shadow: ${inputFields.borderProps.webkit};
      box-shadow: ${inputFields.borderProps.boxShadow};

      > * {
        &:last-child,
        &:nth-child(2) {
          right: 0;
          position: absolute;
        }
        &:nth-child(2) {
          margin-right: ${size.xxl};
        }
      }

      .node-name {
        color: ${colors.gray};
        font-size: 13px;
        font-weight: 500;
        font-family: ${fonts[0], fonts[1]};
        user-select: none;
      }

      .number-children {
        color: ${colors.gray};
        font-size: 12px;
        font-weight: 300;
        font-family: ${fonts[0], fonts[1]};
        user-select: none;
      }
    }

    .three-dots {
      color: ${colors.borderGray};
    }
  `};
`;

export default StyledNode;
