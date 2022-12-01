import { cwd } from 'process';

export const printWelcome = () => {
  console.log(`\x1b[34mWelcome to the File Manager, ${process.env.USER_NAME}!\x1b[0m\n`);
};

export const printGoodbye = () => {
  console.log(`\x1b[34m\nThank you for using File Manager, ${process.env.USER_NAME}, goodbye!\x1b[0m`);
  process.exit();
};

export const printCurrentDirectory = () => {
  console.log(`\x1b[34mYou are currently in ${cwd()}\x1b[0m\n`);
};
