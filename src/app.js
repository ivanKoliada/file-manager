import inputHandler from './modules/handlers/inputHandler.js';
import { homedir } from 'os';
import { createInterface } from 'readline';
import { stdin as input, stdout as output , chdir, cwd, exit } from 'process';

const rl = createInterface({ input, output });

const init = () => {
  const args = process.argv.slice(2).join('');
  const equalSign = args.indexOf('=') + 1;
  const userName = args.slice(equalSign);
  const homeDirectory = homedir();
  chdir(homeDirectory);

  console.log(`\x1b[34mWelcome to the File Manager, ${userName}!\x1b[0m\n`);
  console.log(`\x1b[34mYou are currently in ${cwd()}\x1b[0m\n`);

  rl.on('line', (input) => {
    if (input === '.exit') {
      console.log(`\x1b[34m\nThank you for using File Manager, ${userName}!\x1b[0m`);
      exit();
    }

    inputHandler(input);
  })

  rl.on('close', () => {    
    console.log(`\x1b[34m\nThank you for using File Manager, ${userName}!\x1b[0m`);
  });
}

export default init;