import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import genDiff from './gendiff.js';
import stylize from './formatters/stylish.js';

const getContent = (filepath) => {
  const ext = path.extname(filepath).slice(1);
  const fileContent = fs.readFileSync(path.resolve(process.cwd(), filepath));
  return parse(fileContent, ext);
};

export default (filepath1, filepath2) => {
  const file1 = getContent(filepath1);
  const file2 = getContent(filepath2);
  const dataDiff = genDiff(file1, file2);
  return stylize(dataDiff);
};
