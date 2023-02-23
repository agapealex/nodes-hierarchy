export const getNumberOfChildren = (node, accumulator) => {
  
    if (node.children && node.children.length > 0) {
      accumulator.number += node.children.length;
      node.children.forEach((child) => {
        getNumberOfChildren(child, accumulator);
      });
    }
  };

export function reducer(state, action) {
  switch (action.type) {
    case "EXPANDED":
      return { ...state, isExpanded: !state.isExpanded };
    case "SHOW":
      return { ...state, show: action.payload };
    case "ACTION_NAME":
      return { ...state, actionName: action.payload };
    case "HANDLE_ACTION":
      return { ...state, handleAction: action.payload };
    default:
      return state;
  }
}