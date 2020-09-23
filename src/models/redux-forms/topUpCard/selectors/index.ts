import { formValueSelector, getFormValues } from 'redux-form';
import { propOr } from 'ramda';

import { IStore } from 'modules/store/types';

export const getTopUpCardNumber = (state: IStore): string =>
  propOr('', 'cardNumber')(getFormValues('TopUpCardForm')(state));

export const getTopUpCardFormValueFromState = formValueSelector('TopUpCardForm');
