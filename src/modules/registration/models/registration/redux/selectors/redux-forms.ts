import {
  filter, keys, pathOr, pick, pipe, propEq, propOr
} from 'ramda';
import { getFormValues } from 'redux-form';
import { createSelector } from 'reselect';

import { IStore } from 'modules/store/types';
import { ISignificantData } from '../../../idscan/entities';
import { getSignificantData } from '../../../idscan/redux/selectors';
import { IFieldsType } from '../../entities';
import { IRegistrationFormsState } from '../reducers/redux-forms';

export const getForms = (state: IStore): IRegistrationFormsState => state.registrationModule.reduxForms;

export const getFormError = (formName: string) =>
  createSelector(
    [pathOr({}, ['form', formName])],
    (form: object): IFieldsType => {
      const syncErrors: IFieldsType = pathOr({}, ['syncErrors'])(form);

      const touchedKeys = pipe<object, IFieldsType, IFieldsType, string[]>(
        pathOr({}, ['fields']),
        filter<any>(propEq('touched', true)),
        keys,
      )(form);

      return pick(touchedKeys, syncErrors);
    },
  );

export const checkIdScanFieldError = (form: string, idScan: string): boolean =>
  !!idScan && form.toUpperCase() !== idScan;

const getName = (state: IStore): string => propOr('', 'name')(getFormValues('personalIdentificationPageForm')(state));

export const getIsNameFieldIdScanError = createSelector(
  [getName, getSignificantData],
  (name: string, data: ISignificantData): boolean => checkIdScanFieldError(name, data.name),
);

const getSurname = (state: IStore): string =>
  propOr('', 'surname')(getFormValues('personalIdentificationPageForm')(state));

export const getIsSurnameFieldIdScanError = createSelector(
  [getSurname, getSignificantData],
  (surname: string, data: ISignificantData): boolean => checkIdScanFieldError(surname, data.surname),
);

const getBirthDate = (state: IStore): string =>
  propOr('', 'birthDate')(getFormValues('personalIdentificationPageForm')(state));

export const getIsBirthDateFieldIdScanError = createSelector(
  [getBirthDate, getSignificantData],
  (birthDate: string, data: ISignificantData): boolean => checkIdScanFieldError(birthDate, data.birthDate),
);

const getGender = (state: IStore): string => propOr('', 'gender')(getFormValues('basicPersonalDataPageForm')(state));

export const getIsGenderFieldIdScanError = createSelector(
  [getGender, getSignificantData],
  (gender: string, data: ISignificantData): boolean => checkIdScanFieldError(gender, data.gender),
);

const getDocumentNumber = (state: IStore): string =>
  propOr('', 'documentNumber')(getFormValues('identityPageForm')(state));

export const getIsDocumentNumberFieldIdScanError = createSelector(
  [getDocumentNumber, getSignificantData],
  (documentNumber: string, data: ISignificantData): boolean =>
    checkIdScanFieldError(documentNumber, data.documentNumber),
);

export const getFormsIsNoExpiry = createSelector([getForms], (form) => pathOr(false, ['identity', 'isNoExpired'])(form));

export const getIsNoExpired = (state: IStore): boolean =>
  propOr(false, 'isNoExpired')(getFormValues('identityPageForm')(state));

export const getExpiryDate = (state: IStore): string =>
  propOr('', 'expiryDate')(getFormValues('identityPageForm')(state));

export const getIsExpiryDateFieldIdScanError = createSelector(
  [getExpiryDate, getSignificantData],
  (expiryDate: string, data: ISignificantData): boolean => checkIdScanFieldError(expiryDate, data.expiryDate),
);
