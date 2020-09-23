import typeToReducer from 'type-to-reducer';
import { format } from 'date-fns';
import { equals } from 'ramda';

import { extractAction, IBaseThunkState } from 'modules/store/types';
import { FILTER_DATE_FORMAT } from '../../entities/const';
import {
  ITransactionList,
  ITransactionPagination,
  IHistoryFilter,
  ITransaction,
  IOrderedTransactions,
  IHistorySetting,
} from '../../entities';

import {
  SET_TRANSACTION,
  TOGGLE_HISTORY_FILTER,
  TOGGLE_HISTORY_FILTER_BY_TYPE,
  TOGGLE_HISTORY_FILTER_BY_DATE,
  TOGGLE_ACTION_BTNS,
  TOGGLE_RECEIPT,
  IToggleBtnsAction,
  IToggleHistoryFilterByDateAction,
  ISetTransactionsAction,
  ISetHistoryFilterAction,
} from '../actions';

export interface ITransactionsState extends IBaseThunkState<IOrderedTransactions> {
  pagination: ITransactionPagination;
  filter: IHistoryFilter;
  settings: IHistorySetting;
}

export const transactionsInitState: ITransactionsState = {
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

const getOrderedByDate = (list: ITransactionList): IOrderedTransactions => {
  const ordered: IOrderedTransactions = {};

  list.map((item: ITransaction) => {
    const transactDate = format(new Date(item.executedAt), FILTER_DATE_FORMAT);
    if (ordered[transactDate]) {
      ordered[transactDate].push(item);
    } else {
      ordered[transactDate] = [item];
    }
    return item;
  });
  return ordered;
};

export const transactions = typeToReducer<ITransactionsState>(
  {
    [TOGGLE_ACTION_BTNS]: (state: ITransactionsState, action: IToggleBtnsAction): ITransactionsState => ({
      ...state,
      settings: {
        ...state.settings,
        shownBtns: {
          ...state.settings.shownBtns,
          [action.payload]: !state.settings.shownBtns[action.payload],
        },
      },
    }),
    [TOGGLE_RECEIPT]: (state: ITransactionsState, action: IToggleBtnsAction): ITransactionsState => ({
      ...state,
      settings: {
        ...state.settings,
        receiptId: state.settings.receiptId ? undefined : action.payload,
      },
    }),
    [TOGGLE_HISTORY_FILTER]: (state: ITransactionsState): ITransactionsState => ({
      ...state,
      filter: {
        ...state.filter,
        isShown: !state.filter.isShown,
      },
    }),
    [TOGGLE_HISTORY_FILTER_BY_DATE]: (
      state: ITransactionsState,
      action: IToggleHistoryFilterByDateAction,
    ): ITransactionsState => {
      // reset filter date, after click to already selected date
      const date = equals(state.filter.date, action.payload) ? undefined : action.payload;
      return {
        ...state,
        filter: {
          ...state.filter,
          date,
        },
      };
    },
    [TOGGLE_HISTORY_FILTER_BY_TYPE]: (
      state: ITransactionsState,
      action: ISetHistoryFilterAction,
    ): ITransactionsState => {
      // reset filter by type, after click to already selected type
      let fillData = action.payload;
      const { accountType, currency } = action.payload;
      if (equals(state.filter.accountType, accountType) && equals(state.filter.currency, currency)) {
        fillData = {
          accountType: undefined,
          currency: undefined,
        } as any;
      }
      return {
        ...state,
        filter: {
          ...state.filter,
          ...fillData,
        },
      };
    },
    [SET_TRANSACTION]: {
      LOADING: (state: ITransactionsState): ITransactionsState => ({
        ...state,
        isLoading: true,
      }),

      SUCCESS: (state: ITransactionsState, action: ISetTransactionsAction): ITransactionsState => {
        const { payload } = action;
        const { data } = extractAction(payload);
        const ordered = getOrderedByDate(data.content);
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          isError: false,
          data: {
            ...state.data,
            ...ordered,
          },
          pagination: {
            ...state.pagination,
            pageNumber: data.pageNumber,
            pageSize: data.pageSize,
            maxPageNumber: data.maxPageNumber,
            length: state.pagination.length + data.content.length,
          },
          errors: [],
        };
      },

      ERROR: (state: ITransactionsState, action): ITransactionsState => ({
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errors: action.payload.errors,
      }),
    },
  },
  transactionsInitState,
);
