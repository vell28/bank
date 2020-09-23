import {
  propSatisfies,
  ifElse,
  is,
  and,
  lte,
  gte,
  always,
  propEq,
  equals,
  either,
  pipe,
  head,
  propOr,
  pathOr,
  pathEq,
} from 'ramda';
import { stringify } from 'qs';

import {
  IError, IFetchResponse, IOptions, IRequestParams, ResponseAPI
} from '../entities';
import { appErrorStatuses, METHODS } from './const';

const inInterval = (start: number, stop: number) =>
  ifElse(is(Number), (status: number) => and(gte(status, start), lte(status, stop)), always(false));

export const is20x = propSatisfies(inInterval(200, 299), 'status');
export const is40x = propSatisfies(inInterval(400, 499), 'status');
export const is50x = propSatisfies(inInterval(500, 599), 'status');

export const isNetworkError = propEq('status', -1);
export const isGET = equals(METHODS.GET);

export const getConfirmFromResponseToken = (error: IError): string =>
  pipe(propOr([], 'errors'), head, pathOr('', ['properties', 'confirmationToken']))(error);

export const getConfirmCodeLengthToken = (error: IError): number =>
  pipe(propOr([], 'errors'), head, pathOr(0, ['properties', 'confirmationCodeLength']))(error);

export const getHTTPStatusCode = (error: IError): number =>
  pipe(
    propOr([], 'errors'),
    head,
    // propOr(0, 'code')
    // red error unknown not assignable to number
    // even seem to be right overload propOr<number>
    pathOr(0, ['code']),
  )(error);

export const isAllowBodyMethod = either(equals(METHODS.POST), equals(METHODS.PATCH));

export const onUnknow = (response: IFetchResponse): Promise<IError> =>
  // eslint-disable-next-line prefer-promise-reject-errors
  Promise.reject({
    ok: false,
    status: appErrorStatuses.UNKNOWN.code,
    errors: [
      {
        code: appErrorStatuses.UNKNOWN.code,
        type: response.statusText,
        message: 'Unknown fetch error.',
      },
    ],
  });

export const makeUrl = (method: string, url: string, data?: any): string =>
  isGET(method) && data ? `${url}${stringify(data, { addQueryPrefix: true })}` : url;

export const makeRequestOptions = (
  method: string = METHODS.GET,
  { data, headers, isFormData }: IRequestParams,
): IOptions => {
  const options = {
    method,
    headers,
  };

  if (isAllowBodyMethod(method) && data) {
    let body: any;
    if (isFormData) {
      body = new FormData();
      // eslint-disable-next-line no-restricted-syntax
      for (const k in data) {
        // eslint-disable-next-line no-prototype-builtins
        if (data.hasOwnProperty(k)) {
          body.append(k, data[k]);
        }
      }
      body = new URLSearchParams(body);
    } else {
      body = JSON.stringify(data);
    }
    return {
      ...options,
      body,
    };
  }

  return options;
};

export const isSuccessResponse = (resp: ResponseAPI<any>): boolean => pathEq(['data', 'status'], 'ok')(resp);
