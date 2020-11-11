import _ from 'lodash';

const genDiff = (obj1, obj2) => {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2)).sort();
  return keys.map((key) => {
    if (!_.has(obj1, key)) {
      return { key, type: 'added', value: obj2[key] };
    } if (!_.has(obj2, key)) {
      return { key, type: 'deleted', value: obj1[key] };
    } if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      return { key, type: 'nested', children: genDiff(obj1[key], obj2[key]) };
    } if (!_.isEqual(obj1[key], obj2[key])) {
      return {
        key, type: 'updated', firstValue: obj1[key], secondValue: obj2[key],
      };
    }
    return { key, type: 'same', value: obj1[key] };
  });
};

export default genDiff;
