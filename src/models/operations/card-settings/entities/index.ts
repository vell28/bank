import { CurrencyCodeType } from 'modules/currencies';
import { AccountStatusType, IBalance } from 'models/organizations/entities';

export enum CardProduct {
  MAIN = 'MAIN',
  ADDITIONAL = 'ADDITIONAL',
  FAMILY = 'FAMILY',
  KIDS = 'KIDS',
}

export type CardProductType = CardProduct.MAIN | CardProduct.ADDITIONAL | CardProduct.FAMILY | CardProduct.KIDS;

export interface ICardOwner {
  embossedName: string;
}

export enum Limit {
  DAY = 'DAY',
  MONTH = 'MONTH',
  FREE_ATM_WITHDRAWAL = 'FREE_ATM_WITHDRAWAL',
}

export type LimitType = Limit.DAY | Limit.MONTH | Limit.FREE_ATM_WITHDRAWAL;

export interface ILimit {
  type: LimitType;
  title: null | string;
  maxValue: number;
  usedValue: number;
  preferredMaxValues?: number[];
}

export interface ILimitData {
  type: LimitType;
  maxValue: string;
}

export interface ICardOptions {
  limits?: {
    disable?: boolean;
    disable5min?: boolean;
    disableOneTime?: boolean;
  };
}

export interface ICard {
  accountId: string;
  availableBalance: number;
  backgroundImage?: string;
  balance: number;
  balanceHold: number;
  balances: IBalance[];
  clientId: string;
  createdAt?: string;
  currency: {
    code: CurrencyCodeType;
  };
  expireAt?: string;
  id: string;
  limits: ILimit[];
  number?: string;
  options: ICardOptions;
  owner: ICardOwner;
  paySystem: string;
  plasticStatus: string;
  productType: CardProductType;
  status: AccountStatusType;
  title?: string;
}

export interface ICardUnmasked {
  number: string;
  pin: string | null;
  cvc: string;
  expireAt: string;
  owner: ICardOwner;
}
