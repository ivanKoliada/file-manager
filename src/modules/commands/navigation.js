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
  await readdir(pathToFolder, { withFileTypes: true })
    .then(res => res.map(file => file.name))
    .then(console.log)
    .catch(error);
};

export { commandUp, commandCd, commandLs };