const sayingBye = () => {
  console.log(`\x1b[34m\nThank you for using File Manager, ${process.env.USER_NAME}!\x1b[0m`);
  process.exit();
}

const argumentsParser = () => {
  const args = process.argv.slice(2).join('');
  const equalSign = args.indexOf('=') + 1;
  process.env.USER_NAME = args.slice(equalSign);
}

export { sayingBye, argumentsParser };












// const parser = (data) => { };

// const input = data.split(' ');
// const key = input[0];
// const pathToCurrent = input[1];
// const flag = input[1];
// const pathToNext = input[2];

// import { access } from 'fs/promises';
// import { constants } from 'fs';

// try {
//   await access('/etc/passwd', constants.R_OK | constants.W_OK);
//   console.log('can access');
// } catch {
//   console.error('cannot access');
// }
