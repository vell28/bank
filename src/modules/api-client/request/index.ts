import { appInternetError } from 'models/errors/redux/actions';
import { makeResponse } from './makeResponse';
import {
  IFetchResponse, ResponseAPI, IRequestParams, IRequestData
} from '../entities';
import { INTERNET_CONNECTION_ERROR, METHODS } from '../utils/const';

import { makeRequestOptions, makeUrl } from '../utils';
// import { refreshToken } from './refreshToken';
import { withAuthCredential } from './reduxRequestWrapper';
import { store } from '../../store';

export type MakeRequestType = <T = any>(
  method: string,
  url: string,
  requestParams: IRequestParams,
) => Promise<ResponseAPI<T>>;

export const makeRequest = async <T = any>(
  method: string,
  url: string,
  requestParams: IRequestParams,
): Promise<ResponseAPI<T>> => {
  // const refreshedParams = await refreshToken(requestParams);
  const options = makeRequestOptions(method, requestParams);
  const preparedUrl = makeUrl(method, url, requestParams.query);
  try {
    const response: IFetchResponse = await fetch(preparedUrl, options);
    try {
      return await makeResponse<T>(response);
    } catch (err) {
      return Promise.reject(err);
    }
  } catch (err) {
    // eslint-disable-next-line prefer-promise-reject-errors
    appInternetError(store.dispatch)();
    return Promise.reject(INTERNET_CONNECTION_ERROR);
  }
};

const makeRequestWithHeader = withAuthCredential(makeRequest);

const withPartial = (method: string) => <T>(url: string, requestParams: IRequestData) => {
  return makeRequestWithHeader<T>(method, url, requestParams);
};

export const makeGetRequest = withPartial(METHODS.GET);
export const makePostRequest = withPartial(METHODS.POST);
export const makePatchRequest = withPartial(METHODS.PATCH);
export const makeDeleteRequest = withPartial(METHODS.DELETE);
