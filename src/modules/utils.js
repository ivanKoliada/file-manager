import { access } from 'fs/promises';
import { COMMANDS } from './constants.js';
import { operationFailed } from './loggers/error.js';
import { argumentsSize } from './constants.js';

export const isPathExist = async (path) => {
  try {
    await access(path);
    return true;
  } catch {
    operationFailed();
    return false;
  }
};

export const parseUserInput = async (data) => {
  const inputData = data.split(' ').map((el) => el.replace(/\*/g, ' '));

  let command = inputData.shift();
  const args = [...inputData];

  const isCommandExist = Object.values(COMMANDS).includes(command);
  const isCorrectArgumentsSize = argumentsSize[args.length]?.includes(command);

  if (!command || !isCommandExist || !isCorrectArgumentsSize) {
    command = COMMANDS.INVALID_INPUT;
  }

  const [firstArg, secondArg] = args;

  return {
    command,
    firstArg,
    secondArg,
  };
};
