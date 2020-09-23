import { isAfter } from 'date-fns';
import { propOr } from 'ramda';

import { setTokenError, refreshTokenAction } from 'models/authorization/redux/actions';
import { getFirebaseToken, getToken, getTokenExpires } from 'models/authorization/redux/selectors';
import { store } from '../../store';
import { IRequestParams } from '../entities';

const mergeRequestParams = (token: object, expires: number, params: IRequestParams): IRequestParams => ({
  ...params,
  expires,
  headers: {
    ...params.headers,
    ...token,
  },
});

export const refreshToken = async (params: IRequestParams): Promise<IRequestParams> => {
  const now = Date.now();
  if (isAfter(now, propOr(0, 'expires')(params))) {
    try {
      // @ts-ignore
      await store.dispatch(refreshTokenAction);

      const state = store.getState();
      const token = getToken(state);
      const expires = getTokenExpires(state);
      const firebaseToken = getFirebaseToken(state);

      const headerToken = firebaseToken ? { 'token-firebase': firebaseToken } : { token };

      return mergeRequestParams(headerToken, expires, params);
    } catch (e) {
      // TODO: maybe set global exeption? block app, separate store...
      store.dispatch(setTokenError(e.errors));
    }
  }
  return params;
};
