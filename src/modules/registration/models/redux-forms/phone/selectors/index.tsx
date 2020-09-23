import { getFormValues } from 'redux-form';
import { propOr } from 'ramda';

import { IStore } from 'modules/store/types';

export const getRegistrationPhone = (state: IStore): string =>
  propOr('', 'phone')(getFormValues('registerPhoneForm')(state));

export const getRegistrationCode = (state: IStore): string =>
  propOr('', 'code')(getFormValues('registerPhoneForm')(state));
