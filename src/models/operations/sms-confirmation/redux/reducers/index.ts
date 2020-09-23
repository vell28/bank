import typeToReducer from 'type-to-reducer';
import { pathOr } from 'ramda';

import { IBaseThunkState } from 'modules/store/types';
import { IConfirmation } from '../../entities';
import {
  SMS_CONFIRMATION_FAILED_ATTEMPT,
  SMS_CONFIRMATION_UPDATE,
  SMS_CONFIRMATION_RESET_ATTEMPT,
  IUpdateSmsConfirmationAction,
} from '../actions';

export type ISmsConfirmationState = IBaseThunkState<IConfirmation>;

export const smsConfirmationInitState: ISmsConfirmationState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: {
    attempts: 0,
  },
  errors: [],
};

export const smsConfirmation = typeToReducer<ISmsConfirmationState>(
  {
    [SMS_CONFIRMATION_UPDATE]: (state: ISmsConfirmationState, action: IUpdateSmsConfirmationAction) => ({
      ...state,
      data: {
        ...state.data,
        ...action.payload,
      },
    }),
    [SMS_CONFIRMATION_FAILED_ATTEMPT]: (state: ISmsConfirmationState) => ({
      ...state,
      data: {
        ...state.data,
        attempts: pathOr(0, ['data', 'attempts'])(state) + 1,
      },
    }),
    [SMS_CONFIRMATION_RESET_ATTEMPT]: (state: ISmsConfirmationState) => ({
      ...state,
      data: {
        ...state.data,
        attempts: 0,
      },
    }),
  },
  smsConfirmationInitState,
);
