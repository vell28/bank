import { isNotEmpty } from 'utils/ramda';
import { CurrencyCodes } from 'modules/currencies';
import { transactions, ITransactionsState } from '.';
import {
  TOGGLE_ACTION_BTNS,
  SET_TRANSACTION,
  TOGGLE_HISTORY_FILTER,
  TOGGLE_HISTORY_FILTER_BY_TYPE,
  TOGGLE_HISTORY_FILTER_BY_DATE,
  TOGGLE_RECEIPT,
  ISetTransactionsAction,
  IToggleBtnsAction,
  IReceiptAction,
  ISetHistoryFilterAction,
  IToggleHistoryFilterByDateAction,
} from '../actions';

import { transactionResponse } from '../../mock';

const initTransaction: ITransactionsState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: {},
  pagination: {
    maxPageNumber: 0,
    pageSize: 30,
    pageNumber: 0,
    length: 0,
  },
  filter: {
    isShown: false,
  },
  settings: {
    shownBtns: {},
  },
  errors: [],
};

const transactId = 'PPY184598';

describe('transactions reducers', () => {
  test('transactions/SET_TRANSACTION', () => {
    const action: ISetTransactionsAction = {
      type: `${SET_TRANSACTION}_SUCCESS`,
      payload: { data: transactionResponse },
    };

    const newState = transactions(initTransaction, action);
    expect(isNotEmpty(newState.data)).toBeTruthy();
    expect(newState.pagination.length).toBe(transactionResponse.content.length);
    expect(newState.pagination.pageNumber).toBe(transactionResponse.pageNumber);
    expect(newState.pagination.maxPageNumber).toBe(transactionResponse.maxPageNumber);
    expect(newState.pagination.pageSize).toBe(transactionResponse.pageSize);
    expect(newState).toMatchSnapshot();
  });
  test('transactions/TOGGLE_ACTION_BTNS', () => {
    const action: IToggleBtnsAction = {
      type: TOGGLE_ACTION_BTNS,
      payload: transactId,
    };
    const newState = transactions(initTransaction, action);
    expect(newState.settings.shownBtns[transactId]).toBeTruthy();
    const nextState = transactions(newState, action);
    expect(nextState.settings.shownBtns[transactId]).toBeFalsy();
  });
  test('transactions/TOGGLE_RECEIPT', () => {
    const action: IReceiptAction = {
      type: TOGGLE_RECEIPT,
      payload: transactId,
    };
    const newState = transactions(initTransaction, action);
    expect(newState.settings.receiptId).toBe(transactId);
    const nextState = transactions(newState, action);
    expect(nextState.settings.receiptId).toBeUndefined();
  });
  test('transactions/TOGGLE_HISTORY_FILTER', () => {
    const action = {
      type: TOGGLE_HISTORY_FILTER,
    };
    const newState = transactions(initTransaction, action);
    expect(newState.filter.isShown).toBeTruthy();
    const nextState = transactions(newState, action);
    expect(nextState.filter.isShown).toBeFalsy();
  });

  test('transactions/TOGGLE_HISTORY_FILTER_BY_TYPE', () => {
    const action: ISetHistoryFilterAction = {
      type: TOGGLE_HISTORY_FILTER_BY_TYPE,
      payload: {
        currency: CurrencyCodes.EUR,
        accountType: 'PHYSICAL',
      },
    };
    const newState = transactions(initTransaction, action);
    expect(newState.filter.currency).toBe(CurrencyCodes.EUR);
    expect(newState.filter.accountType).toBe('PHYSICAL');
    const nextState = transactions(newState, action);
    // test toggle, should be undefined after next click to filter
    expect(nextState.filter.currency).toBeUndefined();
    expect(nextState.filter.accountType).toBeUndefined();
  });
  test('transactions/TOGGLE_HISTORY_FILTER_BY_DATE', () => {
    const action: IToggleHistoryFilterByDateAction = {
      type: TOGGLE_HISTORY_FILTER_BY_DATE,
      payload: '21.11.2019',
    };
    const newState = transactions(initTransaction, action);
    expect(newState.filter.date).toBe('21.11.2019');
    const nextState = transactions(newState, action);
    // test toggle, should be undefined after next click to filter
    expect(nextState.filter.date).toBeUndefined();
  });
});
