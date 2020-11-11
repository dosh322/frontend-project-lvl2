import toStylish from './stylish.js';
import toPlain from './plain.js';
import toJSON from './json.js';

export default (data, format) => {
  switch (format) {
    case ('stylish'):
      return toStylish(data);
    case ('plain'):
      return toPlain(data);
    case ('json'):
      return toJSON(data);
    default:
      throw new Error(`unexpected output format: ${format}`);
  }
};
