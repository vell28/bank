import { Dispatch } from 'redux';
import { push } from 'connected-react-router';

import { ERROR_PATH } from 'containers/routing/utils';
import { IAction } from 'modules/store/types';
import {
  default404, default500, default403, defaultInternet, expiredSession
} from './const';

import { IAppErrors } from '../../entities';

export const SET_APP_ERROR = 'app-error/SET';

export type IAppErrorAction = IAction<IAppErrors>;

export const app404Error = (dispatch: Dispatch) => (error?: IAppErrors) => {
  dispatch({
    type: SET_APP_ERROR,
    payload: default404(error),
  });
  dispatch(push(ERROR_PATH));
};

export const app500Error = (dispatch: Dispatch) => (error?: IAppErrors) => {
  dispatch({
    type: SET_APP_ERROR,
    payload: default500(error),
  });
  dispatch(push(ERROR_PATH));
};

export const app403Error = (dispatch: Dispatch) => (error?: IAppErrors) => {
  dispatch({
    type: SET_APP_ERROR,
    payload: default403(error),
  });
  dispatch(push(ERROR_PATH));
};

export const appInternetError = (dispatch: Dispatch) => (error?: IAppErrors) => {
  dispatch({
    type: SET_APP_ERROR,
    payload: defaultInternet(error),
  });
  dispatch(push(ERROR_PATH));
};

export const appSessionExpired = (dispatch: Dispatch) => {
  dispatch({
    type: SET_APP_ERROR,
    payload: expiredSession,
  });
  dispatch(push(ERROR_PATH));
};
