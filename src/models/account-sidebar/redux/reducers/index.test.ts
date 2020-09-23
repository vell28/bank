import { accountSidebar, IAccountSidebarState } from '.';
import { UPDATE_ACCOUNT_SIDEBAR, SHOW_HIDE_SIDEBAR } from '../actions';

const initAccountSidebar: IAccountSidebarState = {
  data: {},
  isShown: false,
};

const accountId = 'accountId';

const data = {
  [accountId]: true,
};

describe('accountSidebar reducers', () => {
  test('accountSidebar/UPDATE_ACCOUNT_SIDEBAR', () => {
    const action = {
      type: UPDATE_ACCOUNT_SIDEBAR,
      payload: data,
    };

    const newState = accountSidebar(initAccountSidebar, action);
    expect(newState.data[accountId]).toBeTruthy();
    expect(newState).toMatchSnapshot();
  });

  test('accountSidebar/UPDATE_ACCOUNT_SIDEBAR - should hide sidebar', () => {
    const action = {
      type: SHOW_HIDE_SIDEBAR,
      payload: false,
    };

    const newState = accountSidebar(initAccountSidebar, action);
    expect(newState.isShown).toBeFalsy();
    expect(newState).toMatchSnapshot();
  });

  test('accountSidebar/UPDATE_ACCOUNT_SIDEBAR - should show sidebar', () => {
    const action = {
      type: SHOW_HIDE_SIDEBAR,
      payload: true,
    };

    const newState = accountSidebar(initAccountSidebar, action);
    expect(newState.isShown).toBeTruthy();
    expect(newState).toMatchSnapshot();
  });
});
