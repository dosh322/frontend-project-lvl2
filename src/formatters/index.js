import makeStylish from './stylish.js';
import makePlain from './plain.js';
import makeJSON from './json.js';

export default (data, format) => {
  switch (format) {
    case ('stylish'):
      return makeStylish(data);
    case ('plain'):
      return makePlain(data);
    case ('json'):
      return makeJSON(data);
    default:
      throw new Error(`unexpected output format: ${format}`);
  }
};
