import * as crypto from 'crypto';
import { createReadStream } from 'fs';

import { operationFailed } from '../loggers/error.js';

const commandHash = async (path) => {
  const readableStream = createReadStream(path);
  let data = '';

  readableStream.on('data', (chunk) => {
    data += `${chunk}`;
  });

  readableStream.on('end', () => {
    const hash = crypto.createHash('sha256').update(data.trimEnd()).digest('hex');

    console.log(`\x1b[34m'${hash}\x1b[0m`);
  });

  readableStream.on('error', operationFailed);
};

export default commandHash;
