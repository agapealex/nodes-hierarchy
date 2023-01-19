const initialState = {
  initialList: {},
  listAsTree: []
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
    case "DELETE":
      let newInitialList = {
        nodes: [],
      };

      let copyListAsTree = structuredClone(state.listAsTree);

      copyListAsTree.map((node) => recursion(node, action.payload.node, newInitialList));
      return {
        ...state,
        initialList: newInitialList
      };
    default:
      return state;
  }
}

export default xReducer;
