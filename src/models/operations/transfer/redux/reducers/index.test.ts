import { transfer, ITransferState } from '.';
import { SET_VALUE_TRANSFER, IUpdateTransferValueAction } from '../actions';

import { UPDATE_CARD_INFO_TRANSFER, IUpdateTransferCardInfoAction } from '../actions/card';

import { IUpdateTransferBankAction, UPDATE_BANK_INFO_TRANSFER } from '../actions/bank';

const initTransfer: ITransferState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: {
    card: {},
    purpose: 'test',
    phone: '',
    bank: {},
    value: '',
  },
  errors: [],
};

const cardData = {
  cardNumber: '123 123',
  beneficiaryName: 'Test',
  expiresDate: '',
  cvv: '000',
};

const bankData = {
  beneficiaryName: 'beneficiaryName',
  iban: 'MT422PAPY368360000026763123123',
  purpose: 'purpose',
  transferDetails: 'transferDetails',
};

describe('transfer reducers', () => {
  test('transfer/SET_VALUE_TRANSFER', () => {
    const action: IUpdateTransferValueAction = {
      type: SET_VALUE_TRANSFER,
      payload: '10',
    };

    const newState = transfer(initTransfer, action);
    expect(newState.data.value).toBe('10');
  });

  test('transfer/UPDATE_CARD_INFO_TRANSFER', () => {
    const action: IUpdateTransferCardInfoAction = {
      type: UPDATE_CARD_INFO_TRANSFER,
      payload: cardData,
    };

    const newState = transfer(initTransfer, action);
    expect(newState.data.card).toBe(cardData);
  });

  test('transfer/UPDATE_BANK_INFO_TRANSFER', () => {
    const action: IUpdateTransferBankAction = {
      type: UPDATE_BANK_INFO_TRANSFER,
      payload: bankData,
    };

    const newState = transfer(initTransfer, action);
    expect(newState.data.bank).toBe(bankData);
  });

  test('transfer/UPDATE_BANK_INFO_TRANSFER', () => {
    const action: IUpdateTransferBankAction = {
      type: UPDATE_BANK_INFO_TRANSFER,
      payload: bankData,
    };

    const newState = transfer(initTransfer, action);
    expect(newState.data.bank).toBe(bankData);
  });
});
