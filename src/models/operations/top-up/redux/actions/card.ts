import { getStateType, IAction } from 'modules/store/types';
import { ITopUpFromCardData } from 'modules/api-requests/top-up/entities';
import { IRepeatPayment } from 'models/transactions/entities';
import { MainModalContentType } from 'models/main-modal/entities';
import { showModalWithContent } from 'models/main-modal/redux/actions';
import { topUpCardInit, updateTopUp } from './index';

import { getTopUpCardData } from '../selectors';
import { ICardData } from '../../entities';

export type IUpdateTopUpCardInfoAction = IAction<ICardData>;
export type IUpdateTopUpRedirectUrlAction = IAction<string>;
export const UPDATE_CARD_INFO_TOP_UP = 'topUp/UPDATE_CARD';
export const UPDATE_REDIRECT_URL_TOP_UP = 'topUp/UPDATE_REDIRECT_URL';

export const updateTopUpCardData = (card: ICardData): IUpdateTopUpCardInfoAction => ({
  type: UPDATE_CARD_INFO_TOP_UP,
  payload: card,
});

export const updateTopUpRedirectUrl = (redirectUrl: string): IUpdateTopUpRedirectUrlAction => ({
  type: UPDATE_REDIRECT_URL_TOP_UP,
  payload: redirectUrl,
});

export const topUpCardInitAction = (dispatch: any, getState: getStateType) => {
  const requestData = getTopUpCardData(getState());
  return dispatch(topUpCardInit<ITopUpFromCardData>(requestData));
};

export const repeatOperationTopUpCard = (paymentToRepeat: IRepeatPayment, modalType: MainModalContentType) => (
  dispatch: any,
) => {
  dispatch(showModalWithContent(modalType));
  dispatch(updateTopUp(String(paymentToRepeat.amount)));
};
