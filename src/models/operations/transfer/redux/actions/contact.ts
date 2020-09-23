import { showModalWithContent, targetStep } from 'models/main-modal/redux/actions';
import { IPaymentToContactData, IPaymentContact } from 'modules/api-requests/payments/entities';
import { IRepeatPayment } from 'models/transactions/entities';
import { getStateType, IAction } from 'modules/store/types';
import { MainModalContentType } from 'models/main-modal/entities';
import { getPaymentContactData } from '../selectors';
import { transferConfirm, transferInit, updateTransferValue } from '.';

export type ISetPhoneAction = IAction<string>;

export const SET_PHONE_TRANSFER = 'transfer/SET_FROM_PHONE';

export const setFromAccountPhone = (phone: string): ISetPhoneAction => ({
  type: SET_PHONE_TRANSFER,
  payload: phone,
});

export const transferToContactInit = () => (dispatch: any, getState: getStateType) => {
  const requestData = getPaymentContactData(getState());
  return dispatch(transferInit<IPaymentContact<IPaymentToContactData>>(requestData));
};

export const transferToContactConfirm = (code: string) => (dispatch: any, getState: getStateType) => {
  const requestData = getPaymentContactData(getState());
  return dispatch(transferConfirm<IPaymentContact<IPaymentToContactData>>(code, requestData));
};

export const repeatOperationToContact = (paymentToRepeat: IRepeatPayment, modalType: MainModalContentType) => (
  dispatch: any,
) => {
  dispatch(showModalWithContent(modalType));
  dispatch(targetStep(1));
  dispatch(setFromAccountPhone(paymentToRepeat.fromPhone));
  dispatch(updateTransferValue(String(paymentToRepeat.amount)));
  dispatch(transferToContactInit());
};
