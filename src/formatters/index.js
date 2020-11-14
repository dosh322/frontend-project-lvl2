import makeStylish from './stylish.js';
import makePlain from './plain.js';
import makeJSON from './json.js';

export default (diff, format) => {
  switch (format) {
    case ('stylish'):
      return makeStylish(diff);
    case ('plain'):
      return makePlain(diff);
    case ('json'):
      return makeJSON(diff);
    default:
      throw new Error(`unexpected output format: ${format}`);
  }
};
