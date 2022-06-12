import { EOL, cpus, homedir, arch, userInfo } from 'os';
import { OS } from '../constants.js';

export const sysOperation = (flag) => {
  switch (flag) {
    case OS.EOL:
      console.log(JSON.stringify(EOL))
      break;
  
    case OS.CPUS:
      console.log(cpus());
      break;
  
    case OS.HOME_DIR:
      console.log(`\x1b[34m\n${homedir()}\x1b[0m`);
      break;
  
    case OS.SYS_USER_NAME:
      console.log(`\x1b[34m\n${userInfo().username}\x1b[0m`);
      break;
  
    case OS.ARCH:
      console.log(`\x1b[34m\n${arch()}\x1b[0m`);
      break;
  
    default:
      console.log('\x1b[31mInvalid input, you should enter another flag\x1b[0m');
      break;
  }
}
