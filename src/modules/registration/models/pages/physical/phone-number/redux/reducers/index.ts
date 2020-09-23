import typeToReducer from 'type-to-reducer';

import { REGISTRATION_PHONE, SET_REGISTRATION_STATUS } from '../actions';

export interface IRegistrationPhoneData {
  registrationStatus: string;
  uuid: string;
  additionalInfoUrl: string;
  phoneNumber: string;
  date: number;
}

export interface IRegistrationPhoneState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  data: IRegistrationPhoneData;
  errors: string[];
}

export const registrationPhoneInitState: IRegistrationPhoneState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: {
    registrationStatus: '',
    uuid: '',
    additionalInfoUrl: '',
    phoneNumber: '',
    date: 0,
  },
  errors: [],
};

export const registrationPhone = typeToReducer<IRegistrationPhoneState>(
  {
    [REGISTRATION_PHONE]: {
      LOADING: (state: IRegistrationPhoneState): IRegistrationPhoneState => ({
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      }),
      SUCCESS: (state: IRegistrationPhoneState, action: any): IRegistrationPhoneState => ({
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        data: action.payload,
        errors: [],
      }),
      ERROR: (state: IRegistrationPhoneState, action): IRegistrationPhoneState => ({
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errors: action.payload.error,
      }),
    },
    [SET_REGISTRATION_STATUS]: (state: IRegistrationPhoneState, action: any) => ({
      ...state,
      data: {
        ...state.data,
        registrationStatus: action.payload,
      },
    }),
  },
  registrationPhoneInitState,
);
