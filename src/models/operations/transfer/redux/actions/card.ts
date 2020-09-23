import { showModalWithContent, targetStep } from 'models/main-modal/redux/actions';
import { IPaymentToCardData, IPaymentContact } from 'modules/api-requests/payments/entities';
import { getStateType, IAction } from 'modules/store/types';
import { IRepeatPayment } from 'models/transactions/entities';
import { MainModalContentType } from 'models/main-modal/entities';
import { ICardData } from '../../entities';
import { transferConfirm, transferInit, updateTransferValue } from '.';
import { getPaymentCardData } from '../selectors';

export type IUpdateTransferCardInfoAction = IAction<ICardData>;
export const UPDATE_CARD_INFO_TRANSFER = 'transfer/UPDATE_CARD';

export const updateTransferCardData = (card: ICardData): IUpdateTransferCardInfoAction => ({
  type: UPDATE_CARD_INFO_TRANSFER,
  payload: card,
});

export const transferToCardInit = (dispatch: any, getState: getStateType) => {
  const requestData = getPaymentCardData(getState());
  return dispatch(transferInit<IPaymentContact<IPaymentToCardData>>(requestData));
};

export const transferToCardConfirm = (code: string) => (dispatch: any, getState: getStateType) => {
  const state = getState();
  const data = getPaymentCardData(state);
  return dispatch(transferConfirm<IPaymentContact<IPaymentToCardData>>(code, data));
};

export const repeatOperationToCard = (paymentToRepeat: IRepeatPayment, modalType: MainModalContentType) => (
  dispatch: any,
) => {
  const data: any = {
    beneficiaryName: paymentToRepeat.beneficiaryName,
    cardNumber: paymentToRepeat.cardNumber,
  };

  dispatch(showModalWithContent(modalType));
  dispatch(targetStep(1));
  dispatch(updateTransferCardData(data));
  dispatch(updateTransferValue(String(paymentToRepeat.amount)));
  dispatch(transferToCardInit);
};
