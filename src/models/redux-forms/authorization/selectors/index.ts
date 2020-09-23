import { getFormValues } from 'redux-form';
import { propOr } from 'ramda';

import { IStore } from 'modules/store/types';

export const getAuthCode = (state: IStore): string => propOr('', 'code')(getFormValues('signInConfirmForm')(state));
