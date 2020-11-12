/* eslint-disable no-underscore-dangle */

import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test.each([
  ['json', 'stylish'],
  ['json', 'plain'],
  ['json', 'json'],
  ['yml', 'stylish'],
  ['yml', 'plain'],
  ['yml', 'json'],
])('%s extension, %s output format', (ext, format) => {
  const file1 = getFixturePath(`before.${ext}`);
  const file2 = getFixturePath(`after.${ext}`);
  const results = ['result-stylish.txt', 'result-plain.txt', 'result-json.txt'];
  const result = results.filter((fileName) => fileName.includes(`${format}`)).join();
  const expected = readFile(result);
  expect(genDiff(file1, file2, format)).toEqual(expected);
});
