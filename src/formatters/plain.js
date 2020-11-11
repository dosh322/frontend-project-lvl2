import _ from 'lodash';

const formatValue = (value) => {
  if (_.isString(value)) {
    return `'${value}'`;
  } if (_.isObject(value)) {
    return '[complex value]';
  } return value;
};

const toPlain = (data) => {
  const iter = (tree, path = []) => {
    const test = tree.flatMap((obj) => {
      const key = [...path, obj.key].join('.');
      switch (obj.type) {
        case ('added'):
          return `Property '${key}' was added with value: ${formatValue(obj.value)}`;
        case ('deleted'):
          return `Property '${key}' was removed`;
        case ('updated'):
          return `Property '${key}' was updated. From ${formatValue(obj.firstValue)} to ${formatValue(obj.secondValue)}`;
        case ('nested'):
          return `${iter(obj.children, [key])}`;
        case ('unchanged'):
          return [];
        default:
          throw new Error('### Unexpected error ');
      }
    });
    return test.join('\n');
  };
  return iter(data);
};

export default toPlain;
