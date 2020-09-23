import { CurrencyCodeType } from 'modules/currencies';
import { IAccount, AccountType } from '../../organizations/entities';

export type TransactionStatusType =
  | 'PROCESSING'
  | 'COMPLETED'
  | 'BANK_CANCELLED'
  | 'INSUFFICIENT_FUNDS'
  | 'REFUND'
  | 'HOLD'
  | 'UNKNOWN';

export type TransactionPaymentType = 'TRANSFER' | 'CARD_OPERATION' | 'HOLD' | 'CONVERSION' | 'SEPA' | 'SWIFT';

export interface IOpenApi {
  type: string;
  toCard: string | null;
  toPhone: string | null;
  subType: string | null;
  externalOwnerID: string | null;
  fromCardPan: string | null;
}

export interface IRepeatPayment {
  type: string;
  fromPhone: string;
  account: string;
  fromCardPan: string | null;
  fromCardId: string | null;
  beneficiaryName: string | null;
  beneficiaryAccount: string | null;
  country: string | null;
  city: string | null;
  address: string | null;
  swiftCode: string | null;
  beneficiaryBank: string | null;
  intermediaryBank: string | null;
  intermediarySwift: string | null;
  intermediaryAccount: string | null;
  commissionType: string | null;
  urgency: string | null;
  iban: string | null;
  phoneNumber: string | null;
  cardNumber: string | null;
  currencyCode: CurrencyCodeType;
  amount: number;
  purpose: string | null;
  transferDetails: string | null;
}

export interface ITransaction {
  id: string;
  accountId: string;
  amount: number;
  fee: number;
  status: TransactionStatusType;
  paymentType: TransactionPaymentType;
  fromNumber: string;
  fromName: string;
  fromBank: string;
  toNumber: string;
  toName: string;
  toBank: string;
  currency: {
    code: CurrencyCodeType;
  };
  simpleAccount?: IAccount;
  clientId: string;
  description: string;
  executedAt: string;
  referenceNumber: string;
  paymentToRepeat: IRepeatPayment | null;
  openapiData: IOpenApi | null;
  operationType: string | null;
  fromPanDisplay: string | null;
}

export type ITransactionList = ITransaction[];

export interface ITransactionPagination {
  maxPageNumber: number;
  pageSize: number;
  pageNumber: number;
  length: number;
}

export interface IHistoryFilter {
  date?: string;
  accountType?: AccountType;
  currency?: CurrencyCodeType;
  isShown: boolean;
}

export interface IShownBtns {
  [key: string]: boolean;
}

// transaction id -> settings
export interface IHistorySetting {
  shownBtns: IShownBtns;
  receiptId?: string;
  repeatId?: string;
}

export interface ITransactionResponse extends ITransactionPagination {
  content: ITransactionList;
}

export interface IOrderedTransactions {
  [key: string]: ITransactionList;
}
