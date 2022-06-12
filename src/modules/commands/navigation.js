import { chdir, cwd } from 'process';
import { readdir } from 'fs/promises';
import { error } from '../handlers/errorHandler.js';

const commandUp = () => {
  chdir('..');
}

const commandCd = (path) => {
  try {
    chdir(`${path}`);
  } catch (err) {
    if (err) error();
  }
};

const commandLs = async () => {
  const pathToFolder = cwd();
  const array = [];
  const files = await readdir(pathToFolder, { withFileTypes: true }).catch(error);

  files.forEach((file) => array.push(file.name));

  console.log(array);
};

export { commandUp, commandCd, commandLs };