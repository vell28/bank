import { schema } from 'normalizr';

import { CurrencyCodeType } from 'modules/currencies';
import { IBalance } from './balance';

export enum AccountStatus {
  ACTIVE = 'ACTIVE',
  CLOSED = 'CLOSED',
  CLOSED_BY_CUSTOMER = 'CLOSED_BY_CUSTOMER',
  LOST = 'LOST',
  LOCKED = 'LOCKED',
}

export type AccountStatusType =
  | AccountStatus.ACTIVE
  | AccountStatus.CLOSED
  | AccountStatus.CLOSED_BY_CUSTOMER
  | AccountStatus.LOCKED
  | AccountStatus.LOST;

export enum AccountColors {
  DEFAULT = 'DEFAULT',
}

enum AvailableOperation {
  PAYMENT_SEPA = 'PAYMENT_SEPA',
  PAYMENT_SWIFT = 'PAYMENT_SWIFT',
  PAYMENT_CARD = 'PAYMENT_CARD',
  PAYMENT_CONTACT = 'PAYMENT_CONTACT',
  TOPUP_BY_CARD = 'TOPUP_BY_CARD',
  TOPUP_BY_CODE = 'TOPUP_BY_CODE',
  MONEY_REQUEST = 'MONEY_REQUEST',
  TOPUP_BY_TRANSFER = 'TOPUP_BY_TRANSFER',
}

type AvailableOperationType =
  | AvailableOperation.PAYMENT_SEPA
  | AvailableOperation.PAYMENT_SWIFT
  | AvailableOperation.PAYMENT_CONTACT
  | AvailableOperation.PAYMENT_CARD
  | AvailableOperation.MONEY_REQUEST
  | AvailableOperation.TOPUP_BY_CARD
  | AvailableOperation.TOPUP_BY_CODE
  | AvailableOperation.TOPUP_BY_TRANSFER;

export enum AccountTypes {
  PHYSICAL = 'PHYSICAL',
  JURIDICAL = 'JURIDICAL',
}

export type AccountType = AccountTypes.JURIDICAL | AccountTypes.PHYSICAL;

export interface IAccount {
  id: string;
  accountType: AccountType;
  number: string;
  title?: string;
  status: AccountStatusType;
  currency: {
    code: CurrencyCodeType;
  };
  clientId: string;
  color: AccountColors.DEFAULT;
  accountName: string;
  bonusProgramActivate: boolean;
  balance: number;
  balanceHold: number;
  accruedInterest: number | null;
  availableBalance: number;
  balances: IBalance[];
  createdAt: string;
  availableOperations: AvailableOperationType[];
}

export interface IUpdateBalanceResponse {
  balances: IBalance[];
}

export interface IAccountsNormalize {
  [key: string]: IAccount;
}

export const accountSchema = new schema.Entity('account', {}, { idAttribute: 'id' });
export const accountListSchema = new schema.Array(accountSchema);
