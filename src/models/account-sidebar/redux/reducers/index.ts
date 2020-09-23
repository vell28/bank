import typeToReducer from 'type-to-reducer';

import { IAccountSidebar } from '../../entities';
import {
  UPDATE_ACCOUNT_SIDEBAR, SHOW_HIDE_SIDEBAR, IToggleSidebar, IUpdateSidebarAction
} from '../actions';

export interface IAccountSidebarState {
  data: IAccountSidebar;
  isShown: boolean;
}

export const accountSidebarInitState: IAccountSidebarState = {
  data: {},
  isShown: false,
};

export const accountSidebar = typeToReducer<IAccountSidebarState>(
  {
    [UPDATE_ACCOUNT_SIDEBAR]: (state: IAccountSidebarState, action: IUpdateSidebarAction): IAccountSidebarState => ({
      ...state,
      data: { ...action.payload },
    }),
    [SHOW_HIDE_SIDEBAR]: (state: IAccountSidebarState, action: IToggleSidebar): IAccountSidebarState => ({
      ...state,
      isShown: action.payload,
    }),
  },
  accountSidebarInitState,
);
