export interface ICardData {
  cardNumber?: string;
  beneficiaryName?: string;
  expiresDate?: string;
  cvv?: string;
}

export interface IBankData {
  beneficiaryName?: string;
  iban?: string;
  country?: string;
  city?: string;
  address?: string;
  swiftCode?: string;
  beneficiaryBank?: string;
  isIntermediaryBank?: boolean;
  intermediarySwift?: string;
  intermediaryBank?: string;
  intermediaryAccount?: string;
  commissionType?: SwiftCommissionType;
  urgency?: SwiftUrgencyType;
  purpose?: string;
  transferDetails?: string;
}

export interface IRate {
  currencyFrom: string;
  currencyTo: string;
  fromAmount2: number;
  fromAmount3:number;
  fromAmount4: number;
  rate: number;
  rate2: number;
  rate3: number;
  rate4: number;
}

export type IRates = IRate | [];

export interface ITransfer {
  card: ICardData;
  phone: string;
  value: string;
  purpose: string;
  bank: IBankData;
  rates: IRates;
}

export enum SwiftCommissionTypes {
  BENEFICIARY = 'BENEFICIARY',
  SHARED = 'SHARED',
  SENDER = 'SENDER',
}

export type SwiftCommissionType =
  | SwiftCommissionTypes.BENEFICIARY
  | SwiftCommissionTypes.SHARED
  | SwiftCommissionTypes.SENDER;

export enum SwiftUrgencyTypes {
  NORMAL = 'Normal',
  URGENT = 'Urgent',
}

export type SwiftUrgencyType = SwiftUrgencyTypes.NORMAL | SwiftUrgencyTypes.URGENT;
