import { IAction } from 'modules/store/types';

import { IOfferFormData } from '../../../pages/offer/entities';
import { IPersonalIdentificationFormData } from '../../../pages/physical/personal-identification/entities';
import { IBasicPersonalDataFromData } from '../../../pages/physical/basic-personal-data/entities';
import { IPersonalAddressFormData } from '../../../pages/physical/personal-address/entities';
import { IIdentityFormData } from '../../../pages/physical/identity/entities';
import { IAdditionalFormData } from '../../../pages/physical/additional/entities';
import { IAdditionalConfirmFormData } from '../../../pages/physical/additional-confirm/entities';
import { updateIdentityExpiryDate } from './utils';

export const SET_OFFER_FORM_DATA = 'registration/SET_OFFER_FORM_DATA';
export const SET_PERSONAL_IDENTIFICATION_FORM_DATA = 'registration/SET_PERSONAL_IDENTIFICATION_FORM_DATA';
export const SET_BASIC_PERSONAL_DATA_FORM_DATA = 'registration/SET_BASIC_PERSONAL_DATA_FORM_DATA';
export const SET_PERSONAL_ADDRESS_FORM_DATA = 'registration/SET_PERSONAL_ADDRESS_FORM_DATA';
export const SET_IDENTITY_FORM_DATA = 'registration/SET_IDENTITY_FORM_DATA';
export const SET_ADDITIONAL_FORM_DATA = 'registration/SET_ADDITIONAL_FORM_DATA';
export const SET_ADDITIONAL_CONFIRM_FORM_DATA = 'registration/SET_ADDITIONAL_CONFIRM_FORM_DATA';

export type ISetRegOfferFormData = IAction<IOfferFormData>;
export type ISetRegPersonalIdentificationFormData = IAction<IPersonalIdentificationFormData>;
export type ISetRegBasicPersonalDataFormData = IAction<IBasicPersonalDataFromData>;
export type ISetRegPersonalAddressFormData = IAction<IPersonalAddressFormData>;
export type ISetRegIdentityFormData = IAction<IIdentityFormData>;
export type ISetRegAdditionalFormData = IAction<IAdditionalFormData>;
export type ISetRegAdditionalConfirmFormData = IAction<IAdditionalConfirmFormData>;

export const setOfferFormData = (data: IOfferFormData): ISetRegOfferFormData => ({
  type: SET_OFFER_FORM_DATA,
  payload: data,
});

export const setPersonalIdentificationFormData = (
  data: IPersonalIdentificationFormData,
): ISetRegPersonalIdentificationFormData => ({
  type: SET_PERSONAL_IDENTIFICATION_FORM_DATA,
  payload: data,
});

export const setBasicPersonalDataFormData = (data: IBasicPersonalDataFromData): ISetRegBasicPersonalDataFormData => ({
  type: SET_BASIC_PERSONAL_DATA_FORM_DATA,
  payload: data,
});

export const setPersonalAddressFormData = (data: IPersonalAddressFormData): ISetRegPersonalAddressFormData => ({
  type: SET_PERSONAL_ADDRESS_FORM_DATA,
  payload: data,
});

export const setIdentityFormData = (data: IIdentityFormData): ISetRegIdentityFormData => ({
  type: SET_IDENTITY_FORM_DATA,
  payload: updateIdentityExpiryDate(data),
});

export const setAdditionalFormData = (data: IAdditionalFormData): ISetRegAdditionalFormData => ({
  type: SET_ADDITIONAL_FORM_DATA,
  payload: data,
});

export const setAdditionalConfirmFormData = (data: IAdditionalConfirmFormData): ISetRegAdditionalConfirmFormData => ({
  type: SET_ADDITIONAL_CONFIRM_FORM_DATA,
  payload: data,
});
