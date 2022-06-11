import { cwd } from 'process';
import { up, cd, ls } from '../commands/navigation.js';
import hash from '../commands/hash.js';
import { cat, add, rn, cp, rm } from '../commands/basic.js';
import { compress, decompress } from '../commands/archive.js';
import { error } from './errorHandler.js';
import { COMMANDS} from '../constants.js';
import { sysOperation } from '../commands/system.js';

const inputHandler = async (data) => {
  const input = data.split(' ');
  const key = input[0];
  const pathToCurrent = input[1];
  const flag = input[1];
  const pathToNext = input[2];

  switch (key) {
    case COMMANDS.UP:
      if (pathToCurrent) error();
      else up();
      break;

    case COMMANDS.CD:
      if (pathToNext) error();
      else cd(pathToCurrent);
      break;

    case COMMANDS.LS:
      if (pathToCurrent) error();
      else await ls();
      break;

    case COMMANDS.HASH:
      hash(pathToCurrent);
      break;

    case COMMANDS.CAT:
      cat(pathToCurrent);
      break;

    case COMMANDS.ADD:
      add(pathToCurrent);
      break;

    case COMMANDS.RN:
      rn(pathToCurrent, pathToNext);
      break;

    case COMMANDS.CP:
      cp(pathToCurrent, pathToNext);
      break;

    case COMMANDS.CP:
      await cp(pathToCurrent, pathToNext);
      rm(pathToCurrent);
      break;

    case COMMANDS.RM:
      rm(pathToCurrent, pathToNext);
      break;

    case COMMANDS.COMPRESS:
      if (!pathToCurrent || !pathToNext) error();
      else compress(pathToCurrent, pathToNext);
      break;

    case COMMANDS.DECOMPRESS:
      if (!pathToCurrent || !pathToNext) error();
      else decompress(pathToCurrent, pathToNext);
      break;

    case COMMANDS.OS:
      sysOperation(flag);
      break;

    default:
      console.log('\x1b[31mInvalid input, you should enter another command\x1b[0m');
      break;
  }
  const directory = cwd();

  console.log(`\x1b[34m\nYou are currently in ${directory}\x1b[0m`);
};

export default inputHandler;
