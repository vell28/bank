import { createSelector } from 'reselect';

import { IRegistrationFormsState } from '../../../../../registration/redux/reducers/redux-forms';
import { getForms, getFormError } from '../../../../../registration/redux/selectors/redux-forms';
import { IBasicPersonalDataFromData } from '../../entities';

const defaultFormData = {
  email: '',
  gender: null,
  birthCountryCode: null,
  birthPlace: '',
  nameOnCard: '',
};

export const getBasicPersonalDataFormData = createSelector(
  [getForms],
  (forms: IRegistrationFormsState): IBasicPersonalDataFromData | undefined =>
    forms.basicPersonalData || defaultFormData,
);

export const getBasicPersonalDataFormError = getFormError('basicPersonalDataPageForm');
