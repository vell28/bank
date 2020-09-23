import { emptyStore } from 'modules/store/emptyStore';
import { getAccountSidebarMenu, getIsShownSidebar } from '.';

import { IAccountSidebar } from '../../entities';

const accountId = 'accountId';

const data: IAccountSidebar = {
  [accountId]: true,
};

const store = {
  ...emptyStore,
  accountSidebar: {
    data,
    isShown: true,
  },
};

describe('account  sidebar selector tests', () => {
  test('getAccountSidebarMenu should return menu', () => {
    const sidebar = getAccountSidebarMenu(store);
    expect(sidebar[accountId]).toBeTruthy();
    expect(sidebar).toMatchSnapshot();
  });

  test('getIsShownSidebar should return isShown menu', () => {
    const isShown = getIsShownSidebar(store);
    expect(isShown).toBeTruthy();
  });
});
