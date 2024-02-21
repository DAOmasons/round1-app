import {
  GameManager as ClientGameManger,
  getBuiltGraphSDK,
} from '../.graphclient';
import { GAME_MANAGER } from '../constants/gameSetup';
import { publicClient } from '../utils/config';
import GameManagerAbi from '../abi/GameManager.json';

export type GameManager = ClientGameManger & {
  endTime?: bigint;
  startTime?: bigint;
};

export const getGameManger = async (): Promise<GameManager> => {
  try {
    const { getGameManager } = getBuiltGraphSDK();

    const gameManager = await getGameManager({ id: GAME_MANAGER.ADDRESS });

    return { ...gameManager.gameManager } as GameManager;
  } catch (error) {
    console.error('Error getting game manager:', error);
    throw error;
  }
};
