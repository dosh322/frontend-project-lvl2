import stylish from './stylish.js';
import plainer from './plain.js';

export default (data, format) => {
  switch (format) {
    case ('stylish'):
      return stylish(data);
    case ('plain'):
      return plainer(data);
    default:
      throw new Error('unexpected format');
  }
};
