import _ from 'lodash';

const stringify = (value) => {
  if (_.isString(value)) {
    return `'${value}'`;
  }
  if (_.isObject(value)) {
    return '[complex value]';
  } return value;
};

const makePlain = (ast) => {
  const iter = (tree, path) => tree
    .flatMap((node) => {
      const key = [...path, node.key].join('.');
      switch (node.type) {
        case ('added'):
          return `Property '${key}' was added with value: ${stringify(node.value)}`;
        case ('deleted'):
          return `Property '${key}' was removed`;
        case ('updated'):
          return `Property '${key}' was updated. From ${stringify(node.firstValue)} to ${stringify(node.secondValue)}`;
        case ('nested'):
          return `${iter(node.children, [key]).join('\n')}`;
        case ('unchanged'):
          return [];
        default:
          throw new Error('Unexpected node type');
      }
    });
  return iter(ast, []).join('\n');
};

export default makePlain;
