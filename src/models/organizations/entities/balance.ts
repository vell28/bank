import { CurrencyCodeType } from 'modules/currencies';

export interface IBalance {
  currency: CurrencyCodeType;
  balance: number;
  balanceHold: number;
  availableBalance: number;
}

export interface IAccountBalances {
  [key: string]: IBalance[];
}
