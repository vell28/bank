import { SubmissionError } from 'redux-form';

import { getStateType, IAction } from 'modules/store/types';

import { firebaseAuth } from 'modules/firebase-auth';
import { ICountry } from '@components/popup/popup-select-country/country-list';
import { getSendError, getConfirmError } from '../selectors';
import { registrationGetPhoneStatusAction } from '../../../pages/physical/phone-number/redux/actions';

export const FIREBASE_SEND_CODE = 'firebase/SEND_CODE';
export const FIREBASE_CONFIRM_CODE = 'firebase/CONFIRM_CODE';
export const FIREBASE_RESET_STATE = 'firebase/RESET_STATE';

export interface ISendFirebaseCodeAction extends IAction<Promise<string>> {
  meta: {
    phone: string;
    country: ICountry;
  };
}
export type IConfirmFirebaseCodeAction = IAction<Promise<string>>;

export const resetStateAction = {
  type: FIREBASE_RESET_STATE,
  payload: null,
};

export const sendFirebaseCodeAction = (phone: string, country: ICountry): ISendFirebaseCodeAction => ({
  type: FIREBASE_SEND_CODE,
  payload: firebaseAuth.getLoginCode(`+${country.dialCode}${phone}`),
  meta: { phone, country },
});

export const confirmFirebaseCodeAction = (code: string): IConfirmFirebaseCodeAction => ({
  type: FIREBASE_CONFIRM_CODE,
  payload: firebaseAuth.verifyCode(code),
});

export const sendCodeWithSubmitError = (phone: string, country: ICountry) => async (
  dispatch: any,
  getState: getStateType,
) => {
  try {
    await dispatch(sendFirebaseCodeAction(phone, country));
  } catch (e) {
    const errorMessage = getSendError(getState());
    if (errorMessage) {
      throw new SubmissionError({ phone: errorMessage });
    }
  }
};

export const confirmCodeWithSubmitError = (code: string) => async (dispatch: any, getState: getStateType) => {
  try {
    await dispatch(confirmFirebaseCodeAction(code));
    dispatch(registrationGetPhoneStatusAction);
  } catch (e) {
    const errorMessage = getConfirmError(getState());
    if (errorMessage) {
      throw new SubmissionError({ code: errorMessage });
    }
  }
};
