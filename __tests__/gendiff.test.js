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
const resultJSON = readFile('result-json.txt');

test('JSON test', () => {
  const beforeJson = getFixturePath('before.json');
  const afterJson = getFixturePath('after.json');

  const diffStylish = genDiff(beforeJson, afterJson, 'stylish');
  const diffPlain = genDiff(beforeJson, afterJson, 'plain');
  const diffJSON = genDiff(beforeJson, afterJson, 'json');
  expect(diffStylish).toEqual(resultStylish);
  expect(diffPlain).toEqual(resultPlain);
  expect(diffJSON).toEqual(resultJSON);
});

test('yml test', () => {
  const beforeYml = getFixturePath('before.yml');
  const afterYml = getFixturePath('after.yml');

  const diffStylish = genDiff(beforeYml, afterYml, 'stylish');
  const diffPlain = genDiff(beforeYml, afterYml, 'plain');
  const diffYml = genDiff(beforeYml, afterYml, 'json');
  expect(diffStylish).toEqual(resultStylish);
  expect(diffPlain).toEqual(resultPlain);
  expect(diffYml).toEqual(resultJSON);
});
