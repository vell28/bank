import { IAction } from 'modules/store/types';
import { IConfirmation } from '../../entities';

export const SMS_CONFIRMATION_UPDATE = 'sms-confirmation/UPDATE_CONFIRMATION';
export const SMS_CONFIRMATION_FAILED_ATTEMPT = 'sms-confirmation/FAILED_ATTEMPT';
export const SMS_CONFIRMATION_RESET_ATTEMPT = 'sms-confirmation/CLEAR_ATTEMPT';

export type IUpdateSmsConfirmationAction = IAction<IConfirmation>;

export const setSmsConfirmData = (data: IConfirmation): IUpdateSmsConfirmationAction => ({
  type: SMS_CONFIRMATION_UPDATE,
  payload: data,
});

export const smsConfirmFailedAttempt = {
  type: SMS_CONFIRMATION_FAILED_ATTEMPT,
};

export const smsConfirmClearAttempt = {
  type: SMS_CONFIRMATION_RESET_ATTEMPT,
};
