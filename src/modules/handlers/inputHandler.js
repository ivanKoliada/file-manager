import commandHash from '../commands/hash.js';
import { sysOperation } from '../commands/system.js';
import { commandUp, commandCd, commandLs } from '../commands/navigation.js';
import { commandCompress, commandDecompress } from '../commands/archive.js';
import { commandCat, commandAdd, commandRn, commandCp, commandRm } from '../commands/basic.js';
import { printCurrentDirectory, printGoodbye } from '../loggers/logger.js';
import { invalidInput } from '../loggers/error.js';
import { parseUserInput, isPathExist } from '../utils.js';

import { COMMANDS, INVALID_CASE } from '../constants.js';

const inputHandler = async (data) => {
  const { command, firstArg, secondArg } = await parseUserInput(data);

  switch (command) {
    case COMMANDS.EXIT:
      printGoodbye();
      break;

    case COMMANDS.UP:
      commandUp();
      break;

    case COMMANDS.CD:
      (await isPathExist(firstArg)) && commandCd(firstArg);
      break;

    case COMMANDS.LS:
      await commandLs();
      break;

    case COMMANDS.HASH:
      (await isPathExist(firstArg)) && (await commandHash(firstArg));
      break;

    case COMMANDS.CAT:
      (await isPathExist(firstArg)) && commandCat(firstArg);
      break;

    case COMMANDS.ADD:
      commandAdd(firstArg);
      break;

    case COMMANDS.RN:
      (await isPathExist(firstArg)) && commandRn(firstArg, secondArg);
      break;

    case COMMANDS.CP:
      (await isPathExist(firstArg)) && (await isPathExist(secondArg)) && (await commandCp(firstArg, secondArg));
      break;

    case COMMANDS.MV:
      if ((await isPathExist(firstArg)) && (await isPathExist(secondArg))) {
        await commandCp(firstArg, secondArg);
        commandRm(firstArg);
      }
      break;

    case COMMANDS.RM:
      (await isPathExist(firstArg)) && commandRm(firstArg);
      break;

    case COMMANDS.COMPRESS:
      (await isPathExist(firstArg)) && commandCompress(firstArg, secondArg);
      break;

    case COMMANDS.DECOMPRESS:
      (await isPathExist(firstArg)) && commandDecompress(firstArg, secondArg);
      break;

    case COMMANDS.OS:
      sysOperation(firstArg);
      break;

    case INVALID_CASE:
      invalidInput();
      break;

    default:
      console.log('\x1b[31mSomething went wrong\x1b[0m');
      break;
  }

  printCurrentDirectory();
};

export default inputHandler;
