export const getNumberOfChildren = (node, accumulator) => {
  
    if (node.children && node.children.length > 0) {
      accumulator.number += node.children.length;
      node.children.forEach((child) => {
        getNumberOfChildren(child, accumulator);
      });
    }
  };

