import { createSelector } from 'reselect';
import { pathOr, propOr } from 'ramda';

import { CurrencyCodeType } from 'modules/currencies';
import { IStore } from 'modules/store/types';
import {
  IAmount,
  IPaymentContact,
  IPaymentToCardData,
  IPaymentToContactData,
  IPaymentSepaData,
  IPaymentSwiftData,
  IPaymentSepa,
  IPaymentSwift,
} from 'modules/api-requests/payments/entities';
import { isSwiftTransfer } from 'utils/transfer';
import { getCurrentAccountId, getCurrentCurrency, getActiveCardsByAccount } from 'models/organizations/redux/selectors';
import { getPreparedAmount } from 'utils/redux-form/redux-form';
import { IBankData, ICardData, IRates } from '../../entities';
import { ITransferState } from '../reducers';
import { ICard } from '../../../card-settings/entities';

export const getTransferState = (state: IStore): ITransferState => state.operations.transfer;

export const getTransferIsError = (state: IStore): boolean => getTransferState(state).isError;

export const getCard = createSelector([getTransferState], (state: ITransferState): ICardData => state.data.card);

export const getBank = createSelector([getTransferState], (state: ITransferState): IBankData => state.data.bank);

export const getRates = createSelector([getTransferState], (state: ITransferState): IRates => state.data.rates);

export const getTransferAmountByValue = createSelector(
  [getTransferState, getCurrentCurrency],
  (state: ITransferState, currency: CurrencyCodeType): IAmount => {
    const value = pathOr('0', ['data', 'value'])(state);
    return getPreparedAmount(value, currency);
  },
);

export const getPurpose = createSelector([getTransferState], (state: ITransferState): string =>
  pathOr('', ['data', 'purpose'])(state));

export const getPhoneNumber = createSelector([getTransferState], (state: ITransferState): string =>
  pathOr('', ['data', 'phone'])(state));

export const getPaymentCardData = createSelector(
  [getCard, getPurpose, getTransferAmountByValue, getActiveCardsByAccount, getCurrentAccountId],
  (
    card: ICardData,
    purpose: string,
    amount: IAmount,
    fromCards: ICard[],
    id: string,
  ): IPaymentContact<IPaymentToCardData> => {
    const cardNumber: string = propOr('', 'cardNumber')(card);

    return {
      payment_contact: {
        account: id,
        fromCardId: pathOr('', [0, 'id'])(fromCards),
        cardNumber: cardNumber.replace(/\s+/g, ''),
        beneficiaryName: propOr('', 'beneficiaryName')(card),
        amount,
        purpose,
      },
    };
  },
);

export const getPaymentSepaData = createSelector(
  [getBank, getTransferAmountByValue, getCurrentAccountId],
  (bank: IBankData, amount: IAmount, id: string): IPaymentSepa<IPaymentSepaData> => ({
    payment_sepa: {
      account: id,
      beneficiaryName: propOr('', 'beneficiaryName')(bank),
      iban: propOr('', 'iban')(bank),
      transferDetails: propOr('', 'transferDetails')(bank),
      purpose: propOr('', 'purpose')(bank),
      amount,
    },
  }),
);

export const getPaymentSwiftData = createSelector(
  [getBank, getCurrentAccountId, getTransferAmountByValue],
  (bank: IBankData, id: string, amount: IAmount): IPaymentSwift<IPaymentSwiftData> => ({
    payment_swift: {
      account: id,
      beneficiaryName: propOr('', 'beneficiaryName')(bank),
      beneficiaryAccount: propOr('', 'iban')(bank),
      country: propOr('', 'country')(bank),
      city: propOr('', 'city')(bank),
      address: propOr('', 'address')(bank),
      swiftCode: propOr('', 'swiftCode')(bank),
      beneficiaryBank: propOr('', 'beneficiaryBank')(bank),
      intermediarySwift: propOr('', 'intermediarySwift')(bank),
      intermediaryBank: propOr('', 'intermediaryBank')(bank),
      intermediaryAccount: propOr('', 'intermediaryAccount')(bank),
      commissionType: propOr('', 'commissionType')(bank),
      urgency: propOr('', 'urgency')(bank),
      purpose: propOr('', 'purpose')(bank),
      amount,
    },
  }),
);

export const getPaymentContactData = createSelector(
  [getPhoneNumber, getPurpose, getCurrentAccountId, getTransferAmountByValue],
  (phoneNumber: string, purpose: string, id: string, amount: IAmount): IPaymentContact<IPaymentToContactData> => ({
    payment_contact: {
      account: id,
      phoneNumber,
      amount,
      purpose,
    },
  }),
);

export const isTransferLoading = createSelector(
  [getTransferState],
  (state: ITransferState): boolean => state.isLoading,
);

export const getIsSwiftTransfer = createSelector(
  [getBank, getCurrentCurrency],
  (bank: IBankData, currency: CurrencyCodeType): boolean => {
    const iban: string = propOr('', 'iban')(bank);
    return isSwiftTransfer(currency, iban);
  },
);
