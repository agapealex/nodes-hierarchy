export const data = {
  nodes: [
    {
      id: 1,
      name: "Node 1.0",
      parent_node: null,
    },
    {
      id: 2,
      name: "Node 1.1",
      parent_node: 1,
    },
    {
      id: 3,
      name: "Node 1.2",
      parent_node: 1,
    },
    {
      id: 4,
      name: "Node 1.1.1",
      parent_node: 2,
    },
    {
      id: 5,
      name: "Node 1.1.2",
      parent_node: 2,
    },
    {
      id: 6,
      name: "Node 1.1.1.1",
      parent_node: 4,
    },
    {
      id: 7,
      name: "Node 1.1.1.2",
      parent_node: 4,
    },
    {
      id: 8,
      name: "Node 2.0",
      parent_node: null,
    },
    {
      id: 9,
      name: "Node 1.2.1",
      parent_node: 3,
    },
    {
      id: 10,
      name: "Node 1.2.2",
      parent_node: 3,
    },
  ],
};

const getRecursionNodes = (initialNodes, currentValue, accumulator) => {
  const children = initialNodes.filter(
    (node) => node.parent_node === currentValue.id
  );

  const allChildren = children.map((child) => {
    return getRecursionNodes(initialNodes, child, accumulator);
  });

  return {
    ...currentValue,
    children: allChildren,
  };
};

export const formatAsTreeData = (data) => {
  const accumulator = [];

  data &&
    data.nodes &&
    data.nodes.forEach((node) => {
      if (node.parent_node === null) {
        accumulator.push(getRecursionNodes(data.nodes, node, accumulator));
      }
    });

  return accumulator;
};
