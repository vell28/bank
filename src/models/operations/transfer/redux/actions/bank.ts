import { getStateType, IAction } from 'modules/store/types';
import {
  IPaymentSepaData,
  IPaymentSwiftData,
  IPaymentSepa,
  IPaymentSwift,
} from 'modules/api-requests/payments/entities';
import {
  paymentSepaRequest,
  paymentSwiftRequest,
  paymentSepaConfirmRequest,
  paymentSwiftConfirmRequest,
} from 'modules/api-requests/payments/bank';
import { targetStep, showModalWithContent } from 'models/main-modal/redux/actions';
import { IRepeatPayment } from 'models/transactions/entities';
import { MainModalContentType } from 'models/main-modal/entities';
import { IBankData } from '../../entities';
import { transferConfirm, transferInit, updateTransferValue } from '.';
import { getPaymentSepaData, getPaymentSwiftData, getIsSwiftTransfer } from '../selectors';

export type IUpdateTransferBankAction = IAction<IBankData>;
export const UPDATE_BANK_INFO_TRANSFER = 'transfer/UPDATE_BANK';

export const updateTransferBankData = (bank: IBankData): IUpdateTransferBankAction => ({
  type: UPDATE_BANK_INFO_TRANSFER,
  payload: bank,
});

export const transferToBankInit = () => (dispatch: any, getState: getStateType) => {
  const state = getState();
  const isSwiftTransfer = getIsSwiftTransfer(state);
  if (isSwiftTransfer) {
    const requestData = getPaymentSwiftData(state);
    return dispatch(transferInit<IPaymentSwift<IPaymentSwiftData>>(requestData, paymentSwiftRequest));
  }
  const requestData = getPaymentSepaData(state);
  return dispatch(transferInit<IPaymentSepa<IPaymentSepaData>>(requestData, paymentSepaRequest));
};

export const transferToBankConfirm = (code: string) => (dispatch: any, getState: getStateType) => {
  const state = getState();
  const isSwiftTransfer = getIsSwiftTransfer(state);
  if (isSwiftTransfer) {
    const requestData = getPaymentSwiftData(state);
    return dispatch(transferConfirm<IPaymentSwift<IPaymentSwiftData>>(code, requestData, paymentSwiftConfirmRequest));
  }
  const requestData = getPaymentSepaData(state);
  return dispatch(transferConfirm<IPaymentSepa<IPaymentSepaData>>(code, requestData, paymentSepaConfirmRequest));
};

export const repeatOperationOfBank = (paymentToRepeat: IRepeatPayment, modalType: MainModalContentType) => (
  dispatch: any,
) => {
  const bank: any = {
    beneficiaryName: paymentToRepeat.beneficiaryName,
    iban: paymentToRepeat.iban,
    purpose: paymentToRepeat.purpose,
    transferDetails: paymentToRepeat.transferDetails,
  };

  dispatch(showModalWithContent(modalType));
  dispatch(targetStep(1));
  dispatch(updateTransferBankData(bank));
  dispatch(updateTransferValue(String(paymentToRepeat.amount)));
  dispatch(transferToBankInit());
};
