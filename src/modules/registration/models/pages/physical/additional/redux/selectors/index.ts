import { propOr, pathOr } from 'ramda';
import { getFormValues } from 'redux-form';
import { createSelector } from 'reselect';

import { IStore } from 'modules/store/types';
import { IRegistrationFormsState } from '../../../../../registration/redux/reducers/redux-forms';
import { getForms, getFormError } from '../../../../../registration/redux/selectors/redux-forms';
import { IAdditionalFormData } from '../../entities';
import { getRegistration } from '../../../../../registration/redux/selectors';

const defaultFormData = {
  pep: false,
  pepInFamily: false,
  isConfirmed: false,
  document: null,
  selfie: null,
};

export const getDocument = (state: IStore): string =>
  propOr(null, 'document')(getFormValues('additionalPageForm')(state));

export const getSelfie = (state: IStore): string => propOr(null, 'selfie')(getFormValues('additionalPageForm')(state));

export const getAdditionalFormData = createSelector(
  [getForms],
  (forms: IRegistrationFormsState): IAdditionalFormData | undefined => forms.additional || defaultFormData,
);

export const getAdditionalFormError = getFormError('additionalPageForm');

export const isLoading = createSelector([getRegistration], (state): boolean => pathOr(false, ['isLoading'])(state));
