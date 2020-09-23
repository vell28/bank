import { createSelector } from 'reselect';

import { IRegistrationFormsState } from '../../../../registration/redux/reducers/redux-forms';
import { getForms, getFormError } from '../../../../registration/redux/selectors/redux-forms';
import { IOfferFormData } from '../../entities';

const defaultFormData = {
  sendDocumentsToEmail: false,
  readAgreement: false,
  languageAgreement: false,
  personalDataAgreement: false,
};

export const getOfferFormData = createSelector(
  [getForms],
  (forms: IRegistrationFormsState): IOfferFormData | undefined => forms.offer || defaultFormData,
);

export const getOfferFormError = getFormError('offerPageForm');
