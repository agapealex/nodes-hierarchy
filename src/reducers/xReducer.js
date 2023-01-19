import uuid from "react-uuid";
import { ADD, DELETE, EDIT } from '../common/constants';

const initialState = {
  initialList: {},
  listAsTree: [],
};

const recursion = (mainNode, nodeToDelete, newInitialList) => {
  if (mainNode.id === nodeToDelete.id) {
    mainNode.children = [];
  } else {
    newInitialList.nodes.push({
      id: mainNode.id,
      name: mainNode.name,
      parent_node: mainNode.parent_node,
    });
  }

  mainNode.children.forEach((child) =>
    recursion(child, nodeToDelete, newInitialList)
  );
};

function xReducer(state = initialState, action) {
  let newInitialList = {
    nodes: [],
  };

  switch (action.type) {
    case "GET_ DATA":
      return {
        ...state,
        initialList: action.payload.initialList,
      };

    case "FORMAT_ DATA":
      return {
        ...state,
        listAsTree: action.payload.listAsTree,
      };

    case DELETE:
      let copyListAsTree = structuredClone(state.listAsTree);

      copyListAsTree.map((node) =>
        recursion(node, action.payload.node, newInitialList)
      );
      return {
        ...state,
        initialList: newInitialList,
      };

    case ADD:
      newInitialList = structuredClone(state.initialList);

      newInitialList.nodes.push({
        id: uuid(),
        name: action.payload.node.newChildName,
        parent_node: action.payload.node.id,
      });

      return {
        ...state,
        initialList: newInitialList,
      };
    case EDIT:
      newInitialList = structuredClone(state.initialList);

      newInitialList.nodes.length > 0 &&
        newInitialList.nodes.forEach((node) => {
          if (node.id === action.payload.node.id) {
            node.name = action.payload.node.name;
          }
        });

      return {
        ...state,
        initialList: newInitialList,
      };
    default:
      return state;
  }
}

export default xReducer;
