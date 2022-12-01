export const COMMANDS = {
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
  NO_EXIST: 'noExist',
  INVALID_INPUT: 'invalidInput',
};

export const OS = {
  EOL: '--EOL',
  CPUS: '--cpus',
  HOME_DIR: '--homedir',
  SYS_USER_NAME: '--username',
  ARCH: '--architecture',
};

export const argumentsSize = {
  0: [COMMANDS.UP, COMMANDS.LS, COMMANDS.EXIT],
  1: [COMMANDS.CD, COMMANDS.CAT, COMMANDS.ADD, COMMANDS.RM, COMMANDS.OS, COMMANDS.HASH],
  2: [COMMANDS.RN, COMMANDS.CP, COMMANDS.MV, COMMANDS.COMPRESS, COMMANDS.DECOMPRESS],
};
