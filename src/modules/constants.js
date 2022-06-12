const COMMANDS = {
  UP: 'up',
  CD: 'cd',
  LS: 'ls',
  HASH: 'hash',
  CAT: 'cat',
  ADD: 'add',
  RN: 'rn',
  CP: 'cp',
  MV: 'mv',
  RM: 'rm',
  COMPRESS: 'compress',
  DECOMPRESS: 'decompress',
  OS: 'os',
  EXIT: '.exit',
  NO_EXIST: 'noExist'
}

const OS = {
  EOL: '--EOL',
  CPUS: '--cpus',
  HOME_DIR: '--homedir',
  SYS_USER_NAME: '--username',
  ARCH: '--architecture',
};

export { COMMANDS, OS };