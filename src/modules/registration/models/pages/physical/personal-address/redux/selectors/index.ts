import { propOr } from 'ramda';
import { getFormValues } from 'redux-form';
import { createSelector } from 'reselect';

import { IStore } from 'modules/store/types';
import { IRegistrationFormsState } from '../../../../../registration/redux/reducers/redux-forms';
import { getForms, getFormError } from '../../../../../registration/redux/selectors/redux-forms';
import {
  IPersonalAddressFormData, IDeliveryAddressFormData, IAddressData, IPersonalAddressData
} from '../../entities';

const defaultFormState: IPersonalAddressFormData = {
  countryCode: null,
  street: '',
  houseNumber: '',
  apartmentNumber: '',
  city: '',
  province: '',
  postalCode: '',
  isResidence: true,
  deliveryAddress: {
    countryCode: null,
    street: '',
    houseNumber: '',
    apartmentNumber: '',
    city: '',
    province: '',
    postalCode: '',
    isExpressDelivery: false,
  },
};

const formValue = (state: IStore): IPersonalAddressFormData =>
  (getFormValues('personalAddressPageForm')(state) as IPersonalAddressFormData) || defaultFormState;

const returnAddressData = (formState: IPersonalAddressFormData | IDeliveryAddressFormData): IAddressData => ({
  street: formState.street || '',
  houseNumber: formState.houseNumber,
  city: formState.city,
  postalCode: formState.postalCode,
});

export const getPersonalAddressFormData = createSelector(
  [getForms],
  (forms: IRegistrationFormsState): IPersonalAddressFormData | undefined => forms.personalAddress || defaultFormState,
);

export const getPersonalAddressFormError = getFormError('personalAddressPageForm');

export const getIsResidence = (state: IStore): boolean => propOr('', 'isResidence')(formValue(state));

export const getAddressDeliver = createSelector(
  [formValue],
  (forms: IPersonalAddressFormData): IPersonalAddressData => ({
    ...returnAddressData(forms),
    deliveryAddress: returnAddressData(forms.deliveryAddress),
  }),
);
