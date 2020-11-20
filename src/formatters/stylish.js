import _ from 'lodash';

const baseIndent = 4;
const firstIndent = 2;
const getIndent = (depth) => (' ').repeat(firstIndent + baseIndent * depth);

const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }
  const nestedDepth = depth + 1;
  const formattedValues = Object
    .entries(value)
    .map(([key, nodeValue]) => `${getIndent(nestedDepth)}  ${key}: ${stringify(nodeValue, nestedDepth)}`);
  return `{\n${formattedValues.join('\n')}\n${getIndent(depth)}  }`;
};

const makeStylish = (ast) => {
  const iter = (tree, depth) => tree.flatMap((node) => {
    switch (node.type) {
      case ('nested'):
        return `${getIndent(depth)}  ${node.key}: {\n${iter(node.children, depth + 1)}\n${getIndent(depth)}  }`;
      case ('added'):
        return `${getIndent(depth)}+ ${node.key}: ${stringify(node.value, depth)}`;
      case ('deleted'):
        return `${getIndent(depth)}- ${node.key}: ${stringify(node.value, depth)}`;
      case ('updated'):
        return [`${getIndent(depth)}- ${node.key}: ${stringify(node.firstValue, depth)}`,
          `${getIndent(depth)}+ ${node.key}: ${stringify(node.secondValue, depth)}`];
      case ('unchanged'):
        return `${getIndent(depth)}  ${node.key}: ${stringify(node.value, depth)}`;
      default:
        throw new Error('unexpected node type');
    }
  }).join('\n');
  return `{\n${iter(ast, 0)}\n}`;
};

export default makeStylish;
