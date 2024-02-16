import { IpfsJsonStore } from '../localForage';

export const PINATA_GATEWAY = 'https://gateway.pinata.cloud/ipfs';
export const PRIVATE_GATEWAY =
  'https://plum-genetic-marlin-657.mypinata.cloud/ipfs/';
export const getIpfsImage = async (cid: string) => {
  const res = await fetch(`${PINATA_GATEWAY}${cid}`);

  const data = await res.blob();
  return data;
};

export const getJsonFromGateway = async (cid: string) => {
  const res = await fetch(
    `https://plum-genetic-marlin-657.mypinata.cloud/ipfs/${cid}?pinataGatewayToken=${import.meta.env.VITE_GATEWAY_KEY}`
  );
  const data = await res.json();
  return data;
};

export const getIpfsJson = async (cid: string) => {
  // Check storage first
  try {
    const dataFromStorage = await IpfsJsonStore.get(cid);
    if (dataFromStorage) {
      return dataFromStorage;
    } else {
      const dataFromGateway = await getJsonFromGateway(cid);
      await IpfsJsonStore.set(cid, dataFromGateway);
      return dataFromGateway;
    }
  } catch (error) {
    console.error('Error fetching ipfs data', error);
  }
  // If not found, fetch from gateway
};
