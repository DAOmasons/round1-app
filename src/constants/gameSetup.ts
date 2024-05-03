import { arbitrum, arbitrumSepolia } from 'viem/chains';
import { ADDR_PROD, ADDR_TESTNET } from './addresses';

export const GAME_MANAGER_TESTNET = {
  ADDRESS: ADDR_TESTNET.GAME_MANAGER,
  FACTORY: ADDR_TESTNET.GS_FACTORY,
  PROFILE: {
    ID: '0xab00163cc5a78abcc61d1e59a9ae56ae80076dc8b77c4358f03ab0a2575cddde7',
  },
  POOL: {
    ID: 340n,
  },
};

export const GAME_MANAGER_PROD = {
  ADDRESS: ADDR_PROD.GAME_MANAGER,
  FACTORY: ADDR_PROD.GS_FACTORY,
  PROFILE: {
    ID: '0x47465450fe64330c66074ed65c8aef71e196088c72eb71fb19e86bfc53f4206e',
  },
  POOL: {
    ID: 22n,
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
  NAME: 'Grant Ships Beta Test',
  SYMBOL: 'GSBT',
  DECIMALS: 18,
  ADDRESS: '0xc3f93F3e304b1199625DF261a9F87367ab9e9e48',
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

export const ZER0_ADDRESS = '0x0000000000000000000000000000000000000000';

export const HATS_PROD = {
  ADDRESS: ADDR_PROD.HATS,
  TOP: 377439253340108957125338211218274829430920021915568014735450543489024n,
  FACILITATOR:
    377439664716248287426848749960570468768546267599534423130416380641280n,
  SHIP_OP: [
    377440076092387617728359288702866108106172513283500831525382217793536n,
    377440487468526948029869827445161747443798758967467239920348054945792n,
    377440898844666278331380366187457386781425004651433648315313892098048n,
  ],
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

export const NETWORK_ID =
  import.meta.env.VITE_RUNTIME_ENV === 'dev' ? arbitrumSepolia.id : arbitrum.id;

console.log('Runtime Environment', import.meta.env.VITE_RUNTIME_ENV);

export const SUBGRAPH_URL =
  import.meta.env.VITE_RUNTIME_ENV === 'dev'
    ? 'api.goldsky.com/api/public/project_clruaxx0m7yn101uj2rmi6mfj/subgraphs/gs-arb-sepolia/1.0.2/gn'
    : 'api.studio.thegraph.com/query/41101/grant-ships-arb/v0.1.3';
