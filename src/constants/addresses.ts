import { Address } from 'viem';

export const ADDR_TESTNET: Record<string, Address> = {
  ALLO: '0x1133eA7Af70876e64665ecD07C0A0476d09465a1',
  REGISTRY: '0x4AAcca72145e1dF2aeC137E1f3C5E3D75DB8b5f3',
  HATS: '0x3bc1A0Ad72417f2d411118085256fC53CBdDd137',
  GAME_MANAGER: '0x3fAcD1E1B5Ec733110AfB4c575ae6fd963e1De18',
  GM_FACTORY: '0x14e32E7893D6A1fA5f852d8B2fE8c57A2aB670ba',
  GS_FACTORY: '0x8D994BEef251e30C858e44eCE3670feb998CA77a',
  HATS_POSTER: '0x4F0dc1C7d91d914d921F3C9C188F4454AE260317',
} as const;

export const ADDR_PROD: Record<string, Address> = {
  ALLO: '0x1133eA7Af70876e64665ecD07C0A0476d09465a1',
  REGISTRY: '0x4AAcca72145e1dF2aeC137E1f3C5E3D75DB8b5f3',
  HATS: '0x3bc1A0Ad72417f2d411118085256fC53CBdDd137',
  GAME_MANAGER: '0x4b42362fcbbcdc7b8f35d73288039cad6cb4e9ef',
  GM_FACTORY: '0xdc9787b869e22256a4f4f49f484586fcff0d351f',
  GS_FACTORY: '0xb130175b648d4ce92ca6153eaa138cc69eb1cf4c',
  HATS_POSTER: '0x363a6eFF03cdAbD5Cf4921d9A85eAf7dFd2A7efD',
} as const;

export const ADDR: Record<string, Address> =
  import.meta.env.VITE_RUNTIME_ENV === 'dev' ? ADDR_TESTNET : ADDR_PROD;
