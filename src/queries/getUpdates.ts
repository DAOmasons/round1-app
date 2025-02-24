import { getBuiltGraphSDK } from '../.graphclient';
import { resolveUpdates } from '../resolvers/updates';
import { SUBGRAPH_URL } from '../constants/gameSetup';

export const getUpdates = async (entityAddress: string) => {
  try {
    const { getUpdates } = getBuiltGraphSDK({
      apiEndpoint: SUBGRAPH_URL,
    });

    const result = await getUpdates({ entityAddress: entityAddress });

    if (!result.updates) {
      throw new Error('No updates found');
    }

    const resolvedUpdates = await resolveUpdates(result.updates);

    return resolvedUpdates;
  } catch (error) {
    console.error('Error in getUpdates', error);
  }
};
