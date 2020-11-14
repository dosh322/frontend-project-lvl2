import yaml from 'js-yaml';

const parse = (fileContent, dataFormat) => {
  switch (dataFormat) {
    case 'json':
      return JSON.parse(fileContent);
    case 'yml':
      return yaml.safeLoad(fileContent);
    default:
      throw new Error(`Unexpected data format: ${dataFormat}`);
  }
};

export default parse;
