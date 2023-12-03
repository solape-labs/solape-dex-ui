import { IdlAccounts, IdlTypes } from '@coral-xyz/anchor';
import { PublicKey } from '@solana/web3.js';
import { OpenbookV2 } from './idl/openbook_v2';

export type AccountWithKey<T> = { publicKey: PublicKey; account: T };

export type OrderBookEntry = {
    price: number;  // Replace 'any' with specific type, like number
    size: number;   // Replace 'any' with specific type, like number
  };
  
  export type OrderBookSide = {
    orders: OrderBookEntry[];  // Array of orders on either the bid or ask side
  };
  
  export type OrderBook = {
    bids: OrderBookSide;  // Orders on the bid side
    asks: OrderBookSide;  // Orders on the ask side
    topBid?: number;      // Optional top bid price
    topAsk?: number;      // Optional top ask price
  };
  
  export type Markets = {
    market: MarketAccount;
    asks: LeafNode[];  // Array of ask orders
    bids: LeafNode[];  // Array of bid orders
  };
  
  export type AllMarketsInfo = { [proposalKey: string]: Markets | undefined };

/// Avoid importing Openbook because it uses a NodeWallet
export type PlaceOrderArgs = IdlTypes<OpenbookV2>['PlaceOrderArgs'];
export type PlaceOrderPeggedArgs = IdlTypes<OpenbookV2>['PlaceOrderPeggedArgs'];
export type OracleConfigParams = IdlTypes<OpenbookV2>['OracleConfigParams'];
export type OracleConfig = IdlTypes<OpenbookV2>['OracleConfig'];
export type MarketAccount = IdlAccounts<OpenbookV2>['market'];
export type MarketAccountWithKey = AccountWithKey<MarketAccount>;
export type OpenOrdersAccount = IdlAccounts<OpenbookV2>['openOrdersAccount'];
export type OpenOrdersAccountWithKey = AccountWithKey<OpenOrdersAccount>;
export type AllOrders = { [proposalKey: string]: OpenOrdersAccountWithKey[] };
export type OpenOrdersIndexerAccount = IdlAccounts<OpenbookV2>['openOrdersIndexer'];
export type EventHeapAccount = IdlAccounts<OpenbookV2>['eventHeap'];
export type BookSideAccount = IdlAccounts<OpenbookV2>['bookSide'];
export type LeafNode = IdlTypes<OpenbookV2>['LeafNode'];
export type AnyNode = IdlTypes<OpenbookV2>['AnyNode'];
export type FillEvent = IdlTypes<OpenbookV2>['FillEvent'];
export type OutEvent = IdlTypes<OpenbookV2>['OutEvent'];

export enum InstructionFieldTypes {
  Text,
  Number,
  BigNumber,
  Key,
}
export type InstructionFieldType = {
  type: InstructionFieldTypes;
  label: string;
  description: string;
  deserialize: (value: string) => any;
};
