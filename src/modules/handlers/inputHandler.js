import { cwd } from 'process';
import { up, cd, ls } from '../commands/navigation.js';
import hash from '../commands/hash.js';
import { cat, add, rn, cp, rm } from '../commands/basic.js';
import { compress, decompress } from '../commands/archive.js';
import { eol, cpus, homedir, architecture, username } from '../commands/system.js';
import { error } from './errorHandler.js';

const inputHandler = async (data) => {
  const input = data.split(' ');
  const key = input[0];
  const pathToCurrent = input[1];
  const flag = input[1];
  const pathToNext = input[2];

  switch (key) {
    case 'up':
      if (pathToCurrent) error();
      else up();
      break;

    case 'cd':
      if (pathToNext) error();
      else cd(pathToCurrent);
      break;

    case 'ls':
      if (pathToCurrent) error();
      else ls();
      break;

    case 'hash':
      hash(pathToCurrent);
      break;

    case 'cat':
      cat(pathToCurrent);
      break;

    case 'add':
      add(pathToCurrent);
      break;

    case 'rn':
      rn(pathToCurrent, pathToNext);
      break;

    case 'cp':
      cp(pathToCurrent, pathToNext);
      break;

    case 'mv':
      await cp(pathToCurrent, pathToNext);
      rm(pathToCurrent);
      break;

    case 'rm':
      rm(pathToCurrent, pathToNext);
      break;

    case 'compress':
      if (!pathToCurrent && !pathToNext) error();
      else compress(pathToCurrent, pathToNext);
      break;

    case 'decompress':
      if (!pathToCurrent && !pathToNext) error();
      else decompress(pathToCurrent, pathToNext);
      break;

    case 'os':
      if (flag === '--EOL') eol();
      else if (flag === '--cpus') cpus();
      else if (flag === '--homedir') homedir();
      else if (flag === '--username') username();
      else if (flag === '--architecture') architecture();
      else console.log('\x1b[31mInvalid input, you should enter another flag\x1b[0m');
      break;

    default:
      console.log('\x1b[31mInvalid input, you should enter another command\x1b[0m');
      break;
  }
  const directory = cwd();

  console.log(`\x1b[34m\nYou are currently in ${directory}\x1b[0m`);
};

export default inputHandler;
