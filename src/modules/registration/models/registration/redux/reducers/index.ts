import { pathOr, propOr } from 'ramda';
import typeToReducer from 'type-to-reducer';

import { extractAction } from 'modules/store/types';
import {
  IDSCAN_INVESTIGATE_DOC,
  IDSCAN_INVESTIGATE_SELFIE,
  IInvestigateDocAction,
  IInvestigateSelfieAction,
} from '../../../idscan/redux/actions';
import {
  IPersonalRegistration,
  ICardOrder,
  IDeliveryAddres,
  IPersonalRegistrationForm,
  IAddressProofDocument,
  IIdentityDocument,
  IResidenceAddress,
  IPersonalRegistrationAdditional,
} from '../../entities/api';
import { RegistrationVariantType, Gender, DocumentTypes } from '../../entities';
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
import { SET_REGISTRATION_VARIANT, SEND_REGISTRATION_DATA, ISetRegistrationVariantAction } from '../actions';

export interface IRegistrationState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  registrationVariant: RegistrationVariantType | null;
  data: IPersonalRegistration | undefined;
  additionalData: IPersonalRegistrationAdditional | undefined;
  errors: any[];
}

export const registrationInitState: IRegistrationState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  registrationVariant: null,
  data: undefined,
  additionalData: undefined,
  errors: [],
};

export const registration = typeToReducer<IRegistrationState>(
  {
    [SET_REGISTRATION_VARIANT]: (state: IRegistrationState, action: ISetRegistrationVariantAction) => ({
      ...state,
      registrationVariant: action.payload,
    }),
    [SET_OFFER_FORM_DATA]: (state: IRegistrationState, action: ISetRegOfferFormData): IRegistrationState => ({
      ...state,
      data: {
        ...(state.data as IPersonalRegistration),
        sendDocumentsToEmail: propOr('', 'sendDocumentsToEmail')(action.payload),
      },
    }),
    [SET_PERSONAL_IDENTIFICATION_FORM_DATA]: (
      state: IRegistrationState,
      action: ISetRegPersonalIdentificationFormData,
    ): IRegistrationState => ({
      ...state,
      data: {
        ...(state.data as IPersonalRegistration),
        registrationForm: {
          ...(pathOr({}, ['registrationForm'])(state.data) as IPersonalRegistrationForm),
          name: action.payload.name,
          surname: action.payload.surname,
          birthDate: action.payload.birthDate,
        },
      },
    }),
    [SET_BASIC_PERSONAL_DATA_FORM_DATA]: (
      state: IRegistrationState,
      action: ISetRegBasicPersonalDataFormData,
    ): IRegistrationState => ({
      ...state,
      data: {
        ...(state.data as IPersonalRegistration),
        cardOrder: {
          ...(pathOr({}, ['cardOrder'])(state.data) as ICardOrder),
          nameOnCard: action.payload.nameOnCard,
        },
        registrationForm: {
          ...(pathOr({}, ['registrationForm'])(state.data) as IPersonalRegistrationForm),
          email: action.payload.email,
          gender: propOr(Gender.MALE, 'gender')(action.payload),
          birthCountryCode: propOr('', 'birthCountryCode')(action.payload),
          birthPlace: action.payload.birthPlace,
        },
      },
    }),
    [SET_PERSONAL_ADDRESS_FORM_DATA]: (
      state: IRegistrationState,
      action: ISetRegPersonalAddressFormData,
    ): IRegistrationState => ({
      ...state,
      data: {
        ...(state.data as IPersonalRegistration),
        cardOrder: {
          ...(pathOr({}, ['cardOrder'])(state.data) as ICardOrder),
          deliveryAddress: {
            ...(pathOr({}, ['cardOrder', 'deliveryAddress'])(state.data) as IDeliveryAddres),
            countryCode: propOr('', 'countryCode')(action.payload.deliveryAddress),
            street: action.payload.deliveryAddress.street,
            streetNumber: action.payload.deliveryAddress.houseNumber,
            apartmentNumber: action.payload.deliveryAddress.apartmentNumber,
            city: action.payload.deliveryAddress.city,
            province: action.payload.deliveryAddress.province,
            postalCode: action.payload.deliveryAddress.postalCode,
          },
        },
        registrationForm: {
          ...(pathOr({}, ['registrationForm'])(state.data) as IPersonalRegistrationForm),
          residenceAddress: {
            ...(pathOr({}, ['registrationForm', 'residenceAddress'])(state.data) as IResidenceAddress),
            countryCode: propOr('', 'countryCode')(action.payload),
            street: action.payload.street,
            streetNumber: action.payload.houseNumber,
            apartmentNumber: action.payload.apartmentNumber,
            city: action.payload.city,
            province: action.payload.province,
            postalCode: action.payload.postalCode,
          },
        },
      },
    }),
    [SET_IDENTITY_FORM_DATA]: (state: IRegistrationState, action: ISetRegIdentityFormData): IRegistrationState => ({
      ...state,
      data: {
        ...(state.data as IPersonalRegistration),
        registrationForm: {
          ...(pathOr({}, ['registrationForm'])(state.data) as IPersonalRegistrationForm),
          identityDocument: {
            ...(pathOr({}, ['registrationForm', 'identityDocument'])(state.data) as IIdentityDocument),
            countryCode: propOr('', 'citizenshipCountryCode')(action.payload),
            number: action.payload.documentNumber,
            type: propOr(DocumentTypes.PASSPORT, 'documentType')(action.payload),
            issueDate: propOr('', 'issueDate')(action.payload),
            expiryDate: propOr('', 'expiryDate')(action.payload),
            issuer: action.payload.issuer,
          },
        },
      },
    }),
    [SET_ADDITIONAL_FORM_DATA]: (state: IRegistrationState, action: ISetRegAdditionalFormData): IRegistrationState => ({
      ...state,
      data: {
        ...(state.data as IPersonalRegistration),
        userPhoto: propOr('', 'selfie')(action.payload),
        registrationForm: {
          ...(pathOr({}, ['registrationForm'])(state.data) as IPersonalRegistrationForm),
          pep: action.payload.pep,
          pepInFamily: action.payload.pepInFamily,
        },
      },
    }),
    [SET_ADDITIONAL_CONFIRM_FORM_DATA]: (
      state: IRegistrationState,
      action: ISetRegAdditionalConfirmFormData,
    ): IRegistrationState => ({
      ...state,
      data: {
        ...(state.data as IPersonalRegistration),
        registrationForm: {
          ...(pathOr({}, ['registrationForm'])(state.data) as IPersonalRegistrationForm),
          employmentType: propOr('', 'employmentType')(action.payload),
          addressProofDocument: {
            ...(pathOr({}, ['registrationForm', 'addressProofDocument'])(state.data) as IAddressProofDocument),
            fileReferenceInStorage: propOr('', 'document')(action.payload),
            issueDate: propOr('', 'issueDate')(action.payload),
            type: propOr('', 'documentType')(action.payload),
          },
        },
      },
      additionalData: {
        addressProof: {
          fileReferences: propOr('', 'document')(action.payload),
        },
        employmentType: propOr('', 'employmentType')(action.payload),
        proofOfWealth: {
          fileReferences: propOr('', 'wealthProofDocument')(action.payload),
        },
      },
    }),
    [IDSCAN_INVESTIGATE_DOC]: {
      SUCCESS: (state: IRegistrationState, action: IInvestigateDocAction): IRegistrationState => {
        const { payload } = action;
        const { data } = extractAction(payload);
        return {
          ...state,
          data: {
            ...(state.data as IPersonalRegistration),
            registrationForm: {
              ...(pathOr({}, ['registrationForm'])(state.data) as IPersonalRegistrationForm),
              identityDocument: {
                ...(pathOr({}, ['registrationForm', 'identityDocument'])(state.data) as IIdentityDocument),
                fileReferenceInStorage: `scanner=${data.PersonEntryId}`,
              },
            },
          },
        };
      },
    },
    [IDSCAN_INVESTIGATE_SELFIE]: {
      SUCCESS: (state: IRegistrationState, action: IInvestigateSelfieAction): IRegistrationState => {
        const { payload } = action;
        const { data } = extractAction(payload);
        return {
          ...state,
          data: {
            ...(state.data as IPersonalRegistration),
            userPhoto: `scanner=${data.PersonEntryId}`,
          },
        };
      },
    },
    [SEND_REGISTRATION_DATA]: {
      LOADING: (state: IRegistrationState): IRegistrationState => {
        return {
          ...state,
          isLoading: true,
        };
      },
      SUCCESS: (state: IRegistrationState): IRegistrationState => {
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          isError: false,
        };
      },
      ERROR: (state: IRegistrationState, action): IRegistrationState => {
        return {
          ...state,
          isLoading: false,
          isSuccess: false,
          isError: true,
          errors: action.payload.error,
        };
      },
    },
  },
  registrationInitState,
);
