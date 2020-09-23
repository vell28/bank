import { createSelector } from 'reselect';
import { pathOr, propOr } from 'ramda';

import { getCurrentAccount, getCurrentCurrency } from 'models/organizations/redux/selectors';
import { selectClientInfo } from 'models/operations/order-card/redux/selectors';

import { CurrencyCodeType } from 'modules/currencies';
import { IStore } from 'modules/store/types';
import { ITopUpFromCardData, ITopUpRequestData } from 'modules/api-requests/top-up/entities';
import { IAccount } from 'models/organizations/entities';
import { ITopUpState } from '../reducers';
import { ICardData } from '../../entities';

export const getTopUpState = (state: IStore): ITopUpState => state.operations.topUp;

export const getTopUpIsError = (state: IStore): boolean => getTopUpState(state).isError;

export const getCard = createSelector([getTopUpState], (state: ITopUpState): ICardData => state.data.card);

export const getTopUpCardData = createSelector(
  [getTopUpState, getCurrentCurrency, getCard, getCurrentAccount],
  (state: ITopUpState, currency: CurrencyCodeType, card: ICardData, account?: IAccount): ITopUpFromCardData => {
    const pan: string = propOr('', 'cardNumber')(card);
    const expireDate: string = propOr('', 'expiresDate')(card);

    return {
      amount: pathOr('0', ['data', 'value'])(state),
      currency,
      topupToAccountId: propOr('', 'number')(account),
      topupFromCard: {
        pan: pan.replace(/\s+/g, ''),
        cvv2: propOr('', 'cvv')(card),
        expireDate,
        isHolder: propOr('', 'isHolder')(card),
        holderName: propOr('', 'beneficiaryName')(card),
        holderCountry: propOr('', 'country')(card),
        holderCity: propOr('', 'city')(card),
      },
    };
  },
);

export const isTopUpLoading = createSelector([getTopUpState], (state: ITopUpState): boolean => state.isLoading);

export const getRedirectUrl = createSelector([getTopUpState], (state: ITopUpState): string =>
  pathOr('', ['data', 'redirectUrl'])(state));

export const getTopUpRequestData = createSelector(
  [getTopUpState, getCurrentCurrency, selectClientInfo, getCurrentAccount],
  (state: ITopUpState, currency: CurrencyCodeType, { embossedName }: any, account?: IAccount): ITopUpRequestData => ({
    amount: pathOr('0', ['data', 'value'])(state),
    email: pathOr('', ['data', 'request', 'email'])(state),
    accountId: propOr('', 'id')(account),
    initiatorName: embossedName,
    description: pathOr('', ['data', 'description'])(state),
    currency,
  }),
);
