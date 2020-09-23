import {
  find, propEq, filter, pipe, prop, isEmpty, and, map, pathOr, propOr
} from 'ramda';
import { createSelector } from 'reselect';
import memoizeOne from 'memoize-one';

import { isStateLoading } from 'modules/store/utils';

import { getCurrentRouterPath } from 'models/application/redux/selectors';
import { getPathParamValue } from 'containers/routing/utils';
import { getAccountSidebarMenu } from 'models/account-sidebar/redux/selectors';

import { IStore } from 'modules/store/types';
import { ICard, CardProductType } from 'models/operations/card-settings/entities';
import { IAccountSidebar } from 'models/account-sidebar/entities';
import { IAddress } from 'models/operations/order-card/entities';
import { CurrencyCodeType } from 'modules/currencies';
import { isNotEqual } from 'utils/ramda';
import {
  IOrganization,
  IAccount,
  AccountStatus,
  AccountTypes,
  IClient,
  IAccountBalances,
  IBalance,
} from '../../entities';
import { IOrganizationsState } from '../reducers';
import { emptyClient, emptyAddress } from './constants';

const EMPTY: any[] = [];

const filterBalance = (accounts: IAccount[], checked: IAccountSidebar): IAccountBalances => {
  const accountWithBalances: IAccountBalances = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const account of accounts) {
    const balances = account.balances.filter((balance: IBalance) => {
      const id = `${account.id}${balance.currency}`;
      return checked[id];
    });
    if (balances.length) {
      accountWithBalances[account.id] = balances;
    }
  }
  return accountWithBalances;
};

export const getOrganizationsState = (state: IStore): IOrganizationsState => state.organizations;

export const getOrganizations = (state: IStore): IOrganization[] => state.organizations.data;

export const getAccounts = createSelector([getOrganizations], (organizations: IOrganization[]): IAccount[] =>
  pathOr(EMPTY, [0, 'accounts'])(organizations));

export const getCurrentAccountId = createSelector([getCurrentRouterPath], (path: string): string =>
  getPathParamValue('id', path));

export const getCards = createSelector([getOrganizations], (organizations: IOrganization[]): ICard[] =>
  pathOr(EMPTY, [0, 'cards'])(organizations));

export const getAccountById = memoizeOne((id: string) =>
  createSelector([getAccounts], (accounts: IAccount[]): IAccount | undefined => find<IAccount>(propEq('id', id))(accounts)));

export const getAccountsCheckedList = createSelector(
  [getAccounts, getAccountSidebarMenu],
  (list: IAccount[], checked: IAccountSidebar): IAccount[] =>
    filter((account: IAccount) => {
      return checked[account.id];
    }, list),
);

export const isOrganizationsLoading = createSelector([getOrganizationsState], (state: IOrganizationsState): boolean =>
  isStateLoading(state));

export const getActiveCardsByAccount = createSelector(
  [getCards, getCurrentAccountId],
  (cards: ICard[], accountId: string): ICard[] => {
    return pipe<ICard[], ICard[], ICard[]>(
      filter(propEq('accountId', accountId)),
      filter((card: ICard) =>
        and(isNotEqual(card.status, AccountStatus.CLOSED_BY_CUSTOMER), isNotEqual(card.status, AccountStatus.CLOSED))),
    )(cards);
  },
);

export const getPersonalAccounts = createSelector([getAccounts], (list: IAccount[]): IAccount[] => {
  return filter(propEq('accountType', AccountTypes.PHYSICAL), list);
});

export const getBusinessAccounts = createSelector([getAccounts], (list: IAccount[]): IAccount[] => {
  return filter(propEq('accountType', AccountTypes.JURIDICAL), list);
});

export const getPersonalCheckedBalances = createSelector(
  [getPersonalAccounts, getAccountSidebarMenu],
  (accounts: IAccount[], checked: IAccountSidebar): IAccountBalances => filterBalance(accounts, checked),
);

export const getBusinessCheckedBalances = createSelector(
  [getBusinessAccounts, getAccountSidebarMenu],
  (accounts: IAccount[], checked: IAccountSidebar): IAccountBalances => filterBalance(accounts, checked),
);

export const isAccountLazyLoading = createSelector([getOrganizationsState], (state: IOrganizationsState): boolean =>
  and(isEmpty(state.data), state.isLoading));

export const getAccountsIds = createSelector([getAccounts], (accounts: IAccount[]): string[] =>
  map(prop('id'))(accounts));

export const getClient = createSelector(
  [getOrganizations],
  (organizations: IOrganization[]): IClient => pathOr(emptyClient, [0, 'client'])(organizations),
);

export const getClientAddress = createSelector(
  [getOrganizations],
  (organizations: IOrganization[]): IAddress => pathOr(emptyAddress, [0, 'client', 'address'])(organizations),
);

export const getClientPhoneNumber = createSelector([getClient], (client: IClient): string =>
  propOr('', 'phoneNumber')(client));

export const accountHasCardOfType = memoizeOne((productType: CardProductType) => {
  return createSelector(
    [getAccounts, getCards, getCurrentAccountId],
    (accounts: IAccount[], cards: ICard[], currentAccountId: string): boolean => {
      const targetAccount = accounts.find(propEq('id', currentAccountId));
      return cards.some(
        (card) => targetAccount && card.productType === productType && card.accountId === targetAccount.id,
      );
    },
  );
});
export const getCurrentCurrency = createSelector(
  [getCurrentRouterPath],
  (path: string): CurrencyCodeType => getPathParamValue('currency', path) as CurrencyCodeType,
);

export const getCurrentAccount = createSelector([getCurrentAccountId, getAccounts], (id: string, accounts: IAccount[]):
  | IAccount
  | undefined => find<IAccount>(propEq('id', id))(accounts));

export const getCurrentCurrencyBalance = createSelector(
  [getCurrentCurrency, getCurrentAccount],
  (currency: CurrencyCodeType, account?: IAccount): IBalance | undefined =>
    pipe(propOr([], 'balances'), find<IBalance>(propEq('currency', currency)))(account),
);
