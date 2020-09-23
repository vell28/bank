import { getStateType, IAction } from 'modules/store/types';
import { Dispatch } from 'redux';
import { push } from 'connected-react-router';

import { BANKING_PATH } from 'containers/routing/utils';
import { getRouterPathname } from 'models/router/selectors';
import { IAccountSidebar } from '../../entities';

export const UPDATE_ACCOUNT_SIDEBAR = 'sidebar/UPDATE_ACCOUNT';
export const SHOW_HIDE_SIDEBAR = 'sidebar/TOGGLE';

export type IUpdateSidebarAction = IAction<IAccountSidebar>;
export type IToggleSidebar = IAction<boolean>;

const BANKING_ACCOUNT = '/banking/account/';

export const updateSidebar = (data: IAccountSidebar): IUpdateSidebarAction => ({
  type: UPDATE_ACCOUNT_SIDEBAR,
  payload: data,
});

export const getSidebarAccountId = (data: IAccountSidebar) => (dispatch: Dispatch, setState: getStateType): any => {
  const pathname = getRouterPathname(setState());

  const path = pathname.replace(BANKING_ACCOUNT, '').replace('/', '');

  if (path && !data[path] && data[path] !== undefined) {
    dispatch(push(BANKING_PATH));
  }

  dispatch(updateSidebar(data));
};

export const toggleSidebar = (isShown: boolean): IToggleSidebar => ({
  type: SHOW_HIDE_SIDEBAR,
  payload: isShown,
});
