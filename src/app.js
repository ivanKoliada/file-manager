import inputHandler from './modules/handlers/inputHandler.js';
import { argumentsParser, sayingBye } from './modules/utils.js';
import { homedir } from 'os';
import { createInterface } from 'readline';
import { stdin as input, stdout as output , chdir, cwd} from 'process';

const rl = createInterface({ input, output });

const init = () => {
  argumentsParser();
  const homeDirectory = homedir();
  chdir(homeDirectory);

  console.log(`\x1b[34mWelcome to the File Manager, ${process.env.USER_NAME}!\x1b[0m\n`);
  console.log(`\x1b[34mYou are currently in ${cwd()}\x1b[0m\n`);

  rl.on('line', inputHandler);

  rl.on('close', sayingBye);
}

export default init;