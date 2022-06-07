import { up, cd, ls } from '../commands/navigation.js';
import hash from '../commands/hash.js';
import { cat, add, rn, cp, mv, rm } from '../commands/basic.js';
import { compress, decompress } from '../commands/archive.js';
import { eol, cpus, homedir, architecture, username } from '../commands/system.js';

const inputHandler = async (data) => {
  const input = data.split(' ');
  const key = input[0];
  const pathToCurrent = input[1];
  const flag = input[1];
  const pathToNext = input[2];

  switch (key) {
    case 'up':
      up();
      break;
  
    case 'cd':
      cd(pathToCurrent);
      break;
  
    case 'ls':
      ls()
      break;
    
    case 'hash':
      hash(pathToCurrent)
      break;
    
    case 'cat':
      cat(pathToCurrent)
      break;
    
    case 'add':
      add(pathToCurrent)
      break;
    
    case 'rn':
      rn(pathToCurrent, pathToNext)
      break;
    
    case 'cp':
      cp(pathToCurrent, pathToNext)
      break;
    
    case 'mv':
      mv(pathToCurrent, pathToNext)
      break;
    
    case 'rm':
      rm(pathToCurrent, pathToNext)
      break;
    
    case 'compress':
      compress(pathToCurrent, pathToNext)
      break;
    
    case 'decompress':
      decompress(pathToCurrent, pathToNext)
      break;
    
    case 'os':
      if (flag === '--EOL') eol();
      else if (flag === '--cpus') cpus();
      else if (flag === '--homedir') homedir();
      else if (flag === '--username') username();
      else if (flag === '--architecture') architecture();
      else console.log('\x1b[31mInvalid input, you should enter another flag\x1b[0m');
      break;
    
    default:
      console.log('\x1b[31mInvalid input, you should enter another command\x1b[0m');
      break;
  }
}

export default inputHandler;
