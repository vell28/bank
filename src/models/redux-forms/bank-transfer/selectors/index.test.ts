import { CurrencyCodes, CurrencyCodeType } from 'modules/currencies';
import { emptyStore } from 'modules/store/emptyStore';
import { IStore } from 'modules/store/types';
import { AccountColors, AccountStatus, AccountTypes } from 'models/organizations/entities';
import { getIsSwiftTransfer } from '.';

const getStore = (currencyCode: CurrencyCodeType, iban: string): IStore => {
  return {
    ...emptyStore,
    organizations: {
      ...emptyStore.organizations,
      data: [
        {
          id: 1,
          name: '',
          title: '',
          tin: '',
          clientName: '',
          client: {},
          accounts: [
            {
              id: 'PPY5107',
              accountType: AccountTypes.PHYSICAL,
              number: '',
              status: AccountStatus.ACTIVE,
              currency: {
                code: currencyCode,
              },
              clientId: '',
              color: AccountColors.DEFAULT,
              accountName: '',
              bonusProgramActivate: false,
              balance: 0,
              balanceHold: 0,
              accruedInterest: null,
              availableBalance: 0,
              balances: [],
              createdAt: '',
              availableOperations: [],
            },
          ],
          cards: [],
        },
      ],
    },
    router: {
      ...emptyStore.router,
      location: {
        ...emptyStore.router.location,
        pathname: `/banking/account/PPY5107/${currencyCode}`,
      },
    },
    form: {
      bankTransferForm: {
        registeredFields: {
          iban: {
            name: 'iban',
            type: 'Field',
            count: 1,
          },
        },
        fields: {
          iban: {
            visited: false,
            touched: false,
          },
        },
        values: {
          iban,
        },
      },
    },
  };
};

describe('transfer to card selector tests', () => {
  test('getIsSwiftTransfer should determine if a transfer is of swift type', () => {
    expect(getIsSwiftTransfer(getStore(CurrencyCodes.EUR, ''))).toBe(false);
    expect(getIsSwiftTransfer(getStore(CurrencyCodes.EUR, 'LV'))).toBe(false);
    expect(getIsSwiftTransfer(getStore(CurrencyCodes.EUR, 'LVxxx'))).toBe(false);
    expect(getIsSwiftTransfer(getStore(CurrencyCodes.EUR, 'RU'))).toBe(true);
    expect(getIsSwiftTransfer(getStore(CurrencyCodes.EUR, 'RUxxx'))).toBe(true);
    expect(getIsSwiftTransfer(getStore(CurrencyCodes.RUB, ''))).toBe(false);
    expect(getIsSwiftTransfer(getStore(CurrencyCodes.RUB, 'LV'))).toBe(true);
    expect(getIsSwiftTransfer(getStore(CurrencyCodes.RUB, 'LVxxx'))).toBe(true);
    expect(getIsSwiftTransfer(getStore(CurrencyCodes.RUB, 'RU'))).toBe(true);
    expect(getIsSwiftTransfer(getStore(CurrencyCodes.RUB, 'RUxxx'))).toBe(true);
  });
});
