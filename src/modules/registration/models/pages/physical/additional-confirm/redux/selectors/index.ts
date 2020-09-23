import { propOr } from 'ramda';
import { getFormValues } from 'redux-form';
import { createSelector } from 'reselect';

import { IStore } from 'modules/store/types';
import { IRegistrationFormsState } from '../../../../../registration/redux/reducers/redux-forms';
import { getForms, getFormError } from '../../../../../registration/redux/selectors/redux-forms';
import { IAdditionalConfirmFormData } from '../../entities';

const defaultFormData = {
  employmentType: null,
  documentType: null,
  issueDate: null,
  addressDocument: null,
  wealthProofDocument: null,
};

export const getDocument = (state: IStore): string =>
  propOr('', 'document')(getFormValues('additionalConfirmPageForm')(state));

export const getWealthProofDocument = (state: IStore): string =>
  propOr('', 'wealthProofDocument')(getFormValues('additionalConfirmPageForm')(state));

export const getAdditionalConfirmFormData = createSelector(
  [getForms],
  (forms: IRegistrationFormsState): IAdditionalConfirmFormData | undefined =>
    forms.additionalConfirm || defaultFormData,
);

export const getAdditionalConfirmFormError = getFormError('additionalConfirmPageForm');
