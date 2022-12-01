import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

import { operationFailed } from '../loggers/error.js';

const commandCompress = (pathToCurrent, pathToNext) => {
  const zip = createBrotliCompress();

  const readableStream = createReadStream(pathToCurrent);
  readableStream.on('error', operationFailed);
  const writableStream = createWriteStream(pathToNext);
  writableStream.on('error', operationFailed);

  readableStream
    .pipe(zip)
    .pipe(writableStream)
}

const commandDecompress = (pathToCurrent, pathToNext) => {
  const unzip = createBrotliDecompress();

  const readableStream = createReadStream(pathToCurrent);
  readableStream.on('error', operationFailed);
  const writableStream = createWriteStream(pathToNext);
  writableStream.on('error', operationFailed);

  readableStream.pipe(unzip).pipe(writableStream);
};

export { commandCompress, commandDecompress };