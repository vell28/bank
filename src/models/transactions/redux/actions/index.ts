import { Dispatch } from 'redux';
import { push } from 'connected-react-router';

import { getStateType, IAsyncAction, IAction } from 'modules/store/types';
import { fetchTransactionsRequest, ITransactionQueryParams } from 'modules/api-requests/transactions';
import { getAccountsIds } from 'models/organizations/redux/selectors';

import { CurrencyCodeType } from 'modules/currencies';
import { AccountType } from 'models/organizations/entities';

import { repeatOperationOfBank } from 'models/operations/transfer/redux/actions/bank';
import { repeatOperationToContact } from 'models/operations/transfer/redux/actions/contact';
import { repeatOperationToCard } from 'models/operations/transfer/redux/actions/card';
import { repeatOperationTopUpCard } from 'models/operations/top-up/redux/actions/card';

import { TRANSFER_BANK_MODAL } from 'containers/operations/transfer-to-bank';
import { TRANSFER_CONTACT_MODAL } from 'containers/operations/transfer-to-contact';
import { TRANSFER_CARD_MODAL } from 'containers/operations/transfer-to-card';
import { TOP_UP_FROM_CARD_MODAL } from 'containers/operations/top-up-from-card';
import { ITransaction, ITransactionResponse } from '../../entities';
import { getTransactionsPageNumber as getPage, getTransactionsPageSize } from '../selectors';

export type ISetTransactionsAction = IAsyncAction<ITransactionResponse>;

export const SET_TRANSACTION = 'transactions/SET';
export const TOGGLE_HISTORY_FILTER = 'transactions/TOGGLE_FILTER';
export const TOGGLE_HISTORY_FILTER_BY_TYPE = 'transactions/TOGGLE_HISTORY_FILTER_BY_TYPE';
export const TOGGLE_HISTORY_FILTER_BY_DATE = 'transactions/TOGGLE_HISTORY_FILTER_BY_DATE';
export const TOGGLE_ACTION_BTNS = 'transactions/TOGGLE_ACTION_BTNS';
export const TOGGLE_RECEIPT = 'transactions/TOGGLE_RECEIPT';

export type IToggleBtnsAction = IAction<string>;
export type IReceiptAction = IAction<string>;

export const toggleReceipt = (id: string): IReceiptAction => ({
  type: TOGGLE_RECEIPT,
  payload: id,
});

export type ISetHistoryFilterAction = IAction<{
  accountType: AccountType;
  currency: CurrencyCodeType;
}>;

export type IToggleHistoryFilterByDateAction = IAction<string>;

export const toggleShownBtn = (id: string): IToggleBtnsAction => ({
  type: TOGGLE_ACTION_BTNS,
  payload: id,
});

export const toggleHistoryFilter = {
  type: TOGGLE_HISTORY_FILTER,
};

export const toggleHistoryFilterByDate = (date: string): IToggleHistoryFilterByDateAction => ({
  type: TOGGLE_HISTORY_FILTER_BY_DATE,
  payload: date,
});

export const toggleHistoryFilterByType = (
  accountType: AccountType,
  currency: CurrencyCodeType,
): ISetHistoryFilterAction => ({
  type: TOGGLE_HISTORY_FILTER_BY_TYPE,
  payload: {
    accountType,
    currency,
  },
});

const fetchTransactions = (page: number, pageSize: number, accounts: string) => {
  const params: ITransactionQueryParams = {
    accounts,
    page,
    size: pageSize,
  };
  return {
    type: SET_TRANSACTION,
    payload: fetchTransactionsRequest(params),
    meta: page,
  };
};

export const fetchTransactionsPage = (page = 0) => (
  dispatch: Dispatch,
  getState: getStateType,
): ISetTransactionsAction => {
  const state = getState();
  const accounts = getAccountsIds(state).join(',');
  const pageSize = getTransactionsPageSize(state);
  return dispatch(fetchTransactions(page, pageSize, accounts));
};

export const fetchNextTransactionsPage = (dispatch: Dispatch, getState: getStateType): ISetTransactionsAction => {
  const state = getState();
  const accounts = getAccountsIds(state).join(',');
  const page = getPage(state) + 1;
  const pageSize = getTransactionsPageSize(state);
  return dispatch(fetchTransactions(page, pageSize, accounts));
};

export const fetchPrevTransactionsPage = (dispatch: Dispatch, getState: getStateType): ISetTransactionsAction => {
  const state = getState();
  const accounts = getAccountsIds(state).join(',');
  const page = getPage(state) > 0 ? getPage(state) - 1 : 0;
  const pageSize = getTransactionsPageSize(state);
  return dispatch(fetchTransactions(page, pageSize, accounts));
};

export const switchOperation = (operation: ITransaction): any => {
  const {
    accountId,
    currency: { code },
    paymentToRepeat,
  } = operation;

  if (paymentToRepeat) {
    return (dispatch: any) => {
      dispatch(push(`/banking/account/${accountId}/${code}`));

      switch (paymentToRepeat.type) {
        case 'PAYMENT_SEPA':
          return dispatch(repeatOperationOfBank(paymentToRepeat, TRANSFER_BANK_MODAL));
        case 'PAYMENT_PHONE':
          return dispatch(repeatOperationToContact(paymentToRepeat, TRANSFER_CONTACT_MODAL));
        case 'PAYMENT_CARD':
          return dispatch(repeatOperationToCard(paymentToRepeat, TRANSFER_CARD_MODAL));
        case 'TOPUP_BY_CARD':
          return dispatch(repeatOperationTopUpCard(paymentToRepeat, TOP_UP_FROM_CARD_MODAL));
        default:
          return null;
      }
    };
  }
};
