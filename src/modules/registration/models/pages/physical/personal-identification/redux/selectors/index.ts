import { createSelector } from 'reselect';

import { IRegistrationFormsState } from '../../../../../registration/redux/reducers/redux-forms';
import { getForms, getFormError } from '../../../../../registration/redux/selectors/redux-forms';
import { IPersonalIdentificationFormData } from '../../entities';

const defaultFormData = {
  name: '',
  surname: '',
  birthDate: '',
};

export const getPersonalIdentificationFormData = createSelector(
  [getForms],
  (forms: IRegistrationFormsState): IPersonalIdentificationFormData | undefined =>
    forms.personalIdentification || defaultFormData,
);

export const getPersonalIdentificationFormError = getFormError('personalIdentificationPageForm');
