import { Address } from 'viem';

export const ADDR_TESTNET: Record<string, Address> = {
  ALLO: '0x1133eA7Af70876e64665ecD07C0A0476d09465a1',
  REGISTRY: '0x4AAcca72145e1dF2aeC137E1f3C5E3D75DB8b5f3',
  HATS: '0x3bc1A0Ad72417f2d411118085256fC53CBdDd137',
  GAME_MANAGER: '0x06E068784e4fbc89fea8b30198A918E9adfbD5FF',
  GM_FACTORY: '0xe703e3C74a2fe424054Ff6D59dEC0db91afC057c',
  FACTORY: '0x8D994BEef251e30C858e44eCE3670feb998CA77a',
} as const;

export const ADDR_PROD: Record<string, Address> = {
  ALLO: '0x00000000',
  REGISTRY: '0x00000000',
  HATS: '0x00000000',
  GAME_MANAGER: '0x00000000',
  FACTORY: '0x00000000',
  GM_FACTORY: '0x00000000',
} as const;

export const ADDR: Record<string, Address> =
  import.meta.env.VITE_RUNTIME_ENV === 'dev' ? ADDR_TESTNET : ADDR_PROD;
