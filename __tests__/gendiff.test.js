import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const results = {
  stylish: readFile('result-stylish.txt'),
  plain: readFile('result-plain.txt'),
  json: readFile('result-json.txt'),
};

test.each([
  ['.json', 'stylish'],
  ['.json', 'plain'],
  ['.json', 'json'],
  ['.yml', 'stylish'],
  ['.yml', 'plain'],
  ['.yml', 'json'],
])('%s extension, %s output format', (ext, format) => {
  const file1 = getFixturePath(`before${ext}`);
  const file2 = getFixturePath(`after${ext}`);
  const expected = results[format];
  expect(genDiff(file1, file2, format)).toEqual(expected);
});
