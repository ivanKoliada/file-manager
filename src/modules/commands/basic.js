import { rename, rm } from 'fs/promises';
import { createReadStream, createWriteStream } from 'fs';
import { basename } from 'path';
import { operationFailed } from '../loggers/error.js';

const commandCat = async (path) => {
  const readableStream = createReadStream(path, 'utf8');
  readableStream.on('data', (chunk) => console.log('\x1b[33m', chunk, '\x1b[0m'));
  readableStream.on('error', operationFailed);
};

const commandAdd = (path) => {
  const writableStream = createWriteStream(path);
  writableStream.close();
  writableStream.on('error', operationFailed);
};

const commandRn = (pathToCurrent, pathToNext) => {
  rename(pathToCurrent, pathToNext).catch(operationFailed);
};

const commandCp = async (pathToCurrent, pathToNext) => {
  const destinationPath = `${pathToNext}\\${basename(pathToCurrent)}`;
  const readableStream = createReadStream(pathToCurrent, 'utf8');
  readableStream.on('error', operationFailed);

  const writableStream = createWriteStream(destinationPath);
  writableStream.on('error', operationFailed);
  
  readableStream.pipe(writableStream);
};

const commandRm = (pathToCurrent) => {
  rm(pathToCurrent, { recursive: true }).catch(operationFailed);
};

export { commandCat, commandAdd, commandRn, commandCp, commandRm };
