import {
  mapObjIndexed, map, filter, equals, isEmpty, uniq, find, propEq
} from 'ramda';
import memoizeOne from 'memoize-one';
import { createSelector } from 'reselect';
import { format } from 'date-fns';

import { defaultToEmptyArray } from 'utils/ramda';
import { getAccounts } from 'models/organizations/redux/selectors';

import { IAccount } from 'models/organizations/entities';
import { IStore } from 'modules/store/types';
import { FILTER_DATE_FORMAT } from '../../entities/const';
import {
  ITransactionList, IOrderedTransactions, ITransaction, IShownBtns
} from '../../entities';
import { ITransactionsState } from '../reducers';

const mapTransaction = (transactions: IOrderedTransactions, func: (item: ITransaction) => any) => {
  return mapObjIndexed((list: ITransactionList) => {
    return map((item: ITransaction) => {
      return func(item);
    }, list);
  }, transactions);
};

export const getTransactionState = (state: IStore): ITransactionsState => state.transactions;

export const getFilterDate = createSelector(
  [getTransactionState],
  (state: ITransactionsState): string | undefined => state.filter.date,
);

export const getActiveFilter = createSelector(
  [getTransactionState],
  (state: ITransactionsState): string => {
    if (!state.filter.accountType || !state.filter.currency) {
      return '';
    }
    return `${state.filter.accountType}${state.filter.currency}`;
  },
);

export const getTransactionsWithAccount = createSelector(
  [getTransactionState, getAccounts],
  (state: ITransactionsState, accounts: IAccount[]): IOrderedTransactions => {
    return mapTransaction(state.data, (item: ITransaction) => {
      const simpleAccount = find<IAccount>(propEq('id', item.accountId))(accounts);
      return {
        ...item,
        simpleAccount,
      };
    });
  },
);

export const getTransactionsWithFilters = createSelector(
  [getTransactionsWithAccount, getActiveFilter, getFilterDate],
  (list: IOrderedTransactions, type: string, date?: string): IOrderedTransactions => {
    let result = list;
    if (date) {
      const formatted = format(new Date(date), FILTER_DATE_FORMAT);
      result = { [formatted]: defaultToEmptyArray(list[formatted]) };
    }
    // filter by type and currency
    const withFilter: IOrderedTransactions = {};
    mapObjIndexed((transactions: ITransactionList, key: string) => {
      const filtered = filter((item: ITransaction) => {
        // if not setted type filter;
        if (!type) {
          return true;
        }
        if (item.simpleAccount) {
          const { accountType, currency } = item.simpleAccount;
          if (equals(`${accountType}${currency.code}`, type)) {
            return true;
          }
        }
        return false;
      }, transactions);
      if (filtered.length > 0) {
        // add uniq, because we have duplicate transaсtions
        withFilter[key] = uniq(filtered);
      }
    }, result);
    return withFilter;
  },
);

export const getTransactionsPageNumber = createSelector(
  [getTransactionState],
  (state: ITransactionsState): number => state.pagination.pageNumber,
);

export const getTransactionsPageSize = createSelector(
  [getTransactionState],
  (state: ITransactionsState): number => state.pagination.pageSize,
);

export const getTransactionsListByPage = memoizeOne((page: number) =>
  createSelector(
    [getTransactionState],
    (state: ITransactionsState): ITransactionList => defaultToEmptyArray(state.data[page]),
  ));

export const isShownFilter = createSelector(
  [getTransactionState],
  (state: ITransactionsState): boolean => state.filter.isShown,
);

export const getShownBtns = createSelector(
  [getTransactionState],
  (state: ITransactionsState): IShownBtns => state.settings.shownBtns,
);

export const getReceiptTransaction = createSelector(
  [getTransactionState],
  (state: ITransactionsState): ITransaction | undefined => {
    const { receiptId } = state.settings;
    if (!receiptId) {
      return;
    }
    let transaction;
    mapTransaction(state.data, (item: ITransaction) => {
      if (equals(item.id, receiptId)) {
        transaction = item;
      }
    });
    return transaction;
  },
);

export const isInitialLoading = createSelector(
  [getTransactionState],
  (state: ITransactionsState): boolean => isEmpty(state.data) && !state.isSuccess && !state.isError,
);

export const getListLength = createSelector(
  [getTransactionState],
  (state: ITransactionsState): number => state.pagination.length,
);
