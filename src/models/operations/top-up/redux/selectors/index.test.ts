import { accountsData } from 'models/organizations/mock';
import { emptyStore } from 'modules/store/emptyStore';
import { IStore } from 'modules/store/types';
import { getCard, getRedirectUrl, getTopUpCardData } from '.';

const cardData = {
  cardNumber: '123 123',
  beneficiaryName: 'Test',
  expiresDate: '',
  cvv: '000',
  isHolder: false,
  country: 'country',
  city: 'city',
};

const store: IStore = {
  ...emptyStore,
  operations: {
    ...emptyStore.operations,
    topUp: {
      isLoading: false,
      isSuccess: false,
      isError: false,
      data: {
        card: cardData,
        value: '10',
        redirectUrl: 'redirectUrl',
      },
      errors: [],
    },
  },
  organizations: {
    ...emptyStore.organizations,
    data: [
      {
        id: 0,
        name: '',
        title: '',
        tin: '',
        clientName: '',
        client: {},
        accounts: accountsData,
        cards: [],
      },
    ],
  },
  router: {
    action: 'PUSH',
    location: {
      pathname: `/banking/account/${accountsData[0].id}/USD`,
      search: '',
      hash: '',
      key: '',
      state: '',
    },
  },
};

describe('top up from card selector tests', () => {
  test('getCard should return card', () => {
    const card = getCard(store);
    expect(card).toBe(cardData);
    expect(card.cvv).toEqual('000');
    expect(card.isHolder).toEqual(false);
  });

  test('getPaymentCardData should return topup from card data', () => {
    const topUpCardData = getTopUpCardData(store);
    expect(topUpCardData.topupToAccountId).toBe(accountsData[0].number);
    expect(topUpCardData.amount).toEqual('10');
    expect(topUpCardData.currency).toEqual('USD');
    expect(topUpCardData).toMatchSnapshot();
  });

  test('getRedirectUrl should return redirect url', () => {
    const redirectUrl = getRedirectUrl(store);
    expect(redirectUrl).toEqual('redirectUrl');
  });
});
