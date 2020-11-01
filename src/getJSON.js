import fs from 'fs';
import path from 'path';

const getJSON = (filepath) => {
  const fileContent = fs.readFileSync(path.resolve(process.cwd(), filepath));
  return JSON.parse(fileContent);
};

export default getJSON;
