import { GameStatus } from './common';

export type FeedCardUI = {
  subject: {
    name: string;
    id: string;
    imgUrl: string;
    entityType: 'ship' | 'project' | 'facilitator';
  };
  object?: {
    name: string;
    id: string;
    entityType: 'ship' | 'project' | 'facilitator';
  };
  message: string;
  timestamp: number;
  embedText?: string;
  embed?: {
    text: string;
    url: string;
  };
  sender: string;
};

export enum MilestoneStatus {
  Idle,
  InReview,
  Approved,
  Rejected,
}

export type MilestoneStep = {
  status: MilestoneStatus;
  amount: bigint;
  description: string;
};

export type ShipsCardUI = {
  id: string;
  name: string;
  status: GameStatus;
  imgUrl: string;
  description: string;
  amtAllocated: string;
  amtDistributed: string;
  amtAvailable: string;
};

export type ShipPageUI = {
  name: string;
  description: string;
  imgUrl: string;
  status: GameStatus;
  amtAllocated: string;
  amtDistributed: string;
  amtAvailable: string;
  shipContractAddress: string;
  members: string[];
  details: {
    thesis: string;
    apply: string;
    extraInfo: string;
    extraLink: string;
    website: string;
    email: string;
    x: string;
    discord: string;
    telegram: string;
    github: string;
  };
};
