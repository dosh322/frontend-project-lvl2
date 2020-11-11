import _ from 'lodash';

const baseIndent = 2;

const getIndent = (spaces) => (' ').repeat(spaces);
const getCurrentSpaces = (spaces) => spaces + baseIndent;
const getNextSpaces = (spaces) => getCurrentSpaces(spaces) + baseIndent;

const getValue = (data, spaces) => {
  if (!_.isObject(data)) {
    return data;
  }
  const currentSpaces = getCurrentSpaces(spaces);
  const nextSpaces = getNextSpaces(spaces);
  const entries = Object
    .entries(data)
    .map(([key, objValue]) => {
      if (_.isObject(objValue)) {
        return `${getIndent(currentSpaces)}  ${key}: ${getValue(objValue, nextSpaces)}`;
      }
      return `${getIndent(currentSpaces)}  ${key}: ${objValue}`;
    });
  return `{\n${entries.join('\n')}\n${getIndent(spaces)}}`;
};

const toStylish = (data) => {
  const iter = (tree, spaces) => tree.flatMap((obj) => {
    const currentSpaces = getCurrentSpaces(spaces);
    const nextSpaces = getNextSpaces(spaces);
    switch (obj.type) {
      case ('nested'):
        return `${getIndent(currentSpaces)}  ${obj.key}: {\n${iter(obj.children, nextSpaces)}\n${getIndent(currentSpaces)}  }`;
      case ('added'):
        return `${getIndent(currentSpaces)}+ ${obj.key}: ${getValue(obj.value, nextSpaces)}`;
      case ('deleted'):
        return `${getIndent(currentSpaces)}- ${obj.key}: ${getValue(obj.value, nextSpaces)}`;
      case ('updated'):
        return [`${getIndent(currentSpaces)}- ${obj.key}: ${getValue(obj.firstValue, nextSpaces)}`,
          `${getIndent(currentSpaces)}+ ${obj.key}: ${getValue(obj.secondValue, nextSpaces)}`];
      case ('unchanged'):
        return `${getIndent(currentSpaces)}  ${obj.key}: ${getValue(obj.value, nextSpaces)}`;
      default:
        throw new Error('unexpected type');
    }
  }).join('\n');
  return `{\n${iter(data, 0)}\n}`;
};

export default toStylish;
