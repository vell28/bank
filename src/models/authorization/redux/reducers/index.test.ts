import { authorization, IAuthorizationState } from '.';
import {
  AUTH_SET_TOKEN, AUTH_UPDATE_TOKEN, AUTH_REMOVE_TOKEN, TOGGLE_LOGOUT_CONFIRM_MODAL
} from '../actions';

const initToken: IAuthorizationState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: {},
  errors: [],
};

const data = {
  service_code: 'OTFIN',
  phone: '79111111111',
  token: '71ce2e5123e86619d033722a205508df',
  expires_in: 2592000,
  isShownLogoutConfirmModal: true,
};

const updateData = {
  success: true,
  token: '9bb5da20816e1e42a3a9a524cb7573a9',
};

describe('authorization reducers', () => {
  test('token_reducer/AUTH_SET_TOKEN', () => {
    const action = {
      type: `${AUTH_SET_TOKEN}_SUCCESS`,
      payload: {
        data,
      },
    };

    const newState = authorization(initToken, action);
    expect(newState.data.token).toBe(data.token);
    expect(newState.isSuccess).toBe(true);
  });

  test('token_reducer/AUTH_UPDATE_TOKEN', () => {
    const action = {
      type: `${AUTH_UPDATE_TOKEN}_SUCCESS`,
      payload: {
        data: updateData,
      },
    };

    const newState = authorization(initToken, action);
    expect(newState.data.token).toBe(updateData.token);
    expect(newState.isSuccess).toBe(true);
    expect(newState).toMatchSnapshot();
  });

  test('token_reducer/AUTH_REMOVE_TOKEN', () => {
    const action = {
      type: AUTH_REMOVE_TOKEN,
    };

    const newState = authorization(initToken, action);
    expect(newState.data).toEqual({
      service_code: 'OTFIN',
      'dev-id': 'test',
      'token-firebase': '',
      isShownLogoutConfirmModal: false,
    });
    expect(newState).toMatchSnapshot();
  });
});

test('authorization/TOGGLE_LOGOUT_CONFIRM_MODAL', () => {
  const action = {
    type: TOGGLE_LOGOUT_CONFIRM_MODAL,
    payload: false,
  };

  const newState = authorization(initToken, action);
  expect(newState.data.isShownLogoutConfirmModal).toBeFalsy();
});
