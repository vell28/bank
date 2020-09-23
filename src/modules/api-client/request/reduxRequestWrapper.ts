import { getAppData } from 'models/application/redux/selectors';
import {
  getToken, getFirebaseToken, getTokenExpires, getPhone
} from 'models/authorization/redux/selectors';

import { MakeRequestType } from '.';
import { store } from '../../store';
import { IStore } from '../../store/types';
import { IRequestData } from '../entities';

export const withAuthCredential = (makeRequest: MakeRequestType) => <T>(
  method: string,
  url: string,
  fetchParams: IRequestData = {},
) => {
  const state: IStore = store.getState();
  const app = getAppData(state);
  const token = getToken(state);
  const expires = getTokenExpires(state);
  const firebaseToken = getFirebaseToken(state);

  const headerToken = firebaseToken ? { 'token-firebase': firebaseToken } : { token };

  const { useCredential = true, appendHeader = {} } = fetchParams;
  const headers = useCredential
    ? {
      Authorization: getPhone(state),
      'Content-Type': 'application/json',
      applicationId: app.applicationId,
      productId: app.productId,
      ...headerToken,
      ...appendHeader,
    }
    : { ...appendHeader };

  const params = {
    expires,
    headers,
    ...fetchParams,
  };
  return makeRequest(method, url, params);
};
