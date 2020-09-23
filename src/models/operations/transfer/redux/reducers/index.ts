import { pathOr } from 'ramda';
import typeToReducer from 'type-to-reducer';

import { IBaseThunkState } from 'modules/store/types';
import { SET_PHONE_TRANSFER, ISetPhoneAction } from '../actions/contact';
import {
  SET_VALUE_TRANSFER,
  TRANSFER,
  CONFIRM_TRANSFER,
  IUpdateTransferValueAction,
  RESET_LOADING_TRANSFER,
  UPDATE_RESPONSE_TRANSFER,
} from '../actions';
import { SET_EXCHANGE_RATES } from '../actions/exchange';
import { IUpdateResponseAction } from '../../../top-up/redux/actions';
import { UPDATE_CARD_INFO_TRANSFER, IUpdateTransferCardInfoAction } from '../actions/card';

import { UPDATE_BANK_INFO_TRANSFER, IUpdateTransferBankAction } from '../actions/bank';

import { ITransfer } from '../../entities';

export type ITransferState = IBaseThunkState<ITransfer>;

export const transferToCardInitState: ITransferState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: {
    phone: '',
    value: '',
    card: {},
    // TODO: for test, awaiting answer for purpose in design
    purpose: 'test',
    bank: {},
    rates: [],
  },
  errors: [],
};

// TODO: split reducer
export const transfer = typeToReducer<ITransferState>(
  {
    [UPDATE_CARD_INFO_TRANSFER]: (state: ITransferState, action: IUpdateTransferCardInfoAction) => ({
      ...state,
      data: {
        ...state.data,
        card: action.payload,
      },
    }),
    [UPDATE_BANK_INFO_TRANSFER]: (state: ITransferState, action: IUpdateTransferBankAction) => ({
      ...state,
      data: {
        ...state.data,
        bank: action.payload,
      },
    }),
    [RESET_LOADING_TRANSFER]: (state: ITransferState) => ({
      ...state,
      isLoading: false,
      isSuccess: false,
      isError: false,
      errors: [],
    }),
    [UPDATE_RESPONSE_TRANSFER]: (state: ITransferState, action: IUpdateResponseAction) => ({
      ...state,
      ...action.payload,
    }),
    [SET_PHONE_TRANSFER]: (state: ITransferState, action: ISetPhoneAction) => ({
      ...state,
      data: {
        ...state.data,
        phone: action.payload,
      },
    }),
    [SET_VALUE_TRANSFER]: (state: ITransferState, action: IUpdateTransferValueAction): ITransferState => ({
      ...state,
      data: {
        ...state.data,
        value: action.payload,
      },
    }),
    [TRANSFER]: {
      LOADING: (state: ITransferState): ITransferState => ({
        ...state,
        isLoading: true,
      }),

      SUCCESS: (state: ITransferState): ITransferState => {
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          isError: false,
        };
      },

      ERROR: (state: ITransferState, action): ITransferState => ({
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errors: action.payload.errors,
      }),
    },
    [CONFIRM_TRANSFER]: {
      LOADING: (state: ITransferState): ITransferState => ({
        ...state,
        isLoading: true,
      }),

      SUCCESS: (state: ITransferState): ITransferState => {
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          isError: false,
        };
      },

      ERROR: (state: ITransferState, action): ITransferState => ({
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errors: action.payload.errors,
      }),
    },
    [SET_EXCHANGE_RATES]: {
      LOADING: (state: ITransferState): ITransferState => ({
        ...state,
        isLoading: true,
      }),

      SUCCESS: (state: ITransferState, action): ITransferState => {
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          isError: false,
          data: {
            ...state.data,
            rates: pathOr(state.data.rates, ['payload', 'data', 'rates'])(action),
          },
        };
      },

      ERROR: (state: ITransferState): ITransferState => ({
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
      }),
    },
  },
  transferToCardInitState,
);
