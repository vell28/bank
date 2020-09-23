export interface IAmount {
  sum: {
    currency: {
      code: string;
    };
    value: string;
  };
}

export interface IPaymentToCardData {
  account: string;
  fromCardId: string;
  cardNumber: string;
  beneficiaryName: string;
  amount: IAmount;
  purpose: string;
}

export interface IPaymentContact<T> {
  payment_contact: T;
}

export interface IPaymentSepa<T> {
  payment_sepa: T;
}

export interface IPaymentSwift<T> {
  payment_swift: T;
}

export interface IPaymentToContactData {
  account: string;
  phoneNumber: string;
  amount: IAmount;
  purpose: string;
}

export interface IConfirmHeader {
  'X-Confirmation-Code': string;
  'X-Confirmation-Token': string;
}

export interface IPaymentSepaData {
  account: string;
  beneficiaryName: string;
  iban: string;
  amount: IAmount;
  purpose: string;
  transferDetails: string;
}

export interface IPaymentSwiftData {
  account: string;
  beneficiaryName: string;
  beneficiaryAccount: string;
  country: string;
  city: string;
  address: string;
  swiftCode: string;
  beneficiaryBank: string;
  intermediarySwift: string;
  intermediaryBank: string;
  intermediaryAccount: string;
  commissionType: string;
  urgency: string;
  amount: IAmount;
  purpose: string;
}
