import { emptyStore } from 'modules/store/emptyStore';
import { isNotEmpty } from 'utils/ramda';
import { accountsData } from 'models/organizations/mock';

import { AccountTypes } from 'models/organizations/entities';
import { IStore } from 'modules/store/types';
import { CurrencyCodes } from 'modules/currencies';
import { transactionList } from '../../mock';
import {
  getShownBtns,
  getFilterDate,
  getTransactionsPageSize,
  getTransactionsPageNumber,
  getActiveFilter,
  getListLength,
  getReceiptTransaction,
  getTransactionsWithFilters,
} from '.';

const transactId = 'PPY184597';
const date = '2019-10-11T10:12:00';
const store: IStore = {
  ...emptyStore,
  organizations: {
    ...emptyStore.organizations,
    data: [
      {
        accounts: accountsData,
        cards: [],
        client: {},
        title: '',
        clientName: '',
        id: 0,
        name: '',
        tin: '',
      },
    ],
  },
  transactions: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    data: {
      '11/10/2019': transactionList,
    },
    pagination: {
      maxPageNumber: 5,
      pageSize: 30,
      pageNumber: 1,
      length: 10,
    },
    filter: {
      date,
      accountType: AccountTypes.PHYSICAL,
      currency: CurrencyCodes.EUR,
      isShown: true,
    },
    settings: {
      shownBtns: { [transactId]: true },
      receiptId: transactId,
    },
    errors: [],
  },
};

describe('transactions selector tests', () => {
  test('getShownBtns should return ids of transaction', () => {
    const btns = getShownBtns(store);
    expect(btns[transactId]).toBeTruthy();
  });

  test('getFilterDate should return date or undefined if not set', () => {
    const selectorDate = getFilterDate(store);
    expect(selectorDate).toBe(date);
  });

  test('getTransactionsPageSize should return page size', () => {
    const size = getTransactionsPageSize(store);
    expect(size).toBe(30);
  });

  test('getTransactionsPageNumber should return page number', () => {
    const page = getTransactionsPageNumber(store);
    expect(page).toBe(1);
  });
  test('getActiveFilter should return active filter by type or ""', () => {
    const filter = getActiveFilter(store);
    expect(filter).toBe('PHYSICALEUR');
  });
  test('getListLength should return length of transactions', () => {
    const length = getListLength(store);
    expect(length).toBe(10);
  });
  test('getReceiptTransaction should return transaction by id(receiptId) ', () => {
    const transact = getReceiptTransaction(store);
    expect(transact).not.toBe(undefined);
    expect(transact).toMatchSnapshot();
  });
  test('getTransactionsWithFilters should return filtered transactions', () => {
    const transactions = getTransactionsWithFilters(store);
    expect(isNotEmpty(transactions)).toBeTruthy();
    expect(transactions).toMatchSnapshot();
  });
});
