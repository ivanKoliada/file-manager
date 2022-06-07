import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { error } from '../handlers/errorHandler.js';

const compress = (pathToCurrent, pathToNext) => {
  const zip = createBrotliCompress();

  const readableStream = createReadStream(pathToCurrent);
  const writableStream = createWriteStream(pathToNext);

  readableStream
    .pipe(zip)
    .pipe(writableStream)
    .on('error', error);
}

const decompress = (pathToCurrent, pathToNext) => {
  const unzip = createBrotliDecompress();

  const readableStream = createReadStream(pathToCurrent);
  const writableStream = createWriteStream(pathToNext);

  readableStream
    .pipe(unzip)
    .pipe(writableStream)
    .on('error', error);
}

export { compress, decompress }