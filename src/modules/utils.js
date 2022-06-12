import { access } from 'fs/promises';
import { COMMANDS } from './constants.js';

const sayingBye = () => {
  console.log(`\x1b[34m\nThank you for using File Manager, ${process.env.USER_NAME}!\x1b[0m`);
  process.exit();
};

const argumentsParser = () => {
  const args = process.argv.slice(2).join('');
  const equalSign = args.indexOf('=') + 1;
  process.env.USER_NAME = args.slice(equalSign);
};

const isPathExist = async (path) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};

const commandsParser = async (data) => {  
  const arrInput = data
    .split(' ')
    .map(el => el.replace(/\*/g, ' '));
  const pathToCurrent = arrInput[1];
  const flag = arrInput[1];
  const pathToNext = arrInput[2];
  const isExist = !pathToCurrent || await isPathExist(pathToCurrent);
  const command = isExist ? arrInput[0] : COMMANDS.NO_EXIST;
  
  return {
    command,
    pathToCurrent,
    flag,
    pathToNext
  };
};

export { sayingBye, argumentsParser, commandsParser };



