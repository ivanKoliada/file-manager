import { cwd } from 'process';
import { commandUp, commandCd, commandLs } from '../commands/navigation.js';
import commandHash from '../commands/hash.js';
import { commandCat, commandAdd, commandRn, commandCp, commandRm } from '../commands/basic.js';
import { commandCompress, commandDecompress } from '../commands/archive.js';
import { COMMANDS} from '../constants.js';
import { sysOperation } from '../commands/system.js';
import { sayingBye, commandsParser } from '../utils.js';
import { error } from './errorHandler.js';

const inputHandler = async (data) => {
  const { command, pathToCurrent, flag, pathToNext, optionalPath } = await commandsParser(data);

  switch (command) {
    case COMMANDS.EXIT:
      sayingBye();
      break;

    case COMMANDS.UP:
      commandUp();
      break;

    case COMMANDS.CD:
      commandCd(pathToCurrent);
      break;

    case COMMANDS.LS:
      await commandLs();
      break;

    case COMMANDS.HASH:
      await commandHash(pathToCurrent);
      break;

    case COMMANDS.CAT:
      await commandCat(pathToCurrent);
      break;

    case COMMANDS.ADD:
      commandAdd(pathToCurrent);
      break;

    case COMMANDS.RN:
      commandRn(pathToCurrent, pathToNext);
      break;

    case COMMANDS.CP:
      commandCp(pathToCurrent, pathToNext);
      break;

    case COMMANDS.MV:
      await commandCp(pathToCurrent, pathToNext);
      commandRm(pathToCurrent);
      break;

    case COMMANDS.RM:
      commandRm(pathToCurrent, pathToNext);
      break;

    case COMMANDS.COMPRESS:
      commandCompress(pathToCurrent, pathToNext);
      break;

    case COMMANDS.DECOMPRESS:
      commandDecompress(pathToCurrent, pathToNext);
      break;

    case COMMANDS.OS:
      sysOperation(flag);
      break;
    
    case COMMANDS.NO_EXIST:
      error();
      break;

    default:
      console.log('\x1b[31mInvalid input, you should enter another command\x1b[0m');
      break;
  }

  console.log(`\x1b[34m\nYou are currently in ${cwd()}\x1b[0m`);
};

export default inputHandler;
