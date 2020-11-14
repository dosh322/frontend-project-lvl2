import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import genDiff from './buildAST.js';
import stylize from './formatters/index.js';

const getDataFormat = (filepath) => path.extname(filepath).slice(1);
const getContent = (filepath) => fs.readFileSync(path.resolve(process.cwd(), filepath));

export default (filepath1, filepath2, format = 'stylish') => {
  const parsedContentOfFile1 = parse(getContent(filepath1), getDataFormat(filepath1));
  const parsedContentOfFile2 = parse(getContent(filepath2), getDataFormat(filepath2));
  const dataDiff = genDiff(parsedContentOfFile1, parsedContentOfFile2);
  return stylize(dataDiff, format);
};
