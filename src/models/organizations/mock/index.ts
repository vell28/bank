import { CurrencyCodes } from 'modules/currencies';
import {
  IAccount, AccountStatus, AccountTypes, AccountColors
} from '../entities';
import { ICard, CardProduct, Limit } from '../../operations/card-settings/entities';

import { IServerClient } from '../redux/actions/entities';
import { exampleServerAddress } from '../../operations/order-card/mock';

export const cardData: ICard = {
  accountId: 'PPY5107',
  availableBalance: 1897.61,
  balance: 0,
  balanceHold: 0,
  balances: [
    {
      currency: CurrencyCodes.EUR,
      balance: 1030.05,
      balanceHold: 0,
      availableBalance: 1897.61,
    },
  ],
  clientId: '6449',
  currency: { code: CurrencyCodes.EUR },
  expireAt: '2022-05-01T00:00:00',
  id: 'PPY13643',
  limits: [
    {
      type: Limit.DAY,
      title: null,
      maxValue: 500,
      usedValue: 0,
    },
  ],
  number: '5277 60_3 984',
  options: {
    limits: { disable: false },
  },
  owner: { embossedName: 'RALF WILLIAMS' },
  paySystem: 'MASTERCARD',
  plasticStatus: 'PENDING_SHIPMENT',
  productType: CardProduct.MAIN,
  status: AccountStatus.ACTIVE,
};

export const accountsData: IAccount[] = [
  {
    accountName: 'MT98PAPY36836000002676370004519',
    accountType: AccountTypes.PHYSICAL,
    accruedInterest: null,
    availableBalance: 1897.61,
    availableOperations: [],
    balance: 0,
    balanceHold: 0,
    color: AccountColors.DEFAULT,
    balances: [
      {
        currency: CurrencyCodes.EUR,
        balance: 1030.05,
        balanceHold: 0,
        availableBalance: 1897.61,
      },
    ],
    bonusProgramActivate: false,
    clientId: '6449',
    createdAt: '2019-11-24T14:59:55',
    currency: { code: CurrencyCodes.EUR },
    id: 'PPY5107',
    number: 'MT98PAPY36836000002676370004519',
    status: AccountStatus.ACTIVE,
  },
  {
    accountName: 'MT98PAPY36836000002676370004519',
    accountType: AccountTypes.JURIDICAL,
    accruedInterest: null,
    availableBalance: 1897.61,
    availableOperations: [],
    balance: 0,
    balanceHold: 0,
    color: AccountColors.DEFAULT,
    balances: [
      {
        currency: CurrencyCodes.EUR,
        balance: 1030.05,
        balanceHold: 0,
        availableBalance: 1897.61,
      },
    ],
    bonusProgramActivate: false,
    clientId: '6449',
    createdAt: '2019-11-24T14:59:55',
    currency: { code: CurrencyCodes.EUR },
    id: 'PPY6666',
    number: 'MT98PAPY36836000002676370004519',
    status: AccountStatus.ACTIVE,
  },
];

export const clientData: IServerClient = {
  id: '42',
  name: 'Test Client',
  citizenship: 'Germany',
  email: 'test.client@test.com',
  phoneNumber: '222333',
  address: exampleServerAddress,
};
