import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { error } from '../handlers/errorHandler.js';

const compress = (pathToCurrent, pathToNext) => {
  const zip = createBrotliCompress();

  const readableStream = createReadStream(pathToCurrent);
  readableStream.on('error', error);
  const writableStream = createWriteStream(pathToNext);
  writableStream.on('error', error);

  readableStream
    .pipe(zip)
    .pipe(writableStream)
}

const decompress = (pathToCurrent, pathToNext) => {
  const unzip = createBrotliDecompress();

  const readableStream = createReadStream(pathToCurrent);
  readableStream.on('error', error);
  const writableStream = createWriteStream(pathToNext);
  writableStream.on('error', error);

  readableStream
    .pipe(unzip)
    .pipe(writableStream)
}

export { compress, decompress }