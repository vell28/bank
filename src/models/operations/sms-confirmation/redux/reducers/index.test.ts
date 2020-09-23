import { smsConfirmation, ISmsConfirmationState } from '.';
import {
  SMS_CONFIRMATION_UPDATE,
  SMS_CONFIRMATION_FAILED_ATTEMPT,
  SMS_CONFIRMATION_RESET_ATTEMPT,
  IUpdateSmsConfirmationAction,
} from '../actions';

const initSmsConfirmation: ISmsConfirmationState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: {
    attempts: 1,
    confirmationToken: '',
    confirmationCodeLength: 0,
  },
  errors: [],
};

const confirmationData = {
  confirmationCodeLength: 5,
  confirmationToken: 'token',
};

describe('smsConfirmation reducers', () => {
  test('sms-confirmation/UPDATE_CONFIRMATION', () => {
    const action: IUpdateSmsConfirmationAction = {
      type: SMS_CONFIRMATION_UPDATE,
      payload: confirmationData,
    };

    const newState = smsConfirmation(initSmsConfirmation, action);
    expect(newState.data.confirmationToken).toEqual(confirmationData.confirmationToken);
    expect(newState.data.confirmationCodeLength).toEqual(confirmationData.confirmationCodeLength);
  });
  test('sms-confirmation/FAILED_ATTEMPT', () => {
    const action = {
      type: SMS_CONFIRMATION_FAILED_ATTEMPT,
    };

    const newState = smsConfirmation(initSmsConfirmation, action);
    expect(newState.data.attempts).toBe(2);
  });
  test('sms-confirmation/CLEAR_ATTEMPT', () => {
    const action = {
      type: SMS_CONFIRMATION_RESET_ATTEMPT,
    };

    const newState = smsConfirmation(initSmsConfirmation, action);
    expect(newState.data.attempts).toBe(0);
  });
});
