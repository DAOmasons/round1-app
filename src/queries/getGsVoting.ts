import { Address, getContract } from 'viem';
import {
  Contest,
  GrantShipsVoting,
  ShipChoice,
  ShipVote,
  getBuiltGraphSDK,
} from '../.graphclient';
import { bytes32toAddress } from '../utils/helpers';
import { publicClient } from '../utils/config';
import ERC20VotesPoints from '../abi/ERC20VotesPoints.json';
import SBTBalancePoints from '../abi/SBTBalancePoints.json';
import ERC20Votes from '../abi/Erc20Votes.json';
import { ADDR } from '../constants/addresses';

export type UserVote = Pick<
  ShipVote,
  'id' | 'choice_id' | 'mdPointer' | 'mdProtocol' | 'amount'
>;

export type RawChoice = Pick<
  ShipChoice,
  'active' | 'id' | 'mdPointer' | 'mdProtocol' | 'voteTally'
>;

type UserTokenData = {
  userPoints: bigint;
  totalUserPoints: bigint | null;
  tokenName: string;
  tokenSymbol: string;
};

export type GsVoting = Pick<
  GrantShipsVoting,
  | 'id'
  | 'endTime'
  | 'startTime'
  | 'totalVotes'
  | 'voteDuration'
  | 'voteTokenAddress'
  | 'votingCheckpoint'
  | 'isVotingActive'
  | 'isSBTVoting'
> & {
  contest: Pick<
    Contest,
    | 'votesModule_id'
    | 'choicesModule_id'
    | 'pointsModule_id'
    | 'executionModule_id'
    | 'contestStatus'
  >;
} & {
  choices: (RawChoice & { shipId: string })[];
};

export type VoteData = {
  contest: GsVoting | null;
  userVotes: UserVote[] | null;
  userTokenData: UserTokenData | null;
};

export const handleShipIds = (
  choices: RawChoice[]
): (RawChoice & { shipId: string })[] => {
  return choices.map((choice) => {
    const shipBytes32 = choice?.id?.split('-')?.[1];
    const shipId = bytes32toAddress(shipBytes32);
    return {
      ...(choice as RawChoice),
      shipId,
    };
  });
};

const getVoteTokenUserData = async ({
  userAddress,
  pointsModuleAddress,
  tokenAddress,
  votingCheckpoint,
  isSBTVoting,
}: {
  userAddress: string;
  pointsModuleAddress?: string;
  tokenAddress?: string;
  votingCheckpoint?: string;
  isSBTVoting: boolean;
}) => {
  if (!pointsModuleAddress || !userAddress || !pointsModuleAddress) {
    return null;
  }

  try {
    const tokenContract = getContract({
      address: tokenAddress as Address,
      abi: ERC20Votes,
      client: publicClient,
    });

    if (isSBTVoting) {
      const pointsContract = getContract({
        address: pointsModuleAddress as Address,
        abi: SBTBalancePoints,
        client: publicClient,
      });

      const [userPoints, totalUserPoints, tokenName, tokenSymbol] =
        await Promise.all([
          pointsContract.read.getPoints([userAddress]),
          tokenContract.read.balanceOf([userAddress]),
          tokenContract.read.name(),
          tokenContract.read.symbol(),
        ]);

      return {
        userPoints: userPoints as bigint,
        totalUserPoints: totalUserPoints as bigint,
        tokenName: tokenName as string,
        tokenSymbol: tokenSymbol as string,
      };
    }

    const pointsContract = getContract({
      address: pointsModuleAddress as Address,
      abi: ERC20VotesPoints,
      client: publicClient,
    });

    const [userPoints, totalUserPoints, tokenName, tokenSymbol] =
      await Promise.all([
        pointsContract.read.getPoints([userAddress]),
        tokenContract.read.getPastVotes([userAddress, votingCheckpoint]),
        tokenContract.read.name(),
        tokenContract.read.symbol(),
      ]);

    return {
      userPoints: userPoints as bigint,
      totalUserPoints: totalUserPoints as bigint,
      tokenName: tokenName as string,
      tokenSymbol: tokenSymbol as string,
    };
  } catch (error) {
    console.error('Error fetching user token data', error);
    throw new Error('Error fetching user token data');
  }
};

export const fetchGsVoting = async ({
  contestId,
  userAddress,
}: {
  contestId: Address;
  userAddress: string | undefined;
}): Promise<VoteData> => {
  if (!contestId && !userAddress) {
    return {
      contest: null,
      userVotes: null,
      userTokenData: null,
    };
  }

  if (!userAddress) {
    const { getGsVoting } = getBuiltGraphSDK();
    const contestRes = await getGsVoting({ id: contestId });
    const currentContest = contestRes?.GrantShipsVoting?.[0];

    if (!currentContest) {
      return {
        contest: null,
        userVotes: null,
        userTokenData: null,
      };
    }

    return {
      contest:
        ({
          ...currentContest,
          choices: handleShipIds(
            currentContest.choices as RawChoice[]
          ) as (RawChoice & { shipId: string })[],
        } as GsVoting) || null,
      userVotes: null,
      userTokenData: null,
    };
  }

  const { getGsVoting, getUserVotes } = getBuiltGraphSDK();

  const contestRes = await getGsVoting({ id: contestId });

  const voterRes = await getUserVotes({ contestId, voterAddress: userAddress });
  const currentContest = contestRes?.GrantShipsVoting?.[0];

  if (!currentContest) {
    return {
      contest: null,
      userVotes: null,
      userTokenData: null,
    };
  }

  const tokenRes = await getVoteTokenUserData({
    userAddress,
    pointsModuleAddress: currentContest.contest?.pointsModule_id,
    tokenAddress: currentContest.voteTokenAddress,
    votingCheckpoint: currentContest.votingCheckpoint,
    isSBTVoting: currentContest.isSBTVoting,
  });

  return {
    contest:
      ({
        ...currentContest,
        choices: handleShipIds(
          currentContest.choices as RawChoice[]
        ) as (RawChoice & { shipId: string })[],
      } as GsVoting) || null,
    userVotes: (voterRes?.ShipVote as UserVote[]) || null,
    userTokenData: tokenRes,
  };
};
