import { getFormValues } from 'redux-form';
import { propOr } from 'ramda';

import { IStore } from 'modules/store/types';

export const getTransferCardNumber = (state: IStore): string =>
  propOr('', 'cardNumber')(getFormValues('transferCardForm')(state));
