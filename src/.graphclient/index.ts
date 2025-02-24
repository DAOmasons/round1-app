// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import FilterSchemaTransform from "@graphql-mesh/transform-filter-schema";
import AutoTypeMergingTransform from "@graphprotocol/client-auto-type-merging";
import StitchingMerger from "@graphql-mesh/merger-stitching";
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { GsVotingTypes } from './sources/gs-voting/types';
import type { GrantShipsTypes } from './sources/grant-ships/types';
import * as importedModule$0 from "./sources/grant-ships/introspectionSchema";
import * as importedModule$1 from "./sources/gs-voting/introspectionSchema";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
  Int8: any;
  Timestamp: any;
  contract_type: any;
  entity_type: any;
  jsonb: any;
  numeric: any;
  timestamp: any;
  timestamptz: any;
};

export type Query = {
  project?: Maybe<Project>;
  projects: Array<Project>;
  feedItem?: Maybe<FeedItem>;
  feedItems: Array<FeedItem>;
  feedItemEntity?: Maybe<FeedItemEntity>;
  feedItemEntities: Array<FeedItemEntity>;
  feedItemEmbed?: Maybe<FeedItemEmbed>;
  feedItemEmbeds: Array<FeedItemEmbed>;
  update?: Maybe<Update>;
  updates: Array<Update>;
  grantShip?: Maybe<GrantShip>;
  grantShips: Array<GrantShip>;
  poolIdLookup?: Maybe<PoolIdLookup>;
  poolIdLookups: Array<PoolIdLookup>;
  gameManager?: Maybe<GameManager>;
  gameManagers: Array<GameManager>;
  gameRound?: Maybe<GameRound>;
  gameRounds: Array<GameRound>;
  applicationHistory?: Maybe<ApplicationHistory>;
  applicationHistories: Array<ApplicationHistory>;
  grant?: Maybe<Grant>;
  grants: Array<Grant>;
  milestone?: Maybe<Milestone>;
  milestones: Array<Milestone>;
  profileIdToAnchor?: Maybe<ProfileIdToAnchor>;
  profileIdToAnchors: Array<ProfileIdToAnchor>;
  profileMemberGroup?: Maybe<ProfileMemberGroup>;
  profileMemberGroups: Array<ProfileMemberGroup>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  rawMetadata?: Maybe<RawMetadata>;
  rawMetadata_collection: Array<RawMetadata>;
  log?: Maybe<Log>;
  logs: Array<Log>;
  gmVersion?: Maybe<GmVersion>;
  gmVersions: Array<GmVersion>;
  gmDeployment?: Maybe<GmDeployment>;
  gmDeployments: Array<GmDeployment>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  /** fetch data from the table: "Application" */
  Application: Array<Application>;
  /** fetch data from the table: "Application" using primary key columns */
  Application_by_pk?: Maybe<Application>;
  /** fetch data from the table: "Badge" */
  Badge: Array<Badge>;
  /** fetch data from the table: "BadgeHolder" */
  BadgeHolder: Array<BadgeHolder>;
  /** fetch data from the table: "BadgeHolder" using primary key columns */
  BadgeHolder_by_pk?: Maybe<BadgeHolder>;
  /** fetch data from the table: "BadgeTemplate" */
  BadgeTemplate: Array<BadgeTemplate>;
  /** fetch data from the table: "BadgeTemplate" using primary key columns */
  BadgeTemplate_by_pk?: Maybe<BadgeTemplate>;
  /** fetch data from the table: "Badge" using primary key columns */
  Badge_by_pk?: Maybe<Badge>;
  /** fetch data from the table: "Contest" */
  Contest: Array<Contest>;
  /** fetch data from the table: "ContestClone" */
  ContestClone: Array<ContestClone>;
  /** fetch data from the table: "ContestClone" using primary key columns */
  ContestClone_by_pk?: Maybe<ContestClone>;
  /** fetch data from the table: "ContestTemplate" */
  ContestTemplate: Array<ContestTemplate>;
  /** fetch data from the table: "ContestTemplate" using primary key columns */
  ContestTemplate_by_pk?: Maybe<ContestTemplate>;
  /** fetch data from the table: "Contest" using primary key columns */
  Contest_by_pk?: Maybe<Contest>;
  /** fetch data from the table: "DAOToken" */
  DAOToken: Array<DAOToken>;
  /** fetch data from the table: "DAOToken" using primary key columns */
  DAOToken_by_pk?: Maybe<DAOToken>;
  /** fetch data from the table: "DualTokenPointsParams" */
  DualTokenPointsParams: Array<DualTokenPointsParams>;
  /** fetch data from the table: "DualTokenPointsParams" using primary key columns */
  DualTokenPointsParams_by_pk?: Maybe<DualTokenPointsParams>;
  /** fetch data from the table: "DualTokenTVParams" */
  DualTokenTVParams: Array<DualTokenTVParams>;
  /** fetch data from the table: "DualTokenTVParams" using primary key columns */
  DualTokenTVParams_by_pk?: Maybe<DualTokenTVParams>;
  /** fetch data from the table: "ERCPointParams" */
  ERCPointParams: Array<ERCPointParams>;
  /** fetch data from the table: "ERCPointParams" using primary key columns */
  ERCPointParams_by_pk?: Maybe<ERCPointParams>;
  /** fetch data from the table: "EnvioTX" */
  EnvioTX: Array<EnvioTX>;
  /** fetch data from the table: "EnvioTX" using primary key columns */
  EnvioTX_by_pk?: Maybe<EnvioTX>;
  /** fetch data from the table: "EventPost" */
  EventPost: Array<EventPost>;
  /** fetch data from the table: "EventPost" using primary key columns */
  EventPost_by_pk?: Maybe<EventPost>;
  /** fetch data from the table: "FactoryEventsSummary" */
  FactoryEventsSummary: Array<FactoryEventsSummary>;
  /** fetch data from the table: "FactoryEventsSummary" using primary key columns */
  FactoryEventsSummary_by_pk?: Maybe<FactoryEventsSummary>;
  /** fetch data from the table: "FeedCard" */
  FeedCard: Array<FeedCard>;
  /** fetch data from the table: "FeedCard" using primary key columns */
  FeedCard_by_pk?: Maybe<FeedCard>;
  /** fetch data from the table: "FeedItemEmbed" */
  FeedItemEmbed: Array<FeedItemEmbed>;
  /** fetch data from the table: "FeedItemEmbed" using primary key columns */
  FeedItemEmbed_by_pk?: Maybe<FeedItemEmbed>;
  /** fetch data from the table: "FeedItemEntity" */
  FeedItemEntity: Array<FeedItemEntity>;
  /** fetch data from the table: "FeedItemEntity" using primary key columns */
  FeedItemEntity_by_pk?: Maybe<FeedItemEntity>;
  /** fetch data from the table: "GMInitParams" */
  GMInitParams: Array<GMInitParams>;
  /** fetch data from the table: "GMInitParams" using primary key columns */
  GMInitParams_by_pk?: Maybe<GMInitParams>;
  /** fetch data from the table: "GSVoter" */
  GSVoter: Array<GSVoter>;
  /** fetch data from the table: "GSVoter" using primary key columns */
  GSVoter_by_pk?: Maybe<GSVoter>;
  /** fetch data from the table: "GameManagerFactory" */
  GameManagerFactory: Array<GameManagerFactory>;
  /** fetch data from the table: "GameManagerFactory" using primary key columns */
  GameManagerFactory_by_pk?: Maybe<GameManagerFactory>;
  /** fetch data from the table: "GameManagerTemplate" */
  GameManagerTemplate: Array<GameManagerTemplate>;
  /** fetch data from the table: "GameManagerTemplate" using primary key columns */
  GameManagerTemplate_by_pk?: Maybe<GameManagerTemplate>;
  /** fetch data from the table: "GameRound" */
  GameRound: Array<GameRound>;
  /** fetch data from the table: "GameRound" using primary key columns */
  GameRound_by_pk?: Maybe<GameRound>;
  /** fetch data from the table: "Gate" */
  Gate: Array<Gate>;
  /** fetch data from the table: "Gate" using primary key columns */
  Gate_by_pk?: Maybe<Gate>;
  /** fetch data from the table: "GrantShipsVoting" */
  GrantShipsVoting: Array<GrantShipsVoting>;
  /** fetch data from the table: "GrantShipsVoting" using primary key columns */
  GrantShipsVoting_by_pk?: Maybe<GrantShipsVoting>;
  /** fetch data from the table: "HALParams" */
  HALParams: Array<HALParams>;
  /** fetch data from the table: "HALParams" using primary key columns */
  HALParams_by_pk?: Maybe<HALParams>;
  /** fetch data from the table: "HatsPoster" */
  HatsPoster: Array<HatsPoster>;
  /** fetch data from the table: "HatsPoster" using primary key columns */
  HatsPoster_by_pk?: Maybe<HatsPoster>;
  /** fetch data from the table: "LocalLog" */
  LocalLog: Array<LocalLog>;
  /** fetch data from the table: "LocalLog" using primary key columns */
  LocalLog_by_pk?: Maybe<LocalLog>;
  /** fetch data from the table: "Milestone" */
  Milestone: Array<Milestone>;
  /** fetch data from the table: "MilestoneSet" */
  MilestoneSet: Array<MilestoneSet>;
  /** fetch data from the table: "MilestoneSet" using primary key columns */
  MilestoneSet_by_pk?: Maybe<MilestoneSet>;
  /** fetch data from the table: "Milestone" using primary key columns */
  Milestone_by_pk?: Maybe<Milestone>;
  /** fetch data from the table: "ModuleTemplate" */
  ModuleTemplate: Array<ModuleTemplate>;
  /** fetch data from the table: "ModuleTemplate" using primary key columns */
  ModuleTemplate_by_pk?: Maybe<ModuleTemplate>;
  /** fetch data from the table: "ProfileIdToAnchor" */
  ProfileIdToAnchor: Array<ProfileIdToAnchor>;
  /** fetch data from the table: "ProfileIdToAnchor" using primary key columns */
  ProfileIdToAnchor_by_pk?: Maybe<ProfileIdToAnchor>;
  /** fetch data from the table: "ProfileMemberGroup" */
  ProfileMemberGroup: Array<ProfileMemberGroup>;
  /** fetch data from the table: "ProfileMemberGroup" using primary key columns */
  ProfileMemberGroup_by_pk?: Maybe<ProfileMemberGroup>;
  /** fetch data from the table: "Record" */
  Record: Array<Record>;
  /** fetch data from the table: "Record" using primary key columns */
  Record_by_pk?: Maybe<Record>;
  /** fetch data from the table: "SBTBalParams" */
  SBTBalParams: Array<SBTBalParams>;
  /** fetch data from the table: "SBTBalParams" using primary key columns */
  SBTBalParams_by_pk?: Maybe<SBTBalParams>;
  /** fetch data from the table: "ScaffoldShaman" */
  ScaffoldShaman: Array<ScaffoldShaman>;
  /** fetch data from the table: "ScaffoldShaman" using primary key columns */
  ScaffoldShaman_by_pk?: Maybe<ScaffoldShaman>;
  /** fetch data from the table: "ShipChoice" */
  ShipChoice: Array<ShipChoice>;
  /** fetch data from the table: "ShipChoice" using primary key columns */
  ShipChoice_by_pk?: Maybe<ShipChoice>;
  /** fetch data from the table: "ShipContext" */
  ShipContext: Array<ShipContext>;
  /** fetch data from the table: "ShipContext" using primary key columns */
  ShipContext_by_pk?: Maybe<ShipContext>;
  /** fetch data from the table: "ShipVote" */
  ShipVote: Array<ShipVote>;
  /** fetch data from the table: "ShipVote" using primary key columns */
  ShipVote_by_pk?: Maybe<ShipVote>;
  /** fetch data from the table: "StemModule" */
  StemModule: Array<StemModule>;
  /** fetch data from the table: "StemModule" using primary key columns */
  StemModule_by_pk?: Maybe<StemModule>;
  /** fetch data from the table: "TVParams" */
  TVParams: Array<TVParams>;
  /** fetch data from the table: "TVParams" using primary key columns */
  TVParams_by_pk?: Maybe<TVParams>;
  /** fetch data from the table: "Transaction" */
  Transaction: Array<Transaction>;
  /** fetch data from the table: "Transaction" using primary key columns */
  Transaction_by_pk?: Maybe<Transaction>;
  /** fetch data from the table: "chain_metadata" */
  chain_metadata: Array<chain_metadata>;
  /** fetch data from the table: "chain_metadata" using primary key columns */
  chain_metadata_by_pk?: Maybe<chain_metadata>;
  /** fetch data from the table: "dynamic_contract_registry" */
  dynamic_contract_registry: Array<dynamic_contract_registry>;
  /** fetch data from the table: "dynamic_contract_registry" using primary key columns */
  dynamic_contract_registry_by_pk?: Maybe<dynamic_contract_registry>;
  /** fetch data from the table: "end_of_block_range_scanned_data" */
  end_of_block_range_scanned_data: Array<end_of_block_range_scanned_data>;
  /** fetch data from the table: "end_of_block_range_scanned_data" using primary key columns */
  end_of_block_range_scanned_data_by_pk?: Maybe<end_of_block_range_scanned_data>;
  /** fetch data from the table: "entity_history" */
  entity_history: Array<entity_history>;
  /** fetch data from the table: "entity_history" using primary key columns */
  entity_history_by_pk?: Maybe<entity_history>;
  /** fetch data from the table: "entity_history_filter" */
  entity_history_filter: Array<entity_history_filter>;
  /** fetch data from the table: "entity_history_filter" using primary key columns */
  entity_history_filter_by_pk?: Maybe<entity_history_filter>;
  /** fetch data from the table: "event_sync_state" */
  event_sync_state: Array<event_sync_state>;
  /** fetch data from the table: "event_sync_state" using primary key columns */
  event_sync_state_by_pk?: Maybe<event_sync_state>;
  /** This function helps search for articles */
  get_entity_history_filter: Array<entity_history_filter>;
  /** fetch data from the table: "persisted_state" */
  persisted_state: Array<persisted_state>;
  /** fetch data from the table: "persisted_state" using primary key columns */
  persisted_state_by_pk?: Maybe<persisted_state>;
  /** fetch data from the table: "raw_events" */
  raw_events: Array<raw_events>;
  /** fetch data from the table: "raw_events" using primary key columns */
  raw_events_by_pk?: Maybe<raw_events>;
};


export type QueryprojectArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprojectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Project_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Project_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfeedItemArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfeedItemsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FeedItem_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FeedItem_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfeedItemEntityArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfeedItemEntitiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FeedItemEntity_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FeedItemEntity_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfeedItemEmbedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfeedItemEmbedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FeedItemEmbed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FeedItemEmbed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryupdateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryupdatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Update_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Update_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygrantShipArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygrantShipsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantShip_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GrantShip_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolIdLookupArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolIdLookupsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolIdLookup_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolIdLookup_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygameManagerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygameManagersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GameManager_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GameManager_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygameRoundArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygameRoundsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GameRound_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GameRound_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryapplicationHistoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryapplicationHistoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApplicationHistory_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ApplicationHistory_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygrantArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygrantsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Grant_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Grant_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymilestoneArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymilestonesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Milestone_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Milestone_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprofileIdToAnchorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprofileIdToAnchorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProfileIdToAnchor_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProfileIdToAnchor_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprofileMemberGroupArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprofileMemberGroupsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProfileMemberGroup_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProfileMemberGroup_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrawMetadataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrawMetadata_collectionArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RawMetadata_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RawMetadata_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerylogArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerylogsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Log_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Log_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygmVersionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygmVersionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GmVersion_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GmVersion_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygmDeploymentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygmDeploymentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GmDeployment_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GmDeployment_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};


export type QueryApplicationArgs = {
  distinct_on?: InputMaybe<Array<Application_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Application_order_by>>;
  where?: InputMaybe<Application_bool_exp>;
};


export type QueryApplication_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryBadgeArgs = {
  distinct_on?: InputMaybe<Array<Badge_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Badge_order_by>>;
  where?: InputMaybe<Badge_bool_exp>;
};


export type QueryBadgeHolderArgs = {
  distinct_on?: InputMaybe<Array<BadgeHolder_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BadgeHolder_order_by>>;
  where?: InputMaybe<BadgeHolder_bool_exp>;
};


export type QueryBadgeHolder_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryBadgeTemplateArgs = {
  distinct_on?: InputMaybe<Array<BadgeTemplate_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BadgeTemplate_order_by>>;
  where?: InputMaybe<BadgeTemplate_bool_exp>;
};


export type QueryBadgeTemplate_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryBadge_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryContestArgs = {
  distinct_on?: InputMaybe<Array<Contest_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contest_order_by>>;
  where?: InputMaybe<Contest_bool_exp>;
};


export type QueryContestCloneArgs = {
  distinct_on?: InputMaybe<Array<ContestClone_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ContestClone_order_by>>;
  where?: InputMaybe<ContestClone_bool_exp>;
};


export type QueryContestClone_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryContestTemplateArgs = {
  distinct_on?: InputMaybe<Array<ContestTemplate_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ContestTemplate_order_by>>;
  where?: InputMaybe<ContestTemplate_bool_exp>;
};


export type QueryContestTemplate_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryContest_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryDAOTokenArgs = {
  distinct_on?: InputMaybe<Array<DAOToken_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DAOToken_order_by>>;
  where?: InputMaybe<DAOToken_bool_exp>;
};


export type QueryDAOToken_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryDualTokenPointsParamsArgs = {
  distinct_on?: InputMaybe<Array<DualTokenPointsParams_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DualTokenPointsParams_order_by>>;
  where?: InputMaybe<DualTokenPointsParams_bool_exp>;
};


export type QueryDualTokenPointsParams_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryDualTokenTVParamsArgs = {
  distinct_on?: InputMaybe<Array<DualTokenTVParams_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DualTokenTVParams_order_by>>;
  where?: InputMaybe<DualTokenTVParams_bool_exp>;
};


export type QueryDualTokenTVParams_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryERCPointParamsArgs = {
  distinct_on?: InputMaybe<Array<ERCPointParams_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ERCPointParams_order_by>>;
  where?: InputMaybe<ERCPointParams_bool_exp>;
};


export type QueryERCPointParams_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryEnvioTXArgs = {
  distinct_on?: InputMaybe<Array<EnvioTX_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EnvioTX_order_by>>;
  where?: InputMaybe<EnvioTX_bool_exp>;
};


export type QueryEnvioTX_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryEventPostArgs = {
  distinct_on?: InputMaybe<Array<EventPost_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EventPost_order_by>>;
  where?: InputMaybe<EventPost_bool_exp>;
};


export type QueryEventPost_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryFactoryEventsSummaryArgs = {
  distinct_on?: InputMaybe<Array<FactoryEventsSummary_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FactoryEventsSummary_order_by>>;
  where?: InputMaybe<FactoryEventsSummary_bool_exp>;
};


export type QueryFactoryEventsSummary_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryFeedCardArgs = {
  distinct_on?: InputMaybe<Array<FeedCard_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FeedCard_order_by>>;
  where?: InputMaybe<FeedCard_bool_exp>;
};


export type QueryFeedCard_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryFeedItemEmbedArgs = {
  distinct_on?: InputMaybe<Array<FeedItemEmbed_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FeedItemEmbed_order_by>>;
  where?: InputMaybe<FeedItemEmbed_bool_exp>;
};


export type QueryFeedItemEmbed_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryFeedItemEntityArgs = {
  distinct_on?: InputMaybe<Array<FeedItemEntity_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FeedItemEntity_order_by>>;
  where?: InputMaybe<FeedItemEntity_bool_exp>;
};


export type QueryFeedItemEntity_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryGMInitParamsArgs = {
  distinct_on?: InputMaybe<Array<GMInitParams_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GMInitParams_order_by>>;
  where?: InputMaybe<GMInitParams_bool_exp>;
};


export type QueryGMInitParams_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryGSVoterArgs = {
  distinct_on?: InputMaybe<Array<GSVoter_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GSVoter_order_by>>;
  where?: InputMaybe<GSVoter_bool_exp>;
};


export type QueryGSVoter_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryGameManagerFactoryArgs = {
  distinct_on?: InputMaybe<Array<GameManagerFactory_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameManagerFactory_order_by>>;
  where?: InputMaybe<GameManagerFactory_bool_exp>;
};


export type QueryGameManagerFactory_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryGameManagerTemplateArgs = {
  distinct_on?: InputMaybe<Array<GameManagerTemplate_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameManagerTemplate_order_by>>;
  where?: InputMaybe<GameManagerTemplate_bool_exp>;
};


export type QueryGameManagerTemplate_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryGameRoundArgs = {
  distinct_on?: InputMaybe<Array<GameRound_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameRound_order_by>>;
  where?: InputMaybe<GameRound_bool_exp>;
};


export type QueryGameRound_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryGateArgs = {
  distinct_on?: InputMaybe<Array<Gate_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gate_order_by>>;
  where?: InputMaybe<Gate_bool_exp>;
};


export type QueryGate_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryGrantShipsVotingArgs = {
  distinct_on?: InputMaybe<Array<GrantShipsVoting_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GrantShipsVoting_order_by>>;
  where?: InputMaybe<GrantShipsVoting_bool_exp>;
};


export type QueryGrantShipsVoting_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryHALParamsArgs = {
  distinct_on?: InputMaybe<Array<HALParams_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<HALParams_order_by>>;
  where?: InputMaybe<HALParams_bool_exp>;
};


export type QueryHALParams_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryHatsPosterArgs = {
  distinct_on?: InputMaybe<Array<HatsPoster_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<HatsPoster_order_by>>;
  where?: InputMaybe<HatsPoster_bool_exp>;
};


export type QueryHatsPoster_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryLocalLogArgs = {
  distinct_on?: InputMaybe<Array<LocalLog_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LocalLog_order_by>>;
  where?: InputMaybe<LocalLog_bool_exp>;
};


export type QueryLocalLog_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryMilestoneArgs = {
  distinct_on?: InputMaybe<Array<Milestone_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Milestone_order_by>>;
  where?: InputMaybe<Milestone_bool_exp>;
};


export type QueryMilestoneSetArgs = {
  distinct_on?: InputMaybe<Array<MilestoneSet_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MilestoneSet_order_by>>;
  where?: InputMaybe<MilestoneSet_bool_exp>;
};


export type QueryMilestoneSet_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryMilestone_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryModuleTemplateArgs = {
  distinct_on?: InputMaybe<Array<ModuleTemplate_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ModuleTemplate_order_by>>;
  where?: InputMaybe<ModuleTemplate_bool_exp>;
};


export type QueryModuleTemplate_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryProfileIdToAnchorArgs = {
  distinct_on?: InputMaybe<Array<ProfileIdToAnchor_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfileIdToAnchor_order_by>>;
  where?: InputMaybe<ProfileIdToAnchor_bool_exp>;
};


export type QueryProfileIdToAnchor_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryProfileMemberGroupArgs = {
  distinct_on?: InputMaybe<Array<ProfileMemberGroup_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfileMemberGroup_order_by>>;
  where?: InputMaybe<ProfileMemberGroup_bool_exp>;
};


export type QueryProfileMemberGroup_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryRecordArgs = {
  distinct_on?: InputMaybe<Array<Record_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Record_order_by>>;
  where?: InputMaybe<Record_bool_exp>;
};


export type QueryRecord_by_pkArgs = {
  id: Scalars['String'];
};


export type QuerySBTBalParamsArgs = {
  distinct_on?: InputMaybe<Array<SBTBalParams_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<SBTBalParams_order_by>>;
  where?: InputMaybe<SBTBalParams_bool_exp>;
};


export type QuerySBTBalParams_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryScaffoldShamanArgs = {
  distinct_on?: InputMaybe<Array<ScaffoldShaman_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ScaffoldShaman_order_by>>;
  where?: InputMaybe<ScaffoldShaman_bool_exp>;
};


export type QueryScaffoldShaman_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryShipChoiceArgs = {
  distinct_on?: InputMaybe<Array<ShipChoice_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ShipChoice_order_by>>;
  where?: InputMaybe<ShipChoice_bool_exp>;
};


export type QueryShipChoice_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryShipContextArgs = {
  distinct_on?: InputMaybe<Array<ShipContext_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ShipContext_order_by>>;
  where?: InputMaybe<ShipContext_bool_exp>;
};


export type QueryShipContext_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryShipVoteArgs = {
  distinct_on?: InputMaybe<Array<ShipVote_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ShipVote_order_by>>;
  where?: InputMaybe<ShipVote_bool_exp>;
};


export type QueryShipVote_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryStemModuleArgs = {
  distinct_on?: InputMaybe<Array<StemModule_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<StemModule_order_by>>;
  where?: InputMaybe<StemModule_bool_exp>;
};


export type QueryStemModule_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryTVParamsArgs = {
  distinct_on?: InputMaybe<Array<TVParams_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TVParams_order_by>>;
  where?: InputMaybe<TVParams_bool_exp>;
};


export type QueryTVParams_by_pkArgs = {
  id: Scalars['String'];
};


export type QueryTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_order_by>>;
  where?: InputMaybe<Transaction_bool_exp>;
};


export type QueryTransaction_by_pkArgs = {
  id: Scalars['String'];
};


export type Querychain_metadataArgs = {
  distinct_on?: InputMaybe<Array<chain_metadata_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<chain_metadata_order_by>>;
  where?: InputMaybe<chain_metadata_bool_exp>;
};


export type Querychain_metadata_by_pkArgs = {
  chain_id: Scalars['Int'];
};


export type Querydynamic_contract_registryArgs = {
  distinct_on?: InputMaybe<Array<dynamic_contract_registry_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<dynamic_contract_registry_order_by>>;
  where?: InputMaybe<dynamic_contract_registry_bool_exp>;
};


export type Querydynamic_contract_registry_by_pkArgs = {
  chain_id: Scalars['Int'];
  contract_address: Scalars['String'];
};


export type Queryend_of_block_range_scanned_dataArgs = {
  distinct_on?: InputMaybe<Array<end_of_block_range_scanned_data_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<end_of_block_range_scanned_data_order_by>>;
  where?: InputMaybe<end_of_block_range_scanned_data_bool_exp>;
};


export type Queryend_of_block_range_scanned_data_by_pkArgs = {
  block_number: Scalars['Int'];
  chain_id: Scalars['Int'];
};


export type Queryentity_historyArgs = {
  distinct_on?: InputMaybe<Array<entity_history_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<entity_history_order_by>>;
  where?: InputMaybe<entity_history_bool_exp>;
};


export type Queryentity_history_by_pkArgs = {
  block_number: Scalars['Int'];
  block_timestamp: Scalars['Int'];
  chain_id: Scalars['Int'];
  entity_id: Scalars['String'];
  entity_type: Scalars['entity_type'];
  log_index: Scalars['Int'];
};


export type Queryentity_history_filterArgs = {
  distinct_on?: InputMaybe<Array<entity_history_filter_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<entity_history_filter_order_by>>;
  where?: InputMaybe<entity_history_filter_bool_exp>;
};


export type Queryentity_history_filter_by_pkArgs = {
  block_number: Scalars['Int'];
  block_timestamp: Scalars['Int'];
  chain_id: Scalars['Int'];
  entity_id: Scalars['String'];
  entity_type: Scalars['entity_type'];
  log_index: Scalars['Int'];
  previous_log_index: Scalars['Int'];
};


export type Queryevent_sync_stateArgs = {
  distinct_on?: InputMaybe<Array<event_sync_state_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<event_sync_state_order_by>>;
  where?: InputMaybe<event_sync_state_bool_exp>;
};


export type Queryevent_sync_state_by_pkArgs = {
  chain_id: Scalars['Int'];
};


export type Queryget_entity_history_filterArgs = {
  args: get_entity_history_filter_args;
  distinct_on?: InputMaybe<Array<entity_history_filter_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<entity_history_filter_order_by>>;
  where?: InputMaybe<entity_history_filter_bool_exp>;
};


export type Querypersisted_stateArgs = {
  distinct_on?: InputMaybe<Array<persisted_state_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<persisted_state_order_by>>;
  where?: InputMaybe<persisted_state_bool_exp>;
};


export type Querypersisted_state_by_pkArgs = {
  id: Scalars['Int'];
};


export type Queryraw_eventsArgs = {
  distinct_on?: InputMaybe<Array<raw_events_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<raw_events_order_by>>;
  where?: InputMaybe<raw_events_bool_exp>;
};


export type Queryraw_events_by_pkArgs = {
  chain_id: Scalars['Int'];
  event_id: Scalars['numeric'];
};

export type Subscription = {
  project?: Maybe<Project>;
  projects: Array<Project>;
  feedItem?: Maybe<FeedItem>;
  feedItems: Array<FeedItem>;
  feedItemEntity?: Maybe<FeedItemEntity>;
  feedItemEntities: Array<FeedItemEntity>;
  feedItemEmbed?: Maybe<FeedItemEmbed>;
  feedItemEmbeds: Array<FeedItemEmbed>;
  update?: Maybe<Update>;
  updates: Array<Update>;
  grantShip?: Maybe<GrantShip>;
  grantShips: Array<GrantShip>;
  poolIdLookup?: Maybe<PoolIdLookup>;
  poolIdLookups: Array<PoolIdLookup>;
  gameManager?: Maybe<GameManager>;
  gameManagers: Array<GameManager>;
  gameRound?: Maybe<GameRound>;
  gameRounds: Array<GameRound>;
  applicationHistory?: Maybe<ApplicationHistory>;
  applicationHistories: Array<ApplicationHistory>;
  grant?: Maybe<Grant>;
  grants: Array<Grant>;
  milestone?: Maybe<Milestone>;
  milestones: Array<Milestone>;
  profileIdToAnchor?: Maybe<ProfileIdToAnchor>;
  profileIdToAnchors: Array<ProfileIdToAnchor>;
  profileMemberGroup?: Maybe<ProfileMemberGroup>;
  profileMemberGroups: Array<ProfileMemberGroup>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  rawMetadata?: Maybe<RawMetadata>;
  rawMetadata_collection: Array<RawMetadata>;
  log?: Maybe<Log>;
  logs: Array<Log>;
  gmVersion?: Maybe<GmVersion>;
  gmVersions: Array<GmVersion>;
  gmDeployment?: Maybe<GmDeployment>;
  gmDeployments: Array<GmDeployment>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  /** fetch data from the table: "Application" */
  Application: Array<Application>;
  /** fetch data from the table: "Application" using primary key columns */
  Application_by_pk?: Maybe<Application>;
  /** fetch data from the table in a streaming manner: "Application" */
  Application_stream: Array<Application>;
  /** fetch data from the table: "Badge" */
  Badge: Array<Badge>;
  /** fetch data from the table: "BadgeHolder" */
  BadgeHolder: Array<BadgeHolder>;
  /** fetch data from the table: "BadgeHolder" using primary key columns */
  BadgeHolder_by_pk?: Maybe<BadgeHolder>;
  /** fetch data from the table in a streaming manner: "BadgeHolder" */
  BadgeHolder_stream: Array<BadgeHolder>;
  /** fetch data from the table: "BadgeTemplate" */
  BadgeTemplate: Array<BadgeTemplate>;
  /** fetch data from the table: "BadgeTemplate" using primary key columns */
  BadgeTemplate_by_pk?: Maybe<BadgeTemplate>;
  /** fetch data from the table in a streaming manner: "BadgeTemplate" */
  BadgeTemplate_stream: Array<BadgeTemplate>;
  /** fetch data from the table: "Badge" using primary key columns */
  Badge_by_pk?: Maybe<Badge>;
  /** fetch data from the table in a streaming manner: "Badge" */
  Badge_stream: Array<Badge>;
  /** fetch data from the table: "Contest" */
  Contest: Array<Contest>;
  /** fetch data from the table: "ContestClone" */
  ContestClone: Array<ContestClone>;
  /** fetch data from the table: "ContestClone" using primary key columns */
  ContestClone_by_pk?: Maybe<ContestClone>;
  /** fetch data from the table in a streaming manner: "ContestClone" */
  ContestClone_stream: Array<ContestClone>;
  /** fetch data from the table: "ContestTemplate" */
  ContestTemplate: Array<ContestTemplate>;
  /** fetch data from the table: "ContestTemplate" using primary key columns */
  ContestTemplate_by_pk?: Maybe<ContestTemplate>;
  /** fetch data from the table in a streaming manner: "ContestTemplate" */
  ContestTemplate_stream: Array<ContestTemplate>;
  /** fetch data from the table: "Contest" using primary key columns */
  Contest_by_pk?: Maybe<Contest>;
  /** fetch data from the table in a streaming manner: "Contest" */
  Contest_stream: Array<Contest>;
  /** fetch data from the table: "DAOToken" */
  DAOToken: Array<DAOToken>;
  /** fetch data from the table: "DAOToken" using primary key columns */
  DAOToken_by_pk?: Maybe<DAOToken>;
  /** fetch data from the table in a streaming manner: "DAOToken" */
  DAOToken_stream: Array<DAOToken>;
  /** fetch data from the table: "DualTokenPointsParams" */
  DualTokenPointsParams: Array<DualTokenPointsParams>;
  /** fetch data from the table: "DualTokenPointsParams" using primary key columns */
  DualTokenPointsParams_by_pk?: Maybe<DualTokenPointsParams>;
  /** fetch data from the table in a streaming manner: "DualTokenPointsParams" */
  DualTokenPointsParams_stream: Array<DualTokenPointsParams>;
  /** fetch data from the table: "DualTokenTVParams" */
  DualTokenTVParams: Array<DualTokenTVParams>;
  /** fetch data from the table: "DualTokenTVParams" using primary key columns */
  DualTokenTVParams_by_pk?: Maybe<DualTokenTVParams>;
  /** fetch data from the table in a streaming manner: "DualTokenTVParams" */
  DualTokenTVParams_stream: Array<DualTokenTVParams>;
  /** fetch data from the table: "ERCPointParams" */
  ERCPointParams: Array<ERCPointParams>;
  /** fetch data from the table: "ERCPointParams" using primary key columns */
  ERCPointParams_by_pk?: Maybe<ERCPointParams>;
  /** fetch data from the table in a streaming manner: "ERCPointParams" */
  ERCPointParams_stream: Array<ERCPointParams>;
  /** fetch data from the table: "EnvioTX" */
  EnvioTX: Array<EnvioTX>;
  /** fetch data from the table: "EnvioTX" using primary key columns */
  EnvioTX_by_pk?: Maybe<EnvioTX>;
  /** fetch data from the table in a streaming manner: "EnvioTX" */
  EnvioTX_stream: Array<EnvioTX>;
  /** fetch data from the table: "EventPost" */
  EventPost: Array<EventPost>;
  /** fetch data from the table: "EventPost" using primary key columns */
  EventPost_by_pk?: Maybe<EventPost>;
  /** fetch data from the table in a streaming manner: "EventPost" */
  EventPost_stream: Array<EventPost>;
  /** fetch data from the table: "FactoryEventsSummary" */
  FactoryEventsSummary: Array<FactoryEventsSummary>;
  /** fetch data from the table: "FactoryEventsSummary" using primary key columns */
  FactoryEventsSummary_by_pk?: Maybe<FactoryEventsSummary>;
  /** fetch data from the table in a streaming manner: "FactoryEventsSummary" */
  FactoryEventsSummary_stream: Array<FactoryEventsSummary>;
  /** fetch data from the table: "FeedCard" */
  FeedCard: Array<FeedCard>;
  /** fetch data from the table: "FeedCard" using primary key columns */
  FeedCard_by_pk?: Maybe<FeedCard>;
  /** fetch data from the table in a streaming manner: "FeedCard" */
  FeedCard_stream: Array<FeedCard>;
  /** fetch data from the table: "FeedItemEmbed" */
  FeedItemEmbed: Array<FeedItemEmbed>;
  /** fetch data from the table: "FeedItemEmbed" using primary key columns */
  FeedItemEmbed_by_pk?: Maybe<FeedItemEmbed>;
  /** fetch data from the table in a streaming manner: "FeedItemEmbed" */
  FeedItemEmbed_stream: Array<FeedItemEmbed>;
  /** fetch data from the table: "FeedItemEntity" */
  FeedItemEntity: Array<FeedItemEntity>;
  /** fetch data from the table: "FeedItemEntity" using primary key columns */
  FeedItemEntity_by_pk?: Maybe<FeedItemEntity>;
  /** fetch data from the table in a streaming manner: "FeedItemEntity" */
  FeedItemEntity_stream: Array<FeedItemEntity>;
  /** fetch data from the table: "GMInitParams" */
  GMInitParams: Array<GMInitParams>;
  /** fetch data from the table: "GMInitParams" using primary key columns */
  GMInitParams_by_pk?: Maybe<GMInitParams>;
  /** fetch data from the table in a streaming manner: "GMInitParams" */
  GMInitParams_stream: Array<GMInitParams>;
  /** fetch data from the table: "GSVoter" */
  GSVoter: Array<GSVoter>;
  /** fetch data from the table: "GSVoter" using primary key columns */
  GSVoter_by_pk?: Maybe<GSVoter>;
  /** fetch data from the table in a streaming manner: "GSVoter" */
  GSVoter_stream: Array<GSVoter>;
  /** fetch data from the table: "GameManagerFactory" */
  GameManagerFactory: Array<GameManagerFactory>;
  /** fetch data from the table: "GameManagerFactory" using primary key columns */
  GameManagerFactory_by_pk?: Maybe<GameManagerFactory>;
  /** fetch data from the table in a streaming manner: "GameManagerFactory" */
  GameManagerFactory_stream: Array<GameManagerFactory>;
  /** fetch data from the table: "GameManagerTemplate" */
  GameManagerTemplate: Array<GameManagerTemplate>;
  /** fetch data from the table: "GameManagerTemplate" using primary key columns */
  GameManagerTemplate_by_pk?: Maybe<GameManagerTemplate>;
  /** fetch data from the table in a streaming manner: "GameManagerTemplate" */
  GameManagerTemplate_stream: Array<GameManagerTemplate>;
  /** fetch data from the table: "GameRound" */
  GameRound: Array<GameRound>;
  /** fetch data from the table: "GameRound" using primary key columns */
  GameRound_by_pk?: Maybe<GameRound>;
  /** fetch data from the table in a streaming manner: "GameRound" */
  GameRound_stream: Array<GameRound>;
  /** fetch data from the table: "Gate" */
  Gate: Array<Gate>;
  /** fetch data from the table: "Gate" using primary key columns */
  Gate_by_pk?: Maybe<Gate>;
  /** fetch data from the table in a streaming manner: "Gate" */
  Gate_stream: Array<Gate>;
  /** fetch data from the table: "GrantShipsVoting" */
  GrantShipsVoting: Array<GrantShipsVoting>;
  /** fetch data from the table: "GrantShipsVoting" using primary key columns */
  GrantShipsVoting_by_pk?: Maybe<GrantShipsVoting>;
  /** fetch data from the table in a streaming manner: "GrantShipsVoting" */
  GrantShipsVoting_stream: Array<GrantShipsVoting>;
  /** fetch data from the table: "HALParams" */
  HALParams: Array<HALParams>;
  /** fetch data from the table: "HALParams" using primary key columns */
  HALParams_by_pk?: Maybe<HALParams>;
  /** fetch data from the table in a streaming manner: "HALParams" */
  HALParams_stream: Array<HALParams>;
  /** fetch data from the table: "HatsPoster" */
  HatsPoster: Array<HatsPoster>;
  /** fetch data from the table: "HatsPoster" using primary key columns */
  HatsPoster_by_pk?: Maybe<HatsPoster>;
  /** fetch data from the table in a streaming manner: "HatsPoster" */
  HatsPoster_stream: Array<HatsPoster>;
  /** fetch data from the table: "LocalLog" */
  LocalLog: Array<LocalLog>;
  /** fetch data from the table: "LocalLog" using primary key columns */
  LocalLog_by_pk?: Maybe<LocalLog>;
  /** fetch data from the table in a streaming manner: "LocalLog" */
  LocalLog_stream: Array<LocalLog>;
  /** fetch data from the table: "Milestone" */
  Milestone: Array<Milestone>;
  /** fetch data from the table: "MilestoneSet" */
  MilestoneSet: Array<MilestoneSet>;
  /** fetch data from the table: "MilestoneSet" using primary key columns */
  MilestoneSet_by_pk?: Maybe<MilestoneSet>;
  /** fetch data from the table in a streaming manner: "MilestoneSet" */
  MilestoneSet_stream: Array<MilestoneSet>;
  /** fetch data from the table: "Milestone" using primary key columns */
  Milestone_by_pk?: Maybe<Milestone>;
  /** fetch data from the table in a streaming manner: "Milestone" */
  Milestone_stream: Array<Milestone>;
  /** fetch data from the table: "ModuleTemplate" */
  ModuleTemplate: Array<ModuleTemplate>;
  /** fetch data from the table: "ModuleTemplate" using primary key columns */
  ModuleTemplate_by_pk?: Maybe<ModuleTemplate>;
  /** fetch data from the table in a streaming manner: "ModuleTemplate" */
  ModuleTemplate_stream: Array<ModuleTemplate>;
  /** fetch data from the table: "ProfileIdToAnchor" */
  ProfileIdToAnchor: Array<ProfileIdToAnchor>;
  /** fetch data from the table: "ProfileIdToAnchor" using primary key columns */
  ProfileIdToAnchor_by_pk?: Maybe<ProfileIdToAnchor>;
  /** fetch data from the table in a streaming manner: "ProfileIdToAnchor" */
  ProfileIdToAnchor_stream: Array<ProfileIdToAnchor>;
  /** fetch data from the table: "ProfileMemberGroup" */
  ProfileMemberGroup: Array<ProfileMemberGroup>;
  /** fetch data from the table: "ProfileMemberGroup" using primary key columns */
  ProfileMemberGroup_by_pk?: Maybe<ProfileMemberGroup>;
  /** fetch data from the table in a streaming manner: "ProfileMemberGroup" */
  ProfileMemberGroup_stream: Array<ProfileMemberGroup>;
  /** fetch data from the table: "Record" */
  Record: Array<Record>;
  /** fetch data from the table: "Record" using primary key columns */
  Record_by_pk?: Maybe<Record>;
  /** fetch data from the table in a streaming manner: "Record" */
  Record_stream: Array<Record>;
  /** fetch data from the table: "SBTBalParams" */
  SBTBalParams: Array<SBTBalParams>;
  /** fetch data from the table: "SBTBalParams" using primary key columns */
  SBTBalParams_by_pk?: Maybe<SBTBalParams>;
  /** fetch data from the table in a streaming manner: "SBTBalParams" */
  SBTBalParams_stream: Array<SBTBalParams>;
  /** fetch data from the table: "ScaffoldShaman" */
  ScaffoldShaman: Array<ScaffoldShaman>;
  /** fetch data from the table: "ScaffoldShaman" using primary key columns */
  ScaffoldShaman_by_pk?: Maybe<ScaffoldShaman>;
  /** fetch data from the table in a streaming manner: "ScaffoldShaman" */
  ScaffoldShaman_stream: Array<ScaffoldShaman>;
  /** fetch data from the table: "ShipChoice" */
  ShipChoice: Array<ShipChoice>;
  /** fetch data from the table: "ShipChoice" using primary key columns */
  ShipChoice_by_pk?: Maybe<ShipChoice>;
  /** fetch data from the table in a streaming manner: "ShipChoice" */
  ShipChoice_stream: Array<ShipChoice>;
  /** fetch data from the table: "ShipContext" */
  ShipContext: Array<ShipContext>;
  /** fetch data from the table: "ShipContext" using primary key columns */
  ShipContext_by_pk?: Maybe<ShipContext>;
  /** fetch data from the table in a streaming manner: "ShipContext" */
  ShipContext_stream: Array<ShipContext>;
  /** fetch data from the table: "ShipVote" */
  ShipVote: Array<ShipVote>;
  /** fetch data from the table: "ShipVote" using primary key columns */
  ShipVote_by_pk?: Maybe<ShipVote>;
  /** fetch data from the table in a streaming manner: "ShipVote" */
  ShipVote_stream: Array<ShipVote>;
  /** fetch data from the table: "StemModule" */
  StemModule: Array<StemModule>;
  /** fetch data from the table: "StemModule" using primary key columns */
  StemModule_by_pk?: Maybe<StemModule>;
  /** fetch data from the table in a streaming manner: "StemModule" */
  StemModule_stream: Array<StemModule>;
  /** fetch data from the table: "TVParams" */
  TVParams: Array<TVParams>;
  /** fetch data from the table: "TVParams" using primary key columns */
  TVParams_by_pk?: Maybe<TVParams>;
  /** fetch data from the table in a streaming manner: "TVParams" */
  TVParams_stream: Array<TVParams>;
  /** fetch data from the table: "Transaction" */
  Transaction: Array<Transaction>;
  /** fetch data from the table: "Transaction" using primary key columns */
  Transaction_by_pk?: Maybe<Transaction>;
  /** fetch data from the table in a streaming manner: "Transaction" */
  Transaction_stream: Array<Transaction>;
  /** fetch data from the table: "chain_metadata" */
  chain_metadata: Array<chain_metadata>;
  /** fetch data from the table: "chain_metadata" using primary key columns */
  chain_metadata_by_pk?: Maybe<chain_metadata>;
  /** fetch data from the table in a streaming manner: "chain_metadata" */
  chain_metadata_stream: Array<chain_metadata>;
  /** fetch data from the table: "dynamic_contract_registry" */
  dynamic_contract_registry: Array<dynamic_contract_registry>;
  /** fetch data from the table: "dynamic_contract_registry" using primary key columns */
  dynamic_contract_registry_by_pk?: Maybe<dynamic_contract_registry>;
  /** fetch data from the table in a streaming manner: "dynamic_contract_registry" */
  dynamic_contract_registry_stream: Array<dynamic_contract_registry>;
  /** fetch data from the table: "end_of_block_range_scanned_data" */
  end_of_block_range_scanned_data: Array<end_of_block_range_scanned_data>;
  /** fetch data from the table: "end_of_block_range_scanned_data" using primary key columns */
  end_of_block_range_scanned_data_by_pk?: Maybe<end_of_block_range_scanned_data>;
  /** fetch data from the table in a streaming manner: "end_of_block_range_scanned_data" */
  end_of_block_range_scanned_data_stream: Array<end_of_block_range_scanned_data>;
  /** fetch data from the table: "entity_history" */
  entity_history: Array<entity_history>;
  /** fetch data from the table: "entity_history" using primary key columns */
  entity_history_by_pk?: Maybe<entity_history>;
  /** fetch data from the table: "entity_history_filter" */
  entity_history_filter: Array<entity_history_filter>;
  /** fetch data from the table: "entity_history_filter" using primary key columns */
  entity_history_filter_by_pk?: Maybe<entity_history_filter>;
  /** fetch data from the table in a streaming manner: "entity_history_filter" */
  entity_history_filter_stream: Array<entity_history_filter>;
  /** fetch data from the table in a streaming manner: "entity_history" */
  entity_history_stream: Array<entity_history>;
  /** fetch data from the table: "event_sync_state" */
  event_sync_state: Array<event_sync_state>;
  /** fetch data from the table: "event_sync_state" using primary key columns */
  event_sync_state_by_pk?: Maybe<event_sync_state>;
  /** fetch data from the table in a streaming manner: "event_sync_state" */
  event_sync_state_stream: Array<event_sync_state>;
  /** This function helps search for articles */
  get_entity_history_filter: Array<entity_history_filter>;
  /** fetch data from the table: "persisted_state" */
  persisted_state: Array<persisted_state>;
  /** fetch data from the table: "persisted_state" using primary key columns */
  persisted_state_by_pk?: Maybe<persisted_state>;
  /** fetch data from the table in a streaming manner: "persisted_state" */
  persisted_state_stream: Array<persisted_state>;
  /** fetch data from the table: "raw_events" */
  raw_events: Array<raw_events>;
  /** fetch data from the table: "raw_events" using primary key columns */
  raw_events_by_pk?: Maybe<raw_events>;
  /** fetch data from the table in a streaming manner: "raw_events" */
  raw_events_stream: Array<raw_events>;
};


export type SubscriptionprojectArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprojectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Project_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Project_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfeedItemArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfeedItemsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FeedItem_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FeedItem_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfeedItemEntityArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfeedItemEntitiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FeedItemEntity_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FeedItemEntity_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfeedItemEmbedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfeedItemEmbedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FeedItemEmbed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FeedItemEmbed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionupdateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionupdatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Update_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Update_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongrantShipArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongrantShipsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantShip_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GrantShip_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolIdLookupArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolIdLookupsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolIdLookup_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolIdLookup_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongameManagerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongameManagersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GameManager_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GameManager_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongameRoundArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongameRoundsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GameRound_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GameRound_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionapplicationHistoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionapplicationHistoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApplicationHistory_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ApplicationHistory_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongrantArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongrantsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Grant_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Grant_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmilestoneArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmilestonesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Milestone_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Milestone_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprofileIdToAnchorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprofileIdToAnchorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProfileIdToAnchor_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProfileIdToAnchor_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprofileMemberGroupArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprofileMemberGroupsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProfileMemberGroup_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProfileMemberGroup_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrawMetadataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrawMetadata_collectionArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RawMetadata_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RawMetadata_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionlogArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionlogsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Log_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Log_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongmVersionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongmVersionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GmVersion_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GmVersion_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongmDeploymentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongmDeploymentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GmDeployment_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GmDeployment_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};


export type SubscriptionApplicationArgs = {
  distinct_on?: InputMaybe<Array<Application_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Application_order_by>>;
  where?: InputMaybe<Application_bool_exp>;
};


export type SubscriptionApplication_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionApplication_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Application_stream_cursor_input>>;
  where?: InputMaybe<Application_bool_exp>;
};


export type SubscriptionBadgeArgs = {
  distinct_on?: InputMaybe<Array<Badge_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Badge_order_by>>;
  where?: InputMaybe<Badge_bool_exp>;
};


export type SubscriptionBadgeHolderArgs = {
  distinct_on?: InputMaybe<Array<BadgeHolder_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BadgeHolder_order_by>>;
  where?: InputMaybe<BadgeHolder_bool_exp>;
};


export type SubscriptionBadgeHolder_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionBadgeHolder_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<BadgeHolder_stream_cursor_input>>;
  where?: InputMaybe<BadgeHolder_bool_exp>;
};


export type SubscriptionBadgeTemplateArgs = {
  distinct_on?: InputMaybe<Array<BadgeTemplate_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BadgeTemplate_order_by>>;
  where?: InputMaybe<BadgeTemplate_bool_exp>;
};


export type SubscriptionBadgeTemplate_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionBadgeTemplate_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<BadgeTemplate_stream_cursor_input>>;
  where?: InputMaybe<BadgeTemplate_bool_exp>;
};


export type SubscriptionBadge_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionBadge_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Badge_stream_cursor_input>>;
  where?: InputMaybe<Badge_bool_exp>;
};


export type SubscriptionContestArgs = {
  distinct_on?: InputMaybe<Array<Contest_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contest_order_by>>;
  where?: InputMaybe<Contest_bool_exp>;
};


export type SubscriptionContestCloneArgs = {
  distinct_on?: InputMaybe<Array<ContestClone_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ContestClone_order_by>>;
  where?: InputMaybe<ContestClone_bool_exp>;
};


export type SubscriptionContestClone_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionContestClone_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<ContestClone_stream_cursor_input>>;
  where?: InputMaybe<ContestClone_bool_exp>;
};


export type SubscriptionContestTemplateArgs = {
  distinct_on?: InputMaybe<Array<ContestTemplate_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ContestTemplate_order_by>>;
  where?: InputMaybe<ContestTemplate_bool_exp>;
};


export type SubscriptionContestTemplate_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionContestTemplate_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<ContestTemplate_stream_cursor_input>>;
  where?: InputMaybe<ContestTemplate_bool_exp>;
};


export type SubscriptionContest_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionContest_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Contest_stream_cursor_input>>;
  where?: InputMaybe<Contest_bool_exp>;
};


export type SubscriptionDAOTokenArgs = {
  distinct_on?: InputMaybe<Array<DAOToken_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DAOToken_order_by>>;
  where?: InputMaybe<DAOToken_bool_exp>;
};


export type SubscriptionDAOToken_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionDAOToken_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<DAOToken_stream_cursor_input>>;
  where?: InputMaybe<DAOToken_bool_exp>;
};


export type SubscriptionDualTokenPointsParamsArgs = {
  distinct_on?: InputMaybe<Array<DualTokenPointsParams_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DualTokenPointsParams_order_by>>;
  where?: InputMaybe<DualTokenPointsParams_bool_exp>;
};


export type SubscriptionDualTokenPointsParams_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionDualTokenPointsParams_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<DualTokenPointsParams_stream_cursor_input>>;
  where?: InputMaybe<DualTokenPointsParams_bool_exp>;
};


export type SubscriptionDualTokenTVParamsArgs = {
  distinct_on?: InputMaybe<Array<DualTokenTVParams_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DualTokenTVParams_order_by>>;
  where?: InputMaybe<DualTokenTVParams_bool_exp>;
};


export type SubscriptionDualTokenTVParams_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionDualTokenTVParams_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<DualTokenTVParams_stream_cursor_input>>;
  where?: InputMaybe<DualTokenTVParams_bool_exp>;
};


export type SubscriptionERCPointParamsArgs = {
  distinct_on?: InputMaybe<Array<ERCPointParams_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ERCPointParams_order_by>>;
  where?: InputMaybe<ERCPointParams_bool_exp>;
};


export type SubscriptionERCPointParams_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionERCPointParams_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<ERCPointParams_stream_cursor_input>>;
  where?: InputMaybe<ERCPointParams_bool_exp>;
};


export type SubscriptionEnvioTXArgs = {
  distinct_on?: InputMaybe<Array<EnvioTX_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EnvioTX_order_by>>;
  where?: InputMaybe<EnvioTX_bool_exp>;
};


export type SubscriptionEnvioTX_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionEnvioTX_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<EnvioTX_stream_cursor_input>>;
  where?: InputMaybe<EnvioTX_bool_exp>;
};


export type SubscriptionEventPostArgs = {
  distinct_on?: InputMaybe<Array<EventPost_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EventPost_order_by>>;
  where?: InputMaybe<EventPost_bool_exp>;
};


export type SubscriptionEventPost_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionEventPost_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<EventPost_stream_cursor_input>>;
  where?: InputMaybe<EventPost_bool_exp>;
};


export type SubscriptionFactoryEventsSummaryArgs = {
  distinct_on?: InputMaybe<Array<FactoryEventsSummary_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FactoryEventsSummary_order_by>>;
  where?: InputMaybe<FactoryEventsSummary_bool_exp>;
};


export type SubscriptionFactoryEventsSummary_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionFactoryEventsSummary_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<FactoryEventsSummary_stream_cursor_input>>;
  where?: InputMaybe<FactoryEventsSummary_bool_exp>;
};


export type SubscriptionFeedCardArgs = {
  distinct_on?: InputMaybe<Array<FeedCard_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FeedCard_order_by>>;
  where?: InputMaybe<FeedCard_bool_exp>;
};


export type SubscriptionFeedCard_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionFeedCard_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<FeedCard_stream_cursor_input>>;
  where?: InputMaybe<FeedCard_bool_exp>;
};


export type SubscriptionFeedItemEmbedArgs = {
  distinct_on?: InputMaybe<Array<FeedItemEmbed_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FeedItemEmbed_order_by>>;
  where?: InputMaybe<FeedItemEmbed_bool_exp>;
};


export type SubscriptionFeedItemEmbed_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionFeedItemEmbed_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<FeedItemEmbed_stream_cursor_input>>;
  where?: InputMaybe<FeedItemEmbed_bool_exp>;
};


export type SubscriptionFeedItemEntityArgs = {
  distinct_on?: InputMaybe<Array<FeedItemEntity_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FeedItemEntity_order_by>>;
  where?: InputMaybe<FeedItemEntity_bool_exp>;
};


export type SubscriptionFeedItemEntity_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionFeedItemEntity_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<FeedItemEntity_stream_cursor_input>>;
  where?: InputMaybe<FeedItemEntity_bool_exp>;
};


export type SubscriptionGMInitParamsArgs = {
  distinct_on?: InputMaybe<Array<GMInitParams_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GMInitParams_order_by>>;
  where?: InputMaybe<GMInitParams_bool_exp>;
};


export type SubscriptionGMInitParams_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionGMInitParams_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<GMInitParams_stream_cursor_input>>;
  where?: InputMaybe<GMInitParams_bool_exp>;
};


export type SubscriptionGSVoterArgs = {
  distinct_on?: InputMaybe<Array<GSVoter_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GSVoter_order_by>>;
  where?: InputMaybe<GSVoter_bool_exp>;
};


export type SubscriptionGSVoter_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionGSVoter_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<GSVoter_stream_cursor_input>>;
  where?: InputMaybe<GSVoter_bool_exp>;
};


export type SubscriptionGameManagerFactoryArgs = {
  distinct_on?: InputMaybe<Array<GameManagerFactory_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameManagerFactory_order_by>>;
  where?: InputMaybe<GameManagerFactory_bool_exp>;
};


export type SubscriptionGameManagerFactory_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionGameManagerFactory_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<GameManagerFactory_stream_cursor_input>>;
  where?: InputMaybe<GameManagerFactory_bool_exp>;
};


export type SubscriptionGameManagerTemplateArgs = {
  distinct_on?: InputMaybe<Array<GameManagerTemplate_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameManagerTemplate_order_by>>;
  where?: InputMaybe<GameManagerTemplate_bool_exp>;
};


export type SubscriptionGameManagerTemplate_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionGameManagerTemplate_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<GameManagerTemplate_stream_cursor_input>>;
  where?: InputMaybe<GameManagerTemplate_bool_exp>;
};


export type SubscriptionGameRoundArgs = {
  distinct_on?: InputMaybe<Array<GameRound_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GameRound_order_by>>;
  where?: InputMaybe<GameRound_bool_exp>;
};


export type SubscriptionGameRound_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionGameRound_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<GameRound_stream_cursor_input>>;
  where?: InputMaybe<GameRound_bool_exp>;
};


export type SubscriptionGateArgs = {
  distinct_on?: InputMaybe<Array<Gate_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gate_order_by>>;
  where?: InputMaybe<Gate_bool_exp>;
};


export type SubscriptionGate_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionGate_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Gate_stream_cursor_input>>;
  where?: InputMaybe<Gate_bool_exp>;
};


export type SubscriptionGrantShipsVotingArgs = {
  distinct_on?: InputMaybe<Array<GrantShipsVoting_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GrantShipsVoting_order_by>>;
  where?: InputMaybe<GrantShipsVoting_bool_exp>;
};


export type SubscriptionGrantShipsVoting_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionGrantShipsVoting_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<GrantShipsVoting_stream_cursor_input>>;
  where?: InputMaybe<GrantShipsVoting_bool_exp>;
};


export type SubscriptionHALParamsArgs = {
  distinct_on?: InputMaybe<Array<HALParams_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<HALParams_order_by>>;
  where?: InputMaybe<HALParams_bool_exp>;
};


export type SubscriptionHALParams_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionHALParams_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<HALParams_stream_cursor_input>>;
  where?: InputMaybe<HALParams_bool_exp>;
};


export type SubscriptionHatsPosterArgs = {
  distinct_on?: InputMaybe<Array<HatsPoster_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<HatsPoster_order_by>>;
  where?: InputMaybe<HatsPoster_bool_exp>;
};


export type SubscriptionHatsPoster_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionHatsPoster_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<HatsPoster_stream_cursor_input>>;
  where?: InputMaybe<HatsPoster_bool_exp>;
};


export type SubscriptionLocalLogArgs = {
  distinct_on?: InputMaybe<Array<LocalLog_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LocalLog_order_by>>;
  where?: InputMaybe<LocalLog_bool_exp>;
};


export type SubscriptionLocalLog_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionLocalLog_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<LocalLog_stream_cursor_input>>;
  where?: InputMaybe<LocalLog_bool_exp>;
};


export type SubscriptionMilestoneArgs = {
  distinct_on?: InputMaybe<Array<Milestone_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Milestone_order_by>>;
  where?: InputMaybe<Milestone_bool_exp>;
};


export type SubscriptionMilestoneSetArgs = {
  distinct_on?: InputMaybe<Array<MilestoneSet_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MilestoneSet_order_by>>;
  where?: InputMaybe<MilestoneSet_bool_exp>;
};


export type SubscriptionMilestoneSet_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionMilestoneSet_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<MilestoneSet_stream_cursor_input>>;
  where?: InputMaybe<MilestoneSet_bool_exp>;
};


export type SubscriptionMilestone_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionMilestone_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Milestone_stream_cursor_input>>;
  where?: InputMaybe<Milestone_bool_exp>;
};


export type SubscriptionModuleTemplateArgs = {
  distinct_on?: InputMaybe<Array<ModuleTemplate_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ModuleTemplate_order_by>>;
  where?: InputMaybe<ModuleTemplate_bool_exp>;
};


export type SubscriptionModuleTemplate_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionModuleTemplate_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<ModuleTemplate_stream_cursor_input>>;
  where?: InputMaybe<ModuleTemplate_bool_exp>;
};


export type SubscriptionProfileIdToAnchorArgs = {
  distinct_on?: InputMaybe<Array<ProfileIdToAnchor_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfileIdToAnchor_order_by>>;
  where?: InputMaybe<ProfileIdToAnchor_bool_exp>;
};


export type SubscriptionProfileIdToAnchor_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionProfileIdToAnchor_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<ProfileIdToAnchor_stream_cursor_input>>;
  where?: InputMaybe<ProfileIdToAnchor_bool_exp>;
};


export type SubscriptionProfileMemberGroupArgs = {
  distinct_on?: InputMaybe<Array<ProfileMemberGroup_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfileMemberGroup_order_by>>;
  where?: InputMaybe<ProfileMemberGroup_bool_exp>;
};


export type SubscriptionProfileMemberGroup_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionProfileMemberGroup_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<ProfileMemberGroup_stream_cursor_input>>;
  where?: InputMaybe<ProfileMemberGroup_bool_exp>;
};


export type SubscriptionRecordArgs = {
  distinct_on?: InputMaybe<Array<Record_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Record_order_by>>;
  where?: InputMaybe<Record_bool_exp>;
};


export type SubscriptionRecord_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionRecord_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Record_stream_cursor_input>>;
  where?: InputMaybe<Record_bool_exp>;
};


export type SubscriptionSBTBalParamsArgs = {
  distinct_on?: InputMaybe<Array<SBTBalParams_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<SBTBalParams_order_by>>;
  where?: InputMaybe<SBTBalParams_bool_exp>;
};


export type SubscriptionSBTBalParams_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionSBTBalParams_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<SBTBalParams_stream_cursor_input>>;
  where?: InputMaybe<SBTBalParams_bool_exp>;
};


export type SubscriptionScaffoldShamanArgs = {
  distinct_on?: InputMaybe<Array<ScaffoldShaman_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ScaffoldShaman_order_by>>;
  where?: InputMaybe<ScaffoldShaman_bool_exp>;
};


export type SubscriptionScaffoldShaman_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionScaffoldShaman_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<ScaffoldShaman_stream_cursor_input>>;
  where?: InputMaybe<ScaffoldShaman_bool_exp>;
};


export type SubscriptionShipChoiceArgs = {
  distinct_on?: InputMaybe<Array<ShipChoice_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ShipChoice_order_by>>;
  where?: InputMaybe<ShipChoice_bool_exp>;
};


export type SubscriptionShipChoice_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionShipChoice_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<ShipChoice_stream_cursor_input>>;
  where?: InputMaybe<ShipChoice_bool_exp>;
};


export type SubscriptionShipContextArgs = {
  distinct_on?: InputMaybe<Array<ShipContext_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ShipContext_order_by>>;
  where?: InputMaybe<ShipContext_bool_exp>;
};


export type SubscriptionShipContext_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionShipContext_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<ShipContext_stream_cursor_input>>;
  where?: InputMaybe<ShipContext_bool_exp>;
};


export type SubscriptionShipVoteArgs = {
  distinct_on?: InputMaybe<Array<ShipVote_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ShipVote_order_by>>;
  where?: InputMaybe<ShipVote_bool_exp>;
};


export type SubscriptionShipVote_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionShipVote_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<ShipVote_stream_cursor_input>>;
  where?: InputMaybe<ShipVote_bool_exp>;
};


export type SubscriptionStemModuleArgs = {
  distinct_on?: InputMaybe<Array<StemModule_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<StemModule_order_by>>;
  where?: InputMaybe<StemModule_bool_exp>;
};


export type SubscriptionStemModule_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionStemModule_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<StemModule_stream_cursor_input>>;
  where?: InputMaybe<StemModule_bool_exp>;
};


export type SubscriptionTVParamsArgs = {
  distinct_on?: InputMaybe<Array<TVParams_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TVParams_order_by>>;
  where?: InputMaybe<TVParams_bool_exp>;
};


export type SubscriptionTVParams_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionTVParams_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TVParams_stream_cursor_input>>;
  where?: InputMaybe<TVParams_bool_exp>;
};


export type SubscriptionTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_order_by>>;
  where?: InputMaybe<Transaction_bool_exp>;
};


export type SubscriptionTransaction_by_pkArgs = {
  id: Scalars['String'];
};


export type SubscriptionTransaction_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Transaction_stream_cursor_input>>;
  where?: InputMaybe<Transaction_bool_exp>;
};


export type Subscriptionchain_metadataArgs = {
  distinct_on?: InputMaybe<Array<chain_metadata_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<chain_metadata_order_by>>;
  where?: InputMaybe<chain_metadata_bool_exp>;
};


export type Subscriptionchain_metadata_by_pkArgs = {
  chain_id: Scalars['Int'];
};


export type Subscriptionchain_metadata_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<chain_metadata_stream_cursor_input>>;
  where?: InputMaybe<chain_metadata_bool_exp>;
};


export type Subscriptiondynamic_contract_registryArgs = {
  distinct_on?: InputMaybe<Array<dynamic_contract_registry_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<dynamic_contract_registry_order_by>>;
  where?: InputMaybe<dynamic_contract_registry_bool_exp>;
};


export type Subscriptiondynamic_contract_registry_by_pkArgs = {
  chain_id: Scalars['Int'];
  contract_address: Scalars['String'];
};


export type Subscriptiondynamic_contract_registry_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<dynamic_contract_registry_stream_cursor_input>>;
  where?: InputMaybe<dynamic_contract_registry_bool_exp>;
};


export type Subscriptionend_of_block_range_scanned_dataArgs = {
  distinct_on?: InputMaybe<Array<end_of_block_range_scanned_data_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<end_of_block_range_scanned_data_order_by>>;
  where?: InputMaybe<end_of_block_range_scanned_data_bool_exp>;
};


export type Subscriptionend_of_block_range_scanned_data_by_pkArgs = {
  block_number: Scalars['Int'];
  chain_id: Scalars['Int'];
};


export type Subscriptionend_of_block_range_scanned_data_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<end_of_block_range_scanned_data_stream_cursor_input>>;
  where?: InputMaybe<end_of_block_range_scanned_data_bool_exp>;
};


export type Subscriptionentity_historyArgs = {
  distinct_on?: InputMaybe<Array<entity_history_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<entity_history_order_by>>;
  where?: InputMaybe<entity_history_bool_exp>;
};


export type Subscriptionentity_history_by_pkArgs = {
  block_number: Scalars['Int'];
  block_timestamp: Scalars['Int'];
  chain_id: Scalars['Int'];
  entity_id: Scalars['String'];
  entity_type: Scalars['entity_type'];
  log_index: Scalars['Int'];
};


export type Subscriptionentity_history_filterArgs = {
  distinct_on?: InputMaybe<Array<entity_history_filter_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<entity_history_filter_order_by>>;
  where?: InputMaybe<entity_history_filter_bool_exp>;
};


export type Subscriptionentity_history_filter_by_pkArgs = {
  block_number: Scalars['Int'];
  block_timestamp: Scalars['Int'];
  chain_id: Scalars['Int'];
  entity_id: Scalars['String'];
  entity_type: Scalars['entity_type'];
  log_index: Scalars['Int'];
  previous_log_index: Scalars['Int'];
};


export type Subscriptionentity_history_filter_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<entity_history_filter_stream_cursor_input>>;
  where?: InputMaybe<entity_history_filter_bool_exp>;
};


export type Subscriptionentity_history_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<entity_history_stream_cursor_input>>;
  where?: InputMaybe<entity_history_bool_exp>;
};


export type Subscriptionevent_sync_stateArgs = {
  distinct_on?: InputMaybe<Array<event_sync_state_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<event_sync_state_order_by>>;
  where?: InputMaybe<event_sync_state_bool_exp>;
};


export type Subscriptionevent_sync_state_by_pkArgs = {
  chain_id: Scalars['Int'];
};


export type Subscriptionevent_sync_state_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<event_sync_state_stream_cursor_input>>;
  where?: InputMaybe<event_sync_state_bool_exp>;
};


export type Subscriptionget_entity_history_filterArgs = {
  args: get_entity_history_filter_args;
  distinct_on?: InputMaybe<Array<entity_history_filter_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<entity_history_filter_order_by>>;
  where?: InputMaybe<entity_history_filter_bool_exp>;
};


export type Subscriptionpersisted_stateArgs = {
  distinct_on?: InputMaybe<Array<persisted_state_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<persisted_state_order_by>>;
  where?: InputMaybe<persisted_state_bool_exp>;
};


export type Subscriptionpersisted_state_by_pkArgs = {
  id: Scalars['Int'];
};


export type Subscriptionpersisted_state_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<persisted_state_stream_cursor_input>>;
  where?: InputMaybe<persisted_state_bool_exp>;
};


export type Subscriptionraw_eventsArgs = {
  distinct_on?: InputMaybe<Array<raw_events_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<raw_events_order_by>>;
  where?: InputMaybe<raw_events_bool_exp>;
};


export type Subscriptionraw_events_by_pkArgs = {
  chain_id: Scalars['Int'];
  event_id: Scalars['numeric'];
};


export type Subscriptionraw_events_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<raw_events_stream_cursor_input>>;
  where?: InputMaybe<raw_events_bool_exp>;
};

export type Aggregation_interval =
  | 'hour'
  | 'day';

export type ApplicationHistory = {
  id: Scalars['ID'];
  grantApplicationBytes: Scalars['Bytes'];
  applicationSubmitted: Scalars['BigInt'];
};

export type ApplicationHistory_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  grantApplicationBytes?: InputMaybe<Scalars['Bytes']>;
  grantApplicationBytes_not?: InputMaybe<Scalars['Bytes']>;
  grantApplicationBytes_gt?: InputMaybe<Scalars['Bytes']>;
  grantApplicationBytes_lt?: InputMaybe<Scalars['Bytes']>;
  grantApplicationBytes_gte?: InputMaybe<Scalars['Bytes']>;
  grantApplicationBytes_lte?: InputMaybe<Scalars['Bytes']>;
  grantApplicationBytes_in?: InputMaybe<Array<Scalars['Bytes']>>;
  grantApplicationBytes_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  grantApplicationBytes_contains?: InputMaybe<Scalars['Bytes']>;
  grantApplicationBytes_not_contains?: InputMaybe<Scalars['Bytes']>;
  applicationSubmitted?: InputMaybe<Scalars['BigInt']>;
  applicationSubmitted_not?: InputMaybe<Scalars['BigInt']>;
  applicationSubmitted_gt?: InputMaybe<Scalars['BigInt']>;
  applicationSubmitted_lt?: InputMaybe<Scalars['BigInt']>;
  applicationSubmitted_gte?: InputMaybe<Scalars['BigInt']>;
  applicationSubmitted_lte?: InputMaybe<Scalars['BigInt']>;
  applicationSubmitted_in?: InputMaybe<Array<Scalars['BigInt']>>;
  applicationSubmitted_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ApplicationHistory_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ApplicationHistory_filter>>>;
};

export type ApplicationHistory_orderBy =
  | 'id'
  | 'grantApplicationBytes'
  | 'applicationSubmitted';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type FeedItem = {
  id: Scalars['ID'];
  timestamp?: Maybe<Scalars['BigInt']>;
  content: Scalars['String'];
  sender: Scalars['Bytes'];
  tag: Scalars['String'];
  subjectMetadataPointer: Scalars['String'];
  subjectId: Scalars['ID'];
  objectId?: Maybe<Scalars['ID']>;
  subject: FeedItemEntity;
  object?: Maybe<FeedItemEntity>;
  embed?: Maybe<FeedItemEmbed>;
  details?: Maybe<Scalars['String']>;
};

/** columns and relationships of "FeedItemEmbed" */
export type FeedItemEmbed = {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  pointer?: Maybe<Scalars['String']>;
  protocol?: Maybe<Scalars['numeric']>;
  content?: Maybe<Scalars['String']>;
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
};

export type FeedItemEmbed_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  key?: InputMaybe<Scalars['String']>;
  key_not?: InputMaybe<Scalars['String']>;
  key_gt?: InputMaybe<Scalars['String']>;
  key_lt?: InputMaybe<Scalars['String']>;
  key_gte?: InputMaybe<Scalars['String']>;
  key_lte?: InputMaybe<Scalars['String']>;
  key_in?: InputMaybe<Array<Scalars['String']>>;
  key_not_in?: InputMaybe<Array<Scalars['String']>>;
  key_contains?: InputMaybe<Scalars['String']>;
  key_contains_nocase?: InputMaybe<Scalars['String']>;
  key_not_contains?: InputMaybe<Scalars['String']>;
  key_not_contains_nocase?: InputMaybe<Scalars['String']>;
  key_starts_with?: InputMaybe<Scalars['String']>;
  key_starts_with_nocase?: InputMaybe<Scalars['String']>;
  key_not_starts_with?: InputMaybe<Scalars['String']>;
  key_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  key_ends_with?: InputMaybe<Scalars['String']>;
  key_ends_with_nocase?: InputMaybe<Scalars['String']>;
  key_not_ends_with?: InputMaybe<Scalars['String']>;
  key_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pointer?: InputMaybe<Scalars['String']>;
  pointer_not?: InputMaybe<Scalars['String']>;
  pointer_gt?: InputMaybe<Scalars['String']>;
  pointer_lt?: InputMaybe<Scalars['String']>;
  pointer_gte?: InputMaybe<Scalars['String']>;
  pointer_lte?: InputMaybe<Scalars['String']>;
  pointer_in?: InputMaybe<Array<Scalars['String']>>;
  pointer_not_in?: InputMaybe<Array<Scalars['String']>>;
  pointer_contains?: InputMaybe<Scalars['String']>;
  pointer_contains_nocase?: InputMaybe<Scalars['String']>;
  pointer_not_contains?: InputMaybe<Scalars['String']>;
  pointer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pointer_starts_with?: InputMaybe<Scalars['String']>;
  pointer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pointer_not_starts_with?: InputMaybe<Scalars['String']>;
  pointer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pointer_ends_with?: InputMaybe<Scalars['String']>;
  pointer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pointer_not_ends_with?: InputMaybe<Scalars['String']>;
  pointer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol?: InputMaybe<Scalars['BigInt']>;
  protocol_not?: InputMaybe<Scalars['BigInt']>;
  protocol_gt?: InputMaybe<Scalars['BigInt']>;
  protocol_lt?: InputMaybe<Scalars['BigInt']>;
  protocol_gte?: InputMaybe<Scalars['BigInt']>;
  protocol_lte?: InputMaybe<Scalars['BigInt']>;
  protocol_in?: InputMaybe<Array<Scalars['BigInt']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  content?: InputMaybe<Scalars['String']>;
  content_not?: InputMaybe<Scalars['String']>;
  content_gt?: InputMaybe<Scalars['String']>;
  content_lt?: InputMaybe<Scalars['String']>;
  content_gte?: InputMaybe<Scalars['String']>;
  content_lte?: InputMaybe<Scalars['String']>;
  content_in?: InputMaybe<Array<Scalars['String']>>;
  content_not_in?: InputMaybe<Array<Scalars['String']>>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_contains_nocase?: InputMaybe<Scalars['String']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  content_not_contains_nocase?: InputMaybe<Scalars['String']>;
  content_starts_with?: InputMaybe<Scalars['String']>;
  content_starts_with_nocase?: InputMaybe<Scalars['String']>;
  content_not_starts_with?: InputMaybe<Scalars['String']>;
  content_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  content_ends_with?: InputMaybe<Scalars['String']>;
  content_ends_with_nocase?: InputMaybe<Scalars['String']>;
  content_not_ends_with?: InputMaybe<Scalars['String']>;
  content_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FeedItemEmbed_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FeedItemEmbed_filter>>>;
};

export type FeedItemEmbed_orderBy =
  | 'id'
  | 'key'
  | 'pointer'
  | 'protocol'
  | 'content';

/** columns and relationships of "FeedItemEntity" */
export type FeedItemEntity = {
  id: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  playerType: Scalars['Int'];
};

export type FeedItemEntity_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  type_not?: InputMaybe<Scalars['String']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<Scalars['String']>>;
  type_not_in?: InputMaybe<Array<Scalars['String']>>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_contains_nocase?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']>;
  type_starts_with?: InputMaybe<Scalars['String']>;
  type_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  type_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_ends_with?: InputMaybe<Scalars['String']>;
  type_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  type_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FeedItemEntity_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FeedItemEntity_filter>>>;
};

export type FeedItemEntity_orderBy =
  | 'id'
  | 'name'
  | 'type';

export type FeedItem_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  content?: InputMaybe<Scalars['String']>;
  content_not?: InputMaybe<Scalars['String']>;
  content_gt?: InputMaybe<Scalars['String']>;
  content_lt?: InputMaybe<Scalars['String']>;
  content_gte?: InputMaybe<Scalars['String']>;
  content_lte?: InputMaybe<Scalars['String']>;
  content_in?: InputMaybe<Array<Scalars['String']>>;
  content_not_in?: InputMaybe<Array<Scalars['String']>>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_contains_nocase?: InputMaybe<Scalars['String']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  content_not_contains_nocase?: InputMaybe<Scalars['String']>;
  content_starts_with?: InputMaybe<Scalars['String']>;
  content_starts_with_nocase?: InputMaybe<Scalars['String']>;
  content_not_starts_with?: InputMaybe<Scalars['String']>;
  content_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  content_ends_with?: InputMaybe<Scalars['String']>;
  content_ends_with_nocase?: InputMaybe<Scalars['String']>;
  content_not_ends_with?: InputMaybe<Scalars['String']>;
  content_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  tag?: InputMaybe<Scalars['String']>;
  tag_not?: InputMaybe<Scalars['String']>;
  tag_gt?: InputMaybe<Scalars['String']>;
  tag_lt?: InputMaybe<Scalars['String']>;
  tag_gte?: InputMaybe<Scalars['String']>;
  tag_lte?: InputMaybe<Scalars['String']>;
  tag_in?: InputMaybe<Array<Scalars['String']>>;
  tag_not_in?: InputMaybe<Array<Scalars['String']>>;
  tag_contains?: InputMaybe<Scalars['String']>;
  tag_contains_nocase?: InputMaybe<Scalars['String']>;
  tag_not_contains?: InputMaybe<Scalars['String']>;
  tag_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tag_starts_with?: InputMaybe<Scalars['String']>;
  tag_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tag_not_starts_with?: InputMaybe<Scalars['String']>;
  tag_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tag_ends_with?: InputMaybe<Scalars['String']>;
  tag_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tag_not_ends_with?: InputMaybe<Scalars['String']>;
  tag_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subjectMetadataPointer?: InputMaybe<Scalars['String']>;
  subjectMetadataPointer_not?: InputMaybe<Scalars['String']>;
  subjectMetadataPointer_gt?: InputMaybe<Scalars['String']>;
  subjectMetadataPointer_lt?: InputMaybe<Scalars['String']>;
  subjectMetadataPointer_gte?: InputMaybe<Scalars['String']>;
  subjectMetadataPointer_lte?: InputMaybe<Scalars['String']>;
  subjectMetadataPointer_in?: InputMaybe<Array<Scalars['String']>>;
  subjectMetadataPointer_not_in?: InputMaybe<Array<Scalars['String']>>;
  subjectMetadataPointer_contains?: InputMaybe<Scalars['String']>;
  subjectMetadataPointer_contains_nocase?: InputMaybe<Scalars['String']>;
  subjectMetadataPointer_not_contains?: InputMaybe<Scalars['String']>;
  subjectMetadataPointer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subjectMetadataPointer_starts_with?: InputMaybe<Scalars['String']>;
  subjectMetadataPointer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subjectMetadataPointer_not_starts_with?: InputMaybe<Scalars['String']>;
  subjectMetadataPointer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subjectMetadataPointer_ends_with?: InputMaybe<Scalars['String']>;
  subjectMetadataPointer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subjectMetadataPointer_not_ends_with?: InputMaybe<Scalars['String']>;
  subjectMetadataPointer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subjectId?: InputMaybe<Scalars['ID']>;
  subjectId_not?: InputMaybe<Scalars['ID']>;
  subjectId_gt?: InputMaybe<Scalars['ID']>;
  subjectId_lt?: InputMaybe<Scalars['ID']>;
  subjectId_gte?: InputMaybe<Scalars['ID']>;
  subjectId_lte?: InputMaybe<Scalars['ID']>;
  subjectId_in?: InputMaybe<Array<Scalars['ID']>>;
  subjectId_not_in?: InputMaybe<Array<Scalars['ID']>>;
  objectId?: InputMaybe<Scalars['ID']>;
  objectId_not?: InputMaybe<Scalars['ID']>;
  objectId_gt?: InputMaybe<Scalars['ID']>;
  objectId_lt?: InputMaybe<Scalars['ID']>;
  objectId_gte?: InputMaybe<Scalars['ID']>;
  objectId_lte?: InputMaybe<Scalars['ID']>;
  objectId_in?: InputMaybe<Array<Scalars['ID']>>;
  objectId_not_in?: InputMaybe<Array<Scalars['ID']>>;
  subject?: InputMaybe<Scalars['String']>;
  subject_not?: InputMaybe<Scalars['String']>;
  subject_gt?: InputMaybe<Scalars['String']>;
  subject_lt?: InputMaybe<Scalars['String']>;
  subject_gte?: InputMaybe<Scalars['String']>;
  subject_lte?: InputMaybe<Scalars['String']>;
  subject_in?: InputMaybe<Array<Scalars['String']>>;
  subject_not_in?: InputMaybe<Array<Scalars['String']>>;
  subject_contains?: InputMaybe<Scalars['String']>;
  subject_contains_nocase?: InputMaybe<Scalars['String']>;
  subject_not_contains?: InputMaybe<Scalars['String']>;
  subject_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subject_starts_with?: InputMaybe<Scalars['String']>;
  subject_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subject_not_starts_with?: InputMaybe<Scalars['String']>;
  subject_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subject_ends_with?: InputMaybe<Scalars['String']>;
  subject_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subject_not_ends_with?: InputMaybe<Scalars['String']>;
  subject_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subject_?: InputMaybe<FeedItemEntity_filter>;
  object?: InputMaybe<Scalars['String']>;
  object_not?: InputMaybe<Scalars['String']>;
  object_gt?: InputMaybe<Scalars['String']>;
  object_lt?: InputMaybe<Scalars['String']>;
  object_gte?: InputMaybe<Scalars['String']>;
  object_lte?: InputMaybe<Scalars['String']>;
  object_in?: InputMaybe<Array<Scalars['String']>>;
  object_not_in?: InputMaybe<Array<Scalars['String']>>;
  object_contains?: InputMaybe<Scalars['String']>;
  object_contains_nocase?: InputMaybe<Scalars['String']>;
  object_not_contains?: InputMaybe<Scalars['String']>;
  object_not_contains_nocase?: InputMaybe<Scalars['String']>;
  object_starts_with?: InputMaybe<Scalars['String']>;
  object_starts_with_nocase?: InputMaybe<Scalars['String']>;
  object_not_starts_with?: InputMaybe<Scalars['String']>;
  object_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  object_ends_with?: InputMaybe<Scalars['String']>;
  object_ends_with_nocase?: InputMaybe<Scalars['String']>;
  object_not_ends_with?: InputMaybe<Scalars['String']>;
  object_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  object_?: InputMaybe<FeedItemEntity_filter>;
  embed?: InputMaybe<Scalars['String']>;
  embed_not?: InputMaybe<Scalars['String']>;
  embed_gt?: InputMaybe<Scalars['String']>;
  embed_lt?: InputMaybe<Scalars['String']>;
  embed_gte?: InputMaybe<Scalars['String']>;
  embed_lte?: InputMaybe<Scalars['String']>;
  embed_in?: InputMaybe<Array<Scalars['String']>>;
  embed_not_in?: InputMaybe<Array<Scalars['String']>>;
  embed_contains?: InputMaybe<Scalars['String']>;
  embed_contains_nocase?: InputMaybe<Scalars['String']>;
  embed_not_contains?: InputMaybe<Scalars['String']>;
  embed_not_contains_nocase?: InputMaybe<Scalars['String']>;
  embed_starts_with?: InputMaybe<Scalars['String']>;
  embed_starts_with_nocase?: InputMaybe<Scalars['String']>;
  embed_not_starts_with?: InputMaybe<Scalars['String']>;
  embed_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  embed_ends_with?: InputMaybe<Scalars['String']>;
  embed_ends_with_nocase?: InputMaybe<Scalars['String']>;
  embed_not_ends_with?: InputMaybe<Scalars['String']>;
  embed_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  embed_?: InputMaybe<FeedItemEmbed_filter>;
  details?: InputMaybe<Scalars['String']>;
  details_not?: InputMaybe<Scalars['String']>;
  details_gt?: InputMaybe<Scalars['String']>;
  details_lt?: InputMaybe<Scalars['String']>;
  details_gte?: InputMaybe<Scalars['String']>;
  details_lte?: InputMaybe<Scalars['String']>;
  details_in?: InputMaybe<Array<Scalars['String']>>;
  details_not_in?: InputMaybe<Array<Scalars['String']>>;
  details_contains?: InputMaybe<Scalars['String']>;
  details_contains_nocase?: InputMaybe<Scalars['String']>;
  details_not_contains?: InputMaybe<Scalars['String']>;
  details_not_contains_nocase?: InputMaybe<Scalars['String']>;
  details_starts_with?: InputMaybe<Scalars['String']>;
  details_starts_with_nocase?: InputMaybe<Scalars['String']>;
  details_not_starts_with?: InputMaybe<Scalars['String']>;
  details_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  details_ends_with?: InputMaybe<Scalars['String']>;
  details_ends_with_nocase?: InputMaybe<Scalars['String']>;
  details_not_ends_with?: InputMaybe<Scalars['String']>;
  details_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FeedItem_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FeedItem_filter>>>;
};

export type FeedItem_orderBy =
  | 'id'
  | 'timestamp'
  | 'content'
  | 'sender'
  | 'tag'
  | 'subjectMetadataPointer'
  | 'subjectId'
  | 'objectId'
  | 'subject'
  | 'subject__id'
  | 'subject__name'
  | 'subject__type'
  | 'object'
  | 'object__id'
  | 'object__name'
  | 'object__type'
  | 'embed'
  | 'embed__id'
  | 'embed__key'
  | 'embed__pointer'
  | 'embed__protocol'
  | 'embed__content'
  | 'details';

export type GameManager = {
  id: Scalars['Bytes'];
  poolId: Scalars['BigInt'];
  gameFacilitatorId: Scalars['BigInt'];
  rootAccount: Scalars['Bytes'];
  tokenAddress: Scalars['Bytes'];
  currentRoundId: Scalars['BigInt'];
  currentRound?: Maybe<GameRound>;
  poolFunds: Scalars['BigInt'];
};

export type GameManager_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  poolId?: InputMaybe<Scalars['BigInt']>;
  poolId_not?: InputMaybe<Scalars['BigInt']>;
  poolId_gt?: InputMaybe<Scalars['BigInt']>;
  poolId_lt?: InputMaybe<Scalars['BigInt']>;
  poolId_gte?: InputMaybe<Scalars['BigInt']>;
  poolId_lte?: InputMaybe<Scalars['BigInt']>;
  poolId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  poolId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gameFacilitatorId?: InputMaybe<Scalars['BigInt']>;
  gameFacilitatorId_not?: InputMaybe<Scalars['BigInt']>;
  gameFacilitatorId_gt?: InputMaybe<Scalars['BigInt']>;
  gameFacilitatorId_lt?: InputMaybe<Scalars['BigInt']>;
  gameFacilitatorId_gte?: InputMaybe<Scalars['BigInt']>;
  gameFacilitatorId_lte?: InputMaybe<Scalars['BigInt']>;
  gameFacilitatorId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gameFacilitatorId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rootAccount?: InputMaybe<Scalars['Bytes']>;
  rootAccount_not?: InputMaybe<Scalars['Bytes']>;
  rootAccount_gt?: InputMaybe<Scalars['Bytes']>;
  rootAccount_lt?: InputMaybe<Scalars['Bytes']>;
  rootAccount_gte?: InputMaybe<Scalars['Bytes']>;
  rootAccount_lte?: InputMaybe<Scalars['Bytes']>;
  rootAccount_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rootAccount_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rootAccount_contains?: InputMaybe<Scalars['Bytes']>;
  rootAccount_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  currentRoundId?: InputMaybe<Scalars['BigInt']>;
  currentRoundId_not?: InputMaybe<Scalars['BigInt']>;
  currentRoundId_gt?: InputMaybe<Scalars['BigInt']>;
  currentRoundId_lt?: InputMaybe<Scalars['BigInt']>;
  currentRoundId_gte?: InputMaybe<Scalars['BigInt']>;
  currentRoundId_lte?: InputMaybe<Scalars['BigInt']>;
  currentRoundId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentRoundId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentRound?: InputMaybe<Scalars['String']>;
  currentRound_not?: InputMaybe<Scalars['String']>;
  currentRound_gt?: InputMaybe<Scalars['String']>;
  currentRound_lt?: InputMaybe<Scalars['String']>;
  currentRound_gte?: InputMaybe<Scalars['String']>;
  currentRound_lte?: InputMaybe<Scalars['String']>;
  currentRound_in?: InputMaybe<Array<Scalars['String']>>;
  currentRound_not_in?: InputMaybe<Array<Scalars['String']>>;
  currentRound_contains?: InputMaybe<Scalars['String']>;
  currentRound_contains_nocase?: InputMaybe<Scalars['String']>;
  currentRound_not_contains?: InputMaybe<Scalars['String']>;
  currentRound_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currentRound_starts_with?: InputMaybe<Scalars['String']>;
  currentRound_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentRound_not_starts_with?: InputMaybe<Scalars['String']>;
  currentRound_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentRound_ends_with?: InputMaybe<Scalars['String']>;
  currentRound_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentRound_not_ends_with?: InputMaybe<Scalars['String']>;
  currentRound_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentRound_?: InputMaybe<GameRound_filter>;
  poolFunds?: InputMaybe<Scalars['BigInt']>;
  poolFunds_not?: InputMaybe<Scalars['BigInt']>;
  poolFunds_gt?: InputMaybe<Scalars['BigInt']>;
  poolFunds_lt?: InputMaybe<Scalars['BigInt']>;
  poolFunds_gte?: InputMaybe<Scalars['BigInt']>;
  poolFunds_lte?: InputMaybe<Scalars['BigInt']>;
  poolFunds_in?: InputMaybe<Array<Scalars['BigInt']>>;
  poolFunds_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GameManager_filter>>>;
  or?: InputMaybe<Array<InputMaybe<GameManager_filter>>>;
};

export type GameManager_orderBy =
  | 'id'
  | 'poolId'
  | 'gameFacilitatorId'
  | 'rootAccount'
  | 'tokenAddress'
  | 'currentRoundId'
  | 'currentRound'
  | 'currentRound__id'
  | 'currentRound__startTime'
  | 'currentRound__endTime'
  | 'currentRound__totalRoundAmount'
  | 'currentRound__totalAllocatedAmount'
  | 'currentRound__totalDistributedAmount'
  | 'currentRound__gameStatus'
  | 'currentRound__isGameActive'
  | 'currentRound__realStartTime'
  | 'currentRound__realEndTime'
  | 'poolFunds';

/** columns and relationships of "GameRound" */
export type GameRound = {
  id: Scalars['String'];
  startTime: Scalars['numeric'];
  endTime: Scalars['numeric'];
  totalRoundAmount: Scalars['numeric'];
  totalAllocatedAmount: Scalars['numeric'];
  totalDistributedAmount: Scalars['numeric'];
  gameStatus: Scalars['Int'];
  ships: Array<GrantShip>;
  isGameActive: Scalars['Boolean'];
  realStartTime?: Maybe<Scalars['Int']>;
  realEndTime?: Maybe<Scalars['Int']>;
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  gameManager_id: Scalars['String'];
};


/** columns and relationships of "GameRound" */
export type GameRoundshipsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantShip_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GrantShip_filter>;
};

export type GameRound_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  startTime?: InputMaybe<Scalars['BigInt']>;
  startTime_not?: InputMaybe<Scalars['BigInt']>;
  startTime_gt?: InputMaybe<Scalars['BigInt']>;
  startTime_lt?: InputMaybe<Scalars['BigInt']>;
  startTime_gte?: InputMaybe<Scalars['BigInt']>;
  startTime_lte?: InputMaybe<Scalars['BigInt']>;
  startTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endTime?: InputMaybe<Scalars['BigInt']>;
  endTime_not?: InputMaybe<Scalars['BigInt']>;
  endTime_gt?: InputMaybe<Scalars['BigInt']>;
  endTime_lt?: InputMaybe<Scalars['BigInt']>;
  endTime_gte?: InputMaybe<Scalars['BigInt']>;
  endTime_lte?: InputMaybe<Scalars['BigInt']>;
  endTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalRoundAmount?: InputMaybe<Scalars['BigInt']>;
  totalRoundAmount_not?: InputMaybe<Scalars['BigInt']>;
  totalRoundAmount_gt?: InputMaybe<Scalars['BigInt']>;
  totalRoundAmount_lt?: InputMaybe<Scalars['BigInt']>;
  totalRoundAmount_gte?: InputMaybe<Scalars['BigInt']>;
  totalRoundAmount_lte?: InputMaybe<Scalars['BigInt']>;
  totalRoundAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalRoundAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAllocatedAmount?: InputMaybe<Scalars['BigInt']>;
  totalAllocatedAmount_not?: InputMaybe<Scalars['BigInt']>;
  totalAllocatedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  totalAllocatedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  totalAllocatedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  totalAllocatedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  totalAllocatedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAllocatedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDistributedAmount?: InputMaybe<Scalars['BigInt']>;
  totalDistributedAmount_not?: InputMaybe<Scalars['BigInt']>;
  totalDistributedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  totalDistributedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  totalDistributedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  totalDistributedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  totalDistributedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDistributedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gameStatus?: InputMaybe<Scalars['Int']>;
  gameStatus_not?: InputMaybe<Scalars['Int']>;
  gameStatus_gt?: InputMaybe<Scalars['Int']>;
  gameStatus_lt?: InputMaybe<Scalars['Int']>;
  gameStatus_gte?: InputMaybe<Scalars['Int']>;
  gameStatus_lte?: InputMaybe<Scalars['Int']>;
  gameStatus_in?: InputMaybe<Array<Scalars['Int']>>;
  gameStatus_not_in?: InputMaybe<Array<Scalars['Int']>>;
  ships?: InputMaybe<Array<Scalars['String']>>;
  ships_not?: InputMaybe<Array<Scalars['String']>>;
  ships_contains?: InputMaybe<Array<Scalars['String']>>;
  ships_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  ships_not_contains?: InputMaybe<Array<Scalars['String']>>;
  ships_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  ships_?: InputMaybe<GrantShip_filter>;
  isGameActive?: InputMaybe<Scalars['Boolean']>;
  isGameActive_not?: InputMaybe<Scalars['Boolean']>;
  isGameActive_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isGameActive_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  realStartTime?: InputMaybe<Scalars['BigInt']>;
  realStartTime_not?: InputMaybe<Scalars['BigInt']>;
  realStartTime_gt?: InputMaybe<Scalars['BigInt']>;
  realStartTime_lt?: InputMaybe<Scalars['BigInt']>;
  realStartTime_gte?: InputMaybe<Scalars['BigInt']>;
  realStartTime_lte?: InputMaybe<Scalars['BigInt']>;
  realStartTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  realStartTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  realEndTime?: InputMaybe<Scalars['BigInt']>;
  realEndTime_not?: InputMaybe<Scalars['BigInt']>;
  realEndTime_gt?: InputMaybe<Scalars['BigInt']>;
  realEndTime_lt?: InputMaybe<Scalars['BigInt']>;
  realEndTime_gte?: InputMaybe<Scalars['BigInt']>;
  realEndTime_lte?: InputMaybe<Scalars['BigInt']>;
  realEndTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  realEndTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GameRound_filter>>>;
  or?: InputMaybe<Array<InputMaybe<GameRound_filter>>>;
};

export type GameRound_orderBy =
  | 'id'
  | 'startTime'
  | 'endTime'
  | 'totalRoundAmount'
  | 'totalAllocatedAmount'
  | 'totalDistributedAmount'
  | 'gameStatus'
  | 'ships'
  | 'isGameActive'
  | 'realStartTime'
  | 'realEndTime';

export type GmDeployment = {
  id: Scalars['ID'];
  address: Scalars['Bytes'];
  version: GmVersion;
  blockNumber: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  hasPool: Scalars['Boolean'];
  poolId?: Maybe<Scalars['BigInt']>;
  profileId: Scalars['Bytes'];
  poolMetadata: RawMetadata;
  poolProfileMetadata: RawMetadata;
};

export type GmDeployment_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_gt?: InputMaybe<Scalars['Bytes']>;
  address_lt?: InputMaybe<Scalars['Bytes']>;
  address_gte?: InputMaybe<Scalars['Bytes']>;
  address_lte?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  version?: InputMaybe<Scalars['String']>;
  version_not?: InputMaybe<Scalars['String']>;
  version_gt?: InputMaybe<Scalars['String']>;
  version_lt?: InputMaybe<Scalars['String']>;
  version_gte?: InputMaybe<Scalars['String']>;
  version_lte?: InputMaybe<Scalars['String']>;
  version_in?: InputMaybe<Array<Scalars['String']>>;
  version_not_in?: InputMaybe<Array<Scalars['String']>>;
  version_contains?: InputMaybe<Scalars['String']>;
  version_contains_nocase?: InputMaybe<Scalars['String']>;
  version_not_contains?: InputMaybe<Scalars['String']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']>;
  version_starts_with?: InputMaybe<Scalars['String']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']>;
  version_not_starts_with?: InputMaybe<Scalars['String']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  version_ends_with?: InputMaybe<Scalars['String']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']>;
  version_not_ends_with?: InputMaybe<Scalars['String']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  version_?: InputMaybe<GmVersion_filter>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hasPool?: InputMaybe<Scalars['Boolean']>;
  hasPool_not?: InputMaybe<Scalars['Boolean']>;
  hasPool_in?: InputMaybe<Array<Scalars['Boolean']>>;
  hasPool_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  poolId?: InputMaybe<Scalars['BigInt']>;
  poolId_not?: InputMaybe<Scalars['BigInt']>;
  poolId_gt?: InputMaybe<Scalars['BigInt']>;
  poolId_lt?: InputMaybe<Scalars['BigInt']>;
  poolId_gte?: InputMaybe<Scalars['BigInt']>;
  poolId_lte?: InputMaybe<Scalars['BigInt']>;
  poolId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  poolId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  profileId?: InputMaybe<Scalars['Bytes']>;
  profileId_not?: InputMaybe<Scalars['Bytes']>;
  profileId_gt?: InputMaybe<Scalars['Bytes']>;
  profileId_lt?: InputMaybe<Scalars['Bytes']>;
  profileId_gte?: InputMaybe<Scalars['Bytes']>;
  profileId_lte?: InputMaybe<Scalars['Bytes']>;
  profileId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  profileId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  profileId_contains?: InputMaybe<Scalars['Bytes']>;
  profileId_not_contains?: InputMaybe<Scalars['Bytes']>;
  poolMetadata?: InputMaybe<Scalars['String']>;
  poolMetadata_not?: InputMaybe<Scalars['String']>;
  poolMetadata_gt?: InputMaybe<Scalars['String']>;
  poolMetadata_lt?: InputMaybe<Scalars['String']>;
  poolMetadata_gte?: InputMaybe<Scalars['String']>;
  poolMetadata_lte?: InputMaybe<Scalars['String']>;
  poolMetadata_in?: InputMaybe<Array<Scalars['String']>>;
  poolMetadata_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolMetadata_contains?: InputMaybe<Scalars['String']>;
  poolMetadata_contains_nocase?: InputMaybe<Scalars['String']>;
  poolMetadata_not_contains?: InputMaybe<Scalars['String']>;
  poolMetadata_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolMetadata_starts_with?: InputMaybe<Scalars['String']>;
  poolMetadata_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolMetadata_not_starts_with?: InputMaybe<Scalars['String']>;
  poolMetadata_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolMetadata_ends_with?: InputMaybe<Scalars['String']>;
  poolMetadata_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolMetadata_not_ends_with?: InputMaybe<Scalars['String']>;
  poolMetadata_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolMetadata_?: InputMaybe<RawMetadata_filter>;
  poolProfileMetadata?: InputMaybe<Scalars['String']>;
  poolProfileMetadata_not?: InputMaybe<Scalars['String']>;
  poolProfileMetadata_gt?: InputMaybe<Scalars['String']>;
  poolProfileMetadata_lt?: InputMaybe<Scalars['String']>;
  poolProfileMetadata_gte?: InputMaybe<Scalars['String']>;
  poolProfileMetadata_lte?: InputMaybe<Scalars['String']>;
  poolProfileMetadata_in?: InputMaybe<Array<Scalars['String']>>;
  poolProfileMetadata_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolProfileMetadata_contains?: InputMaybe<Scalars['String']>;
  poolProfileMetadata_contains_nocase?: InputMaybe<Scalars['String']>;
  poolProfileMetadata_not_contains?: InputMaybe<Scalars['String']>;
  poolProfileMetadata_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolProfileMetadata_starts_with?: InputMaybe<Scalars['String']>;
  poolProfileMetadata_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolProfileMetadata_not_starts_with?: InputMaybe<Scalars['String']>;
  poolProfileMetadata_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolProfileMetadata_ends_with?: InputMaybe<Scalars['String']>;
  poolProfileMetadata_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolProfileMetadata_not_ends_with?: InputMaybe<Scalars['String']>;
  poolProfileMetadata_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolProfileMetadata_?: InputMaybe<RawMetadata_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GmDeployment_filter>>>;
  or?: InputMaybe<Array<InputMaybe<GmDeployment_filter>>>;
};

export type GmDeployment_orderBy =
  | 'id'
  | 'address'
  | 'version'
  | 'version__id'
  | 'version__name'
  | 'version__address'
  | 'blockNumber'
  | 'transactionHash'
  | 'timestamp'
  | 'hasPool'
  | 'poolId'
  | 'profileId'
  | 'poolMetadata'
  | 'poolMetadata__id'
  | 'poolMetadata__protocol'
  | 'poolMetadata__pointer'
  | 'poolProfileMetadata'
  | 'poolProfileMetadata__id'
  | 'poolProfileMetadata__protocol'
  | 'poolProfileMetadata__pointer';

export type GmVersion = {
  id: Scalars['ID'];
  name: Scalars['String'];
  address: Scalars['Bytes'];
};

export type GmVersion_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_gt?: InputMaybe<Scalars['Bytes']>;
  address_lt?: InputMaybe<Scalars['Bytes']>;
  address_gte?: InputMaybe<Scalars['Bytes']>;
  address_lte?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GmVersion_filter>>>;
  or?: InputMaybe<Array<InputMaybe<GmVersion_filter>>>;
};

export type GmVersion_orderBy =
  | 'id'
  | 'name'
  | 'address';

export type Grant = {
  id: Scalars['ID'];
  projectId: Project;
  shipId: GrantShip;
  lastUpdated: Scalars['BigInt'];
  hasResubmitted: Scalars['Boolean'];
  grantStatus: Scalars['Int'];
  grantApplicationBytes: Scalars['Bytes'];
  applicationSubmitted: Scalars['BigInt'];
  currentMilestoneIndex: Scalars['BigInt'];
  milestonesAmount: Scalars['BigInt'];
  milestones?: Maybe<Array<Milestone>>;
  shipApprovalReason?: Maybe<RawMetadata>;
  hasShipApproved?: Maybe<Scalars['Boolean']>;
  amtAllocated: Scalars['BigInt'];
  amtDistributed: Scalars['BigInt'];
  allocatedBy?: Maybe<Scalars['Bytes']>;
  facilitatorReason?: Maybe<RawMetadata>;
  hasFacilitatorApproved?: Maybe<Scalars['Boolean']>;
  milestonesApproved?: Maybe<Scalars['Boolean']>;
  milestonesApprovedReason?: Maybe<RawMetadata>;
  currentMilestoneRejectedReason?: Maybe<RawMetadata>;
  resubmitHistory: Array<ApplicationHistory>;
};


export type GrantmilestonesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Milestone_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Milestone_filter>;
};


export type GrantresubmitHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApplicationHistory_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ApplicationHistory_filter>;
};

export type GrantShip = {
  id: Scalars['Bytes'];
  profileId: Scalars['Bytes'];
  nonce: Scalars['BigInt'];
  name: Scalars['String'];
  profileMetadata: RawMetadata;
  owner: Scalars['Bytes'];
  anchor: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
  status: Scalars['Int'];
  poolFunded: Scalars['Boolean'];
  balance: Scalars['BigInt'];
  shipAllocation: Scalars['BigInt'];
  totalAvailableFunds: Scalars['BigInt'];
  totalRoundAmount: Scalars['BigInt'];
  totalAllocated: Scalars['BigInt'];
  totalDistributed: Scalars['BigInt'];
  grants: Array<Grant>;
  alloProfileMembers?: Maybe<ProfileMemberGroup>;
  shipApplicationBytesData?: Maybe<Scalars['Bytes']>;
  applicationSubmittedTime?: Maybe<Scalars['BigInt']>;
  isAwaitingApproval?: Maybe<Scalars['Boolean']>;
  hasSubmittedApplication?: Maybe<Scalars['Boolean']>;
  isApproved?: Maybe<Scalars['Boolean']>;
  approvedTime?: Maybe<Scalars['BigInt']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  rejectedTime?: Maybe<Scalars['BigInt']>;
  applicationReviewReason?: Maybe<RawMetadata>;
  poolId?: Maybe<Scalars['BigInt']>;
  hatId?: Maybe<Scalars['String']>;
  shipContractAddress?: Maybe<Scalars['Bytes']>;
  shipLaunched?: Maybe<Scalars['Boolean']>;
  poolActive?: Maybe<Scalars['Boolean']>;
  isAllocated?: Maybe<Scalars['Boolean']>;
  isDistributed?: Maybe<Scalars['Boolean']>;
};


export type GrantShipgrantsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Grant_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Grant_filter>;
};

export type GrantShip_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  profileId?: InputMaybe<Scalars['Bytes']>;
  profileId_not?: InputMaybe<Scalars['Bytes']>;
  profileId_gt?: InputMaybe<Scalars['Bytes']>;
  profileId_lt?: InputMaybe<Scalars['Bytes']>;
  profileId_gte?: InputMaybe<Scalars['Bytes']>;
  profileId_lte?: InputMaybe<Scalars['Bytes']>;
  profileId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  profileId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  profileId_contains?: InputMaybe<Scalars['Bytes']>;
  profileId_not_contains?: InputMaybe<Scalars['Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  profileMetadata?: InputMaybe<Scalars['String']>;
  profileMetadata_not?: InputMaybe<Scalars['String']>;
  profileMetadata_gt?: InputMaybe<Scalars['String']>;
  profileMetadata_lt?: InputMaybe<Scalars['String']>;
  profileMetadata_gte?: InputMaybe<Scalars['String']>;
  profileMetadata_lte?: InputMaybe<Scalars['String']>;
  profileMetadata_in?: InputMaybe<Array<Scalars['String']>>;
  profileMetadata_not_in?: InputMaybe<Array<Scalars['String']>>;
  profileMetadata_contains?: InputMaybe<Scalars['String']>;
  profileMetadata_contains_nocase?: InputMaybe<Scalars['String']>;
  profileMetadata_not_contains?: InputMaybe<Scalars['String']>;
  profileMetadata_not_contains_nocase?: InputMaybe<Scalars['String']>;
  profileMetadata_starts_with?: InputMaybe<Scalars['String']>;
  profileMetadata_starts_with_nocase?: InputMaybe<Scalars['String']>;
  profileMetadata_not_starts_with?: InputMaybe<Scalars['String']>;
  profileMetadata_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  profileMetadata_ends_with?: InputMaybe<Scalars['String']>;
  profileMetadata_ends_with_nocase?: InputMaybe<Scalars['String']>;
  profileMetadata_not_ends_with?: InputMaybe<Scalars['String']>;
  profileMetadata_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  profileMetadata_?: InputMaybe<RawMetadata_filter>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_gt?: InputMaybe<Scalars['Bytes']>;
  owner_lt?: InputMaybe<Scalars['Bytes']>;
  owner_gte?: InputMaybe<Scalars['Bytes']>;
  owner_lte?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  anchor?: InputMaybe<Scalars['Bytes']>;
  anchor_not?: InputMaybe<Scalars['Bytes']>;
  anchor_gt?: InputMaybe<Scalars['Bytes']>;
  anchor_lt?: InputMaybe<Scalars['Bytes']>;
  anchor_gte?: InputMaybe<Scalars['Bytes']>;
  anchor_lte?: InputMaybe<Scalars['Bytes']>;
  anchor_in?: InputMaybe<Array<Scalars['Bytes']>>;
  anchor_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  anchor_contains?: InputMaybe<Scalars['Bytes']>;
  anchor_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  status?: InputMaybe<Scalars['Int']>;
  status_not?: InputMaybe<Scalars['Int']>;
  status_gt?: InputMaybe<Scalars['Int']>;
  status_lt?: InputMaybe<Scalars['Int']>;
  status_gte?: InputMaybe<Scalars['Int']>;
  status_lte?: InputMaybe<Scalars['Int']>;
  status_in?: InputMaybe<Array<Scalars['Int']>>;
  status_not_in?: InputMaybe<Array<Scalars['Int']>>;
  poolFunded?: InputMaybe<Scalars['Boolean']>;
  poolFunded_not?: InputMaybe<Scalars['Boolean']>;
  poolFunded_in?: InputMaybe<Array<Scalars['Boolean']>>;
  poolFunded_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  shipAllocation?: InputMaybe<Scalars['BigInt']>;
  shipAllocation_not?: InputMaybe<Scalars['BigInt']>;
  shipAllocation_gt?: InputMaybe<Scalars['BigInt']>;
  shipAllocation_lt?: InputMaybe<Scalars['BigInt']>;
  shipAllocation_gte?: InputMaybe<Scalars['BigInt']>;
  shipAllocation_lte?: InputMaybe<Scalars['BigInt']>;
  shipAllocation_in?: InputMaybe<Array<Scalars['BigInt']>>;
  shipAllocation_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAvailableFunds?: InputMaybe<Scalars['BigInt']>;
  totalAvailableFunds_not?: InputMaybe<Scalars['BigInt']>;
  totalAvailableFunds_gt?: InputMaybe<Scalars['BigInt']>;
  totalAvailableFunds_lt?: InputMaybe<Scalars['BigInt']>;
  totalAvailableFunds_gte?: InputMaybe<Scalars['BigInt']>;
  totalAvailableFunds_lte?: InputMaybe<Scalars['BigInt']>;
  totalAvailableFunds_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAvailableFunds_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalRoundAmount?: InputMaybe<Scalars['BigInt']>;
  totalRoundAmount_not?: InputMaybe<Scalars['BigInt']>;
  totalRoundAmount_gt?: InputMaybe<Scalars['BigInt']>;
  totalRoundAmount_lt?: InputMaybe<Scalars['BigInt']>;
  totalRoundAmount_gte?: InputMaybe<Scalars['BigInt']>;
  totalRoundAmount_lte?: InputMaybe<Scalars['BigInt']>;
  totalRoundAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalRoundAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAllocated?: InputMaybe<Scalars['BigInt']>;
  totalAllocated_not?: InputMaybe<Scalars['BigInt']>;
  totalAllocated_gt?: InputMaybe<Scalars['BigInt']>;
  totalAllocated_lt?: InputMaybe<Scalars['BigInt']>;
  totalAllocated_gte?: InputMaybe<Scalars['BigInt']>;
  totalAllocated_lte?: InputMaybe<Scalars['BigInt']>;
  totalAllocated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAllocated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDistributed?: InputMaybe<Scalars['BigInt']>;
  totalDistributed_not?: InputMaybe<Scalars['BigInt']>;
  totalDistributed_gt?: InputMaybe<Scalars['BigInt']>;
  totalDistributed_lt?: InputMaybe<Scalars['BigInt']>;
  totalDistributed_gte?: InputMaybe<Scalars['BigInt']>;
  totalDistributed_lte?: InputMaybe<Scalars['BigInt']>;
  totalDistributed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDistributed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grants_?: InputMaybe<Grant_filter>;
  alloProfileMembers?: InputMaybe<Scalars['String']>;
  alloProfileMembers_not?: InputMaybe<Scalars['String']>;
  alloProfileMembers_gt?: InputMaybe<Scalars['String']>;
  alloProfileMembers_lt?: InputMaybe<Scalars['String']>;
  alloProfileMembers_gte?: InputMaybe<Scalars['String']>;
  alloProfileMembers_lte?: InputMaybe<Scalars['String']>;
  alloProfileMembers_in?: InputMaybe<Array<Scalars['String']>>;
  alloProfileMembers_not_in?: InputMaybe<Array<Scalars['String']>>;
  alloProfileMembers_contains?: InputMaybe<Scalars['String']>;
  alloProfileMembers_contains_nocase?: InputMaybe<Scalars['String']>;
  alloProfileMembers_not_contains?: InputMaybe<Scalars['String']>;
  alloProfileMembers_not_contains_nocase?: InputMaybe<Scalars['String']>;
  alloProfileMembers_starts_with?: InputMaybe<Scalars['String']>;
  alloProfileMembers_starts_with_nocase?: InputMaybe<Scalars['String']>;
  alloProfileMembers_not_starts_with?: InputMaybe<Scalars['String']>;
  alloProfileMembers_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  alloProfileMembers_ends_with?: InputMaybe<Scalars['String']>;
  alloProfileMembers_ends_with_nocase?: InputMaybe<Scalars['String']>;
  alloProfileMembers_not_ends_with?: InputMaybe<Scalars['String']>;
  alloProfileMembers_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  alloProfileMembers_?: InputMaybe<ProfileMemberGroup_filter>;
  shipApplicationBytesData?: InputMaybe<Scalars['Bytes']>;
  shipApplicationBytesData_not?: InputMaybe<Scalars['Bytes']>;
  shipApplicationBytesData_gt?: InputMaybe<Scalars['Bytes']>;
  shipApplicationBytesData_lt?: InputMaybe<Scalars['Bytes']>;
  shipApplicationBytesData_gte?: InputMaybe<Scalars['Bytes']>;
  shipApplicationBytesData_lte?: InputMaybe<Scalars['Bytes']>;
  shipApplicationBytesData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  shipApplicationBytesData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  shipApplicationBytesData_contains?: InputMaybe<Scalars['Bytes']>;
  shipApplicationBytesData_not_contains?: InputMaybe<Scalars['Bytes']>;
  applicationSubmittedTime?: InputMaybe<Scalars['BigInt']>;
  applicationSubmittedTime_not?: InputMaybe<Scalars['BigInt']>;
  applicationSubmittedTime_gt?: InputMaybe<Scalars['BigInt']>;
  applicationSubmittedTime_lt?: InputMaybe<Scalars['BigInt']>;
  applicationSubmittedTime_gte?: InputMaybe<Scalars['BigInt']>;
  applicationSubmittedTime_lte?: InputMaybe<Scalars['BigInt']>;
  applicationSubmittedTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  applicationSubmittedTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  isAwaitingApproval?: InputMaybe<Scalars['Boolean']>;
  isAwaitingApproval_not?: InputMaybe<Scalars['Boolean']>;
  isAwaitingApproval_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isAwaitingApproval_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  hasSubmittedApplication?: InputMaybe<Scalars['Boolean']>;
  hasSubmittedApplication_not?: InputMaybe<Scalars['Boolean']>;
  hasSubmittedApplication_in?: InputMaybe<Array<Scalars['Boolean']>>;
  hasSubmittedApplication_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isApproved?: InputMaybe<Scalars['Boolean']>;
  isApproved_not?: InputMaybe<Scalars['Boolean']>;
  isApproved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isApproved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  approvedTime?: InputMaybe<Scalars['BigInt']>;
  approvedTime_not?: InputMaybe<Scalars['BigInt']>;
  approvedTime_gt?: InputMaybe<Scalars['BigInt']>;
  approvedTime_lt?: InputMaybe<Scalars['BigInt']>;
  approvedTime_gte?: InputMaybe<Scalars['BigInt']>;
  approvedTime_lte?: InputMaybe<Scalars['BigInt']>;
  approvedTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  approvedTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  isRejected?: InputMaybe<Scalars['Boolean']>;
  isRejected_not?: InputMaybe<Scalars['Boolean']>;
  isRejected_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isRejected_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  rejectedTime?: InputMaybe<Scalars['BigInt']>;
  rejectedTime_not?: InputMaybe<Scalars['BigInt']>;
  rejectedTime_gt?: InputMaybe<Scalars['BigInt']>;
  rejectedTime_lt?: InputMaybe<Scalars['BigInt']>;
  rejectedTime_gte?: InputMaybe<Scalars['BigInt']>;
  rejectedTime_lte?: InputMaybe<Scalars['BigInt']>;
  rejectedTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rejectedTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  applicationReviewReason?: InputMaybe<Scalars['String']>;
  applicationReviewReason_not?: InputMaybe<Scalars['String']>;
  applicationReviewReason_gt?: InputMaybe<Scalars['String']>;
  applicationReviewReason_lt?: InputMaybe<Scalars['String']>;
  applicationReviewReason_gte?: InputMaybe<Scalars['String']>;
  applicationReviewReason_lte?: InputMaybe<Scalars['String']>;
  applicationReviewReason_in?: InputMaybe<Array<Scalars['String']>>;
  applicationReviewReason_not_in?: InputMaybe<Array<Scalars['String']>>;
  applicationReviewReason_contains?: InputMaybe<Scalars['String']>;
  applicationReviewReason_contains_nocase?: InputMaybe<Scalars['String']>;
  applicationReviewReason_not_contains?: InputMaybe<Scalars['String']>;
  applicationReviewReason_not_contains_nocase?: InputMaybe<Scalars['String']>;
  applicationReviewReason_starts_with?: InputMaybe<Scalars['String']>;
  applicationReviewReason_starts_with_nocase?: InputMaybe<Scalars['String']>;
  applicationReviewReason_not_starts_with?: InputMaybe<Scalars['String']>;
  applicationReviewReason_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  applicationReviewReason_ends_with?: InputMaybe<Scalars['String']>;
  applicationReviewReason_ends_with_nocase?: InputMaybe<Scalars['String']>;
  applicationReviewReason_not_ends_with?: InputMaybe<Scalars['String']>;
  applicationReviewReason_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  applicationReviewReason_?: InputMaybe<RawMetadata_filter>;
  poolId?: InputMaybe<Scalars['BigInt']>;
  poolId_not?: InputMaybe<Scalars['BigInt']>;
  poolId_gt?: InputMaybe<Scalars['BigInt']>;
  poolId_lt?: InputMaybe<Scalars['BigInt']>;
  poolId_gte?: InputMaybe<Scalars['BigInt']>;
  poolId_lte?: InputMaybe<Scalars['BigInt']>;
  poolId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  poolId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hatId?: InputMaybe<Scalars['String']>;
  hatId_not?: InputMaybe<Scalars['String']>;
  hatId_gt?: InputMaybe<Scalars['String']>;
  hatId_lt?: InputMaybe<Scalars['String']>;
  hatId_gte?: InputMaybe<Scalars['String']>;
  hatId_lte?: InputMaybe<Scalars['String']>;
  hatId_in?: InputMaybe<Array<Scalars['String']>>;
  hatId_not_in?: InputMaybe<Array<Scalars['String']>>;
  hatId_contains?: InputMaybe<Scalars['String']>;
  hatId_contains_nocase?: InputMaybe<Scalars['String']>;
  hatId_not_contains?: InputMaybe<Scalars['String']>;
  hatId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hatId_starts_with?: InputMaybe<Scalars['String']>;
  hatId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hatId_not_starts_with?: InputMaybe<Scalars['String']>;
  hatId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hatId_ends_with?: InputMaybe<Scalars['String']>;
  hatId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hatId_not_ends_with?: InputMaybe<Scalars['String']>;
  hatId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  shipContractAddress?: InputMaybe<Scalars['Bytes']>;
  shipContractAddress_not?: InputMaybe<Scalars['Bytes']>;
  shipContractAddress_gt?: InputMaybe<Scalars['Bytes']>;
  shipContractAddress_lt?: InputMaybe<Scalars['Bytes']>;
  shipContractAddress_gte?: InputMaybe<Scalars['Bytes']>;
  shipContractAddress_lte?: InputMaybe<Scalars['Bytes']>;
  shipContractAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  shipContractAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  shipContractAddress_contains?: InputMaybe<Scalars['Bytes']>;
  shipContractAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  shipLaunched?: InputMaybe<Scalars['Boolean']>;
  shipLaunched_not?: InputMaybe<Scalars['Boolean']>;
  shipLaunched_in?: InputMaybe<Array<Scalars['Boolean']>>;
  shipLaunched_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  poolActive?: InputMaybe<Scalars['Boolean']>;
  poolActive_not?: InputMaybe<Scalars['Boolean']>;
  poolActive_in?: InputMaybe<Array<Scalars['Boolean']>>;
  poolActive_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isAllocated?: InputMaybe<Scalars['Boolean']>;
  isAllocated_not?: InputMaybe<Scalars['Boolean']>;
  isAllocated_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isAllocated_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isDistributed?: InputMaybe<Scalars['Boolean']>;
  isDistributed_not?: InputMaybe<Scalars['Boolean']>;
  isDistributed_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isDistributed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GrantShip_filter>>>;
  or?: InputMaybe<Array<InputMaybe<GrantShip_filter>>>;
};

export type GrantShip_orderBy =
  | 'id'
  | 'profileId'
  | 'nonce'
  | 'name'
  | 'profileMetadata'
  | 'profileMetadata__id'
  | 'profileMetadata__protocol'
  | 'profileMetadata__pointer'
  | 'owner'
  | 'anchor'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash'
  | 'status'
  | 'poolFunded'
  | 'balance'
  | 'shipAllocation'
  | 'totalAvailableFunds'
  | 'totalRoundAmount'
  | 'totalAllocated'
  | 'totalDistributed'
  | 'grants'
  | 'alloProfileMembers'
  | 'alloProfileMembers__id'
  | 'shipApplicationBytesData'
  | 'applicationSubmittedTime'
  | 'isAwaitingApproval'
  | 'hasSubmittedApplication'
  | 'isApproved'
  | 'approvedTime'
  | 'isRejected'
  | 'rejectedTime'
  | 'applicationReviewReason'
  | 'applicationReviewReason__id'
  | 'applicationReviewReason__protocol'
  | 'applicationReviewReason__pointer'
  | 'poolId'
  | 'hatId'
  | 'shipContractAddress'
  | 'shipLaunched'
  | 'poolActive'
  | 'isAllocated'
  | 'isDistributed';

export type Grant_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  projectId?: InputMaybe<Scalars['String']>;
  projectId_not?: InputMaybe<Scalars['String']>;
  projectId_gt?: InputMaybe<Scalars['String']>;
  projectId_lt?: InputMaybe<Scalars['String']>;
  projectId_gte?: InputMaybe<Scalars['String']>;
  projectId_lte?: InputMaybe<Scalars['String']>;
  projectId_in?: InputMaybe<Array<Scalars['String']>>;
  projectId_not_in?: InputMaybe<Array<Scalars['String']>>;
  projectId_contains?: InputMaybe<Scalars['String']>;
  projectId_contains_nocase?: InputMaybe<Scalars['String']>;
  projectId_not_contains?: InputMaybe<Scalars['String']>;
  projectId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  projectId_starts_with?: InputMaybe<Scalars['String']>;
  projectId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  projectId_not_starts_with?: InputMaybe<Scalars['String']>;
  projectId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  projectId_ends_with?: InputMaybe<Scalars['String']>;
  projectId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  projectId_not_ends_with?: InputMaybe<Scalars['String']>;
  projectId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  projectId_?: InputMaybe<Project_filter>;
  shipId?: InputMaybe<Scalars['String']>;
  shipId_not?: InputMaybe<Scalars['String']>;
  shipId_gt?: InputMaybe<Scalars['String']>;
  shipId_lt?: InputMaybe<Scalars['String']>;
  shipId_gte?: InputMaybe<Scalars['String']>;
  shipId_lte?: InputMaybe<Scalars['String']>;
  shipId_in?: InputMaybe<Array<Scalars['String']>>;
  shipId_not_in?: InputMaybe<Array<Scalars['String']>>;
  shipId_contains?: InputMaybe<Scalars['String']>;
  shipId_contains_nocase?: InputMaybe<Scalars['String']>;
  shipId_not_contains?: InputMaybe<Scalars['String']>;
  shipId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  shipId_starts_with?: InputMaybe<Scalars['String']>;
  shipId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  shipId_not_starts_with?: InputMaybe<Scalars['String']>;
  shipId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  shipId_ends_with?: InputMaybe<Scalars['String']>;
  shipId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  shipId_not_ends_with?: InputMaybe<Scalars['String']>;
  shipId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  shipId_?: InputMaybe<GrantShip_filter>;
  lastUpdated?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_not?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_gt?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_lt?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_gte?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_lte?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastUpdated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hasResubmitted?: InputMaybe<Scalars['Boolean']>;
  hasResubmitted_not?: InputMaybe<Scalars['Boolean']>;
  hasResubmitted_in?: InputMaybe<Array<Scalars['Boolean']>>;
  hasResubmitted_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  grantStatus?: InputMaybe<Scalars['Int']>;
  grantStatus_not?: InputMaybe<Scalars['Int']>;
  grantStatus_gt?: InputMaybe<Scalars['Int']>;
  grantStatus_lt?: InputMaybe<Scalars['Int']>;
  grantStatus_gte?: InputMaybe<Scalars['Int']>;
  grantStatus_lte?: InputMaybe<Scalars['Int']>;
  grantStatus_in?: InputMaybe<Array<Scalars['Int']>>;
  grantStatus_not_in?: InputMaybe<Array<Scalars['Int']>>;
  grantApplicationBytes?: InputMaybe<Scalars['Bytes']>;
  grantApplicationBytes_not?: InputMaybe<Scalars['Bytes']>;
  grantApplicationBytes_gt?: InputMaybe<Scalars['Bytes']>;
  grantApplicationBytes_lt?: InputMaybe<Scalars['Bytes']>;
  grantApplicationBytes_gte?: InputMaybe<Scalars['Bytes']>;
  grantApplicationBytes_lte?: InputMaybe<Scalars['Bytes']>;
  grantApplicationBytes_in?: InputMaybe<Array<Scalars['Bytes']>>;
  grantApplicationBytes_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  grantApplicationBytes_contains?: InputMaybe<Scalars['Bytes']>;
  grantApplicationBytes_not_contains?: InputMaybe<Scalars['Bytes']>;
  applicationSubmitted?: InputMaybe<Scalars['BigInt']>;
  applicationSubmitted_not?: InputMaybe<Scalars['BigInt']>;
  applicationSubmitted_gt?: InputMaybe<Scalars['BigInt']>;
  applicationSubmitted_lt?: InputMaybe<Scalars['BigInt']>;
  applicationSubmitted_gte?: InputMaybe<Scalars['BigInt']>;
  applicationSubmitted_lte?: InputMaybe<Scalars['BigInt']>;
  applicationSubmitted_in?: InputMaybe<Array<Scalars['BigInt']>>;
  applicationSubmitted_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentMilestoneIndex?: InputMaybe<Scalars['BigInt']>;
  currentMilestoneIndex_not?: InputMaybe<Scalars['BigInt']>;
  currentMilestoneIndex_gt?: InputMaybe<Scalars['BigInt']>;
  currentMilestoneIndex_lt?: InputMaybe<Scalars['BigInt']>;
  currentMilestoneIndex_gte?: InputMaybe<Scalars['BigInt']>;
  currentMilestoneIndex_lte?: InputMaybe<Scalars['BigInt']>;
  currentMilestoneIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentMilestoneIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  milestonesAmount?: InputMaybe<Scalars['BigInt']>;
  milestonesAmount_not?: InputMaybe<Scalars['BigInt']>;
  milestonesAmount_gt?: InputMaybe<Scalars['BigInt']>;
  milestonesAmount_lt?: InputMaybe<Scalars['BigInt']>;
  milestonesAmount_gte?: InputMaybe<Scalars['BigInt']>;
  milestonesAmount_lte?: InputMaybe<Scalars['BigInt']>;
  milestonesAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  milestonesAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  milestones?: InputMaybe<Array<Scalars['String']>>;
  milestones_not?: InputMaybe<Array<Scalars['String']>>;
  milestones_contains?: InputMaybe<Array<Scalars['String']>>;
  milestones_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  milestones_not_contains?: InputMaybe<Array<Scalars['String']>>;
  milestones_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  milestones_?: InputMaybe<Milestone_filter>;
  shipApprovalReason?: InputMaybe<Scalars['String']>;
  shipApprovalReason_not?: InputMaybe<Scalars['String']>;
  shipApprovalReason_gt?: InputMaybe<Scalars['String']>;
  shipApprovalReason_lt?: InputMaybe<Scalars['String']>;
  shipApprovalReason_gte?: InputMaybe<Scalars['String']>;
  shipApprovalReason_lte?: InputMaybe<Scalars['String']>;
  shipApprovalReason_in?: InputMaybe<Array<Scalars['String']>>;
  shipApprovalReason_not_in?: InputMaybe<Array<Scalars['String']>>;
  shipApprovalReason_contains?: InputMaybe<Scalars['String']>;
  shipApprovalReason_contains_nocase?: InputMaybe<Scalars['String']>;
  shipApprovalReason_not_contains?: InputMaybe<Scalars['String']>;
  shipApprovalReason_not_contains_nocase?: InputMaybe<Scalars['String']>;
  shipApprovalReason_starts_with?: InputMaybe<Scalars['String']>;
  shipApprovalReason_starts_with_nocase?: InputMaybe<Scalars['String']>;
  shipApprovalReason_not_starts_with?: InputMaybe<Scalars['String']>;
  shipApprovalReason_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  shipApprovalReason_ends_with?: InputMaybe<Scalars['String']>;
  shipApprovalReason_ends_with_nocase?: InputMaybe<Scalars['String']>;
  shipApprovalReason_not_ends_with?: InputMaybe<Scalars['String']>;
  shipApprovalReason_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  shipApprovalReason_?: InputMaybe<RawMetadata_filter>;
  hasShipApproved?: InputMaybe<Scalars['Boolean']>;
  hasShipApproved_not?: InputMaybe<Scalars['Boolean']>;
  hasShipApproved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  hasShipApproved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  amtAllocated?: InputMaybe<Scalars['BigInt']>;
  amtAllocated_not?: InputMaybe<Scalars['BigInt']>;
  amtAllocated_gt?: InputMaybe<Scalars['BigInt']>;
  amtAllocated_lt?: InputMaybe<Scalars['BigInt']>;
  amtAllocated_gte?: InputMaybe<Scalars['BigInt']>;
  amtAllocated_lte?: InputMaybe<Scalars['BigInt']>;
  amtAllocated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amtAllocated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amtDistributed?: InputMaybe<Scalars['BigInt']>;
  amtDistributed_not?: InputMaybe<Scalars['BigInt']>;
  amtDistributed_gt?: InputMaybe<Scalars['BigInt']>;
  amtDistributed_lt?: InputMaybe<Scalars['BigInt']>;
  amtDistributed_gte?: InputMaybe<Scalars['BigInt']>;
  amtDistributed_lte?: InputMaybe<Scalars['BigInt']>;
  amtDistributed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amtDistributed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allocatedBy?: InputMaybe<Scalars['Bytes']>;
  allocatedBy_not?: InputMaybe<Scalars['Bytes']>;
  allocatedBy_gt?: InputMaybe<Scalars['Bytes']>;
  allocatedBy_lt?: InputMaybe<Scalars['Bytes']>;
  allocatedBy_gte?: InputMaybe<Scalars['Bytes']>;
  allocatedBy_lte?: InputMaybe<Scalars['Bytes']>;
  allocatedBy_in?: InputMaybe<Array<Scalars['Bytes']>>;
  allocatedBy_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  allocatedBy_contains?: InputMaybe<Scalars['Bytes']>;
  allocatedBy_not_contains?: InputMaybe<Scalars['Bytes']>;
  facilitatorReason?: InputMaybe<Scalars['String']>;
  facilitatorReason_not?: InputMaybe<Scalars['String']>;
  facilitatorReason_gt?: InputMaybe<Scalars['String']>;
  facilitatorReason_lt?: InputMaybe<Scalars['String']>;
  facilitatorReason_gte?: InputMaybe<Scalars['String']>;
  facilitatorReason_lte?: InputMaybe<Scalars['String']>;
  facilitatorReason_in?: InputMaybe<Array<Scalars['String']>>;
  facilitatorReason_not_in?: InputMaybe<Array<Scalars['String']>>;
  facilitatorReason_contains?: InputMaybe<Scalars['String']>;
  facilitatorReason_contains_nocase?: InputMaybe<Scalars['String']>;
  facilitatorReason_not_contains?: InputMaybe<Scalars['String']>;
  facilitatorReason_not_contains_nocase?: InputMaybe<Scalars['String']>;
  facilitatorReason_starts_with?: InputMaybe<Scalars['String']>;
  facilitatorReason_starts_with_nocase?: InputMaybe<Scalars['String']>;
  facilitatorReason_not_starts_with?: InputMaybe<Scalars['String']>;
  facilitatorReason_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  facilitatorReason_ends_with?: InputMaybe<Scalars['String']>;
  facilitatorReason_ends_with_nocase?: InputMaybe<Scalars['String']>;
  facilitatorReason_not_ends_with?: InputMaybe<Scalars['String']>;
  facilitatorReason_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  facilitatorReason_?: InputMaybe<RawMetadata_filter>;
  hasFacilitatorApproved?: InputMaybe<Scalars['Boolean']>;
  hasFacilitatorApproved_not?: InputMaybe<Scalars['Boolean']>;
  hasFacilitatorApproved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  hasFacilitatorApproved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  milestonesApproved?: InputMaybe<Scalars['Boolean']>;
  milestonesApproved_not?: InputMaybe<Scalars['Boolean']>;
  milestonesApproved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  milestonesApproved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  milestonesApprovedReason?: InputMaybe<Scalars['String']>;
  milestonesApprovedReason_not?: InputMaybe<Scalars['String']>;
  milestonesApprovedReason_gt?: InputMaybe<Scalars['String']>;
  milestonesApprovedReason_lt?: InputMaybe<Scalars['String']>;
  milestonesApprovedReason_gte?: InputMaybe<Scalars['String']>;
  milestonesApprovedReason_lte?: InputMaybe<Scalars['String']>;
  milestonesApprovedReason_in?: InputMaybe<Array<Scalars['String']>>;
  milestonesApprovedReason_not_in?: InputMaybe<Array<Scalars['String']>>;
  milestonesApprovedReason_contains?: InputMaybe<Scalars['String']>;
  milestonesApprovedReason_contains_nocase?: InputMaybe<Scalars['String']>;
  milestonesApprovedReason_not_contains?: InputMaybe<Scalars['String']>;
  milestonesApprovedReason_not_contains_nocase?: InputMaybe<Scalars['String']>;
  milestonesApprovedReason_starts_with?: InputMaybe<Scalars['String']>;
  milestonesApprovedReason_starts_with_nocase?: InputMaybe<Scalars['String']>;
  milestonesApprovedReason_not_starts_with?: InputMaybe<Scalars['String']>;
  milestonesApprovedReason_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  milestonesApprovedReason_ends_with?: InputMaybe<Scalars['String']>;
  milestonesApprovedReason_ends_with_nocase?: InputMaybe<Scalars['String']>;
  milestonesApprovedReason_not_ends_with?: InputMaybe<Scalars['String']>;
  milestonesApprovedReason_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  milestonesApprovedReason_?: InputMaybe<RawMetadata_filter>;
  currentMilestoneRejectedReason?: InputMaybe<Scalars['String']>;
  currentMilestoneRejectedReason_not?: InputMaybe<Scalars['String']>;
  currentMilestoneRejectedReason_gt?: InputMaybe<Scalars['String']>;
  currentMilestoneRejectedReason_lt?: InputMaybe<Scalars['String']>;
  currentMilestoneRejectedReason_gte?: InputMaybe<Scalars['String']>;
  currentMilestoneRejectedReason_lte?: InputMaybe<Scalars['String']>;
  currentMilestoneRejectedReason_in?: InputMaybe<Array<Scalars['String']>>;
  currentMilestoneRejectedReason_not_in?: InputMaybe<Array<Scalars['String']>>;
  currentMilestoneRejectedReason_contains?: InputMaybe<Scalars['String']>;
  currentMilestoneRejectedReason_contains_nocase?: InputMaybe<Scalars['String']>;
  currentMilestoneRejectedReason_not_contains?: InputMaybe<Scalars['String']>;
  currentMilestoneRejectedReason_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currentMilestoneRejectedReason_starts_with?: InputMaybe<Scalars['String']>;
  currentMilestoneRejectedReason_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentMilestoneRejectedReason_not_starts_with?: InputMaybe<Scalars['String']>;
  currentMilestoneRejectedReason_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentMilestoneRejectedReason_ends_with?: InputMaybe<Scalars['String']>;
  currentMilestoneRejectedReason_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentMilestoneRejectedReason_not_ends_with?: InputMaybe<Scalars['String']>;
  currentMilestoneRejectedReason_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentMilestoneRejectedReason_?: InputMaybe<RawMetadata_filter>;
  resubmitHistory?: InputMaybe<Array<Scalars['String']>>;
  resubmitHistory_not?: InputMaybe<Array<Scalars['String']>>;
  resubmitHistory_contains?: InputMaybe<Array<Scalars['String']>>;
  resubmitHistory_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  resubmitHistory_not_contains?: InputMaybe<Array<Scalars['String']>>;
  resubmitHistory_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  resubmitHistory_?: InputMaybe<ApplicationHistory_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Grant_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Grant_filter>>>;
};

export type Grant_orderBy =
  | 'id'
  | 'projectId'
  | 'projectId__id'
  | 'projectId__profileId'
  | 'projectId__status'
  | 'projectId__nonce'
  | 'projectId__name'
  | 'projectId__owner'
  | 'projectId__anchor'
  | 'projectId__blockNumber'
  | 'projectId__blockTimestamp'
  | 'projectId__transactionHash'
  | 'projectId__totalAmountReceived'
  | 'shipId'
  | 'shipId__id'
  | 'shipId__profileId'
  | 'shipId__nonce'
  | 'shipId__name'
  | 'shipId__owner'
  | 'shipId__anchor'
  | 'shipId__blockNumber'
  | 'shipId__blockTimestamp'
  | 'shipId__transactionHash'
  | 'shipId__status'
  | 'shipId__poolFunded'
  | 'shipId__balance'
  | 'shipId__shipAllocation'
  | 'shipId__totalAvailableFunds'
  | 'shipId__totalRoundAmount'
  | 'shipId__totalAllocated'
  | 'shipId__totalDistributed'
  | 'shipId__shipApplicationBytesData'
  | 'shipId__applicationSubmittedTime'
  | 'shipId__isAwaitingApproval'
  | 'shipId__hasSubmittedApplication'
  | 'shipId__isApproved'
  | 'shipId__approvedTime'
  | 'shipId__isRejected'
  | 'shipId__rejectedTime'
  | 'shipId__poolId'
  | 'shipId__hatId'
  | 'shipId__shipContractAddress'
  | 'shipId__shipLaunched'
  | 'shipId__poolActive'
  | 'shipId__isAllocated'
  | 'shipId__isDistributed'
  | 'lastUpdated'
  | 'hasResubmitted'
  | 'grantStatus'
  | 'grantApplicationBytes'
  | 'applicationSubmitted'
  | 'currentMilestoneIndex'
  | 'milestonesAmount'
  | 'milestones'
  | 'shipApprovalReason'
  | 'shipApprovalReason__id'
  | 'shipApprovalReason__protocol'
  | 'shipApprovalReason__pointer'
  | 'hasShipApproved'
  | 'amtAllocated'
  | 'amtDistributed'
  | 'allocatedBy'
  | 'facilitatorReason'
  | 'facilitatorReason__id'
  | 'facilitatorReason__protocol'
  | 'facilitatorReason__pointer'
  | 'hasFacilitatorApproved'
  | 'milestonesApproved'
  | 'milestonesApprovedReason'
  | 'milestonesApprovedReason__id'
  | 'milestonesApprovedReason__protocol'
  | 'milestonesApprovedReason__pointer'
  | 'currentMilestoneRejectedReason'
  | 'currentMilestoneRejectedReason__id'
  | 'currentMilestoneRejectedReason__protocol'
  | 'currentMilestoneRejectedReason__pointer'
  | 'resubmitHistory';

export type Log = {
  id: Scalars['ID'];
  message: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Log_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  message?: InputMaybe<Scalars['String']>;
  message_not?: InputMaybe<Scalars['String']>;
  message_gt?: InputMaybe<Scalars['String']>;
  message_lt?: InputMaybe<Scalars['String']>;
  message_gte?: InputMaybe<Scalars['String']>;
  message_lte?: InputMaybe<Scalars['String']>;
  message_in?: InputMaybe<Array<Scalars['String']>>;
  message_not_in?: InputMaybe<Array<Scalars['String']>>;
  message_contains?: InputMaybe<Scalars['String']>;
  message_contains_nocase?: InputMaybe<Scalars['String']>;
  message_not_contains?: InputMaybe<Scalars['String']>;
  message_not_contains_nocase?: InputMaybe<Scalars['String']>;
  message_starts_with?: InputMaybe<Scalars['String']>;
  message_starts_with_nocase?: InputMaybe<Scalars['String']>;
  message_not_starts_with?: InputMaybe<Scalars['String']>;
  message_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  message_ends_with?: InputMaybe<Scalars['String']>;
  message_ends_with_nocase?: InputMaybe<Scalars['String']>;
  message_not_ends_with?: InputMaybe<Scalars['String']>;
  message_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  type_not?: InputMaybe<Scalars['String']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<Scalars['String']>>;
  type_not_in?: InputMaybe<Array<Scalars['String']>>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_contains_nocase?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']>;
  type_starts_with?: InputMaybe<Scalars['String']>;
  type_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  type_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_ends_with?: InputMaybe<Scalars['String']>;
  type_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  type_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Log_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Log_filter>>>;
};

export type Log_orderBy =
  | 'id'
  | 'message'
  | 'description'
  | 'type';

/** columns and relationships of "Milestone" */
export type Milestone = {
  id: Scalars['String'];
  amountPercentage: Scalars['Bytes'];
  mmetadata: Scalars['BigInt'];
  amount: Scalars['BigInt'];
  status: Scalars['Int'];
  lastUpdated: Scalars['BigInt'];
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  grant_id: Scalars['String'];
  index: Scalars['Int'];
  metadata_id: Scalars['String'];
  /** An object relationship */
  milestoneSet?: Maybe<MilestoneSet>;
  milestoneSet_id: Scalars['String'];
  percentage: Scalars['numeric'];
};

export type Milestone_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  amountPercentage?: InputMaybe<Scalars['Bytes']>;
  amountPercentage_not?: InputMaybe<Scalars['Bytes']>;
  amountPercentage_gt?: InputMaybe<Scalars['Bytes']>;
  amountPercentage_lt?: InputMaybe<Scalars['Bytes']>;
  amountPercentage_gte?: InputMaybe<Scalars['Bytes']>;
  amountPercentage_lte?: InputMaybe<Scalars['Bytes']>;
  amountPercentage_in?: InputMaybe<Array<Scalars['Bytes']>>;
  amountPercentage_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  amountPercentage_contains?: InputMaybe<Scalars['Bytes']>;
  amountPercentage_not_contains?: InputMaybe<Scalars['Bytes']>;
  mmetadata?: InputMaybe<Scalars['BigInt']>;
  mmetadata_not?: InputMaybe<Scalars['BigInt']>;
  mmetadata_gt?: InputMaybe<Scalars['BigInt']>;
  mmetadata_lt?: InputMaybe<Scalars['BigInt']>;
  mmetadata_gte?: InputMaybe<Scalars['BigInt']>;
  mmetadata_lte?: InputMaybe<Scalars['BigInt']>;
  mmetadata_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mmetadata_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<Scalars['Int']>;
  status_not?: InputMaybe<Scalars['Int']>;
  status_gt?: InputMaybe<Scalars['Int']>;
  status_lt?: InputMaybe<Scalars['Int']>;
  status_gte?: InputMaybe<Scalars['Int']>;
  status_lte?: InputMaybe<Scalars['Int']>;
  status_in?: InputMaybe<Array<Scalars['Int']>>;
  status_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUpdated?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_not?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_gt?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_lt?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_gte?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_lte?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastUpdated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Milestone_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Milestone_filter>>>;
};

export type Milestone_orderBy =
  | 'id'
  | 'amountPercentage'
  | 'mmetadata'
  | 'amount'
  | 'status'
  | 'lastUpdated';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type PoolIdLookup = {
  id: Scalars['ID'];
  entityId: Scalars['Bytes'];
};

export type PoolIdLookup_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  entityId?: InputMaybe<Scalars['Bytes']>;
  entityId_not?: InputMaybe<Scalars['Bytes']>;
  entityId_gt?: InputMaybe<Scalars['Bytes']>;
  entityId_lt?: InputMaybe<Scalars['Bytes']>;
  entityId_gte?: InputMaybe<Scalars['Bytes']>;
  entityId_lte?: InputMaybe<Scalars['Bytes']>;
  entityId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  entityId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  entityId_contains?: InputMaybe<Scalars['Bytes']>;
  entityId_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolIdLookup_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PoolIdLookup_filter>>>;
};

export type PoolIdLookup_orderBy =
  | 'id'
  | 'entityId';

/** columns and relationships of "ProfileIdToAnchor" */
export type ProfileIdToAnchor = {
  id: Scalars['String'];
  profileId: Scalars['String'];
  anchor: Scalars['String'];
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
};

export type ProfileIdToAnchor_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  profileId?: InputMaybe<Scalars['Bytes']>;
  profileId_not?: InputMaybe<Scalars['Bytes']>;
  profileId_gt?: InputMaybe<Scalars['Bytes']>;
  profileId_lt?: InputMaybe<Scalars['Bytes']>;
  profileId_gte?: InputMaybe<Scalars['Bytes']>;
  profileId_lte?: InputMaybe<Scalars['Bytes']>;
  profileId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  profileId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  profileId_contains?: InputMaybe<Scalars['Bytes']>;
  profileId_not_contains?: InputMaybe<Scalars['Bytes']>;
  anchor?: InputMaybe<Scalars['Bytes']>;
  anchor_not?: InputMaybe<Scalars['Bytes']>;
  anchor_gt?: InputMaybe<Scalars['Bytes']>;
  anchor_lt?: InputMaybe<Scalars['Bytes']>;
  anchor_gte?: InputMaybe<Scalars['Bytes']>;
  anchor_lte?: InputMaybe<Scalars['Bytes']>;
  anchor_in?: InputMaybe<Array<Scalars['Bytes']>>;
  anchor_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  anchor_contains?: InputMaybe<Scalars['Bytes']>;
  anchor_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProfileIdToAnchor_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ProfileIdToAnchor_filter>>>;
};

export type ProfileIdToAnchor_orderBy =
  | 'id'
  | 'profileId'
  | 'anchor';

/** columns and relationships of "ProfileMemberGroup" */
export type ProfileMemberGroup = {
  id: Scalars['String'];
  addresses: Array<Scalars['String']>;
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  role: Scalars['String'];
};

export type ProfileMemberGroup_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProfileMemberGroup_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ProfileMemberGroup_filter>>>;
};

export type ProfileMemberGroup_orderBy =
  | 'id'
  | 'addresses';

export type Project = {
  id: Scalars['Bytes'];
  profileId: Scalars['Bytes'];
  status: Scalars['Int'];
  nonce: Scalars['BigInt'];
  name: Scalars['String'];
  metadata: RawMetadata;
  owner: Scalars['Bytes'];
  anchor: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
  grants: Array<Grant>;
  members?: Maybe<ProfileMemberGroup>;
  totalAmountReceived: Scalars['BigInt'];
};


export type ProjectgrantsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Grant_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Grant_filter>;
};

export type Project_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  profileId?: InputMaybe<Scalars['Bytes']>;
  profileId_not?: InputMaybe<Scalars['Bytes']>;
  profileId_gt?: InputMaybe<Scalars['Bytes']>;
  profileId_lt?: InputMaybe<Scalars['Bytes']>;
  profileId_gte?: InputMaybe<Scalars['Bytes']>;
  profileId_lte?: InputMaybe<Scalars['Bytes']>;
  profileId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  profileId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  profileId_contains?: InputMaybe<Scalars['Bytes']>;
  profileId_not_contains?: InputMaybe<Scalars['Bytes']>;
  status?: InputMaybe<Scalars['Int']>;
  status_not?: InputMaybe<Scalars['Int']>;
  status_gt?: InputMaybe<Scalars['Int']>;
  status_lt?: InputMaybe<Scalars['Int']>;
  status_gte?: InputMaybe<Scalars['Int']>;
  status_lte?: InputMaybe<Scalars['Int']>;
  status_in?: InputMaybe<Array<Scalars['Int']>>;
  status_not_in?: InputMaybe<Array<Scalars['Int']>>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['String']>;
  metadata_not?: InputMaybe<Scalars['String']>;
  metadata_gt?: InputMaybe<Scalars['String']>;
  metadata_lt?: InputMaybe<Scalars['String']>;
  metadata_gte?: InputMaybe<Scalars['String']>;
  metadata_lte?: InputMaybe<Scalars['String']>;
  metadata_in?: InputMaybe<Array<Scalars['String']>>;
  metadata_not_in?: InputMaybe<Array<Scalars['String']>>;
  metadata_contains?: InputMaybe<Scalars['String']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_contains?: InputMaybe<Scalars['String']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metadata_starts_with?: InputMaybe<Scalars['String']>;
  metadata_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_starts_with?: InputMaybe<Scalars['String']>;
  metadata_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_ends_with?: InputMaybe<Scalars['String']>;
  metadata_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_ends_with?: InputMaybe<Scalars['String']>;
  metadata_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_?: InputMaybe<RawMetadata_filter>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_gt?: InputMaybe<Scalars['Bytes']>;
  owner_lt?: InputMaybe<Scalars['Bytes']>;
  owner_gte?: InputMaybe<Scalars['Bytes']>;
  owner_lte?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  anchor?: InputMaybe<Scalars['Bytes']>;
  anchor_not?: InputMaybe<Scalars['Bytes']>;
  anchor_gt?: InputMaybe<Scalars['Bytes']>;
  anchor_lt?: InputMaybe<Scalars['Bytes']>;
  anchor_gte?: InputMaybe<Scalars['Bytes']>;
  anchor_lte?: InputMaybe<Scalars['Bytes']>;
  anchor_in?: InputMaybe<Array<Scalars['Bytes']>>;
  anchor_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  anchor_contains?: InputMaybe<Scalars['Bytes']>;
  anchor_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  grants_?: InputMaybe<Grant_filter>;
  members?: InputMaybe<Scalars['String']>;
  members_not?: InputMaybe<Scalars['String']>;
  members_gt?: InputMaybe<Scalars['String']>;
  members_lt?: InputMaybe<Scalars['String']>;
  members_gte?: InputMaybe<Scalars['String']>;
  members_lte?: InputMaybe<Scalars['String']>;
  members_in?: InputMaybe<Array<Scalars['String']>>;
  members_not_in?: InputMaybe<Array<Scalars['String']>>;
  members_contains?: InputMaybe<Scalars['String']>;
  members_contains_nocase?: InputMaybe<Scalars['String']>;
  members_not_contains?: InputMaybe<Scalars['String']>;
  members_not_contains_nocase?: InputMaybe<Scalars['String']>;
  members_starts_with?: InputMaybe<Scalars['String']>;
  members_starts_with_nocase?: InputMaybe<Scalars['String']>;
  members_not_starts_with?: InputMaybe<Scalars['String']>;
  members_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  members_ends_with?: InputMaybe<Scalars['String']>;
  members_ends_with_nocase?: InputMaybe<Scalars['String']>;
  members_not_ends_with?: InputMaybe<Scalars['String']>;
  members_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  members_?: InputMaybe<ProfileMemberGroup_filter>;
  totalAmountReceived?: InputMaybe<Scalars['BigInt']>;
  totalAmountReceived_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountReceived_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountReceived_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountReceived_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountReceived_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountReceived_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountReceived_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Project_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Project_filter>>>;
};

export type Project_orderBy =
  | 'id'
  | 'profileId'
  | 'status'
  | 'nonce'
  | 'name'
  | 'metadata'
  | 'metadata__id'
  | 'metadata__protocol'
  | 'metadata__pointer'
  | 'owner'
  | 'anchor'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash'
  | 'grants'
  | 'members'
  | 'members__id'
  | 'totalAmountReceived';

export type RawMetadata = {
  id: Scalars['String'];
  protocol: Scalars['BigInt'];
  pointer: Scalars['String'];
};

export type RawMetadata_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol?: InputMaybe<Scalars['BigInt']>;
  protocol_not?: InputMaybe<Scalars['BigInt']>;
  protocol_gt?: InputMaybe<Scalars['BigInt']>;
  protocol_lt?: InputMaybe<Scalars['BigInt']>;
  protocol_gte?: InputMaybe<Scalars['BigInt']>;
  protocol_lte?: InputMaybe<Scalars['BigInt']>;
  protocol_in?: InputMaybe<Array<Scalars['BigInt']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pointer?: InputMaybe<Scalars['String']>;
  pointer_not?: InputMaybe<Scalars['String']>;
  pointer_gt?: InputMaybe<Scalars['String']>;
  pointer_lt?: InputMaybe<Scalars['String']>;
  pointer_gte?: InputMaybe<Scalars['String']>;
  pointer_lte?: InputMaybe<Scalars['String']>;
  pointer_in?: InputMaybe<Array<Scalars['String']>>;
  pointer_not_in?: InputMaybe<Array<Scalars['String']>>;
  pointer_contains?: InputMaybe<Scalars['String']>;
  pointer_contains_nocase?: InputMaybe<Scalars['String']>;
  pointer_not_contains?: InputMaybe<Scalars['String']>;
  pointer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pointer_starts_with?: InputMaybe<Scalars['String']>;
  pointer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pointer_not_starts_with?: InputMaybe<Scalars['String']>;
  pointer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pointer_ends_with?: InputMaybe<Scalars['String']>;
  pointer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pointer_not_ends_with?: InputMaybe<Scalars['String']>;
  pointer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RawMetadata_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RawMetadata_filter>>>;
};

export type RawMetadata_orderBy =
  | 'id'
  | 'protocol'
  | 'pointer';

/** columns and relationships of "Transaction" */
export type Transaction = {
  id: Scalars['String'];
  blockNumber: Scalars['numeric'];
  sender: Scalars['Bytes'];
  txHash: Scalars['String'];
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  srcAddress: Scalars['String'];
  timestamp: Scalars['Int'];
};

export type Transaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']>;
  txHash_lt?: InputMaybe<Scalars['Bytes']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Transaction_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Transaction_filter>>>;
};

export type Transaction_orderBy =
  | 'id'
  | 'blockNumber'
  | 'sender'
  | 'txHash';

export type Update = {
  id: Scalars['ID'];
  scope: Scalars['Int'];
  posterRole: Scalars['Int'];
  entityAddress: Scalars['Bytes'];
  postedBy: Scalars['Bytes'];
  content: RawMetadata;
  contentSchema: Scalars['Int'];
  postDecorator: Scalars['Int'];
  timestamp: Scalars['BigInt'];
};

export type Update_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  scope?: InputMaybe<Scalars['Int']>;
  scope_not?: InputMaybe<Scalars['Int']>;
  scope_gt?: InputMaybe<Scalars['Int']>;
  scope_lt?: InputMaybe<Scalars['Int']>;
  scope_gte?: InputMaybe<Scalars['Int']>;
  scope_lte?: InputMaybe<Scalars['Int']>;
  scope_in?: InputMaybe<Array<Scalars['Int']>>;
  scope_not_in?: InputMaybe<Array<Scalars['Int']>>;
  posterRole?: InputMaybe<Scalars['Int']>;
  posterRole_not?: InputMaybe<Scalars['Int']>;
  posterRole_gt?: InputMaybe<Scalars['Int']>;
  posterRole_lt?: InputMaybe<Scalars['Int']>;
  posterRole_gte?: InputMaybe<Scalars['Int']>;
  posterRole_lte?: InputMaybe<Scalars['Int']>;
  posterRole_in?: InputMaybe<Array<Scalars['Int']>>;
  posterRole_not_in?: InputMaybe<Array<Scalars['Int']>>;
  entityAddress?: InputMaybe<Scalars['Bytes']>;
  entityAddress_not?: InputMaybe<Scalars['Bytes']>;
  entityAddress_gt?: InputMaybe<Scalars['Bytes']>;
  entityAddress_lt?: InputMaybe<Scalars['Bytes']>;
  entityAddress_gte?: InputMaybe<Scalars['Bytes']>;
  entityAddress_lte?: InputMaybe<Scalars['Bytes']>;
  entityAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  entityAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  entityAddress_contains?: InputMaybe<Scalars['Bytes']>;
  entityAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  postedBy?: InputMaybe<Scalars['Bytes']>;
  postedBy_not?: InputMaybe<Scalars['Bytes']>;
  postedBy_gt?: InputMaybe<Scalars['Bytes']>;
  postedBy_lt?: InputMaybe<Scalars['Bytes']>;
  postedBy_gte?: InputMaybe<Scalars['Bytes']>;
  postedBy_lte?: InputMaybe<Scalars['Bytes']>;
  postedBy_in?: InputMaybe<Array<Scalars['Bytes']>>;
  postedBy_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  postedBy_contains?: InputMaybe<Scalars['Bytes']>;
  postedBy_not_contains?: InputMaybe<Scalars['Bytes']>;
  content?: InputMaybe<Scalars['String']>;
  content_not?: InputMaybe<Scalars['String']>;
  content_gt?: InputMaybe<Scalars['String']>;
  content_lt?: InputMaybe<Scalars['String']>;
  content_gte?: InputMaybe<Scalars['String']>;
  content_lte?: InputMaybe<Scalars['String']>;
  content_in?: InputMaybe<Array<Scalars['String']>>;
  content_not_in?: InputMaybe<Array<Scalars['String']>>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_contains_nocase?: InputMaybe<Scalars['String']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  content_not_contains_nocase?: InputMaybe<Scalars['String']>;
  content_starts_with?: InputMaybe<Scalars['String']>;
  content_starts_with_nocase?: InputMaybe<Scalars['String']>;
  content_not_starts_with?: InputMaybe<Scalars['String']>;
  content_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  content_ends_with?: InputMaybe<Scalars['String']>;
  content_ends_with_nocase?: InputMaybe<Scalars['String']>;
  content_not_ends_with?: InputMaybe<Scalars['String']>;
  content_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  content_?: InputMaybe<RawMetadata_filter>;
  contentSchema?: InputMaybe<Scalars['Int']>;
  contentSchema_not?: InputMaybe<Scalars['Int']>;
  contentSchema_gt?: InputMaybe<Scalars['Int']>;
  contentSchema_lt?: InputMaybe<Scalars['Int']>;
  contentSchema_gte?: InputMaybe<Scalars['Int']>;
  contentSchema_lte?: InputMaybe<Scalars['Int']>;
  contentSchema_in?: InputMaybe<Array<Scalars['Int']>>;
  contentSchema_not_in?: InputMaybe<Array<Scalars['Int']>>;
  postDecorator?: InputMaybe<Scalars['Int']>;
  postDecorator_not?: InputMaybe<Scalars['Int']>;
  postDecorator_gt?: InputMaybe<Scalars['Int']>;
  postDecorator_lt?: InputMaybe<Scalars['Int']>;
  postDecorator_gte?: InputMaybe<Scalars['Int']>;
  postDecorator_lte?: InputMaybe<Scalars['Int']>;
  postDecorator_in?: InputMaybe<Array<Scalars['Int']>>;
  postDecorator_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Update_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Update_filter>>>;
};

export type Update_orderBy =
  | 'id'
  | 'scope'
  | 'posterRole'
  | 'entityAddress'
  | 'postedBy'
  | 'content'
  | 'content__id'
  | 'content__protocol'
  | 'content__pointer'
  | 'contentSchema'
  | 'postDecorator'
  | 'timestamp';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

/** columns and relationships of "Application" */
export type Application = {
  amount: Scalars['numeric'];
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  grant_id: Scalars['String'];
  id: Scalars['String'];
  index: Scalars['Int'];
  metadata_id: Scalars['String'];
  receivingAddress: Scalars['String'];
  status: Scalars['Int'];
  timestamp: Scalars['Int'];
};

/** order by aggregate values of table "Application" */
export type Application_aggregate_order_by = {
  avg?: InputMaybe<Application_avg_order_by>;
  count?: InputMaybe<order_by>;
  max?: InputMaybe<Application_max_order_by>;
  min?: InputMaybe<Application_min_order_by>;
  stddev?: InputMaybe<Application_stddev_order_by>;
  stddev_pop?: InputMaybe<Application_stddev_pop_order_by>;
  stddev_samp?: InputMaybe<Application_stddev_samp_order_by>;
  sum?: InputMaybe<Application_sum_order_by>;
  var_pop?: InputMaybe<Application_var_pop_order_by>;
  var_samp?: InputMaybe<Application_var_samp_order_by>;
  variance?: InputMaybe<Application_variance_order_by>;
};

/** order by avg() on columns of table "Application" */
export type Application_avg_order_by = {
  amount?: InputMaybe<order_by>;
  index?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
};

/** Boolean expression to filter rows from the table "Application". All fields are combined with a logical 'AND'. */
export type Application_bool_exp = {
  _and?: InputMaybe<Array<Application_bool_exp>>;
  _not?: InputMaybe<Application_bool_exp>;
  _or?: InputMaybe<Array<Application_bool_exp>>;
  amount?: InputMaybe<numeric_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  grant?: InputMaybe<Grant_bool_exp>;
  grant_id?: InputMaybe<String_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  index?: InputMaybe<Int_comparison_exp>;
  metadata?: InputMaybe<RawMetadata_bool_exp>;
  metadata_id?: InputMaybe<String_comparison_exp>;
  receivingAddress?: InputMaybe<String_comparison_exp>;
  status?: InputMaybe<Int_comparison_exp>;
  timestamp?: InputMaybe<Int_comparison_exp>;
};

/** order by max() on columns of table "Application" */
export type Application_max_order_by = {
  amount?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  grant_id?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  index?: InputMaybe<order_by>;
  metadata_id?: InputMaybe<order_by>;
  receivingAddress?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
};

/** order by min() on columns of table "Application" */
export type Application_min_order_by = {
  amount?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  grant_id?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  index?: InputMaybe<order_by>;
  metadata_id?: InputMaybe<order_by>;
  receivingAddress?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
};

/** Ordering options when selecting data from "Application". */
export type Application_order_by = {
  amount?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  grant?: InputMaybe<Grant_order_by>;
  grant_id?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  index?: InputMaybe<order_by>;
  metadata?: InputMaybe<RawMetadata_order_by>;
  metadata_id?: InputMaybe<order_by>;
  receivingAddress?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
};

/** select columns of table "Application" */
export type Application_select_column =
  /** column name */
  | 'amount'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'grant_id'
  /** column name */
  | 'id'
  /** column name */
  | 'index'
  /** column name */
  | 'metadata_id'
  /** column name */
  | 'receivingAddress'
  /** column name */
  | 'status'
  /** column name */
  | 'timestamp';

/** order by stddev() on columns of table "Application" */
export type Application_stddev_order_by = {
  amount?: InputMaybe<order_by>;
  index?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
};

/** order by stddev_pop() on columns of table "Application" */
export type Application_stddev_pop_order_by = {
  amount?: InputMaybe<order_by>;
  index?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
};

/** order by stddev_samp() on columns of table "Application" */
export type Application_stddev_samp_order_by = {
  amount?: InputMaybe<order_by>;
  index?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
};

/** Streaming cursor of the table "Application" */
export type Application_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: Application_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Application_stream_cursor_value_input = {
  amount?: InputMaybe<Scalars['numeric']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  grant_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['Int']>;
  metadata_id?: InputMaybe<Scalars['String']>;
  receivingAddress?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  timestamp?: InputMaybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Application" */
export type Application_sum_order_by = {
  amount?: InputMaybe<order_by>;
  index?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
};

/** order by var_pop() on columns of table "Application" */
export type Application_var_pop_order_by = {
  amount?: InputMaybe<order_by>;
  index?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
};

/** order by var_samp() on columns of table "Application" */
export type Application_var_samp_order_by = {
  amount?: InputMaybe<order_by>;
  index?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
};

/** order by variance() on columns of table "Application" */
export type Application_variance_order_by = {
  amount?: InputMaybe<order_by>;
  index?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
};

/** columns and relationships of "Badge" */
export type Badge = {
  amount: Scalars['numeric'];
  dao: Scalars['String'];
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  id: Scalars['String'];
  reason_id: Scalars['String'];
  /** An object relationship */
  template?: Maybe<BadgeTemplate>;
  template_id: Scalars['String'];
  /** An object relationship */
  wearer?: Maybe<BadgeHolder>;
  wearer_id: Scalars['String'];
};

/** columns and relationships of "BadgeHolder" */
export type BadgeHolder = {
  address: Scalars['String'];
  badgeBalance: Scalars['numeric'];
  /** An array relationship */
  badges: Array<Badge>;
  dao: Scalars['String'];
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  id: Scalars['String'];
  /** An object relationship */
  shaman?: Maybe<ScaffoldShaman>;
  shaman_id: Scalars['String'];
};


/** columns and relationships of "BadgeHolder" */
export type BadgeHolderbadgesArgs = {
  distinct_on?: InputMaybe<Array<Badge_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Badge_order_by>>;
  where?: InputMaybe<Badge_bool_exp>;
};

/** Boolean expression to filter rows from the table "BadgeHolder". All fields are combined with a logical 'AND'. */
export type BadgeHolder_bool_exp = {
  _and?: InputMaybe<Array<BadgeHolder_bool_exp>>;
  _not?: InputMaybe<BadgeHolder_bool_exp>;
  _or?: InputMaybe<Array<BadgeHolder_bool_exp>>;
  address?: InputMaybe<String_comparison_exp>;
  badgeBalance?: InputMaybe<numeric_comparison_exp>;
  badges?: InputMaybe<Badge_bool_exp>;
  dao?: InputMaybe<String_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  shaman?: InputMaybe<ScaffoldShaman_bool_exp>;
  shaman_id?: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "BadgeHolder". */
export type BadgeHolder_order_by = {
  address?: InputMaybe<order_by>;
  badgeBalance?: InputMaybe<order_by>;
  badges_aggregate?: InputMaybe<Badge_aggregate_order_by>;
  dao?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  shaman?: InputMaybe<ScaffoldShaman_order_by>;
  shaman_id?: InputMaybe<order_by>;
};

/** select columns of table "BadgeHolder" */
export type BadgeHolder_select_column =
  /** column name */
  | 'address'
  /** column name */
  | 'badgeBalance'
  /** column name */
  | 'dao'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'id'
  /** column name */
  | 'shaman_id';

/** Streaming cursor of the table "BadgeHolder" */
export type BadgeHolder_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: BadgeHolder_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type BadgeHolder_stream_cursor_value_input = {
  address?: InputMaybe<Scalars['String']>;
  badgeBalance?: InputMaybe<Scalars['numeric']>;
  dao?: InputMaybe<Scalars['String']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  shaman_id?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "BadgeTemplate" */
export type BadgeTemplate = {
  amount: Scalars['numeric'];
  badgeId: Scalars['numeric'];
  /** An array relationship */
  badges: Array<Badge>;
  dao: Scalars['String'];
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  exists: Scalars['Boolean'];
  hasFixedAmount: Scalars['Boolean'];
  id: Scalars['String'];
  isSlash: Scalars['Boolean'];
  isVotingToken: Scalars['Boolean'];
  metadata_id: Scalars['String'];
  name: Scalars['String'];
  /** An object relationship */
  shaman?: Maybe<ScaffoldShaman>;
  shaman_id: Scalars['String'];
};


/** columns and relationships of "BadgeTemplate" */
export type BadgeTemplatebadgesArgs = {
  distinct_on?: InputMaybe<Array<Badge_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Badge_order_by>>;
  where?: InputMaybe<Badge_bool_exp>;
};

/** order by aggregate values of table "BadgeTemplate" */
export type BadgeTemplate_aggregate_order_by = {
  avg?: InputMaybe<BadgeTemplate_avg_order_by>;
  count?: InputMaybe<order_by>;
  max?: InputMaybe<BadgeTemplate_max_order_by>;
  min?: InputMaybe<BadgeTemplate_min_order_by>;
  stddev?: InputMaybe<BadgeTemplate_stddev_order_by>;
  stddev_pop?: InputMaybe<BadgeTemplate_stddev_pop_order_by>;
  stddev_samp?: InputMaybe<BadgeTemplate_stddev_samp_order_by>;
  sum?: InputMaybe<BadgeTemplate_sum_order_by>;
  var_pop?: InputMaybe<BadgeTemplate_var_pop_order_by>;
  var_samp?: InputMaybe<BadgeTemplate_var_samp_order_by>;
  variance?: InputMaybe<BadgeTemplate_variance_order_by>;
};

/** order by avg() on columns of table "BadgeTemplate" */
export type BadgeTemplate_avg_order_by = {
  amount?: InputMaybe<order_by>;
  badgeId?: InputMaybe<order_by>;
};

/** Boolean expression to filter rows from the table "BadgeTemplate". All fields are combined with a logical 'AND'. */
export type BadgeTemplate_bool_exp = {
  _and?: InputMaybe<Array<BadgeTemplate_bool_exp>>;
  _not?: InputMaybe<BadgeTemplate_bool_exp>;
  _or?: InputMaybe<Array<BadgeTemplate_bool_exp>>;
  amount?: InputMaybe<numeric_comparison_exp>;
  badgeId?: InputMaybe<numeric_comparison_exp>;
  badges?: InputMaybe<Badge_bool_exp>;
  dao?: InputMaybe<String_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  exists?: InputMaybe<Boolean_comparison_exp>;
  hasFixedAmount?: InputMaybe<Boolean_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  isSlash?: InputMaybe<Boolean_comparison_exp>;
  isVotingToken?: InputMaybe<Boolean_comparison_exp>;
  metadata?: InputMaybe<RawMetadata_bool_exp>;
  metadata_id?: InputMaybe<String_comparison_exp>;
  name?: InputMaybe<String_comparison_exp>;
  shaman?: InputMaybe<ScaffoldShaman_bool_exp>;
  shaman_id?: InputMaybe<String_comparison_exp>;
};

/** order by max() on columns of table "BadgeTemplate" */
export type BadgeTemplate_max_order_by = {
  amount?: InputMaybe<order_by>;
  badgeId?: InputMaybe<order_by>;
  dao?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  metadata_id?: InputMaybe<order_by>;
  name?: InputMaybe<order_by>;
  shaman_id?: InputMaybe<order_by>;
};

/** order by min() on columns of table "BadgeTemplate" */
export type BadgeTemplate_min_order_by = {
  amount?: InputMaybe<order_by>;
  badgeId?: InputMaybe<order_by>;
  dao?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  metadata_id?: InputMaybe<order_by>;
  name?: InputMaybe<order_by>;
  shaman_id?: InputMaybe<order_by>;
};

/** Ordering options when selecting data from "BadgeTemplate". */
export type BadgeTemplate_order_by = {
  amount?: InputMaybe<order_by>;
  badgeId?: InputMaybe<order_by>;
  badges_aggregate?: InputMaybe<Badge_aggregate_order_by>;
  dao?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  exists?: InputMaybe<order_by>;
  hasFixedAmount?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  isSlash?: InputMaybe<order_by>;
  isVotingToken?: InputMaybe<order_by>;
  metadata?: InputMaybe<RawMetadata_order_by>;
  metadata_id?: InputMaybe<order_by>;
  name?: InputMaybe<order_by>;
  shaman?: InputMaybe<ScaffoldShaman_order_by>;
  shaman_id?: InputMaybe<order_by>;
};

/** select columns of table "BadgeTemplate" */
export type BadgeTemplate_select_column =
  /** column name */
  | 'amount'
  /** column name */
  | 'badgeId'
  /** column name */
  | 'dao'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'exists'
  /** column name */
  | 'hasFixedAmount'
  /** column name */
  | 'id'
  /** column name */
  | 'isSlash'
  /** column name */
  | 'isVotingToken'
  /** column name */
  | 'metadata_id'
  /** column name */
  | 'name'
  /** column name */
  | 'shaman_id';

/** order by stddev() on columns of table "BadgeTemplate" */
export type BadgeTemplate_stddev_order_by = {
  amount?: InputMaybe<order_by>;
  badgeId?: InputMaybe<order_by>;
};

/** order by stddev_pop() on columns of table "BadgeTemplate" */
export type BadgeTemplate_stddev_pop_order_by = {
  amount?: InputMaybe<order_by>;
  badgeId?: InputMaybe<order_by>;
};

/** order by stddev_samp() on columns of table "BadgeTemplate" */
export type BadgeTemplate_stddev_samp_order_by = {
  amount?: InputMaybe<order_by>;
  badgeId?: InputMaybe<order_by>;
};

/** Streaming cursor of the table "BadgeTemplate" */
export type BadgeTemplate_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: BadgeTemplate_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type BadgeTemplate_stream_cursor_value_input = {
  amount?: InputMaybe<Scalars['numeric']>;
  badgeId?: InputMaybe<Scalars['numeric']>;
  dao?: InputMaybe<Scalars['String']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  hasFixedAmount?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  isSlash?: InputMaybe<Scalars['Boolean']>;
  isVotingToken?: InputMaybe<Scalars['Boolean']>;
  metadata_id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  shaman_id?: InputMaybe<Scalars['String']>;
};

/** order by sum() on columns of table "BadgeTemplate" */
export type BadgeTemplate_sum_order_by = {
  amount?: InputMaybe<order_by>;
  badgeId?: InputMaybe<order_by>;
};

/** order by var_pop() on columns of table "BadgeTemplate" */
export type BadgeTemplate_var_pop_order_by = {
  amount?: InputMaybe<order_by>;
  badgeId?: InputMaybe<order_by>;
};

/** order by var_samp() on columns of table "BadgeTemplate" */
export type BadgeTemplate_var_samp_order_by = {
  amount?: InputMaybe<order_by>;
  badgeId?: InputMaybe<order_by>;
};

/** order by variance() on columns of table "BadgeTemplate" */
export type BadgeTemplate_variance_order_by = {
  amount?: InputMaybe<order_by>;
  badgeId?: InputMaybe<order_by>;
};

/** order by aggregate values of table "Badge" */
export type Badge_aggregate_order_by = {
  avg?: InputMaybe<Badge_avg_order_by>;
  count?: InputMaybe<order_by>;
  max?: InputMaybe<Badge_max_order_by>;
  min?: InputMaybe<Badge_min_order_by>;
  stddev?: InputMaybe<Badge_stddev_order_by>;
  stddev_pop?: InputMaybe<Badge_stddev_pop_order_by>;
  stddev_samp?: InputMaybe<Badge_stddev_samp_order_by>;
  sum?: InputMaybe<Badge_sum_order_by>;
  var_pop?: InputMaybe<Badge_var_pop_order_by>;
  var_samp?: InputMaybe<Badge_var_samp_order_by>;
  variance?: InputMaybe<Badge_variance_order_by>;
};

/** order by avg() on columns of table "Badge" */
export type Badge_avg_order_by = {
  amount?: InputMaybe<order_by>;
};

/** Boolean expression to filter rows from the table "Badge". All fields are combined with a logical 'AND'. */
export type Badge_bool_exp = {
  _and?: InputMaybe<Array<Badge_bool_exp>>;
  _not?: InputMaybe<Badge_bool_exp>;
  _or?: InputMaybe<Array<Badge_bool_exp>>;
  amount?: InputMaybe<numeric_comparison_exp>;
  dao?: InputMaybe<String_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  reason?: InputMaybe<RawMetadata_bool_exp>;
  reason_id?: InputMaybe<String_comparison_exp>;
  template?: InputMaybe<BadgeTemplate_bool_exp>;
  template_id?: InputMaybe<String_comparison_exp>;
  wearer?: InputMaybe<BadgeHolder_bool_exp>;
  wearer_id?: InputMaybe<String_comparison_exp>;
};

/** order by max() on columns of table "Badge" */
export type Badge_max_order_by = {
  amount?: InputMaybe<order_by>;
  dao?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  reason_id?: InputMaybe<order_by>;
  template_id?: InputMaybe<order_by>;
  wearer_id?: InputMaybe<order_by>;
};

/** order by min() on columns of table "Badge" */
export type Badge_min_order_by = {
  amount?: InputMaybe<order_by>;
  dao?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  reason_id?: InputMaybe<order_by>;
  template_id?: InputMaybe<order_by>;
  wearer_id?: InputMaybe<order_by>;
};

/** Ordering options when selecting data from "Badge". */
export type Badge_order_by = {
  amount?: InputMaybe<order_by>;
  dao?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  reason?: InputMaybe<RawMetadata_order_by>;
  reason_id?: InputMaybe<order_by>;
  template?: InputMaybe<BadgeTemplate_order_by>;
  template_id?: InputMaybe<order_by>;
  wearer?: InputMaybe<BadgeHolder_order_by>;
  wearer_id?: InputMaybe<order_by>;
};

/** select columns of table "Badge" */
export type Badge_select_column =
  /** column name */
  | 'amount'
  /** column name */
  | 'dao'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'id'
  /** column name */
  | 'reason_id'
  /** column name */
  | 'template_id'
  /** column name */
  | 'wearer_id';

/** order by stddev() on columns of table "Badge" */
export type Badge_stddev_order_by = {
  amount?: InputMaybe<order_by>;
};

/** order by stddev_pop() on columns of table "Badge" */
export type Badge_stddev_pop_order_by = {
  amount?: InputMaybe<order_by>;
};

/** order by stddev_samp() on columns of table "Badge" */
export type Badge_stddev_samp_order_by = {
  amount?: InputMaybe<order_by>;
};

/** Streaming cursor of the table "Badge" */
export type Badge_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: Badge_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Badge_stream_cursor_value_input = {
  amount?: InputMaybe<Scalars['numeric']>;
  dao?: InputMaybe<Scalars['String']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  reason_id?: InputMaybe<Scalars['String']>;
  template_id?: InputMaybe<Scalars['String']>;
  wearer_id?: InputMaybe<Scalars['String']>;
};

/** order by sum() on columns of table "Badge" */
export type Badge_sum_order_by = {
  amount?: InputMaybe<order_by>;
};

/** order by var_pop() on columns of table "Badge" */
export type Badge_var_pop_order_by = {
  amount?: InputMaybe<order_by>;
};

/** order by var_samp() on columns of table "Badge" */
export type Badge_var_samp_order_by = {
  amount?: InputMaybe<order_by>;
};

/** order by variance() on columns of table "Badge" */
export type Badge_variance_order_by = {
  amount?: InputMaybe<order_by>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_comparison_exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** columns and relationships of "Contest" */
export type Contest = {
  /** An object relationship */
  choicesModule?: Maybe<StemModule>;
  choicesModule_id: Scalars['String'];
  contestAddress: Scalars['String'];
  contestStatus: Scalars['numeric'];
  contestVersion: Scalars['String'];
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  /** An object relationship */
  executionModule?: Maybe<StemModule>;
  executionModule_id: Scalars['String'];
  filterTag: Scalars['String'];
  id: Scalars['String'];
  isContinuous: Scalars['Boolean'];
  isRetractable: Scalars['Boolean'];
  /** An object relationship */
  pointsModule?: Maybe<StemModule>;
  pointsModule_id: Scalars['String'];
  /** An object relationship */
  votesModule?: Maybe<StemModule>;
  votesModule_id: Scalars['String'];
};

/** columns and relationships of "ContestClone" */
export type ContestClone = {
  contestAddress: Scalars['String'];
  contestVersion: Scalars['String'];
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  filterTag: Scalars['String'];
  id: Scalars['String'];
};

/** Boolean expression to filter rows from the table "ContestClone". All fields are combined with a logical 'AND'. */
export type ContestClone_bool_exp = {
  _and?: InputMaybe<Array<ContestClone_bool_exp>>;
  _not?: InputMaybe<ContestClone_bool_exp>;
  _or?: InputMaybe<Array<ContestClone_bool_exp>>;
  contestAddress?: InputMaybe<String_comparison_exp>;
  contestVersion?: InputMaybe<String_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  filterTag?: InputMaybe<String_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "ContestClone". */
export type ContestClone_order_by = {
  contestAddress?: InputMaybe<order_by>;
  contestVersion?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  filterTag?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
};

/** select columns of table "ContestClone" */
export type ContestClone_select_column =
  /** column name */
  | 'contestAddress'
  /** column name */
  | 'contestVersion'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'filterTag'
  /** column name */
  | 'id';

/** Streaming cursor of the table "ContestClone" */
export type ContestClone_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: ContestClone_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type ContestClone_stream_cursor_value_input = {
  contestAddress?: InputMaybe<Scalars['String']>;
  contestVersion?: InputMaybe<Scalars['String']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  filterTag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "ContestTemplate" */
export type ContestTemplate = {
  active: Scalars['Boolean'];
  contestAddress: Scalars['String'];
  contestVersion: Scalars['String'];
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  id: Scalars['String'];
  mdPointer: Scalars['String'];
  mdProtocol: Scalars['numeric'];
};

/** Boolean expression to filter rows from the table "ContestTemplate". All fields are combined with a logical 'AND'. */
export type ContestTemplate_bool_exp = {
  _and?: InputMaybe<Array<ContestTemplate_bool_exp>>;
  _not?: InputMaybe<ContestTemplate_bool_exp>;
  _or?: InputMaybe<Array<ContestTemplate_bool_exp>>;
  active?: InputMaybe<Boolean_comparison_exp>;
  contestAddress?: InputMaybe<String_comparison_exp>;
  contestVersion?: InputMaybe<String_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  mdPointer?: InputMaybe<String_comparison_exp>;
  mdProtocol?: InputMaybe<numeric_comparison_exp>;
};

/** Ordering options when selecting data from "ContestTemplate". */
export type ContestTemplate_order_by = {
  active?: InputMaybe<order_by>;
  contestAddress?: InputMaybe<order_by>;
  contestVersion?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  mdPointer?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
};

/** select columns of table "ContestTemplate" */
export type ContestTemplate_select_column =
  /** column name */
  | 'active'
  /** column name */
  | 'contestAddress'
  /** column name */
  | 'contestVersion'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'id'
  /** column name */
  | 'mdPointer'
  /** column name */
  | 'mdProtocol';

/** Streaming cursor of the table "ContestTemplate" */
export type ContestTemplate_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: ContestTemplate_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type ContestTemplate_stream_cursor_value_input = {
  active?: InputMaybe<Scalars['Boolean']>;
  contestAddress?: InputMaybe<Scalars['String']>;
  contestVersion?: InputMaybe<Scalars['String']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  mdPointer?: InputMaybe<Scalars['String']>;
  mdProtocol?: InputMaybe<Scalars['numeric']>;
};

/** Boolean expression to filter rows from the table "Contest". All fields are combined with a logical 'AND'. */
export type Contest_bool_exp = {
  _and?: InputMaybe<Array<Contest_bool_exp>>;
  _not?: InputMaybe<Contest_bool_exp>;
  _or?: InputMaybe<Array<Contest_bool_exp>>;
  choicesModule?: InputMaybe<StemModule_bool_exp>;
  choicesModule_id?: InputMaybe<String_comparison_exp>;
  contestAddress?: InputMaybe<String_comparison_exp>;
  contestStatus?: InputMaybe<numeric_comparison_exp>;
  contestVersion?: InputMaybe<String_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  executionModule?: InputMaybe<StemModule_bool_exp>;
  executionModule_id?: InputMaybe<String_comparison_exp>;
  filterTag?: InputMaybe<String_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  isContinuous?: InputMaybe<Boolean_comparison_exp>;
  isRetractable?: InputMaybe<Boolean_comparison_exp>;
  pointsModule?: InputMaybe<StemModule_bool_exp>;
  pointsModule_id?: InputMaybe<String_comparison_exp>;
  votesModule?: InputMaybe<StemModule_bool_exp>;
  votesModule_id?: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "Contest". */
export type Contest_order_by = {
  choicesModule?: InputMaybe<StemModule_order_by>;
  choicesModule_id?: InputMaybe<order_by>;
  contestAddress?: InputMaybe<order_by>;
  contestStatus?: InputMaybe<order_by>;
  contestVersion?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  executionModule?: InputMaybe<StemModule_order_by>;
  executionModule_id?: InputMaybe<order_by>;
  filterTag?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  isContinuous?: InputMaybe<order_by>;
  isRetractable?: InputMaybe<order_by>;
  pointsModule?: InputMaybe<StemModule_order_by>;
  pointsModule_id?: InputMaybe<order_by>;
  votesModule?: InputMaybe<StemModule_order_by>;
  votesModule_id?: InputMaybe<order_by>;
};

/** select columns of table "Contest" */
export type Contest_select_column =
  /** column name */
  | 'choicesModule_id'
  /** column name */
  | 'contestAddress'
  /** column name */
  | 'contestStatus'
  /** column name */
  | 'contestVersion'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'executionModule_id'
  /** column name */
  | 'filterTag'
  /** column name */
  | 'id'
  /** column name */
  | 'isContinuous'
  /** column name */
  | 'isRetractable'
  /** column name */
  | 'pointsModule_id'
  /** column name */
  | 'votesModule_id';

/** Streaming cursor of the table "Contest" */
export type Contest_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: Contest_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contest_stream_cursor_value_input = {
  choicesModule_id?: InputMaybe<Scalars['String']>;
  contestAddress?: InputMaybe<Scalars['String']>;
  contestStatus?: InputMaybe<Scalars['numeric']>;
  contestVersion?: InputMaybe<Scalars['String']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  executionModule_id?: InputMaybe<Scalars['String']>;
  filterTag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isContinuous?: InputMaybe<Scalars['Boolean']>;
  isRetractable?: InputMaybe<Scalars['Boolean']>;
  pointsModule_id?: InputMaybe<Scalars['String']>;
  votesModule_id?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "DAOToken" */
export type DAOToken = {
  address: Scalars['String'];
  dao: Scalars['String'];
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  id: Scalars['String'];
  /** An object relationship */
  shaman?: Maybe<ScaffoldShaman>;
  shaman_id: Scalars['String'];
  symbol: Scalars['String'];
};

/** Boolean expression to filter rows from the table "DAOToken". All fields are combined with a logical 'AND'. */
export type DAOToken_bool_exp = {
  _and?: InputMaybe<Array<DAOToken_bool_exp>>;
  _not?: InputMaybe<DAOToken_bool_exp>;
  _or?: InputMaybe<Array<DAOToken_bool_exp>>;
  address?: InputMaybe<String_comparison_exp>;
  dao?: InputMaybe<String_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  shaman?: InputMaybe<ScaffoldShaman_bool_exp>;
  shaman_id?: InputMaybe<String_comparison_exp>;
  symbol?: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "DAOToken". */
export type DAOToken_order_by = {
  address?: InputMaybe<order_by>;
  dao?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  shaman?: InputMaybe<ScaffoldShaman_order_by>;
  shaman_id?: InputMaybe<order_by>;
  symbol?: InputMaybe<order_by>;
};

/** select columns of table "DAOToken" */
export type DAOToken_select_column =
  /** column name */
  | 'address'
  /** column name */
  | 'dao'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'id'
  /** column name */
  | 'shaman_id'
  /** column name */
  | 'symbol';

/** Streaming cursor of the table "DAOToken" */
export type DAOToken_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: DAOToken_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type DAOToken_stream_cursor_value_input = {
  address?: InputMaybe<Scalars['String']>;
  dao?: InputMaybe<Scalars['String']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  shaman_id?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "DualTokenPointsParams" */
export type DualTokenPointsParams = {
  contextTokenAddress: Scalars['String'];
  daoTokenAddress: Scalars['String'];
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  id: Scalars['String'];
  votingCheckpoint: Scalars['numeric'];
};

/** Boolean expression to filter rows from the table "DualTokenPointsParams". All fields are combined with a logical 'AND'. */
export type DualTokenPointsParams_bool_exp = {
  _and?: InputMaybe<Array<DualTokenPointsParams_bool_exp>>;
  _not?: InputMaybe<DualTokenPointsParams_bool_exp>;
  _or?: InputMaybe<Array<DualTokenPointsParams_bool_exp>>;
  contextTokenAddress?: InputMaybe<String_comparison_exp>;
  daoTokenAddress?: InputMaybe<String_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  votingCheckpoint?: InputMaybe<numeric_comparison_exp>;
};

/** Ordering options when selecting data from "DualTokenPointsParams". */
export type DualTokenPointsParams_order_by = {
  contextTokenAddress?: InputMaybe<order_by>;
  daoTokenAddress?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  votingCheckpoint?: InputMaybe<order_by>;
};

/** select columns of table "DualTokenPointsParams" */
export type DualTokenPointsParams_select_column =
  /** column name */
  | 'contextTokenAddress'
  /** column name */
  | 'daoTokenAddress'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'id'
  /** column name */
  | 'votingCheckpoint';

/** Streaming cursor of the table "DualTokenPointsParams" */
export type DualTokenPointsParams_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: DualTokenPointsParams_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type DualTokenPointsParams_stream_cursor_value_input = {
  contextTokenAddress?: InputMaybe<Scalars['String']>;
  daoTokenAddress?: InputMaybe<Scalars['String']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  votingCheckpoint?: InputMaybe<Scalars['numeric']>;
};

/** columns and relationships of "DualTokenTVParams" */
export type DualTokenTVParams = {
  contextTokenAddress: Scalars['String'];
  daoTokenAddress: Scalars['String'];
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  id: Scalars['String'];
  voteDuration: Scalars['numeric'];
};

/** Boolean expression to filter rows from the table "DualTokenTVParams". All fields are combined with a logical 'AND'. */
export type DualTokenTVParams_bool_exp = {
  _and?: InputMaybe<Array<DualTokenTVParams_bool_exp>>;
  _not?: InputMaybe<DualTokenTVParams_bool_exp>;
  _or?: InputMaybe<Array<DualTokenTVParams_bool_exp>>;
  contextTokenAddress?: InputMaybe<String_comparison_exp>;
  daoTokenAddress?: InputMaybe<String_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  voteDuration?: InputMaybe<numeric_comparison_exp>;
};

/** Ordering options when selecting data from "DualTokenTVParams". */
export type DualTokenTVParams_order_by = {
  contextTokenAddress?: InputMaybe<order_by>;
  daoTokenAddress?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  voteDuration?: InputMaybe<order_by>;
};

/** select columns of table "DualTokenTVParams" */
export type DualTokenTVParams_select_column =
  /** column name */
  | 'contextTokenAddress'
  /** column name */
  | 'daoTokenAddress'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'id'
  /** column name */
  | 'voteDuration';

/** Streaming cursor of the table "DualTokenTVParams" */
export type DualTokenTVParams_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: DualTokenTVParams_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type DualTokenTVParams_stream_cursor_value_input = {
  contextTokenAddress?: InputMaybe<Scalars['String']>;
  daoTokenAddress?: InputMaybe<Scalars['String']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  voteDuration?: InputMaybe<Scalars['numeric']>;
};

/** columns and relationships of "ERCPointParams" */
export type ERCPointParams = {
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  id: Scalars['String'];
  voteTokenAddress: Scalars['String'];
  votingCheckpoint: Scalars['numeric'];
};

/** Boolean expression to filter rows from the table "ERCPointParams". All fields are combined with a logical 'AND'. */
export type ERCPointParams_bool_exp = {
  _and?: InputMaybe<Array<ERCPointParams_bool_exp>>;
  _not?: InputMaybe<ERCPointParams_bool_exp>;
  _or?: InputMaybe<Array<ERCPointParams_bool_exp>>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  voteTokenAddress?: InputMaybe<String_comparison_exp>;
  votingCheckpoint?: InputMaybe<numeric_comparison_exp>;
};

/** Ordering options when selecting data from "ERCPointParams". */
export type ERCPointParams_order_by = {
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  voteTokenAddress?: InputMaybe<order_by>;
  votingCheckpoint?: InputMaybe<order_by>;
};

/** select columns of table "ERCPointParams" */
export type ERCPointParams_select_column =
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'id'
  /** column name */
  | 'voteTokenAddress'
  /** column name */
  | 'votingCheckpoint';

/** Streaming cursor of the table "ERCPointParams" */
export type ERCPointParams_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: ERCPointParams_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type ERCPointParams_stream_cursor_value_input = {
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  voteTokenAddress?: InputMaybe<Scalars['String']>;
  votingCheckpoint?: InputMaybe<Scalars['numeric']>;
};

/** columns and relationships of "EnvioTX" */
export type EnvioTX = {
  blockNumber: Scalars['numeric'];
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  id: Scalars['String'];
  srcAddress: Scalars['String'];
  txHash: Scalars['String'];
  txOrigin?: Maybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "EnvioTX". All fields are combined with a logical 'AND'. */
export type EnvioTX_bool_exp = {
  _and?: InputMaybe<Array<EnvioTX_bool_exp>>;
  _not?: InputMaybe<EnvioTX_bool_exp>;
  _or?: InputMaybe<Array<EnvioTX_bool_exp>>;
  blockNumber?: InputMaybe<numeric_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  srcAddress?: InputMaybe<String_comparison_exp>;
  txHash?: InputMaybe<String_comparison_exp>;
  txOrigin?: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "EnvioTX". */
export type EnvioTX_order_by = {
  blockNumber?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  srcAddress?: InputMaybe<order_by>;
  txHash?: InputMaybe<order_by>;
  txOrigin?: InputMaybe<order_by>;
};

/** select columns of table "EnvioTX" */
export type EnvioTX_select_column =
  /** column name */
  | 'blockNumber'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'id'
  /** column name */
  | 'srcAddress'
  /** column name */
  | 'txHash'
  /** column name */
  | 'txOrigin';

/** Streaming cursor of the table "EnvioTX" */
export type EnvioTX_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: EnvioTX_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type EnvioTX_stream_cursor_value_input = {
  blockNumber?: InputMaybe<Scalars['numeric']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  srcAddress?: InputMaybe<Scalars['String']>;
  txHash?: InputMaybe<Scalars['String']>;
  txOrigin?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "EventPost" */
export type EventPost = {
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  hatId: Scalars['numeric'];
  /** An object relationship */
  hatsPoster?: Maybe<HatsPoster>;
  hatsPoster_id: Scalars['String'];
  id: Scalars['String'];
  mdPointer: Scalars['String'];
  mdProtocol: Scalars['numeric'];
  tag: Scalars['String'];
};

/** order by aggregate values of table "EventPost" */
export type EventPost_aggregate_order_by = {
  avg?: InputMaybe<EventPost_avg_order_by>;
  count?: InputMaybe<order_by>;
  max?: InputMaybe<EventPost_max_order_by>;
  min?: InputMaybe<EventPost_min_order_by>;
  stddev?: InputMaybe<EventPost_stddev_order_by>;
  stddev_pop?: InputMaybe<EventPost_stddev_pop_order_by>;
  stddev_samp?: InputMaybe<EventPost_stddev_samp_order_by>;
  sum?: InputMaybe<EventPost_sum_order_by>;
  var_pop?: InputMaybe<EventPost_var_pop_order_by>;
  var_samp?: InputMaybe<EventPost_var_samp_order_by>;
  variance?: InputMaybe<EventPost_variance_order_by>;
};

/** order by avg() on columns of table "EventPost" */
export type EventPost_avg_order_by = {
  hatId?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
};

/** Boolean expression to filter rows from the table "EventPost". All fields are combined with a logical 'AND'. */
export type EventPost_bool_exp = {
  _and?: InputMaybe<Array<EventPost_bool_exp>>;
  _not?: InputMaybe<EventPost_bool_exp>;
  _or?: InputMaybe<Array<EventPost_bool_exp>>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  hatId?: InputMaybe<numeric_comparison_exp>;
  hatsPoster?: InputMaybe<HatsPoster_bool_exp>;
  hatsPoster_id?: InputMaybe<String_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  mdPointer?: InputMaybe<String_comparison_exp>;
  mdProtocol?: InputMaybe<numeric_comparison_exp>;
  tag?: InputMaybe<String_comparison_exp>;
};

/** order by max() on columns of table "EventPost" */
export type EventPost_max_order_by = {
  db_write_timestamp?: InputMaybe<order_by>;
  hatId?: InputMaybe<order_by>;
  hatsPoster_id?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  mdPointer?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
  tag?: InputMaybe<order_by>;
};

/** order by min() on columns of table "EventPost" */
export type EventPost_min_order_by = {
  db_write_timestamp?: InputMaybe<order_by>;
  hatId?: InputMaybe<order_by>;
  hatsPoster_id?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  mdPointer?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
  tag?: InputMaybe<order_by>;
};

/** Ordering options when selecting data from "EventPost". */
export type EventPost_order_by = {
  db_write_timestamp?: InputMaybe<order_by>;
  hatId?: InputMaybe<order_by>;
  hatsPoster?: InputMaybe<HatsPoster_order_by>;
  hatsPoster_id?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  mdPointer?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
  tag?: InputMaybe<order_by>;
};

/** select columns of table "EventPost" */
export type EventPost_select_column =
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'hatId'
  /** column name */
  | 'hatsPoster_id'
  /** column name */
  | 'id'
  /** column name */
  | 'mdPointer'
  /** column name */
  | 'mdProtocol'
  /** column name */
  | 'tag';

/** order by stddev() on columns of table "EventPost" */
export type EventPost_stddev_order_by = {
  hatId?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
};

/** order by stddev_pop() on columns of table "EventPost" */
export type EventPost_stddev_pop_order_by = {
  hatId?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
};

/** order by stddev_samp() on columns of table "EventPost" */
export type EventPost_stddev_samp_order_by = {
  hatId?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
};

/** Streaming cursor of the table "EventPost" */
export type EventPost_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: EventPost_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type EventPost_stream_cursor_value_input = {
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  hatId?: InputMaybe<Scalars['numeric']>;
  hatsPoster_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  mdPointer?: InputMaybe<Scalars['String']>;
  mdProtocol?: InputMaybe<Scalars['numeric']>;
  tag?: InputMaybe<Scalars['String']>;
};

/** order by sum() on columns of table "EventPost" */
export type EventPost_sum_order_by = {
  hatId?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
};

/** order by var_pop() on columns of table "EventPost" */
export type EventPost_var_pop_order_by = {
  hatId?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
};

/** order by var_samp() on columns of table "EventPost" */
export type EventPost_var_samp_order_by = {
  hatId?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
};

/** order by variance() on columns of table "EventPost" */
export type EventPost_variance_order_by = {
  hatId?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
};

/** columns and relationships of "FactoryEventsSummary" */
export type FactoryEventsSummary = {
  address: Scalars['String'];
  admins: Array<Scalars['String']>;
  contestBuiltCount: Scalars['numeric'];
  contestCloneCount: Scalars['numeric'];
  contestTemplateCount: Scalars['numeric'];
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  id: Scalars['String'];
  moduleCloneCount: Scalars['numeric'];
  moduleTemplateCount: Scalars['numeric'];
};

/** Boolean expression to filter rows from the table "FactoryEventsSummary". All fields are combined with a logical 'AND'. */
export type FactoryEventsSummary_bool_exp = {
  _and?: InputMaybe<Array<FactoryEventsSummary_bool_exp>>;
  _not?: InputMaybe<FactoryEventsSummary_bool_exp>;
  _or?: InputMaybe<Array<FactoryEventsSummary_bool_exp>>;
  address?: InputMaybe<String_comparison_exp>;
  admins?: InputMaybe<String_array_comparison_exp>;
  contestBuiltCount?: InputMaybe<numeric_comparison_exp>;
  contestCloneCount?: InputMaybe<numeric_comparison_exp>;
  contestTemplateCount?: InputMaybe<numeric_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  moduleCloneCount?: InputMaybe<numeric_comparison_exp>;
  moduleTemplateCount?: InputMaybe<numeric_comparison_exp>;
};

/** Ordering options when selecting data from "FactoryEventsSummary". */
export type FactoryEventsSummary_order_by = {
  address?: InputMaybe<order_by>;
  admins?: InputMaybe<order_by>;
  contestBuiltCount?: InputMaybe<order_by>;
  contestCloneCount?: InputMaybe<order_by>;
  contestTemplateCount?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  moduleCloneCount?: InputMaybe<order_by>;
  moduleTemplateCount?: InputMaybe<order_by>;
};

/** select columns of table "FactoryEventsSummary" */
export type FactoryEventsSummary_select_column =
  /** column name */
  | 'address'
  /** column name */
  | 'admins'
  /** column name */
  | 'contestBuiltCount'
  /** column name */
  | 'contestCloneCount'
  /** column name */
  | 'contestTemplateCount'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'id'
  /** column name */
  | 'moduleCloneCount'
  /** column name */
  | 'moduleTemplateCount';

/** Streaming cursor of the table "FactoryEventsSummary" */
export type FactoryEventsSummary_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: FactoryEventsSummary_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type FactoryEventsSummary_stream_cursor_value_input = {
  address?: InputMaybe<Scalars['String']>;
  admins?: InputMaybe<Array<Scalars['String']>>;
  contestBuiltCount?: InputMaybe<Scalars['numeric']>;
  contestCloneCount?: InputMaybe<Scalars['numeric']>;
  contestTemplateCount?: InputMaybe<Scalars['numeric']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  moduleCloneCount?: InputMaybe<Scalars['numeric']>;
  moduleTemplateCount?: InputMaybe<Scalars['numeric']>;
};

/** columns and relationships of "FeedCard" */
export type FeedCard = {
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  domain_id?: Maybe<Scalars['String']>;
  /** An object relationship */
  embed?: Maybe<FeedItemEmbed>;
  embed_id?: Maybe<Scalars['String']>;
  externalLink?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  internalLink?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  /** An object relationship */
  object?: Maybe<FeedItemEntity>;
  object_id?: Maybe<Scalars['String']>;
  richTextContent_id?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['String']>;
  /** An object relationship */
  subject?: Maybe<FeedItemEntity>;
  subjectMetadataPointer: Scalars['String'];
  subject_id: Scalars['String'];
  tag: Scalars['String'];
  timestamp: Scalars['Int'];
};

/** Boolean expression to filter rows from the table "FeedCard". All fields are combined with a logical 'AND'. */
export type FeedCard_bool_exp = {
  _and?: InputMaybe<Array<FeedCard_bool_exp>>;
  _not?: InputMaybe<FeedCard_bool_exp>;
  _or?: InputMaybe<Array<FeedCard_bool_exp>>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  domain?: InputMaybe<GameManager_bool_exp>;
  domain_id?: InputMaybe<String_comparison_exp>;
  embed?: InputMaybe<FeedItemEmbed_bool_exp>;
  embed_id?: InputMaybe<String_comparison_exp>;
  externalLink?: InputMaybe<String_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  internalLink?: InputMaybe<String_comparison_exp>;
  message?: InputMaybe<String_comparison_exp>;
  object?: InputMaybe<FeedItemEntity_bool_exp>;
  object_id?: InputMaybe<String_comparison_exp>;
  richTextContent?: InputMaybe<RawMetadata_bool_exp>;
  richTextContent_id?: InputMaybe<String_comparison_exp>;
  sender?: InputMaybe<String_comparison_exp>;
  subject?: InputMaybe<FeedItemEntity_bool_exp>;
  subjectMetadataPointer?: InputMaybe<String_comparison_exp>;
  subject_id?: InputMaybe<String_comparison_exp>;
  tag?: InputMaybe<String_comparison_exp>;
  timestamp?: InputMaybe<Int_comparison_exp>;
};

/** Ordering options when selecting data from "FeedCard". */
export type FeedCard_order_by = {
  db_write_timestamp?: InputMaybe<order_by>;
  domain?: InputMaybe<GameManager_order_by>;
  domain_id?: InputMaybe<order_by>;
  embed?: InputMaybe<FeedItemEmbed_order_by>;
  embed_id?: InputMaybe<order_by>;
  externalLink?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  internalLink?: InputMaybe<order_by>;
  message?: InputMaybe<order_by>;
  object?: InputMaybe<FeedItemEntity_order_by>;
  object_id?: InputMaybe<order_by>;
  richTextContent?: InputMaybe<RawMetadata_order_by>;
  richTextContent_id?: InputMaybe<order_by>;
  sender?: InputMaybe<order_by>;
  subject?: InputMaybe<FeedItemEntity_order_by>;
  subjectMetadataPointer?: InputMaybe<order_by>;
  subject_id?: InputMaybe<order_by>;
  tag?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
};

/** select columns of table "FeedCard" */
export type FeedCard_select_column =
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'domain_id'
  /** column name */
  | 'embed_id'
  /** column name */
  | 'externalLink'
  /** column name */
  | 'id'
  /** column name */
  | 'internalLink'
  /** column name */
  | 'message'
  /** column name */
  | 'object_id'
  /** column name */
  | 'richTextContent_id'
  /** column name */
  | 'sender'
  /** column name */
  | 'subjectMetadataPointer'
  /** column name */
  | 'subject_id'
  /** column name */
  | 'tag'
  /** column name */
  | 'timestamp';

/** Streaming cursor of the table "FeedCard" */
export type FeedCard_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: FeedCard_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type FeedCard_stream_cursor_value_input = {
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  domain_id?: InputMaybe<Scalars['String']>;
  embed_id?: InputMaybe<Scalars['String']>;
  externalLink?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  internalLink?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  object_id?: InputMaybe<Scalars['String']>;
  richTextContent_id?: InputMaybe<Scalars['String']>;
  sender?: InputMaybe<Scalars['String']>;
  subjectMetadataPointer?: InputMaybe<Scalars['String']>;
  subject_id?: InputMaybe<Scalars['String']>;
  tag?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
};

/** Boolean expression to filter rows from the table "FeedItemEmbed". All fields are combined with a logical 'AND'. */
export type FeedItemEmbed_bool_exp = {
  _and?: InputMaybe<Array<FeedItemEmbed_bool_exp>>;
  _not?: InputMaybe<FeedItemEmbed_bool_exp>;
  _or?: InputMaybe<Array<FeedItemEmbed_bool_exp>>;
  content?: InputMaybe<String_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  key?: InputMaybe<String_comparison_exp>;
  pointer?: InputMaybe<String_comparison_exp>;
  protocol?: InputMaybe<numeric_comparison_exp>;
};

/** Ordering options when selecting data from "FeedItemEmbed". */
export type FeedItemEmbed_order_by = {
  content?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  key?: InputMaybe<order_by>;
  pointer?: InputMaybe<order_by>;
  protocol?: InputMaybe<order_by>;
};

/** select columns of table "FeedItemEmbed" */
export type FeedItemEmbed_select_column =
  /** column name */
  | 'content'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'id'
  /** column name */
  | 'key'
  /** column name */
  | 'pointer'
  /** column name */
  | 'protocol';

/** Streaming cursor of the table "FeedItemEmbed" */
export type FeedItemEmbed_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: FeedItemEmbed_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type FeedItemEmbed_stream_cursor_value_input = {
  content?: InputMaybe<Scalars['String']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  pointer?: InputMaybe<Scalars['String']>;
  protocol?: InputMaybe<Scalars['numeric']>;
};

/** Boolean expression to filter rows from the table "FeedItemEntity". All fields are combined with a logical 'AND'. */
export type FeedItemEntity_bool_exp = {
  _and?: InputMaybe<Array<FeedItemEntity_bool_exp>>;
  _not?: InputMaybe<FeedItemEntity_bool_exp>;
  _or?: InputMaybe<Array<FeedItemEntity_bool_exp>>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  name?: InputMaybe<String_comparison_exp>;
  playerType?: InputMaybe<Int_comparison_exp>;
};

/** Ordering options when selecting data from "FeedItemEntity". */
export type FeedItemEntity_order_by = {
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  name?: InputMaybe<order_by>;
  playerType?: InputMaybe<order_by>;
};

/** select columns of table "FeedItemEntity" */
export type FeedItemEntity_select_column =
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'playerType';

/** Streaming cursor of the table "FeedItemEntity" */
export type FeedItemEntity_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: FeedItemEntity_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type FeedItemEntity_stream_cursor_value_input = {
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  playerType?: InputMaybe<Scalars['Int']>;
};

/** columns and relationships of "GMInitParams" */
export type GMInitParams = {
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  gameFacilitatorId?: Maybe<Scalars['numeric']>;
  gmRootAccount?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** Boolean expression to filter rows from the table "GMInitParams". All fields are combined with a logical 'AND'. */
export type GMInitParams_bool_exp = {
  _and?: InputMaybe<Array<GMInitParams_bool_exp>>;
  _not?: InputMaybe<GMInitParams_bool_exp>;
  _or?: InputMaybe<Array<GMInitParams_bool_exp>>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  gameFacilitatorId?: InputMaybe<numeric_comparison_exp>;
  gmRootAccount?: InputMaybe<String_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "GMInitParams". */
export type GMInitParams_order_by = {
  db_write_timestamp?: InputMaybe<order_by>;
  gameFacilitatorId?: InputMaybe<order_by>;
  gmRootAccount?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
};

/** select columns of table "GMInitParams" */
export type GMInitParams_select_column =
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'gameFacilitatorId'
  /** column name */
  | 'gmRootAccount'
  /** column name */
  | 'id';

/** Streaming cursor of the table "GMInitParams" */
export type GMInitParams_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: GMInitParams_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type GMInitParams_stream_cursor_value_input = {
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  gameFacilitatorId?: InputMaybe<Scalars['numeric']>;
  gmRootAccount?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "GSVoter" */
export type GSVoter = {
  address: Scalars['String'];
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  id: Scalars['String'];
  /** An array relationship */
  votes: Array<ShipVote>;
};


/** columns and relationships of "GSVoter" */
export type GSVotervotesArgs = {
  distinct_on?: InputMaybe<Array<ShipVote_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ShipVote_order_by>>;
  where?: InputMaybe<ShipVote_bool_exp>;
};

/** Boolean expression to filter rows from the table "GSVoter". All fields are combined with a logical 'AND'. */
export type GSVoter_bool_exp = {
  _and?: InputMaybe<Array<GSVoter_bool_exp>>;
  _not?: InputMaybe<GSVoter_bool_exp>;
  _or?: InputMaybe<Array<GSVoter_bool_exp>>;
  address?: InputMaybe<String_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  votes?: InputMaybe<ShipVote_bool_exp>;
};

/** Ordering options when selecting data from "GSVoter". */
export type GSVoter_order_by = {
  address?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  votes_aggregate?: InputMaybe<ShipVote_aggregate_order_by>;
};

/** select columns of table "GSVoter" */
export type GSVoter_select_column =
  /** column name */
  | 'address'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'id';

/** Streaming cursor of the table "GSVoter" */
export type GSVoter_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: GSVoter_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type GSVoter_stream_cursor_value_input = {
  address?: InputMaybe<Scalars['String']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "GameManagerFactory" */
export type GameManagerFactory = {
  chainId: Scalars['Int'];
  createdAt: Scalars['Int'];
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  id: Scalars['String'];
  rootAccount: Scalars['String'];
};

/** Boolean expression to filter rows from the table "GameManagerFactory". All fields are combined with a logical 'AND'. */
export type GameManagerFactory_bool_exp = {
  _and?: InputMaybe<Array<GameManagerFactory_bool_exp>>;
  _not?: InputMaybe<GameManagerFactory_bool_exp>;
  _or?: InputMaybe<Array<GameManagerFactory_bool_exp>>;
  chainId?: InputMaybe<Int_comparison_exp>;
  createdAt?: InputMaybe<Int_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  rootAccount?: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "GameManagerFactory". */
export type GameManagerFactory_order_by = {
  chainId?: InputMaybe<order_by>;
  createdAt?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  rootAccount?: InputMaybe<order_by>;
};

/** select columns of table "GameManagerFactory" */
export type GameManagerFactory_select_column =
  /** column name */
  | 'chainId'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'id'
  /** column name */
  | 'rootAccount';

/** Streaming cursor of the table "GameManagerFactory" */
export type GameManagerFactory_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: GameManagerFactory_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type GameManagerFactory_stream_cursor_value_input = {
  chainId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['Int']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  rootAccount?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "GameManagerTemplate" */
export type GameManagerTemplate = {
  address: Scalars['String'];
  chainId: Scalars['Int'];
  createdAt: Scalars['Int'];
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  id: Scalars['String'];
  name: Scalars['String'];
};

/** Boolean expression to filter rows from the table "GameManagerTemplate". All fields are combined with a logical 'AND'. */
export type GameManagerTemplate_bool_exp = {
  _and?: InputMaybe<Array<GameManagerTemplate_bool_exp>>;
  _not?: InputMaybe<GameManagerTemplate_bool_exp>;
  _or?: InputMaybe<Array<GameManagerTemplate_bool_exp>>;
  address?: InputMaybe<String_comparison_exp>;
  chainId?: InputMaybe<Int_comparison_exp>;
  createdAt?: InputMaybe<Int_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  name?: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "GameManagerTemplate". */
export type GameManagerTemplate_order_by = {
  address?: InputMaybe<order_by>;
  chainId?: InputMaybe<order_by>;
  createdAt?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  name?: InputMaybe<order_by>;
};

/** select columns of table "GameManagerTemplate" */
export type GameManagerTemplate_select_column =
  /** column name */
  | 'address'
  /** column name */
  | 'chainId'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'id'
  /** column name */
  | 'name';

/** Streaming cursor of the table "GameManagerTemplate" */
export type GameManagerTemplate_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: GameManagerTemplate_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type GameManagerTemplate_stream_cursor_value_input = {
  address?: InputMaybe<Scalars['String']>;
  chainId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['Int']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "GameManager". All fields are combined with a logical 'AND'. */
export type GameManager_bool_exp = {
  _and?: InputMaybe<Array<GameManager_bool_exp>>;
  _not?: InputMaybe<GameManager_bool_exp>;
  _or?: InputMaybe<Array<GameManager_bool_exp>>;
  chainId?: InputMaybe<Int_comparison_exp>;
  createdAt?: InputMaybe<Int_comparison_exp>;
  currentRound?: InputMaybe<GameRound_bool_exp>;
  currentRoundNumber?: InputMaybe<numeric_comparison_exp>;
  currentRound_id?: InputMaybe<String_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  gameFacilitatorId?: InputMaybe<numeric_comparison_exp>;
  gameRounds?: InputMaybe<GameRound_bool_exp>;
  gmRootAccount?: InputMaybe<String_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  initData?: InputMaybe<String_comparison_exp>;
  poolFunds?: InputMaybe<numeric_comparison_exp>;
  poolId?: InputMaybe<numeric_comparison_exp>;
  poolMetadataPointer?: InputMaybe<String_comparison_exp>;
  poolMetadataProtocol?: InputMaybe<numeric_comparison_exp>;
  profileId?: InputMaybe<String_comparison_exp>;
  profileMetadataPointer?: InputMaybe<String_comparison_exp>;
  profileMetadataProtocol?: InputMaybe<numeric_comparison_exp>;
  template?: InputMaybe<GameManagerTemplate_bool_exp>;
  template_id?: InputMaybe<String_comparison_exp>;
  tokenAddress?: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "GameManager". */
export type GameManager_order_by = {
  chainId?: InputMaybe<order_by>;
  createdAt?: InputMaybe<order_by>;
  currentRound?: InputMaybe<GameRound_order_by>;
  currentRoundNumber?: InputMaybe<order_by>;
  currentRound_id?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  gameFacilitatorId?: InputMaybe<order_by>;
  gameRounds_aggregate?: InputMaybe<GameRound_aggregate_order_by>;
  gmRootAccount?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  initData?: InputMaybe<order_by>;
  poolFunds?: InputMaybe<order_by>;
  poolId?: InputMaybe<order_by>;
  poolMetadataPointer?: InputMaybe<order_by>;
  poolMetadataProtocol?: InputMaybe<order_by>;
  profileId?: InputMaybe<order_by>;
  profileMetadataPointer?: InputMaybe<order_by>;
  profileMetadataProtocol?: InputMaybe<order_by>;
  template?: InputMaybe<GameManagerTemplate_order_by>;
  template_id?: InputMaybe<order_by>;
  tokenAddress?: InputMaybe<order_by>;
};

/** select columns of table "GameManager" */
export type GameManager_select_column =
  /** column name */
  | 'chainId'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'currentRoundNumber'
  /** column name */
  | 'currentRound_id'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'gameFacilitatorId'
  /** column name */
  | 'gmRootAccount'
  /** column name */
  | 'id'
  /** column name */
  | 'initData'
  /** column name */
  | 'poolFunds'
  /** column name */
  | 'poolId'
  /** column name */
  | 'poolMetadataPointer'
  /** column name */
  | 'poolMetadataProtocol'
  /** column name */
  | 'profileId'
  /** column name */
  | 'profileMetadataPointer'
  /** column name */
  | 'profileMetadataProtocol'
  /** column name */
  | 'template_id'
  /** column name */
  | 'tokenAddress';

/** Streaming cursor of the table "GameManager" */
export type GameManager_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: GameManager_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type GameManager_stream_cursor_value_input = {
  chainId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['Int']>;
  currentRoundNumber?: InputMaybe<Scalars['numeric']>;
  currentRound_id?: InputMaybe<Scalars['String']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  gameFacilitatorId?: InputMaybe<Scalars['numeric']>;
  gmRootAccount?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  initData?: InputMaybe<Scalars['String']>;
  poolFunds?: InputMaybe<Scalars['numeric']>;
  poolId?: InputMaybe<Scalars['numeric']>;
  poolMetadataPointer?: InputMaybe<Scalars['String']>;
  poolMetadataProtocol?: InputMaybe<Scalars['numeric']>;
  profileId?: InputMaybe<Scalars['String']>;
  profileMetadataPointer?: InputMaybe<Scalars['String']>;
  profileMetadataProtocol?: InputMaybe<Scalars['numeric']>;
  template_id?: InputMaybe<Scalars['String']>;
  tokenAddress?: InputMaybe<Scalars['String']>;
};

/** order by aggregate values of table "GameRound" */
export type GameRound_aggregate_order_by = {
  avg?: InputMaybe<GameRound_avg_order_by>;
  count?: InputMaybe<order_by>;
  max?: InputMaybe<GameRound_max_order_by>;
  min?: InputMaybe<GameRound_min_order_by>;
  stddev?: InputMaybe<GameRound_stddev_order_by>;
  stddev_pop?: InputMaybe<GameRound_stddev_pop_order_by>;
  stddev_samp?: InputMaybe<GameRound_stddev_samp_order_by>;
  sum?: InputMaybe<GameRound_sum_order_by>;
  var_pop?: InputMaybe<GameRound_var_pop_order_by>;
  var_samp?: InputMaybe<GameRound_var_samp_order_by>;
  variance?: InputMaybe<GameRound_variance_order_by>;
};

/** order by avg() on columns of table "GameRound" */
export type GameRound_avg_order_by = {
  endTime?: InputMaybe<order_by>;
  gameStatus?: InputMaybe<order_by>;
  realEndTime?: InputMaybe<order_by>;
  realStartTime?: InputMaybe<order_by>;
  startTime?: InputMaybe<order_by>;
  totalAllocatedAmount?: InputMaybe<order_by>;
  totalDistributedAmount?: InputMaybe<order_by>;
  totalRoundAmount?: InputMaybe<order_by>;
};

/** Boolean expression to filter rows from the table "GameRound". All fields are combined with a logical 'AND'. */
export type GameRound_bool_exp = {
  _and?: InputMaybe<Array<GameRound_bool_exp>>;
  _not?: InputMaybe<GameRound_bool_exp>;
  _or?: InputMaybe<Array<GameRound_bool_exp>>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  endTime?: InputMaybe<numeric_comparison_exp>;
  gameManager?: InputMaybe<GameManager_bool_exp>;
  gameManager_id?: InputMaybe<String_comparison_exp>;
  gameStatus?: InputMaybe<Int_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  isGameActive?: InputMaybe<Boolean_comparison_exp>;
  realEndTime?: InputMaybe<Int_comparison_exp>;
  realStartTime?: InputMaybe<Int_comparison_exp>;
  ships?: InputMaybe<GrantShip_bool_exp>;
  startTime?: InputMaybe<numeric_comparison_exp>;
  totalAllocatedAmount?: InputMaybe<numeric_comparison_exp>;
  totalDistributedAmount?: InputMaybe<numeric_comparison_exp>;
  totalRoundAmount?: InputMaybe<numeric_comparison_exp>;
};

/** order by max() on columns of table "GameRound" */
export type GameRound_max_order_by = {
  db_write_timestamp?: InputMaybe<order_by>;
  endTime?: InputMaybe<order_by>;
  gameManager_id?: InputMaybe<order_by>;
  gameStatus?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  realEndTime?: InputMaybe<order_by>;
  realStartTime?: InputMaybe<order_by>;
  startTime?: InputMaybe<order_by>;
  totalAllocatedAmount?: InputMaybe<order_by>;
  totalDistributedAmount?: InputMaybe<order_by>;
  totalRoundAmount?: InputMaybe<order_by>;
};

/** order by min() on columns of table "GameRound" */
export type GameRound_min_order_by = {
  db_write_timestamp?: InputMaybe<order_by>;
  endTime?: InputMaybe<order_by>;
  gameManager_id?: InputMaybe<order_by>;
  gameStatus?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  realEndTime?: InputMaybe<order_by>;
  realStartTime?: InputMaybe<order_by>;
  startTime?: InputMaybe<order_by>;
  totalAllocatedAmount?: InputMaybe<order_by>;
  totalDistributedAmount?: InputMaybe<order_by>;
  totalRoundAmount?: InputMaybe<order_by>;
};

/** Ordering options when selecting data from "GameRound". */
export type GameRound_order_by = {
  db_write_timestamp?: InputMaybe<order_by>;
  endTime?: InputMaybe<order_by>;
  gameManager?: InputMaybe<GameManager_order_by>;
  gameManager_id?: InputMaybe<order_by>;
  gameStatus?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  isGameActive?: InputMaybe<order_by>;
  realEndTime?: InputMaybe<order_by>;
  realStartTime?: InputMaybe<order_by>;
  ships_aggregate?: InputMaybe<GrantShip_aggregate_order_by>;
  startTime?: InputMaybe<order_by>;
  totalAllocatedAmount?: InputMaybe<order_by>;
  totalDistributedAmount?: InputMaybe<order_by>;
  totalRoundAmount?: InputMaybe<order_by>;
};

/** select columns of table "GameRound" */
export type GameRound_select_column =
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'endTime'
  /** column name */
  | 'gameManager_id'
  /** column name */
  | 'gameStatus'
  /** column name */
  | 'id'
  /** column name */
  | 'isGameActive'
  /** column name */
  | 'realEndTime'
  /** column name */
  | 'realStartTime'
  /** column name */
  | 'startTime'
  /** column name */
  | 'totalAllocatedAmount'
  /** column name */
  | 'totalDistributedAmount'
  /** column name */
  | 'totalRoundAmount';

/** order by stddev() on columns of table "GameRound" */
export type GameRound_stddev_order_by = {
  endTime?: InputMaybe<order_by>;
  gameStatus?: InputMaybe<order_by>;
  realEndTime?: InputMaybe<order_by>;
  realStartTime?: InputMaybe<order_by>;
  startTime?: InputMaybe<order_by>;
  totalAllocatedAmount?: InputMaybe<order_by>;
  totalDistributedAmount?: InputMaybe<order_by>;
  totalRoundAmount?: InputMaybe<order_by>;
};

/** order by stddev_pop() on columns of table "GameRound" */
export type GameRound_stddev_pop_order_by = {
  endTime?: InputMaybe<order_by>;
  gameStatus?: InputMaybe<order_by>;
  realEndTime?: InputMaybe<order_by>;
  realStartTime?: InputMaybe<order_by>;
  startTime?: InputMaybe<order_by>;
  totalAllocatedAmount?: InputMaybe<order_by>;
  totalDistributedAmount?: InputMaybe<order_by>;
  totalRoundAmount?: InputMaybe<order_by>;
};

/** order by stddev_samp() on columns of table "GameRound" */
export type GameRound_stddev_samp_order_by = {
  endTime?: InputMaybe<order_by>;
  gameStatus?: InputMaybe<order_by>;
  realEndTime?: InputMaybe<order_by>;
  realStartTime?: InputMaybe<order_by>;
  startTime?: InputMaybe<order_by>;
  totalAllocatedAmount?: InputMaybe<order_by>;
  totalDistributedAmount?: InputMaybe<order_by>;
  totalRoundAmount?: InputMaybe<order_by>;
};

/** Streaming cursor of the table "GameRound" */
export type GameRound_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: GameRound_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type GameRound_stream_cursor_value_input = {
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  endTime?: InputMaybe<Scalars['numeric']>;
  gameManager_id?: InputMaybe<Scalars['String']>;
  gameStatus?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  isGameActive?: InputMaybe<Scalars['Boolean']>;
  realEndTime?: InputMaybe<Scalars['Int']>;
  realStartTime?: InputMaybe<Scalars['Int']>;
  startTime?: InputMaybe<Scalars['numeric']>;
  totalAllocatedAmount?: InputMaybe<Scalars['numeric']>;
  totalDistributedAmount?: InputMaybe<Scalars['numeric']>;
  totalRoundAmount?: InputMaybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "GameRound" */
export type GameRound_sum_order_by = {
  endTime?: InputMaybe<order_by>;
  gameStatus?: InputMaybe<order_by>;
  realEndTime?: InputMaybe<order_by>;
  realStartTime?: InputMaybe<order_by>;
  startTime?: InputMaybe<order_by>;
  totalAllocatedAmount?: InputMaybe<order_by>;
  totalDistributedAmount?: InputMaybe<order_by>;
  totalRoundAmount?: InputMaybe<order_by>;
};

/** order by var_pop() on columns of table "GameRound" */
export type GameRound_var_pop_order_by = {
  endTime?: InputMaybe<order_by>;
  gameStatus?: InputMaybe<order_by>;
  realEndTime?: InputMaybe<order_by>;
  realStartTime?: InputMaybe<order_by>;
  startTime?: InputMaybe<order_by>;
  totalAllocatedAmount?: InputMaybe<order_by>;
  totalDistributedAmount?: InputMaybe<order_by>;
  totalRoundAmount?: InputMaybe<order_by>;
};

/** order by var_samp() on columns of table "GameRound" */
export type GameRound_var_samp_order_by = {
  endTime?: InputMaybe<order_by>;
  gameStatus?: InputMaybe<order_by>;
  realEndTime?: InputMaybe<order_by>;
  realStartTime?: InputMaybe<order_by>;
  startTime?: InputMaybe<order_by>;
  totalAllocatedAmount?: InputMaybe<order_by>;
  totalDistributedAmount?: InputMaybe<order_by>;
  totalRoundAmount?: InputMaybe<order_by>;
};

/** order by variance() on columns of table "GameRound" */
export type GameRound_variance_order_by = {
  endTime?: InputMaybe<order_by>;
  gameStatus?: InputMaybe<order_by>;
  realEndTime?: InputMaybe<order_by>;
  realStartTime?: InputMaybe<order_by>;
  startTime?: InputMaybe<order_by>;
  totalAllocatedAmount?: InputMaybe<order_by>;
  totalDistributedAmount?: InputMaybe<order_by>;
  totalRoundAmount?: InputMaybe<order_by>;
};

/** columns and relationships of "Gate" */
export type Gate = {
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  gateId: Scalars['Int'];
  gateType: Scalars['Int'];
  hatId: Scalars['numeric'];
  id: Scalars['String'];
};

/** Boolean expression to filter rows from the table "Gate". All fields are combined with a logical 'AND'. */
export type Gate_bool_exp = {
  _and?: InputMaybe<Array<Gate_bool_exp>>;
  _not?: InputMaybe<Gate_bool_exp>;
  _or?: InputMaybe<Array<Gate_bool_exp>>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  gateId?: InputMaybe<Int_comparison_exp>;
  gateType?: InputMaybe<Int_comparison_exp>;
  hatId?: InputMaybe<numeric_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "Gate". */
export type Gate_order_by = {
  db_write_timestamp?: InputMaybe<order_by>;
  gateId?: InputMaybe<order_by>;
  gateType?: InputMaybe<order_by>;
  hatId?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
};

/** select columns of table "Gate" */
export type Gate_select_column =
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'gateId'
  /** column name */
  | 'gateType'
  /** column name */
  | 'hatId'
  /** column name */
  | 'id';

/** Streaming cursor of the table "Gate" */
export type Gate_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: Gate_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Gate_stream_cursor_value_input = {
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  gateId?: InputMaybe<Scalars['Int']>;
  gateType?: InputMaybe<Scalars['Int']>;
  hatId?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['String']>;
};

/** order by aggregate values of table "GrantShip" */
export type GrantShip_aggregate_order_by = {
  avg?: InputMaybe<GrantShip_avg_order_by>;
  count?: InputMaybe<order_by>;
  max?: InputMaybe<GrantShip_max_order_by>;
  min?: InputMaybe<GrantShip_min_order_by>;
  stddev?: InputMaybe<GrantShip_stddev_order_by>;
  stddev_pop?: InputMaybe<GrantShip_stddev_pop_order_by>;
  stddev_samp?: InputMaybe<GrantShip_stddev_samp_order_by>;
  sum?: InputMaybe<GrantShip_sum_order_by>;
  var_pop?: InputMaybe<GrantShip_var_pop_order_by>;
  var_samp?: InputMaybe<GrantShip_var_samp_order_by>;
  variance?: InputMaybe<GrantShip_variance_order_by>;
};

/** order by avg() on columns of table "GrantShip" */
export type GrantShip_avg_order_by = {
  applicationSubmittedTime?: InputMaybe<order_by>;
  approvedTime?: InputMaybe<order_by>;
  balance?: InputMaybe<order_by>;
  beaconLastUpdated?: InputMaybe<order_by>;
  chainId?: InputMaybe<order_by>;
  nonce?: InputMaybe<order_by>;
  poolId?: InputMaybe<order_by>;
  rejectedTime?: InputMaybe<order_by>;
  shipAllocation?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  totalAllocated?: InputMaybe<order_by>;
  totalDistributed?: InputMaybe<order_by>;
  totalFundsReceived?: InputMaybe<order_by>;
  totalRoundAmount?: InputMaybe<order_by>;
};

/** Boolean expression to filter rows from the table "GrantShip". All fields are combined with a logical 'AND'. */
export type GrantShip_bool_exp = {
  _and?: InputMaybe<Array<GrantShip_bool_exp>>;
  _not?: InputMaybe<GrantShip_bool_exp>;
  _or?: InputMaybe<Array<GrantShip_bool_exp>>;
  alloProfileMembers?: InputMaybe<ProfileMemberGroup_bool_exp>;
  alloProfileMembers_id?: InputMaybe<String_comparison_exp>;
  anchor?: InputMaybe<String_comparison_exp>;
  applicationReviewReason?: InputMaybe<RawMetadata_bool_exp>;
  applicationReviewReason_id?: InputMaybe<String_comparison_exp>;
  applicationSubmittedTime?: InputMaybe<Int_comparison_exp>;
  approvedTime?: InputMaybe<Int_comparison_exp>;
  balance?: InputMaybe<numeric_comparison_exp>;
  beaconLastUpdated?: InputMaybe<Int_comparison_exp>;
  beaconMessage?: InputMaybe<RawMetadata_bool_exp>;
  beaconMessage_id?: InputMaybe<String_comparison_exp>;
  chainId?: InputMaybe<Int_comparison_exp>;
  customApplication?: InputMaybe<RawMetadata_bool_exp>;
  customApplication_id?: InputMaybe<String_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  gameManager?: InputMaybe<GameManager_bool_exp>;
  gameManager_id?: InputMaybe<String_comparison_exp>;
  gameRound?: InputMaybe<GameRound_bool_exp>;
  gameRound_id?: InputMaybe<String_comparison_exp>;
  grants?: InputMaybe<Grant_bool_exp>;
  hasEditedProfile?: InputMaybe<Boolean_comparison_exp>;
  hasSubmittedApplication?: InputMaybe<Boolean_comparison_exp>;
  hatId?: InputMaybe<String_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  isAllocated?: InputMaybe<Boolean_comparison_exp>;
  isApproved?: InputMaybe<Boolean_comparison_exp>;
  isAwaitingApproval?: InputMaybe<Boolean_comparison_exp>;
  isDistributed?: InputMaybe<Boolean_comparison_exp>;
  isRejected?: InputMaybe<Boolean_comparison_exp>;
  name?: InputMaybe<String_comparison_exp>;
  nonce?: InputMaybe<numeric_comparison_exp>;
  owner?: InputMaybe<String_comparison_exp>;
  pastNames?: InputMaybe<String_array_comparison_exp>;
  pastProfileIds?: InputMaybe<String_array_comparison_exp>;
  poolActive?: InputMaybe<Boolean_comparison_exp>;
  poolFunded?: InputMaybe<Boolean_comparison_exp>;
  poolId?: InputMaybe<numeric_comparison_exp>;
  profileId?: InputMaybe<String_comparison_exp>;
  profileMetadata?: InputMaybe<RawMetadata_bool_exp>;
  profileMetadata_id?: InputMaybe<String_comparison_exp>;
  rejectedTime?: InputMaybe<Int_comparison_exp>;
  shipAllocation?: InputMaybe<numeric_comparison_exp>;
  shipApplicationBytesData?: InputMaybe<String_comparison_exp>;
  shipContractAddress?: InputMaybe<String_comparison_exp>;
  shipLaunched?: InputMaybe<Boolean_comparison_exp>;
  status?: InputMaybe<Int_comparison_exp>;
  totalAllocated?: InputMaybe<numeric_comparison_exp>;
  totalDistributed?: InputMaybe<numeric_comparison_exp>;
  totalFundsReceived?: InputMaybe<numeric_comparison_exp>;
  totalRoundAmount?: InputMaybe<numeric_comparison_exp>;
};

/** order by max() on columns of table "GrantShip" */
export type GrantShip_max_order_by = {
  alloProfileMembers_id?: InputMaybe<order_by>;
  anchor?: InputMaybe<order_by>;
  applicationReviewReason_id?: InputMaybe<order_by>;
  applicationSubmittedTime?: InputMaybe<order_by>;
  approvedTime?: InputMaybe<order_by>;
  balance?: InputMaybe<order_by>;
  beaconLastUpdated?: InputMaybe<order_by>;
  beaconMessage_id?: InputMaybe<order_by>;
  chainId?: InputMaybe<order_by>;
  customApplication_id?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  gameManager_id?: InputMaybe<order_by>;
  gameRound_id?: InputMaybe<order_by>;
  hatId?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  name?: InputMaybe<order_by>;
  nonce?: InputMaybe<order_by>;
  owner?: InputMaybe<order_by>;
  pastNames?: InputMaybe<order_by>;
  pastProfileIds?: InputMaybe<order_by>;
  poolId?: InputMaybe<order_by>;
  profileId?: InputMaybe<order_by>;
  profileMetadata_id?: InputMaybe<order_by>;
  rejectedTime?: InputMaybe<order_by>;
  shipAllocation?: InputMaybe<order_by>;
  shipApplicationBytesData?: InputMaybe<order_by>;
  shipContractAddress?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  totalAllocated?: InputMaybe<order_by>;
  totalDistributed?: InputMaybe<order_by>;
  totalFundsReceived?: InputMaybe<order_by>;
  totalRoundAmount?: InputMaybe<order_by>;
};

/** order by min() on columns of table "GrantShip" */
export type GrantShip_min_order_by = {
  alloProfileMembers_id?: InputMaybe<order_by>;
  anchor?: InputMaybe<order_by>;
  applicationReviewReason_id?: InputMaybe<order_by>;
  applicationSubmittedTime?: InputMaybe<order_by>;
  approvedTime?: InputMaybe<order_by>;
  balance?: InputMaybe<order_by>;
  beaconLastUpdated?: InputMaybe<order_by>;
  beaconMessage_id?: InputMaybe<order_by>;
  chainId?: InputMaybe<order_by>;
  customApplication_id?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  gameManager_id?: InputMaybe<order_by>;
  gameRound_id?: InputMaybe<order_by>;
  hatId?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  name?: InputMaybe<order_by>;
  nonce?: InputMaybe<order_by>;
  owner?: InputMaybe<order_by>;
  pastNames?: InputMaybe<order_by>;
  pastProfileIds?: InputMaybe<order_by>;
  poolId?: InputMaybe<order_by>;
  profileId?: InputMaybe<order_by>;
  profileMetadata_id?: InputMaybe<order_by>;
  rejectedTime?: InputMaybe<order_by>;
  shipAllocation?: InputMaybe<order_by>;
  shipApplicationBytesData?: InputMaybe<order_by>;
  shipContractAddress?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  totalAllocated?: InputMaybe<order_by>;
  totalDistributed?: InputMaybe<order_by>;
  totalFundsReceived?: InputMaybe<order_by>;
  totalRoundAmount?: InputMaybe<order_by>;
};

/** Ordering options when selecting data from "GrantShip". */
export type GrantShip_order_by = {
  alloProfileMembers?: InputMaybe<ProfileMemberGroup_order_by>;
  alloProfileMembers_id?: InputMaybe<order_by>;
  anchor?: InputMaybe<order_by>;
  applicationReviewReason?: InputMaybe<RawMetadata_order_by>;
  applicationReviewReason_id?: InputMaybe<order_by>;
  applicationSubmittedTime?: InputMaybe<order_by>;
  approvedTime?: InputMaybe<order_by>;
  balance?: InputMaybe<order_by>;
  beaconLastUpdated?: InputMaybe<order_by>;
  beaconMessage?: InputMaybe<RawMetadata_order_by>;
  beaconMessage_id?: InputMaybe<order_by>;
  chainId?: InputMaybe<order_by>;
  customApplication?: InputMaybe<RawMetadata_order_by>;
  customApplication_id?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  gameManager?: InputMaybe<GameManager_order_by>;
  gameManager_id?: InputMaybe<order_by>;
  gameRound?: InputMaybe<GameRound_order_by>;
  gameRound_id?: InputMaybe<order_by>;
  grants_aggregate?: InputMaybe<Grant_aggregate_order_by>;
  hasEditedProfile?: InputMaybe<order_by>;
  hasSubmittedApplication?: InputMaybe<order_by>;
  hatId?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  isAllocated?: InputMaybe<order_by>;
  isApproved?: InputMaybe<order_by>;
  isAwaitingApproval?: InputMaybe<order_by>;
  isDistributed?: InputMaybe<order_by>;
  isRejected?: InputMaybe<order_by>;
  name?: InputMaybe<order_by>;
  nonce?: InputMaybe<order_by>;
  owner?: InputMaybe<order_by>;
  pastNames?: InputMaybe<order_by>;
  pastProfileIds?: InputMaybe<order_by>;
  poolActive?: InputMaybe<order_by>;
  poolFunded?: InputMaybe<order_by>;
  poolId?: InputMaybe<order_by>;
  profileId?: InputMaybe<order_by>;
  profileMetadata?: InputMaybe<RawMetadata_order_by>;
  profileMetadata_id?: InputMaybe<order_by>;
  rejectedTime?: InputMaybe<order_by>;
  shipAllocation?: InputMaybe<order_by>;
  shipApplicationBytesData?: InputMaybe<order_by>;
  shipContractAddress?: InputMaybe<order_by>;
  shipLaunched?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  totalAllocated?: InputMaybe<order_by>;
  totalDistributed?: InputMaybe<order_by>;
  totalFundsReceived?: InputMaybe<order_by>;
  totalRoundAmount?: InputMaybe<order_by>;
};

/** select columns of table "GrantShip" */
export type GrantShip_select_column =
  /** column name */
  | 'alloProfileMembers_id'
  /** column name */
  | 'anchor'
  /** column name */
  | 'applicationReviewReason_id'
  /** column name */
  | 'applicationSubmittedTime'
  /** column name */
  | 'approvedTime'
  /** column name */
  | 'balance'
  /** column name */
  | 'beaconLastUpdated'
  /** column name */
  | 'beaconMessage_id'
  /** column name */
  | 'chainId'
  /** column name */
  | 'customApplication_id'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'gameManager_id'
  /** column name */
  | 'gameRound_id'
  /** column name */
  | 'hasEditedProfile'
  /** column name */
  | 'hasSubmittedApplication'
  /** column name */
  | 'hatId'
  /** column name */
  | 'id'
  /** column name */
  | 'isAllocated'
  /** column name */
  | 'isApproved'
  /** column name */
  | 'isAwaitingApproval'
  /** column name */
  | 'isDistributed'
  /** column name */
  | 'isRejected'
  /** column name */
  | 'name'
  /** column name */
  | 'nonce'
  /** column name */
  | 'owner'
  /** column name */
  | 'pastNames'
  /** column name */
  | 'pastProfileIds'
  /** column name */
  | 'poolActive'
  /** column name */
  | 'poolFunded'
  /** column name */
  | 'poolId'
  /** column name */
  | 'profileId'
  /** column name */
  | 'profileMetadata_id'
  /** column name */
  | 'rejectedTime'
  /** column name */
  | 'shipAllocation'
  /** column name */
  | 'shipApplicationBytesData'
  /** column name */
  | 'shipContractAddress'
  /** column name */
  | 'shipLaunched'
  /** column name */
  | 'status'
  /** column name */
  | 'totalAllocated'
  /** column name */
  | 'totalDistributed'
  /** column name */
  | 'totalFundsReceived'
  /** column name */
  | 'totalRoundAmount';

/** order by stddev() on columns of table "GrantShip" */
export type GrantShip_stddev_order_by = {
  applicationSubmittedTime?: InputMaybe<order_by>;
  approvedTime?: InputMaybe<order_by>;
  balance?: InputMaybe<order_by>;
  beaconLastUpdated?: InputMaybe<order_by>;
  chainId?: InputMaybe<order_by>;
  nonce?: InputMaybe<order_by>;
  poolId?: InputMaybe<order_by>;
  rejectedTime?: InputMaybe<order_by>;
  shipAllocation?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  totalAllocated?: InputMaybe<order_by>;
  totalDistributed?: InputMaybe<order_by>;
  totalFundsReceived?: InputMaybe<order_by>;
  totalRoundAmount?: InputMaybe<order_by>;
};

/** order by stddev_pop() on columns of table "GrantShip" */
export type GrantShip_stddev_pop_order_by = {
  applicationSubmittedTime?: InputMaybe<order_by>;
  approvedTime?: InputMaybe<order_by>;
  balance?: InputMaybe<order_by>;
  beaconLastUpdated?: InputMaybe<order_by>;
  chainId?: InputMaybe<order_by>;
  nonce?: InputMaybe<order_by>;
  poolId?: InputMaybe<order_by>;
  rejectedTime?: InputMaybe<order_by>;
  shipAllocation?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  totalAllocated?: InputMaybe<order_by>;
  totalDistributed?: InputMaybe<order_by>;
  totalFundsReceived?: InputMaybe<order_by>;
  totalRoundAmount?: InputMaybe<order_by>;
};

/** order by stddev_samp() on columns of table "GrantShip" */
export type GrantShip_stddev_samp_order_by = {
  applicationSubmittedTime?: InputMaybe<order_by>;
  approvedTime?: InputMaybe<order_by>;
  balance?: InputMaybe<order_by>;
  beaconLastUpdated?: InputMaybe<order_by>;
  chainId?: InputMaybe<order_by>;
  nonce?: InputMaybe<order_by>;
  poolId?: InputMaybe<order_by>;
  rejectedTime?: InputMaybe<order_by>;
  shipAllocation?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  totalAllocated?: InputMaybe<order_by>;
  totalDistributed?: InputMaybe<order_by>;
  totalFundsReceived?: InputMaybe<order_by>;
  totalRoundAmount?: InputMaybe<order_by>;
};

/** Streaming cursor of the table "GrantShip" */
export type GrantShip_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: GrantShip_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type GrantShip_stream_cursor_value_input = {
  alloProfileMembers_id?: InputMaybe<Scalars['String']>;
  anchor?: InputMaybe<Scalars['String']>;
  applicationReviewReason_id?: InputMaybe<Scalars['String']>;
  applicationSubmittedTime?: InputMaybe<Scalars['Int']>;
  approvedTime?: InputMaybe<Scalars['Int']>;
  balance?: InputMaybe<Scalars['numeric']>;
  beaconLastUpdated?: InputMaybe<Scalars['Int']>;
  beaconMessage_id?: InputMaybe<Scalars['String']>;
  chainId?: InputMaybe<Scalars['Int']>;
  customApplication_id?: InputMaybe<Scalars['String']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  gameManager_id?: InputMaybe<Scalars['String']>;
  gameRound_id?: InputMaybe<Scalars['String']>;
  hasEditedProfile?: InputMaybe<Scalars['Boolean']>;
  hasSubmittedApplication?: InputMaybe<Scalars['Boolean']>;
  hatId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isAllocated?: InputMaybe<Scalars['Boolean']>;
  isApproved?: InputMaybe<Scalars['Boolean']>;
  isAwaitingApproval?: InputMaybe<Scalars['Boolean']>;
  isDistributed?: InputMaybe<Scalars['Boolean']>;
  isRejected?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  nonce?: InputMaybe<Scalars['numeric']>;
  owner?: InputMaybe<Scalars['String']>;
  pastNames?: InputMaybe<Array<Scalars['String']>>;
  pastProfileIds?: InputMaybe<Array<Scalars['String']>>;
  poolActive?: InputMaybe<Scalars['Boolean']>;
  poolFunded?: InputMaybe<Scalars['Boolean']>;
  poolId?: InputMaybe<Scalars['numeric']>;
  profileId?: InputMaybe<Scalars['String']>;
  profileMetadata_id?: InputMaybe<Scalars['String']>;
  rejectedTime?: InputMaybe<Scalars['Int']>;
  shipAllocation?: InputMaybe<Scalars['numeric']>;
  shipApplicationBytesData?: InputMaybe<Scalars['String']>;
  shipContractAddress?: InputMaybe<Scalars['String']>;
  shipLaunched?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['Int']>;
  totalAllocated?: InputMaybe<Scalars['numeric']>;
  totalDistributed?: InputMaybe<Scalars['numeric']>;
  totalFundsReceived?: InputMaybe<Scalars['numeric']>;
  totalRoundAmount?: InputMaybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "GrantShip" */
export type GrantShip_sum_order_by = {
  applicationSubmittedTime?: InputMaybe<order_by>;
  approvedTime?: InputMaybe<order_by>;
  balance?: InputMaybe<order_by>;
  beaconLastUpdated?: InputMaybe<order_by>;
  chainId?: InputMaybe<order_by>;
  nonce?: InputMaybe<order_by>;
  poolId?: InputMaybe<order_by>;
  rejectedTime?: InputMaybe<order_by>;
  shipAllocation?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  totalAllocated?: InputMaybe<order_by>;
  totalDistributed?: InputMaybe<order_by>;
  totalFundsReceived?: InputMaybe<order_by>;
  totalRoundAmount?: InputMaybe<order_by>;
};

/** order by var_pop() on columns of table "GrantShip" */
export type GrantShip_var_pop_order_by = {
  applicationSubmittedTime?: InputMaybe<order_by>;
  approvedTime?: InputMaybe<order_by>;
  balance?: InputMaybe<order_by>;
  beaconLastUpdated?: InputMaybe<order_by>;
  chainId?: InputMaybe<order_by>;
  nonce?: InputMaybe<order_by>;
  poolId?: InputMaybe<order_by>;
  rejectedTime?: InputMaybe<order_by>;
  shipAllocation?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  totalAllocated?: InputMaybe<order_by>;
  totalDistributed?: InputMaybe<order_by>;
  totalFundsReceived?: InputMaybe<order_by>;
  totalRoundAmount?: InputMaybe<order_by>;
};

/** order by var_samp() on columns of table "GrantShip" */
export type GrantShip_var_samp_order_by = {
  applicationSubmittedTime?: InputMaybe<order_by>;
  approvedTime?: InputMaybe<order_by>;
  balance?: InputMaybe<order_by>;
  beaconLastUpdated?: InputMaybe<order_by>;
  chainId?: InputMaybe<order_by>;
  nonce?: InputMaybe<order_by>;
  poolId?: InputMaybe<order_by>;
  rejectedTime?: InputMaybe<order_by>;
  shipAllocation?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  totalAllocated?: InputMaybe<order_by>;
  totalDistributed?: InputMaybe<order_by>;
  totalFundsReceived?: InputMaybe<order_by>;
  totalRoundAmount?: InputMaybe<order_by>;
};

/** order by variance() on columns of table "GrantShip" */
export type GrantShip_variance_order_by = {
  applicationSubmittedTime?: InputMaybe<order_by>;
  approvedTime?: InputMaybe<order_by>;
  balance?: InputMaybe<order_by>;
  beaconLastUpdated?: InputMaybe<order_by>;
  chainId?: InputMaybe<order_by>;
  nonce?: InputMaybe<order_by>;
  poolId?: InputMaybe<order_by>;
  rejectedTime?: InputMaybe<order_by>;
  shipAllocation?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  totalAllocated?: InputMaybe<order_by>;
  totalDistributed?: InputMaybe<order_by>;
  totalFundsReceived?: InputMaybe<order_by>;
  totalRoundAmount?: InputMaybe<order_by>;
};

/** columns and relationships of "GrantShipsVoting" */
export type GrantShipsVoting = {
  /** An array relationship */
  choices: Array<ShipChoice>;
  /** An object relationship */
  contest?: Maybe<Contest>;
  contest_id: Scalars['String'];
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  endTime?: Maybe<Scalars['numeric']>;
  hatId: Scalars['numeric'];
  hatsAddress: Scalars['String'];
  id: Scalars['String'];
  isDualToken: Scalars['Boolean'];
  isSBTVoting: Scalars['Boolean'];
  isVotingActive: Scalars['Boolean'];
  startTime?: Maybe<Scalars['numeric']>;
  totalVotes: Scalars['numeric'];
  voteDuration: Scalars['numeric'];
  voteTokenAddress: Scalars['String'];
  /** An array relationship */
  votes: Array<ShipVote>;
  votingCheckpoint: Scalars['numeric'];
};


/** columns and relationships of "GrantShipsVoting" */
export type GrantShipsVotingchoicesArgs = {
  distinct_on?: InputMaybe<Array<ShipChoice_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ShipChoice_order_by>>;
  where?: InputMaybe<ShipChoice_bool_exp>;
};


/** columns and relationships of "GrantShipsVoting" */
export type GrantShipsVotingvotesArgs = {
  distinct_on?: InputMaybe<Array<ShipVote_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ShipVote_order_by>>;
  where?: InputMaybe<ShipVote_bool_exp>;
};

/** Boolean expression to filter rows from the table "GrantShipsVoting". All fields are combined with a logical 'AND'. */
export type GrantShipsVoting_bool_exp = {
  _and?: InputMaybe<Array<GrantShipsVoting_bool_exp>>;
  _not?: InputMaybe<GrantShipsVoting_bool_exp>;
  _or?: InputMaybe<Array<GrantShipsVoting_bool_exp>>;
  choices?: InputMaybe<ShipChoice_bool_exp>;
  contest?: InputMaybe<Contest_bool_exp>;
  contest_id?: InputMaybe<String_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  endTime?: InputMaybe<numeric_comparison_exp>;
  hatId?: InputMaybe<numeric_comparison_exp>;
  hatsAddress?: InputMaybe<String_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  isDualToken?: InputMaybe<Boolean_comparison_exp>;
  isSBTVoting?: InputMaybe<Boolean_comparison_exp>;
  isVotingActive?: InputMaybe<Boolean_comparison_exp>;
  startTime?: InputMaybe<numeric_comparison_exp>;
  totalVotes?: InputMaybe<numeric_comparison_exp>;
  voteDuration?: InputMaybe<numeric_comparison_exp>;
  voteTokenAddress?: InputMaybe<String_comparison_exp>;
  votes?: InputMaybe<ShipVote_bool_exp>;
  votingCheckpoint?: InputMaybe<numeric_comparison_exp>;
};

/** Ordering options when selecting data from "GrantShipsVoting". */
export type GrantShipsVoting_order_by = {
  choices_aggregate?: InputMaybe<ShipChoice_aggregate_order_by>;
  contest?: InputMaybe<Contest_order_by>;
  contest_id?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  endTime?: InputMaybe<order_by>;
  hatId?: InputMaybe<order_by>;
  hatsAddress?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  isDualToken?: InputMaybe<order_by>;
  isSBTVoting?: InputMaybe<order_by>;
  isVotingActive?: InputMaybe<order_by>;
  startTime?: InputMaybe<order_by>;
  totalVotes?: InputMaybe<order_by>;
  voteDuration?: InputMaybe<order_by>;
  voteTokenAddress?: InputMaybe<order_by>;
  votes_aggregate?: InputMaybe<ShipVote_aggregate_order_by>;
  votingCheckpoint?: InputMaybe<order_by>;
};

/** select columns of table "GrantShipsVoting" */
export type GrantShipsVoting_select_column =
  /** column name */
  | 'contest_id'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'endTime'
  /** column name */
  | 'hatId'
  /** column name */
  | 'hatsAddress'
  /** column name */
  | 'id'
  /** column name */
  | 'isDualToken'
  /** column name */
  | 'isSBTVoting'
  /** column name */
  | 'isVotingActive'
  /** column name */
  | 'startTime'
  /** column name */
  | 'totalVotes'
  /** column name */
  | 'voteDuration'
  /** column name */
  | 'voteTokenAddress'
  /** column name */
  | 'votingCheckpoint';

/** Streaming cursor of the table "GrantShipsVoting" */
export type GrantShipsVoting_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: GrantShipsVoting_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type GrantShipsVoting_stream_cursor_value_input = {
  contest_id?: InputMaybe<Scalars['String']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  endTime?: InputMaybe<Scalars['numeric']>;
  hatId?: InputMaybe<Scalars['numeric']>;
  hatsAddress?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isDualToken?: InputMaybe<Scalars['Boolean']>;
  isSBTVoting?: InputMaybe<Scalars['Boolean']>;
  isVotingActive?: InputMaybe<Scalars['Boolean']>;
  startTime?: InputMaybe<Scalars['numeric']>;
  totalVotes?: InputMaybe<Scalars['numeric']>;
  voteDuration?: InputMaybe<Scalars['numeric']>;
  voteTokenAddress?: InputMaybe<Scalars['String']>;
  votingCheckpoint?: InputMaybe<Scalars['numeric']>;
};

/** order by aggregate values of table "Grant" */
export type Grant_aggregate_order_by = {
  avg?: InputMaybe<Grant_avg_order_by>;
  count?: InputMaybe<order_by>;
  max?: InputMaybe<Grant_max_order_by>;
  min?: InputMaybe<Grant_min_order_by>;
  stddev?: InputMaybe<Grant_stddev_order_by>;
  stddev_pop?: InputMaybe<Grant_stddev_pop_order_by>;
  stddev_samp?: InputMaybe<Grant_stddev_samp_order_by>;
  sum?: InputMaybe<Grant_sum_order_by>;
  var_pop?: InputMaybe<Grant_var_pop_order_by>;
  var_samp?: InputMaybe<Grant_var_samp_order_by>;
  variance?: InputMaybe<Grant_variance_order_by>;
};

/** order by avg() on columns of table "Grant" */
export type Grant_avg_order_by = {
  amount?: InputMaybe<order_by>;
  amountAllocated?: InputMaybe<order_by>;
  amountDistributed?: InputMaybe<order_by>;
  lastUpdated?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
};

/** Boolean expression to filter rows from the table "Grant". All fields are combined with a logical 'AND'. */
export type Grant_bool_exp = {
  _and?: InputMaybe<Array<Grant_bool_exp>>;
  _not?: InputMaybe<Grant_bool_exp>;
  _or?: InputMaybe<Array<Grant_bool_exp>>;
  allMilestonesApproved?: InputMaybe<Boolean_comparison_exp>;
  amount?: InputMaybe<numeric_comparison_exp>;
  amountAllocated?: InputMaybe<numeric_comparison_exp>;
  amountDistributed?: InputMaybe<numeric_comparison_exp>;
  applicationApproved?: InputMaybe<Boolean_comparison_exp>;
  applications?: InputMaybe<Application_bool_exp>;
  currentApplication?: InputMaybe<Application_bool_exp>;
  currentApplication_id?: InputMaybe<String_comparison_exp>;
  currentMilestones?: InputMaybe<MilestoneSet_bool_exp>;
  currentMilestones_id?: InputMaybe<String_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  gameManager?: InputMaybe<GameManager_bool_exp>;
  gameManager_id?: InputMaybe<String_comparison_exp>;
  grantCompleted?: InputMaybe<Boolean_comparison_exp>;
  hasPendingMilestones?: InputMaybe<Boolean_comparison_exp>;
  hasRejectedMilestones?: InputMaybe<Boolean_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  isAllocated?: InputMaybe<Boolean_comparison_exp>;
  lastUpdated?: InputMaybe<Int_comparison_exp>;
  milestoneDrafts?: InputMaybe<MilestoneSet_bool_exp>;
  project?: InputMaybe<Project_bool_exp>;
  project_id?: InputMaybe<String_comparison_exp>;
  requestingEarlyReview?: InputMaybe<Boolean_comparison_exp>;
  ship?: InputMaybe<GrantShip_bool_exp>;
  ship_id?: InputMaybe<String_comparison_exp>;
  status?: InputMaybe<Int_comparison_exp>;
};

/** order by max() on columns of table "Grant" */
export type Grant_max_order_by = {
  amount?: InputMaybe<order_by>;
  amountAllocated?: InputMaybe<order_by>;
  amountDistributed?: InputMaybe<order_by>;
  currentApplication_id?: InputMaybe<order_by>;
  currentMilestones_id?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  gameManager_id?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  lastUpdated?: InputMaybe<order_by>;
  project_id?: InputMaybe<order_by>;
  ship_id?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
};

/** order by min() on columns of table "Grant" */
export type Grant_min_order_by = {
  amount?: InputMaybe<order_by>;
  amountAllocated?: InputMaybe<order_by>;
  amountDistributed?: InputMaybe<order_by>;
  currentApplication_id?: InputMaybe<order_by>;
  currentMilestones_id?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  gameManager_id?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  lastUpdated?: InputMaybe<order_by>;
  project_id?: InputMaybe<order_by>;
  ship_id?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
};

/** Ordering options when selecting data from "Grant". */
export type Grant_order_by = {
  allMilestonesApproved?: InputMaybe<order_by>;
  amount?: InputMaybe<order_by>;
  amountAllocated?: InputMaybe<order_by>;
  amountDistributed?: InputMaybe<order_by>;
  applicationApproved?: InputMaybe<order_by>;
  applications_aggregate?: InputMaybe<Application_aggregate_order_by>;
  currentApplication?: InputMaybe<Application_order_by>;
  currentApplication_id?: InputMaybe<order_by>;
  currentMilestones?: InputMaybe<MilestoneSet_order_by>;
  currentMilestones_id?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  gameManager?: InputMaybe<GameManager_order_by>;
  gameManager_id?: InputMaybe<order_by>;
  grantCompleted?: InputMaybe<order_by>;
  hasPendingMilestones?: InputMaybe<order_by>;
  hasRejectedMilestones?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  isAllocated?: InputMaybe<order_by>;
  lastUpdated?: InputMaybe<order_by>;
  milestoneDrafts_aggregate?: InputMaybe<MilestoneSet_aggregate_order_by>;
  project?: InputMaybe<Project_order_by>;
  project_id?: InputMaybe<order_by>;
  requestingEarlyReview?: InputMaybe<order_by>;
  ship?: InputMaybe<GrantShip_order_by>;
  ship_id?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
};

/** select columns of table "Grant" */
export type Grant_select_column =
  /** column name */
  | 'allMilestonesApproved'
  /** column name */
  | 'amount'
  /** column name */
  | 'amountAllocated'
  /** column name */
  | 'amountDistributed'
  /** column name */
  | 'applicationApproved'
  /** column name */
  | 'currentApplication_id'
  /** column name */
  | 'currentMilestones_id'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'gameManager_id'
  /** column name */
  | 'grantCompleted'
  /** column name */
  | 'hasPendingMilestones'
  /** column name */
  | 'hasRejectedMilestones'
  /** column name */
  | 'id'
  /** column name */
  | 'isAllocated'
  /** column name */
  | 'lastUpdated'
  /** column name */
  | 'project_id'
  /** column name */
  | 'requestingEarlyReview'
  /** column name */
  | 'ship_id'
  /** column name */
  | 'status';

/** order by stddev() on columns of table "Grant" */
export type Grant_stddev_order_by = {
  amount?: InputMaybe<order_by>;
  amountAllocated?: InputMaybe<order_by>;
  amountDistributed?: InputMaybe<order_by>;
  lastUpdated?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
};

/** order by stddev_pop() on columns of table "Grant" */
export type Grant_stddev_pop_order_by = {
  amount?: InputMaybe<order_by>;
  amountAllocated?: InputMaybe<order_by>;
  amountDistributed?: InputMaybe<order_by>;
  lastUpdated?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
};

/** order by stddev_samp() on columns of table "Grant" */
export type Grant_stddev_samp_order_by = {
  amount?: InputMaybe<order_by>;
  amountAllocated?: InputMaybe<order_by>;
  amountDistributed?: InputMaybe<order_by>;
  lastUpdated?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
};

/** Streaming cursor of the table "Grant" */
export type Grant_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: Grant_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Grant_stream_cursor_value_input = {
  allMilestonesApproved?: InputMaybe<Scalars['Boolean']>;
  amount?: InputMaybe<Scalars['numeric']>;
  amountAllocated?: InputMaybe<Scalars['numeric']>;
  amountDistributed?: InputMaybe<Scalars['numeric']>;
  applicationApproved?: InputMaybe<Scalars['Boolean']>;
  currentApplication_id?: InputMaybe<Scalars['String']>;
  currentMilestones_id?: InputMaybe<Scalars['String']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  gameManager_id?: InputMaybe<Scalars['String']>;
  grantCompleted?: InputMaybe<Scalars['Boolean']>;
  hasPendingMilestones?: InputMaybe<Scalars['Boolean']>;
  hasRejectedMilestones?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  isAllocated?: InputMaybe<Scalars['Boolean']>;
  lastUpdated?: InputMaybe<Scalars['Int']>;
  project_id?: InputMaybe<Scalars['String']>;
  requestingEarlyReview?: InputMaybe<Scalars['Boolean']>;
  ship_id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Grant" */
export type Grant_sum_order_by = {
  amount?: InputMaybe<order_by>;
  amountAllocated?: InputMaybe<order_by>;
  amountDistributed?: InputMaybe<order_by>;
  lastUpdated?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
};

/** order by var_pop() on columns of table "Grant" */
export type Grant_var_pop_order_by = {
  amount?: InputMaybe<order_by>;
  amountAllocated?: InputMaybe<order_by>;
  amountDistributed?: InputMaybe<order_by>;
  lastUpdated?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
};

/** order by var_samp() on columns of table "Grant" */
export type Grant_var_samp_order_by = {
  amount?: InputMaybe<order_by>;
  amountAllocated?: InputMaybe<order_by>;
  amountDistributed?: InputMaybe<order_by>;
  lastUpdated?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
};

/** order by variance() on columns of table "Grant" */
export type Grant_variance_order_by = {
  amount?: InputMaybe<order_by>;
  amountAllocated?: InputMaybe<order_by>;
  amountDistributed?: InputMaybe<order_by>;
  lastUpdated?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
};

/** columns and relationships of "HALParams" */
export type HALParams = {
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  hatId: Scalars['numeric'];
  hatsAddress: Scalars['String'];
  id: Scalars['String'];
};

/** Boolean expression to filter rows from the table "HALParams". All fields are combined with a logical 'AND'. */
export type HALParams_bool_exp = {
  _and?: InputMaybe<Array<HALParams_bool_exp>>;
  _not?: InputMaybe<HALParams_bool_exp>;
  _or?: InputMaybe<Array<HALParams_bool_exp>>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  hatId?: InputMaybe<numeric_comparison_exp>;
  hatsAddress?: InputMaybe<String_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "HALParams". */
export type HALParams_order_by = {
  db_write_timestamp?: InputMaybe<order_by>;
  hatId?: InputMaybe<order_by>;
  hatsAddress?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
};

/** select columns of table "HALParams" */
export type HALParams_select_column =
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'hatId'
  /** column name */
  | 'hatsAddress'
  /** column name */
  | 'id';

/** Streaming cursor of the table "HALParams" */
export type HALParams_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: HALParams_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type HALParams_stream_cursor_value_input = {
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  hatId?: InputMaybe<Scalars['numeric']>;
  hatsAddress?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "HatsPoster" */
export type HatsPoster = {
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  /** An array relationship */
  eventPosts: Array<EventPost>;
  hatIds: Array<Scalars['numeric']>;
  hatsAddress: Scalars['String'];
  id: Scalars['String'];
  /** An array relationship */
  record: Array<Record>;
};


/** columns and relationships of "HatsPoster" */
export type HatsPostereventPostsArgs = {
  distinct_on?: InputMaybe<Array<EventPost_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EventPost_order_by>>;
  where?: InputMaybe<EventPost_bool_exp>;
};


/** columns and relationships of "HatsPoster" */
export type HatsPosterrecordArgs = {
  distinct_on?: InputMaybe<Array<Record_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Record_order_by>>;
  where?: InputMaybe<Record_bool_exp>;
};

/** Boolean expression to filter rows from the table "HatsPoster". All fields are combined with a logical 'AND'. */
export type HatsPoster_bool_exp = {
  _and?: InputMaybe<Array<HatsPoster_bool_exp>>;
  _not?: InputMaybe<HatsPoster_bool_exp>;
  _or?: InputMaybe<Array<HatsPoster_bool_exp>>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  eventPosts?: InputMaybe<EventPost_bool_exp>;
  hatIds?: InputMaybe<numeric_array_comparison_exp>;
  hatsAddress?: InputMaybe<String_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  record?: InputMaybe<Record_bool_exp>;
};

/** Ordering options when selecting data from "HatsPoster". */
export type HatsPoster_order_by = {
  db_write_timestamp?: InputMaybe<order_by>;
  eventPosts_aggregate?: InputMaybe<EventPost_aggregate_order_by>;
  hatIds?: InputMaybe<order_by>;
  hatsAddress?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  record_aggregate?: InputMaybe<Record_aggregate_order_by>;
};

/** select columns of table "HatsPoster" */
export type HatsPoster_select_column =
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'hatIds'
  /** column name */
  | 'hatsAddress'
  /** column name */
  | 'id';

/** Streaming cursor of the table "HatsPoster" */
export type HatsPoster_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: HatsPoster_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type HatsPoster_stream_cursor_value_input = {
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  hatIds?: InputMaybe<Array<Scalars['numeric']>>;
  hatsAddress?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_comparison_exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "LocalLog" */
export type LocalLog = {
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  id: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "LocalLog". All fields are combined with a logical 'AND'. */
export type LocalLog_bool_exp = {
  _and?: InputMaybe<Array<LocalLog_bool_exp>>;
  _not?: InputMaybe<LocalLog_bool_exp>;
  _or?: InputMaybe<Array<LocalLog_bool_exp>>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  message?: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "LocalLog". */
export type LocalLog_order_by = {
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  message?: InputMaybe<order_by>;
};

/** select columns of table "LocalLog" */
export type LocalLog_select_column =
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'id'
  /** column name */
  | 'message';

/** Streaming cursor of the table "LocalLog" */
export type LocalLog_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: LocalLog_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type LocalLog_stream_cursor_value_input = {
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "MilestoneSet" */
export type MilestoneSet = {
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  grant_id: Scalars['String'];
  id: Scalars['String'];
  index: Scalars['Int'];
  milestoneLength: Scalars['Int'];
  /** An array relationship */
  milestones: Array<Milestone>;
  milestonesCompleted: Scalars['Int'];
  milestonesPending: Scalars['Int'];
  milestonesRejected: Scalars['Int'];
  status: Scalars['Int'];
  timestamp: Scalars['Int'];
};


/** columns and relationships of "MilestoneSet" */
export type MilestoneSetmilestonesArgs = {
  distinct_on?: InputMaybe<Array<Milestone_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Milestone_order_by>>;
  where?: InputMaybe<Milestone_bool_exp>;
};

/** order by aggregate values of table "MilestoneSet" */
export type MilestoneSet_aggregate_order_by = {
  avg?: InputMaybe<MilestoneSet_avg_order_by>;
  count?: InputMaybe<order_by>;
  max?: InputMaybe<MilestoneSet_max_order_by>;
  min?: InputMaybe<MilestoneSet_min_order_by>;
  stddev?: InputMaybe<MilestoneSet_stddev_order_by>;
  stddev_pop?: InputMaybe<MilestoneSet_stddev_pop_order_by>;
  stddev_samp?: InputMaybe<MilestoneSet_stddev_samp_order_by>;
  sum?: InputMaybe<MilestoneSet_sum_order_by>;
  var_pop?: InputMaybe<MilestoneSet_var_pop_order_by>;
  var_samp?: InputMaybe<MilestoneSet_var_samp_order_by>;
  variance?: InputMaybe<MilestoneSet_variance_order_by>;
};

/** order by avg() on columns of table "MilestoneSet" */
export type MilestoneSet_avg_order_by = {
  index?: InputMaybe<order_by>;
  milestoneLength?: InputMaybe<order_by>;
  milestonesCompleted?: InputMaybe<order_by>;
  milestonesPending?: InputMaybe<order_by>;
  milestonesRejected?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
};

/** Boolean expression to filter rows from the table "MilestoneSet". All fields are combined with a logical 'AND'. */
export type MilestoneSet_bool_exp = {
  _and?: InputMaybe<Array<MilestoneSet_bool_exp>>;
  _not?: InputMaybe<MilestoneSet_bool_exp>;
  _or?: InputMaybe<Array<MilestoneSet_bool_exp>>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  grant?: InputMaybe<Grant_bool_exp>;
  grant_id?: InputMaybe<String_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  index?: InputMaybe<Int_comparison_exp>;
  milestoneLength?: InputMaybe<Int_comparison_exp>;
  milestones?: InputMaybe<Milestone_bool_exp>;
  milestonesCompleted?: InputMaybe<Int_comparison_exp>;
  milestonesPending?: InputMaybe<Int_comparison_exp>;
  milestonesRejected?: InputMaybe<Int_comparison_exp>;
  status?: InputMaybe<Int_comparison_exp>;
  timestamp?: InputMaybe<Int_comparison_exp>;
};

/** order by max() on columns of table "MilestoneSet" */
export type MilestoneSet_max_order_by = {
  db_write_timestamp?: InputMaybe<order_by>;
  grant_id?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  index?: InputMaybe<order_by>;
  milestoneLength?: InputMaybe<order_by>;
  milestonesCompleted?: InputMaybe<order_by>;
  milestonesPending?: InputMaybe<order_by>;
  milestonesRejected?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
};

/** order by min() on columns of table "MilestoneSet" */
export type MilestoneSet_min_order_by = {
  db_write_timestamp?: InputMaybe<order_by>;
  grant_id?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  index?: InputMaybe<order_by>;
  milestoneLength?: InputMaybe<order_by>;
  milestonesCompleted?: InputMaybe<order_by>;
  milestonesPending?: InputMaybe<order_by>;
  milestonesRejected?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
};

/** Ordering options when selecting data from "MilestoneSet". */
export type MilestoneSet_order_by = {
  db_write_timestamp?: InputMaybe<order_by>;
  grant?: InputMaybe<Grant_order_by>;
  grant_id?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  index?: InputMaybe<order_by>;
  milestoneLength?: InputMaybe<order_by>;
  milestonesCompleted?: InputMaybe<order_by>;
  milestonesPending?: InputMaybe<order_by>;
  milestonesRejected?: InputMaybe<order_by>;
  milestones_aggregate?: InputMaybe<Milestone_aggregate_order_by>;
  status?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
};

/** select columns of table "MilestoneSet" */
export type MilestoneSet_select_column =
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'grant_id'
  /** column name */
  | 'id'
  /** column name */
  | 'index'
  /** column name */
  | 'milestoneLength'
  /** column name */
  | 'milestonesCompleted'
  /** column name */
  | 'milestonesPending'
  /** column name */
  | 'milestonesRejected'
  /** column name */
  | 'status'
  /** column name */
  | 'timestamp';

/** order by stddev() on columns of table "MilestoneSet" */
export type MilestoneSet_stddev_order_by = {
  index?: InputMaybe<order_by>;
  milestoneLength?: InputMaybe<order_by>;
  milestonesCompleted?: InputMaybe<order_by>;
  milestonesPending?: InputMaybe<order_by>;
  milestonesRejected?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
};

/** order by stddev_pop() on columns of table "MilestoneSet" */
export type MilestoneSet_stddev_pop_order_by = {
  index?: InputMaybe<order_by>;
  milestoneLength?: InputMaybe<order_by>;
  milestonesCompleted?: InputMaybe<order_by>;
  milestonesPending?: InputMaybe<order_by>;
  milestonesRejected?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
};

/** order by stddev_samp() on columns of table "MilestoneSet" */
export type MilestoneSet_stddev_samp_order_by = {
  index?: InputMaybe<order_by>;
  milestoneLength?: InputMaybe<order_by>;
  milestonesCompleted?: InputMaybe<order_by>;
  milestonesPending?: InputMaybe<order_by>;
  milestonesRejected?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
};

/** Streaming cursor of the table "MilestoneSet" */
export type MilestoneSet_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: MilestoneSet_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type MilestoneSet_stream_cursor_value_input = {
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  grant_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['Int']>;
  milestoneLength?: InputMaybe<Scalars['Int']>;
  milestonesCompleted?: InputMaybe<Scalars['Int']>;
  milestonesPending?: InputMaybe<Scalars['Int']>;
  milestonesRejected?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  timestamp?: InputMaybe<Scalars['Int']>;
};

/** order by sum() on columns of table "MilestoneSet" */
export type MilestoneSet_sum_order_by = {
  index?: InputMaybe<order_by>;
  milestoneLength?: InputMaybe<order_by>;
  milestonesCompleted?: InputMaybe<order_by>;
  milestonesPending?: InputMaybe<order_by>;
  milestonesRejected?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
};

/** order by var_pop() on columns of table "MilestoneSet" */
export type MilestoneSet_var_pop_order_by = {
  index?: InputMaybe<order_by>;
  milestoneLength?: InputMaybe<order_by>;
  milestonesCompleted?: InputMaybe<order_by>;
  milestonesPending?: InputMaybe<order_by>;
  milestonesRejected?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
};

/** order by var_samp() on columns of table "MilestoneSet" */
export type MilestoneSet_var_samp_order_by = {
  index?: InputMaybe<order_by>;
  milestoneLength?: InputMaybe<order_by>;
  milestonesCompleted?: InputMaybe<order_by>;
  milestonesPending?: InputMaybe<order_by>;
  milestonesRejected?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
};

/** order by variance() on columns of table "MilestoneSet" */
export type MilestoneSet_variance_order_by = {
  index?: InputMaybe<order_by>;
  milestoneLength?: InputMaybe<order_by>;
  milestonesCompleted?: InputMaybe<order_by>;
  milestonesPending?: InputMaybe<order_by>;
  milestonesRejected?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
};

/** order by aggregate values of table "Milestone" */
export type Milestone_aggregate_order_by = {
  avg?: InputMaybe<Milestone_avg_order_by>;
  count?: InputMaybe<order_by>;
  max?: InputMaybe<Milestone_max_order_by>;
  min?: InputMaybe<Milestone_min_order_by>;
  stddev?: InputMaybe<Milestone_stddev_order_by>;
  stddev_pop?: InputMaybe<Milestone_stddev_pop_order_by>;
  stddev_samp?: InputMaybe<Milestone_stddev_samp_order_by>;
  sum?: InputMaybe<Milestone_sum_order_by>;
  var_pop?: InputMaybe<Milestone_var_pop_order_by>;
  var_samp?: InputMaybe<Milestone_var_samp_order_by>;
  variance?: InputMaybe<Milestone_variance_order_by>;
};

/** order by avg() on columns of table "Milestone" */
export type Milestone_avg_order_by = {
  index?: InputMaybe<order_by>;
  percentage?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
};

/** Boolean expression to filter rows from the table "Milestone". All fields are combined with a logical 'AND'. */
export type Milestone_bool_exp = {
  _and?: InputMaybe<Array<Milestone_bool_exp>>;
  _not?: InputMaybe<Milestone_bool_exp>;
  _or?: InputMaybe<Array<Milestone_bool_exp>>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  grant?: InputMaybe<Grant_bool_exp>;
  grant_id?: InputMaybe<String_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  index?: InputMaybe<Int_comparison_exp>;
  metadata?: InputMaybe<RawMetadata_bool_exp>;
  metadata_id?: InputMaybe<String_comparison_exp>;
  milestoneSet?: InputMaybe<MilestoneSet_bool_exp>;
  milestoneSet_id?: InputMaybe<String_comparison_exp>;
  percentage?: InputMaybe<numeric_comparison_exp>;
  status?: InputMaybe<Int_comparison_exp>;
};

/** order by max() on columns of table "Milestone" */
export type Milestone_max_order_by = {
  db_write_timestamp?: InputMaybe<order_by>;
  grant_id?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  index?: InputMaybe<order_by>;
  metadata_id?: InputMaybe<order_by>;
  milestoneSet_id?: InputMaybe<order_by>;
  percentage?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
};

/** order by min() on columns of table "Milestone" */
export type Milestone_min_order_by = {
  db_write_timestamp?: InputMaybe<order_by>;
  grant_id?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  index?: InputMaybe<order_by>;
  metadata_id?: InputMaybe<order_by>;
  milestoneSet_id?: InputMaybe<order_by>;
  percentage?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
};

/** Ordering options when selecting data from "Milestone". */
export type Milestone_order_by = {
  db_write_timestamp?: InputMaybe<order_by>;
  grant?: InputMaybe<Grant_order_by>;
  grant_id?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  index?: InputMaybe<order_by>;
  metadata?: InputMaybe<RawMetadata_order_by>;
  metadata_id?: InputMaybe<order_by>;
  milestoneSet?: InputMaybe<MilestoneSet_order_by>;
  milestoneSet_id?: InputMaybe<order_by>;
  percentage?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
};

/** select columns of table "Milestone" */
export type Milestone_select_column =
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'grant_id'
  /** column name */
  | 'id'
  /** column name */
  | 'index'
  /** column name */
  | 'metadata_id'
  /** column name */
  | 'milestoneSet_id'
  /** column name */
  | 'percentage'
  /** column name */
  | 'status';

/** order by stddev() on columns of table "Milestone" */
export type Milestone_stddev_order_by = {
  index?: InputMaybe<order_by>;
  percentage?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
};

/** order by stddev_pop() on columns of table "Milestone" */
export type Milestone_stddev_pop_order_by = {
  index?: InputMaybe<order_by>;
  percentage?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
};

/** order by stddev_samp() on columns of table "Milestone" */
export type Milestone_stddev_samp_order_by = {
  index?: InputMaybe<order_by>;
  percentage?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
};

/** Streaming cursor of the table "Milestone" */
export type Milestone_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: Milestone_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Milestone_stream_cursor_value_input = {
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  grant_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['Int']>;
  metadata_id?: InputMaybe<Scalars['String']>;
  milestoneSet_id?: InputMaybe<Scalars['String']>;
  percentage?: InputMaybe<Scalars['numeric']>;
  status?: InputMaybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Milestone" */
export type Milestone_sum_order_by = {
  index?: InputMaybe<order_by>;
  percentage?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
};

/** order by var_pop() on columns of table "Milestone" */
export type Milestone_var_pop_order_by = {
  index?: InputMaybe<order_by>;
  percentage?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
};

/** order by var_samp() on columns of table "Milestone" */
export type Milestone_var_samp_order_by = {
  index?: InputMaybe<order_by>;
  percentage?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
};

/** order by variance() on columns of table "Milestone" */
export type Milestone_variance_order_by = {
  index?: InputMaybe<order_by>;
  percentage?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
};

/** columns and relationships of "ModuleTemplate" */
export type ModuleTemplate = {
  active: Scalars['Boolean'];
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  id: Scalars['String'];
  mdPointer: Scalars['String'];
  mdProtocol: Scalars['numeric'];
  moduleName: Scalars['String'];
  templateAddress: Scalars['String'];
};

/** Boolean expression to filter rows from the table "ModuleTemplate". All fields are combined with a logical 'AND'. */
export type ModuleTemplate_bool_exp = {
  _and?: InputMaybe<Array<ModuleTemplate_bool_exp>>;
  _not?: InputMaybe<ModuleTemplate_bool_exp>;
  _or?: InputMaybe<Array<ModuleTemplate_bool_exp>>;
  active?: InputMaybe<Boolean_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  mdPointer?: InputMaybe<String_comparison_exp>;
  mdProtocol?: InputMaybe<numeric_comparison_exp>;
  moduleName?: InputMaybe<String_comparison_exp>;
  templateAddress?: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "ModuleTemplate". */
export type ModuleTemplate_order_by = {
  active?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  mdPointer?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
  moduleName?: InputMaybe<order_by>;
  templateAddress?: InputMaybe<order_by>;
};

/** select columns of table "ModuleTemplate" */
export type ModuleTemplate_select_column =
  /** column name */
  | 'active'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'id'
  /** column name */
  | 'mdPointer'
  /** column name */
  | 'mdProtocol'
  /** column name */
  | 'moduleName'
  /** column name */
  | 'templateAddress';

/** Streaming cursor of the table "ModuleTemplate" */
export type ModuleTemplate_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: ModuleTemplate_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type ModuleTemplate_stream_cursor_value_input = {
  active?: InputMaybe<Scalars['Boolean']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  mdPointer?: InputMaybe<Scalars['String']>;
  mdProtocol?: InputMaybe<Scalars['numeric']>;
  moduleName?: InputMaybe<Scalars['String']>;
  templateAddress?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "ProfileIdToAnchor". All fields are combined with a logical 'AND'. */
export type ProfileIdToAnchor_bool_exp = {
  _and?: InputMaybe<Array<ProfileIdToAnchor_bool_exp>>;
  _not?: InputMaybe<ProfileIdToAnchor_bool_exp>;
  _or?: InputMaybe<Array<ProfileIdToAnchor_bool_exp>>;
  anchor?: InputMaybe<String_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  profileId?: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "ProfileIdToAnchor". */
export type ProfileIdToAnchor_order_by = {
  anchor?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  profileId?: InputMaybe<order_by>;
};

/** select columns of table "ProfileIdToAnchor" */
export type ProfileIdToAnchor_select_column =
  /** column name */
  | 'anchor'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'id'
  /** column name */
  | 'profileId';

/** Streaming cursor of the table "ProfileIdToAnchor" */
export type ProfileIdToAnchor_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: ProfileIdToAnchor_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type ProfileIdToAnchor_stream_cursor_value_input = {
  anchor?: InputMaybe<Scalars['String']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  profileId?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "ProfileMemberGroup". All fields are combined with a logical 'AND'. */
export type ProfileMemberGroup_bool_exp = {
  _and?: InputMaybe<Array<ProfileMemberGroup_bool_exp>>;
  _not?: InputMaybe<ProfileMemberGroup_bool_exp>;
  _or?: InputMaybe<Array<ProfileMemberGroup_bool_exp>>;
  addresses?: InputMaybe<String_array_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  role?: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "ProfileMemberGroup". */
export type ProfileMemberGroup_order_by = {
  addresses?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  role?: InputMaybe<order_by>;
};

/** select columns of table "ProfileMemberGroup" */
export type ProfileMemberGroup_select_column =
  /** column name */
  | 'addresses'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'id'
  /** column name */
  | 'role';

/** Streaming cursor of the table "ProfileMemberGroup" */
export type ProfileMemberGroup_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: ProfileMemberGroup_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type ProfileMemberGroup_stream_cursor_value_input = {
  addresses?: InputMaybe<Array<Scalars['String']>>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "Project". All fields are combined with a logical 'AND'. */
export type Project_bool_exp = {
  _and?: InputMaybe<Array<Project_bool_exp>>;
  _not?: InputMaybe<Project_bool_exp>;
  _or?: InputMaybe<Array<Project_bool_exp>>;
  anchor?: InputMaybe<String_comparison_exp>;
  chainId?: InputMaybe<Int_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  grants?: InputMaybe<Grant_bool_exp>;
  hasEditedProfile?: InputMaybe<Boolean_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  members?: InputMaybe<ProfileMemberGroup_bool_exp>;
  members_id?: InputMaybe<String_comparison_exp>;
  metadata?: InputMaybe<RawMetadata_bool_exp>;
  metadata_id?: InputMaybe<String_comparison_exp>;
  name?: InputMaybe<String_comparison_exp>;
  nonce?: InputMaybe<numeric_comparison_exp>;
  owner?: InputMaybe<String_comparison_exp>;
  pastNames?: InputMaybe<String_array_comparison_exp>;
  pastProfileIds?: InputMaybe<String_array_comparison_exp>;
  profileId?: InputMaybe<String_comparison_exp>;
  status?: InputMaybe<Int_comparison_exp>;
  totalAmountReceived?: InputMaybe<numeric_comparison_exp>;
};

/** Ordering options when selecting data from "Project". */
export type Project_order_by = {
  anchor?: InputMaybe<order_by>;
  chainId?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  grants_aggregate?: InputMaybe<Grant_aggregate_order_by>;
  hasEditedProfile?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  members?: InputMaybe<ProfileMemberGroup_order_by>;
  members_id?: InputMaybe<order_by>;
  metadata?: InputMaybe<RawMetadata_order_by>;
  metadata_id?: InputMaybe<order_by>;
  name?: InputMaybe<order_by>;
  nonce?: InputMaybe<order_by>;
  owner?: InputMaybe<order_by>;
  pastNames?: InputMaybe<order_by>;
  pastProfileIds?: InputMaybe<order_by>;
  profileId?: InputMaybe<order_by>;
  status?: InputMaybe<order_by>;
  totalAmountReceived?: InputMaybe<order_by>;
};

/** select columns of table "Project" */
export type Project_select_column =
  /** column name */
  | 'anchor'
  /** column name */
  | 'chainId'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'hasEditedProfile'
  /** column name */
  | 'id'
  /** column name */
  | 'members_id'
  /** column name */
  | 'metadata_id'
  /** column name */
  | 'name'
  /** column name */
  | 'nonce'
  /** column name */
  | 'owner'
  /** column name */
  | 'pastNames'
  /** column name */
  | 'pastProfileIds'
  /** column name */
  | 'profileId'
  /** column name */
  | 'status'
  /** column name */
  | 'totalAmountReceived';

/** Streaming cursor of the table "Project" */
export type Project_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: Project_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Project_stream_cursor_value_input = {
  anchor?: InputMaybe<Scalars['String']>;
  chainId?: InputMaybe<Scalars['Int']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  hasEditedProfile?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  members_id?: InputMaybe<Scalars['String']>;
  metadata_id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  nonce?: InputMaybe<Scalars['numeric']>;
  owner?: InputMaybe<Scalars['String']>;
  pastNames?: InputMaybe<Array<Scalars['String']>>;
  pastProfileIds?: InputMaybe<Array<Scalars['String']>>;
  profileId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  totalAmountReceived?: InputMaybe<Scalars['numeric']>;
};

/** Boolean expression to filter rows from the table "RawMetadata". All fields are combined with a logical 'AND'. */
export type RawMetadata_bool_exp = {
  _and?: InputMaybe<Array<RawMetadata_bool_exp>>;
  _not?: InputMaybe<RawMetadata_bool_exp>;
  _or?: InputMaybe<Array<RawMetadata_bool_exp>>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  pointer?: InputMaybe<String_comparison_exp>;
  protocol?: InputMaybe<numeric_comparison_exp>;
};

/** Ordering options when selecting data from "RawMetadata". */
export type RawMetadata_order_by = {
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  pointer?: InputMaybe<order_by>;
  protocol?: InputMaybe<order_by>;
};

/** select columns of table "RawMetadata" */
export type RawMetadata_select_column =
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'id'
  /** column name */
  | 'pointer'
  /** column name */
  | 'protocol';

/** Streaming cursor of the table "RawMetadata" */
export type RawMetadata_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: RawMetadata_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type RawMetadata_stream_cursor_value_input = {
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  pointer?: InputMaybe<Scalars['String']>;
  protocol?: InputMaybe<Scalars['numeric']>;
};

/** columns and relationships of "Record" */
export type Record = {
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  hatId: Scalars['numeric'];
  /** An object relationship */
  hatsPoster?: Maybe<HatsPoster>;
  hatsPoster_id: Scalars['String'];
  id: Scalars['String'];
  mdPointer: Scalars['String'];
  mdProtocol: Scalars['numeric'];
  nonce: Scalars['String'];
  tag: Scalars['String'];
};

/** order by aggregate values of table "Record" */
export type Record_aggregate_order_by = {
  avg?: InputMaybe<Record_avg_order_by>;
  count?: InputMaybe<order_by>;
  max?: InputMaybe<Record_max_order_by>;
  min?: InputMaybe<Record_min_order_by>;
  stddev?: InputMaybe<Record_stddev_order_by>;
  stddev_pop?: InputMaybe<Record_stddev_pop_order_by>;
  stddev_samp?: InputMaybe<Record_stddev_samp_order_by>;
  sum?: InputMaybe<Record_sum_order_by>;
  var_pop?: InputMaybe<Record_var_pop_order_by>;
  var_samp?: InputMaybe<Record_var_samp_order_by>;
  variance?: InputMaybe<Record_variance_order_by>;
};

/** order by avg() on columns of table "Record" */
export type Record_avg_order_by = {
  hatId?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
};

/** Boolean expression to filter rows from the table "Record". All fields are combined with a logical 'AND'. */
export type Record_bool_exp = {
  _and?: InputMaybe<Array<Record_bool_exp>>;
  _not?: InputMaybe<Record_bool_exp>;
  _or?: InputMaybe<Array<Record_bool_exp>>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  hatId?: InputMaybe<numeric_comparison_exp>;
  hatsPoster?: InputMaybe<HatsPoster_bool_exp>;
  hatsPoster_id?: InputMaybe<String_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  mdPointer?: InputMaybe<String_comparison_exp>;
  mdProtocol?: InputMaybe<numeric_comparison_exp>;
  nonce?: InputMaybe<String_comparison_exp>;
  tag?: InputMaybe<String_comparison_exp>;
};

/** order by max() on columns of table "Record" */
export type Record_max_order_by = {
  db_write_timestamp?: InputMaybe<order_by>;
  hatId?: InputMaybe<order_by>;
  hatsPoster_id?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  mdPointer?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
  nonce?: InputMaybe<order_by>;
  tag?: InputMaybe<order_by>;
};

/** order by min() on columns of table "Record" */
export type Record_min_order_by = {
  db_write_timestamp?: InputMaybe<order_by>;
  hatId?: InputMaybe<order_by>;
  hatsPoster_id?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  mdPointer?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
  nonce?: InputMaybe<order_by>;
  tag?: InputMaybe<order_by>;
};

/** Ordering options when selecting data from "Record". */
export type Record_order_by = {
  db_write_timestamp?: InputMaybe<order_by>;
  hatId?: InputMaybe<order_by>;
  hatsPoster?: InputMaybe<HatsPoster_order_by>;
  hatsPoster_id?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  mdPointer?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
  nonce?: InputMaybe<order_by>;
  tag?: InputMaybe<order_by>;
};

/** select columns of table "Record" */
export type Record_select_column =
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'hatId'
  /** column name */
  | 'hatsPoster_id'
  /** column name */
  | 'id'
  /** column name */
  | 'mdPointer'
  /** column name */
  | 'mdProtocol'
  /** column name */
  | 'nonce'
  /** column name */
  | 'tag';

/** order by stddev() on columns of table "Record" */
export type Record_stddev_order_by = {
  hatId?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
};

/** order by stddev_pop() on columns of table "Record" */
export type Record_stddev_pop_order_by = {
  hatId?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
};

/** order by stddev_samp() on columns of table "Record" */
export type Record_stddev_samp_order_by = {
  hatId?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
};

/** Streaming cursor of the table "Record" */
export type Record_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: Record_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Record_stream_cursor_value_input = {
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  hatId?: InputMaybe<Scalars['numeric']>;
  hatsPoster_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  mdPointer?: InputMaybe<Scalars['String']>;
  mdProtocol?: InputMaybe<Scalars['numeric']>;
  nonce?: InputMaybe<Scalars['String']>;
  tag?: InputMaybe<Scalars['String']>;
};

/** order by sum() on columns of table "Record" */
export type Record_sum_order_by = {
  hatId?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
};

/** order by var_pop() on columns of table "Record" */
export type Record_var_pop_order_by = {
  hatId?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
};

/** order by var_samp() on columns of table "Record" */
export type Record_var_samp_order_by = {
  hatId?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
};

/** order by variance() on columns of table "Record" */
export type Record_variance_order_by = {
  hatId?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
};

/** columns and relationships of "SBTBalParams" */
export type SBTBalParams = {
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  id: Scalars['String'];
  voteTokenAddress: Scalars['String'];
};

/** Boolean expression to filter rows from the table "SBTBalParams". All fields are combined with a logical 'AND'. */
export type SBTBalParams_bool_exp = {
  _and?: InputMaybe<Array<SBTBalParams_bool_exp>>;
  _not?: InputMaybe<SBTBalParams_bool_exp>;
  _or?: InputMaybe<Array<SBTBalParams_bool_exp>>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  voteTokenAddress?: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "SBTBalParams". */
export type SBTBalParams_order_by = {
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  voteTokenAddress?: InputMaybe<order_by>;
};

/** select columns of table "SBTBalParams" */
export type SBTBalParams_select_column =
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'id'
  /** column name */
  | 'voteTokenAddress';

/** Streaming cursor of the table "SBTBalParams" */
export type SBTBalParams_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: SBTBalParams_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type SBTBalParams_stream_cursor_value_input = {
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  voteTokenAddress?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "ScaffoldShaman" */
export type ScaffoldShaman = {
  address: Scalars['String'];
  /** An object relationship */
  controlGate?: Maybe<Gate>;
  controlGate_id: Scalars['String'];
  dao: Scalars['String'];
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  id: Scalars['String'];
  /** An object relationship */
  lootToken?: Maybe<DAOToken>;
  lootToken_id: Scalars['String'];
  /** An object relationship */
  managerGate?: Maybe<Gate>;
  managerGate_id: Scalars['String'];
  /** An object relationship */
  minterGate?: Maybe<Gate>;
  minterGate_id: Scalars['String'];
  /** An object relationship */
  sharesToken?: Maybe<DAOToken>;
  sharesToken_id: Scalars['String'];
  /** An array relationship */
  templates: Array<BadgeTemplate>;
};


/** columns and relationships of "ScaffoldShaman" */
export type ScaffoldShamantemplatesArgs = {
  distinct_on?: InputMaybe<Array<BadgeTemplate_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BadgeTemplate_order_by>>;
  where?: InputMaybe<BadgeTemplate_bool_exp>;
};

/** Boolean expression to filter rows from the table "ScaffoldShaman". All fields are combined with a logical 'AND'. */
export type ScaffoldShaman_bool_exp = {
  _and?: InputMaybe<Array<ScaffoldShaman_bool_exp>>;
  _not?: InputMaybe<ScaffoldShaman_bool_exp>;
  _or?: InputMaybe<Array<ScaffoldShaman_bool_exp>>;
  address?: InputMaybe<String_comparison_exp>;
  controlGate?: InputMaybe<Gate_bool_exp>;
  controlGate_id?: InputMaybe<String_comparison_exp>;
  dao?: InputMaybe<String_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  lootToken?: InputMaybe<DAOToken_bool_exp>;
  lootToken_id?: InputMaybe<String_comparison_exp>;
  managerGate?: InputMaybe<Gate_bool_exp>;
  managerGate_id?: InputMaybe<String_comparison_exp>;
  minterGate?: InputMaybe<Gate_bool_exp>;
  minterGate_id?: InputMaybe<String_comparison_exp>;
  sharesToken?: InputMaybe<DAOToken_bool_exp>;
  sharesToken_id?: InputMaybe<String_comparison_exp>;
  templates?: InputMaybe<BadgeTemplate_bool_exp>;
};

/** Ordering options when selecting data from "ScaffoldShaman". */
export type ScaffoldShaman_order_by = {
  address?: InputMaybe<order_by>;
  controlGate?: InputMaybe<Gate_order_by>;
  controlGate_id?: InputMaybe<order_by>;
  dao?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  lootToken?: InputMaybe<DAOToken_order_by>;
  lootToken_id?: InputMaybe<order_by>;
  managerGate?: InputMaybe<Gate_order_by>;
  managerGate_id?: InputMaybe<order_by>;
  minterGate?: InputMaybe<Gate_order_by>;
  minterGate_id?: InputMaybe<order_by>;
  sharesToken?: InputMaybe<DAOToken_order_by>;
  sharesToken_id?: InputMaybe<order_by>;
  templates_aggregate?: InputMaybe<BadgeTemplate_aggregate_order_by>;
};

/** select columns of table "ScaffoldShaman" */
export type ScaffoldShaman_select_column =
  /** column name */
  | 'address'
  /** column name */
  | 'controlGate_id'
  /** column name */
  | 'dao'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'id'
  /** column name */
  | 'lootToken_id'
  /** column name */
  | 'managerGate_id'
  /** column name */
  | 'minterGate_id'
  /** column name */
  | 'sharesToken_id';

/** Streaming cursor of the table "ScaffoldShaman" */
export type ScaffoldShaman_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: ScaffoldShaman_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type ScaffoldShaman_stream_cursor_value_input = {
  address?: InputMaybe<Scalars['String']>;
  controlGate_id?: InputMaybe<Scalars['String']>;
  dao?: InputMaybe<Scalars['String']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  lootToken_id?: InputMaybe<Scalars['String']>;
  managerGate_id?: InputMaybe<Scalars['String']>;
  minterGate_id?: InputMaybe<Scalars['String']>;
  sharesToken_id?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "ShipChoice" */
export type ShipChoice = {
  active: Scalars['Boolean'];
  choiceData: Scalars['String'];
  /** An object relationship */
  contest?: Maybe<GrantShipsVoting>;
  contest_id: Scalars['String'];
  contextTokenTally: Scalars['numeric'];
  daoTokenTally: Scalars['numeric'];
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  id: Scalars['String'];
  mdPointer: Scalars['String'];
  mdProtocol: Scalars['numeric'];
  voteTally: Scalars['numeric'];
  /** An array relationship */
  votes: Array<ShipVote>;
};


/** columns and relationships of "ShipChoice" */
export type ShipChoicevotesArgs = {
  distinct_on?: InputMaybe<Array<ShipVote_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ShipVote_order_by>>;
  where?: InputMaybe<ShipVote_bool_exp>;
};

/** order by aggregate values of table "ShipChoice" */
export type ShipChoice_aggregate_order_by = {
  avg?: InputMaybe<ShipChoice_avg_order_by>;
  count?: InputMaybe<order_by>;
  max?: InputMaybe<ShipChoice_max_order_by>;
  min?: InputMaybe<ShipChoice_min_order_by>;
  stddev?: InputMaybe<ShipChoice_stddev_order_by>;
  stddev_pop?: InputMaybe<ShipChoice_stddev_pop_order_by>;
  stddev_samp?: InputMaybe<ShipChoice_stddev_samp_order_by>;
  sum?: InputMaybe<ShipChoice_sum_order_by>;
  var_pop?: InputMaybe<ShipChoice_var_pop_order_by>;
  var_samp?: InputMaybe<ShipChoice_var_samp_order_by>;
  variance?: InputMaybe<ShipChoice_variance_order_by>;
};

/** order by avg() on columns of table "ShipChoice" */
export type ShipChoice_avg_order_by = {
  contextTokenTally?: InputMaybe<order_by>;
  daoTokenTally?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
  voteTally?: InputMaybe<order_by>;
};

/** Boolean expression to filter rows from the table "ShipChoice". All fields are combined with a logical 'AND'. */
export type ShipChoice_bool_exp = {
  _and?: InputMaybe<Array<ShipChoice_bool_exp>>;
  _not?: InputMaybe<ShipChoice_bool_exp>;
  _or?: InputMaybe<Array<ShipChoice_bool_exp>>;
  active?: InputMaybe<Boolean_comparison_exp>;
  choiceData?: InputMaybe<String_comparison_exp>;
  contest?: InputMaybe<GrantShipsVoting_bool_exp>;
  contest_id?: InputMaybe<String_comparison_exp>;
  contextTokenTally?: InputMaybe<numeric_comparison_exp>;
  daoTokenTally?: InputMaybe<numeric_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  mdPointer?: InputMaybe<String_comparison_exp>;
  mdProtocol?: InputMaybe<numeric_comparison_exp>;
  voteTally?: InputMaybe<numeric_comparison_exp>;
  votes?: InputMaybe<ShipVote_bool_exp>;
};

/** order by max() on columns of table "ShipChoice" */
export type ShipChoice_max_order_by = {
  choiceData?: InputMaybe<order_by>;
  contest_id?: InputMaybe<order_by>;
  contextTokenTally?: InputMaybe<order_by>;
  daoTokenTally?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  mdPointer?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
  voteTally?: InputMaybe<order_by>;
};

/** order by min() on columns of table "ShipChoice" */
export type ShipChoice_min_order_by = {
  choiceData?: InputMaybe<order_by>;
  contest_id?: InputMaybe<order_by>;
  contextTokenTally?: InputMaybe<order_by>;
  daoTokenTally?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  mdPointer?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
  voteTally?: InputMaybe<order_by>;
};

/** Ordering options when selecting data from "ShipChoice". */
export type ShipChoice_order_by = {
  active?: InputMaybe<order_by>;
  choiceData?: InputMaybe<order_by>;
  contest?: InputMaybe<GrantShipsVoting_order_by>;
  contest_id?: InputMaybe<order_by>;
  contextTokenTally?: InputMaybe<order_by>;
  daoTokenTally?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  mdPointer?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
  voteTally?: InputMaybe<order_by>;
  votes_aggregate?: InputMaybe<ShipVote_aggregate_order_by>;
};

/** select columns of table "ShipChoice" */
export type ShipChoice_select_column =
  /** column name */
  | 'active'
  /** column name */
  | 'choiceData'
  /** column name */
  | 'contest_id'
  /** column name */
  | 'contextTokenTally'
  /** column name */
  | 'daoTokenTally'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'id'
  /** column name */
  | 'mdPointer'
  /** column name */
  | 'mdProtocol'
  /** column name */
  | 'voteTally';

/** order by stddev() on columns of table "ShipChoice" */
export type ShipChoice_stddev_order_by = {
  contextTokenTally?: InputMaybe<order_by>;
  daoTokenTally?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
  voteTally?: InputMaybe<order_by>;
};

/** order by stddev_pop() on columns of table "ShipChoice" */
export type ShipChoice_stddev_pop_order_by = {
  contextTokenTally?: InputMaybe<order_by>;
  daoTokenTally?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
  voteTally?: InputMaybe<order_by>;
};

/** order by stddev_samp() on columns of table "ShipChoice" */
export type ShipChoice_stddev_samp_order_by = {
  contextTokenTally?: InputMaybe<order_by>;
  daoTokenTally?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
  voteTally?: InputMaybe<order_by>;
};

/** Streaming cursor of the table "ShipChoice" */
export type ShipChoice_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: ShipChoice_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type ShipChoice_stream_cursor_value_input = {
  active?: InputMaybe<Scalars['Boolean']>;
  choiceData?: InputMaybe<Scalars['String']>;
  contest_id?: InputMaybe<Scalars['String']>;
  contextTokenTally?: InputMaybe<Scalars['numeric']>;
  daoTokenTally?: InputMaybe<Scalars['numeric']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  mdPointer?: InputMaybe<Scalars['String']>;
  mdProtocol?: InputMaybe<Scalars['numeric']>;
  voteTally?: InputMaybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "ShipChoice" */
export type ShipChoice_sum_order_by = {
  contextTokenTally?: InputMaybe<order_by>;
  daoTokenTally?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
  voteTally?: InputMaybe<order_by>;
};

/** order by var_pop() on columns of table "ShipChoice" */
export type ShipChoice_var_pop_order_by = {
  contextTokenTally?: InputMaybe<order_by>;
  daoTokenTally?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
  voteTally?: InputMaybe<order_by>;
};

/** order by var_samp() on columns of table "ShipChoice" */
export type ShipChoice_var_samp_order_by = {
  contextTokenTally?: InputMaybe<order_by>;
  daoTokenTally?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
  voteTally?: InputMaybe<order_by>;
};

/** order by variance() on columns of table "ShipChoice" */
export type ShipChoice_variance_order_by = {
  contextTokenTally?: InputMaybe<order_by>;
  daoTokenTally?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
  voteTally?: InputMaybe<order_by>;
};

/** columns and relationships of "ShipContext" */
export type ShipContext = {
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  gameManager_id: Scalars['String'];
  grantShip_id: Scalars['String'];
  id: Scalars['String'];
  shipAddress: Scalars['String'];
};

/** Boolean expression to filter rows from the table "ShipContext". All fields are combined with a logical 'AND'. */
export type ShipContext_bool_exp = {
  _and?: InputMaybe<Array<ShipContext_bool_exp>>;
  _not?: InputMaybe<ShipContext_bool_exp>;
  _or?: InputMaybe<Array<ShipContext_bool_exp>>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  gameManager?: InputMaybe<GameManager_bool_exp>;
  gameManager_id?: InputMaybe<String_comparison_exp>;
  grantShip?: InputMaybe<GrantShip_bool_exp>;
  grantShip_id?: InputMaybe<String_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  shipAddress?: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "ShipContext". */
export type ShipContext_order_by = {
  db_write_timestamp?: InputMaybe<order_by>;
  gameManager?: InputMaybe<GameManager_order_by>;
  gameManager_id?: InputMaybe<order_by>;
  grantShip?: InputMaybe<GrantShip_order_by>;
  grantShip_id?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  shipAddress?: InputMaybe<order_by>;
};

/** select columns of table "ShipContext" */
export type ShipContext_select_column =
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'gameManager_id'
  /** column name */
  | 'grantShip_id'
  /** column name */
  | 'id'
  /** column name */
  | 'shipAddress';

/** Streaming cursor of the table "ShipContext" */
export type ShipContext_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: ShipContext_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type ShipContext_stream_cursor_value_input = {
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  gameManager_id?: InputMaybe<Scalars['String']>;
  grantShip_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  shipAddress?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "ShipVote" */
export type ShipVote = {
  amount: Scalars['numeric'];
  /** An object relationship */
  choice?: Maybe<ShipChoice>;
  choice_id: Scalars['String'];
  /** An object relationship */
  contest?: Maybe<GrantShipsVoting>;
  contest_id: Scalars['String'];
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  id: Scalars['String'];
  isRetractVote: Scalars['Boolean'];
  mdPointer: Scalars['String'];
  mdProtocol: Scalars['numeric'];
  token: Scalars['String'];
  /** An object relationship */
  voter?: Maybe<GSVoter>;
  voter_id: Scalars['String'];
};

/** order by aggregate values of table "ShipVote" */
export type ShipVote_aggregate_order_by = {
  avg?: InputMaybe<ShipVote_avg_order_by>;
  count?: InputMaybe<order_by>;
  max?: InputMaybe<ShipVote_max_order_by>;
  min?: InputMaybe<ShipVote_min_order_by>;
  stddev?: InputMaybe<ShipVote_stddev_order_by>;
  stddev_pop?: InputMaybe<ShipVote_stddev_pop_order_by>;
  stddev_samp?: InputMaybe<ShipVote_stddev_samp_order_by>;
  sum?: InputMaybe<ShipVote_sum_order_by>;
  var_pop?: InputMaybe<ShipVote_var_pop_order_by>;
  var_samp?: InputMaybe<ShipVote_var_samp_order_by>;
  variance?: InputMaybe<ShipVote_variance_order_by>;
};

/** order by avg() on columns of table "ShipVote" */
export type ShipVote_avg_order_by = {
  amount?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
};

/** Boolean expression to filter rows from the table "ShipVote". All fields are combined with a logical 'AND'. */
export type ShipVote_bool_exp = {
  _and?: InputMaybe<Array<ShipVote_bool_exp>>;
  _not?: InputMaybe<ShipVote_bool_exp>;
  _or?: InputMaybe<Array<ShipVote_bool_exp>>;
  amount?: InputMaybe<numeric_comparison_exp>;
  choice?: InputMaybe<ShipChoice_bool_exp>;
  choice_id?: InputMaybe<String_comparison_exp>;
  contest?: InputMaybe<GrantShipsVoting_bool_exp>;
  contest_id?: InputMaybe<String_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  isRetractVote?: InputMaybe<Boolean_comparison_exp>;
  mdPointer?: InputMaybe<String_comparison_exp>;
  mdProtocol?: InputMaybe<numeric_comparison_exp>;
  token?: InputMaybe<String_comparison_exp>;
  voter?: InputMaybe<GSVoter_bool_exp>;
  voter_id?: InputMaybe<String_comparison_exp>;
};

/** order by max() on columns of table "ShipVote" */
export type ShipVote_max_order_by = {
  amount?: InputMaybe<order_by>;
  choice_id?: InputMaybe<order_by>;
  contest_id?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  mdPointer?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
  token?: InputMaybe<order_by>;
  voter_id?: InputMaybe<order_by>;
};

/** order by min() on columns of table "ShipVote" */
export type ShipVote_min_order_by = {
  amount?: InputMaybe<order_by>;
  choice_id?: InputMaybe<order_by>;
  contest_id?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  mdPointer?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
  token?: InputMaybe<order_by>;
  voter_id?: InputMaybe<order_by>;
};

/** Ordering options when selecting data from "ShipVote". */
export type ShipVote_order_by = {
  amount?: InputMaybe<order_by>;
  choice?: InputMaybe<ShipChoice_order_by>;
  choice_id?: InputMaybe<order_by>;
  contest?: InputMaybe<GrantShipsVoting_order_by>;
  contest_id?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  isRetractVote?: InputMaybe<order_by>;
  mdPointer?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
  token?: InputMaybe<order_by>;
  voter?: InputMaybe<GSVoter_order_by>;
  voter_id?: InputMaybe<order_by>;
};

/** select columns of table "ShipVote" */
export type ShipVote_select_column =
  /** column name */
  | 'amount'
  /** column name */
  | 'choice_id'
  /** column name */
  | 'contest_id'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'id'
  /** column name */
  | 'isRetractVote'
  /** column name */
  | 'mdPointer'
  /** column name */
  | 'mdProtocol'
  /** column name */
  | 'token'
  /** column name */
  | 'voter_id';

/** order by stddev() on columns of table "ShipVote" */
export type ShipVote_stddev_order_by = {
  amount?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
};

/** order by stddev_pop() on columns of table "ShipVote" */
export type ShipVote_stddev_pop_order_by = {
  amount?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
};

/** order by stddev_samp() on columns of table "ShipVote" */
export type ShipVote_stddev_samp_order_by = {
  amount?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
};

/** Streaming cursor of the table "ShipVote" */
export type ShipVote_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: ShipVote_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type ShipVote_stream_cursor_value_input = {
  amount?: InputMaybe<Scalars['numeric']>;
  choice_id?: InputMaybe<Scalars['String']>;
  contest_id?: InputMaybe<Scalars['String']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  isRetractVote?: InputMaybe<Scalars['Boolean']>;
  mdPointer?: InputMaybe<Scalars['String']>;
  mdProtocol?: InputMaybe<Scalars['numeric']>;
  token?: InputMaybe<Scalars['String']>;
  voter_id?: InputMaybe<Scalars['String']>;
};

/** order by sum() on columns of table "ShipVote" */
export type ShipVote_sum_order_by = {
  amount?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
};

/** order by var_pop() on columns of table "ShipVote" */
export type ShipVote_var_pop_order_by = {
  amount?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
};

/** order by var_samp() on columns of table "ShipVote" */
export type ShipVote_var_samp_order_by = {
  amount?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
};

/** order by variance() on columns of table "ShipVote" */
export type ShipVote_variance_order_by = {
  amount?: InputMaybe<order_by>;
  mdProtocol?: InputMaybe<order_by>;
};

/** columns and relationships of "StemModule" */
export type StemModule = {
  /** An object relationship */
  contest?: Maybe<Contest>;
  contestAddress?: Maybe<Scalars['String']>;
  contest_id?: Maybe<Scalars['String']>;
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  filterTag: Scalars['String'];
  id: Scalars['String'];
  moduleAddress: Scalars['String'];
  moduleName: Scalars['String'];
  /** An object relationship */
  moduleTemplate?: Maybe<ModuleTemplate>;
  moduleTemplate_id: Scalars['String'];
};

/** Boolean expression to filter rows from the table "StemModule". All fields are combined with a logical 'AND'. */
export type StemModule_bool_exp = {
  _and?: InputMaybe<Array<StemModule_bool_exp>>;
  _not?: InputMaybe<StemModule_bool_exp>;
  _or?: InputMaybe<Array<StemModule_bool_exp>>;
  contest?: InputMaybe<Contest_bool_exp>;
  contestAddress?: InputMaybe<String_comparison_exp>;
  contest_id?: InputMaybe<String_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  filterTag?: InputMaybe<String_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  moduleAddress?: InputMaybe<String_comparison_exp>;
  moduleName?: InputMaybe<String_comparison_exp>;
  moduleTemplate?: InputMaybe<ModuleTemplate_bool_exp>;
  moduleTemplate_id?: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "StemModule". */
export type StemModule_order_by = {
  contest?: InputMaybe<Contest_order_by>;
  contestAddress?: InputMaybe<order_by>;
  contest_id?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  filterTag?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  moduleAddress?: InputMaybe<order_by>;
  moduleName?: InputMaybe<order_by>;
  moduleTemplate?: InputMaybe<ModuleTemplate_order_by>;
  moduleTemplate_id?: InputMaybe<order_by>;
};

/** select columns of table "StemModule" */
export type StemModule_select_column =
  /** column name */
  | 'contestAddress'
  /** column name */
  | 'contest_id'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'filterTag'
  /** column name */
  | 'id'
  /** column name */
  | 'moduleAddress'
  /** column name */
  | 'moduleName'
  /** column name */
  | 'moduleTemplate_id';

/** Streaming cursor of the table "StemModule" */
export type StemModule_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: StemModule_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type StemModule_stream_cursor_value_input = {
  contestAddress?: InputMaybe<Scalars['String']>;
  contest_id?: InputMaybe<Scalars['String']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  filterTag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  moduleAddress?: InputMaybe<Scalars['String']>;
  moduleName?: InputMaybe<Scalars['String']>;
  moduleTemplate_id?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_array_comparison_exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['String']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['String']>>;
  _eq?: InputMaybe<Array<Scalars['String']>>;
  _gt?: InputMaybe<Array<Scalars['String']>>;
  _gte?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Array<Scalars['String']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Array<Scalars['String']>>;
  _lte?: InputMaybe<Array<Scalars['String']>>;
  _neq?: InputMaybe<Array<Scalars['String']>>;
  _nin?: InputMaybe<Array<Array<Scalars['String']>>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_comparison_exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "TVParams" */
export type TVParams = {
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  id: Scalars['String'];
  voteDuration: Scalars['numeric'];
};

/** Boolean expression to filter rows from the table "TVParams". All fields are combined with a logical 'AND'. */
export type TVParams_bool_exp = {
  _and?: InputMaybe<Array<TVParams_bool_exp>>;
  _not?: InputMaybe<TVParams_bool_exp>;
  _or?: InputMaybe<Array<TVParams_bool_exp>>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  voteDuration?: InputMaybe<numeric_comparison_exp>;
};

/** Ordering options when selecting data from "TVParams". */
export type TVParams_order_by = {
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  voteDuration?: InputMaybe<order_by>;
};

/** select columns of table "TVParams" */
export type TVParams_select_column =
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'id'
  /** column name */
  | 'voteDuration';

/** Streaming cursor of the table "TVParams" */
export type TVParams_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: TVParams_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TVParams_stream_cursor_value_input = {
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  voteDuration?: InputMaybe<Scalars['numeric']>;
};

/** Boolean expression to filter rows from the table "Transaction". All fields are combined with a logical 'AND'. */
export type Transaction_bool_exp = {
  _and?: InputMaybe<Array<Transaction_bool_exp>>;
  _not?: InputMaybe<Transaction_bool_exp>;
  _or?: InputMaybe<Array<Transaction_bool_exp>>;
  blockNumber?: InputMaybe<numeric_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  srcAddress?: InputMaybe<String_comparison_exp>;
  timestamp?: InputMaybe<Int_comparison_exp>;
  txHash?: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "Transaction". */
export type Transaction_order_by = {
  blockNumber?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  srcAddress?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
  txHash?: InputMaybe<order_by>;
};

/** select columns of table "Transaction" */
export type Transaction_select_column =
  /** column name */
  | 'blockNumber'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'id'
  /** column name */
  | 'srcAddress'
  /** column name */
  | 'timestamp'
  /** column name */
  | 'txHash';

/** Streaming cursor of the table "Transaction" */
export type Transaction_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: Transaction_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transaction_stream_cursor_value_input = {
  blockNumber?: InputMaybe<Scalars['numeric']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  srcAddress?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  txHash?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "Update". All fields are combined with a logical 'AND'. */
export type Update_bool_exp = {
  _and?: InputMaybe<Array<Update_bool_exp>>;
  _not?: InputMaybe<Update_bool_exp>;
  _or?: InputMaybe<Array<Update_bool_exp>>;
  chainId?: InputMaybe<Int_comparison_exp>;
  content?: InputMaybe<RawMetadata_bool_exp>;
  contentSchema?: InputMaybe<Int_comparison_exp>;
  content_id?: InputMaybe<String_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  domain?: InputMaybe<GameManager_bool_exp>;
  domain_id?: InputMaybe<String_comparison_exp>;
  entityAddress?: InputMaybe<String_comparison_exp>;
  entityMetadata?: InputMaybe<RawMetadata_bool_exp>;
  entityMetadata_id?: InputMaybe<String_comparison_exp>;
  hostEntityId?: InputMaybe<String_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  message?: InputMaybe<String_comparison_exp>;
  playerType?: InputMaybe<Int_comparison_exp>;
  postBlockNumber?: InputMaybe<Int_comparison_exp>;
  postDecorator?: InputMaybe<Int_comparison_exp>;
  postedBy?: InputMaybe<String_comparison_exp>;
  scope?: InputMaybe<Int_comparison_exp>;
  tag?: InputMaybe<String_comparison_exp>;
  timestamp?: InputMaybe<Int_comparison_exp>;
};

/** Ordering options when selecting data from "Update". */
export type Update_order_by = {
  chainId?: InputMaybe<order_by>;
  content?: InputMaybe<RawMetadata_order_by>;
  contentSchema?: InputMaybe<order_by>;
  content_id?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  domain?: InputMaybe<GameManager_order_by>;
  domain_id?: InputMaybe<order_by>;
  entityAddress?: InputMaybe<order_by>;
  entityMetadata?: InputMaybe<RawMetadata_order_by>;
  entityMetadata_id?: InputMaybe<order_by>;
  hostEntityId?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  message?: InputMaybe<order_by>;
  playerType?: InputMaybe<order_by>;
  postBlockNumber?: InputMaybe<order_by>;
  postDecorator?: InputMaybe<order_by>;
  postedBy?: InputMaybe<order_by>;
  scope?: InputMaybe<order_by>;
  tag?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
};

/** select columns of table "Update" */
export type Update_select_column =
  /** column name */
  | 'chainId'
  /** column name */
  | 'contentSchema'
  /** column name */
  | 'content_id'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'domain_id'
  /** column name */
  | 'entityAddress'
  /** column name */
  | 'entityMetadata_id'
  /** column name */
  | 'hostEntityId'
  /** column name */
  | 'id'
  /** column name */
  | 'message'
  /** column name */
  | 'playerType'
  /** column name */
  | 'postBlockNumber'
  /** column name */
  | 'postDecorator'
  /** column name */
  | 'postedBy'
  /** column name */
  | 'scope'
  /** column name */
  | 'tag'
  /** column name */
  | 'timestamp';

/** Streaming cursor of the table "Update" */
export type Update_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: Update_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Update_stream_cursor_value_input = {
  chainId?: InputMaybe<Scalars['Int']>;
  contentSchema?: InputMaybe<Scalars['Int']>;
  content_id?: InputMaybe<Scalars['String']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  domain_id?: InputMaybe<Scalars['String']>;
  entityAddress?: InputMaybe<Scalars['String']>;
  entityMetadata_id?: InputMaybe<Scalars['String']>;
  hostEntityId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  playerType?: InputMaybe<Scalars['Int']>;
  postBlockNumber?: InputMaybe<Scalars['Int']>;
  postDecorator?: InputMaybe<Scalars['Int']>;
  postedBy?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['Int']>;
  tag?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
};

/** columns and relationships of "chain_metadata" */
export type chain_metadata = {
  block_height: Scalars['Int'];
  chain_id: Scalars['Int'];
  end_block?: Maybe<Scalars['Int']>;
  first_event_block_number?: Maybe<Scalars['Int']>;
  is_hyper_sync: Scalars['Boolean'];
  latest_fetched_block_number: Scalars['Int'];
  latest_processed_block?: Maybe<Scalars['Int']>;
  num_batches_fetched: Scalars['Int'];
  num_events_processed?: Maybe<Scalars['Int']>;
  start_block: Scalars['Int'];
  timestamp_caught_up_to_head_or_endblock?: Maybe<Scalars['timestamptz']>;
};

/** Boolean expression to filter rows from the table "chain_metadata". All fields are combined with a logical 'AND'. */
export type chain_metadata_bool_exp = {
  _and?: InputMaybe<Array<chain_metadata_bool_exp>>;
  _not?: InputMaybe<chain_metadata_bool_exp>;
  _or?: InputMaybe<Array<chain_metadata_bool_exp>>;
  block_height?: InputMaybe<Int_comparison_exp>;
  chain_id?: InputMaybe<Int_comparison_exp>;
  end_block?: InputMaybe<Int_comparison_exp>;
  first_event_block_number?: InputMaybe<Int_comparison_exp>;
  is_hyper_sync?: InputMaybe<Boolean_comparison_exp>;
  latest_fetched_block_number?: InputMaybe<Int_comparison_exp>;
  latest_processed_block?: InputMaybe<Int_comparison_exp>;
  num_batches_fetched?: InputMaybe<Int_comparison_exp>;
  num_events_processed?: InputMaybe<Int_comparison_exp>;
  start_block?: InputMaybe<Int_comparison_exp>;
  timestamp_caught_up_to_head_or_endblock?: InputMaybe<timestamptz_comparison_exp>;
};

/** Ordering options when selecting data from "chain_metadata". */
export type chain_metadata_order_by = {
  block_height?: InputMaybe<order_by>;
  chain_id?: InputMaybe<order_by>;
  end_block?: InputMaybe<order_by>;
  first_event_block_number?: InputMaybe<order_by>;
  is_hyper_sync?: InputMaybe<order_by>;
  latest_fetched_block_number?: InputMaybe<order_by>;
  latest_processed_block?: InputMaybe<order_by>;
  num_batches_fetched?: InputMaybe<order_by>;
  num_events_processed?: InputMaybe<order_by>;
  start_block?: InputMaybe<order_by>;
  timestamp_caught_up_to_head_or_endblock?: InputMaybe<order_by>;
};

/** select columns of table "chain_metadata" */
export type chain_metadata_select_column =
  /** column name */
  | 'block_height'
  /** column name */
  | 'chain_id'
  /** column name */
  | 'end_block'
  /** column name */
  | 'first_event_block_number'
  /** column name */
  | 'is_hyper_sync'
  /** column name */
  | 'latest_fetched_block_number'
  /** column name */
  | 'latest_processed_block'
  /** column name */
  | 'num_batches_fetched'
  /** column name */
  | 'num_events_processed'
  /** column name */
  | 'start_block'
  /** column name */
  | 'timestamp_caught_up_to_head_or_endblock';

/** Streaming cursor of the table "chain_metadata" */
export type chain_metadata_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: chain_metadata_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type chain_metadata_stream_cursor_value_input = {
  block_height?: InputMaybe<Scalars['Int']>;
  chain_id?: InputMaybe<Scalars['Int']>;
  end_block?: InputMaybe<Scalars['Int']>;
  first_event_block_number?: InputMaybe<Scalars['Int']>;
  is_hyper_sync?: InputMaybe<Scalars['Boolean']>;
  latest_fetched_block_number?: InputMaybe<Scalars['Int']>;
  latest_processed_block?: InputMaybe<Scalars['Int']>;
  num_batches_fetched?: InputMaybe<Scalars['Int']>;
  num_events_processed?: InputMaybe<Scalars['Int']>;
  start_block?: InputMaybe<Scalars['Int']>;
  timestamp_caught_up_to_head_or_endblock?: InputMaybe<Scalars['timestamptz']>;
};

/** Boolean expression to compare columns of type "contract_type". All fields are combined with logical 'AND'. */
export type contract_type_comparison_exp = {
  _eq?: InputMaybe<Scalars['contract_type']>;
  _gt?: InputMaybe<Scalars['contract_type']>;
  _gte?: InputMaybe<Scalars['contract_type']>;
  _in?: InputMaybe<Array<Scalars['contract_type']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['contract_type']>;
  _lte?: InputMaybe<Scalars['contract_type']>;
  _neq?: InputMaybe<Scalars['contract_type']>;
  _nin?: InputMaybe<Array<Scalars['contract_type']>>;
};

/** ordering argument of a cursor */
export type cursor_ordering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

/** columns and relationships of "dynamic_contract_registry" */
export type dynamic_contract_registry = {
  chain_id: Scalars['Int'];
  contract_address: Scalars['String'];
  contract_type: Scalars['contract_type'];
  registering_event_block_number: Scalars['Int'];
  registering_event_block_timestamp: Scalars['Int'];
  registering_event_contract_name: Scalars['String'];
  registering_event_log_index: Scalars['Int'];
  registering_event_name: Scalars['String'];
  registering_event_src_address: Scalars['String'];
};

/** Boolean expression to filter rows from the table "dynamic_contract_registry". All fields are combined with a logical 'AND'. */
export type dynamic_contract_registry_bool_exp = {
  _and?: InputMaybe<Array<dynamic_contract_registry_bool_exp>>;
  _not?: InputMaybe<dynamic_contract_registry_bool_exp>;
  _or?: InputMaybe<Array<dynamic_contract_registry_bool_exp>>;
  chain_id?: InputMaybe<Int_comparison_exp>;
  contract_address?: InputMaybe<String_comparison_exp>;
  contract_type?: InputMaybe<contract_type_comparison_exp>;
  registering_event_block_number?: InputMaybe<Int_comparison_exp>;
  registering_event_block_timestamp?: InputMaybe<Int_comparison_exp>;
  registering_event_contract_name?: InputMaybe<String_comparison_exp>;
  registering_event_log_index?: InputMaybe<Int_comparison_exp>;
  registering_event_name?: InputMaybe<String_comparison_exp>;
  registering_event_src_address?: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "dynamic_contract_registry". */
export type dynamic_contract_registry_order_by = {
  chain_id?: InputMaybe<order_by>;
  contract_address?: InputMaybe<order_by>;
  contract_type?: InputMaybe<order_by>;
  registering_event_block_number?: InputMaybe<order_by>;
  registering_event_block_timestamp?: InputMaybe<order_by>;
  registering_event_contract_name?: InputMaybe<order_by>;
  registering_event_log_index?: InputMaybe<order_by>;
  registering_event_name?: InputMaybe<order_by>;
  registering_event_src_address?: InputMaybe<order_by>;
};

/** select columns of table "dynamic_contract_registry" */
export type dynamic_contract_registry_select_column =
  /** column name */
  | 'chain_id'
  /** column name */
  | 'contract_address'
  /** column name */
  | 'contract_type'
  /** column name */
  | 'registering_event_block_number'
  /** column name */
  | 'registering_event_block_timestamp'
  /** column name */
  | 'registering_event_contract_name'
  /** column name */
  | 'registering_event_log_index'
  /** column name */
  | 'registering_event_name'
  /** column name */
  | 'registering_event_src_address';

/** Streaming cursor of the table "dynamic_contract_registry" */
export type dynamic_contract_registry_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: dynamic_contract_registry_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type dynamic_contract_registry_stream_cursor_value_input = {
  chain_id?: InputMaybe<Scalars['Int']>;
  contract_address?: InputMaybe<Scalars['String']>;
  contract_type?: InputMaybe<Scalars['contract_type']>;
  registering_event_block_number?: InputMaybe<Scalars['Int']>;
  registering_event_block_timestamp?: InputMaybe<Scalars['Int']>;
  registering_event_contract_name?: InputMaybe<Scalars['String']>;
  registering_event_log_index?: InputMaybe<Scalars['Int']>;
  registering_event_name?: InputMaybe<Scalars['String']>;
  registering_event_src_address?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "end_of_block_range_scanned_data" */
export type end_of_block_range_scanned_data = {
  block_hash: Scalars['String'];
  block_number: Scalars['Int'];
  block_timestamp: Scalars['Int'];
  chain_id: Scalars['Int'];
};

/** Boolean expression to filter rows from the table "end_of_block_range_scanned_data". All fields are combined with a logical 'AND'. */
export type end_of_block_range_scanned_data_bool_exp = {
  _and?: InputMaybe<Array<end_of_block_range_scanned_data_bool_exp>>;
  _not?: InputMaybe<end_of_block_range_scanned_data_bool_exp>;
  _or?: InputMaybe<Array<end_of_block_range_scanned_data_bool_exp>>;
  block_hash?: InputMaybe<String_comparison_exp>;
  block_number?: InputMaybe<Int_comparison_exp>;
  block_timestamp?: InputMaybe<Int_comparison_exp>;
  chain_id?: InputMaybe<Int_comparison_exp>;
};

/** Ordering options when selecting data from "end_of_block_range_scanned_data". */
export type end_of_block_range_scanned_data_order_by = {
  block_hash?: InputMaybe<order_by>;
  block_number?: InputMaybe<order_by>;
  block_timestamp?: InputMaybe<order_by>;
  chain_id?: InputMaybe<order_by>;
};

/** select columns of table "end_of_block_range_scanned_data" */
export type end_of_block_range_scanned_data_select_column =
  /** column name */
  | 'block_hash'
  /** column name */
  | 'block_number'
  /** column name */
  | 'block_timestamp'
  /** column name */
  | 'chain_id';

/** Streaming cursor of the table "end_of_block_range_scanned_data" */
export type end_of_block_range_scanned_data_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: end_of_block_range_scanned_data_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type end_of_block_range_scanned_data_stream_cursor_value_input = {
  block_hash?: InputMaybe<Scalars['String']>;
  block_number?: InputMaybe<Scalars['Int']>;
  block_timestamp?: InputMaybe<Scalars['Int']>;
  chain_id?: InputMaybe<Scalars['Int']>;
};

/** columns and relationships of "entity_history" */
export type entity_history = {
  block_number: Scalars['Int'];
  block_timestamp: Scalars['Int'];
  chain_id: Scalars['Int'];
  entity_id: Scalars['String'];
  entity_type: Scalars['entity_type'];
  /** An object relationship */
  event?: Maybe<raw_events>;
  log_index: Scalars['Int'];
  params?: Maybe<Scalars['jsonb']>;
  previous_block_number?: Maybe<Scalars['Int']>;
  previous_block_timestamp?: Maybe<Scalars['Int']>;
  previous_chain_id?: Maybe<Scalars['Int']>;
  previous_log_index?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "entity_history" */
export type entity_historyparamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** order by aggregate values of table "entity_history" */
export type entity_history_aggregate_order_by = {
  avg?: InputMaybe<entity_history_avg_order_by>;
  count?: InputMaybe<order_by>;
  max?: InputMaybe<entity_history_max_order_by>;
  min?: InputMaybe<entity_history_min_order_by>;
  stddev?: InputMaybe<entity_history_stddev_order_by>;
  stddev_pop?: InputMaybe<entity_history_stddev_pop_order_by>;
  stddev_samp?: InputMaybe<entity_history_stddev_samp_order_by>;
  sum?: InputMaybe<entity_history_sum_order_by>;
  var_pop?: InputMaybe<entity_history_var_pop_order_by>;
  var_samp?: InputMaybe<entity_history_var_samp_order_by>;
  variance?: InputMaybe<entity_history_variance_order_by>;
};

/** order by avg() on columns of table "entity_history" */
export type entity_history_avg_order_by = {
  block_number?: InputMaybe<order_by>;
  block_timestamp?: InputMaybe<order_by>;
  chain_id?: InputMaybe<order_by>;
  log_index?: InputMaybe<order_by>;
  previous_block_number?: InputMaybe<order_by>;
  previous_block_timestamp?: InputMaybe<order_by>;
  previous_chain_id?: InputMaybe<order_by>;
  previous_log_index?: InputMaybe<order_by>;
};

/** Boolean expression to filter rows from the table "entity_history". All fields are combined with a logical 'AND'. */
export type entity_history_bool_exp = {
  _and?: InputMaybe<Array<entity_history_bool_exp>>;
  _not?: InputMaybe<entity_history_bool_exp>;
  _or?: InputMaybe<Array<entity_history_bool_exp>>;
  block_number?: InputMaybe<Int_comparison_exp>;
  block_timestamp?: InputMaybe<Int_comparison_exp>;
  chain_id?: InputMaybe<Int_comparison_exp>;
  entity_id?: InputMaybe<String_comparison_exp>;
  entity_type?: InputMaybe<entity_type_comparison_exp>;
  event?: InputMaybe<raw_events_bool_exp>;
  log_index?: InputMaybe<Int_comparison_exp>;
  params?: InputMaybe<jsonb_comparison_exp>;
  previous_block_number?: InputMaybe<Int_comparison_exp>;
  previous_block_timestamp?: InputMaybe<Int_comparison_exp>;
  previous_chain_id?: InputMaybe<Int_comparison_exp>;
  previous_log_index?: InputMaybe<Int_comparison_exp>;
};

/** columns and relationships of "entity_history_filter" */
export type entity_history_filter = {
  block_number: Scalars['Int'];
  block_timestamp: Scalars['Int'];
  chain_id: Scalars['Int'];
  entity_id: Scalars['String'];
  entity_type: Scalars['entity_type'];
  /** An object relationship */
  event?: Maybe<raw_events>;
  log_index: Scalars['Int'];
  new_val?: Maybe<Scalars['jsonb']>;
  old_val?: Maybe<Scalars['jsonb']>;
  previous_block_number?: Maybe<Scalars['Int']>;
  previous_log_index: Scalars['Int'];
};


/** columns and relationships of "entity_history_filter" */
export type entity_history_filternew_valArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "entity_history_filter" */
export type entity_history_filterold_valArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "entity_history_filter". All fields are combined with a logical 'AND'. */
export type entity_history_filter_bool_exp = {
  _and?: InputMaybe<Array<entity_history_filter_bool_exp>>;
  _not?: InputMaybe<entity_history_filter_bool_exp>;
  _or?: InputMaybe<Array<entity_history_filter_bool_exp>>;
  block_number?: InputMaybe<Int_comparison_exp>;
  block_timestamp?: InputMaybe<Int_comparison_exp>;
  chain_id?: InputMaybe<Int_comparison_exp>;
  entity_id?: InputMaybe<String_comparison_exp>;
  entity_type?: InputMaybe<entity_type_comparison_exp>;
  event?: InputMaybe<raw_events_bool_exp>;
  log_index?: InputMaybe<Int_comparison_exp>;
  new_val?: InputMaybe<jsonb_comparison_exp>;
  old_val?: InputMaybe<jsonb_comparison_exp>;
  previous_block_number?: InputMaybe<Int_comparison_exp>;
  previous_log_index?: InputMaybe<Int_comparison_exp>;
};

/** Ordering options when selecting data from "entity_history_filter". */
export type entity_history_filter_order_by = {
  block_number?: InputMaybe<order_by>;
  block_timestamp?: InputMaybe<order_by>;
  chain_id?: InputMaybe<order_by>;
  entity_id?: InputMaybe<order_by>;
  entity_type?: InputMaybe<order_by>;
  event?: InputMaybe<raw_events_order_by>;
  log_index?: InputMaybe<order_by>;
  new_val?: InputMaybe<order_by>;
  old_val?: InputMaybe<order_by>;
  previous_block_number?: InputMaybe<order_by>;
  previous_log_index?: InputMaybe<order_by>;
};

/** select columns of table "entity_history_filter" */
export type entity_history_filter_select_column =
  /** column name */
  | 'block_number'
  /** column name */
  | 'block_timestamp'
  /** column name */
  | 'chain_id'
  /** column name */
  | 'entity_id'
  /** column name */
  | 'entity_type'
  /** column name */
  | 'log_index'
  /** column name */
  | 'new_val'
  /** column name */
  | 'old_val'
  /** column name */
  | 'previous_block_number'
  /** column name */
  | 'previous_log_index';

/** Streaming cursor of the table "entity_history_filter" */
export type entity_history_filter_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: entity_history_filter_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type entity_history_filter_stream_cursor_value_input = {
  block_number?: InputMaybe<Scalars['Int']>;
  block_timestamp?: InputMaybe<Scalars['Int']>;
  chain_id?: InputMaybe<Scalars['Int']>;
  entity_id?: InputMaybe<Scalars['String']>;
  entity_type?: InputMaybe<Scalars['entity_type']>;
  log_index?: InputMaybe<Scalars['Int']>;
  new_val?: InputMaybe<Scalars['jsonb']>;
  old_val?: InputMaybe<Scalars['jsonb']>;
  previous_block_number?: InputMaybe<Scalars['Int']>;
  previous_log_index?: InputMaybe<Scalars['Int']>;
};

/** order by max() on columns of table "entity_history" */
export type entity_history_max_order_by = {
  block_number?: InputMaybe<order_by>;
  block_timestamp?: InputMaybe<order_by>;
  chain_id?: InputMaybe<order_by>;
  entity_id?: InputMaybe<order_by>;
  entity_type?: InputMaybe<order_by>;
  log_index?: InputMaybe<order_by>;
  previous_block_number?: InputMaybe<order_by>;
  previous_block_timestamp?: InputMaybe<order_by>;
  previous_chain_id?: InputMaybe<order_by>;
  previous_log_index?: InputMaybe<order_by>;
};

/** order by min() on columns of table "entity_history" */
export type entity_history_min_order_by = {
  block_number?: InputMaybe<order_by>;
  block_timestamp?: InputMaybe<order_by>;
  chain_id?: InputMaybe<order_by>;
  entity_id?: InputMaybe<order_by>;
  entity_type?: InputMaybe<order_by>;
  log_index?: InputMaybe<order_by>;
  previous_block_number?: InputMaybe<order_by>;
  previous_block_timestamp?: InputMaybe<order_by>;
  previous_chain_id?: InputMaybe<order_by>;
  previous_log_index?: InputMaybe<order_by>;
};

/** Ordering options when selecting data from "entity_history". */
export type entity_history_order_by = {
  block_number?: InputMaybe<order_by>;
  block_timestamp?: InputMaybe<order_by>;
  chain_id?: InputMaybe<order_by>;
  entity_id?: InputMaybe<order_by>;
  entity_type?: InputMaybe<order_by>;
  event?: InputMaybe<raw_events_order_by>;
  log_index?: InputMaybe<order_by>;
  params?: InputMaybe<order_by>;
  previous_block_number?: InputMaybe<order_by>;
  previous_block_timestamp?: InputMaybe<order_by>;
  previous_chain_id?: InputMaybe<order_by>;
  previous_log_index?: InputMaybe<order_by>;
};

/** select columns of table "entity_history" */
export type entity_history_select_column =
  /** column name */
  | 'block_number'
  /** column name */
  | 'block_timestamp'
  /** column name */
  | 'chain_id'
  /** column name */
  | 'entity_id'
  /** column name */
  | 'entity_type'
  /** column name */
  | 'log_index'
  /** column name */
  | 'params'
  /** column name */
  | 'previous_block_number'
  /** column name */
  | 'previous_block_timestamp'
  /** column name */
  | 'previous_chain_id'
  /** column name */
  | 'previous_log_index';

/** order by stddev() on columns of table "entity_history" */
export type entity_history_stddev_order_by = {
  block_number?: InputMaybe<order_by>;
  block_timestamp?: InputMaybe<order_by>;
  chain_id?: InputMaybe<order_by>;
  log_index?: InputMaybe<order_by>;
  previous_block_number?: InputMaybe<order_by>;
  previous_block_timestamp?: InputMaybe<order_by>;
  previous_chain_id?: InputMaybe<order_by>;
  previous_log_index?: InputMaybe<order_by>;
};

/** order by stddev_pop() on columns of table "entity_history" */
export type entity_history_stddev_pop_order_by = {
  block_number?: InputMaybe<order_by>;
  block_timestamp?: InputMaybe<order_by>;
  chain_id?: InputMaybe<order_by>;
  log_index?: InputMaybe<order_by>;
  previous_block_number?: InputMaybe<order_by>;
  previous_block_timestamp?: InputMaybe<order_by>;
  previous_chain_id?: InputMaybe<order_by>;
  previous_log_index?: InputMaybe<order_by>;
};

/** order by stddev_samp() on columns of table "entity_history" */
export type entity_history_stddev_samp_order_by = {
  block_number?: InputMaybe<order_by>;
  block_timestamp?: InputMaybe<order_by>;
  chain_id?: InputMaybe<order_by>;
  log_index?: InputMaybe<order_by>;
  previous_block_number?: InputMaybe<order_by>;
  previous_block_timestamp?: InputMaybe<order_by>;
  previous_chain_id?: InputMaybe<order_by>;
  previous_log_index?: InputMaybe<order_by>;
};

/** Streaming cursor of the table "entity_history" */
export type entity_history_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: entity_history_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type entity_history_stream_cursor_value_input = {
  block_number?: InputMaybe<Scalars['Int']>;
  block_timestamp?: InputMaybe<Scalars['Int']>;
  chain_id?: InputMaybe<Scalars['Int']>;
  entity_id?: InputMaybe<Scalars['String']>;
  entity_type?: InputMaybe<Scalars['entity_type']>;
  log_index?: InputMaybe<Scalars['Int']>;
  params?: InputMaybe<Scalars['jsonb']>;
  previous_block_number?: InputMaybe<Scalars['Int']>;
  previous_block_timestamp?: InputMaybe<Scalars['Int']>;
  previous_chain_id?: InputMaybe<Scalars['Int']>;
  previous_log_index?: InputMaybe<Scalars['Int']>;
};

/** order by sum() on columns of table "entity_history" */
export type entity_history_sum_order_by = {
  block_number?: InputMaybe<order_by>;
  block_timestamp?: InputMaybe<order_by>;
  chain_id?: InputMaybe<order_by>;
  log_index?: InputMaybe<order_by>;
  previous_block_number?: InputMaybe<order_by>;
  previous_block_timestamp?: InputMaybe<order_by>;
  previous_chain_id?: InputMaybe<order_by>;
  previous_log_index?: InputMaybe<order_by>;
};

/** order by var_pop() on columns of table "entity_history" */
export type entity_history_var_pop_order_by = {
  block_number?: InputMaybe<order_by>;
  block_timestamp?: InputMaybe<order_by>;
  chain_id?: InputMaybe<order_by>;
  log_index?: InputMaybe<order_by>;
  previous_block_number?: InputMaybe<order_by>;
  previous_block_timestamp?: InputMaybe<order_by>;
  previous_chain_id?: InputMaybe<order_by>;
  previous_log_index?: InputMaybe<order_by>;
};

/** order by var_samp() on columns of table "entity_history" */
export type entity_history_var_samp_order_by = {
  block_number?: InputMaybe<order_by>;
  block_timestamp?: InputMaybe<order_by>;
  chain_id?: InputMaybe<order_by>;
  log_index?: InputMaybe<order_by>;
  previous_block_number?: InputMaybe<order_by>;
  previous_block_timestamp?: InputMaybe<order_by>;
  previous_chain_id?: InputMaybe<order_by>;
  previous_log_index?: InputMaybe<order_by>;
};

/** order by variance() on columns of table "entity_history" */
export type entity_history_variance_order_by = {
  block_number?: InputMaybe<order_by>;
  block_timestamp?: InputMaybe<order_by>;
  chain_id?: InputMaybe<order_by>;
  log_index?: InputMaybe<order_by>;
  previous_block_number?: InputMaybe<order_by>;
  previous_block_timestamp?: InputMaybe<order_by>;
  previous_chain_id?: InputMaybe<order_by>;
  previous_log_index?: InputMaybe<order_by>;
};

/** Boolean expression to compare columns of type "entity_type". All fields are combined with logical 'AND'. */
export type entity_type_comparison_exp = {
  _eq?: InputMaybe<Scalars['entity_type']>;
  _gt?: InputMaybe<Scalars['entity_type']>;
  _gte?: InputMaybe<Scalars['entity_type']>;
  _in?: InputMaybe<Array<Scalars['entity_type']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['entity_type']>;
  _lte?: InputMaybe<Scalars['entity_type']>;
  _neq?: InputMaybe<Scalars['entity_type']>;
  _nin?: InputMaybe<Array<Scalars['entity_type']>>;
};

/** columns and relationships of "event_sync_state" */
export type event_sync_state = {
  block_number: Scalars['Int'];
  block_timestamp: Scalars['Int'];
  chain_id: Scalars['Int'];
  is_pre_registering_dynamic_contracts: Scalars['Boolean'];
  log_index: Scalars['Int'];
};

/** Boolean expression to filter rows from the table "event_sync_state". All fields are combined with a logical 'AND'. */
export type event_sync_state_bool_exp = {
  _and?: InputMaybe<Array<event_sync_state_bool_exp>>;
  _not?: InputMaybe<event_sync_state_bool_exp>;
  _or?: InputMaybe<Array<event_sync_state_bool_exp>>;
  block_number?: InputMaybe<Int_comparison_exp>;
  block_timestamp?: InputMaybe<Int_comparison_exp>;
  chain_id?: InputMaybe<Int_comparison_exp>;
  is_pre_registering_dynamic_contracts?: InputMaybe<Boolean_comparison_exp>;
  log_index?: InputMaybe<Int_comparison_exp>;
};

/** Ordering options when selecting data from "event_sync_state". */
export type event_sync_state_order_by = {
  block_number?: InputMaybe<order_by>;
  block_timestamp?: InputMaybe<order_by>;
  chain_id?: InputMaybe<order_by>;
  is_pre_registering_dynamic_contracts?: InputMaybe<order_by>;
  log_index?: InputMaybe<order_by>;
};

/** select columns of table "event_sync_state" */
export type event_sync_state_select_column =
  /** column name */
  | 'block_number'
  /** column name */
  | 'block_timestamp'
  /** column name */
  | 'chain_id'
  /** column name */
  | 'is_pre_registering_dynamic_contracts'
  /** column name */
  | 'log_index';

/** Streaming cursor of the table "event_sync_state" */
export type event_sync_state_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: event_sync_state_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type event_sync_state_stream_cursor_value_input = {
  block_number?: InputMaybe<Scalars['Int']>;
  block_timestamp?: InputMaybe<Scalars['Int']>;
  chain_id?: InputMaybe<Scalars['Int']>;
  is_pre_registering_dynamic_contracts?: InputMaybe<Scalars['Boolean']>;
  log_index?: InputMaybe<Scalars['Int']>;
};

export type get_entity_history_filter_args = {
  end_block?: InputMaybe<Scalars['Int']>;
  end_chain_id?: InputMaybe<Scalars['Int']>;
  end_log_index?: InputMaybe<Scalars['Int']>;
  end_timestamp?: InputMaybe<Scalars['Int']>;
  start_block?: InputMaybe<Scalars['Int']>;
  start_chain_id?: InputMaybe<Scalars['Int']>;
  start_log_index?: InputMaybe<Scalars['Int']>;
  start_timestamp?: InputMaybe<Scalars['Int']>;
};

export type jsonb_cast_exp = {
  String?: InputMaybe<String_comparison_exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type jsonb_comparison_exp = {
  _cast?: InputMaybe<jsonb_cast_exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type numeric_array_comparison_exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['numeric']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['numeric']>>;
  _eq?: InputMaybe<Array<Scalars['numeric']>>;
  _gt?: InputMaybe<Array<Scalars['numeric']>>;
  _gte?: InputMaybe<Array<Scalars['numeric']>>;
  _in?: InputMaybe<Array<Array<Scalars['numeric']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Array<Scalars['numeric']>>;
  _lte?: InputMaybe<Array<Scalars['numeric']>>;
  _neq?: InputMaybe<Array<Scalars['numeric']>>;
  _nin?: InputMaybe<Array<Array<Scalars['numeric']>>>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type numeric_comparison_exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export type order_by =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

/** columns and relationships of "persisted_state" */
export type persisted_state = {
  abi_files_hash: Scalars['String'];
  config_hash: Scalars['String'];
  envio_version: Scalars['String'];
  handler_files_hash: Scalars['String'];
  id: Scalars['Int'];
  schema_hash: Scalars['String'];
};

/** Boolean expression to filter rows from the table "persisted_state". All fields are combined with a logical 'AND'. */
export type persisted_state_bool_exp = {
  _and?: InputMaybe<Array<persisted_state_bool_exp>>;
  _not?: InputMaybe<persisted_state_bool_exp>;
  _or?: InputMaybe<Array<persisted_state_bool_exp>>;
  abi_files_hash?: InputMaybe<String_comparison_exp>;
  config_hash?: InputMaybe<String_comparison_exp>;
  envio_version?: InputMaybe<String_comparison_exp>;
  handler_files_hash?: InputMaybe<String_comparison_exp>;
  id?: InputMaybe<Int_comparison_exp>;
  schema_hash?: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "persisted_state". */
export type persisted_state_order_by = {
  abi_files_hash?: InputMaybe<order_by>;
  config_hash?: InputMaybe<order_by>;
  envio_version?: InputMaybe<order_by>;
  handler_files_hash?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  schema_hash?: InputMaybe<order_by>;
};

/** select columns of table "persisted_state" */
export type persisted_state_select_column =
  /** column name */
  | 'abi_files_hash'
  /** column name */
  | 'config_hash'
  /** column name */
  | 'envio_version'
  /** column name */
  | 'handler_files_hash'
  /** column name */
  | 'id'
  /** column name */
  | 'schema_hash';

/** Streaming cursor of the table "persisted_state" */
export type persisted_state_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: persisted_state_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type persisted_state_stream_cursor_value_input = {
  abi_files_hash?: InputMaybe<Scalars['String']>;
  config_hash?: InputMaybe<Scalars['String']>;
  envio_version?: InputMaybe<Scalars['String']>;
  handler_files_hash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  schema_hash?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "raw_events" */
export type raw_events = {
  block_fields: Scalars['jsonb'];
  block_hash: Scalars['String'];
  block_number: Scalars['Int'];
  block_timestamp: Scalars['Int'];
  chain_id: Scalars['Int'];
  contract_name: Scalars['String'];
  db_write_timestamp?: Maybe<Scalars['timestamp']>;
  /** An array relationship */
  event_history: Array<entity_history>;
  event_id: Scalars['numeric'];
  event_name: Scalars['String'];
  log_index: Scalars['Int'];
  params: Scalars['jsonb'];
  src_address: Scalars['String'];
  transaction_fields: Scalars['jsonb'];
};


/** columns and relationships of "raw_events" */
export type raw_eventsblock_fieldsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "raw_events" */
export type raw_eventsevent_historyArgs = {
  distinct_on?: InputMaybe<Array<entity_history_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<entity_history_order_by>>;
  where?: InputMaybe<entity_history_bool_exp>;
};


/** columns and relationships of "raw_events" */
export type raw_eventsparamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "raw_events" */
export type raw_eventstransaction_fieldsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "raw_events". All fields are combined with a logical 'AND'. */
export type raw_events_bool_exp = {
  _and?: InputMaybe<Array<raw_events_bool_exp>>;
  _not?: InputMaybe<raw_events_bool_exp>;
  _or?: InputMaybe<Array<raw_events_bool_exp>>;
  block_fields?: InputMaybe<jsonb_comparison_exp>;
  block_hash?: InputMaybe<String_comparison_exp>;
  block_number?: InputMaybe<Int_comparison_exp>;
  block_timestamp?: InputMaybe<Int_comparison_exp>;
  chain_id?: InputMaybe<Int_comparison_exp>;
  contract_name?: InputMaybe<String_comparison_exp>;
  db_write_timestamp?: InputMaybe<timestamp_comparison_exp>;
  event_history?: InputMaybe<entity_history_bool_exp>;
  event_id?: InputMaybe<numeric_comparison_exp>;
  event_name?: InputMaybe<String_comparison_exp>;
  log_index?: InputMaybe<Int_comparison_exp>;
  params?: InputMaybe<jsonb_comparison_exp>;
  src_address?: InputMaybe<String_comparison_exp>;
  transaction_fields?: InputMaybe<jsonb_comparison_exp>;
};

/** Ordering options when selecting data from "raw_events". */
export type raw_events_order_by = {
  block_fields?: InputMaybe<order_by>;
  block_hash?: InputMaybe<order_by>;
  block_number?: InputMaybe<order_by>;
  block_timestamp?: InputMaybe<order_by>;
  chain_id?: InputMaybe<order_by>;
  contract_name?: InputMaybe<order_by>;
  db_write_timestamp?: InputMaybe<order_by>;
  event_history_aggregate?: InputMaybe<entity_history_aggregate_order_by>;
  event_id?: InputMaybe<order_by>;
  event_name?: InputMaybe<order_by>;
  log_index?: InputMaybe<order_by>;
  params?: InputMaybe<order_by>;
  src_address?: InputMaybe<order_by>;
  transaction_fields?: InputMaybe<order_by>;
};

/** select columns of table "raw_events" */
export type raw_events_select_column =
  /** column name */
  | 'block_fields'
  /** column name */
  | 'block_hash'
  /** column name */
  | 'block_number'
  /** column name */
  | 'block_timestamp'
  /** column name */
  | 'chain_id'
  /** column name */
  | 'contract_name'
  /** column name */
  | 'db_write_timestamp'
  /** column name */
  | 'event_id'
  /** column name */
  | 'event_name'
  /** column name */
  | 'log_index'
  /** column name */
  | 'params'
  /** column name */
  | 'src_address'
  /** column name */
  | 'transaction_fields';

/** Streaming cursor of the table "raw_events" */
export type raw_events_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: raw_events_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type raw_events_stream_cursor_value_input = {
  block_fields?: InputMaybe<Scalars['jsonb']>;
  block_hash?: InputMaybe<Scalars['String']>;
  block_number?: InputMaybe<Scalars['Int']>;
  block_timestamp?: InputMaybe<Scalars['Int']>;
  chain_id?: InputMaybe<Scalars['Int']>;
  contract_name?: InputMaybe<Scalars['String']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']>;
  event_id?: InputMaybe<Scalars['numeric']>;
  event_name?: InputMaybe<Scalars['String']>;
  log_index?: InputMaybe<Scalars['Int']>;
  params?: InputMaybe<Scalars['jsonb']>;
  src_address?: InputMaybe<Scalars['String']>;
  transaction_fields?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type timestamp_comparison_exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type timestamptz_comparison_exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  Aggregation_interval: Aggregation_interval;
  ApplicationHistory: ResolverTypeWrapper<ApplicationHistory>;
  ApplicationHistory_filter: ApplicationHistory_filter;
  ApplicationHistory_orderBy: ApplicationHistory_orderBy;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  FeedItem: ResolverTypeWrapper<FeedItem>;
  FeedItemEmbed: ResolverTypeWrapper<FeedItemEmbed>;
  FeedItemEmbed_filter: FeedItemEmbed_filter;
  FeedItemEmbed_orderBy: FeedItemEmbed_orderBy;
  FeedItemEntity: ResolverTypeWrapper<FeedItemEntity>;
  FeedItemEntity_filter: FeedItemEntity_filter;
  FeedItemEntity_orderBy: FeedItemEntity_orderBy;
  FeedItem_filter: FeedItem_filter;
  FeedItem_orderBy: FeedItem_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  GameManager: ResolverTypeWrapper<GameManager>;
  GameManager_filter: GameManager_filter;
  GameManager_orderBy: GameManager_orderBy;
  GameRound: ResolverTypeWrapper<GameRound>;
  GameRound_filter: GameRound_filter;
  GameRound_orderBy: GameRound_orderBy;
  GmDeployment: ResolverTypeWrapper<GmDeployment>;
  GmDeployment_filter: GmDeployment_filter;
  GmDeployment_orderBy: GmDeployment_orderBy;
  GmVersion: ResolverTypeWrapper<GmVersion>;
  GmVersion_filter: GmVersion_filter;
  GmVersion_orderBy: GmVersion_orderBy;
  Grant: ResolverTypeWrapper<Grant>;
  GrantShip: ResolverTypeWrapper<GrantShip>;
  GrantShip_filter: GrantShip_filter;
  GrantShip_orderBy: GrantShip_orderBy;
  Grant_filter: Grant_filter;
  Grant_orderBy: Grant_orderBy;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']>;
  Log: ResolverTypeWrapper<Log>;
  Log_filter: Log_filter;
  Log_orderBy: Log_orderBy;
  Milestone: ResolverTypeWrapper<Milestone>;
  Milestone_filter: Milestone_filter;
  Milestone_orderBy: Milestone_orderBy;
  OrderDirection: OrderDirection;
  PoolIdLookup: ResolverTypeWrapper<PoolIdLookup>;
  PoolIdLookup_filter: PoolIdLookup_filter;
  PoolIdLookup_orderBy: PoolIdLookup_orderBy;
  ProfileIdToAnchor: ResolverTypeWrapper<ProfileIdToAnchor>;
  ProfileIdToAnchor_filter: ProfileIdToAnchor_filter;
  ProfileIdToAnchor_orderBy: ProfileIdToAnchor_orderBy;
  ProfileMemberGroup: ResolverTypeWrapper<ProfileMemberGroup>;
  ProfileMemberGroup_filter: ProfileMemberGroup_filter;
  ProfileMemberGroup_orderBy: ProfileMemberGroup_orderBy;
  Project: ResolverTypeWrapper<Project>;
  Project_filter: Project_filter;
  Project_orderBy: Project_orderBy;
  RawMetadata: ResolverTypeWrapper<RawMetadata>;
  RawMetadata_filter: RawMetadata_filter;
  RawMetadata_orderBy: RawMetadata_orderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']>;
  Transaction: ResolverTypeWrapper<Transaction>;
  Transaction_filter: Transaction_filter;
  Transaction_orderBy: Transaction_orderBy;
  Update: ResolverTypeWrapper<Update>;
  Update_filter: Update_filter;
  Update_orderBy: Update_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
  Application: ResolverTypeWrapper<Application>;
  Application_aggregate_order_by: Application_aggregate_order_by;
  Application_avg_order_by: Application_avg_order_by;
  Application_bool_exp: Application_bool_exp;
  Application_max_order_by: Application_max_order_by;
  Application_min_order_by: Application_min_order_by;
  Application_order_by: Application_order_by;
  Application_select_column: Application_select_column;
  Application_stddev_order_by: Application_stddev_order_by;
  Application_stddev_pop_order_by: Application_stddev_pop_order_by;
  Application_stddev_samp_order_by: Application_stddev_samp_order_by;
  Application_stream_cursor_input: Application_stream_cursor_input;
  Application_stream_cursor_value_input: Application_stream_cursor_value_input;
  Application_sum_order_by: Application_sum_order_by;
  Application_var_pop_order_by: Application_var_pop_order_by;
  Application_var_samp_order_by: Application_var_samp_order_by;
  Application_variance_order_by: Application_variance_order_by;
  Badge: ResolverTypeWrapper<Badge>;
  BadgeHolder: ResolverTypeWrapper<BadgeHolder>;
  BadgeHolder_bool_exp: BadgeHolder_bool_exp;
  BadgeHolder_order_by: BadgeHolder_order_by;
  BadgeHolder_select_column: BadgeHolder_select_column;
  BadgeHolder_stream_cursor_input: BadgeHolder_stream_cursor_input;
  BadgeHolder_stream_cursor_value_input: BadgeHolder_stream_cursor_value_input;
  BadgeTemplate: ResolverTypeWrapper<BadgeTemplate>;
  BadgeTemplate_aggregate_order_by: BadgeTemplate_aggregate_order_by;
  BadgeTemplate_avg_order_by: BadgeTemplate_avg_order_by;
  BadgeTemplate_bool_exp: BadgeTemplate_bool_exp;
  BadgeTemplate_max_order_by: BadgeTemplate_max_order_by;
  BadgeTemplate_min_order_by: BadgeTemplate_min_order_by;
  BadgeTemplate_order_by: BadgeTemplate_order_by;
  BadgeTemplate_select_column: BadgeTemplate_select_column;
  BadgeTemplate_stddev_order_by: BadgeTemplate_stddev_order_by;
  BadgeTemplate_stddev_pop_order_by: BadgeTemplate_stddev_pop_order_by;
  BadgeTemplate_stddev_samp_order_by: BadgeTemplate_stddev_samp_order_by;
  BadgeTemplate_stream_cursor_input: BadgeTemplate_stream_cursor_input;
  BadgeTemplate_stream_cursor_value_input: BadgeTemplate_stream_cursor_value_input;
  BadgeTemplate_sum_order_by: BadgeTemplate_sum_order_by;
  BadgeTemplate_var_pop_order_by: BadgeTemplate_var_pop_order_by;
  BadgeTemplate_var_samp_order_by: BadgeTemplate_var_samp_order_by;
  BadgeTemplate_variance_order_by: BadgeTemplate_variance_order_by;
  Badge_aggregate_order_by: Badge_aggregate_order_by;
  Badge_avg_order_by: Badge_avg_order_by;
  Badge_bool_exp: Badge_bool_exp;
  Badge_max_order_by: Badge_max_order_by;
  Badge_min_order_by: Badge_min_order_by;
  Badge_order_by: Badge_order_by;
  Badge_select_column: Badge_select_column;
  Badge_stddev_order_by: Badge_stddev_order_by;
  Badge_stddev_pop_order_by: Badge_stddev_pop_order_by;
  Badge_stddev_samp_order_by: Badge_stddev_samp_order_by;
  Badge_stream_cursor_input: Badge_stream_cursor_input;
  Badge_stream_cursor_value_input: Badge_stream_cursor_value_input;
  Badge_sum_order_by: Badge_sum_order_by;
  Badge_var_pop_order_by: Badge_var_pop_order_by;
  Badge_var_samp_order_by: Badge_var_samp_order_by;
  Badge_variance_order_by: Badge_variance_order_by;
  Boolean_comparison_exp: Boolean_comparison_exp;
  Contest: ResolverTypeWrapper<Contest>;
  ContestClone: ResolverTypeWrapper<ContestClone>;
  ContestClone_bool_exp: ContestClone_bool_exp;
  ContestClone_order_by: ContestClone_order_by;
  ContestClone_select_column: ContestClone_select_column;
  ContestClone_stream_cursor_input: ContestClone_stream_cursor_input;
  ContestClone_stream_cursor_value_input: ContestClone_stream_cursor_value_input;
  ContestTemplate: ResolverTypeWrapper<ContestTemplate>;
  ContestTemplate_bool_exp: ContestTemplate_bool_exp;
  ContestTemplate_order_by: ContestTemplate_order_by;
  ContestTemplate_select_column: ContestTemplate_select_column;
  ContestTemplate_stream_cursor_input: ContestTemplate_stream_cursor_input;
  ContestTemplate_stream_cursor_value_input: ContestTemplate_stream_cursor_value_input;
  Contest_bool_exp: Contest_bool_exp;
  Contest_order_by: Contest_order_by;
  Contest_select_column: Contest_select_column;
  Contest_stream_cursor_input: Contest_stream_cursor_input;
  Contest_stream_cursor_value_input: Contest_stream_cursor_value_input;
  DAOToken: ResolverTypeWrapper<DAOToken>;
  DAOToken_bool_exp: DAOToken_bool_exp;
  DAOToken_order_by: DAOToken_order_by;
  DAOToken_select_column: DAOToken_select_column;
  DAOToken_stream_cursor_input: DAOToken_stream_cursor_input;
  DAOToken_stream_cursor_value_input: DAOToken_stream_cursor_value_input;
  DualTokenPointsParams: ResolverTypeWrapper<DualTokenPointsParams>;
  DualTokenPointsParams_bool_exp: DualTokenPointsParams_bool_exp;
  DualTokenPointsParams_order_by: DualTokenPointsParams_order_by;
  DualTokenPointsParams_select_column: DualTokenPointsParams_select_column;
  DualTokenPointsParams_stream_cursor_input: DualTokenPointsParams_stream_cursor_input;
  DualTokenPointsParams_stream_cursor_value_input: DualTokenPointsParams_stream_cursor_value_input;
  DualTokenTVParams: ResolverTypeWrapper<DualTokenTVParams>;
  DualTokenTVParams_bool_exp: DualTokenTVParams_bool_exp;
  DualTokenTVParams_order_by: DualTokenTVParams_order_by;
  DualTokenTVParams_select_column: DualTokenTVParams_select_column;
  DualTokenTVParams_stream_cursor_input: DualTokenTVParams_stream_cursor_input;
  DualTokenTVParams_stream_cursor_value_input: DualTokenTVParams_stream_cursor_value_input;
  ERCPointParams: ResolverTypeWrapper<ERCPointParams>;
  ERCPointParams_bool_exp: ERCPointParams_bool_exp;
  ERCPointParams_order_by: ERCPointParams_order_by;
  ERCPointParams_select_column: ERCPointParams_select_column;
  ERCPointParams_stream_cursor_input: ERCPointParams_stream_cursor_input;
  ERCPointParams_stream_cursor_value_input: ERCPointParams_stream_cursor_value_input;
  EnvioTX: ResolverTypeWrapper<EnvioTX>;
  EnvioTX_bool_exp: EnvioTX_bool_exp;
  EnvioTX_order_by: EnvioTX_order_by;
  EnvioTX_select_column: EnvioTX_select_column;
  EnvioTX_stream_cursor_input: EnvioTX_stream_cursor_input;
  EnvioTX_stream_cursor_value_input: EnvioTX_stream_cursor_value_input;
  EventPost: ResolverTypeWrapper<EventPost>;
  EventPost_aggregate_order_by: EventPost_aggregate_order_by;
  EventPost_avg_order_by: EventPost_avg_order_by;
  EventPost_bool_exp: EventPost_bool_exp;
  EventPost_max_order_by: EventPost_max_order_by;
  EventPost_min_order_by: EventPost_min_order_by;
  EventPost_order_by: EventPost_order_by;
  EventPost_select_column: EventPost_select_column;
  EventPost_stddev_order_by: EventPost_stddev_order_by;
  EventPost_stddev_pop_order_by: EventPost_stddev_pop_order_by;
  EventPost_stddev_samp_order_by: EventPost_stddev_samp_order_by;
  EventPost_stream_cursor_input: EventPost_stream_cursor_input;
  EventPost_stream_cursor_value_input: EventPost_stream_cursor_value_input;
  EventPost_sum_order_by: EventPost_sum_order_by;
  EventPost_var_pop_order_by: EventPost_var_pop_order_by;
  EventPost_var_samp_order_by: EventPost_var_samp_order_by;
  EventPost_variance_order_by: EventPost_variance_order_by;
  FactoryEventsSummary: ResolverTypeWrapper<FactoryEventsSummary>;
  FactoryEventsSummary_bool_exp: FactoryEventsSummary_bool_exp;
  FactoryEventsSummary_order_by: FactoryEventsSummary_order_by;
  FactoryEventsSummary_select_column: FactoryEventsSummary_select_column;
  FactoryEventsSummary_stream_cursor_input: FactoryEventsSummary_stream_cursor_input;
  FactoryEventsSummary_stream_cursor_value_input: FactoryEventsSummary_stream_cursor_value_input;
  FeedCard: ResolverTypeWrapper<FeedCard>;
  FeedCard_bool_exp: FeedCard_bool_exp;
  FeedCard_order_by: FeedCard_order_by;
  FeedCard_select_column: FeedCard_select_column;
  FeedCard_stream_cursor_input: FeedCard_stream_cursor_input;
  FeedCard_stream_cursor_value_input: FeedCard_stream_cursor_value_input;
  FeedItemEmbed_bool_exp: FeedItemEmbed_bool_exp;
  FeedItemEmbed_order_by: FeedItemEmbed_order_by;
  FeedItemEmbed_select_column: FeedItemEmbed_select_column;
  FeedItemEmbed_stream_cursor_input: FeedItemEmbed_stream_cursor_input;
  FeedItemEmbed_stream_cursor_value_input: FeedItemEmbed_stream_cursor_value_input;
  FeedItemEntity_bool_exp: FeedItemEntity_bool_exp;
  FeedItemEntity_order_by: FeedItemEntity_order_by;
  FeedItemEntity_select_column: FeedItemEntity_select_column;
  FeedItemEntity_stream_cursor_input: FeedItemEntity_stream_cursor_input;
  FeedItemEntity_stream_cursor_value_input: FeedItemEntity_stream_cursor_value_input;
  GMInitParams: ResolverTypeWrapper<GMInitParams>;
  GMInitParams_bool_exp: GMInitParams_bool_exp;
  GMInitParams_order_by: GMInitParams_order_by;
  GMInitParams_select_column: GMInitParams_select_column;
  GMInitParams_stream_cursor_input: GMInitParams_stream_cursor_input;
  GMInitParams_stream_cursor_value_input: GMInitParams_stream_cursor_value_input;
  GSVoter: ResolverTypeWrapper<GSVoter>;
  GSVoter_bool_exp: GSVoter_bool_exp;
  GSVoter_order_by: GSVoter_order_by;
  GSVoter_select_column: GSVoter_select_column;
  GSVoter_stream_cursor_input: GSVoter_stream_cursor_input;
  GSVoter_stream_cursor_value_input: GSVoter_stream_cursor_value_input;
  GameManagerFactory: ResolverTypeWrapper<GameManagerFactory>;
  GameManagerFactory_bool_exp: GameManagerFactory_bool_exp;
  GameManagerFactory_order_by: GameManagerFactory_order_by;
  GameManagerFactory_select_column: GameManagerFactory_select_column;
  GameManagerFactory_stream_cursor_input: GameManagerFactory_stream_cursor_input;
  GameManagerFactory_stream_cursor_value_input: GameManagerFactory_stream_cursor_value_input;
  GameManagerTemplate: ResolverTypeWrapper<GameManagerTemplate>;
  GameManagerTemplate_bool_exp: GameManagerTemplate_bool_exp;
  GameManagerTemplate_order_by: GameManagerTemplate_order_by;
  GameManagerTemplate_select_column: GameManagerTemplate_select_column;
  GameManagerTemplate_stream_cursor_input: GameManagerTemplate_stream_cursor_input;
  GameManagerTemplate_stream_cursor_value_input: GameManagerTemplate_stream_cursor_value_input;
  GameManager_bool_exp: GameManager_bool_exp;
  GameManager_order_by: GameManager_order_by;
  GameManager_select_column: GameManager_select_column;
  GameManager_stream_cursor_input: GameManager_stream_cursor_input;
  GameManager_stream_cursor_value_input: GameManager_stream_cursor_value_input;
  GameRound_aggregate_order_by: GameRound_aggregate_order_by;
  GameRound_avg_order_by: GameRound_avg_order_by;
  GameRound_bool_exp: GameRound_bool_exp;
  GameRound_max_order_by: GameRound_max_order_by;
  GameRound_min_order_by: GameRound_min_order_by;
  GameRound_order_by: GameRound_order_by;
  GameRound_select_column: GameRound_select_column;
  GameRound_stddev_order_by: GameRound_stddev_order_by;
  GameRound_stddev_pop_order_by: GameRound_stddev_pop_order_by;
  GameRound_stddev_samp_order_by: GameRound_stddev_samp_order_by;
  GameRound_stream_cursor_input: GameRound_stream_cursor_input;
  GameRound_stream_cursor_value_input: GameRound_stream_cursor_value_input;
  GameRound_sum_order_by: GameRound_sum_order_by;
  GameRound_var_pop_order_by: GameRound_var_pop_order_by;
  GameRound_var_samp_order_by: GameRound_var_samp_order_by;
  GameRound_variance_order_by: GameRound_variance_order_by;
  Gate: ResolverTypeWrapper<Gate>;
  Gate_bool_exp: Gate_bool_exp;
  Gate_order_by: Gate_order_by;
  Gate_select_column: Gate_select_column;
  Gate_stream_cursor_input: Gate_stream_cursor_input;
  Gate_stream_cursor_value_input: Gate_stream_cursor_value_input;
  GrantShip_aggregate_order_by: GrantShip_aggregate_order_by;
  GrantShip_avg_order_by: GrantShip_avg_order_by;
  GrantShip_bool_exp: GrantShip_bool_exp;
  GrantShip_max_order_by: GrantShip_max_order_by;
  GrantShip_min_order_by: GrantShip_min_order_by;
  GrantShip_order_by: GrantShip_order_by;
  GrantShip_select_column: GrantShip_select_column;
  GrantShip_stddev_order_by: GrantShip_stddev_order_by;
  GrantShip_stddev_pop_order_by: GrantShip_stddev_pop_order_by;
  GrantShip_stddev_samp_order_by: GrantShip_stddev_samp_order_by;
  GrantShip_stream_cursor_input: GrantShip_stream_cursor_input;
  GrantShip_stream_cursor_value_input: GrantShip_stream_cursor_value_input;
  GrantShip_sum_order_by: GrantShip_sum_order_by;
  GrantShip_var_pop_order_by: GrantShip_var_pop_order_by;
  GrantShip_var_samp_order_by: GrantShip_var_samp_order_by;
  GrantShip_variance_order_by: GrantShip_variance_order_by;
  GrantShipsVoting: ResolverTypeWrapper<GrantShipsVoting>;
  GrantShipsVoting_bool_exp: GrantShipsVoting_bool_exp;
  GrantShipsVoting_order_by: GrantShipsVoting_order_by;
  GrantShipsVoting_select_column: GrantShipsVoting_select_column;
  GrantShipsVoting_stream_cursor_input: GrantShipsVoting_stream_cursor_input;
  GrantShipsVoting_stream_cursor_value_input: GrantShipsVoting_stream_cursor_value_input;
  Grant_aggregate_order_by: Grant_aggregate_order_by;
  Grant_avg_order_by: Grant_avg_order_by;
  Grant_bool_exp: Grant_bool_exp;
  Grant_max_order_by: Grant_max_order_by;
  Grant_min_order_by: Grant_min_order_by;
  Grant_order_by: Grant_order_by;
  Grant_select_column: Grant_select_column;
  Grant_stddev_order_by: Grant_stddev_order_by;
  Grant_stddev_pop_order_by: Grant_stddev_pop_order_by;
  Grant_stddev_samp_order_by: Grant_stddev_samp_order_by;
  Grant_stream_cursor_input: Grant_stream_cursor_input;
  Grant_stream_cursor_value_input: Grant_stream_cursor_value_input;
  Grant_sum_order_by: Grant_sum_order_by;
  Grant_var_pop_order_by: Grant_var_pop_order_by;
  Grant_var_samp_order_by: Grant_var_samp_order_by;
  Grant_variance_order_by: Grant_variance_order_by;
  HALParams: ResolverTypeWrapper<HALParams>;
  HALParams_bool_exp: HALParams_bool_exp;
  HALParams_order_by: HALParams_order_by;
  HALParams_select_column: HALParams_select_column;
  HALParams_stream_cursor_input: HALParams_stream_cursor_input;
  HALParams_stream_cursor_value_input: HALParams_stream_cursor_value_input;
  HatsPoster: ResolverTypeWrapper<HatsPoster>;
  HatsPoster_bool_exp: HatsPoster_bool_exp;
  HatsPoster_order_by: HatsPoster_order_by;
  HatsPoster_select_column: HatsPoster_select_column;
  HatsPoster_stream_cursor_input: HatsPoster_stream_cursor_input;
  HatsPoster_stream_cursor_value_input: HatsPoster_stream_cursor_value_input;
  Int_comparison_exp: Int_comparison_exp;
  LocalLog: ResolverTypeWrapper<LocalLog>;
  LocalLog_bool_exp: LocalLog_bool_exp;
  LocalLog_order_by: LocalLog_order_by;
  LocalLog_select_column: LocalLog_select_column;
  LocalLog_stream_cursor_input: LocalLog_stream_cursor_input;
  LocalLog_stream_cursor_value_input: LocalLog_stream_cursor_value_input;
  MilestoneSet: ResolverTypeWrapper<MilestoneSet>;
  MilestoneSet_aggregate_order_by: MilestoneSet_aggregate_order_by;
  MilestoneSet_avg_order_by: MilestoneSet_avg_order_by;
  MilestoneSet_bool_exp: MilestoneSet_bool_exp;
  MilestoneSet_max_order_by: MilestoneSet_max_order_by;
  MilestoneSet_min_order_by: MilestoneSet_min_order_by;
  MilestoneSet_order_by: MilestoneSet_order_by;
  MilestoneSet_select_column: MilestoneSet_select_column;
  MilestoneSet_stddev_order_by: MilestoneSet_stddev_order_by;
  MilestoneSet_stddev_pop_order_by: MilestoneSet_stddev_pop_order_by;
  MilestoneSet_stddev_samp_order_by: MilestoneSet_stddev_samp_order_by;
  MilestoneSet_stream_cursor_input: MilestoneSet_stream_cursor_input;
  MilestoneSet_stream_cursor_value_input: MilestoneSet_stream_cursor_value_input;
  MilestoneSet_sum_order_by: MilestoneSet_sum_order_by;
  MilestoneSet_var_pop_order_by: MilestoneSet_var_pop_order_by;
  MilestoneSet_var_samp_order_by: MilestoneSet_var_samp_order_by;
  MilestoneSet_variance_order_by: MilestoneSet_variance_order_by;
  Milestone_aggregate_order_by: Milestone_aggregate_order_by;
  Milestone_avg_order_by: Milestone_avg_order_by;
  Milestone_bool_exp: Milestone_bool_exp;
  Milestone_max_order_by: Milestone_max_order_by;
  Milestone_min_order_by: Milestone_min_order_by;
  Milestone_order_by: Milestone_order_by;
  Milestone_select_column: Milestone_select_column;
  Milestone_stddev_order_by: Milestone_stddev_order_by;
  Milestone_stddev_pop_order_by: Milestone_stddev_pop_order_by;
  Milestone_stddev_samp_order_by: Milestone_stddev_samp_order_by;
  Milestone_stream_cursor_input: Milestone_stream_cursor_input;
  Milestone_stream_cursor_value_input: Milestone_stream_cursor_value_input;
  Milestone_sum_order_by: Milestone_sum_order_by;
  Milestone_var_pop_order_by: Milestone_var_pop_order_by;
  Milestone_var_samp_order_by: Milestone_var_samp_order_by;
  Milestone_variance_order_by: Milestone_variance_order_by;
  ModuleTemplate: ResolverTypeWrapper<ModuleTemplate>;
  ModuleTemplate_bool_exp: ModuleTemplate_bool_exp;
  ModuleTemplate_order_by: ModuleTemplate_order_by;
  ModuleTemplate_select_column: ModuleTemplate_select_column;
  ModuleTemplate_stream_cursor_input: ModuleTemplate_stream_cursor_input;
  ModuleTemplate_stream_cursor_value_input: ModuleTemplate_stream_cursor_value_input;
  ProfileIdToAnchor_bool_exp: ProfileIdToAnchor_bool_exp;
  ProfileIdToAnchor_order_by: ProfileIdToAnchor_order_by;
  ProfileIdToAnchor_select_column: ProfileIdToAnchor_select_column;
  ProfileIdToAnchor_stream_cursor_input: ProfileIdToAnchor_stream_cursor_input;
  ProfileIdToAnchor_stream_cursor_value_input: ProfileIdToAnchor_stream_cursor_value_input;
  ProfileMemberGroup_bool_exp: ProfileMemberGroup_bool_exp;
  ProfileMemberGroup_order_by: ProfileMemberGroup_order_by;
  ProfileMemberGroup_select_column: ProfileMemberGroup_select_column;
  ProfileMemberGroup_stream_cursor_input: ProfileMemberGroup_stream_cursor_input;
  ProfileMemberGroup_stream_cursor_value_input: ProfileMemberGroup_stream_cursor_value_input;
  Project_bool_exp: Project_bool_exp;
  Project_order_by: Project_order_by;
  Project_select_column: Project_select_column;
  Project_stream_cursor_input: Project_stream_cursor_input;
  Project_stream_cursor_value_input: Project_stream_cursor_value_input;
  RawMetadata_bool_exp: RawMetadata_bool_exp;
  RawMetadata_order_by: RawMetadata_order_by;
  RawMetadata_select_column: RawMetadata_select_column;
  RawMetadata_stream_cursor_input: RawMetadata_stream_cursor_input;
  RawMetadata_stream_cursor_value_input: RawMetadata_stream_cursor_value_input;
  Record: ResolverTypeWrapper<Record>;
  Record_aggregate_order_by: Record_aggregate_order_by;
  Record_avg_order_by: Record_avg_order_by;
  Record_bool_exp: Record_bool_exp;
  Record_max_order_by: Record_max_order_by;
  Record_min_order_by: Record_min_order_by;
  Record_order_by: Record_order_by;
  Record_select_column: Record_select_column;
  Record_stddev_order_by: Record_stddev_order_by;
  Record_stddev_pop_order_by: Record_stddev_pop_order_by;
  Record_stddev_samp_order_by: Record_stddev_samp_order_by;
  Record_stream_cursor_input: Record_stream_cursor_input;
  Record_stream_cursor_value_input: Record_stream_cursor_value_input;
  Record_sum_order_by: Record_sum_order_by;
  Record_var_pop_order_by: Record_var_pop_order_by;
  Record_var_samp_order_by: Record_var_samp_order_by;
  Record_variance_order_by: Record_variance_order_by;
  SBTBalParams: ResolverTypeWrapper<SBTBalParams>;
  SBTBalParams_bool_exp: SBTBalParams_bool_exp;
  SBTBalParams_order_by: SBTBalParams_order_by;
  SBTBalParams_select_column: SBTBalParams_select_column;
  SBTBalParams_stream_cursor_input: SBTBalParams_stream_cursor_input;
  SBTBalParams_stream_cursor_value_input: SBTBalParams_stream_cursor_value_input;
  ScaffoldShaman: ResolverTypeWrapper<ScaffoldShaman>;
  ScaffoldShaman_bool_exp: ScaffoldShaman_bool_exp;
  ScaffoldShaman_order_by: ScaffoldShaman_order_by;
  ScaffoldShaman_select_column: ScaffoldShaman_select_column;
  ScaffoldShaman_stream_cursor_input: ScaffoldShaman_stream_cursor_input;
  ScaffoldShaman_stream_cursor_value_input: ScaffoldShaman_stream_cursor_value_input;
  ShipChoice: ResolverTypeWrapper<ShipChoice>;
  ShipChoice_aggregate_order_by: ShipChoice_aggregate_order_by;
  ShipChoice_avg_order_by: ShipChoice_avg_order_by;
  ShipChoice_bool_exp: ShipChoice_bool_exp;
  ShipChoice_max_order_by: ShipChoice_max_order_by;
  ShipChoice_min_order_by: ShipChoice_min_order_by;
  ShipChoice_order_by: ShipChoice_order_by;
  ShipChoice_select_column: ShipChoice_select_column;
  ShipChoice_stddev_order_by: ShipChoice_stddev_order_by;
  ShipChoice_stddev_pop_order_by: ShipChoice_stddev_pop_order_by;
  ShipChoice_stddev_samp_order_by: ShipChoice_stddev_samp_order_by;
  ShipChoice_stream_cursor_input: ShipChoice_stream_cursor_input;
  ShipChoice_stream_cursor_value_input: ShipChoice_stream_cursor_value_input;
  ShipChoice_sum_order_by: ShipChoice_sum_order_by;
  ShipChoice_var_pop_order_by: ShipChoice_var_pop_order_by;
  ShipChoice_var_samp_order_by: ShipChoice_var_samp_order_by;
  ShipChoice_variance_order_by: ShipChoice_variance_order_by;
  ShipContext: ResolverTypeWrapper<ShipContext>;
  ShipContext_bool_exp: ShipContext_bool_exp;
  ShipContext_order_by: ShipContext_order_by;
  ShipContext_select_column: ShipContext_select_column;
  ShipContext_stream_cursor_input: ShipContext_stream_cursor_input;
  ShipContext_stream_cursor_value_input: ShipContext_stream_cursor_value_input;
  ShipVote: ResolverTypeWrapper<ShipVote>;
  ShipVote_aggregate_order_by: ShipVote_aggregate_order_by;
  ShipVote_avg_order_by: ShipVote_avg_order_by;
  ShipVote_bool_exp: ShipVote_bool_exp;
  ShipVote_max_order_by: ShipVote_max_order_by;
  ShipVote_min_order_by: ShipVote_min_order_by;
  ShipVote_order_by: ShipVote_order_by;
  ShipVote_select_column: ShipVote_select_column;
  ShipVote_stddev_order_by: ShipVote_stddev_order_by;
  ShipVote_stddev_pop_order_by: ShipVote_stddev_pop_order_by;
  ShipVote_stddev_samp_order_by: ShipVote_stddev_samp_order_by;
  ShipVote_stream_cursor_input: ShipVote_stream_cursor_input;
  ShipVote_stream_cursor_value_input: ShipVote_stream_cursor_value_input;
  ShipVote_sum_order_by: ShipVote_sum_order_by;
  ShipVote_var_pop_order_by: ShipVote_var_pop_order_by;
  ShipVote_var_samp_order_by: ShipVote_var_samp_order_by;
  ShipVote_variance_order_by: ShipVote_variance_order_by;
  StemModule: ResolverTypeWrapper<StemModule>;
  StemModule_bool_exp: StemModule_bool_exp;
  StemModule_order_by: StemModule_order_by;
  StemModule_select_column: StemModule_select_column;
  StemModule_stream_cursor_input: StemModule_stream_cursor_input;
  StemModule_stream_cursor_value_input: StemModule_stream_cursor_value_input;
  String_array_comparison_exp: String_array_comparison_exp;
  String_comparison_exp: String_comparison_exp;
  TVParams: ResolverTypeWrapper<TVParams>;
  TVParams_bool_exp: TVParams_bool_exp;
  TVParams_order_by: TVParams_order_by;
  TVParams_select_column: TVParams_select_column;
  TVParams_stream_cursor_input: TVParams_stream_cursor_input;
  TVParams_stream_cursor_value_input: TVParams_stream_cursor_value_input;
  Transaction_bool_exp: Transaction_bool_exp;
  Transaction_order_by: Transaction_order_by;
  Transaction_select_column: Transaction_select_column;
  Transaction_stream_cursor_input: Transaction_stream_cursor_input;
  Transaction_stream_cursor_value_input: Transaction_stream_cursor_value_input;
  Update_bool_exp: Update_bool_exp;
  Update_order_by: Update_order_by;
  Update_select_column: Update_select_column;
  Update_stream_cursor_input: Update_stream_cursor_input;
  Update_stream_cursor_value_input: Update_stream_cursor_value_input;
  chain_metadata: ResolverTypeWrapper<chain_metadata>;
  chain_metadata_bool_exp: chain_metadata_bool_exp;
  chain_metadata_order_by: chain_metadata_order_by;
  chain_metadata_select_column: chain_metadata_select_column;
  chain_metadata_stream_cursor_input: chain_metadata_stream_cursor_input;
  chain_metadata_stream_cursor_value_input: chain_metadata_stream_cursor_value_input;
  contract_type: ResolverTypeWrapper<Scalars['contract_type']>;
  contract_type_comparison_exp: contract_type_comparison_exp;
  cursor_ordering: cursor_ordering;
  dynamic_contract_registry: ResolverTypeWrapper<dynamic_contract_registry>;
  dynamic_contract_registry_bool_exp: dynamic_contract_registry_bool_exp;
  dynamic_contract_registry_order_by: dynamic_contract_registry_order_by;
  dynamic_contract_registry_select_column: dynamic_contract_registry_select_column;
  dynamic_contract_registry_stream_cursor_input: dynamic_contract_registry_stream_cursor_input;
  dynamic_contract_registry_stream_cursor_value_input: dynamic_contract_registry_stream_cursor_value_input;
  end_of_block_range_scanned_data: ResolverTypeWrapper<end_of_block_range_scanned_data>;
  end_of_block_range_scanned_data_bool_exp: end_of_block_range_scanned_data_bool_exp;
  end_of_block_range_scanned_data_order_by: end_of_block_range_scanned_data_order_by;
  end_of_block_range_scanned_data_select_column: end_of_block_range_scanned_data_select_column;
  end_of_block_range_scanned_data_stream_cursor_input: end_of_block_range_scanned_data_stream_cursor_input;
  end_of_block_range_scanned_data_stream_cursor_value_input: end_of_block_range_scanned_data_stream_cursor_value_input;
  entity_history: ResolverTypeWrapper<entity_history>;
  entity_history_aggregate_order_by: entity_history_aggregate_order_by;
  entity_history_avg_order_by: entity_history_avg_order_by;
  entity_history_bool_exp: entity_history_bool_exp;
  entity_history_filter: ResolverTypeWrapper<entity_history_filter>;
  entity_history_filter_bool_exp: entity_history_filter_bool_exp;
  entity_history_filter_order_by: entity_history_filter_order_by;
  entity_history_filter_select_column: entity_history_filter_select_column;
  entity_history_filter_stream_cursor_input: entity_history_filter_stream_cursor_input;
  entity_history_filter_stream_cursor_value_input: entity_history_filter_stream_cursor_value_input;
  entity_history_max_order_by: entity_history_max_order_by;
  entity_history_min_order_by: entity_history_min_order_by;
  entity_history_order_by: entity_history_order_by;
  entity_history_select_column: entity_history_select_column;
  entity_history_stddev_order_by: entity_history_stddev_order_by;
  entity_history_stddev_pop_order_by: entity_history_stddev_pop_order_by;
  entity_history_stddev_samp_order_by: entity_history_stddev_samp_order_by;
  entity_history_stream_cursor_input: entity_history_stream_cursor_input;
  entity_history_stream_cursor_value_input: entity_history_stream_cursor_value_input;
  entity_history_sum_order_by: entity_history_sum_order_by;
  entity_history_var_pop_order_by: entity_history_var_pop_order_by;
  entity_history_var_samp_order_by: entity_history_var_samp_order_by;
  entity_history_variance_order_by: entity_history_variance_order_by;
  entity_type: ResolverTypeWrapper<Scalars['entity_type']>;
  entity_type_comparison_exp: entity_type_comparison_exp;
  event_sync_state: ResolverTypeWrapper<event_sync_state>;
  event_sync_state_bool_exp: event_sync_state_bool_exp;
  event_sync_state_order_by: event_sync_state_order_by;
  event_sync_state_select_column: event_sync_state_select_column;
  event_sync_state_stream_cursor_input: event_sync_state_stream_cursor_input;
  event_sync_state_stream_cursor_value_input: event_sync_state_stream_cursor_value_input;
  get_entity_history_filter_args: get_entity_history_filter_args;
  jsonb: ResolverTypeWrapper<Scalars['jsonb']>;
  jsonb_cast_exp: jsonb_cast_exp;
  jsonb_comparison_exp: jsonb_comparison_exp;
  numeric: ResolverTypeWrapper<Scalars['numeric']>;
  numeric_array_comparison_exp: numeric_array_comparison_exp;
  numeric_comparison_exp: numeric_comparison_exp;
  order_by: order_by;
  persisted_state: ResolverTypeWrapper<persisted_state>;
  persisted_state_bool_exp: persisted_state_bool_exp;
  persisted_state_order_by: persisted_state_order_by;
  persisted_state_select_column: persisted_state_select_column;
  persisted_state_stream_cursor_input: persisted_state_stream_cursor_input;
  persisted_state_stream_cursor_value_input: persisted_state_stream_cursor_value_input;
  raw_events: ResolverTypeWrapper<raw_events>;
  raw_events_bool_exp: raw_events_bool_exp;
  raw_events_order_by: raw_events_order_by;
  raw_events_select_column: raw_events_select_column;
  raw_events_stream_cursor_input: raw_events_stream_cursor_input;
  raw_events_stream_cursor_value_input: raw_events_stream_cursor_value_input;
  timestamp: ResolverTypeWrapper<Scalars['timestamp']>;
  timestamp_comparison_exp: timestamp_comparison_exp;
  timestamptz: ResolverTypeWrapper<Scalars['timestamptz']>;
  timestamptz_comparison_exp: timestamptz_comparison_exp;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Subscription: {};
  ApplicationHistory: ApplicationHistory;
  ApplicationHistory_filter: ApplicationHistory_filter;
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  FeedItem: FeedItem;
  FeedItemEmbed: FeedItemEmbed;
  FeedItemEmbed_filter: FeedItemEmbed_filter;
  FeedItemEntity: FeedItemEntity;
  FeedItemEntity_filter: FeedItemEntity_filter;
  FeedItem_filter: FeedItem_filter;
  Float: Scalars['Float'];
  GameManager: GameManager;
  GameManager_filter: GameManager_filter;
  GameRound: GameRound;
  GameRound_filter: GameRound_filter;
  GmDeployment: GmDeployment;
  GmDeployment_filter: GmDeployment_filter;
  GmVersion: GmVersion;
  GmVersion_filter: GmVersion_filter;
  Grant: Grant;
  GrantShip: GrantShip;
  GrantShip_filter: GrantShip_filter;
  Grant_filter: Grant_filter;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Int8: Scalars['Int8'];
  Log: Log;
  Log_filter: Log_filter;
  Milestone: Milestone;
  Milestone_filter: Milestone_filter;
  PoolIdLookup: PoolIdLookup;
  PoolIdLookup_filter: PoolIdLookup_filter;
  ProfileIdToAnchor: ProfileIdToAnchor;
  ProfileIdToAnchor_filter: ProfileIdToAnchor_filter;
  ProfileMemberGroup: ProfileMemberGroup;
  ProfileMemberGroup_filter: ProfileMemberGroup_filter;
  Project: Project;
  Project_filter: Project_filter;
  RawMetadata: RawMetadata;
  RawMetadata_filter: RawMetadata_filter;
  String: Scalars['String'];
  Timestamp: Scalars['Timestamp'];
  Transaction: Transaction;
  Transaction_filter: Transaction_filter;
  Update: Update;
  Update_filter: Update_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
  Application: Application;
  Application_aggregate_order_by: Application_aggregate_order_by;
  Application_avg_order_by: Application_avg_order_by;
  Application_bool_exp: Application_bool_exp;
  Application_max_order_by: Application_max_order_by;
  Application_min_order_by: Application_min_order_by;
  Application_order_by: Application_order_by;
  Application_stddev_order_by: Application_stddev_order_by;
  Application_stddev_pop_order_by: Application_stddev_pop_order_by;
  Application_stddev_samp_order_by: Application_stddev_samp_order_by;
  Application_stream_cursor_input: Application_stream_cursor_input;
  Application_stream_cursor_value_input: Application_stream_cursor_value_input;
  Application_sum_order_by: Application_sum_order_by;
  Application_var_pop_order_by: Application_var_pop_order_by;
  Application_var_samp_order_by: Application_var_samp_order_by;
  Application_variance_order_by: Application_variance_order_by;
  Badge: Badge;
  BadgeHolder: BadgeHolder;
  BadgeHolder_bool_exp: BadgeHolder_bool_exp;
  BadgeHolder_order_by: BadgeHolder_order_by;
  BadgeHolder_stream_cursor_input: BadgeHolder_stream_cursor_input;
  BadgeHolder_stream_cursor_value_input: BadgeHolder_stream_cursor_value_input;
  BadgeTemplate: BadgeTemplate;
  BadgeTemplate_aggregate_order_by: BadgeTemplate_aggregate_order_by;
  BadgeTemplate_avg_order_by: BadgeTemplate_avg_order_by;
  BadgeTemplate_bool_exp: BadgeTemplate_bool_exp;
  BadgeTemplate_max_order_by: BadgeTemplate_max_order_by;
  BadgeTemplate_min_order_by: BadgeTemplate_min_order_by;
  BadgeTemplate_order_by: BadgeTemplate_order_by;
  BadgeTemplate_stddev_order_by: BadgeTemplate_stddev_order_by;
  BadgeTemplate_stddev_pop_order_by: BadgeTemplate_stddev_pop_order_by;
  BadgeTemplate_stddev_samp_order_by: BadgeTemplate_stddev_samp_order_by;
  BadgeTemplate_stream_cursor_input: BadgeTemplate_stream_cursor_input;
  BadgeTemplate_stream_cursor_value_input: BadgeTemplate_stream_cursor_value_input;
  BadgeTemplate_sum_order_by: BadgeTemplate_sum_order_by;
  BadgeTemplate_var_pop_order_by: BadgeTemplate_var_pop_order_by;
  BadgeTemplate_var_samp_order_by: BadgeTemplate_var_samp_order_by;
  BadgeTemplate_variance_order_by: BadgeTemplate_variance_order_by;
  Badge_aggregate_order_by: Badge_aggregate_order_by;
  Badge_avg_order_by: Badge_avg_order_by;
  Badge_bool_exp: Badge_bool_exp;
  Badge_max_order_by: Badge_max_order_by;
  Badge_min_order_by: Badge_min_order_by;
  Badge_order_by: Badge_order_by;
  Badge_stddev_order_by: Badge_stddev_order_by;
  Badge_stddev_pop_order_by: Badge_stddev_pop_order_by;
  Badge_stddev_samp_order_by: Badge_stddev_samp_order_by;
  Badge_stream_cursor_input: Badge_stream_cursor_input;
  Badge_stream_cursor_value_input: Badge_stream_cursor_value_input;
  Badge_sum_order_by: Badge_sum_order_by;
  Badge_var_pop_order_by: Badge_var_pop_order_by;
  Badge_var_samp_order_by: Badge_var_samp_order_by;
  Badge_variance_order_by: Badge_variance_order_by;
  Boolean_comparison_exp: Boolean_comparison_exp;
  Contest: Contest;
  ContestClone: ContestClone;
  ContestClone_bool_exp: ContestClone_bool_exp;
  ContestClone_order_by: ContestClone_order_by;
  ContestClone_stream_cursor_input: ContestClone_stream_cursor_input;
  ContestClone_stream_cursor_value_input: ContestClone_stream_cursor_value_input;
  ContestTemplate: ContestTemplate;
  ContestTemplate_bool_exp: ContestTemplate_bool_exp;
  ContestTemplate_order_by: ContestTemplate_order_by;
  ContestTemplate_stream_cursor_input: ContestTemplate_stream_cursor_input;
  ContestTemplate_stream_cursor_value_input: ContestTemplate_stream_cursor_value_input;
  Contest_bool_exp: Contest_bool_exp;
  Contest_order_by: Contest_order_by;
  Contest_stream_cursor_input: Contest_stream_cursor_input;
  Contest_stream_cursor_value_input: Contest_stream_cursor_value_input;
  DAOToken: DAOToken;
  DAOToken_bool_exp: DAOToken_bool_exp;
  DAOToken_order_by: DAOToken_order_by;
  DAOToken_stream_cursor_input: DAOToken_stream_cursor_input;
  DAOToken_stream_cursor_value_input: DAOToken_stream_cursor_value_input;
  DualTokenPointsParams: DualTokenPointsParams;
  DualTokenPointsParams_bool_exp: DualTokenPointsParams_bool_exp;
  DualTokenPointsParams_order_by: DualTokenPointsParams_order_by;
  DualTokenPointsParams_stream_cursor_input: DualTokenPointsParams_stream_cursor_input;
  DualTokenPointsParams_stream_cursor_value_input: DualTokenPointsParams_stream_cursor_value_input;
  DualTokenTVParams: DualTokenTVParams;
  DualTokenTVParams_bool_exp: DualTokenTVParams_bool_exp;
  DualTokenTVParams_order_by: DualTokenTVParams_order_by;
  DualTokenTVParams_stream_cursor_input: DualTokenTVParams_stream_cursor_input;
  DualTokenTVParams_stream_cursor_value_input: DualTokenTVParams_stream_cursor_value_input;
  ERCPointParams: ERCPointParams;
  ERCPointParams_bool_exp: ERCPointParams_bool_exp;
  ERCPointParams_order_by: ERCPointParams_order_by;
  ERCPointParams_stream_cursor_input: ERCPointParams_stream_cursor_input;
  ERCPointParams_stream_cursor_value_input: ERCPointParams_stream_cursor_value_input;
  EnvioTX: EnvioTX;
  EnvioTX_bool_exp: EnvioTX_bool_exp;
  EnvioTX_order_by: EnvioTX_order_by;
  EnvioTX_stream_cursor_input: EnvioTX_stream_cursor_input;
  EnvioTX_stream_cursor_value_input: EnvioTX_stream_cursor_value_input;
  EventPost: EventPost;
  EventPost_aggregate_order_by: EventPost_aggregate_order_by;
  EventPost_avg_order_by: EventPost_avg_order_by;
  EventPost_bool_exp: EventPost_bool_exp;
  EventPost_max_order_by: EventPost_max_order_by;
  EventPost_min_order_by: EventPost_min_order_by;
  EventPost_order_by: EventPost_order_by;
  EventPost_stddev_order_by: EventPost_stddev_order_by;
  EventPost_stddev_pop_order_by: EventPost_stddev_pop_order_by;
  EventPost_stddev_samp_order_by: EventPost_stddev_samp_order_by;
  EventPost_stream_cursor_input: EventPost_stream_cursor_input;
  EventPost_stream_cursor_value_input: EventPost_stream_cursor_value_input;
  EventPost_sum_order_by: EventPost_sum_order_by;
  EventPost_var_pop_order_by: EventPost_var_pop_order_by;
  EventPost_var_samp_order_by: EventPost_var_samp_order_by;
  EventPost_variance_order_by: EventPost_variance_order_by;
  FactoryEventsSummary: FactoryEventsSummary;
  FactoryEventsSummary_bool_exp: FactoryEventsSummary_bool_exp;
  FactoryEventsSummary_order_by: FactoryEventsSummary_order_by;
  FactoryEventsSummary_stream_cursor_input: FactoryEventsSummary_stream_cursor_input;
  FactoryEventsSummary_stream_cursor_value_input: FactoryEventsSummary_stream_cursor_value_input;
  FeedCard: FeedCard;
  FeedCard_bool_exp: FeedCard_bool_exp;
  FeedCard_order_by: FeedCard_order_by;
  FeedCard_stream_cursor_input: FeedCard_stream_cursor_input;
  FeedCard_stream_cursor_value_input: FeedCard_stream_cursor_value_input;
  FeedItemEmbed_bool_exp: FeedItemEmbed_bool_exp;
  FeedItemEmbed_order_by: FeedItemEmbed_order_by;
  FeedItemEmbed_stream_cursor_input: FeedItemEmbed_stream_cursor_input;
  FeedItemEmbed_stream_cursor_value_input: FeedItemEmbed_stream_cursor_value_input;
  FeedItemEntity_bool_exp: FeedItemEntity_bool_exp;
  FeedItemEntity_order_by: FeedItemEntity_order_by;
  FeedItemEntity_stream_cursor_input: FeedItemEntity_stream_cursor_input;
  FeedItemEntity_stream_cursor_value_input: FeedItemEntity_stream_cursor_value_input;
  GMInitParams: GMInitParams;
  GMInitParams_bool_exp: GMInitParams_bool_exp;
  GMInitParams_order_by: GMInitParams_order_by;
  GMInitParams_stream_cursor_input: GMInitParams_stream_cursor_input;
  GMInitParams_stream_cursor_value_input: GMInitParams_stream_cursor_value_input;
  GSVoter: GSVoter;
  GSVoter_bool_exp: GSVoter_bool_exp;
  GSVoter_order_by: GSVoter_order_by;
  GSVoter_stream_cursor_input: GSVoter_stream_cursor_input;
  GSVoter_stream_cursor_value_input: GSVoter_stream_cursor_value_input;
  GameManagerFactory: GameManagerFactory;
  GameManagerFactory_bool_exp: GameManagerFactory_bool_exp;
  GameManagerFactory_order_by: GameManagerFactory_order_by;
  GameManagerFactory_stream_cursor_input: GameManagerFactory_stream_cursor_input;
  GameManagerFactory_stream_cursor_value_input: GameManagerFactory_stream_cursor_value_input;
  GameManagerTemplate: GameManagerTemplate;
  GameManagerTemplate_bool_exp: GameManagerTemplate_bool_exp;
  GameManagerTemplate_order_by: GameManagerTemplate_order_by;
  GameManagerTemplate_stream_cursor_input: GameManagerTemplate_stream_cursor_input;
  GameManagerTemplate_stream_cursor_value_input: GameManagerTemplate_stream_cursor_value_input;
  GameManager_bool_exp: GameManager_bool_exp;
  GameManager_order_by: GameManager_order_by;
  GameManager_stream_cursor_input: GameManager_stream_cursor_input;
  GameManager_stream_cursor_value_input: GameManager_stream_cursor_value_input;
  GameRound_aggregate_order_by: GameRound_aggregate_order_by;
  GameRound_avg_order_by: GameRound_avg_order_by;
  GameRound_bool_exp: GameRound_bool_exp;
  GameRound_max_order_by: GameRound_max_order_by;
  GameRound_min_order_by: GameRound_min_order_by;
  GameRound_order_by: GameRound_order_by;
  GameRound_stddev_order_by: GameRound_stddev_order_by;
  GameRound_stddev_pop_order_by: GameRound_stddev_pop_order_by;
  GameRound_stddev_samp_order_by: GameRound_stddev_samp_order_by;
  GameRound_stream_cursor_input: GameRound_stream_cursor_input;
  GameRound_stream_cursor_value_input: GameRound_stream_cursor_value_input;
  GameRound_sum_order_by: GameRound_sum_order_by;
  GameRound_var_pop_order_by: GameRound_var_pop_order_by;
  GameRound_var_samp_order_by: GameRound_var_samp_order_by;
  GameRound_variance_order_by: GameRound_variance_order_by;
  Gate: Gate;
  Gate_bool_exp: Gate_bool_exp;
  Gate_order_by: Gate_order_by;
  Gate_stream_cursor_input: Gate_stream_cursor_input;
  Gate_stream_cursor_value_input: Gate_stream_cursor_value_input;
  GrantShip_aggregate_order_by: GrantShip_aggregate_order_by;
  GrantShip_avg_order_by: GrantShip_avg_order_by;
  GrantShip_bool_exp: GrantShip_bool_exp;
  GrantShip_max_order_by: GrantShip_max_order_by;
  GrantShip_min_order_by: GrantShip_min_order_by;
  GrantShip_order_by: GrantShip_order_by;
  GrantShip_stddev_order_by: GrantShip_stddev_order_by;
  GrantShip_stddev_pop_order_by: GrantShip_stddev_pop_order_by;
  GrantShip_stddev_samp_order_by: GrantShip_stddev_samp_order_by;
  GrantShip_stream_cursor_input: GrantShip_stream_cursor_input;
  GrantShip_stream_cursor_value_input: GrantShip_stream_cursor_value_input;
  GrantShip_sum_order_by: GrantShip_sum_order_by;
  GrantShip_var_pop_order_by: GrantShip_var_pop_order_by;
  GrantShip_var_samp_order_by: GrantShip_var_samp_order_by;
  GrantShip_variance_order_by: GrantShip_variance_order_by;
  GrantShipsVoting: GrantShipsVoting;
  GrantShipsVoting_bool_exp: GrantShipsVoting_bool_exp;
  GrantShipsVoting_order_by: GrantShipsVoting_order_by;
  GrantShipsVoting_stream_cursor_input: GrantShipsVoting_stream_cursor_input;
  GrantShipsVoting_stream_cursor_value_input: GrantShipsVoting_stream_cursor_value_input;
  Grant_aggregate_order_by: Grant_aggregate_order_by;
  Grant_avg_order_by: Grant_avg_order_by;
  Grant_bool_exp: Grant_bool_exp;
  Grant_max_order_by: Grant_max_order_by;
  Grant_min_order_by: Grant_min_order_by;
  Grant_order_by: Grant_order_by;
  Grant_stddev_order_by: Grant_stddev_order_by;
  Grant_stddev_pop_order_by: Grant_stddev_pop_order_by;
  Grant_stddev_samp_order_by: Grant_stddev_samp_order_by;
  Grant_stream_cursor_input: Grant_stream_cursor_input;
  Grant_stream_cursor_value_input: Grant_stream_cursor_value_input;
  Grant_sum_order_by: Grant_sum_order_by;
  Grant_var_pop_order_by: Grant_var_pop_order_by;
  Grant_var_samp_order_by: Grant_var_samp_order_by;
  Grant_variance_order_by: Grant_variance_order_by;
  HALParams: HALParams;
  HALParams_bool_exp: HALParams_bool_exp;
  HALParams_order_by: HALParams_order_by;
  HALParams_stream_cursor_input: HALParams_stream_cursor_input;
  HALParams_stream_cursor_value_input: HALParams_stream_cursor_value_input;
  HatsPoster: HatsPoster;
  HatsPoster_bool_exp: HatsPoster_bool_exp;
  HatsPoster_order_by: HatsPoster_order_by;
  HatsPoster_stream_cursor_input: HatsPoster_stream_cursor_input;
  HatsPoster_stream_cursor_value_input: HatsPoster_stream_cursor_value_input;
  Int_comparison_exp: Int_comparison_exp;
  LocalLog: LocalLog;
  LocalLog_bool_exp: LocalLog_bool_exp;
  LocalLog_order_by: LocalLog_order_by;
  LocalLog_stream_cursor_input: LocalLog_stream_cursor_input;
  LocalLog_stream_cursor_value_input: LocalLog_stream_cursor_value_input;
  MilestoneSet: MilestoneSet;
  MilestoneSet_aggregate_order_by: MilestoneSet_aggregate_order_by;
  MilestoneSet_avg_order_by: MilestoneSet_avg_order_by;
  MilestoneSet_bool_exp: MilestoneSet_bool_exp;
  MilestoneSet_max_order_by: MilestoneSet_max_order_by;
  MilestoneSet_min_order_by: MilestoneSet_min_order_by;
  MilestoneSet_order_by: MilestoneSet_order_by;
  MilestoneSet_stddev_order_by: MilestoneSet_stddev_order_by;
  MilestoneSet_stddev_pop_order_by: MilestoneSet_stddev_pop_order_by;
  MilestoneSet_stddev_samp_order_by: MilestoneSet_stddev_samp_order_by;
  MilestoneSet_stream_cursor_input: MilestoneSet_stream_cursor_input;
  MilestoneSet_stream_cursor_value_input: MilestoneSet_stream_cursor_value_input;
  MilestoneSet_sum_order_by: MilestoneSet_sum_order_by;
  MilestoneSet_var_pop_order_by: MilestoneSet_var_pop_order_by;
  MilestoneSet_var_samp_order_by: MilestoneSet_var_samp_order_by;
  MilestoneSet_variance_order_by: MilestoneSet_variance_order_by;
  Milestone_aggregate_order_by: Milestone_aggregate_order_by;
  Milestone_avg_order_by: Milestone_avg_order_by;
  Milestone_bool_exp: Milestone_bool_exp;
  Milestone_max_order_by: Milestone_max_order_by;
  Milestone_min_order_by: Milestone_min_order_by;
  Milestone_order_by: Milestone_order_by;
  Milestone_stddev_order_by: Milestone_stddev_order_by;
  Milestone_stddev_pop_order_by: Milestone_stddev_pop_order_by;
  Milestone_stddev_samp_order_by: Milestone_stddev_samp_order_by;
  Milestone_stream_cursor_input: Milestone_stream_cursor_input;
  Milestone_stream_cursor_value_input: Milestone_stream_cursor_value_input;
  Milestone_sum_order_by: Milestone_sum_order_by;
  Milestone_var_pop_order_by: Milestone_var_pop_order_by;
  Milestone_var_samp_order_by: Milestone_var_samp_order_by;
  Milestone_variance_order_by: Milestone_variance_order_by;
  ModuleTemplate: ModuleTemplate;
  ModuleTemplate_bool_exp: ModuleTemplate_bool_exp;
  ModuleTemplate_order_by: ModuleTemplate_order_by;
  ModuleTemplate_stream_cursor_input: ModuleTemplate_stream_cursor_input;
  ModuleTemplate_stream_cursor_value_input: ModuleTemplate_stream_cursor_value_input;
  ProfileIdToAnchor_bool_exp: ProfileIdToAnchor_bool_exp;
  ProfileIdToAnchor_order_by: ProfileIdToAnchor_order_by;
  ProfileIdToAnchor_stream_cursor_input: ProfileIdToAnchor_stream_cursor_input;
  ProfileIdToAnchor_stream_cursor_value_input: ProfileIdToAnchor_stream_cursor_value_input;
  ProfileMemberGroup_bool_exp: ProfileMemberGroup_bool_exp;
  ProfileMemberGroup_order_by: ProfileMemberGroup_order_by;
  ProfileMemberGroup_stream_cursor_input: ProfileMemberGroup_stream_cursor_input;
  ProfileMemberGroup_stream_cursor_value_input: ProfileMemberGroup_stream_cursor_value_input;
  Project_bool_exp: Project_bool_exp;
  Project_order_by: Project_order_by;
  Project_stream_cursor_input: Project_stream_cursor_input;
  Project_stream_cursor_value_input: Project_stream_cursor_value_input;
  RawMetadata_bool_exp: RawMetadata_bool_exp;
  RawMetadata_order_by: RawMetadata_order_by;
  RawMetadata_stream_cursor_input: RawMetadata_stream_cursor_input;
  RawMetadata_stream_cursor_value_input: RawMetadata_stream_cursor_value_input;
  Record: Record;
  Record_aggregate_order_by: Record_aggregate_order_by;
  Record_avg_order_by: Record_avg_order_by;
  Record_bool_exp: Record_bool_exp;
  Record_max_order_by: Record_max_order_by;
  Record_min_order_by: Record_min_order_by;
  Record_order_by: Record_order_by;
  Record_stddev_order_by: Record_stddev_order_by;
  Record_stddev_pop_order_by: Record_stddev_pop_order_by;
  Record_stddev_samp_order_by: Record_stddev_samp_order_by;
  Record_stream_cursor_input: Record_stream_cursor_input;
  Record_stream_cursor_value_input: Record_stream_cursor_value_input;
  Record_sum_order_by: Record_sum_order_by;
  Record_var_pop_order_by: Record_var_pop_order_by;
  Record_var_samp_order_by: Record_var_samp_order_by;
  Record_variance_order_by: Record_variance_order_by;
  SBTBalParams: SBTBalParams;
  SBTBalParams_bool_exp: SBTBalParams_bool_exp;
  SBTBalParams_order_by: SBTBalParams_order_by;
  SBTBalParams_stream_cursor_input: SBTBalParams_stream_cursor_input;
  SBTBalParams_stream_cursor_value_input: SBTBalParams_stream_cursor_value_input;
  ScaffoldShaman: ScaffoldShaman;
  ScaffoldShaman_bool_exp: ScaffoldShaman_bool_exp;
  ScaffoldShaman_order_by: ScaffoldShaman_order_by;
  ScaffoldShaman_stream_cursor_input: ScaffoldShaman_stream_cursor_input;
  ScaffoldShaman_stream_cursor_value_input: ScaffoldShaman_stream_cursor_value_input;
  ShipChoice: ShipChoice;
  ShipChoice_aggregate_order_by: ShipChoice_aggregate_order_by;
  ShipChoice_avg_order_by: ShipChoice_avg_order_by;
  ShipChoice_bool_exp: ShipChoice_bool_exp;
  ShipChoice_max_order_by: ShipChoice_max_order_by;
  ShipChoice_min_order_by: ShipChoice_min_order_by;
  ShipChoice_order_by: ShipChoice_order_by;
  ShipChoice_stddev_order_by: ShipChoice_stddev_order_by;
  ShipChoice_stddev_pop_order_by: ShipChoice_stddev_pop_order_by;
  ShipChoice_stddev_samp_order_by: ShipChoice_stddev_samp_order_by;
  ShipChoice_stream_cursor_input: ShipChoice_stream_cursor_input;
  ShipChoice_stream_cursor_value_input: ShipChoice_stream_cursor_value_input;
  ShipChoice_sum_order_by: ShipChoice_sum_order_by;
  ShipChoice_var_pop_order_by: ShipChoice_var_pop_order_by;
  ShipChoice_var_samp_order_by: ShipChoice_var_samp_order_by;
  ShipChoice_variance_order_by: ShipChoice_variance_order_by;
  ShipContext: ShipContext;
  ShipContext_bool_exp: ShipContext_bool_exp;
  ShipContext_order_by: ShipContext_order_by;
  ShipContext_stream_cursor_input: ShipContext_stream_cursor_input;
  ShipContext_stream_cursor_value_input: ShipContext_stream_cursor_value_input;
  ShipVote: ShipVote;
  ShipVote_aggregate_order_by: ShipVote_aggregate_order_by;
  ShipVote_avg_order_by: ShipVote_avg_order_by;
  ShipVote_bool_exp: ShipVote_bool_exp;
  ShipVote_max_order_by: ShipVote_max_order_by;
  ShipVote_min_order_by: ShipVote_min_order_by;
  ShipVote_order_by: ShipVote_order_by;
  ShipVote_stddev_order_by: ShipVote_stddev_order_by;
  ShipVote_stddev_pop_order_by: ShipVote_stddev_pop_order_by;
  ShipVote_stddev_samp_order_by: ShipVote_stddev_samp_order_by;
  ShipVote_stream_cursor_input: ShipVote_stream_cursor_input;
  ShipVote_stream_cursor_value_input: ShipVote_stream_cursor_value_input;
  ShipVote_sum_order_by: ShipVote_sum_order_by;
  ShipVote_var_pop_order_by: ShipVote_var_pop_order_by;
  ShipVote_var_samp_order_by: ShipVote_var_samp_order_by;
  ShipVote_variance_order_by: ShipVote_variance_order_by;
  StemModule: StemModule;
  StemModule_bool_exp: StemModule_bool_exp;
  StemModule_order_by: StemModule_order_by;
  StemModule_stream_cursor_input: StemModule_stream_cursor_input;
  StemModule_stream_cursor_value_input: StemModule_stream_cursor_value_input;
  String_array_comparison_exp: String_array_comparison_exp;
  String_comparison_exp: String_comparison_exp;
  TVParams: TVParams;
  TVParams_bool_exp: TVParams_bool_exp;
  TVParams_order_by: TVParams_order_by;
  TVParams_stream_cursor_input: TVParams_stream_cursor_input;
  TVParams_stream_cursor_value_input: TVParams_stream_cursor_value_input;
  Transaction_bool_exp: Transaction_bool_exp;
  Transaction_order_by: Transaction_order_by;
  Transaction_stream_cursor_input: Transaction_stream_cursor_input;
  Transaction_stream_cursor_value_input: Transaction_stream_cursor_value_input;
  Update_bool_exp: Update_bool_exp;
  Update_order_by: Update_order_by;
  Update_stream_cursor_input: Update_stream_cursor_input;
  Update_stream_cursor_value_input: Update_stream_cursor_value_input;
  chain_metadata: chain_metadata;
  chain_metadata_bool_exp: chain_metadata_bool_exp;
  chain_metadata_order_by: chain_metadata_order_by;
  chain_metadata_stream_cursor_input: chain_metadata_stream_cursor_input;
  chain_metadata_stream_cursor_value_input: chain_metadata_stream_cursor_value_input;
  contract_type: Scalars['contract_type'];
  contract_type_comparison_exp: contract_type_comparison_exp;
  dynamic_contract_registry: dynamic_contract_registry;
  dynamic_contract_registry_bool_exp: dynamic_contract_registry_bool_exp;
  dynamic_contract_registry_order_by: dynamic_contract_registry_order_by;
  dynamic_contract_registry_stream_cursor_input: dynamic_contract_registry_stream_cursor_input;
  dynamic_contract_registry_stream_cursor_value_input: dynamic_contract_registry_stream_cursor_value_input;
  end_of_block_range_scanned_data: end_of_block_range_scanned_data;
  end_of_block_range_scanned_data_bool_exp: end_of_block_range_scanned_data_bool_exp;
  end_of_block_range_scanned_data_order_by: end_of_block_range_scanned_data_order_by;
  end_of_block_range_scanned_data_stream_cursor_input: end_of_block_range_scanned_data_stream_cursor_input;
  end_of_block_range_scanned_data_stream_cursor_value_input: end_of_block_range_scanned_data_stream_cursor_value_input;
  entity_history: entity_history;
  entity_history_aggregate_order_by: entity_history_aggregate_order_by;
  entity_history_avg_order_by: entity_history_avg_order_by;
  entity_history_bool_exp: entity_history_bool_exp;
  entity_history_filter: entity_history_filter;
  entity_history_filter_bool_exp: entity_history_filter_bool_exp;
  entity_history_filter_order_by: entity_history_filter_order_by;
  entity_history_filter_stream_cursor_input: entity_history_filter_stream_cursor_input;
  entity_history_filter_stream_cursor_value_input: entity_history_filter_stream_cursor_value_input;
  entity_history_max_order_by: entity_history_max_order_by;
  entity_history_min_order_by: entity_history_min_order_by;
  entity_history_order_by: entity_history_order_by;
  entity_history_stddev_order_by: entity_history_stddev_order_by;
  entity_history_stddev_pop_order_by: entity_history_stddev_pop_order_by;
  entity_history_stddev_samp_order_by: entity_history_stddev_samp_order_by;
  entity_history_stream_cursor_input: entity_history_stream_cursor_input;
  entity_history_stream_cursor_value_input: entity_history_stream_cursor_value_input;
  entity_history_sum_order_by: entity_history_sum_order_by;
  entity_history_var_pop_order_by: entity_history_var_pop_order_by;
  entity_history_var_samp_order_by: entity_history_var_samp_order_by;
  entity_history_variance_order_by: entity_history_variance_order_by;
  entity_type: Scalars['entity_type'];
  entity_type_comparison_exp: entity_type_comparison_exp;
  event_sync_state: event_sync_state;
  event_sync_state_bool_exp: event_sync_state_bool_exp;
  event_sync_state_order_by: event_sync_state_order_by;
  event_sync_state_stream_cursor_input: event_sync_state_stream_cursor_input;
  event_sync_state_stream_cursor_value_input: event_sync_state_stream_cursor_value_input;
  get_entity_history_filter_args: get_entity_history_filter_args;
  jsonb: Scalars['jsonb'];
  jsonb_cast_exp: jsonb_cast_exp;
  jsonb_comparison_exp: jsonb_comparison_exp;
  numeric: Scalars['numeric'];
  numeric_array_comparison_exp: numeric_array_comparison_exp;
  numeric_comparison_exp: numeric_comparison_exp;
  persisted_state: persisted_state;
  persisted_state_bool_exp: persisted_state_bool_exp;
  persisted_state_order_by: persisted_state_order_by;
  persisted_state_stream_cursor_input: persisted_state_stream_cursor_input;
  persisted_state_stream_cursor_value_input: persisted_state_stream_cursor_value_input;
  raw_events: raw_events;
  raw_events_bool_exp: raw_events_bool_exp;
  raw_events_order_by: raw_events_order_by;
  raw_events_stream_cursor_input: raw_events_stream_cursor_input;
  raw_events_stream_cursor_value_input: raw_events_stream_cursor_value_input;
  timestamp: Scalars['timestamp'];
  timestamp_comparison_exp: timestamp_comparison_exp;
  timestamptz: Scalars['timestamptz'];
  timestamptz_comparison_exp: timestamptz_comparison_exp;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type cachedDirectiveArgs = {
  ttl?: Scalars['Int'];
  refresh?: Scalars['Boolean'];
};

export type cachedDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = cachedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryprojectArgs, 'id' | 'subgraphError'>>;
  projects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryprojectsArgs, 'skip' | 'first' | 'subgraphError'>>;
  feedItem?: Resolver<Maybe<ResolversTypes['FeedItem']>, ParentType, ContextType, RequireFields<QueryfeedItemArgs, 'id' | 'subgraphError'>>;
  feedItems?: Resolver<Array<ResolversTypes['FeedItem']>, ParentType, ContextType, RequireFields<QueryfeedItemsArgs, 'skip' | 'first' | 'subgraphError'>>;
  feedItemEntity?: Resolver<Maybe<ResolversTypes['FeedItemEntity']>, ParentType, ContextType, RequireFields<QueryfeedItemEntityArgs, 'id' | 'subgraphError'>>;
  feedItemEntities?: Resolver<Array<ResolversTypes['FeedItemEntity']>, ParentType, ContextType, RequireFields<QueryfeedItemEntitiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  feedItemEmbed?: Resolver<Maybe<ResolversTypes['FeedItemEmbed']>, ParentType, ContextType, RequireFields<QueryfeedItemEmbedArgs, 'id' | 'subgraphError'>>;
  feedItemEmbeds?: Resolver<Array<ResolversTypes['FeedItemEmbed']>, ParentType, ContextType, RequireFields<QueryfeedItemEmbedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  update?: Resolver<Maybe<ResolversTypes['Update']>, ParentType, ContextType, RequireFields<QueryupdateArgs, 'id' | 'subgraphError'>>;
  updates?: Resolver<Array<ResolversTypes['Update']>, ParentType, ContextType, RequireFields<QueryupdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  grantShip?: Resolver<Maybe<ResolversTypes['GrantShip']>, ParentType, ContextType, RequireFields<QuerygrantShipArgs, 'id' | 'subgraphError'>>;
  grantShips?: Resolver<Array<ResolversTypes['GrantShip']>, ParentType, ContextType, RequireFields<QuerygrantShipsArgs, 'skip' | 'first' | 'subgraphError'>>;
  poolIdLookup?: Resolver<Maybe<ResolversTypes['PoolIdLookup']>, ParentType, ContextType, RequireFields<QuerypoolIdLookupArgs, 'id' | 'subgraphError'>>;
  poolIdLookups?: Resolver<Array<ResolversTypes['PoolIdLookup']>, ParentType, ContextType, RequireFields<QuerypoolIdLookupsArgs, 'skip' | 'first' | 'subgraphError'>>;
  gameManager?: Resolver<Maybe<ResolversTypes['GameManager']>, ParentType, ContextType, RequireFields<QuerygameManagerArgs, 'id' | 'subgraphError'>>;
  gameManagers?: Resolver<Array<ResolversTypes['GameManager']>, ParentType, ContextType, RequireFields<QuerygameManagersArgs, 'skip' | 'first' | 'subgraphError'>>;
  gameRound?: Resolver<Maybe<ResolversTypes['GameRound']>, ParentType, ContextType, RequireFields<QuerygameRoundArgs, 'id' | 'subgraphError'>>;
  gameRounds?: Resolver<Array<ResolversTypes['GameRound']>, ParentType, ContextType, RequireFields<QuerygameRoundsArgs, 'skip' | 'first' | 'subgraphError'>>;
  applicationHistory?: Resolver<Maybe<ResolversTypes['ApplicationHistory']>, ParentType, ContextType, RequireFields<QueryapplicationHistoryArgs, 'id' | 'subgraphError'>>;
  applicationHistories?: Resolver<Array<ResolversTypes['ApplicationHistory']>, ParentType, ContextType, RequireFields<QueryapplicationHistoriesArgs, 'skip' | 'first' | 'subgraphError'>>;
  grant?: Resolver<Maybe<ResolversTypes['Grant']>, ParentType, ContextType, RequireFields<QuerygrantArgs, 'id' | 'subgraphError'>>;
  grants?: Resolver<Array<ResolversTypes['Grant']>, ParentType, ContextType, RequireFields<QuerygrantsArgs, 'skip' | 'first' | 'subgraphError'>>;
  milestone?: Resolver<Maybe<ResolversTypes['Milestone']>, ParentType, ContextType, RequireFields<QuerymilestoneArgs, 'id' | 'subgraphError'>>;
  milestones?: Resolver<Array<ResolversTypes['Milestone']>, ParentType, ContextType, RequireFields<QuerymilestonesArgs, 'skip' | 'first' | 'subgraphError'>>;
  profileIdToAnchor?: Resolver<Maybe<ResolversTypes['ProfileIdToAnchor']>, ParentType, ContextType, RequireFields<QueryprofileIdToAnchorArgs, 'id' | 'subgraphError'>>;
  profileIdToAnchors?: Resolver<Array<ResolversTypes['ProfileIdToAnchor']>, ParentType, ContextType, RequireFields<QueryprofileIdToAnchorsArgs, 'skip' | 'first' | 'subgraphError'>>;
  profileMemberGroup?: Resolver<Maybe<ResolversTypes['ProfileMemberGroup']>, ParentType, ContextType, RequireFields<QueryprofileMemberGroupArgs, 'id' | 'subgraphError'>>;
  profileMemberGroups?: Resolver<Array<ResolversTypes['ProfileMemberGroup']>, ParentType, ContextType, RequireFields<QueryprofileMemberGroupsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transaction?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<QuerytransactionArgs, 'id' | 'subgraphError'>>;
  transactions?: Resolver<Array<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<QuerytransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  rawMetadata?: Resolver<Maybe<ResolversTypes['RawMetadata']>, ParentType, ContextType, RequireFields<QueryrawMetadataArgs, 'id' | 'subgraphError'>>;
  rawMetadata_collection?: Resolver<Array<ResolversTypes['RawMetadata']>, ParentType, ContextType, RequireFields<QueryrawMetadata_collectionArgs, 'skip' | 'first' | 'subgraphError'>>;
  log?: Resolver<Maybe<ResolversTypes['Log']>, ParentType, ContextType, RequireFields<QuerylogArgs, 'id' | 'subgraphError'>>;
  logs?: Resolver<Array<ResolversTypes['Log']>, ParentType, ContextType, RequireFields<QuerylogsArgs, 'skip' | 'first' | 'subgraphError'>>;
  gmVersion?: Resolver<Maybe<ResolversTypes['GmVersion']>, ParentType, ContextType, RequireFields<QuerygmVersionArgs, 'id' | 'subgraphError'>>;
  gmVersions?: Resolver<Array<ResolversTypes['GmVersion']>, ParentType, ContextType, RequireFields<QuerygmVersionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  gmDeployment?: Resolver<Maybe<ResolversTypes['GmDeployment']>, ParentType, ContextType, RequireFields<QuerygmDeploymentArgs, 'id' | 'subgraphError'>>;
  gmDeployments?: Resolver<Array<ResolversTypes['GmDeployment']>, ParentType, ContextType, RequireFields<QuerygmDeploymentsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
  Application?: Resolver<Array<ResolversTypes['Application']>, ParentType, ContextType, Partial<QueryApplicationArgs>>;
  Application_by_pk?: Resolver<Maybe<ResolversTypes['Application']>, ParentType, ContextType, RequireFields<QueryApplication_by_pkArgs, 'id'>>;
  Badge?: Resolver<Array<ResolversTypes['Badge']>, ParentType, ContextType, Partial<QueryBadgeArgs>>;
  BadgeHolder?: Resolver<Array<ResolversTypes['BadgeHolder']>, ParentType, ContextType, Partial<QueryBadgeHolderArgs>>;
  BadgeHolder_by_pk?: Resolver<Maybe<ResolversTypes['BadgeHolder']>, ParentType, ContextType, RequireFields<QueryBadgeHolder_by_pkArgs, 'id'>>;
  BadgeTemplate?: Resolver<Array<ResolversTypes['BadgeTemplate']>, ParentType, ContextType, Partial<QueryBadgeTemplateArgs>>;
  BadgeTemplate_by_pk?: Resolver<Maybe<ResolversTypes['BadgeTemplate']>, ParentType, ContextType, RequireFields<QueryBadgeTemplate_by_pkArgs, 'id'>>;
  Badge_by_pk?: Resolver<Maybe<ResolversTypes['Badge']>, ParentType, ContextType, RequireFields<QueryBadge_by_pkArgs, 'id'>>;
  Contest?: Resolver<Array<ResolversTypes['Contest']>, ParentType, ContextType, Partial<QueryContestArgs>>;
  ContestClone?: Resolver<Array<ResolversTypes['ContestClone']>, ParentType, ContextType, Partial<QueryContestCloneArgs>>;
  ContestClone_by_pk?: Resolver<Maybe<ResolversTypes['ContestClone']>, ParentType, ContextType, RequireFields<QueryContestClone_by_pkArgs, 'id'>>;
  ContestTemplate?: Resolver<Array<ResolversTypes['ContestTemplate']>, ParentType, ContextType, Partial<QueryContestTemplateArgs>>;
  ContestTemplate_by_pk?: Resolver<Maybe<ResolversTypes['ContestTemplate']>, ParentType, ContextType, RequireFields<QueryContestTemplate_by_pkArgs, 'id'>>;
  Contest_by_pk?: Resolver<Maybe<ResolversTypes['Contest']>, ParentType, ContextType, RequireFields<QueryContest_by_pkArgs, 'id'>>;
  DAOToken?: Resolver<Array<ResolversTypes['DAOToken']>, ParentType, ContextType, Partial<QueryDAOTokenArgs>>;
  DAOToken_by_pk?: Resolver<Maybe<ResolversTypes['DAOToken']>, ParentType, ContextType, RequireFields<QueryDAOToken_by_pkArgs, 'id'>>;
  DualTokenPointsParams?: Resolver<Array<ResolversTypes['DualTokenPointsParams']>, ParentType, ContextType, Partial<QueryDualTokenPointsParamsArgs>>;
  DualTokenPointsParams_by_pk?: Resolver<Maybe<ResolversTypes['DualTokenPointsParams']>, ParentType, ContextType, RequireFields<QueryDualTokenPointsParams_by_pkArgs, 'id'>>;
  DualTokenTVParams?: Resolver<Array<ResolversTypes['DualTokenTVParams']>, ParentType, ContextType, Partial<QueryDualTokenTVParamsArgs>>;
  DualTokenTVParams_by_pk?: Resolver<Maybe<ResolversTypes['DualTokenTVParams']>, ParentType, ContextType, RequireFields<QueryDualTokenTVParams_by_pkArgs, 'id'>>;
  ERCPointParams?: Resolver<Array<ResolversTypes['ERCPointParams']>, ParentType, ContextType, Partial<QueryERCPointParamsArgs>>;
  ERCPointParams_by_pk?: Resolver<Maybe<ResolversTypes['ERCPointParams']>, ParentType, ContextType, RequireFields<QueryERCPointParams_by_pkArgs, 'id'>>;
  EnvioTX?: Resolver<Array<ResolversTypes['EnvioTX']>, ParentType, ContextType, Partial<QueryEnvioTXArgs>>;
  EnvioTX_by_pk?: Resolver<Maybe<ResolversTypes['EnvioTX']>, ParentType, ContextType, RequireFields<QueryEnvioTX_by_pkArgs, 'id'>>;
  EventPost?: Resolver<Array<ResolversTypes['EventPost']>, ParentType, ContextType, Partial<QueryEventPostArgs>>;
  EventPost_by_pk?: Resolver<Maybe<ResolversTypes['EventPost']>, ParentType, ContextType, RequireFields<QueryEventPost_by_pkArgs, 'id'>>;
  FactoryEventsSummary?: Resolver<Array<ResolversTypes['FactoryEventsSummary']>, ParentType, ContextType, Partial<QueryFactoryEventsSummaryArgs>>;
  FactoryEventsSummary_by_pk?: Resolver<Maybe<ResolversTypes['FactoryEventsSummary']>, ParentType, ContextType, RequireFields<QueryFactoryEventsSummary_by_pkArgs, 'id'>>;
  FeedCard?: Resolver<Array<ResolversTypes['FeedCard']>, ParentType, ContextType, Partial<QueryFeedCardArgs>>;
  FeedCard_by_pk?: Resolver<Maybe<ResolversTypes['FeedCard']>, ParentType, ContextType, RequireFields<QueryFeedCard_by_pkArgs, 'id'>>;
  FeedItemEmbed?: Resolver<Array<ResolversTypes['FeedItemEmbed']>, ParentType, ContextType, Partial<QueryFeedItemEmbedArgs>>;
  FeedItemEmbed_by_pk?: Resolver<Maybe<ResolversTypes['FeedItemEmbed']>, ParentType, ContextType, RequireFields<QueryFeedItemEmbed_by_pkArgs, 'id'>>;
  FeedItemEntity?: Resolver<Array<ResolversTypes['FeedItemEntity']>, ParentType, ContextType, Partial<QueryFeedItemEntityArgs>>;
  FeedItemEntity_by_pk?: Resolver<Maybe<ResolversTypes['FeedItemEntity']>, ParentType, ContextType, RequireFields<QueryFeedItemEntity_by_pkArgs, 'id'>>;
  GMInitParams?: Resolver<Array<ResolversTypes['GMInitParams']>, ParentType, ContextType, Partial<QueryGMInitParamsArgs>>;
  GMInitParams_by_pk?: Resolver<Maybe<ResolversTypes['GMInitParams']>, ParentType, ContextType, RequireFields<QueryGMInitParams_by_pkArgs, 'id'>>;
  GSVoter?: Resolver<Array<ResolversTypes['GSVoter']>, ParentType, ContextType, Partial<QueryGSVoterArgs>>;
  GSVoter_by_pk?: Resolver<Maybe<ResolversTypes['GSVoter']>, ParentType, ContextType, RequireFields<QueryGSVoter_by_pkArgs, 'id'>>;
  GameManagerFactory?: Resolver<Array<ResolversTypes['GameManagerFactory']>, ParentType, ContextType, Partial<QueryGameManagerFactoryArgs>>;
  GameManagerFactory_by_pk?: Resolver<Maybe<ResolversTypes['GameManagerFactory']>, ParentType, ContextType, RequireFields<QueryGameManagerFactory_by_pkArgs, 'id'>>;
  GameManagerTemplate?: Resolver<Array<ResolversTypes['GameManagerTemplate']>, ParentType, ContextType, Partial<QueryGameManagerTemplateArgs>>;
  GameManagerTemplate_by_pk?: Resolver<Maybe<ResolversTypes['GameManagerTemplate']>, ParentType, ContextType, RequireFields<QueryGameManagerTemplate_by_pkArgs, 'id'>>;
  GameRound?: Resolver<Array<ResolversTypes['GameRound']>, ParentType, ContextType, Partial<QueryGameRoundArgs>>;
  GameRound_by_pk?: Resolver<Maybe<ResolversTypes['GameRound']>, ParentType, ContextType, RequireFields<QueryGameRound_by_pkArgs, 'id'>>;
  Gate?: Resolver<Array<ResolversTypes['Gate']>, ParentType, ContextType, Partial<QueryGateArgs>>;
  Gate_by_pk?: Resolver<Maybe<ResolversTypes['Gate']>, ParentType, ContextType, RequireFields<QueryGate_by_pkArgs, 'id'>>;
  GrantShipsVoting?: Resolver<Array<ResolversTypes['GrantShipsVoting']>, ParentType, ContextType, Partial<QueryGrantShipsVotingArgs>>;
  GrantShipsVoting_by_pk?: Resolver<Maybe<ResolversTypes['GrantShipsVoting']>, ParentType, ContextType, RequireFields<QueryGrantShipsVoting_by_pkArgs, 'id'>>;
  HALParams?: Resolver<Array<ResolversTypes['HALParams']>, ParentType, ContextType, Partial<QueryHALParamsArgs>>;
  HALParams_by_pk?: Resolver<Maybe<ResolversTypes['HALParams']>, ParentType, ContextType, RequireFields<QueryHALParams_by_pkArgs, 'id'>>;
  HatsPoster?: Resolver<Array<ResolversTypes['HatsPoster']>, ParentType, ContextType, Partial<QueryHatsPosterArgs>>;
  HatsPoster_by_pk?: Resolver<Maybe<ResolversTypes['HatsPoster']>, ParentType, ContextType, RequireFields<QueryHatsPoster_by_pkArgs, 'id'>>;
  LocalLog?: Resolver<Array<ResolversTypes['LocalLog']>, ParentType, ContextType, Partial<QueryLocalLogArgs>>;
  LocalLog_by_pk?: Resolver<Maybe<ResolversTypes['LocalLog']>, ParentType, ContextType, RequireFields<QueryLocalLog_by_pkArgs, 'id'>>;
  Milestone?: Resolver<Array<ResolversTypes['Milestone']>, ParentType, ContextType, Partial<QueryMilestoneArgs>>;
  MilestoneSet?: Resolver<Array<ResolversTypes['MilestoneSet']>, ParentType, ContextType, Partial<QueryMilestoneSetArgs>>;
  MilestoneSet_by_pk?: Resolver<Maybe<ResolversTypes['MilestoneSet']>, ParentType, ContextType, RequireFields<QueryMilestoneSet_by_pkArgs, 'id'>>;
  Milestone_by_pk?: Resolver<Maybe<ResolversTypes['Milestone']>, ParentType, ContextType, RequireFields<QueryMilestone_by_pkArgs, 'id'>>;
  ModuleTemplate?: Resolver<Array<ResolversTypes['ModuleTemplate']>, ParentType, ContextType, Partial<QueryModuleTemplateArgs>>;
  ModuleTemplate_by_pk?: Resolver<Maybe<ResolversTypes['ModuleTemplate']>, ParentType, ContextType, RequireFields<QueryModuleTemplate_by_pkArgs, 'id'>>;
  ProfileIdToAnchor?: Resolver<Array<ResolversTypes['ProfileIdToAnchor']>, ParentType, ContextType, Partial<QueryProfileIdToAnchorArgs>>;
  ProfileIdToAnchor_by_pk?: Resolver<Maybe<ResolversTypes['ProfileIdToAnchor']>, ParentType, ContextType, RequireFields<QueryProfileIdToAnchor_by_pkArgs, 'id'>>;
  ProfileMemberGroup?: Resolver<Array<ResolversTypes['ProfileMemberGroup']>, ParentType, ContextType, Partial<QueryProfileMemberGroupArgs>>;
  ProfileMemberGroup_by_pk?: Resolver<Maybe<ResolversTypes['ProfileMemberGroup']>, ParentType, ContextType, RequireFields<QueryProfileMemberGroup_by_pkArgs, 'id'>>;
  Record?: Resolver<Array<ResolversTypes['Record']>, ParentType, ContextType, Partial<QueryRecordArgs>>;
  Record_by_pk?: Resolver<Maybe<ResolversTypes['Record']>, ParentType, ContextType, RequireFields<QueryRecord_by_pkArgs, 'id'>>;
  SBTBalParams?: Resolver<Array<ResolversTypes['SBTBalParams']>, ParentType, ContextType, Partial<QuerySBTBalParamsArgs>>;
  SBTBalParams_by_pk?: Resolver<Maybe<ResolversTypes['SBTBalParams']>, ParentType, ContextType, RequireFields<QuerySBTBalParams_by_pkArgs, 'id'>>;
  ScaffoldShaman?: Resolver<Array<ResolversTypes['ScaffoldShaman']>, ParentType, ContextType, Partial<QueryScaffoldShamanArgs>>;
  ScaffoldShaman_by_pk?: Resolver<Maybe<ResolversTypes['ScaffoldShaman']>, ParentType, ContextType, RequireFields<QueryScaffoldShaman_by_pkArgs, 'id'>>;
  ShipChoice?: Resolver<Array<ResolversTypes['ShipChoice']>, ParentType, ContextType, Partial<QueryShipChoiceArgs>>;
  ShipChoice_by_pk?: Resolver<Maybe<ResolversTypes['ShipChoice']>, ParentType, ContextType, RequireFields<QueryShipChoice_by_pkArgs, 'id'>>;
  ShipContext?: Resolver<Array<ResolversTypes['ShipContext']>, ParentType, ContextType, Partial<QueryShipContextArgs>>;
  ShipContext_by_pk?: Resolver<Maybe<ResolversTypes['ShipContext']>, ParentType, ContextType, RequireFields<QueryShipContext_by_pkArgs, 'id'>>;
  ShipVote?: Resolver<Array<ResolversTypes['ShipVote']>, ParentType, ContextType, Partial<QueryShipVoteArgs>>;
  ShipVote_by_pk?: Resolver<Maybe<ResolversTypes['ShipVote']>, ParentType, ContextType, RequireFields<QueryShipVote_by_pkArgs, 'id'>>;
  StemModule?: Resolver<Array<ResolversTypes['StemModule']>, ParentType, ContextType, Partial<QueryStemModuleArgs>>;
  StemModule_by_pk?: Resolver<Maybe<ResolversTypes['StemModule']>, ParentType, ContextType, RequireFields<QueryStemModule_by_pkArgs, 'id'>>;
  TVParams?: Resolver<Array<ResolversTypes['TVParams']>, ParentType, ContextType, Partial<QueryTVParamsArgs>>;
  TVParams_by_pk?: Resolver<Maybe<ResolversTypes['TVParams']>, ParentType, ContextType, RequireFields<QueryTVParams_by_pkArgs, 'id'>>;
  Transaction?: Resolver<Array<ResolversTypes['Transaction']>, ParentType, ContextType, Partial<QueryTransactionArgs>>;
  Transaction_by_pk?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<QueryTransaction_by_pkArgs, 'id'>>;
  chain_metadata?: Resolver<Array<ResolversTypes['chain_metadata']>, ParentType, ContextType, Partial<Querychain_metadataArgs>>;
  chain_metadata_by_pk?: Resolver<Maybe<ResolversTypes['chain_metadata']>, ParentType, ContextType, RequireFields<Querychain_metadata_by_pkArgs, 'chain_id'>>;
  dynamic_contract_registry?: Resolver<Array<ResolversTypes['dynamic_contract_registry']>, ParentType, ContextType, Partial<Querydynamic_contract_registryArgs>>;
  dynamic_contract_registry_by_pk?: Resolver<Maybe<ResolversTypes['dynamic_contract_registry']>, ParentType, ContextType, RequireFields<Querydynamic_contract_registry_by_pkArgs, 'chain_id' | 'contract_address'>>;
  end_of_block_range_scanned_data?: Resolver<Array<ResolversTypes['end_of_block_range_scanned_data']>, ParentType, ContextType, Partial<Queryend_of_block_range_scanned_dataArgs>>;
  end_of_block_range_scanned_data_by_pk?: Resolver<Maybe<ResolversTypes['end_of_block_range_scanned_data']>, ParentType, ContextType, RequireFields<Queryend_of_block_range_scanned_data_by_pkArgs, 'block_number' | 'chain_id'>>;
  entity_history?: Resolver<Array<ResolversTypes['entity_history']>, ParentType, ContextType, Partial<Queryentity_historyArgs>>;
  entity_history_by_pk?: Resolver<Maybe<ResolversTypes['entity_history']>, ParentType, ContextType, RequireFields<Queryentity_history_by_pkArgs, 'block_number' | 'block_timestamp' | 'chain_id' | 'entity_id' | 'entity_type' | 'log_index'>>;
  entity_history_filter?: Resolver<Array<ResolversTypes['entity_history_filter']>, ParentType, ContextType, Partial<Queryentity_history_filterArgs>>;
  entity_history_filter_by_pk?: Resolver<Maybe<ResolversTypes['entity_history_filter']>, ParentType, ContextType, RequireFields<Queryentity_history_filter_by_pkArgs, 'block_number' | 'block_timestamp' | 'chain_id' | 'entity_id' | 'entity_type' | 'log_index' | 'previous_log_index'>>;
  event_sync_state?: Resolver<Array<ResolversTypes['event_sync_state']>, ParentType, ContextType, Partial<Queryevent_sync_stateArgs>>;
  event_sync_state_by_pk?: Resolver<Maybe<ResolversTypes['event_sync_state']>, ParentType, ContextType, RequireFields<Queryevent_sync_state_by_pkArgs, 'chain_id'>>;
  get_entity_history_filter?: Resolver<Array<ResolversTypes['entity_history_filter']>, ParentType, ContextType, RequireFields<Queryget_entity_history_filterArgs, 'args'>>;
  persisted_state?: Resolver<Array<ResolversTypes['persisted_state']>, ParentType, ContextType, Partial<Querypersisted_stateArgs>>;
  persisted_state_by_pk?: Resolver<Maybe<ResolversTypes['persisted_state']>, ParentType, ContextType, RequireFields<Querypersisted_state_by_pkArgs, 'id'>>;
  raw_events?: Resolver<Array<ResolversTypes['raw_events']>, ParentType, ContextType, Partial<Queryraw_eventsArgs>>;
  raw_events_by_pk?: Resolver<Maybe<ResolversTypes['raw_events']>, ParentType, ContextType, RequireFields<Queryraw_events_by_pkArgs, 'chain_id' | 'event_id'>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  project?: SubscriptionResolver<Maybe<ResolversTypes['Project']>, "project", ParentType, ContextType, RequireFields<SubscriptionprojectArgs, 'id' | 'subgraphError'>>;
  projects?: SubscriptionResolver<Array<ResolversTypes['Project']>, "projects", ParentType, ContextType, RequireFields<SubscriptionprojectsArgs, 'skip' | 'first' | 'subgraphError'>>;
  feedItem?: SubscriptionResolver<Maybe<ResolversTypes['FeedItem']>, "feedItem", ParentType, ContextType, RequireFields<SubscriptionfeedItemArgs, 'id' | 'subgraphError'>>;
  feedItems?: SubscriptionResolver<Array<ResolversTypes['FeedItem']>, "feedItems", ParentType, ContextType, RequireFields<SubscriptionfeedItemsArgs, 'skip' | 'first' | 'subgraphError'>>;
  feedItemEntity?: SubscriptionResolver<Maybe<ResolversTypes['FeedItemEntity']>, "feedItemEntity", ParentType, ContextType, RequireFields<SubscriptionfeedItemEntityArgs, 'id' | 'subgraphError'>>;
  feedItemEntities?: SubscriptionResolver<Array<ResolversTypes['FeedItemEntity']>, "feedItemEntities", ParentType, ContextType, RequireFields<SubscriptionfeedItemEntitiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  feedItemEmbed?: SubscriptionResolver<Maybe<ResolversTypes['FeedItemEmbed']>, "feedItemEmbed", ParentType, ContextType, RequireFields<SubscriptionfeedItemEmbedArgs, 'id' | 'subgraphError'>>;
  feedItemEmbeds?: SubscriptionResolver<Array<ResolversTypes['FeedItemEmbed']>, "feedItemEmbeds", ParentType, ContextType, RequireFields<SubscriptionfeedItemEmbedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  update?: SubscriptionResolver<Maybe<ResolversTypes['Update']>, "update", ParentType, ContextType, RequireFields<SubscriptionupdateArgs, 'id' | 'subgraphError'>>;
  updates?: SubscriptionResolver<Array<ResolversTypes['Update']>, "updates", ParentType, ContextType, RequireFields<SubscriptionupdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  grantShip?: SubscriptionResolver<Maybe<ResolversTypes['GrantShip']>, "grantShip", ParentType, ContextType, RequireFields<SubscriptiongrantShipArgs, 'id' | 'subgraphError'>>;
  grantShips?: SubscriptionResolver<Array<ResolversTypes['GrantShip']>, "grantShips", ParentType, ContextType, RequireFields<SubscriptiongrantShipsArgs, 'skip' | 'first' | 'subgraphError'>>;
  poolIdLookup?: SubscriptionResolver<Maybe<ResolversTypes['PoolIdLookup']>, "poolIdLookup", ParentType, ContextType, RequireFields<SubscriptionpoolIdLookupArgs, 'id' | 'subgraphError'>>;
  poolIdLookups?: SubscriptionResolver<Array<ResolversTypes['PoolIdLookup']>, "poolIdLookups", ParentType, ContextType, RequireFields<SubscriptionpoolIdLookupsArgs, 'skip' | 'first' | 'subgraphError'>>;
  gameManager?: SubscriptionResolver<Maybe<ResolversTypes['GameManager']>, "gameManager", ParentType, ContextType, RequireFields<SubscriptiongameManagerArgs, 'id' | 'subgraphError'>>;
  gameManagers?: SubscriptionResolver<Array<ResolversTypes['GameManager']>, "gameManagers", ParentType, ContextType, RequireFields<SubscriptiongameManagersArgs, 'skip' | 'first' | 'subgraphError'>>;
  gameRound?: SubscriptionResolver<Maybe<ResolversTypes['GameRound']>, "gameRound", ParentType, ContextType, RequireFields<SubscriptiongameRoundArgs, 'id' | 'subgraphError'>>;
  gameRounds?: SubscriptionResolver<Array<ResolversTypes['GameRound']>, "gameRounds", ParentType, ContextType, RequireFields<SubscriptiongameRoundsArgs, 'skip' | 'first' | 'subgraphError'>>;
  applicationHistory?: SubscriptionResolver<Maybe<ResolversTypes['ApplicationHistory']>, "applicationHistory", ParentType, ContextType, RequireFields<SubscriptionapplicationHistoryArgs, 'id' | 'subgraphError'>>;
  applicationHistories?: SubscriptionResolver<Array<ResolversTypes['ApplicationHistory']>, "applicationHistories", ParentType, ContextType, RequireFields<SubscriptionapplicationHistoriesArgs, 'skip' | 'first' | 'subgraphError'>>;
  grant?: SubscriptionResolver<Maybe<ResolversTypes['Grant']>, "grant", ParentType, ContextType, RequireFields<SubscriptiongrantArgs, 'id' | 'subgraphError'>>;
  grants?: SubscriptionResolver<Array<ResolversTypes['Grant']>, "grants", ParentType, ContextType, RequireFields<SubscriptiongrantsArgs, 'skip' | 'first' | 'subgraphError'>>;
  milestone?: SubscriptionResolver<Maybe<ResolversTypes['Milestone']>, "milestone", ParentType, ContextType, RequireFields<SubscriptionmilestoneArgs, 'id' | 'subgraphError'>>;
  milestones?: SubscriptionResolver<Array<ResolversTypes['Milestone']>, "milestones", ParentType, ContextType, RequireFields<SubscriptionmilestonesArgs, 'skip' | 'first' | 'subgraphError'>>;
  profileIdToAnchor?: SubscriptionResolver<Maybe<ResolversTypes['ProfileIdToAnchor']>, "profileIdToAnchor", ParentType, ContextType, RequireFields<SubscriptionprofileIdToAnchorArgs, 'id' | 'subgraphError'>>;
  profileIdToAnchors?: SubscriptionResolver<Array<ResolversTypes['ProfileIdToAnchor']>, "profileIdToAnchors", ParentType, ContextType, RequireFields<SubscriptionprofileIdToAnchorsArgs, 'skip' | 'first' | 'subgraphError'>>;
  profileMemberGroup?: SubscriptionResolver<Maybe<ResolversTypes['ProfileMemberGroup']>, "profileMemberGroup", ParentType, ContextType, RequireFields<SubscriptionprofileMemberGroupArgs, 'id' | 'subgraphError'>>;
  profileMemberGroups?: SubscriptionResolver<Array<ResolversTypes['ProfileMemberGroup']>, "profileMemberGroups", ParentType, ContextType, RequireFields<SubscriptionprofileMemberGroupsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transaction?: SubscriptionResolver<Maybe<ResolversTypes['Transaction']>, "transaction", ParentType, ContextType, RequireFields<SubscriptiontransactionArgs, 'id' | 'subgraphError'>>;
  transactions?: SubscriptionResolver<Array<ResolversTypes['Transaction']>, "transactions", ParentType, ContextType, RequireFields<SubscriptiontransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  rawMetadata?: SubscriptionResolver<Maybe<ResolversTypes['RawMetadata']>, "rawMetadata", ParentType, ContextType, RequireFields<SubscriptionrawMetadataArgs, 'id' | 'subgraphError'>>;
  rawMetadata_collection?: SubscriptionResolver<Array<ResolversTypes['RawMetadata']>, "rawMetadata_collection", ParentType, ContextType, RequireFields<SubscriptionrawMetadata_collectionArgs, 'skip' | 'first' | 'subgraphError'>>;
  log?: SubscriptionResolver<Maybe<ResolversTypes['Log']>, "log", ParentType, ContextType, RequireFields<SubscriptionlogArgs, 'id' | 'subgraphError'>>;
  logs?: SubscriptionResolver<Array<ResolversTypes['Log']>, "logs", ParentType, ContextType, RequireFields<SubscriptionlogsArgs, 'skip' | 'first' | 'subgraphError'>>;
  gmVersion?: SubscriptionResolver<Maybe<ResolversTypes['GmVersion']>, "gmVersion", ParentType, ContextType, RequireFields<SubscriptiongmVersionArgs, 'id' | 'subgraphError'>>;
  gmVersions?: SubscriptionResolver<Array<ResolversTypes['GmVersion']>, "gmVersions", ParentType, ContextType, RequireFields<SubscriptiongmVersionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  gmDeployment?: SubscriptionResolver<Maybe<ResolversTypes['GmDeployment']>, "gmDeployment", ParentType, ContextType, RequireFields<SubscriptiongmDeploymentArgs, 'id' | 'subgraphError'>>;
  gmDeployments?: SubscriptionResolver<Array<ResolversTypes['GmDeployment']>, "gmDeployments", ParentType, ContextType, RequireFields<SubscriptiongmDeploymentsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
  Application?: SubscriptionResolver<Array<ResolversTypes['Application']>, "Application", ParentType, ContextType, Partial<SubscriptionApplicationArgs>>;
  Application_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Application']>, "Application_by_pk", ParentType, ContextType, RequireFields<SubscriptionApplication_by_pkArgs, 'id'>>;
  Application_stream?: SubscriptionResolver<Array<ResolversTypes['Application']>, "Application_stream", ParentType, ContextType, RequireFields<SubscriptionApplication_streamArgs, 'batch_size' | 'cursor'>>;
  Badge?: SubscriptionResolver<Array<ResolversTypes['Badge']>, "Badge", ParentType, ContextType, Partial<SubscriptionBadgeArgs>>;
  BadgeHolder?: SubscriptionResolver<Array<ResolversTypes['BadgeHolder']>, "BadgeHolder", ParentType, ContextType, Partial<SubscriptionBadgeHolderArgs>>;
  BadgeHolder_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['BadgeHolder']>, "BadgeHolder_by_pk", ParentType, ContextType, RequireFields<SubscriptionBadgeHolder_by_pkArgs, 'id'>>;
  BadgeHolder_stream?: SubscriptionResolver<Array<ResolversTypes['BadgeHolder']>, "BadgeHolder_stream", ParentType, ContextType, RequireFields<SubscriptionBadgeHolder_streamArgs, 'batch_size' | 'cursor'>>;
  BadgeTemplate?: SubscriptionResolver<Array<ResolversTypes['BadgeTemplate']>, "BadgeTemplate", ParentType, ContextType, Partial<SubscriptionBadgeTemplateArgs>>;
  BadgeTemplate_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['BadgeTemplate']>, "BadgeTemplate_by_pk", ParentType, ContextType, RequireFields<SubscriptionBadgeTemplate_by_pkArgs, 'id'>>;
  BadgeTemplate_stream?: SubscriptionResolver<Array<ResolversTypes['BadgeTemplate']>, "BadgeTemplate_stream", ParentType, ContextType, RequireFields<SubscriptionBadgeTemplate_streamArgs, 'batch_size' | 'cursor'>>;
  Badge_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Badge']>, "Badge_by_pk", ParentType, ContextType, RequireFields<SubscriptionBadge_by_pkArgs, 'id'>>;
  Badge_stream?: SubscriptionResolver<Array<ResolversTypes['Badge']>, "Badge_stream", ParentType, ContextType, RequireFields<SubscriptionBadge_streamArgs, 'batch_size' | 'cursor'>>;
  Contest?: SubscriptionResolver<Array<ResolversTypes['Contest']>, "Contest", ParentType, ContextType, Partial<SubscriptionContestArgs>>;
  ContestClone?: SubscriptionResolver<Array<ResolversTypes['ContestClone']>, "ContestClone", ParentType, ContextType, Partial<SubscriptionContestCloneArgs>>;
  ContestClone_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['ContestClone']>, "ContestClone_by_pk", ParentType, ContextType, RequireFields<SubscriptionContestClone_by_pkArgs, 'id'>>;
  ContestClone_stream?: SubscriptionResolver<Array<ResolversTypes['ContestClone']>, "ContestClone_stream", ParentType, ContextType, RequireFields<SubscriptionContestClone_streamArgs, 'batch_size' | 'cursor'>>;
  ContestTemplate?: SubscriptionResolver<Array<ResolversTypes['ContestTemplate']>, "ContestTemplate", ParentType, ContextType, Partial<SubscriptionContestTemplateArgs>>;
  ContestTemplate_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['ContestTemplate']>, "ContestTemplate_by_pk", ParentType, ContextType, RequireFields<SubscriptionContestTemplate_by_pkArgs, 'id'>>;
  ContestTemplate_stream?: SubscriptionResolver<Array<ResolversTypes['ContestTemplate']>, "ContestTemplate_stream", ParentType, ContextType, RequireFields<SubscriptionContestTemplate_streamArgs, 'batch_size' | 'cursor'>>;
  Contest_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Contest']>, "Contest_by_pk", ParentType, ContextType, RequireFields<SubscriptionContest_by_pkArgs, 'id'>>;
  Contest_stream?: SubscriptionResolver<Array<ResolversTypes['Contest']>, "Contest_stream", ParentType, ContextType, RequireFields<SubscriptionContest_streamArgs, 'batch_size' | 'cursor'>>;
  DAOToken?: SubscriptionResolver<Array<ResolversTypes['DAOToken']>, "DAOToken", ParentType, ContextType, Partial<SubscriptionDAOTokenArgs>>;
  DAOToken_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['DAOToken']>, "DAOToken_by_pk", ParentType, ContextType, RequireFields<SubscriptionDAOToken_by_pkArgs, 'id'>>;
  DAOToken_stream?: SubscriptionResolver<Array<ResolversTypes['DAOToken']>, "DAOToken_stream", ParentType, ContextType, RequireFields<SubscriptionDAOToken_streamArgs, 'batch_size' | 'cursor'>>;
  DualTokenPointsParams?: SubscriptionResolver<Array<ResolversTypes['DualTokenPointsParams']>, "DualTokenPointsParams", ParentType, ContextType, Partial<SubscriptionDualTokenPointsParamsArgs>>;
  DualTokenPointsParams_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['DualTokenPointsParams']>, "DualTokenPointsParams_by_pk", ParentType, ContextType, RequireFields<SubscriptionDualTokenPointsParams_by_pkArgs, 'id'>>;
  DualTokenPointsParams_stream?: SubscriptionResolver<Array<ResolversTypes['DualTokenPointsParams']>, "DualTokenPointsParams_stream", ParentType, ContextType, RequireFields<SubscriptionDualTokenPointsParams_streamArgs, 'batch_size' | 'cursor'>>;
  DualTokenTVParams?: SubscriptionResolver<Array<ResolversTypes['DualTokenTVParams']>, "DualTokenTVParams", ParentType, ContextType, Partial<SubscriptionDualTokenTVParamsArgs>>;
  DualTokenTVParams_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['DualTokenTVParams']>, "DualTokenTVParams_by_pk", ParentType, ContextType, RequireFields<SubscriptionDualTokenTVParams_by_pkArgs, 'id'>>;
  DualTokenTVParams_stream?: SubscriptionResolver<Array<ResolversTypes['DualTokenTVParams']>, "DualTokenTVParams_stream", ParentType, ContextType, RequireFields<SubscriptionDualTokenTVParams_streamArgs, 'batch_size' | 'cursor'>>;
  ERCPointParams?: SubscriptionResolver<Array<ResolversTypes['ERCPointParams']>, "ERCPointParams", ParentType, ContextType, Partial<SubscriptionERCPointParamsArgs>>;
  ERCPointParams_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['ERCPointParams']>, "ERCPointParams_by_pk", ParentType, ContextType, RequireFields<SubscriptionERCPointParams_by_pkArgs, 'id'>>;
  ERCPointParams_stream?: SubscriptionResolver<Array<ResolversTypes['ERCPointParams']>, "ERCPointParams_stream", ParentType, ContextType, RequireFields<SubscriptionERCPointParams_streamArgs, 'batch_size' | 'cursor'>>;
  EnvioTX?: SubscriptionResolver<Array<ResolversTypes['EnvioTX']>, "EnvioTX", ParentType, ContextType, Partial<SubscriptionEnvioTXArgs>>;
  EnvioTX_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['EnvioTX']>, "EnvioTX_by_pk", ParentType, ContextType, RequireFields<SubscriptionEnvioTX_by_pkArgs, 'id'>>;
  EnvioTX_stream?: SubscriptionResolver<Array<ResolversTypes['EnvioTX']>, "EnvioTX_stream", ParentType, ContextType, RequireFields<SubscriptionEnvioTX_streamArgs, 'batch_size' | 'cursor'>>;
  EventPost?: SubscriptionResolver<Array<ResolversTypes['EventPost']>, "EventPost", ParentType, ContextType, Partial<SubscriptionEventPostArgs>>;
  EventPost_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['EventPost']>, "EventPost_by_pk", ParentType, ContextType, RequireFields<SubscriptionEventPost_by_pkArgs, 'id'>>;
  EventPost_stream?: SubscriptionResolver<Array<ResolversTypes['EventPost']>, "EventPost_stream", ParentType, ContextType, RequireFields<SubscriptionEventPost_streamArgs, 'batch_size' | 'cursor'>>;
  FactoryEventsSummary?: SubscriptionResolver<Array<ResolversTypes['FactoryEventsSummary']>, "FactoryEventsSummary", ParentType, ContextType, Partial<SubscriptionFactoryEventsSummaryArgs>>;
  FactoryEventsSummary_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['FactoryEventsSummary']>, "FactoryEventsSummary_by_pk", ParentType, ContextType, RequireFields<SubscriptionFactoryEventsSummary_by_pkArgs, 'id'>>;
  FactoryEventsSummary_stream?: SubscriptionResolver<Array<ResolversTypes['FactoryEventsSummary']>, "FactoryEventsSummary_stream", ParentType, ContextType, RequireFields<SubscriptionFactoryEventsSummary_streamArgs, 'batch_size' | 'cursor'>>;
  FeedCard?: SubscriptionResolver<Array<ResolversTypes['FeedCard']>, "FeedCard", ParentType, ContextType, Partial<SubscriptionFeedCardArgs>>;
  FeedCard_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['FeedCard']>, "FeedCard_by_pk", ParentType, ContextType, RequireFields<SubscriptionFeedCard_by_pkArgs, 'id'>>;
  FeedCard_stream?: SubscriptionResolver<Array<ResolversTypes['FeedCard']>, "FeedCard_stream", ParentType, ContextType, RequireFields<SubscriptionFeedCard_streamArgs, 'batch_size' | 'cursor'>>;
  FeedItemEmbed?: SubscriptionResolver<Array<ResolversTypes['FeedItemEmbed']>, "FeedItemEmbed", ParentType, ContextType, Partial<SubscriptionFeedItemEmbedArgs>>;
  FeedItemEmbed_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['FeedItemEmbed']>, "FeedItemEmbed_by_pk", ParentType, ContextType, RequireFields<SubscriptionFeedItemEmbed_by_pkArgs, 'id'>>;
  FeedItemEmbed_stream?: SubscriptionResolver<Array<ResolversTypes['FeedItemEmbed']>, "FeedItemEmbed_stream", ParentType, ContextType, RequireFields<SubscriptionFeedItemEmbed_streamArgs, 'batch_size' | 'cursor'>>;
  FeedItemEntity?: SubscriptionResolver<Array<ResolversTypes['FeedItemEntity']>, "FeedItemEntity", ParentType, ContextType, Partial<SubscriptionFeedItemEntityArgs>>;
  FeedItemEntity_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['FeedItemEntity']>, "FeedItemEntity_by_pk", ParentType, ContextType, RequireFields<SubscriptionFeedItemEntity_by_pkArgs, 'id'>>;
  FeedItemEntity_stream?: SubscriptionResolver<Array<ResolversTypes['FeedItemEntity']>, "FeedItemEntity_stream", ParentType, ContextType, RequireFields<SubscriptionFeedItemEntity_streamArgs, 'batch_size' | 'cursor'>>;
  GMInitParams?: SubscriptionResolver<Array<ResolversTypes['GMInitParams']>, "GMInitParams", ParentType, ContextType, Partial<SubscriptionGMInitParamsArgs>>;
  GMInitParams_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['GMInitParams']>, "GMInitParams_by_pk", ParentType, ContextType, RequireFields<SubscriptionGMInitParams_by_pkArgs, 'id'>>;
  GMInitParams_stream?: SubscriptionResolver<Array<ResolversTypes['GMInitParams']>, "GMInitParams_stream", ParentType, ContextType, RequireFields<SubscriptionGMInitParams_streamArgs, 'batch_size' | 'cursor'>>;
  GSVoter?: SubscriptionResolver<Array<ResolversTypes['GSVoter']>, "GSVoter", ParentType, ContextType, Partial<SubscriptionGSVoterArgs>>;
  GSVoter_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['GSVoter']>, "GSVoter_by_pk", ParentType, ContextType, RequireFields<SubscriptionGSVoter_by_pkArgs, 'id'>>;
  GSVoter_stream?: SubscriptionResolver<Array<ResolversTypes['GSVoter']>, "GSVoter_stream", ParentType, ContextType, RequireFields<SubscriptionGSVoter_streamArgs, 'batch_size' | 'cursor'>>;
  GameManagerFactory?: SubscriptionResolver<Array<ResolversTypes['GameManagerFactory']>, "GameManagerFactory", ParentType, ContextType, Partial<SubscriptionGameManagerFactoryArgs>>;
  GameManagerFactory_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['GameManagerFactory']>, "GameManagerFactory_by_pk", ParentType, ContextType, RequireFields<SubscriptionGameManagerFactory_by_pkArgs, 'id'>>;
  GameManagerFactory_stream?: SubscriptionResolver<Array<ResolversTypes['GameManagerFactory']>, "GameManagerFactory_stream", ParentType, ContextType, RequireFields<SubscriptionGameManagerFactory_streamArgs, 'batch_size' | 'cursor'>>;
  GameManagerTemplate?: SubscriptionResolver<Array<ResolversTypes['GameManagerTemplate']>, "GameManagerTemplate", ParentType, ContextType, Partial<SubscriptionGameManagerTemplateArgs>>;
  GameManagerTemplate_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['GameManagerTemplate']>, "GameManagerTemplate_by_pk", ParentType, ContextType, RequireFields<SubscriptionGameManagerTemplate_by_pkArgs, 'id'>>;
  GameManagerTemplate_stream?: SubscriptionResolver<Array<ResolversTypes['GameManagerTemplate']>, "GameManagerTemplate_stream", ParentType, ContextType, RequireFields<SubscriptionGameManagerTemplate_streamArgs, 'batch_size' | 'cursor'>>;
  GameRound?: SubscriptionResolver<Array<ResolversTypes['GameRound']>, "GameRound", ParentType, ContextType, Partial<SubscriptionGameRoundArgs>>;
  GameRound_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['GameRound']>, "GameRound_by_pk", ParentType, ContextType, RequireFields<SubscriptionGameRound_by_pkArgs, 'id'>>;
  GameRound_stream?: SubscriptionResolver<Array<ResolversTypes['GameRound']>, "GameRound_stream", ParentType, ContextType, RequireFields<SubscriptionGameRound_streamArgs, 'batch_size' | 'cursor'>>;
  Gate?: SubscriptionResolver<Array<ResolversTypes['Gate']>, "Gate", ParentType, ContextType, Partial<SubscriptionGateArgs>>;
  Gate_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Gate']>, "Gate_by_pk", ParentType, ContextType, RequireFields<SubscriptionGate_by_pkArgs, 'id'>>;
  Gate_stream?: SubscriptionResolver<Array<ResolversTypes['Gate']>, "Gate_stream", ParentType, ContextType, RequireFields<SubscriptionGate_streamArgs, 'batch_size' | 'cursor'>>;
  GrantShipsVoting?: SubscriptionResolver<Array<ResolversTypes['GrantShipsVoting']>, "GrantShipsVoting", ParentType, ContextType, Partial<SubscriptionGrantShipsVotingArgs>>;
  GrantShipsVoting_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['GrantShipsVoting']>, "GrantShipsVoting_by_pk", ParentType, ContextType, RequireFields<SubscriptionGrantShipsVoting_by_pkArgs, 'id'>>;
  GrantShipsVoting_stream?: SubscriptionResolver<Array<ResolversTypes['GrantShipsVoting']>, "GrantShipsVoting_stream", ParentType, ContextType, RequireFields<SubscriptionGrantShipsVoting_streamArgs, 'batch_size' | 'cursor'>>;
  HALParams?: SubscriptionResolver<Array<ResolversTypes['HALParams']>, "HALParams", ParentType, ContextType, Partial<SubscriptionHALParamsArgs>>;
  HALParams_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['HALParams']>, "HALParams_by_pk", ParentType, ContextType, RequireFields<SubscriptionHALParams_by_pkArgs, 'id'>>;
  HALParams_stream?: SubscriptionResolver<Array<ResolversTypes['HALParams']>, "HALParams_stream", ParentType, ContextType, RequireFields<SubscriptionHALParams_streamArgs, 'batch_size' | 'cursor'>>;
  HatsPoster?: SubscriptionResolver<Array<ResolversTypes['HatsPoster']>, "HatsPoster", ParentType, ContextType, Partial<SubscriptionHatsPosterArgs>>;
  HatsPoster_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['HatsPoster']>, "HatsPoster_by_pk", ParentType, ContextType, RequireFields<SubscriptionHatsPoster_by_pkArgs, 'id'>>;
  HatsPoster_stream?: SubscriptionResolver<Array<ResolversTypes['HatsPoster']>, "HatsPoster_stream", ParentType, ContextType, RequireFields<SubscriptionHatsPoster_streamArgs, 'batch_size' | 'cursor'>>;
  LocalLog?: SubscriptionResolver<Array<ResolversTypes['LocalLog']>, "LocalLog", ParentType, ContextType, Partial<SubscriptionLocalLogArgs>>;
  LocalLog_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['LocalLog']>, "LocalLog_by_pk", ParentType, ContextType, RequireFields<SubscriptionLocalLog_by_pkArgs, 'id'>>;
  LocalLog_stream?: SubscriptionResolver<Array<ResolversTypes['LocalLog']>, "LocalLog_stream", ParentType, ContextType, RequireFields<SubscriptionLocalLog_streamArgs, 'batch_size' | 'cursor'>>;
  Milestone?: SubscriptionResolver<Array<ResolversTypes['Milestone']>, "Milestone", ParentType, ContextType, Partial<SubscriptionMilestoneArgs>>;
  MilestoneSet?: SubscriptionResolver<Array<ResolversTypes['MilestoneSet']>, "MilestoneSet", ParentType, ContextType, Partial<SubscriptionMilestoneSetArgs>>;
  MilestoneSet_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['MilestoneSet']>, "MilestoneSet_by_pk", ParentType, ContextType, RequireFields<SubscriptionMilestoneSet_by_pkArgs, 'id'>>;
  MilestoneSet_stream?: SubscriptionResolver<Array<ResolversTypes['MilestoneSet']>, "MilestoneSet_stream", ParentType, ContextType, RequireFields<SubscriptionMilestoneSet_streamArgs, 'batch_size' | 'cursor'>>;
  Milestone_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Milestone']>, "Milestone_by_pk", ParentType, ContextType, RequireFields<SubscriptionMilestone_by_pkArgs, 'id'>>;
  Milestone_stream?: SubscriptionResolver<Array<ResolversTypes['Milestone']>, "Milestone_stream", ParentType, ContextType, RequireFields<SubscriptionMilestone_streamArgs, 'batch_size' | 'cursor'>>;
  ModuleTemplate?: SubscriptionResolver<Array<ResolversTypes['ModuleTemplate']>, "ModuleTemplate", ParentType, ContextType, Partial<SubscriptionModuleTemplateArgs>>;
  ModuleTemplate_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['ModuleTemplate']>, "ModuleTemplate_by_pk", ParentType, ContextType, RequireFields<SubscriptionModuleTemplate_by_pkArgs, 'id'>>;
  ModuleTemplate_stream?: SubscriptionResolver<Array<ResolversTypes['ModuleTemplate']>, "ModuleTemplate_stream", ParentType, ContextType, RequireFields<SubscriptionModuleTemplate_streamArgs, 'batch_size' | 'cursor'>>;
  ProfileIdToAnchor?: SubscriptionResolver<Array<ResolversTypes['ProfileIdToAnchor']>, "ProfileIdToAnchor", ParentType, ContextType, Partial<SubscriptionProfileIdToAnchorArgs>>;
  ProfileIdToAnchor_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['ProfileIdToAnchor']>, "ProfileIdToAnchor_by_pk", ParentType, ContextType, RequireFields<SubscriptionProfileIdToAnchor_by_pkArgs, 'id'>>;
  ProfileIdToAnchor_stream?: SubscriptionResolver<Array<ResolversTypes['ProfileIdToAnchor']>, "ProfileIdToAnchor_stream", ParentType, ContextType, RequireFields<SubscriptionProfileIdToAnchor_streamArgs, 'batch_size' | 'cursor'>>;
  ProfileMemberGroup?: SubscriptionResolver<Array<ResolversTypes['ProfileMemberGroup']>, "ProfileMemberGroup", ParentType, ContextType, Partial<SubscriptionProfileMemberGroupArgs>>;
  ProfileMemberGroup_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['ProfileMemberGroup']>, "ProfileMemberGroup_by_pk", ParentType, ContextType, RequireFields<SubscriptionProfileMemberGroup_by_pkArgs, 'id'>>;
  ProfileMemberGroup_stream?: SubscriptionResolver<Array<ResolversTypes['ProfileMemberGroup']>, "ProfileMemberGroup_stream", ParentType, ContextType, RequireFields<SubscriptionProfileMemberGroup_streamArgs, 'batch_size' | 'cursor'>>;
  Record?: SubscriptionResolver<Array<ResolversTypes['Record']>, "Record", ParentType, ContextType, Partial<SubscriptionRecordArgs>>;
  Record_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Record']>, "Record_by_pk", ParentType, ContextType, RequireFields<SubscriptionRecord_by_pkArgs, 'id'>>;
  Record_stream?: SubscriptionResolver<Array<ResolversTypes['Record']>, "Record_stream", ParentType, ContextType, RequireFields<SubscriptionRecord_streamArgs, 'batch_size' | 'cursor'>>;
  SBTBalParams?: SubscriptionResolver<Array<ResolversTypes['SBTBalParams']>, "SBTBalParams", ParentType, ContextType, Partial<SubscriptionSBTBalParamsArgs>>;
  SBTBalParams_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['SBTBalParams']>, "SBTBalParams_by_pk", ParentType, ContextType, RequireFields<SubscriptionSBTBalParams_by_pkArgs, 'id'>>;
  SBTBalParams_stream?: SubscriptionResolver<Array<ResolversTypes['SBTBalParams']>, "SBTBalParams_stream", ParentType, ContextType, RequireFields<SubscriptionSBTBalParams_streamArgs, 'batch_size' | 'cursor'>>;
  ScaffoldShaman?: SubscriptionResolver<Array<ResolversTypes['ScaffoldShaman']>, "ScaffoldShaman", ParentType, ContextType, Partial<SubscriptionScaffoldShamanArgs>>;
  ScaffoldShaman_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['ScaffoldShaman']>, "ScaffoldShaman_by_pk", ParentType, ContextType, RequireFields<SubscriptionScaffoldShaman_by_pkArgs, 'id'>>;
  ScaffoldShaman_stream?: SubscriptionResolver<Array<ResolversTypes['ScaffoldShaman']>, "ScaffoldShaman_stream", ParentType, ContextType, RequireFields<SubscriptionScaffoldShaman_streamArgs, 'batch_size' | 'cursor'>>;
  ShipChoice?: SubscriptionResolver<Array<ResolversTypes['ShipChoice']>, "ShipChoice", ParentType, ContextType, Partial<SubscriptionShipChoiceArgs>>;
  ShipChoice_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['ShipChoice']>, "ShipChoice_by_pk", ParentType, ContextType, RequireFields<SubscriptionShipChoice_by_pkArgs, 'id'>>;
  ShipChoice_stream?: SubscriptionResolver<Array<ResolversTypes['ShipChoice']>, "ShipChoice_stream", ParentType, ContextType, RequireFields<SubscriptionShipChoice_streamArgs, 'batch_size' | 'cursor'>>;
  ShipContext?: SubscriptionResolver<Array<ResolversTypes['ShipContext']>, "ShipContext", ParentType, ContextType, Partial<SubscriptionShipContextArgs>>;
  ShipContext_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['ShipContext']>, "ShipContext_by_pk", ParentType, ContextType, RequireFields<SubscriptionShipContext_by_pkArgs, 'id'>>;
  ShipContext_stream?: SubscriptionResolver<Array<ResolversTypes['ShipContext']>, "ShipContext_stream", ParentType, ContextType, RequireFields<SubscriptionShipContext_streamArgs, 'batch_size' | 'cursor'>>;
  ShipVote?: SubscriptionResolver<Array<ResolversTypes['ShipVote']>, "ShipVote", ParentType, ContextType, Partial<SubscriptionShipVoteArgs>>;
  ShipVote_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['ShipVote']>, "ShipVote_by_pk", ParentType, ContextType, RequireFields<SubscriptionShipVote_by_pkArgs, 'id'>>;
  ShipVote_stream?: SubscriptionResolver<Array<ResolversTypes['ShipVote']>, "ShipVote_stream", ParentType, ContextType, RequireFields<SubscriptionShipVote_streamArgs, 'batch_size' | 'cursor'>>;
  StemModule?: SubscriptionResolver<Array<ResolversTypes['StemModule']>, "StemModule", ParentType, ContextType, Partial<SubscriptionStemModuleArgs>>;
  StemModule_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['StemModule']>, "StemModule_by_pk", ParentType, ContextType, RequireFields<SubscriptionStemModule_by_pkArgs, 'id'>>;
  StemModule_stream?: SubscriptionResolver<Array<ResolversTypes['StemModule']>, "StemModule_stream", ParentType, ContextType, RequireFields<SubscriptionStemModule_streamArgs, 'batch_size' | 'cursor'>>;
  TVParams?: SubscriptionResolver<Array<ResolversTypes['TVParams']>, "TVParams", ParentType, ContextType, Partial<SubscriptionTVParamsArgs>>;
  TVParams_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['TVParams']>, "TVParams_by_pk", ParentType, ContextType, RequireFields<SubscriptionTVParams_by_pkArgs, 'id'>>;
  TVParams_stream?: SubscriptionResolver<Array<ResolversTypes['TVParams']>, "TVParams_stream", ParentType, ContextType, RequireFields<SubscriptionTVParams_streamArgs, 'batch_size' | 'cursor'>>;
  Transaction?: SubscriptionResolver<Array<ResolversTypes['Transaction']>, "Transaction", ParentType, ContextType, Partial<SubscriptionTransactionArgs>>;
  Transaction_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Transaction']>, "Transaction_by_pk", ParentType, ContextType, RequireFields<SubscriptionTransaction_by_pkArgs, 'id'>>;
  Transaction_stream?: SubscriptionResolver<Array<ResolversTypes['Transaction']>, "Transaction_stream", ParentType, ContextType, RequireFields<SubscriptionTransaction_streamArgs, 'batch_size' | 'cursor'>>;
  chain_metadata?: SubscriptionResolver<Array<ResolversTypes['chain_metadata']>, "chain_metadata", ParentType, ContextType, Partial<Subscriptionchain_metadataArgs>>;
  chain_metadata_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['chain_metadata']>, "chain_metadata_by_pk", ParentType, ContextType, RequireFields<Subscriptionchain_metadata_by_pkArgs, 'chain_id'>>;
  chain_metadata_stream?: SubscriptionResolver<Array<ResolversTypes['chain_metadata']>, "chain_metadata_stream", ParentType, ContextType, RequireFields<Subscriptionchain_metadata_streamArgs, 'batch_size' | 'cursor'>>;
  dynamic_contract_registry?: SubscriptionResolver<Array<ResolversTypes['dynamic_contract_registry']>, "dynamic_contract_registry", ParentType, ContextType, Partial<Subscriptiondynamic_contract_registryArgs>>;
  dynamic_contract_registry_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['dynamic_contract_registry']>, "dynamic_contract_registry_by_pk", ParentType, ContextType, RequireFields<Subscriptiondynamic_contract_registry_by_pkArgs, 'chain_id' | 'contract_address'>>;
  dynamic_contract_registry_stream?: SubscriptionResolver<Array<ResolversTypes['dynamic_contract_registry']>, "dynamic_contract_registry_stream", ParentType, ContextType, RequireFields<Subscriptiondynamic_contract_registry_streamArgs, 'batch_size' | 'cursor'>>;
  end_of_block_range_scanned_data?: SubscriptionResolver<Array<ResolversTypes['end_of_block_range_scanned_data']>, "end_of_block_range_scanned_data", ParentType, ContextType, Partial<Subscriptionend_of_block_range_scanned_dataArgs>>;
  end_of_block_range_scanned_data_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['end_of_block_range_scanned_data']>, "end_of_block_range_scanned_data_by_pk", ParentType, ContextType, RequireFields<Subscriptionend_of_block_range_scanned_data_by_pkArgs, 'block_number' | 'chain_id'>>;
  end_of_block_range_scanned_data_stream?: SubscriptionResolver<Array<ResolversTypes['end_of_block_range_scanned_data']>, "end_of_block_range_scanned_data_stream", ParentType, ContextType, RequireFields<Subscriptionend_of_block_range_scanned_data_streamArgs, 'batch_size' | 'cursor'>>;
  entity_history?: SubscriptionResolver<Array<ResolversTypes['entity_history']>, "entity_history", ParentType, ContextType, Partial<Subscriptionentity_historyArgs>>;
  entity_history_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['entity_history']>, "entity_history_by_pk", ParentType, ContextType, RequireFields<Subscriptionentity_history_by_pkArgs, 'block_number' | 'block_timestamp' | 'chain_id' | 'entity_id' | 'entity_type' | 'log_index'>>;
  entity_history_filter?: SubscriptionResolver<Array<ResolversTypes['entity_history_filter']>, "entity_history_filter", ParentType, ContextType, Partial<Subscriptionentity_history_filterArgs>>;
  entity_history_filter_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['entity_history_filter']>, "entity_history_filter_by_pk", ParentType, ContextType, RequireFields<Subscriptionentity_history_filter_by_pkArgs, 'block_number' | 'block_timestamp' | 'chain_id' | 'entity_id' | 'entity_type' | 'log_index' | 'previous_log_index'>>;
  entity_history_filter_stream?: SubscriptionResolver<Array<ResolversTypes['entity_history_filter']>, "entity_history_filter_stream", ParentType, ContextType, RequireFields<Subscriptionentity_history_filter_streamArgs, 'batch_size' | 'cursor'>>;
  entity_history_stream?: SubscriptionResolver<Array<ResolversTypes['entity_history']>, "entity_history_stream", ParentType, ContextType, RequireFields<Subscriptionentity_history_streamArgs, 'batch_size' | 'cursor'>>;
  event_sync_state?: SubscriptionResolver<Array<ResolversTypes['event_sync_state']>, "event_sync_state", ParentType, ContextType, Partial<Subscriptionevent_sync_stateArgs>>;
  event_sync_state_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['event_sync_state']>, "event_sync_state_by_pk", ParentType, ContextType, RequireFields<Subscriptionevent_sync_state_by_pkArgs, 'chain_id'>>;
  event_sync_state_stream?: SubscriptionResolver<Array<ResolversTypes['event_sync_state']>, "event_sync_state_stream", ParentType, ContextType, RequireFields<Subscriptionevent_sync_state_streamArgs, 'batch_size' | 'cursor'>>;
  get_entity_history_filter?: SubscriptionResolver<Array<ResolversTypes['entity_history_filter']>, "get_entity_history_filter", ParentType, ContextType, RequireFields<Subscriptionget_entity_history_filterArgs, 'args'>>;
  persisted_state?: SubscriptionResolver<Array<ResolversTypes['persisted_state']>, "persisted_state", ParentType, ContextType, Partial<Subscriptionpersisted_stateArgs>>;
  persisted_state_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['persisted_state']>, "persisted_state_by_pk", ParentType, ContextType, RequireFields<Subscriptionpersisted_state_by_pkArgs, 'id'>>;
  persisted_state_stream?: SubscriptionResolver<Array<ResolversTypes['persisted_state']>, "persisted_state_stream", ParentType, ContextType, RequireFields<Subscriptionpersisted_state_streamArgs, 'batch_size' | 'cursor'>>;
  raw_events?: SubscriptionResolver<Array<ResolversTypes['raw_events']>, "raw_events", ParentType, ContextType, Partial<Subscriptionraw_eventsArgs>>;
  raw_events_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['raw_events']>, "raw_events_by_pk", ParentType, ContextType, RequireFields<Subscriptionraw_events_by_pkArgs, 'chain_id' | 'event_id'>>;
  raw_events_stream?: SubscriptionResolver<Array<ResolversTypes['raw_events']>, "raw_events_stream", ParentType, ContextType, RequireFields<Subscriptionraw_events_streamArgs, 'batch_size' | 'cursor'>>;
}>;

export type ApplicationHistoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApplicationHistory'] = ResolversParentTypes['ApplicationHistory']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  grantApplicationBytes?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  applicationSubmitted?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type FeedItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FeedItem'] = ResolversParentTypes['FeedItem']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subjectMetadataPointer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subjectId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  objectId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['FeedItemEntity'], ParentType, ContextType>;
  object?: Resolver<Maybe<ResolversTypes['FeedItemEntity']>, ParentType, ContextType>;
  embed?: Resolver<Maybe<ResolversTypes['FeedItemEmbed']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FeedItemEmbedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FeedItemEmbed'] = ResolversParentTypes['FeedItemEmbed']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pointer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  protocol?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FeedItemEntityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FeedItemEntity'] = ResolversParentTypes['FeedItemEntity']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  playerType?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GameManagerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GameManager'] = ResolversParentTypes['GameManager']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  poolId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gameFacilitatorId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  rootAccount?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  currentRoundId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  currentRound?: Resolver<Maybe<ResolversTypes['GameRound']>, ParentType, ContextType>;
  poolFunds?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GameRoundResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GameRound'] = ResolversParentTypes['GameRound']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  endTime?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  totalRoundAmount?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  totalAllocatedAmount?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  totalDistributedAmount?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  gameStatus?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ships?: Resolver<Array<ResolversTypes['GrantShip']>, ParentType, ContextType, RequireFields<GameRoundshipsArgs, 'skip' | 'first'>>;
  isGameActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  realStartTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  realEndTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  gameManager_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GmDeploymentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GmDeployment'] = ResolversParentTypes['GmDeployment']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['GmVersion'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  hasPool?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  poolId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  poolMetadata?: Resolver<ResolversTypes['RawMetadata'], ParentType, ContextType>;
  poolProfileMetadata?: Resolver<ResolversTypes['RawMetadata'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GmVersionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GmVersion'] = ResolversParentTypes['GmVersion']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GrantResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Grant'] = ResolversParentTypes['Grant']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  shipId?: Resolver<ResolversTypes['GrantShip'], ParentType, ContextType>;
  lastUpdated?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  hasResubmitted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  grantStatus?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  grantApplicationBytes?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  applicationSubmitted?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  currentMilestoneIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  milestonesAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  milestones?: Resolver<Maybe<Array<ResolversTypes['Milestone']>>, ParentType, ContextType, RequireFields<GrantmilestonesArgs, 'skip' | 'first'>>;
  shipApprovalReason?: Resolver<Maybe<ResolversTypes['RawMetadata']>, ParentType, ContextType>;
  hasShipApproved?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  amtAllocated?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amtDistributed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  allocatedBy?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  facilitatorReason?: Resolver<Maybe<ResolversTypes['RawMetadata']>, ParentType, ContextType>;
  hasFacilitatorApproved?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  milestonesApproved?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  milestonesApprovedReason?: Resolver<Maybe<ResolversTypes['RawMetadata']>, ParentType, ContextType>;
  currentMilestoneRejectedReason?: Resolver<Maybe<ResolversTypes['RawMetadata']>, ParentType, ContextType>;
  resubmitHistory?: Resolver<Array<ResolversTypes['ApplicationHistory']>, ParentType, ContextType, RequireFields<GrantresubmitHistoryArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GrantShipResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GrantShip'] = ResolversParentTypes['GrantShip']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileMetadata?: Resolver<ResolversTypes['RawMetadata'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  anchor?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  poolFunded?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  balance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  shipAllocation?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalAvailableFunds?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalRoundAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalAllocated?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalDistributed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  grants?: Resolver<Array<ResolversTypes['Grant']>, ParentType, ContextType, RequireFields<GrantShipgrantsArgs, 'skip' | 'first'>>;
  alloProfileMembers?: Resolver<Maybe<ResolversTypes['ProfileMemberGroup']>, ParentType, ContextType>;
  shipApplicationBytesData?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  applicationSubmittedTime?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  isAwaitingApproval?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasSubmittedApplication?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isApproved?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  approvedTime?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  isRejected?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  rejectedTime?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  applicationReviewReason?: Resolver<Maybe<ResolversTypes['RawMetadata']>, ParentType, ContextType>;
  poolId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  hatId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shipContractAddress?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  shipLaunched?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  poolActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isAllocated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isDistributed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export type LogResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Log'] = ResolversParentTypes['Log']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MilestoneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Milestone'] = ResolversParentTypes['Milestone']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  amountPercentage?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  mmetadata?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastUpdated?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  grant_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  metadata_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  milestoneSet?: Resolver<Maybe<ResolversTypes['MilestoneSet']>, ParentType, ContextType>;
  milestoneSet_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  percentage?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolIdLookupResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PoolIdLookup'] = ResolversParentTypes['PoolIdLookup']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  entityId?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProfileIdToAnchorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProfileIdToAnchor'] = ResolversParentTypes['ProfileIdToAnchor']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  anchor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProfileMemberGroupResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProfileMemberGroup'] = ResolversParentTypes['ProfileMemberGroup']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['RawMetadata'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  anchor?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  grants?: Resolver<Array<ResolversTypes['Grant']>, ParentType, ContextType, RequireFields<ProjectgrantsArgs, 'skip' | 'first'>>;
  members?: Resolver<Maybe<ResolversTypes['ProfileMemberGroup']>, ParentType, ContextType>;
  totalAmountReceived?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RawMetadataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RawMetadata'] = ResolversParentTypes['RawMetadata']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  protocol?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pointer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export type TransactionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Transaction'] = ResolversParentTypes['Transaction']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  srcAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Update'] = ResolversParentTypes['Update']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  scope?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  posterRole?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  entityAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  postedBy?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['RawMetadata'], ParentType, ContextType>;
  contentSchema?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  postDecorator?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parentHash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApplicationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Application'] = ResolversParentTypes['Application']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  grant_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  metadata_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  receivingAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BadgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Badge'] = ResolversParentTypes['Badge']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  dao?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reason_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['BadgeTemplate']>, ParentType, ContextType>;
  template_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  wearer?: Resolver<Maybe<ResolversTypes['BadgeHolder']>, ParentType, ContextType>;
  wearer_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BadgeHolderResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BadgeHolder'] = ResolversParentTypes['BadgeHolder']> = ResolversObject<{
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  badgeBalance?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  badges?: Resolver<Array<ResolversTypes['Badge']>, ParentType, ContextType, Partial<BadgeHolderbadgesArgs>>;
  dao?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shaman?: Resolver<Maybe<ResolversTypes['ScaffoldShaman']>, ParentType, ContextType>;
  shaman_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BadgeTemplateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BadgeTemplate'] = ResolversParentTypes['BadgeTemplate']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  badgeId?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  badges?: Resolver<Array<ResolversTypes['Badge']>, ParentType, ContextType, Partial<BadgeTemplatebadgesArgs>>;
  dao?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  exists?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasFixedAmount?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isSlash?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isVotingToken?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  metadata_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shaman?: Resolver<Maybe<ResolversTypes['ScaffoldShaman']>, ParentType, ContextType>;
  shaman_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContestResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Contest'] = ResolversParentTypes['Contest']> = ResolversObject<{
  choicesModule?: Resolver<Maybe<ResolversTypes['StemModule']>, ParentType, ContextType>;
  choicesModule_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contestAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contestStatus?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  contestVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  executionModule?: Resolver<Maybe<ResolversTypes['StemModule']>, ParentType, ContextType>;
  executionModule_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  filterTag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isContinuous?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isRetractable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pointsModule?: Resolver<Maybe<ResolversTypes['StemModule']>, ParentType, ContextType>;
  pointsModule_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  votesModule?: Resolver<Maybe<ResolversTypes['StemModule']>, ParentType, ContextType>;
  votesModule_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContestCloneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ContestClone'] = ResolversParentTypes['ContestClone']> = ResolversObject<{
  contestAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contestVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  filterTag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContestTemplateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ContestTemplate'] = ResolversParentTypes['ContestTemplate']> = ResolversObject<{
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  contestAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contestVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mdPointer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mdProtocol?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DAOTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DAOToken'] = ResolversParentTypes['DAOToken']> = ResolversObject<{
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dao?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shaman?: Resolver<Maybe<ResolversTypes['ScaffoldShaman']>, ParentType, ContextType>;
  shaman_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DualTokenPointsParamsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DualTokenPointsParams'] = ResolversParentTypes['DualTokenPointsParams']> = ResolversObject<{
  contextTokenAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  daoTokenAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  votingCheckpoint?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DualTokenTVParamsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DualTokenTVParams'] = ResolversParentTypes['DualTokenTVParams']> = ResolversObject<{
  contextTokenAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  daoTokenAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  voteDuration?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ERCPointParamsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ERCPointParams'] = ResolversParentTypes['ERCPointParams']> = ResolversObject<{
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  voteTokenAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  votingCheckpoint?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EnvioTXResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EnvioTX'] = ResolversParentTypes['EnvioTX']> = ResolversObject<{
  blockNumber?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  txOrigin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventPostResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EventPost'] = ResolversParentTypes['EventPost']> = ResolversObject<{
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  hatId?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  hatsPoster?: Resolver<Maybe<ResolversTypes['HatsPoster']>, ParentType, ContextType>;
  hatsPoster_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mdPointer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mdProtocol?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  tag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FactoryEventsSummaryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FactoryEventsSummary'] = ResolversParentTypes['FactoryEventsSummary']> = ResolversObject<{
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  admins?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  contestBuiltCount?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  contestCloneCount?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  contestTemplateCount?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  moduleCloneCount?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  moduleTemplateCount?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FeedCardResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FeedCard'] = ResolversParentTypes['FeedCard']> = ResolversObject<{
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  domain_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  embed?: Resolver<Maybe<ResolversTypes['FeedItemEmbed']>, ParentType, ContextType>;
  embed_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  externalLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  internalLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  object?: Resolver<Maybe<ResolversTypes['FeedItemEntity']>, ParentType, ContextType>;
  object_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  richTextContent_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['FeedItemEntity']>, ParentType, ContextType>;
  subjectMetadataPointer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subject_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GMInitParamsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GMInitParams'] = ResolversParentTypes['GMInitParams']> = ResolversObject<{
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  gameFacilitatorId?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  gmRootAccount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GSVoterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GSVoter'] = ResolversParentTypes['GSVoter']> = ResolversObject<{
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  votes?: Resolver<Array<ResolversTypes['ShipVote']>, ParentType, ContextType, Partial<GSVotervotesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GameManagerFactoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GameManagerFactory'] = ResolversParentTypes['GameManagerFactory']> = ResolversObject<{
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rootAccount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GameManagerTemplateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GameManagerTemplate'] = ResolversParentTypes['GameManagerTemplate']> = ResolversObject<{
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Gate'] = ResolversParentTypes['Gate']> = ResolversObject<{
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  gateId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  gateType?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hatId?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GrantShipsVotingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GrantShipsVoting'] = ResolversParentTypes['GrantShipsVoting']> = ResolversObject<{
  choices?: Resolver<Array<ResolversTypes['ShipChoice']>, ParentType, ContextType, Partial<GrantShipsVotingchoicesArgs>>;
  contest?: Resolver<Maybe<ResolversTypes['Contest']>, ParentType, ContextType>;
  contest_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  endTime?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  hatId?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  hatsAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isDualToken?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isSBTVoting?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isVotingActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startTime?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  totalVotes?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  voteDuration?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  voteTokenAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  votes?: Resolver<Array<ResolversTypes['ShipVote']>, ParentType, ContextType, Partial<GrantShipsVotingvotesArgs>>;
  votingCheckpoint?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HALParamsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HALParams'] = ResolversParentTypes['HALParams']> = ResolversObject<{
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  hatId?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  hatsAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HatsPosterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HatsPoster'] = ResolversParentTypes['HatsPoster']> = ResolversObject<{
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  eventPosts?: Resolver<Array<ResolversTypes['EventPost']>, ParentType, ContextType, Partial<HatsPostereventPostsArgs>>;
  hatIds?: Resolver<Array<ResolversTypes['numeric']>, ParentType, ContextType>;
  hatsAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  record?: Resolver<Array<ResolversTypes['Record']>, ParentType, ContextType, Partial<HatsPosterrecordArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LocalLogResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LocalLog'] = ResolversParentTypes['LocalLog']> = ResolversObject<{
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MilestoneSetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MilestoneSet'] = ResolversParentTypes['MilestoneSet']> = ResolversObject<{
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  grant_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  milestoneLength?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  milestones?: Resolver<Array<ResolversTypes['Milestone']>, ParentType, ContextType, Partial<MilestoneSetmilestonesArgs>>;
  milestonesCompleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  milestonesPending?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  milestonesRejected?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ModuleTemplateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ModuleTemplate'] = ResolversParentTypes['ModuleTemplate']> = ResolversObject<{
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mdPointer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mdProtocol?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  moduleName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  templateAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RecordResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Record'] = ResolversParentTypes['Record']> = ResolversObject<{
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  hatId?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  hatsPoster?: Resolver<Maybe<ResolversTypes['HatsPoster']>, ParentType, ContextType>;
  hatsPoster_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mdPointer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mdProtocol?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SBTBalParamsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SBTBalParams'] = ResolversParentTypes['SBTBalParams']> = ResolversObject<{
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  voteTokenAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ScaffoldShamanResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ScaffoldShaman'] = ResolversParentTypes['ScaffoldShaman']> = ResolversObject<{
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  controlGate?: Resolver<Maybe<ResolversTypes['Gate']>, ParentType, ContextType>;
  controlGate_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dao?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lootToken?: Resolver<Maybe<ResolversTypes['DAOToken']>, ParentType, ContextType>;
  lootToken_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  managerGate?: Resolver<Maybe<ResolversTypes['Gate']>, ParentType, ContextType>;
  managerGate_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  minterGate?: Resolver<Maybe<ResolversTypes['Gate']>, ParentType, ContextType>;
  minterGate_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sharesToken?: Resolver<Maybe<ResolversTypes['DAOToken']>, ParentType, ContextType>;
  sharesToken_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  templates?: Resolver<Array<ResolversTypes['BadgeTemplate']>, ParentType, ContextType, Partial<ScaffoldShamantemplatesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShipChoiceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShipChoice'] = ResolversParentTypes['ShipChoice']> = ResolversObject<{
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  choiceData?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contest?: Resolver<Maybe<ResolversTypes['GrantShipsVoting']>, ParentType, ContextType>;
  contest_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contextTokenTally?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  daoTokenTally?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mdPointer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mdProtocol?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  voteTally?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  votes?: Resolver<Array<ResolversTypes['ShipVote']>, ParentType, ContextType, Partial<ShipChoicevotesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShipContextResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShipContext'] = ResolversParentTypes['ShipContext']> = ResolversObject<{
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  gameManager_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  grantShip_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shipAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShipVoteResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShipVote'] = ResolversParentTypes['ShipVote']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  choice?: Resolver<Maybe<ResolversTypes['ShipChoice']>, ParentType, ContextType>;
  choice_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contest?: Resolver<Maybe<ResolversTypes['GrantShipsVoting']>, ParentType, ContextType>;
  contest_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isRetractVote?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  mdPointer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mdProtocol?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  voter?: Resolver<Maybe<ResolversTypes['GSVoter']>, ParentType, ContextType>;
  voter_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StemModuleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StemModule'] = ResolversParentTypes['StemModule']> = ResolversObject<{
  contest?: Resolver<Maybe<ResolversTypes['Contest']>, ParentType, ContextType>;
  contestAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contest_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  filterTag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  moduleAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  moduleName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  moduleTemplate?: Resolver<Maybe<ResolversTypes['ModuleTemplate']>, ParentType, ContextType>;
  moduleTemplate_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TVParamsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TVParams'] = ResolversParentTypes['TVParams']> = ResolversObject<{
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  voteDuration?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type chain_metadataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['chain_metadata'] = ResolversParentTypes['chain_metadata']> = ResolversObject<{
  block_height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chain_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  end_block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  first_event_block_number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_hyper_sync?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  latest_fetched_block_number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  latest_processed_block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  num_batches_fetched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  num_events_processed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  start_block?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp_caught_up_to_head_or_endblock?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface contract_typeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['contract_type'], any> {
  name: 'contract_type';
}

export type dynamic_contract_registryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['dynamic_contract_registry'] = ResolversParentTypes['dynamic_contract_registry']> = ResolversObject<{
  chain_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contract_address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contract_type?: Resolver<ResolversTypes['contract_type'], ParentType, ContextType>;
  registering_event_block_number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  registering_event_block_timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  registering_event_contract_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  registering_event_log_index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  registering_event_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  registering_event_src_address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type end_of_block_range_scanned_dataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['end_of_block_range_scanned_data'] = ResolversParentTypes['end_of_block_range_scanned_data']> = ResolversObject<{
  block_hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  block_number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  block_timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chain_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type entity_historyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['entity_history'] = ResolversParentTypes['entity_history']> = ResolversObject<{
  block_number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  block_timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chain_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  entity_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entity_type?: Resolver<ResolversTypes['entity_type'], ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['raw_events']>, ParentType, ContextType>;
  log_index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  params?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<entity_historyparamsArgs>>;
  previous_block_number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  previous_block_timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  previous_chain_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  previous_log_index?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type entity_history_filterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['entity_history_filter'] = ResolversParentTypes['entity_history_filter']> = ResolversObject<{
  block_number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  block_timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chain_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  entity_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entity_type?: Resolver<ResolversTypes['entity_type'], ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['raw_events']>, ParentType, ContextType>;
  log_index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  new_val?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<entity_history_filternew_valArgs>>;
  old_val?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<entity_history_filterold_valArgs>>;
  previous_block_number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  previous_log_index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface entity_typeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['entity_type'], any> {
  name: 'entity_type';
}

export type event_sync_stateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['event_sync_state'] = ResolversParentTypes['event_sync_state']> = ResolversObject<{
  block_number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  block_timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chain_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  is_pre_registering_dynamic_contracts?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  log_index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface jsonbScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['jsonb'], any> {
  name: 'jsonb';
}

export interface numericScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['numeric'], any> {
  name: 'numeric';
}

export type persisted_stateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['persisted_state'] = ResolversParentTypes['persisted_state']> = ResolversObject<{
  abi_files_hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  config_hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  envio_version?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  handler_files_hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  schema_hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type raw_eventsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['raw_events'] = ResolversParentTypes['raw_events']> = ResolversObject<{
  block_fields?: Resolver<ResolversTypes['jsonb'], ParentType, ContextType, Partial<raw_eventsblock_fieldsArgs>>;
  block_hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  block_number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  block_timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chain_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contract_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  db_write_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  event_history?: Resolver<Array<ResolversTypes['entity_history']>, ParentType, ContextType, Partial<raw_eventsevent_historyArgs>>;
  event_id?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  event_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  log_index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  params?: Resolver<ResolversTypes['jsonb'], ParentType, ContextType, Partial<raw_eventsparamsArgs>>;
  src_address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transaction_fields?: Resolver<ResolversTypes['jsonb'], ParentType, ContextType, Partial<raw_eventstransaction_fieldsArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface timestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['timestamp'], any> {
  name: 'timestamp';
}

export interface timestamptzScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['timestamptz'], any> {
  name: 'timestamptz';
}

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  ApplicationHistory?: ApplicationHistoryResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  FeedItem?: FeedItemResolvers<ContextType>;
  FeedItemEmbed?: FeedItemEmbedResolvers<ContextType>;
  FeedItemEntity?: FeedItemEntityResolvers<ContextType>;
  GameManager?: GameManagerResolvers<ContextType>;
  GameRound?: GameRoundResolvers<ContextType>;
  GmDeployment?: GmDeploymentResolvers<ContextType>;
  GmVersion?: GmVersionResolvers<ContextType>;
  Grant?: GrantResolvers<ContextType>;
  GrantShip?: GrantShipResolvers<ContextType>;
  Int8?: GraphQLScalarType;
  Log?: LogResolvers<ContextType>;
  Milestone?: MilestoneResolvers<ContextType>;
  PoolIdLookup?: PoolIdLookupResolvers<ContextType>;
  ProfileIdToAnchor?: ProfileIdToAnchorResolvers<ContextType>;
  ProfileMemberGroup?: ProfileMemberGroupResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  RawMetadata?: RawMetadataResolvers<ContextType>;
  Timestamp?: GraphQLScalarType;
  Transaction?: TransactionResolvers<ContextType>;
  Update?: UpdateResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
  Application?: ApplicationResolvers<ContextType>;
  Badge?: BadgeResolvers<ContextType>;
  BadgeHolder?: BadgeHolderResolvers<ContextType>;
  BadgeTemplate?: BadgeTemplateResolvers<ContextType>;
  Contest?: ContestResolvers<ContextType>;
  ContestClone?: ContestCloneResolvers<ContextType>;
  ContestTemplate?: ContestTemplateResolvers<ContextType>;
  DAOToken?: DAOTokenResolvers<ContextType>;
  DualTokenPointsParams?: DualTokenPointsParamsResolvers<ContextType>;
  DualTokenTVParams?: DualTokenTVParamsResolvers<ContextType>;
  ERCPointParams?: ERCPointParamsResolvers<ContextType>;
  EnvioTX?: EnvioTXResolvers<ContextType>;
  EventPost?: EventPostResolvers<ContextType>;
  FactoryEventsSummary?: FactoryEventsSummaryResolvers<ContextType>;
  FeedCard?: FeedCardResolvers<ContextType>;
  GMInitParams?: GMInitParamsResolvers<ContextType>;
  GSVoter?: GSVoterResolvers<ContextType>;
  GameManagerFactory?: GameManagerFactoryResolvers<ContextType>;
  GameManagerTemplate?: GameManagerTemplateResolvers<ContextType>;
  Gate?: GateResolvers<ContextType>;
  GrantShipsVoting?: GrantShipsVotingResolvers<ContextType>;
  HALParams?: HALParamsResolvers<ContextType>;
  HatsPoster?: HatsPosterResolvers<ContextType>;
  LocalLog?: LocalLogResolvers<ContextType>;
  MilestoneSet?: MilestoneSetResolvers<ContextType>;
  ModuleTemplate?: ModuleTemplateResolvers<ContextType>;
  Record?: RecordResolvers<ContextType>;
  SBTBalParams?: SBTBalParamsResolvers<ContextType>;
  ScaffoldShaman?: ScaffoldShamanResolvers<ContextType>;
  ShipChoice?: ShipChoiceResolvers<ContextType>;
  ShipContext?: ShipContextResolvers<ContextType>;
  ShipVote?: ShipVoteResolvers<ContextType>;
  StemModule?: StemModuleResolvers<ContextType>;
  TVParams?: TVParamsResolvers<ContextType>;
  chain_metadata?: chain_metadataResolvers<ContextType>;
  contract_type?: GraphQLScalarType;
  dynamic_contract_registry?: dynamic_contract_registryResolvers<ContextType>;
  end_of_block_range_scanned_data?: end_of_block_range_scanned_dataResolvers<ContextType>;
  entity_history?: entity_historyResolvers<ContextType>;
  entity_history_filter?: entity_history_filterResolvers<ContextType>;
  entity_type?: GraphQLScalarType;
  event_sync_state?: event_sync_stateResolvers<ContextType>;
  jsonb?: GraphQLScalarType;
  numeric?: GraphQLScalarType;
  persisted_state?: persisted_stateResolvers<ContextType>;
  raw_events?: raw_eventsResolvers<ContextType>;
  timestamp?: GraphQLScalarType;
  timestamptz?: GraphQLScalarType;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
  cached?: cachedDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = GrantShipsTypes.Context & GsVotingTypes.Context & BaseMeshContext;


import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/grant-ships/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
    case ".graphclient/sources/gs-voting/introspectionSchema":
      return Promise.resolve(importedModule$1) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const grantShipsTransforms = [];
const gsVotingTransforms = [];
const additionalTypeDefs = [] as any[];
const grantShipsHandler = new GraphqlHandler({
              name: "grant-ships",
              config: {"endpoint":"https://{context.apiEndpoint:api.studio.thegraph.com/query/41101/grant-ships-arb/version/latest}"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("grant-ships"),
              logger: logger.child("grant-ships"),
              importFn,
            });
const gsVotingHandler = new GraphqlHandler({
              name: "gs-voting",
              config: {"endpoint":"https://indexer.dev.hyperindex.xyz/6410aa4/v1/graphql"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("gs-voting"),
              logger: logger.child("gs-voting"),
              importFn,
            });
sources[0] = {
          name: 'grant-ships',
          handler: grantShipsHandler,
          transforms: grantShipsTransforms
        }
gsVotingTransforms[0] = new FilterSchemaTransform({
                  apiName: "gs-voting",
                  config: {"filters":["!Grant","!Project","!GrantShip","!GameManager","!RawMetadata","!Update"]},
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
gsVotingTransforms[1] = new AutoTypeMergingTransform({
                  apiName: "gs-voting",
                  config: true,
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
sources[1] = {
          name: 'gs-voting',
          handler: gsVotingHandler,
          transforms: gsVotingTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(StitchingMerger as any)({
        cache,
        pubsub,
        logger: logger.child('stitchingMerger'),
        store: rootStore.child('stitchingMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: FacDashShipDataDocument,
        get rawSDL() {
          return printWithCache(FacDashShipDataDocument);
        },
        location: 'FacDashShipDataDocument.graphql'
      },{
        document: GetFacilitatorGrantsDocument,
        get rawSDL() {
          return printWithCache(GetFacilitatorGrantsDocument);
        },
        location: 'GetFacilitatorGrantsDocument.graphql'
      },{
        document: GetFeedDocument,
        get rawSDL() {
          return printWithCache(GetFeedDocument);
        },
        location: 'GetFeedDocument.graphql'
      },{
        document: GetEntityFeedDocument,
        get rawSDL() {
          return printWithCache(GetEntityFeedDocument);
        },
        location: 'GetEntityFeedDocument.graphql'
      },{
        document: GetGameManagerDocument,
        get rawSDL() {
          return printWithCache(GetGameManagerDocument);
        },
        location: 'GetGameManagerDocument.graphql'
      },{
        document: GetGmDeploymentsDocument,
        get rawSDL() {
          return printWithCache(GetGmDeploymentsDocument);
        },
        location: 'GetGmDeploymentsDocument.graphql'
      },{
        document: GetGmVersionsDocument,
        get rawSDL() {
          return printWithCache(GetGmVersionsDocument);
        },
        location: 'GetGmVersionsDocument.graphql'
      },{
        document: GetGrantDocument,
        get rawSDL() {
          return printWithCache(GetGrantDocument);
        },
        location: 'GetGrantDocument.graphql'
      },{
        document: GetGsVotingDocument,
        get rawSDL() {
          return printWithCache(GetGsVotingDocument);
        },
        location: 'GetGsVotingDocument.graphql'
      },{
        document: GetProjectGrantsDocument,
        get rawSDL() {
          return printWithCache(GetProjectGrantsDocument);
        },
        location: 'GetProjectGrantsDocument.graphql'
      },{
        document: GetProjectsDocument,
        get rawSDL() {
          return printWithCache(GetProjectsDocument);
        },
        location: 'GetProjectsDocument.graphql'
      },{
        document: GetUserProjectsDocument,
        get rawSDL() {
          return printWithCache(GetUserProjectsDocument);
        },
        location: 'GetUserProjectsDocument.graphql'
      },{
        document: GetRecentTransactionDocument,
        get rawSDL() {
          return printWithCache(GetRecentTransactionDocument);
        },
        location: 'GetRecentTransactionDocument.graphql'
      },{
        document: GetRecentEnvioDocument,
        get rawSDL() {
          return printWithCache(GetRecentEnvioDocument);
        },
        location: 'GetRecentEnvioDocument.graphql'
      },{
        document: GetRecordsByTagDocument,
        get rawSDL() {
          return printWithCache(GetRecordsByTagDocument);
        },
        location: 'GetRecordsByTagDocument.graphql'
      },{
        document: GetShipFundsAvailableDocument,
        get rawSDL() {
          return printWithCache(GetShipFundsAvailableDocument);
        },
        location: 'GetShipFundsAvailableDocument.graphql'
      },{
        document: GetShipIdByHatIdDocument,
        get rawSDL() {
          return printWithCache(GetShipIdByHatIdDocument);
        },
        location: 'GetShipIdByHatIdDocument.graphql'
      },{
        document: GetShipDashDocument,
        get rawSDL() {
          return printWithCache(GetShipDashDocument);
        },
        location: 'GetShipDashDocument.graphql'
      },{
        document: GetShipGrantsDocument,
        get rawSDL() {
          return printWithCache(GetShipGrantsDocument);
        },
        location: 'GetShipGrantsDocument.graphql'
      },{
        document: GetShipPoolIdDocument,
        get rawSDL() {
          return printWithCache(GetShipPoolIdDocument);
        },
        location: 'GetShipPoolIdDocument.graphql'
      },{
        document: GetUpdatesDocument,
        get rawSDL() {
          return printWithCache(GetUpdatesDocument);
        },
        location: 'GetUpdatesDocument.graphql'
      },{
        document: GetUserDataDocument,
        get rawSDL() {
          return printWithCache(GetUserDataDocument);
        },
        location: 'GetUserDataDocument.graphql'
      },{
        document: GetUserVotesDocument,
        get rawSDL() {
          return printWithCache(GetUserVotesDocument);
        },
        location: 'GetUserVotesDocument.graphql'
      },{
        document: GetVotersDocument,
        get rawSDL() {
          return printWithCache(GetVotersDocument);
        },
        location: 'GetVotersDocument.graphql'
      },{
        document: ProjectPageQueryDocument,
        get rawSDL() {
          return printWithCache(ProjectPageQueryDocument);
        },
        location: 'ProjectPageQueryDocument.graphql'
      },{
        document: ShipPageQueryDocument,
        get rawSDL() {
          return printWithCache(ShipPageQueryDocument);
        },
        location: 'ShipPageQueryDocument.graphql'
      },{
        document: ShipsPageQueryDocument,
        get rawSDL() {
          return printWithCache(ShipsPageQueryDocument);
        },
        location: 'ShipsPageQueryDocument.graphql'
      }
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type BaseShipDataFragment = (
  Pick<GrantShip, 'id' | 'name' | 'status' | 'shipContractAddress' | 'shipApplicationBytesData' | 'owner' | 'balance' | 'totalAvailableFunds' | 'totalAllocated' | 'totalDistributed' | 'totalRoundAmount'>
  & { profileMetadata: Pick<RawMetadata, 'pointer'>, alloProfileMembers?: Maybe<Pick<ProfileMemberGroup, 'addresses'>> }
);

export type UpdateFragment = (
  Pick<Update, 'id' | 'postedBy' | 'entityAddress' | 'timestamp'>
  & { content: Pick<RawMetadata, 'pointer'> }
);

export type GrantDashFragment = (
  Pick<Grant, 'id' | 'grantApplicationBytes' | 'lastUpdated' | 'grantStatus' | 'milestonesAmount' | 'hasResubmitted' | 'milestonesApproved' | 'amtDistributed' | 'amtAllocated' | 'currentMilestoneIndex'>
  & { projectId: (
    Pick<Project, 'id' | 'name'>
    & { metadata: Pick<RawMetadata, 'pointer'> }
  ), shipId: (
    Pick<GrantShip, 'id' | 'name' | 'shipContractAddress' | 'poolId' | 'totalAvailableFunds'>
    & { profileMetadata: Pick<RawMetadata, 'pointer'> }
  ), currentMilestoneRejectedReason?: Maybe<Pick<RawMetadata, 'pointer'>>, milestonesApprovedReason?: Maybe<Pick<RawMetadata, 'pointer'>>, facilitatorReason?: Maybe<Pick<RawMetadata, 'pointer'>>, shipApprovalReason?: Maybe<Pick<RawMetadata, 'pointer'>> }
);

export type FacShipDataFragment = (
  Pick<GrantShip, 'id' | 'name' | 'status' | 'applicationSubmittedTime' | 'shipApplicationBytesData'>
  & { profileMetadata: Pick<RawMetadata, 'pointer'> }
);

export type facDashShipDataQueryVariables = Exact<{ [key: string]: never; }>;


export type facDashShipDataQuery = { shipApplicants: Array<(
    Pick<GrantShip, 'id' | 'name' | 'status' | 'applicationSubmittedTime' | 'shipApplicationBytesData'>
    & { profileMetadata: Pick<RawMetadata, 'pointer'> }
  )>, approvedShips: Array<(
    Pick<GrantShip, 'approvedTime' | 'shipAllocation' | 'totalAvailableFunds' | 'id' | 'name' | 'status' | 'applicationSubmittedTime' | 'shipApplicationBytesData'>
    & { applicationReviewReason?: Maybe<Pick<RawMetadata, 'pointer'>>, profileMetadata: Pick<RawMetadata, 'pointer'> }
  )>, rejectedShips: Array<(
    Pick<GrantShip, 'rejectedTime' | 'id' | 'name' | 'status' | 'applicationSubmittedTime' | 'shipApplicationBytesData'>
    & { applicationReviewReason?: Maybe<Pick<RawMetadata, 'pointer'>>, profileMetadata: Pick<RawMetadata, 'pointer'> }
  )> };

export type getFacilitatorGrantsQueryVariables = Exact<{ [key: string]: never; }>;


export type getFacilitatorGrantsQuery = { requiresAction: Array<(
    Pick<Grant, 'id' | 'grantApplicationBytes' | 'lastUpdated' | 'grantStatus' | 'milestonesAmount' | 'hasResubmitted' | 'milestonesApproved' | 'amtDistributed' | 'amtAllocated' | 'currentMilestoneIndex'>
    & { projectId: (
      Pick<Project, 'id' | 'name'>
      & { metadata: Pick<RawMetadata, 'pointer'> }
    ), shipId: (
      Pick<GrantShip, 'id' | 'name' | 'shipContractAddress' | 'poolId' | 'totalAvailableFunds'>
      & { profileMetadata: Pick<RawMetadata, 'pointer'> }
    ), currentMilestoneRejectedReason?: Maybe<Pick<RawMetadata, 'pointer'>>, milestonesApprovedReason?: Maybe<Pick<RawMetadata, 'pointer'>>, facilitatorReason?: Maybe<Pick<RawMetadata, 'pointer'>>, shipApprovalReason?: Maybe<Pick<RawMetadata, 'pointer'>> }
  )>, rejected: Array<(
    Pick<Grant, 'id' | 'grantApplicationBytes' | 'lastUpdated' | 'grantStatus' | 'milestonesAmount' | 'hasResubmitted' | 'milestonesApproved' | 'amtDistributed' | 'amtAllocated' | 'currentMilestoneIndex'>
    & { projectId: (
      Pick<Project, 'id' | 'name'>
      & { metadata: Pick<RawMetadata, 'pointer'> }
    ), shipId: (
      Pick<GrantShip, 'id' | 'name' | 'shipContractAddress' | 'poolId' | 'totalAvailableFunds'>
      & { profileMetadata: Pick<RawMetadata, 'pointer'> }
    ), currentMilestoneRejectedReason?: Maybe<Pick<RawMetadata, 'pointer'>>, milestonesApprovedReason?: Maybe<Pick<RawMetadata, 'pointer'>>, facilitatorReason?: Maybe<Pick<RawMetadata, 'pointer'>>, shipApprovalReason?: Maybe<Pick<RawMetadata, 'pointer'>> }
  )>, approved: Array<(
    Pick<Grant, 'id' | 'grantApplicationBytes' | 'lastUpdated' | 'grantStatus' | 'milestonesAmount' | 'hasResubmitted' | 'milestonesApproved' | 'amtDistributed' | 'amtAllocated' | 'currentMilestoneIndex'>
    & { projectId: (
      Pick<Project, 'id' | 'name'>
      & { metadata: Pick<RawMetadata, 'pointer'> }
    ), shipId: (
      Pick<GrantShip, 'id' | 'name' | 'shipContractAddress' | 'poolId' | 'totalAvailableFunds'>
      & { profileMetadata: Pick<RawMetadata, 'pointer'> }
    ), currentMilestoneRejectedReason?: Maybe<Pick<RawMetadata, 'pointer'>>, milestonesApprovedReason?: Maybe<Pick<RawMetadata, 'pointer'>>, facilitatorReason?: Maybe<Pick<RawMetadata, 'pointer'>>, shipApprovalReason?: Maybe<Pick<RawMetadata, 'pointer'>> }
  )> };

export type FeedDataFragment = (
  Pick<FeedItem, 'id' | 'content' | 'timestamp' | 'sender' | 'tag' | 'details' | 'subjectMetadataPointer'>
  & { subject: Pick<FeedItemEntity, 'id' | 'name' | 'type'>, object?: Maybe<Pick<FeedItemEntity, 'id' | 'name' | 'type'>>, embed?: Maybe<Pick<FeedItemEmbed, 'key' | 'pointer' | 'protocol' | 'content'>> }
);

export type getFeedQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FeedItem_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
}>;


export type getFeedQuery = { feedItems: Array<(
    Pick<FeedItem, 'id' | 'content' | 'timestamp' | 'sender' | 'tag' | 'details' | 'subjectMetadataPointer'>
    & { subject: Pick<FeedItemEntity, 'id' | 'name' | 'type'>, object?: Maybe<Pick<FeedItemEntity, 'id' | 'name' | 'type'>>, embed?: Maybe<Pick<FeedItemEmbed, 'key' | 'pointer' | 'protocol' | 'content'>> }
  )> };

export type getEntityFeedQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FeedItem_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  entityId: Scalars['ID'];
}>;


export type getEntityFeedQuery = { subjectItems: Array<(
    Pick<FeedItem, 'id' | 'content' | 'timestamp' | 'sender' | 'tag' | 'details' | 'subjectMetadataPointer'>
    & { subject: Pick<FeedItemEntity, 'id' | 'name' | 'type'>, object?: Maybe<Pick<FeedItemEntity, 'id' | 'name' | 'type'>>, embed?: Maybe<Pick<FeedItemEmbed, 'key' | 'pointer' | 'protocol' | 'content'>> }
  )>, objectItems: Array<(
    Pick<FeedItem, 'id' | 'content' | 'timestamp' | 'sender' | 'tag' | 'details' | 'subjectMetadataPointer'>
    & { subject: Pick<FeedItemEntity, 'id' | 'name' | 'type'>, object?: Maybe<Pick<FeedItemEntity, 'id' | 'name' | 'type'>>, embed?: Maybe<Pick<FeedItemEmbed, 'key' | 'pointer' | 'protocol' | 'content'>> }
  )> };

export type GameManagerDataFragment = (
  Pick<GameManager, 'id' | 'gameFacilitatorId' | 'rootAccount' | 'tokenAddress' | 'currentRoundId' | 'poolFunds'>
  & { currentRound?: Maybe<(
    Pick<GameRound, 'id' | 'startTime' | 'endTime' | 'totalRoundAmount' | 'gameStatus'>
    & { ships: Array<Pick<GrantShip, 'anchor'>> }
  )> }
);

export type getGameManagerQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type getGameManagerQuery = { gameManager?: Maybe<(
    Pick<GameManager, 'id' | 'gameFacilitatorId' | 'rootAccount' | 'tokenAddress' | 'currentRoundId' | 'poolFunds'>
    & { currentRound?: Maybe<(
      Pick<GameRound, 'id' | 'startTime' | 'endTime' | 'totalRoundAmount' | 'gameStatus'>
      & { ships: Array<Pick<GrantShip, 'anchor'>> }
    )> }
  )> };

export type GmDeploymentFragment = (
  Pick<GmDeployment, 'id' | 'address' | 'blockNumber' | 'transactionHash' | 'timestamp' | 'hasPool' | 'poolId' | 'profileId'>
  & { version: Pick<GmVersion, 'name' | 'address'>, poolMetadata: Pick<RawMetadata, 'pointer'>, poolProfileMetadata: Pick<RawMetadata, 'pointer'> }
);

export type getGmDeploymentsQueryVariables = Exact<{ [key: string]: never; }>;


export type getGmDeploymentsQuery = { gmDeployments: Array<(
    Pick<GmDeployment, 'id' | 'address' | 'blockNumber' | 'transactionHash' | 'timestamp' | 'hasPool' | 'poolId' | 'profileId'>
    & { version: Pick<GmVersion, 'name' | 'address'>, poolMetadata: Pick<RawMetadata, 'pointer'>, poolProfileMetadata: Pick<RawMetadata, 'pointer'> }
  )> };

export type getGmVersionsQueryVariables = Exact<{ [key: string]: never; }>;


export type getGmVersionsQuery = { gmVersions: Array<Pick<GmVersion, 'id' | 'name' | 'address'>> };

export type getGrantQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type getGrantQuery = { grant?: Maybe<(
    Pick<Grant, 'id' | 'grantApplicationBytes' | 'lastUpdated' | 'grantStatus' | 'milestonesAmount' | 'hasResubmitted' | 'milestonesApproved' | 'amtDistributed' | 'amtAllocated' | 'currentMilestoneIndex'>
    & { projectId: (
      Pick<Project, 'id' | 'name'>
      & { metadata: Pick<RawMetadata, 'pointer'> }
    ), shipId: (
      Pick<GrantShip, 'id' | 'name' | 'shipContractAddress' | 'poolId' | 'totalAvailableFunds'>
      & { profileMetadata: Pick<RawMetadata, 'pointer'> }
    ), currentMilestoneRejectedReason?: Maybe<Pick<RawMetadata, 'pointer'>>, milestonesApprovedReason?: Maybe<Pick<RawMetadata, 'pointer'>>, facilitatorReason?: Maybe<Pick<RawMetadata, 'pointer'>>, shipApprovalReason?: Maybe<Pick<RawMetadata, 'pointer'>> }
  )> };

export type getGsVotingQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type getGsVotingQuery = { GrantShipsVoting: Array<(
    Pick<GrantShipsVoting, 'id' | 'endTime' | 'startTime' | 'totalVotes' | 'voteDuration' | 'voteTokenAddress' | 'votingCheckpoint' | 'isVotingActive' | 'isSBTVoting'>
    & { choices: Array<Pick<ShipChoice, 'active' | 'id' | 'mdPointer' | 'mdProtocol' | 'voteTally'>>, contest?: Maybe<Pick<Contest, 'votesModule_id' | 'choicesModule_id' | 'pointsModule_id' | 'executionModule_id' | 'contestStatus'>> }
  )> };

export type getProjectGrantsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type getProjectGrantsQuery = { project?: Maybe<{ grants: Array<(
      Pick<Grant, 'id' | 'grantApplicationBytes' | 'lastUpdated' | 'grantStatus' | 'milestonesAmount' | 'hasResubmitted' | 'milestonesApproved' | 'amtDistributed' | 'amtAllocated' | 'currentMilestoneIndex'>
      & { projectId: (
        Pick<Project, 'id' | 'name'>
        & { metadata: Pick<RawMetadata, 'pointer'> }
      ), shipId: (
        Pick<GrantShip, 'id' | 'name' | 'shipContractAddress' | 'poolId' | 'totalAvailableFunds'>
        & { profileMetadata: Pick<RawMetadata, 'pointer'> }
      ), currentMilestoneRejectedReason?: Maybe<Pick<RawMetadata, 'pointer'>>, milestonesApprovedReason?: Maybe<Pick<RawMetadata, 'pointer'>>, facilitatorReason?: Maybe<Pick<RawMetadata, 'pointer'>>, shipApprovalReason?: Maybe<Pick<RawMetadata, 'pointer'>> }
    )> }> };

export type ProjectDetailsFragment = Pick<Project, 'id' | 'name' | 'profileId' | 'nonce' | 'anchor' | 'owner'>;

export type RawMetadataFragment = Pick<RawMetadata, 'protocol' | 'pointer'>;

export type GetProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProjectsQuery = { projects: Array<(
    Pick<Project, 'id' | 'name' | 'profileId' | 'nonce' | 'anchor' | 'owner'>
    & { metadata: Pick<RawMetadata, 'protocol' | 'pointer'> }
  )> };

export type GetUserProjectsQueryVariables = Exact<{
  id: Scalars['Bytes'];
}>;


export type GetUserProjectsQuery = { projects: Array<(
    Pick<Project, 'id' | 'name' | 'profileId' | 'nonce' | 'anchor' | 'owner'>
    & { metadata: Pick<RawMetadata, 'protocol' | 'pointer'> }
  )> };

export type getRecentTransactionQueryVariables = Exact<{
  txHash: Scalars['ID'];
}>;


export type getRecentTransactionQuery = { transaction?: Maybe<Pick<Transaction, 'id'>> };

export type getRecentEnvioQueryVariables = Exact<{
  txHash: Scalars['String'];
}>;


export type getRecentEnvioQuery = { EnvioTX: Array<Pick<EnvioTX, 'id'>> };

export type getRecordsByTagQueryVariables = Exact<{
  tag: Scalars['String'];
}>;


export type getRecordsByTagQuery = { Record: Array<Pick<Record, 'id' | 'tag' | 'hatId' | 'mdPointer' | 'mdProtocol'>> };

export type getShipFundsAvailableQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type getShipFundsAvailableQuery = { grantShip?: Maybe<Pick<GrantShip, 'totalAvailableFunds'>> };

export type getShipIdByHatIdQueryVariables = Exact<{
  hatId: Scalars['String'];
}>;


export type getShipIdByHatIdQuery = { grantShips: Array<Pick<GrantShip, 'id'>> };

export type ShipDashFragment = (
  Pick<GrantShip, 'id' | 'name' | 'status' | 'hatId' | 'shipContractAddress' | 'shipApplicationBytesData' | 'owner' | 'balance'>
  & { profileMetadata: Pick<RawMetadata, 'pointer'> }
);

export type getShipDashQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type getShipDashQuery = { grantShip?: Maybe<(
    Pick<GrantShip, 'id' | 'name' | 'status' | 'hatId' | 'shipContractAddress' | 'shipApplicationBytesData' | 'owner' | 'balance'>
    & { grants: Array<(
      Pick<Grant, 'id' | 'grantApplicationBytes' | 'lastUpdated' | 'grantStatus' | 'milestonesAmount' | 'hasResubmitted' | 'milestonesApproved' | 'amtDistributed' | 'amtAllocated' | 'currentMilestoneIndex'>
      & { projectId: (
        Pick<Project, 'id' | 'name'>
        & { metadata: Pick<RawMetadata, 'pointer'> }
      ), shipId: (
        Pick<GrantShip, 'id' | 'name' | 'shipContractAddress' | 'poolId' | 'totalAvailableFunds'>
        & { profileMetadata: Pick<RawMetadata, 'pointer'> }
      ), currentMilestoneRejectedReason?: Maybe<Pick<RawMetadata, 'pointer'>>, milestonesApprovedReason?: Maybe<Pick<RawMetadata, 'pointer'>>, facilitatorReason?: Maybe<Pick<RawMetadata, 'pointer'>>, shipApprovalReason?: Maybe<Pick<RawMetadata, 'pointer'>> }
    )>, profileMetadata: Pick<RawMetadata, 'pointer'> }
  )> };

export type getShipGrantsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type getShipGrantsQuery = { grantShip?: Maybe<{ grants: Array<(
      Pick<Grant, 'id' | 'grantApplicationBytes' | 'lastUpdated' | 'grantStatus' | 'milestonesAmount' | 'hasResubmitted' | 'milestonesApproved' | 'amtDistributed' | 'amtAllocated' | 'currentMilestoneIndex'>
      & { projectId: (
        Pick<Project, 'id' | 'name'>
        & { metadata: Pick<RawMetadata, 'pointer'> }
      ), shipId: (
        Pick<GrantShip, 'id' | 'name' | 'shipContractAddress' | 'poolId' | 'totalAvailableFunds'>
        & { profileMetadata: Pick<RawMetadata, 'pointer'> }
      ), currentMilestoneRejectedReason?: Maybe<Pick<RawMetadata, 'pointer'>>, milestonesApprovedReason?: Maybe<Pick<RawMetadata, 'pointer'>>, facilitatorReason?: Maybe<Pick<RawMetadata, 'pointer'>>, shipApprovalReason?: Maybe<Pick<RawMetadata, 'pointer'>> }
    )> }> };

export type getShipPoolIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type getShipPoolIdQuery = { grantShip?: Maybe<Pick<GrantShip, 'poolId'>> };

export type getUpdatesQueryVariables = Exact<{
  entityAddress: Scalars['Bytes'];
}>;


export type getUpdatesQuery = { updates: Array<(
    Pick<Update, 'id' | 'postedBy' | 'entityAddress' | 'timestamp'>
    & { content: Pick<RawMetadata, 'pointer'> }
  )> };

export type getUserDataQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Bytes']>;
}>;


export type getUserDataQuery = { projects: Array<(
    Pick<Project, 'id' | 'name' | 'profileId' | 'nonce' | 'anchor' | 'owner'>
    & { metadata: Pick<RawMetadata, 'protocol' | 'pointer'>, grants: Array<(
      Pick<Grant, 'grantStatus'>
      & { shipId: Pick<GrantShip, 'id'> }
    )> }
  )>, shipApplicants: Array<(
    Pick<GrantShip, 'id' | 'name' | 'status' | 'applicationSubmittedTime' | 'shipApplicationBytesData'>
    & { profileMetadata: Pick<RawMetadata, 'pointer'> }
  )> };

export type getUserVotesQueryVariables = Exact<{
  contestId: Scalars['String'];
  voterAddress: Scalars['String'];
}>;


export type getUserVotesQuery = { ShipVote: Array<Pick<ShipVote, 'id' | 'choice_id' | 'mdPointer' | 'mdProtocol' | 'amount'>> };

export type getVotersQueryVariables = Exact<{
  contestId: Scalars['String'];
}>;


export type getVotersQuery = { GSVoter: Array<(
    Pick<GSVoter, 'id'>
    & { votes: Array<(
      Pick<ShipVote, 'id' | 'amount' | 'mdPointer' | 'mdProtocol' | 'isRetractVote'>
      & { choice?: Maybe<Pick<ShipChoice, 'id'>> }
    )> }
  )> };

export type projectPageQueryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type projectPageQueryQuery = { project?: Maybe<(
    Pick<Project, 'id' | 'profileId' | 'name' | 'status' | 'owner'>
    & { metadata: Pick<RawMetadata, 'pointer'>, members?: Maybe<Pick<ProfileMemberGroup, 'addresses'>> }
  )> };

export type shipPageQueryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type shipPageQueryQuery = { grantShip?: Maybe<(
    Pick<GrantShip, 'id' | 'name' | 'status' | 'shipContractAddress' | 'shipApplicationBytesData' | 'owner' | 'balance' | 'totalAvailableFunds' | 'totalAllocated' | 'totalDistributed' | 'totalRoundAmount'>
    & { profileMetadata: Pick<RawMetadata, 'pointer'>, alloProfileMembers?: Maybe<Pick<ProfileMemberGroup, 'addresses'>> }
  )> };

export type ShipsPageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ShipsPageQueryQuery = { grantShips: Array<(
    Pick<GrantShip, 'id' | 'name' | 'status' | 'shipContractAddress' | 'shipApplicationBytesData' | 'owner' | 'balance' | 'totalAvailableFunds' | 'totalAllocated' | 'totalDistributed' | 'totalRoundAmount'>
    & { profileMetadata: Pick<RawMetadata, 'pointer'>, alloProfileMembers?: Maybe<Pick<ProfileMemberGroup, 'addresses'>> }
  )> };

export const BaseShipDataFragmentDoc = gql`
    fragment BaseShipData on GrantShip {
  id
  name
  status
  shipContractAddress
  shipApplicationBytesData
  profileMetadata {
    pointer
  }
  owner
  alloProfileMembers {
    addresses
  }
  balance
  totalAvailableFunds
  totalAllocated
  totalDistributed
  totalRoundAmount
}
    ` as unknown as DocumentNode<BaseShipDataFragment, unknown>;
export const UpdateFragmentDoc = gql`
    fragment Update on Update {
  id
  content {
    pointer
  }
  postedBy
  entityAddress
  timestamp
}
    ` as unknown as DocumentNode<UpdateFragment, unknown>;
export const GrantDashFragmentDoc = gql`
    fragment GrantDash on Grant {
  id
  grantApplicationBytes
  lastUpdated
  grantStatus
  milestonesAmount
  hasResubmitted
  projectId {
    id
    name
    metadata {
      pointer
    }
  }
  shipId {
    id
    name
    shipContractAddress
    poolId
    profileMetadata {
      pointer
    }
    totalAvailableFunds
  }
  milestonesApproved
  amtDistributed
  amtAllocated
  currentMilestoneIndex
  currentMilestoneRejectedReason {
    pointer
  }
  milestonesApprovedReason {
    pointer
  }
  facilitatorReason {
    pointer
  }
  shipApprovalReason {
    pointer
  }
}
    ` as unknown as DocumentNode<GrantDashFragment, unknown>;
export const FacShipDataFragmentDoc = gql`
    fragment FacShipData on GrantShip {
  id
  name
  status
  applicationSubmittedTime
  shipApplicationBytesData
  profileMetadata {
    pointer
  }
}
    ` as unknown as DocumentNode<FacShipDataFragment, unknown>;
export const FeedDataFragmentDoc = gql`
    fragment FeedData on FeedItem {
  id
  content
  timestamp
  content
  sender
  tag
  details
  subjectMetadataPointer
  subject {
    id
    name
    type
  }
  object {
    id
    name
    type
  }
  embed {
    key
    pointer
    protocol
    content
  }
}
    ` as unknown as DocumentNode<FeedDataFragment, unknown>;
export const GameManagerDataFragmentDoc = gql`
    fragment GameManagerData on GameManager {
  id
  gameFacilitatorId
  rootAccount
  tokenAddress
  currentRoundId
  poolFunds
  currentRound {
    id
    startTime
    endTime
    totalRoundAmount
    gameStatus
    ships {
      anchor
    }
  }
}
    ` as unknown as DocumentNode<GameManagerDataFragment, unknown>;
export const GmDeploymentFragmentDoc = gql`
    fragment GmDeployment on GmDeployment {
  id
  address
  version {
    name
    address
  }
  blockNumber
  transactionHash
  timestamp
  hasPool
  poolId
  profileId
  poolMetadata {
    pointer
  }
  poolProfileMetadata {
    pointer
  }
}
    ` as unknown as DocumentNode<GmDeploymentFragment, unknown>;
export const ProjectDetailsFragmentDoc = gql`
    fragment ProjectDetails on Project {
  id
  name
  profileId
  nonce
  anchor
  owner
}
    ` as unknown as DocumentNode<ProjectDetailsFragment, unknown>;
export const RawMetadataFragmentDoc = gql`
    fragment RawMetadata on RawMetadata {
  protocol
  pointer
}
    ` as unknown as DocumentNode<RawMetadataFragment, unknown>;
export const ShipDashFragmentDoc = gql`
    fragment ShipDash on GrantShip {
  id
  name
  status
  hatId
  shipContractAddress
  shipApplicationBytesData
  profileMetadata {
    pointer
  }
  owner
  balance
}
    ` as unknown as DocumentNode<ShipDashFragment, unknown>;
export const facDashShipDataDocument = gql`
    query facDashShipData {
  shipApplicants: grantShips(where: {isAwaitingApproval: true}) {
    ...FacShipData
  }
  approvedShips: grantShips(
    where: {isApproved: true, hasSubmittedApplication: true}
  ) {
    ...FacShipData
    approvedTime
    shipAllocation
    totalAvailableFunds
    applicationReviewReason {
      pointer
    }
  }
  rejectedShips: grantShips(where: {isRejected: true}) {
    ...FacShipData
    rejectedTime
    applicationReviewReason {
      pointer
    }
  }
}
    ${FacShipDataFragmentDoc}` as unknown as DocumentNode<facDashShipDataQuery, facDashShipDataQueryVariables>;
export const getFacilitatorGrantsDocument = gql`
    query getFacilitatorGrants {
  requiresAction: grants(where: {grantStatus: 3}) {
    ...GrantDash
  }
  rejected: grants(where: {grantStatus: 4}) {
    ...GrantDash
  }
  approved: grants(where: {grantStatus_gt: 4}) {
    ...GrantDash
  }
}
    ${GrantDashFragmentDoc}` as unknown as DocumentNode<getFacilitatorGrantsQuery, getFacilitatorGrantsQueryVariables>;
export const getFeedDocument = gql`
    query getFeed($first: Int, $skip: Int, $orderBy: FeedItem_orderBy, $orderDirection: OrderDirection) {
  feedItems(
    first: $first
    skip: $skip
    orderBy: $orderBy
    orderDirection: $orderDirection
  ) {
    ...FeedData
  }
}
    ${FeedDataFragmentDoc}` as unknown as DocumentNode<getFeedQuery, getFeedQueryVariables>;
export const getEntityFeedDocument = gql`
    query getEntityFeed($first: Int, $skip: Int, $orderBy: FeedItem_orderBy, $orderDirection: OrderDirection, $entityId: ID!) {
  subjectItems: feedItems(
    first: $first
    skip: $skip
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: {subjectId: $entityId}
  ) {
    ...FeedData
  }
  objectItems: feedItems(
    skip: $skip
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: {objectId: $entityId}
  ) {
    ...FeedData
  }
}
    ${FeedDataFragmentDoc}` as unknown as DocumentNode<getEntityFeedQuery, getEntityFeedQueryVariables>;
export const getGameManagerDocument = gql`
    query getGameManager($id: ID!) {
  gameManager(id: $id) {
    ...GameManagerData
  }
}
    ${GameManagerDataFragmentDoc}` as unknown as DocumentNode<getGameManagerQuery, getGameManagerQueryVariables>;
export const getGmDeploymentsDocument = gql`
    query getGmDeployments {
  gmDeployments {
    ...GmDeployment
  }
}
    ${GmDeploymentFragmentDoc}` as unknown as DocumentNode<getGmDeploymentsQuery, getGmDeploymentsQueryVariables>;
export const getGmVersionsDocument = gql`
    query getGmVersions {
  gmVersions {
    id
    name
    address
  }
}
    ` as unknown as DocumentNode<getGmVersionsQuery, getGmVersionsQueryVariables>;
export const getGrantDocument = gql`
    query getGrant($id: ID!) {
  grant(id: $id) {
    ...GrantDash
  }
}
    ${GrantDashFragmentDoc}` as unknown as DocumentNode<getGrantQuery, getGrantQueryVariables>;
export const getGsVotingDocument = gql`
    query getGsVoting($id: String!) {
  GrantShipsVoting(where: {id: {_eq: $id}}) {
    id
    choices {
      active
      id
      mdPointer
      mdProtocol
      voteTally
    }
    contest {
      votesModule_id
      choicesModule_id
      pointsModule_id
      executionModule_id
      contestStatus
    }
    endTime
    startTime
    totalVotes
    voteDuration
    voteTokenAddress
    votingCheckpoint
    isVotingActive
    isSBTVoting
  }
}
    ` as unknown as DocumentNode<getGsVotingQuery, getGsVotingQueryVariables>;
export const getProjectGrantsDocument = gql`
    query getProjectGrants($id: ID!) {
  project(id: $id) {
    grants {
      ...GrantDash
    }
  }
}
    ${GrantDashFragmentDoc}` as unknown as DocumentNode<getProjectGrantsQuery, getProjectGrantsQueryVariables>;
export const GetProjectsDocument = gql`
    query GetProjects {
  projects {
    ...ProjectDetails
    metadata {
      ...RawMetadata
    }
  }
}
    ${ProjectDetailsFragmentDoc}
${RawMetadataFragmentDoc}` as unknown as DocumentNode<GetProjectsQuery, GetProjectsQueryVariables>;
export const GetUserProjectsDocument = gql`
    query GetUserProjects($id: Bytes!) {
  projects(where: {owner: $id}) {
    ...ProjectDetails
    metadata {
      ...RawMetadata
    }
  }
}
    ${ProjectDetailsFragmentDoc}
${RawMetadataFragmentDoc}` as unknown as DocumentNode<GetUserProjectsQuery, GetUserProjectsQueryVariables>;
export const getRecentTransactionDocument = gql`
    query getRecentTransaction($txHash: ID!) {
  transaction(id: $txHash) {
    id
  }
}
    ` as unknown as DocumentNode<getRecentTransactionQuery, getRecentTransactionQueryVariables>;
export const getRecentEnvioDocument = gql`
    query getRecentEnvio($txHash: String!) {
  EnvioTX(where: {id: {_eq: $txHash}}) {
    id
  }
}
    ` as unknown as DocumentNode<getRecentEnvioQuery, getRecentEnvioQueryVariables>;
export const getRecordsByTagDocument = gql`
    query getRecordsByTag($tag: String!) {
  Record(where: {tag: {_eq: $tag}}, order_by: {db_write_timestamp: desc}) {
    id
    tag
    hatId
    mdPointer
    mdProtocol
  }
}
    ` as unknown as DocumentNode<getRecordsByTagQuery, getRecordsByTagQueryVariables>;
export const getShipFundsAvailableDocument = gql`
    query getShipFundsAvailable($id: ID!) {
  grantShip(id: $id) {
    totalAvailableFunds
  }
}
    ` as unknown as DocumentNode<getShipFundsAvailableQuery, getShipFundsAvailableQueryVariables>;
export const getShipIdByHatIdDocument = gql`
    query getShipIdByHatId($hatId: String!) {
  grantShips(where: {hatId: $hatId}) {
    id
  }
}
    ` as unknown as DocumentNode<getShipIdByHatIdQuery, getShipIdByHatIdQueryVariables>;
export const getShipDashDocument = gql`
    query getShipDash($id: ID!) {
  grantShip(id: $id) {
    ...ShipDash
    grants {
      ...GrantDash
    }
  }
}
    ${ShipDashFragmentDoc}
${GrantDashFragmentDoc}` as unknown as DocumentNode<getShipDashQuery, getShipDashQueryVariables>;
export const getShipGrantsDocument = gql`
    query getShipGrants($id: ID!) {
  grantShip(id: $id) {
    grants(where: {grantStatus_gte: 5}) {
      ...GrantDash
    }
  }
}
    ${GrantDashFragmentDoc}` as unknown as DocumentNode<getShipGrantsQuery, getShipGrantsQueryVariables>;
export const getShipPoolIdDocument = gql`
    query getShipPoolId($id: ID!) {
  grantShip(id: $id) {
    poolId
  }
}
    ` as unknown as DocumentNode<getShipPoolIdQuery, getShipPoolIdQueryVariables>;
export const getUpdatesDocument = gql`
    query getUpdates($entityAddress: Bytes!) {
  updates(
    where: {entityAddress: $entityAddress}
    orderBy: timestamp
    orderDirection: desc
  ) {
    ...Update
  }
}
    ${UpdateFragmentDoc}` as unknown as DocumentNode<getUpdatesQuery, getUpdatesQueryVariables>;
export const getUserDataDocument = gql`
    query getUserData($id: Bytes) {
  projects: projects(where: {owner: $id}) {
    ...ProjectDetails
    metadata {
      ...RawMetadata
    }
    grants {
      grantStatus
      shipId {
        id
      }
    }
  }
  shipApplicants: grantShips(where: {isAwaitingApproval: true, owner: $id}) {
    ...FacShipData
  }
}
    ${ProjectDetailsFragmentDoc}
${RawMetadataFragmentDoc}
${FacShipDataFragmentDoc}` as unknown as DocumentNode<getUserDataQuery, getUserDataQueryVariables>;
export const getUserVotesDocument = gql`
    query getUserVotes($contestId: String!, $voterAddress: String!) {
  ShipVote(where: {voter_id: {_eq: $voterAddress}, contest_id: {_eq: $contestId}}) {
    id
    choice_id
    mdPointer
    mdProtocol
    amount
  }
}
    ` as unknown as DocumentNode<getUserVotesQuery, getUserVotesQueryVariables>;
export const getVotersDocument = gql`
    query getVoters($contestId: String!) {
  GSVoter(where: {votes: {contest_id: {_eq: $contestId}}}) {
    id
    votes(where: {contest_id: {_eq: $contestId}, isRetractVote: {_eq: false}}) {
      id
      amount
      mdPointer
      mdProtocol
      isRetractVote
      choice {
        id
      }
    }
  }
}
    ` as unknown as DocumentNode<getVotersQuery, getVotersQueryVariables>;
export const projectPageQueryDocument = gql`
    query projectPageQuery($id: ID!) {
  project(id: $id) {
    id
    profileId
    name
    status
    owner
    metadata {
      pointer
    }
    members {
      addresses
    }
  }
}
    ` as unknown as DocumentNode<projectPageQueryQuery, projectPageQueryQueryVariables>;
export const shipPageQueryDocument = gql`
    query shipPageQuery($id: ID!) {
  grantShip(id: $id) {
    ...BaseShipData
  }
}
    ${BaseShipDataFragmentDoc}` as unknown as DocumentNode<shipPageQueryQuery, shipPageQueryQueryVariables>;
export const ShipsPageQueryDocument = gql`
    query ShipsPageQuery {
  grantShips(where: {isApproved: true}) {
    ...BaseShipData
  }
}
    ${BaseShipDataFragmentDoc}` as unknown as DocumentNode<ShipsPageQueryQuery, ShipsPageQueryQueryVariables>;




























export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    facDashShipData(variables?: facDashShipDataQueryVariables, options?: C): Promise<facDashShipDataQuery> {
      return requester<facDashShipDataQuery, facDashShipDataQueryVariables>(facDashShipDataDocument, variables, options) as Promise<facDashShipDataQuery>;
    },
    getFacilitatorGrants(variables?: getFacilitatorGrantsQueryVariables, options?: C): Promise<getFacilitatorGrantsQuery> {
      return requester<getFacilitatorGrantsQuery, getFacilitatorGrantsQueryVariables>(getFacilitatorGrantsDocument, variables, options) as Promise<getFacilitatorGrantsQuery>;
    },
    getFeed(variables?: getFeedQueryVariables, options?: C): Promise<getFeedQuery> {
      return requester<getFeedQuery, getFeedQueryVariables>(getFeedDocument, variables, options) as Promise<getFeedQuery>;
    },
    getEntityFeed(variables: getEntityFeedQueryVariables, options?: C): Promise<getEntityFeedQuery> {
      return requester<getEntityFeedQuery, getEntityFeedQueryVariables>(getEntityFeedDocument, variables, options) as Promise<getEntityFeedQuery>;
    },
    getGameManager(variables: getGameManagerQueryVariables, options?: C): Promise<getGameManagerQuery> {
      return requester<getGameManagerQuery, getGameManagerQueryVariables>(getGameManagerDocument, variables, options) as Promise<getGameManagerQuery>;
    },
    getGmDeployments(variables?: getGmDeploymentsQueryVariables, options?: C): Promise<getGmDeploymentsQuery> {
      return requester<getGmDeploymentsQuery, getGmDeploymentsQueryVariables>(getGmDeploymentsDocument, variables, options) as Promise<getGmDeploymentsQuery>;
    },
    getGmVersions(variables?: getGmVersionsQueryVariables, options?: C): Promise<getGmVersionsQuery> {
      return requester<getGmVersionsQuery, getGmVersionsQueryVariables>(getGmVersionsDocument, variables, options) as Promise<getGmVersionsQuery>;
    },
    getGrant(variables: getGrantQueryVariables, options?: C): Promise<getGrantQuery> {
      return requester<getGrantQuery, getGrantQueryVariables>(getGrantDocument, variables, options) as Promise<getGrantQuery>;
    },
    getGsVoting(variables: getGsVotingQueryVariables, options?: C): Promise<getGsVotingQuery> {
      return requester<getGsVotingQuery, getGsVotingQueryVariables>(getGsVotingDocument, variables, options) as Promise<getGsVotingQuery>;
    },
    getProjectGrants(variables: getProjectGrantsQueryVariables, options?: C): Promise<getProjectGrantsQuery> {
      return requester<getProjectGrantsQuery, getProjectGrantsQueryVariables>(getProjectGrantsDocument, variables, options) as Promise<getProjectGrantsQuery>;
    },
    GetProjects(variables?: GetProjectsQueryVariables, options?: C): Promise<GetProjectsQuery> {
      return requester<GetProjectsQuery, GetProjectsQueryVariables>(GetProjectsDocument, variables, options) as Promise<GetProjectsQuery>;
    },
    GetUserProjects(variables: GetUserProjectsQueryVariables, options?: C): Promise<GetUserProjectsQuery> {
      return requester<GetUserProjectsQuery, GetUserProjectsQueryVariables>(GetUserProjectsDocument, variables, options) as Promise<GetUserProjectsQuery>;
    },
    getRecentTransaction(variables: getRecentTransactionQueryVariables, options?: C): Promise<getRecentTransactionQuery> {
      return requester<getRecentTransactionQuery, getRecentTransactionQueryVariables>(getRecentTransactionDocument, variables, options) as Promise<getRecentTransactionQuery>;
    },
    getRecentEnvio(variables: getRecentEnvioQueryVariables, options?: C): Promise<getRecentEnvioQuery> {
      return requester<getRecentEnvioQuery, getRecentEnvioQueryVariables>(getRecentEnvioDocument, variables, options) as Promise<getRecentEnvioQuery>;
    },
    getRecordsByTag(variables: getRecordsByTagQueryVariables, options?: C): Promise<getRecordsByTagQuery> {
      return requester<getRecordsByTagQuery, getRecordsByTagQueryVariables>(getRecordsByTagDocument, variables, options) as Promise<getRecordsByTagQuery>;
    },
    getShipFundsAvailable(variables: getShipFundsAvailableQueryVariables, options?: C): Promise<getShipFundsAvailableQuery> {
      return requester<getShipFundsAvailableQuery, getShipFundsAvailableQueryVariables>(getShipFundsAvailableDocument, variables, options) as Promise<getShipFundsAvailableQuery>;
    },
    getShipIdByHatId(variables: getShipIdByHatIdQueryVariables, options?: C): Promise<getShipIdByHatIdQuery> {
      return requester<getShipIdByHatIdQuery, getShipIdByHatIdQueryVariables>(getShipIdByHatIdDocument, variables, options) as Promise<getShipIdByHatIdQuery>;
    },
    getShipDash(variables: getShipDashQueryVariables, options?: C): Promise<getShipDashQuery> {
      return requester<getShipDashQuery, getShipDashQueryVariables>(getShipDashDocument, variables, options) as Promise<getShipDashQuery>;
    },
    getShipGrants(variables: getShipGrantsQueryVariables, options?: C): Promise<getShipGrantsQuery> {
      return requester<getShipGrantsQuery, getShipGrantsQueryVariables>(getShipGrantsDocument, variables, options) as Promise<getShipGrantsQuery>;
    },
    getShipPoolId(variables: getShipPoolIdQueryVariables, options?: C): Promise<getShipPoolIdQuery> {
      return requester<getShipPoolIdQuery, getShipPoolIdQueryVariables>(getShipPoolIdDocument, variables, options) as Promise<getShipPoolIdQuery>;
    },
    getUpdates(variables: getUpdatesQueryVariables, options?: C): Promise<getUpdatesQuery> {
      return requester<getUpdatesQuery, getUpdatesQueryVariables>(getUpdatesDocument, variables, options) as Promise<getUpdatesQuery>;
    },
    getUserData(variables?: getUserDataQueryVariables, options?: C): Promise<getUserDataQuery> {
      return requester<getUserDataQuery, getUserDataQueryVariables>(getUserDataDocument, variables, options) as Promise<getUserDataQuery>;
    },
    getUserVotes(variables: getUserVotesQueryVariables, options?: C): Promise<getUserVotesQuery> {
      return requester<getUserVotesQuery, getUserVotesQueryVariables>(getUserVotesDocument, variables, options) as Promise<getUserVotesQuery>;
    },
    getVoters(variables: getVotersQueryVariables, options?: C): Promise<getVotersQuery> {
      return requester<getVotersQuery, getVotersQueryVariables>(getVotersDocument, variables, options) as Promise<getVotersQuery>;
    },
    projectPageQuery(variables: projectPageQueryQueryVariables, options?: C): Promise<projectPageQueryQuery> {
      return requester<projectPageQueryQuery, projectPageQueryQueryVariables>(projectPageQueryDocument, variables, options) as Promise<projectPageQueryQuery>;
    },
    shipPageQuery(variables: shipPageQueryQueryVariables, options?: C): Promise<shipPageQueryQuery> {
      return requester<shipPageQueryQuery, shipPageQueryQueryVariables>(shipPageQueryDocument, variables, options) as Promise<shipPageQueryQuery>;
    },
    ShipsPageQuery(variables?: ShipsPageQueryQueryVariables, options?: C): Promise<ShipsPageQueryQuery> {
      return requester<ShipsPageQueryQuery, ShipsPageQueryQueryVariables>(ShipsPageQueryDocument, variables, options) as Promise<ShipsPageQueryQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;