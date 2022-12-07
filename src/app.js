import { createInterface } from 'readline';
import { stdin as input, stdout as output } from 'process';

import inputHandler from './modules/handlers/inputHandler.js';
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
