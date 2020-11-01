import _ from 'lodash';
import getJSON from './getJSON.js';

const genDiff = (path1, path2) => {
  const json1 = getJSON(path1);
  const json2 = getJSON(path2);
  const keys1 = Object.keys(json1).sort();
  const keys2 = Object.keys(json2).sort();
  const keys = _.union(keys1, keys2);
  const result = keys.map((key) => {
    if (keys1.includes(key) && !keys2.includes(key)) {
      return `- ${key}: ${json1[key]}\n`;
    } if (!keys1.includes(key) && keys2.includes(key)) {
      return `+ ${key}: ${json2[key]}\n`;
    } if (_.isEqual(json1[key], json2[key])) {
      return `  ${key}: ${json1[key]}\n`;
    } if (!_.isEqual(json1[key], json2[key])) {
      return `- ${key}: ${json1[key]}\n+ ${key}: ${json2[key]}\n`;
    }
    return '';
  });
  return result.join('');
};

export default genDiff;
