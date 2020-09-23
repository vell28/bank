import typeToReducer from 'type-to-reducer';

import { SEND_TOP_UP_REQUEST } from 'models/operations/top-up/redux/actions/request';
import { IBaseThunkState } from 'modules/store/types';
import { ITopUp } from '../../entities';
import {
  UPDATE_TOP_UP,
  TOP_UP,
  TOP_UP_UPDATE_RESPONSE,
  CONFIRM_TOP_UP,
  IUpdateResponseAction,
  IUpdateTopUpValueAction,
} from '../actions';

import {
  UPDATE_CARD_INFO_TOP_UP,
  UPDATE_REDIRECT_URL_TOP_UP,
  IUpdateTopUpCardInfoAction,
  IUpdateTopUpRedirectUrlAction,
} from '../actions/card';

export type ITopUpState = IBaseThunkState<ITopUp>;

export const topUpFromCardInitState: ITopUpState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: {
    card: {},
    description: '',
    value: '',
    request: {},
  },
  errors: [],
};

export const topUp = typeToReducer<ITopUpState>(
  {
    [UPDATE_CARD_INFO_TOP_UP]: (state: ITopUpState, action: IUpdateTopUpCardInfoAction) => ({
      ...state,
      data: {
        ...state.data,
        card: action.payload,
      },
    }),
    [UPDATE_REDIRECT_URL_TOP_UP]: (state: ITopUpState, action: IUpdateTopUpRedirectUrlAction) => ({
      ...state,
      data: {
        ...state.data,
        redirectUrl: action.payload,
      },
    }),
    [TOP_UP_UPDATE_RESPONSE]: (state: ITopUpState, action: IUpdateResponseAction) => ({
      ...state,
      ...action.payload,
    }),
    [UPDATE_TOP_UP]: (state: ITopUpState, action: IUpdateTopUpValueAction) => ({
      ...state,
      data: {
        ...state.data,
        value: action.payload.value,
        description: action.payload.description,
      },
    }),
    [TOP_UP]: {
      LOADING: (state: ITopUpState): ITopUpState => ({
        ...state,
        isLoading: true,
      }),

      SUCCESS: (state: ITopUpState): ITopUpState => {
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          isError: false,
        };
      },

      ERROR: (state: ITopUpState, action): ITopUpState => ({
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errors: action.payload.errors,
      }),
    },
    [CONFIRM_TOP_UP]: {
      LOADING: (state: ITopUpState): ITopUpState => ({
        ...state,
        isLoading: true,
      }),

      SUCCESS: (state: ITopUpState): ITopUpState => {
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          isError: false,
        };
      },

      ERROR: (state: ITopUpState, action): ITopUpState => ({
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errors: action.payload.errors,
      }),
    },
    [SEND_TOP_UP_REQUEST]: {
      LOADING: (state: ITopUpState): ITopUpState => ({
        ...state,
        isLoading: true,
      }),

      SUCCESS: (state: ITopUpState): ITopUpState => {
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          isError: false,
        };
      },

      ERROR: (state: ITopUpState, action): ITopUpState => ({
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errors: action.payload.errors,
      }),
    },
  },
  topUpFromCardInitState,
);
