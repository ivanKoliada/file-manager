import { rename, rm } from 'fs/promises';
import { createReadStream, createWriteStream } from 'fs';
import { basename } from 'path';
import { error } from '../handlers/errorHandler.js';

const commandCat = async (path) => {
  const readableStream = createReadStream(path, 'utf8');
  readableStream.on('data', (chunk) => console.log('\x1b[33m', chunk, '\x1b[0m'));
  readableStream.on('error', error);
};

const commandAdd = (path) => {
  const writableStream = createWriteStream(path);
  writableStream.close();
  writableStream.on('error', error);
};

const commandRn = (pathToCurrent, pathToNext) => {
  rename(pathToCurrent, pathToNext).catch(error);
};

const commandCp = async (pathToCurrent, pathToNext) => {
  const destinationPath = `${pathToNext}\\${basename(pathToCurrent)}`;
  const readableStream = createReadStream(pathToCurrent, 'utf8');
  readableStream.on('error', error);

  const writableStream = createWriteStream(destinationPath);
  writableStream.on('error', error);
  
  readableStream.pipe(writableStream);
};

// const cp = (pathToCurrent, pathToNext) => {
//   copy(pathToCurrent, pathToNext,
//     { errorOnExist: true, force: false, recursive: true })
//     .catch(error);
// }

// const mv = async (pathToCurrent, pathToNext) => {
//   await copy(pathToCurrent, pathToNext, { errorOnExist: true, force: false, recursive: true }).catch(error);
//   remove(pathToCurrent, { recursive: true });
// };

const commandRm = (pathToCurrent) => {
  rm(pathToCurrent, { recursive: true }).catch(error);
};

export { commandCat, commandAdd, commandRn, commandCp, commandRm };
