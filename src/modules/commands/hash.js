import * as crypto from 'crypto';
import { createReadStream } from 'fs';
import { operationFailed } from '../loggers/error.js';

const commandHash = async (path) => {
  const readableStream = createReadStream(path);

  readableStream.on('data', (chunk) => {
    const hash = crypto.createHash('sha256')
      .update(chunk)
      .digest('hex');

    console.log(`\x1b[34m'${hash}\x1b[0m`); 
  })

  readableStream.on('error', operationFailed);
}

export default commandHash;