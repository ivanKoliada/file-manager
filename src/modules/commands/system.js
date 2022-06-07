import { EOL, cpus as CPUs, homedir as hDir, arch, userInfo } from 'os';

const eol = ()=> {
  console.log(JSON.stringify(EOL))
}

const cpus = ()=> {
  console.log(CPUs());
}

const homedir = ()=> {
  console.log(`\x1b[34m\n${hDir()}\x1b[0m`);
}

const username = ()=> {
  console.log(`\x1b[34m\n${userInfo().username}\x1b[0m`);
}

const architecture = ()=> {
  console.log(`\x1b[34m\n${arch()}\x1b[0m`);
}

export { eol, cpus, homedir, architecture, username }