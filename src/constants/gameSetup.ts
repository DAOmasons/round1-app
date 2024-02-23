import { ADDR_PROD, ADDR_TESTNET } from './addresses';

export const GAME_MANAGER_TESTNET = {
  ADDRESS: ADDR_TESTNET.GAME_MANAGER,
  FACTORY: ADDR_TESTNET.FACTORY,
  PROFILE: {
    NAME: 'GameManagerProfile',
    ID: '0x873d42dfcd4fe1183bea3ffc80cd4fd0b588916c539991d7fdfd61b7cc88c5a6',
    ANCHOR: '0x90Df5AaB5887062Dcfab9547da1c68c9595297c3',
    NONCE:
      15268514411162632462144985593251798615472309517376081905309716297530257071145n,
  },
  POOL: {
    ID: 234n,
  },
};

export const GAME_MANAGER_PROD = {
  ADDRESS: ADDR_PROD.GAME_MANAGER,
  FACTORY: ADDR_PROD.FACTORY,
  PROFILE: {
    NAME: '',
    ID: '',
    ANCHOR: '',
    NONCE: 0n,
  },
  POOL: {
    ID: 0n,
  },
};

export const DAO_MASONS = {
  AVATAR_IMG: 'Qme57CWY6BcvJ3VDBCFXoCphG13BLvAvmbKZavMvZDRnFf',
};

export const GAME_TOKEN_DEV = {
  NAME: 'Chromatic fake ETH',
  SYMBOL: 'cETH',
  DECIMALS: 18,
  ADDRESS: '0x93252009E644138b906aE1a28792229E577239B9',
};

export const GAME_TOKEN_PROD = {
  NAME: 'Arbitrum Token',
  SYMBOL: 'ARB',
  DECIMALS: 18,
  ADDRESS: '0',
};

export const HATS_DEV = {
  ADDRESS: ADDR_TESTNET.HATS,
  TOP: 2210715626706352463162695237135609715238245842648326943450496040435712n,
  FACILITATOR:
    2210716038082491793464205775877905354575872088332293351845461877587968n,
  SHIP_OP: [
    2210716038095045996934979137405576933422287421164498062734389946613760n,
    2210716038101323098670365818169412722845495087580600418178853981126656n,
    2210716038107600200405752498933248512268702753996702773623318015639552n,
  ],
};

export const HATS_PROD = {
  ADDRESS: ADDR_PROD.HATS,
  TOP: 0n,
  FACILITATOR: 0n,
  SHIP_OP: [0n, 0n, 0n],
};

export const GAME_MANAGER =
  import.meta.env.VITE_RUNTIME_ENV === 'dev'
    ? GAME_MANAGER_TESTNET
    : GAME_MANAGER_PROD;

export const GAME_TOKEN =
  import.meta.env.VITE_RUNTIME_ENV === 'dev' ? GAME_TOKEN_DEV : GAME_TOKEN_PROD;

export const HATS =
  import.meta.env.VITE_RUNTIME_ENV === 'dev' ? HATS_DEV : HATS_PROD;

export const SHIP_AMOUNT = 3;
