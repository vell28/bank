import { defaultTo, pathOr } from 'ramda';

import { createSelector } from 'reselect';
import { IStore } from 'modules/store/types';
import { IAppState } from '../reducers';
import { IApplication } from '../../entities';

export const getAppState = (state: IStore): IAppState => state.application;

const defaultToApp = defaultTo({
  applicationId: '',
  productId: '',
  Authorization: '',
  bankName: '',
  BIC: '',
});

export const getAppData = createSelector([getAppState], (state: IAppState): IApplication => defaultToApp(state.data));
export const getCurrentRouterPath = (state: IStore): string => pathOr('', ['router', 'location', 'pathname'])(state);

export const getBankName = createSelector([getAppData], (app: IApplication) => app.bankName);

export const getBankBIС = createSelector([getAppData], (app: IApplication) => app.BIC);
