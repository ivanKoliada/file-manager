import { homedir } from 'os';
import { chdir } from 'process';

export const getUserName = () => {
  const args = process.argv.slice(2).join('');
  const equalSign = args.indexOf('=') + 1;
  process.env.USER_NAME = args.slice(equalSign);
};

export const getHomeDirectory = () => {
  const homeDirectory = homedir();
  chdir(homeDirectory);
};
