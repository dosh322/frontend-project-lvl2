/* eslint-disable no-underscore-dangle */

import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('JSON test', () => {
  const result = readFile('result-json.txt');
  const before = getFixturePath('before.json');
  const after = getFixturePath('after.json');

  const diff = genDiff(before, after);
  expect(diff).toEqual(result);
});
