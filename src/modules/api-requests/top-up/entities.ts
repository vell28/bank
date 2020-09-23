import { CurrencyCodeType } from 'modules/currencies';

export interface ITopUpFromCardData {
  amount: string;
  currency: string;
  topupFromCard: {
    pan: string;
    expireDate: string;
    cvv2: string;
    isHolder: boolean;
    holderName?: string;
    holderCountry?: string;
    holderCity?: string;
  };
  topupToAccountId: string;
}

export interface ITopUpRequestData {
  amount: string;
  currency: CurrencyCodeType;
  description: string;
  accountId: string;
  email: string;
  initiatorName: string;
}

export interface ITopUpRequestResponse {
  uuid: string;
}
