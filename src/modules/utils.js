const sayingBye = () => {
  console.log(`\x1b[34m\nThank you for using File Manager, ${process.env.USER_NAME}!\x1b[0m`);
  process.exit();
}

const argumentsParser = () => {
  const args = process.argv.slice(2).join('');
  const equalSign = args.indexOf('=') + 1;
  process.env.USER_NAME = args.slice(equalSign);
}

const commandsParser = (data) => {
  const arrInput = data.split(' ');
  const arrTemp = data.split(' ');
  arrTemp.shift();
  const optionalPath = arrTemp.join(' ');
  const command = arrInput[0];
  const pathToCurrent = arrInput[1];
  const flag = arrInput[1];
  const pathToNext = arrInput[2];
  return {
    command,
    pathToCurrent,
    flag,
    pathToNext,
    optionalPath,
  };
}

export { sayingBye, argumentsParser, commandsParser };












// const parser = (data) => { };



// import { access } from 'fs/promises';
// import { constants } from 'fs';

// try {
//   await access('/etc/passwd', constants.R_OK | constants.W_OK);
//   console.log('can access');
// } catch {
//   console.error('cannot access');
// }
