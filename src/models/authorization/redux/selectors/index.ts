import { pathOr } from 'ramda';

import { createSelector } from 'reselect';
import { IStore } from 'modules/store/types';
import { IAuthorizationState } from '../reducers';

export const getTokenState = (state: IStore): IAuthorizationState => state.authorization;

export const getToken = createSelector([getTokenState], (state: IAuthorizationState): string =>
  pathOr('', ['data', 'token'])(state));

export const getFirebaseToken = createSelector([getTokenState], (state: IAuthorizationState): string =>
  pathOr('', ['data', 'token-firebase'])(state));

export const getPhone = createSelector([getTokenState], (state: IAuthorizationState): string =>
  pathOr('', ['data', 'phone'])(state));

export const getSessId = createSelector([getTokenState], (state: IAuthorizationState): string =>
  pathOr('', ['data', 'sessid'])(state));

export const getTokenExpires = createSelector([getTokenState], (state: IAuthorizationState): number =>
  pathOr(0, ['data', 'token_expires'])(state));

export const isLoading = createSelector([getTokenState], (state: IAuthorizationState): boolean =>
  pathOr(false, ['isLoading'])(state));

export const hasError = createSelector([getTokenState], (state: IAuthorizationState): boolean =>
  pathOr(false, ['isError'])(state));

export const getIsShownLogoutConfirmModal = createSelector([getTokenState], (state: IAuthorizationState): boolean =>
  pathOr(false, ['data', 'isShownLogoutConfirmModal'])(state));
