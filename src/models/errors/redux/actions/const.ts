import { defaultTo } from 'ramda';
import { push } from 'connected-react-router';

import { store } from 'modules/store';
import { PATHS_CONFIG } from 'containers/routing/utils';

import { IAppErrors } from '../../entities';

export const default404 = defaultTo<IAppErrors>({
  type: '404',
  title: 'Page not found',
  subtitle: 'error: 404',
});

export const default500 = defaultTo<IAppErrors>({
  type: '500',
  title: 'Sorry, something went wrong.\n Please try again or contact support.',
  subtitle: 'error: 500',
  supportUrl: '/',
  btnText: 'Try again',
});

export const default403 = defaultTo<IAppErrors>({
  type: '403',
  title: 'We are sorry, but you do not have access to this page',
  subtitle: 'error: 403',
});

export const defaultInternet = defaultTo<IAppErrors>({
  type: 'ERR_INTERNET_DISCONNECTED',
  title: 'Network Error. Please check your network connection and try again.',
  subtitle: 'error: No Internet.',
  btnText: 'Try again',
});

export const expiredSession: IAppErrors = {
  type: '401',
  title: 'Your session has expired.',
  btnText: 'Ok',
  onOk: () => store.dispatch(push(PATHS_CONFIG.authorization.path)),
};
