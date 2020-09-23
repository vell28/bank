import { topUp, ITopUpState } from '.';
import { UPDATE_TOP_UP, IUpdateTopUpValueAction } from '../actions';

import { UPDATE_CARD_INFO_TOP_UP, IUpdateTopUpCardInfoAction } from '../actions/card';

const initTopUp: ITopUpState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: {
    card: {},
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

describe('top up reducers', () => {
  test('topUp/UPDATE_AMOUNT', () => {
    const action: IUpdateTopUpValueAction = {
      type: UPDATE_TOP_UP,
      payload: { value: '10' },
    };

    const newState = topUp(initTopUp, action);
    expect(newState.data.value).toEqual('10');
  });

  test('topUp/UPDATE_CARD', () => {
    const action: IUpdateTopUpCardInfoAction = {
      type: UPDATE_CARD_INFO_TOP_UP,
      payload: cardData,
    };

    const newState = topUp(initTopUp, action);
    expect(newState.data.card).toBe(cardData);
  });
});
