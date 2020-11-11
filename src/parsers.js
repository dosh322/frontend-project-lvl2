import yaml from 'js-yaml';

const parse = (fileContent, ext) => {
  switch (ext) {
    case 'json':
      return JSON.parse(fileContent);
    case 'yml':
      return yaml.safeLoad(fileContent);
    default:
      throw new Error('Undefined File Format');
  }
};

export default parse;
