import inputHandler from './modules/handlers/inputHandler.js';
// import { getUserName, sayingBye } from './modules/utils.js';
// import { homedir } from 'os';
import { createInterface } from 'readline';
import { stdin as input, stdout as output, chdir, cwd } from 'process';
import { getUserName, getHomeDirectory } from './modules/helpers/helpers.js';
import { printWelcome, printCurrentDirectory, printGoodbye } from './modules/loggers/logger.js';

const rl = createInterface({ input, output });

const init = () => {
  getUserName();

  getHomeDirectory();

  printWelcome();

  printCurrentDirectory();

  rl.on('line', inputHandler);

  rl.on('close', printGoodbye);
};

export default init;
