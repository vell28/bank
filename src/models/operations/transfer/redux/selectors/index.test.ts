import { accountsData } from 'models/organizations/mock';
import { emptyStore } from 'modules/store/emptyStore';
import { IStore } from 'modules/store/types';
import {
  getTransferAmountByValue,
  getCard,
  getPaymentCardData,
  getPaymentSepaData,
  getPaymentSwiftData,
  getPaymentContactData,
} from '.';

const cardData = {
  cardNumber: '123 123',
  beneficiaryName: 'Test',
  expiresDate: '',
  cvv: '000',
};

const phone = '123123123';

const store: IStore = {
  ...emptyStore,
  operations: {
    ...emptyStore.operations,
    transfer: {
      isLoading: false,
      isSuccess: false,
      isError: false,
      data: {
        card: cardData,
        purpose: 'test',
        value: '10',
        phone,
        bank: {},
      },
      errors: [],
    },
  },
  router: {
    action: 'PUSH',
    location: {
      pathname: `/banking/account/${accountsData[0].id}/EUR`,
      search: '',
      hash: '',
      key: '',
      state: '',
    },
  },
};

const sepaData = {
  beneficiaryName: 'beneficiaryName',
  iban: 'MT422PAPY368360000026763123123',
  purpose: 'purpose',
  transferDetails: 'transferDetails',
};

const sepaStore: IStore = {
  ...store,
  operations: {
    ...emptyStore.operations,
    transfer: {
      isLoading: false,
      isSuccess: false,
      isError: false,
      data: {
        card: cardData,
        purpose: 'test',
        value: '20',
        phone,
        bank: sepaData,
      },
      errors: [],
    },
  },
};

const swiftData = {
  beneficiaryName: 'beneficiaryName',
  iban: 'LV21HABA0001408032543',
  country: 'LV',
  city: 'Riga',
  address: 'Riga, Hipokrata, 22',
  swiftCode: 'HABALV22',
  beneficiaryBank: 'SB',
  intermediaryBank: 'intermediaryBank',
  intermediarySwift: 'intermediarySwift',
  intermediaryAccount: 'intermediaryAccount',
  commissionType: 'SENDER',
  urgency: 'NORMAL',
  purpose: 'purpose',
};

const swiftStore: IStore = {
  ...store,
  operations: {
    ...emptyStore.operations,
    transfer: {
      isLoading: false,
      isSuccess: false,
      isError: false,
      data: {
        card: cardData,
        purpose: 'test',
        value: '30',
        phone,
        bank: swiftData,
      },
      errors: [],
    },
  },
};

describe('transfer to card selector tests', () => {
  test('getTransferAmountByValue should return amount by value', () => {
    const amountSelected = getTransferAmountByValue(store);
    expect(amountSelected.sum.value).toEqual('10');
    expect(amountSelected.sum.currency.code).toEqual('EUR');
  });

  test('getCard should return card', () => {
    const card = getCard(store);
    expect(card).toBe(cardData);
    expect(card.cvv).toEqual('000');
  });

  test('getPaymentCardData should return paymentContact of card request', () => {
    const contactData = getPaymentCardData(store);
    expect(contactData.payment_contact.account).toBe(accountsData[0].id);
    expect(contactData.payment_contact.amount.sum.value).toEqual('10');
    expect(contactData).toMatchSnapshot();
  });

  test('getPaymentSepaData should return paymentSepa', () => {
    const bank = getPaymentSepaData(sepaStore);
    expect(bank.payment_sepa.account).toEqual(accountsData[0].id);
    expect(bank.payment_sepa.amount.sum.value).toEqual('20');
    expect(bank.payment_sepa.beneficiaryName).toEqual(sepaData.beneficiaryName);
    expect(bank.payment_sepa.iban).toEqual(sepaData.iban);
    expect(bank.payment_sepa.purpose).toEqual(sepaData.purpose);
    expect(bank.payment_sepa.transferDetails).toEqual(sepaData.transferDetails);
    expect(bank).toMatchSnapshot();
  });

  test('getPaymentSwiftData should return paymentSwift', () => {
    const bank = getPaymentSwiftData(swiftStore);
    expect(bank.payment_swift.account).toEqual(accountsData[0].id);
    expect(bank.payment_swift.amount.sum.value).toEqual('30');
    expect(bank.payment_swift.beneficiaryName).toEqual(swiftData.beneficiaryName);
    expect(bank.payment_swift.beneficiaryAccount).toEqual(swiftData.iban);
    expect(bank.payment_swift.country).toEqual(swiftData.country);
    expect(bank.payment_swift.city).toEqual(swiftData.city);
    expect(bank.payment_swift.address).toEqual(swiftData.address);
    expect(bank.payment_swift.swiftCode).toEqual(swiftData.swiftCode);
    expect(bank.payment_swift.beneficiaryBank).toEqual(swiftData.beneficiaryBank);
    expect(bank.payment_swift.intermediaryBank).toEqual(swiftData.intermediaryBank);
    expect(bank.payment_swift.intermediarySwift).toEqual(swiftData.intermediarySwift);
    expect(bank.payment_swift.intermediaryAccount).toEqual(swiftData.intermediaryAccount);
    expect(bank.payment_swift.commissionType).toEqual(swiftData.commissionType);
    expect(bank.payment_swift.urgency).toEqual(swiftData.urgency);
    expect(bank.payment_swift.purpose).toEqual(swiftData.purpose);
    expect(bank).toMatchSnapshot();
  });

  test('getPaymentContactData should return paymentContact of contact request', () => {
    const contact = getPaymentContactData(store);
    expect(contact.payment_contact.phoneNumber).toEqual(phone);
    expect(contact.payment_contact.amount.sum.value).toEqual('10');
    expect(contact).toMatchSnapshot();
  });
});
