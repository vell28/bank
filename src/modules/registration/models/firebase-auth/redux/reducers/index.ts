import typeToReducer from 'type-to-reducer';

import { IBaseThunkState } from 'modules/store/types';
import { IFirebaseAuthConfig } from '../../entities';

import { FIREBASE_CONFIRM_CODE, FIREBASE_RESET_STATE, FIREBASE_SEND_CODE } from '../actions';

export interface IFirebaseAuthState {
  config: IFirebaseAuthConfig;
  send: IBaseThunkState<string, string>;
  confirm: IBaseThunkState<string, string>;
}

export const firebaseInitState: IFirebaseAuthState = {
  config: {
    attempts: 0,
  },
  send: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    data: '',
    errors: '',
  },
  confirm: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    data: '',
    errors: '',
  },
};

export const firebaseAuth = typeToReducer<IFirebaseAuthState>(
  {
    [FIREBASE_RESET_STATE]: (state: IFirebaseAuthState) => ({
      ...firebaseInitState,
      config: {
        ...state.config,
      },
    }),
    [FIREBASE_SEND_CODE]: {
      LOADING: (state: IFirebaseAuthState): IFirebaseAuthState => ({
        ...state,
        send: {
          ...state.send,
          isLoading: true,
          isSuccess: false,
          isError: false,
        },
        config: {
          attempts: 0,
          codeSendDate: Date.now(),
        },
      }),

      SUCCESS: (state: IFirebaseAuthState, action): IFirebaseAuthState => {
        return {
          ...state,
          config: {
            ...state.config,
            phone: action.meta.phone,
            country: action.meta.country,
          },
          send: {
            ...state.send,
            isLoading: false,
            isSuccess: true,
            isError: false,
            errors: '',
          },
        };
      },

      ERROR: (state: IFirebaseAuthState, action): IFirebaseAuthState => ({
        ...state,
        send: {
          ...state.send,
          isLoading: false,
          isSuccess: false,
          isError: true,
          errors: action.payload,
        },
        config: {
          ...state.config,
          codeSendDate: undefined,
        },
      }),
    },
    [FIREBASE_CONFIRM_CODE]: {
      LOADING: (state: IFirebaseAuthState): IFirebaseAuthState => ({
        ...state,
        confirm: {
          ...state.confirm,
          isLoading: true,
          isSuccess: false,
          isError: false,
        },
      }),

      SUCCESS: (state: IFirebaseAuthState, action): IFirebaseAuthState => {
        return {
          ...state,
          confirm: {
            ...state.confirm,
            data: action.payload,
            isLoading: false,
            isSuccess: true,
            isError: false,
            errors: '',
          },
        };
      },

      ERROR: (state: IFirebaseAuthState, action): IFirebaseAuthState => ({
        ...state,
        confirm: {
          ...state.confirm,
          isLoading: false,
          isSuccess: false,
          isError: true,
          errors: action.payload,
        },
      }),
    },
  },
  firebaseInitState,
);
