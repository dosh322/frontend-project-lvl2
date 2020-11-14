import _ from 'lodash';

const formatValue = (value) => {
  if (_.isString(value)) {
    return `'${value}'`;
  }
  if (_.isObject(value)) {
    return '[complex value]';
  } return value;
};

const makePlain = (diff) => {
  const iter = (tree, path = []) => tree
    .flatMap((node) => {
      const key = [...path, node.key].join('.');
      switch (node.type) {
        case ('added'):
          return `Property '${key}' was added with value: ${formatValue(node.value)}`;
        case ('deleted'):
          return `Property '${key}' was removed`;
        case ('updated'):
          return `Property '${key}' was updated. From ${formatValue(node.firstValue)} to ${formatValue(node.secondValue)}`;
        case ('nested'):
          return `${iter(node.children, [key])}`;
        case ('unchanged'):
          return [];
        default:
          throw new Error('### Unexpected error ');
      }
    }).join('\n');
  return iter(diff);
};

export default makePlain;
