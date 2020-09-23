import typeToReducer from 'type-to-reducer';

import { IOfferFormData } from '../../../pages/offer/entities';
import { IPersonalIdentificationFormData } from '../../../pages/physical/personal-identification/entities';
import { IBasicPersonalDataFromData } from '../../../pages/physical/basic-personal-data/entities';
import { IPersonalAddressFormData } from '../../../pages/physical/personal-address/entities';
import { IIdentityFormData } from '../../../pages/physical/identity/entities';
import { IAdditionalFormData } from '../../../pages/physical/additional/entities';
import { IAdditionalConfirmFormData } from '../../../pages/physical/additional-confirm/entities';
import {
  SET_OFFER_FORM_DATA,
  SET_PERSONAL_IDENTIFICATION_FORM_DATA,
  SET_BASIC_PERSONAL_DATA_FORM_DATA,
  SET_PERSONAL_ADDRESS_FORM_DATA,
  SET_IDENTITY_FORM_DATA,
  SET_ADDITIONAL_FORM_DATA,
  SET_ADDITIONAL_CONFIRM_FORM_DATA,
  ISetRegOfferFormData,
  ISetRegPersonalIdentificationFormData,
  ISetRegBasicPersonalDataFormData,
  ISetRegPersonalAddressFormData,
  ISetRegIdentityFormData,
  ISetRegAdditionalFormData,
  ISetRegAdditionalConfirmFormData,
} from '../actions/redux-forms';

export interface IRegistrationFormsState {
  offer?: IOfferFormData;
  personalIdentification?: IPersonalIdentificationFormData;
  basicPersonalData?: IBasicPersonalDataFromData;
  personalAddress?: IPersonalAddressFormData;
  identity?: IIdentityFormData;
  additional?: IAdditionalFormData;
  additionalConfirm?: IAdditionalConfirmFormData;
}

export const registrationFormsInitState: IRegistrationFormsState = {
  offer: undefined,
  personalIdentification: undefined,
  basicPersonalData: undefined,
  personalAddress: undefined,
  identity: undefined,
  additional: undefined,
};

export const reduxForms = typeToReducer<IRegistrationFormsState>(
  {
    [SET_OFFER_FORM_DATA]: (state: IRegistrationFormsState, action: ISetRegOfferFormData): IRegistrationFormsState => ({
      ...state,
      offer: {
        ...state.offer,
        ...action.payload,
      },
    }),
    [SET_PERSONAL_IDENTIFICATION_FORM_DATA]: (
      state: IRegistrationFormsState,
      action: ISetRegPersonalIdentificationFormData,
    ): IRegistrationFormsState => ({
      ...state,
      personalIdentification: {
        ...state.personalIdentification,
        ...action.payload,
      },
    }),
    [SET_BASIC_PERSONAL_DATA_FORM_DATA]: (
      state: IRegistrationFormsState,
      action: ISetRegBasicPersonalDataFormData,
    ): IRegistrationFormsState => ({
      ...state,
      basicPersonalData: {
        ...state.basicPersonalData,
        ...action.payload,
      },
    }),
    [SET_PERSONAL_ADDRESS_FORM_DATA]: (
      state: IRegistrationFormsState,
      action: ISetRegPersonalAddressFormData,
    ): IRegistrationFormsState => ({
      ...state,
      personalAddress: {
        ...state.personalAddress,
        ...action.payload,
      },
    }),
    [SET_IDENTITY_FORM_DATA]: (
      state: IRegistrationFormsState,
      action: ISetRegIdentityFormData,
    ): IRegistrationFormsState => ({
      ...state,
      identity: {
        ...state.identity,
        ...action.payload,
      },
    }),
    [SET_ADDITIONAL_FORM_DATA]: (
      state: IRegistrationFormsState,
      action: ISetRegAdditionalFormData,
    ): IRegistrationFormsState => ({
      ...state,
      additional: {
        ...state.additional,
        ...action.payload,
      },
    }),
    [SET_ADDITIONAL_CONFIRM_FORM_DATA]: (
      state: IRegistrationFormsState,
      action: ISetRegAdditionalConfirmFormData,
    ): IRegistrationFormsState => ({
      ...state,
      additionalConfirm: {
        ...state.additional,
        ...action.payload,
      },
    }),
  },
  registrationFormsInitState,
);
