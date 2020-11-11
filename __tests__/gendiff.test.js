/* eslint-disable no-underscore-dangle */

import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const resultStylish = readFile('result-stylish.txt');
const resultPlain = readFile('result-plain.txt');

test('JSON test', () => {
  const beforeJson = getFixturePath('before.json');
  const afterJson = getFixturePath('after.json');

  const diffStylish = genDiff(beforeJson, afterJson, 'stylish');
  const diffPlain = genDiff(beforeJson, afterJson, 'plain');
  expect(diffStylish).toEqual(resultStylish);
  expect(diffPlain).toEqual(resultPlain);
});

test('yml test', () => {
  const beforeYml = getFixturePath('before.yml');
  const afterYml = getFixturePath('after.yml');

  const diffStylish = genDiff(beforeYml, afterYml, 'stylish');
  const diffPlain = genDiff(beforeYml, afterYml, 'plain');
  expect(diffStylish).toEqual(resultStylish);
  expect(diffPlain).toEqual(resultPlain);
});
