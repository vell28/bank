import { createSelector } from 'reselect';
import { IStore } from 'modules/store/types';
import { IAccountSidebarState } from '../reducers';
import { IAccountSidebar } from '../../entities';

export const getAppState = (state: IStore): IAccountSidebarState => state.accountSidebar;

export const getAccountSidebarMenu = createSelector(
  [getAppState],
  (state: IAccountSidebarState): IAccountSidebar => state.data,
);

export const getIsShownSidebar = createSelector([getAppState], (state: IAccountSidebarState): boolean => state.isShown);
