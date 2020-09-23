import { Action } from 'redux';
import { getStateType, IAction } from 'modules/store/types';
import { orderNewCardInitRequest, orderNewCardConfirmRequest } from 'modules/api-requests/order-card';
import { orderNewSuccessStep } from 'containers/operations/order-new-card';
import { getConfirmFromResponseToken, getConfirmCodeLengthToken, getHTTPStatusCode } from 'modules/api-client/utils';
import { equals } from 'ramda';
import { IOrderRequestBody } from '../../entities';
import { nextStep, targetStep } from '../../../../main-modal';
import { setSmsConfirmData } from '../../../sms-confirmation/redux/actions';
import { getConfirmationToken } from '../../../sms-confirmation';
import { selectOrderCardBody } from '../selectors';

export const confirmationRequiredHTTPCode = 449;

export type ThunkAction = (dispatch: Dispatch, getState: getStateType) => void;
export type Request = () => Promise<void>;
export type Dispatch = (action: Action | ThunkAction) => void;

export const INIT_ORDER_NEW = 'orderNew/INIT_ORDER_NEW';
export const CONFIRM_ORDER_NEW = 'orderNew/CONFIRM_ORDER_NEW';

const initAction = (requestPromice: Request): IAction<Request> => ({
  type: INIT_ORDER_NEW,
  payload: requestPromice,
});

const confirmAction = (requestPromice: Request): IAction<Request> => ({
  type: CONFIRM_ORDER_NEW,
  payload: requestPromice,
});

export const makeInitRequestPromice = (body: IOrderRequestBody, dispatch: Dispatch): Request => {
  return async () => {
    try {
      // we jump to straight to success step
      // if we recieve satus: ok,
      await orderNewCardInitRequest(body);
      dispatch(targetStep(orderNewSuccessStep));
    } catch (e) {
      const code = getHTTPStatusCode(e);
      const confirmationRequired = equals(code, confirmationRequiredHTTPCode);

      if (confirmationRequired) {
        const confirmationToken = getConfirmFromResponseToken(e);
        const confirmationCodeLength = getConfirmCodeLengthToken(e);
        dispatch(setSmsConfirmData({ confirmationToken, confirmationCodeLength }));
        dispatch(nextStep);
      } else {
        throw e;
      }
    }
  };
};

export const orderInit: ThunkAction = (dispatch: Dispatch, getState: getStateType) => {
  const orderBody = selectOrderCardBody(getState());
  const requestPromise = makeInitRequestPromice(orderBody, dispatch);
  dispatch(initAction(requestPromise));
};

export const makeConfirmRequestPromice = (
  orderBody: IOrderRequestBody,
  confirmationCode: string,
  confirmationToken: string,
  dispatch: Dispatch,
): Request => {
  return async () => {
    try {
      await orderNewCardConfirmRequest(orderBody, {
        'X-Confirmation-Code': confirmationCode,
        'X-Confirmation-Token': confirmationToken,
      });
      dispatch(nextStep);
    } catch (e) {
      throw e;
    }
  };
};

export const orderConfirm = (confirmationCode: string): ThunkAction => {
  return (dispatch: Dispatch, getState: getStateType) => {
    const appState = getState();
    const orderBody = selectOrderCardBody(appState);
    const confirmationToken = getConfirmationToken(appState);
    const requestPromice = makeConfirmRequestPromice(orderBody, confirmationCode, confirmationToken, dispatch);
    const promiseAction = confirmAction(requestPromice);
    dispatch(promiseAction);
  };
};
