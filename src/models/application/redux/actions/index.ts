import { fetchOrganizations } from 'models/organizations/redux/actions';
import { resetTransferLoadingState } from 'models/operations/transfer/redux/actions';
import { fetchTransactionsPage } from 'models/transactions/redux/actions';
import { isNotEmpty } from 'utils/ramda';

import { getOrganizations, getCurrentAccount, getClient } from 'models/organizations/redux/selectors';
import { getStateType } from 'modules/store/types';
import { ThunkAction } from 'utils/utilTypings';
import { saveAccountDetails, copyToAccountDetails } from 'modules/pdf/templates/accountDetails';
import { propOr } from 'ramda';
import { getBankName, getBankBIС } from '../..';

export const INIT_APP = 'application/SET';
export const UPDATE_APP = 'application/UPDATE';

export const initApp = async (dispatch: any, getState: getStateType) => {
  try {
    const organizations = getOrganizations(getState());
    // if organizations exist, fetch history and update organizations in backgound
    if (isNotEmpty(organizations)) {
      dispatch(fetchOrganizations());
      dispatch(fetchTransactionsPage());
    } else {
      await dispatch(fetchOrganizations());
      dispatch(fetchTransactionsPage());
    }
  } catch (e) {
    throw e;
  }
  dispatch(resetTransferLoadingState);
};

export const exportAccountDetails = (): ThunkAction => {
  return (dispatch: any, getState: getStateType) => {
    const state = getState();
    const account = getCurrentAccount(state);
    const bankTitle = getBankName(state);
    const bankTin = getBankBIС(state);
    const client = getClient(state);

    const iban: string = propOr('', 'id')(account);
    const recipientName: string = propOr('', 'name')(client);

    saveAccountDetails(iban, recipientName, bankTitle, bankTin);
  };
};

export const copyAccountDetails = (): ThunkAction => {
  return (dispatch: any, getState: getStateType) => {
    const state = getState();
    const account = getCurrentAccount(state);
    const bankTitle = getBankName(state);
    const bankTin = getBankBIС(state);
    const client = getClient(state);

    const iban: string = propOr('', 'id')(account);
    const recipientName: string = propOr('', 'name')(client);

    copyToAccountDetails(iban, recipientName, bankTitle, bankTin);
  };
};
