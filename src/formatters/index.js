import makeStylish from './stylish.js';
import makePlain from './plain.js';
import makeJSON from './json.js';

export default (ast, format) => {
  switch (format) {
    case ('stylish'):
      return makeStylish(ast);
    case ('plain'):
      return makePlain(ast);
    case ('json'):
      return makeJSON(ast);
    default:
      throw new Error(`unexpected output format: ${format}`);
  }
};
