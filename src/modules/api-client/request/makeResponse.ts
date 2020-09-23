import { propEq } from 'ramda';

import { appInternetError, app500Error, app403Error } from 'models/errors/redux/actions';
import { IFetchResponse, ResponseAPI, IError } from '../entities';
import { store } from '../../store';

import {
  is20x, is40x, is50x, isNetworkError, onUnknow
} from '../utils';
import { INTERNET_CONNECTION_ERROR, appErrorStatuses } from '../utils/const';

const on20x = async <T = any>(response: IFetchResponse): Promise<ResponseAPI<T>> => {
  const result = await response.json();
  if (response.ok && !result.errors) {
    return Promise.resolve({
      ok: true,
      status: response.status,
      data: result as T,
    });
  }

  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject({
    ok: false,
    status: appErrorStatuses.SERVER_SUCCESS_ERROR,
    errors: result.errors,
  });
};

const onNetworkError = (): Promise<IError> => {
  appInternetError(store.dispatch)();
  return Promise.reject(INTERNET_CONNECTION_ERROR);
};

const on500x = async (response: IFetchResponse): Promise<IError> => {
  app500Error(store.dispatch)();
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject({
    ok: false,
    status: response.status,
    errors: [],
  });
};

const on40x = async (response: IFetchResponse): Promise<IError> => {
  if (propEq('status', 403)(response)) {
    app403Error(store.dispatch)();
  }
  if (propEq('status', 404)(response)) {
    // TODO: resolve this, because signin return 404, maybe disable some error
    // app404Error(store.dispatch)();
  }
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject({
    ok: false,
    status: response.status,
    errors: [],
  });
};

export const makeResponse = <T>(response: IFetchResponse): Promise<ResponseAPI<T>> => {
  if (is20x(response)) {
    return on20x<T>(response);
  }

  if (is40x(response)) {
    return on40x(response);
  }
  if (is50x(response)) {
    return on500x(response);
  }
  if (isNetworkError(response)) {
    return onNetworkError();
  }
  return onUnknow(response);
};
