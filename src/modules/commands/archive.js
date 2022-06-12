import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { error } from '../handlers/errorHandler.js';

const commandCompress = (pathToCurrent, pathToNext) => {
  const zip = createBrotliCompress();

  const readableStream = createReadStream(pathToCurrent);
  readableStream.on('error', error);
  const writableStream = createWriteStream(pathToNext);
  writableStream.on('error', error);

  readableStream
    .pipe(zip)
    .pipe(writableStream)
}

const commandDecompress = (pathToCurrent, pathToNext) => {
  const unzip = createBrotliDecompress();

  const readableStream = createReadStream(pathToCurrent);
  readableStream.on('error', error);
  const writableStream = createWriteStream(pathToNext);
  writableStream.on('error', error);

  readableStream.pipe(unzip).pipe(writableStream);
};

export { commandCompress, commandDecompress };