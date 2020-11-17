import _ from 'lodash';

const baseIndent = 2;

const getIndent = (spacesCount) => (' ').repeat(spacesCount);
const getCurrentSpacesCount = (spacesCount) => spacesCount + baseIndent;
const getNextSpacesCount = (spacesCount) => getCurrentSpacesCount(spacesCount) + baseIndent;

const getValue = (value, spaces) => {
  if (!_.isObject(value)) {
    return value;
  }
  const currentSpaces = getCurrentSpacesCount(spaces);
  const nextSpaces = getNextSpacesCount(spaces);
  const entries = Object
    .entries(value)
    .map(([key, nodeValue]) => {
      if (_.isObject(nodeValue)) {
        return `${getIndent(currentSpaces)}  ${key}: ${getValue(nodeValue, nextSpaces)}`;
      }
      return `${getIndent(currentSpaces)}  ${key}: ${nodeValue}`;
    });
  return `{\n${entries.join('\n')}\n${getIndent(spaces)}}`;
};

const makeStylish = (ast) => {
  const iter = (tree, spaces) => tree.flatMap((node) => {
    const currentSpaces = getCurrentSpacesCount(spaces);
    const nextSpaces = getNextSpacesCount(spaces);
    switch (node.type) {
      case ('nested'):
        return `${getIndent(currentSpaces)}  ${node.key}: {\n${iter(node.children, nextSpaces)}\n${getIndent(currentSpaces)}  }`;
      case ('added'):
        return `${getIndent(currentSpaces)}+ ${node.key}: ${getValue(node.value, nextSpaces)}`;
      case ('deleted'):
        return `${getIndent(currentSpaces)}- ${node.key}: ${getValue(node.value, nextSpaces)}`;
      case ('updated'):
        return [`${getIndent(currentSpaces)}- ${node.key}: ${getValue(node.firstValue, nextSpaces)}`,
          `${getIndent(currentSpaces)}+ ${node.key}: ${getValue(node.secondValue, nextSpaces)}`];
      case ('unchanged'):
        return `${getIndent(currentSpaces)}  ${node.key}: ${getValue(node.value, nextSpaces)}`;
      default:
        throw new Error('unexpected type');
    }
  }).join('\n');
  return `{\n${iter(ast, 0)}\n}`;
};

export default makeStylish;
