import typeToReducer from 'type-to-reducer';
import { addSeconds } from 'date-fns';
import { pathOr } from 'ramda';

import { IBaseThunkState, IAction } from 'modules/store/types';
import { EXPIRES_FIREBASE_SECOND_INTERVAL } from 'modules/api-client/utils/const';
import {
  AUTH_SET_TOKEN,
  AUTH_UPDATE_TOKEN,
  AUTH_REMOVE_TOKEN,
  AUTH_CHECK_PASSWORD,
  AUTH_REQUEST_CODE,
  TOGGLE_LOGOUT_CONFIRM_MODAL,
} from '../actions';
import { IAuthorization, ICodeRequest } from '../../entities';

export type IAuthorizationState = IBaseThunkState<IAuthorization>;

export const authorizationInitState: IAuthorizationState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  // TODO: remove it, its testing data
  data: {
    service_code: 'OTFIN',
    'dev-id': 'test',
    'token-firebase': '',
    isShownLogoutConfirmModal: false,
  },
  errors: [],
};

export const authorization = typeToReducer(
  {
    [AUTH_SET_TOKEN]: {
      LOADING: (state: IAuthorizationState): IAuthorizationState => ({
        ...state,
        isLoading: true,
      }),

      SUCCESS: (state, action): IAuthorizationState => {
        const { payload } = action;

        const milliSeconds = pathOr(EXPIRES_FIREBASE_SECOND_INTERVAL * 1000, ['data', 'expires_in'])(payload);

        const expiredTime = addSeconds(Date.now(), milliSeconds / 1000);

        const data = payload.data || payload;

        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          isError: false,
          data: {
            ...state.data,
            ...data,
            token_expires: expiredTime,
          },
          errors: [],
        };
      },

      ERROR: (state: IAuthorizationState, action): IAuthorizationState => ({
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errors: action.payload.errors,
      }),
    },
    [AUTH_UPDATE_TOKEN]: {
      LOADING: (state: IAuthorizationState): IAuthorizationState => ({
        ...state,
        isLoading: true,
      }),

      SUCCESS: (state: IAuthorizationState, action): IAuthorizationState => {
        const { payload } = action;
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          isError: false,
          data: { ...state.data, ...payload.data },
          errors: [],
        };
      },

      ERROR: (state: IAuthorizationState, action): IAuthorizationState => ({
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errors: action.payload.errors,
      }),
    },
    [AUTH_CHECK_PASSWORD]: {
      LOADING: (state: IAuthorizationState): IAuthorizationState => ({
        ...state,
        isLoading: true,
      }),

      SUCCESS: (state: IAuthorizationState, action): IAuthorizationState => {
        const { payload } = action;
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          isError: false,
          data: { ...state.data, ...payload },
          errors: [],
        };
      },

      ERROR: (state: IAuthorizationState, action): IAuthorizationState => ({
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errors: action.payload.errors,
      }),
    },
    [AUTH_REQUEST_CODE]: {
      LOADING: (state: IAuthorizationState): IAuthorizationState => ({
        ...state,
        isLoading: true,
      }),

      SUCCESS: (state: IAuthorizationState, action: IAction<ICodeRequest>): IAuthorizationState => {
        const { payload } = action;
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          isError: false,
          data: { ...state.data, ...payload },
          errors: [],
        };
      },

      ERROR: (state: IAuthorizationState, action): IAuthorizationState => ({
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errors: action.payload.errors,
      }),
    },
    [AUTH_REMOVE_TOKEN]: (state: IAuthorizationState): IAuthorizationState => ({
      ...state,
      data: {
        service_code: 'OTFIN',
        'dev-id': 'test',
        'token-firebase': '',
        isShownLogoutConfirmModal: false,
      },
    }),
    [TOGGLE_LOGOUT_CONFIRM_MODAL]: (state: IAuthorizationState, action): IAuthorizationState => {
      const { payload } = action;
      return {
        ...state,
        data: {
          ...state.data,
          isShownLogoutConfirmModal: payload,
        },
      };
    },
  },
  authorizationInitState,
);
