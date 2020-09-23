import { emptyStore } from 'modules/store/emptyStore';
import { IStore } from 'modules/store/types';
import { exampleClient } from 'models/operations/order-card/mock';
import {
  getAccounts,
  getOrganizations,
  getCards,
  getBusinessAccounts,
  getPersonalAccounts,
  getCurrentAccountId,
  getCurrentAccount,
  getCurrentCurrencyBalance,
  getPersonalCheckedBalances,
  getBusinessCheckedBalances,
  getClient,
  getClientAddress,
  getClientPhoneNumber,
} from '.';

import { AccountTypes } from '../../entities';

import { accountsData, cardData } from '../../mock';

const accountId = accountsData[0].id;
const currency = 'EUR';

const store: IStore = {
  ...emptyStore,
  organizations: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    data: [
      {
        clientName: 'Ralf Williams',
        id: 1,
        name: 'papaya',
        tin: 'PAPYMTMTXXX',
        title: 'Papaya Ltd',
        accounts: accountsData,
        cards: [cardData],
        client: exampleClient,
      },
    ],
    errors: [],
  },
  accountSidebar: {
    data: { [`${accountId}${currency}`]: true },
    isShown: false,
  },
  router: {
    action: 'PUSH',
    location: {
      pathname: `/banking/account/${accountId}/${currency}`,
      search: '',
      hash: '',
      key: '',
      state: '',
    },
  },
};

describe('organizations selector tests', () => {
  test('getOrganizations should return organizations', () => {
    const organizations = getOrganizations(store);
    expect(organizations.length).toEqual(1);
    expect(organizations).toMatchSnapshot();
  });

  test('getCards should return card list', () => {
    const cards = getCards(store);
    expect(cards.length).toEqual(1);
    expect(cards[0]).toBe(cardData);
    expect(cards).toMatchSnapshot();
  });

  test('getAccounts should return account list', () => {
    const accounts = getAccounts(store);
    expect(accounts.length).toEqual(2);
    expect(accounts).toMatchSnapshot();
  });

  test('getBusinessAccounts should return business account list', () => {
    const all = getBusinessAccounts(store);
    expect(all.length).toEqual(1);
    expect(all[0].accountType).toBe(AccountTypes.JURIDICAL);
  });

  test('getPersonalAccounts should return personal account list', () => {
    const all = getPersonalAccounts(store);
    expect(all.length).toEqual(1);
    expect(all[0].accountType).toBe(AccountTypes.PHYSICAL);
  });

  test('getCurrentAccountId should return account Id', () => {
    const id = getCurrentAccountId(store);
    expect(id).toEqual(accountId);
  });

  test('getCurrentAccount should return current account (by pathname)', () => {
    const account = getCurrentAccount(store);
    expect(account).toBe(accountsData[0]);
  });

  test('getCurrentCurrencyBalance should return current currency (by pathname)', () => {
    const balance = getCurrentCurrencyBalance(store);
    expect(balance).toMatchSnapshot();
  });

  test('getPersonalCheckedBalances should return personal checked balances', () => {
    const accountWithBalances = getPersonalCheckedBalances(store);

    const emptySidebarStore = {
      ...store,
      accountSidebar: {
        data: {},
        isShown: false,
      },
    };

    const empty = getPersonalCheckedBalances(emptySidebarStore);

    expect(accountWithBalances[accountId].length).toEqual(1);
    expect(empty[accountId]).toBeUndefined();
    expect(accountWithBalances).toMatchSnapshot();
  });

  test('getBusinessCheckedBalances should return personal checked balances', () => {
    const emptyAccountWithBalances = getBusinessCheckedBalances(store);
    const businessId = accountsData[1].id;

    const withBusinessSidebarStore = {
      ...store,
      accountSidebar: {
        data: { [`${businessId}${currency}`]: true },
        isShown: false,
      },
    };

    const withBusiness = getBusinessCheckedBalances(withBusinessSidebarStore);
    expect(withBusiness[businessId].length).toEqual(1);

    expect(emptyAccountWithBalances[accountId]).toBeUndefined();
  });

  test("getClient should return first organization's client", () => {
    const client = getClient(store);
    expect(client).toEqual(exampleClient);
  });

  test("getClientAddress should return first organization's client address", () => {
    const clientAddress = getClientAddress(store);
    expect(clientAddress).toEqual(exampleClient.address);
  });

  test("getClientPhoneNumber should return first organization's client phone", () => {
    const clientPhoneNumber = getClientPhoneNumber(store);
    expect(clientPhoneNumber).toEqual(exampleClient.phoneNumber);
  });
});
