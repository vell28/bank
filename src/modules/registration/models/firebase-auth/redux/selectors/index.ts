import { createSelector } from 'reselect';
import { pathOr } from 'ramda';

import { IStore } from 'modules/store/types';
import { ICountry } from '@components/popup/popup-select-country/country-list';
import { IFirebaseAuthState } from '../reducers';

const defaultCountry: ICountry = { name: 'Canada', dialCode: '1', code: 'CA' };

export const getFirebaseAuthState = (state: IStore): IFirebaseAuthState => state.registrationModule.firebaseAuth;

export const getFirebaseToken = createSelector([getFirebaseAuthState], (state: IFirebaseAuthState): string =>
  pathOr('', ['confirm', 'data'])(state));

export const getFirebaseSendDate = createSelector([getFirebaseAuthState], (state: IFirebaseAuthState): number =>
  pathOr(0, ['config', 'codeSendDate'])(state));

export const getFirebaseActivePhone = createSelector([getFirebaseAuthState], (state: IFirebaseAuthState): string =>
  pathOr('', ['config', 'phone'])(state));

export const getFirebaseActiveCountry = createSelector(
  [getFirebaseAuthState],
  (state: IFirebaseAuthState): ICountry => pathOr(defaultCountry, ['config', 'country'])(state),
);

export const isLoadingConfirm = createSelector([getFirebaseAuthState], (state: IFirebaseAuthState): boolean =>
  pathOr(false, ['confirm', 'isLoading'])(state));

export const isSendSuccess = createSelector([getFirebaseAuthState], (state: IFirebaseAuthState): boolean =>
  pathOr(false, ['send', 'isSuccess'])(state));

export const getSendError = createSelector([getFirebaseAuthState], (state: IFirebaseAuthState): string =>
  pathOr('', ['send', 'errors'])(state));

export const getConfirmError = createSelector([getFirebaseAuthState], (state: IFirebaseAuthState): string =>
  pathOr('', ['confirm', 'errors'])(state));
