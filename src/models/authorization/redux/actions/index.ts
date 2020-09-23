import { Dispatch } from 'redux';
import { push } from 'connected-react-router';
import { find, equals } from 'ramda';
import { addSeconds } from 'date-fns';
import { SubmissionError } from 'redux-form';

import {
  passwordCheckRequest,
  logoutRequest,
  passwordCodeRequest,
  signInRequest,
  refreshTokenRequest,
} from 'modules/api-requests/authorization';
import { history } from 'modules/store';
import { smsConfirmFailedAttempt, smsConfirmClearAttempt } from 'models/operations/sms-confirmation/redux/actions';
import { PATHS_CONFIG, AUTHORIZATION_PATH } from 'containers/routing/utils';
import { firebaseAuth } from 'modules/firebase-auth';
import { getStateType } from 'modules/store/types';
import { IServerErrors } from 'modules/api-client/entities';

import { EXPIRES_FIREBASE_SECOND_INTERVAL, EXPIRES_UAS_SECOND_INTERVAL } from 'modules/api-client/utils/const';
import { IPasswordCheckRequest, ICodeRequest } from '../../entities';
import { getSessId, getPhone, getFirebaseToken } from '../selectors';
import { DEV_TEST_PHONE_LIST, AUTH_CONFIRM_ERROR, AUTH_PASSWORD_ERROR } from './const';
// import { isDevEnv } from 'utils/enviroment';

export const AUTH_SET_TOKEN = 'authorization/SET_TOKEN';
export const AUTH_UPDATE_TOKEN = 'authorization/UPDATE_TOKEN';
export const AUTH_REMOVE_TOKEN = 'authorization/REMOVE_TOKEN';
export const AUTH_CHECK_PASSWORD = 'authorization/PASSWORD_CHECK';
export const AUTH_REQUEST_CODE = 'authorization/REQUEST_CODE';
export const TOGGLE_LOGOUT_CONFIRM_MODAL = 'authorization/LOGOUT_CONFIRM_MODAL';

export interface IUpdateTokenAction {
  type: string;
  payload: {
    token: string;
    token_expires: Date;
  };
}

// TODO: in prod and stage use import { isDevEnv } from 'utils/enviroment';
const isDevEnv = true;

export const refreshToken = (token: string, expires: Date): IUpdateTokenAction => ({
  type: AUTH_UPDATE_TOKEN,
  payload: {
    token,
    token_expires: expires,
  },
});

export const authRequestCodeAction = (dispatch: Dispatch) =>
  dispatch({
    type: AUTH_REQUEST_CODE,
    payload: async () => {
      const result = await passwordCodeRequest();
      if (result.ok) {
        dispatch(push(PATHS_CONFIG.signin_confirm.path));
        return result.data;
      }

      throw result;
    },
  });

export const passwordCheckAction = (formData: IPasswordCheckRequest) => (dispatch: Dispatch) =>
  dispatch({
    type: AUTH_CHECK_PASSWORD,
    payload: async () => {
      const { phone } = formData;
      try {
        const isTestPhone = !!find(equals(phone))(DEV_TEST_PHONE_LIST);
        const result = await passwordCheckRequest(formData);
        if (result.ok && result.data.status === 'ok') {
          if (isDevEnv && isTestPhone) {
            setTimeout(() => authRequestCodeAction(dispatch));
          } else {
            await firebaseAuth.getLoginCode(phone);
          }
          dispatch(smsConfirmClearAttempt);
        }
        dispatch(push(PATHS_CONFIG.signin_confirm.path));
        return { phone };
      } catch (e) {
        throw new SubmissionError({ password: AUTH_PASSWORD_ERROR });
      }
    },
  });

export const signIn = (data: ICodeRequest) => (dispatch: Dispatch, getState: getStateType) =>
  dispatch({
    type: AUTH_SET_TOKEN,
    payload: async () => {
      const sessid = getSessId(getState());
      const phone = getPhone(getState());

      try {
        const isTestPhone = !!find(equals(phone))(DEV_TEST_PHONE_LIST);
        if (isTestPhone && isDevEnv) {
          const result = await signInRequest({ ...data, sessid });
          // TODO: fix it, replace to single action
          setTimeout(() => dispatch(push(PATHS_CONFIG.banking.path)), 0);
          return result;
        }

        const { code } = data;
        if (code) {
          const tokenFirebase = await firebaseAuth.verifyCode(code);
          setTimeout(() => dispatch(push(PATHS_CONFIG.banking.path)), 0);
          return { 'token-firebase': tokenFirebase };
        }
      } catch (e) {
        dispatch(smsConfirmFailedAttempt);
        throw new SubmissionError({ code: AUTH_CONFIRM_ERROR });
      }
    },
  });

export const refreshTokenAction = async (dispatch: Dispatch, getState: getStateType) => {
  const firebaseToken = getFirebaseToken(getState());
  if (firebaseToken) {
    const token = await firebaseAuth.refreshToken();
    const expiredTime = addSeconds(Date.now(), EXPIRES_FIREBASE_SECOND_INTERVAL);
    return dispatch(refreshToken(token, expiredTime));
  }
  const response = await refreshTokenRequest();
  if (response.ok) {
    return dispatch(refreshToken(response.data.token, addSeconds(Date.now(), EXPIRES_UAS_SECOND_INTERVAL)));
  }
};

export const setTokenError = (errors: IServerErrors) => ({
  type: `${AUTH_UPDATE_TOKEN}_ERROR`,
  payload: { errors },
});

export const removeToken = {
  type: AUTH_REMOVE_TOKEN,
};

export const toggleLogoutModal = (isShown: boolean) => ({
  type: TOGGLE_LOGOUT_CONFIRM_MODAL,
  payload: isShown,
});

export const goToAuth = (dispatch: Dispatch) => {
  dispatch(removeToken);
  dispatch(toggleLogoutModal(false));
  dispatch(push(AUTHORIZATION_PATH));
};

export const logout = async (dispatch: Dispatch) => {
  try {
    const result = await logoutRequest();
    if (result.ok && result.data.success) {
      dispatch(removeToken);
      history.push(PATHS_CONFIG.login.path);
    }
  } catch (e) {
    return e;
  }
};
