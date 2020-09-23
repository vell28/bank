import { IStore } from 'modules/store/types';
import { IRegistrationPhoneState, IRegistrationPhoneData } from '../reducers';

export const getRegistrationPhone = (state: IStore): IRegistrationPhoneState =>
  state.registrationModule.registrationPhone;

export const getRegistrationPhoneData = (state: IStore): IRegistrationPhoneData => getRegistrationPhone(state).data;

export const getRegistrationPhoneIsError = (state: IStore): boolean => getRegistrationPhone(state).isError;
