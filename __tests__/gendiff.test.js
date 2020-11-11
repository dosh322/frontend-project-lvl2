/* eslint-disable no-underscore-dangle */

import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const result = readFile('result-json.txt');

test('JSON test', () => {
  const beforeJson = getFixturePath('before.json');
  const afterJson = getFixturePath('after.json');

  const diff = genDiff(beforeJson, afterJson);
  expect(diff).toEqual(result);
});

test('yml test', () => {
  const beforeYml = getFixturePath('before.yml');
  const afterYml = getFixturePath('after.yml');

  const diff = genDiff(beforeYml, afterYml);
  expect(diff).toEqual(result);
});
