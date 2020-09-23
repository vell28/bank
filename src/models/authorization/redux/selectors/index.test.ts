import { emptyStore } from 'modules/store/emptyStore';

import { IStore } from 'modules/store/types';
import { getToken, getTokenExpires, getFirebaseToken } from '.';

const store: IStore = {
  ...emptyStore,
  authorization: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    data: {
      service_code: 'OTFIN',
      phone: '79111111111',
      token: '71ce2e5123e86619d033722a205508df',
      'token-firebase': '71ce2e5123e86619d033722a205508df',
      expires_in: 2592000,
      token_expires: 1566468705337 + 259200000,
    },
    errors: [],
  },
};

describe('authorization selector tests', () => {
  test('getToken', () => {
    const token = getToken(store);
    expect(token).toEqual(store.authorization.data.token);

    const emptyTokenStore = {
      ...emptyStore,
      authorization: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        data: {},
        errors: [],
      },
    };

    const tokenEmptyString = getToken(emptyTokenStore);
    expect(tokenEmptyString).toEqual('');
  });

  test('getTokenExpires', () => {
    const expires = getTokenExpires(store);
    expect(expires).toEqual(store.authorization.data.token_expires);

    const emptyTokenStore = {
      ...emptyStore,
      authorization: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        data: {},
        errors: [],
      },
    };

    const nullExpires = getTokenExpires(emptyTokenStore);
    expect(nullExpires).toEqual(0);
  });

  test('getFirebaseToken', () => {
    const firebaseToken = getFirebaseToken(store);
    expect(firebaseToken).toEqual(store.authorization.data['token-firebase']);

    const emptyTokenStore = {
      ...emptyStore,
      authorization: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        data: {},
        errors: [],
      },
    };

    const tokenEmptyString = getFirebaseToken(emptyTokenStore);
    expect(tokenEmptyString).toEqual('');
  });
});
