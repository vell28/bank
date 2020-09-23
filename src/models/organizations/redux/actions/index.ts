import { Dispatch } from 'redux';

import { fetchOrganizationRequest, fetchAccountBalanceRequest } from 'modules/api-requests/organizations';
import { getStateType } from 'modules/store/types';
import { getAccountsIds } from '../selectors';
import {
  FETCH_ORGANIZATIONS,
  IFetchOrganizationsAction,
  IUpdateAccountBalanceAction,
  UPDATE_ACCOUNT_BALANCE,
} from './entities';

export const fetchOrganizations = (): IFetchOrganizationsAction => ({
  type: FETCH_ORGANIZATIONS,
  payload: fetchOrganizationRequest(),
});

export const updateAccountBalance = (id: string): IUpdateAccountBalanceAction => ({
  type: UPDATE_ACCOUNT_BALANCE,
  payload: fetchAccountBalanceRequest(id),
  meta: id,
});

export const updateAllAccountBalance = (dispatch: Dispatch, getState: getStateType) => {
  const ids = getAccountsIds(getState());
  const promises = ids.map((id: string) => dispatch(updateAccountBalance(id)));
  return Promise.all(promises);
};
