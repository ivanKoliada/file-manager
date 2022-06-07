import * as crypto from 'crypto';
import { createReadStream } from 'fs';
import { error } from '../handlers/errorHandler.js';

const hash = (path) => {
  const readableStream = createReadStream(path);

  readableStream.on('data', (chunk) => {
    const hash = crypto.createHash('sha256')
      .update(chunk)
      .digest('hex');

    console.log(`\x1b[34m'${hash}\x1b[0m`); 
  })

  readableStream.on('error', error);
}

export default hash;