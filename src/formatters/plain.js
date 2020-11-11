import _ from 'lodash';

const format = (value) => {
  if (_.isString(value)) {
    return `'${value}'`;
  } if (_.isObject(value)) {
    return '[complex value]';
  } return value;
};

const plainer = (data) => {
  const iter = (tree, path = []) => {
    const test = tree.flatMap((obj) => {
      const key = [...path, obj.key].join('.');
      switch (obj.type) {
        case ('added'):
          return `Property '${key}' was added with value: ${format(obj.value)}`;
        case ('deleted'):
          return `Property '${key}' was removed`;
        case ('updated'):
          return `Property '${key}' was updated. From ${format(obj.firstValue)} to ${format(obj.secondValue)}`;
        case ('nested'):
          return `${iter(obj.children, [key])}`;
        case ('same'):
          return [];
        default:
          throw new Error('### Unexpected error ');
      }
    });
    return test.join('\n');
  };
  return iter(data);
};

export default plainer;
