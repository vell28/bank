import { propOr } from 'ramda';
import { formValueSelector } from 'redux-form';
import { createSelector } from 'reselect';

import { CurrencyCodeType } from 'modules/currencies';
import { IStore } from 'modules/store/types';
import { isSwiftTransfer } from 'utils/transfer';
import { getCurrentCurrency } from 'models/organizations/redux/selectors';

export const bankTransferFormSelector = formValueSelector('bankTransferForm');

export const getIbanSelector = (state: IStore): string => bankTransferFormSelector(state, 'iban');

export const getIsSwiftTransfer = createSelector(
  [getCurrentCurrency, getIbanSelector],
  (currency: CurrencyCodeType, iban: string): boolean => {
    const ibanLength: number = propOr(0, 'length')(iban);

    return currency && ibanLength >= 2 ? isSwiftTransfer(currency, iban) : false;
  },
);
