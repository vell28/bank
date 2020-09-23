import { createSelector } from 'reselect';

import { IRegistrationFormsState } from '../../../../../registration/redux/reducers/redux-forms';
import { getForms, getFormError } from '../../../../../registration/redux/selectors/redux-forms';
import { IIdentityFormData } from '../../entities';

const defaultFormData = {
  citizenshipCountryCode: null,
  documentNumber: '',
  documentType: null,
  issueDate: null,
  expiryDate: null,
  issuer: '',
  isNoExpired: false,
};

export const getIdentityFormData = createSelector(
  [getForms],
  (forms: IRegistrationFormsState): IIdentityFormData | undefined => forms.identity || defaultFormData,
);

export const getIdentityFormError = getFormError('identityPageForm');
