import { chdir, cwd } from 'process';
import { readdir } from 'fs/promises';
import { error } from '../handlers/errorHandler.js';

const commandUp = () => {
  chdir('..');
};

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
    .then(res => res.map(file => {
      const Type = file.isFile() ? 'file' : 'directory'
      return {
        Name: file.name, Type
      }
    })
      .sort((a, b) => b.Name > a.Name ? 1 : -1)
      .sort((a, b) => a.Type > b.Type ? 1 : -1))
    .then(console.table)
    .catch(error);
};

export { commandUp, commandCd, commandLs };
