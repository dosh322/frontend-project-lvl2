import _ from 'lodash';

// AST - is abstract syntax tree

const buildAST = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2)).sort();
  return keys.map((key) => {
    if (!_.has(data1, key)) {
      return { key, type: 'added', value: data2[key] };
    }
    if (!_.has(data2, key)) {
      return { key, type: 'deleted', value: data1[key] };
    }
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { key, type: 'nested', children: buildAST(data1[key], data2[key]) };
    }
    if (!_.isEqual(data1[key], data2[key])) {
      return {
        key, type: 'updated', firstValue: data1[key], secondValue: data2[key],
      };
    }
    return { key, type: 'unchanged', value: data1[key] };
  });
};

export default buildAST;
