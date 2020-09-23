import {
  findIndex, isNil, pipe, pathOr, forEach
} from 'ramda';
import { matchPath } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';

import { CurrencyCodeType } from 'modules/currencies';
import { getToken, getFirebaseToken } from 'models/authorization/redux/selectors';
import { IStore } from 'modules/store/types';

enum RoutePaths {
  BANKING = 'banking',
  BANKING_ACCOUNT = 'banking_account',
  NEW_ACCOUNT = 'new_account',
  BONUSES = 'bonuses',
  BUSINESS = 'business',
  INSURANCE = 'insurance',
  CRYPTOTRADING = 'cryptotrading',
  PROFILE = 'profile',
  AUTHORIZATION = 'authorization',
  SIGNIN = 'signin',
  SIGNIN_CONFIRM = 'signin_confirm',
  TOPUP_PUBLIC = 'topup_public',
}

export type RoutePathType =
  | RoutePaths.BANKING
  | RoutePaths.BANKING_ACCOUNT
  | RoutePaths.NEW_ACCOUNT
  | RoutePaths.BONUSES
  | RoutePaths.BUSINESS
  | RoutePaths.CRYPTOTRADING
  | RoutePaths.PROFILE
  | RoutePaths.AUTHORIZATION
  | RoutePaths.SIGNIN
  | RoutePaths.TOPUP_PUBLIC
  | RoutePaths.INSURANCE
  | RoutePaths.SIGNIN_CONFIRM;

export const BANKING_PATH = '/';
export const BANKING_ACCOUNT_PATH = '/banking/account/:id/:currency';
export const NEW_ACCOUNT_PATH = '/create-account';
export const BONUSES_PATH = '/bonuses';
export const BUSINESS_PATH = '/business';
export const INSURANCE_PATH = '/insurance';
export const CRYPTOTRADING_PATH = 'https://frontend.stage.ak-ecosystem.com/';
export const PROFILE_PATH = '/profile';
export const AUTHORIZATION_PATH = '/authorization';
export const SIGNIN_PATH = '/authorization/signin';
export const SIGNIN_CONFIRM_PATH = '/authorization/signin/confirm';
export const ERROR_PATH = '/error';
export const TOPUP_PUBLIC_PATH = '/public-topup/:id';

export interface IPath {
  path: string;
  name: RoutePathType;
}

export interface IPathConfig {
  [key: string]: IPath;
}

export const PATHS_CONFIG: IPathConfig = {
  [RoutePaths.SIGNIN]: {
    path: SIGNIN_PATH,
    name: RoutePaths.SIGNIN,
  },
  [RoutePaths.SIGNIN_CONFIRM]: {
    path: SIGNIN_CONFIRM_PATH,
    name: RoutePaths.SIGNIN_CONFIRM,
  },
  [RoutePaths.AUTHORIZATION]: {
    path: AUTHORIZATION_PATH,
    name: RoutePaths.AUTHORIZATION,
  },
  [RoutePaths.BANKING]: {
    path: BANKING_PATH,
    name: RoutePaths.BANKING,
  },
  [RoutePaths.BANKING_ACCOUNT]: {
    path: BANKING_ACCOUNT_PATH,
    name: RoutePaths.BANKING_ACCOUNT,
  },
  [RoutePaths.NEW_ACCOUNT]: {
    path: NEW_ACCOUNT_PATH,
    name: RoutePaths.NEW_ACCOUNT,
  },
  [RoutePaths.BONUSES]: {
    path: BONUSES_PATH,
    name: RoutePaths.BONUSES,
  },
  [RoutePaths.BUSINESS]: {
    path: BUSINESS_PATH,
    name: RoutePaths.BUSINESS,
  },
  [RoutePaths.INSURANCE]: {
    path: INSURANCE_PATH,
    name: RoutePaths.INSURANCE,
  },
  [RoutePaths.CRYPTOTRADING]: {
    path: CRYPTOTRADING_PATH,
    name: RoutePaths.CRYPTOTRADING,
  },
  [RoutePaths.PROFILE]: {
    path: PROFILE_PATH,
    name: RoutePaths.PROFILE,
  },
  [RoutePaths.TOPUP_PUBLIC]: {
    path: TOPUP_PUBLIC_PATH,
    name: RoutePaths.TOPUP_PUBLIC,
  },
};

export const mainMenuPaths: IPath[] = [
  PATHS_CONFIG.banking,
  PATHS_CONFIG.bonuses,
  PATHS_CONFIG.business,
  PATHS_CONFIG.cryptotrading,
  PATHS_CONFIG.insurance,
  PATHS_CONFIG.profile,
];

const pathWithParamsForMatch: string[] = [BANKING_ACCOUNT_PATH];

export const getActiveIndex = (location: string, paths: IPath[]) =>
  pipe(
    findIndex((item: IPath) => {
      const match = matchPath(location, {
        path: item.path,
        exact: true,
      });
      return !isNil(match);
    }),
    (index: number) => (index < 0 ? 0 : index),
  )(paths);

export const getBankingAccountPath = (id: string, currency: CurrencyCodeType): string =>
  `/banking/account/${id}/${currency}`;

export const getPathParamValue = (key: string, match: string, pathList: string[] = pathWithParamsForMatch): string => {
  let matchedPath = {};
  forEach((path: string) => {
    const res = matchPath(match, {
      path,
      exact: true,
      strict: false,
    });
    if (res !== null) {
      matchedPath = res;
    }
  }, pathList);

  return pathOr('', ['params', key])(matchedPath);
};

export const getRouteParamByName = (name: string, routeProps: RouteComponentProps): string =>
  pathOr('', ['match', 'params', name], routeProps);

export const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: AUTHORIZATION_PATH,
  authenticatedSelector: (store: IStore) => !!getFirebaseToken(store) || !!getToken(store),
  wrapperDisplayName: 'UserIsAuthenticated',
});
