import { equals } from 'ramda';
import { IAction, getStateType } from 'modules/store/types';
import { paymentRequest, paymentConfirmRequest } from 'modules/api-requests/payments';
import { getConfirmFromResponseToken, getConfirmCodeLengthToken, getHTTPStatusCode } from 'modules/api-client/utils';
import { nextStep, showTransactionErrorModal } from 'models/main-modal/redux/actions';
import { ResponseAPI } from 'modules/api-client/entities';
import { IConfirmHeader } from 'modules/api-requests/payments/entities';
import { APIRequest, ThunkAction, Dispatch } from 'utils/utilTypings';
import { clearSMSCodeField } from 'models/redux-forms/redux/actions/form';
import { IUpdateResponsePayload, IUpdateResponseAction } from '../../../top-up/redux/actions';
import { getConfirmationToken } from '../../../sms-confirmation/redux/selectors';
import {
  setSmsConfirmData,
  smsConfirmFailedAttempt,
  smsConfirmClearAttempt,
} from '../../../sms-confirmation/redux/actions';

export const SET_VALUE_TRANSFER = 'transfer/UPDATE_AMOUNT';
export const TRANSFER = 'transfer/TRANSFER';
export const CONFIRM_TRANSFER = 'transfer/CONFIRM_TRANSFER';
export const RESET_LOADING_TRANSFER = 'transfer/RESET_LOADING_STATE';
export const UPDATE_RESPONSE_TRANSFER = 'transfer/UPDATE_RESPONSE_TRANSFER';

export type IUpdateTransferValueAction = IAction<string>;
export type IResetTransferLoadingAction = IAction<null>;

export const updateTransferResponse = ({ payload }: IUpdateResponseAction): IAction<IUpdateResponsePayload> => ({
  type: UPDATE_RESPONSE_TRANSFER,
  payload,
});

export const updateTransferValue = (value: string): IUpdateTransferValueAction => ({
  type: SET_VALUE_TRANSFER,
  payload: value,
});

export const resetTransferLoadingState: IResetTransferLoadingAction = {
  type: RESET_LOADING_TRANSFER,
  payload: null,
};

const initAction = (requestPromice: APIRequest): IAction<APIRequest> => ({
  type: TRANSFER,
  payload: requestPromice,
});

const confirmAction = (requestPromice: APIRequest): IAction<APIRequest> => ({
  type: CONFIRM_TRANSFER,
  payload: requestPromice,
});

export type GenericRequest<T> = (data: T, header?: IConfirmHeader | undefined) => Promise<ResponseAPI<any>>;
export const confirmationRequiredHTTPCode = 449;

const makeInitRequestPromise = <T>(requestData: T, dispatch: any, request: GenericRequest<T>): APIRequest => {
  return async () => {
    try {
      await request(requestData);
      throw new Error('Unexpected success. Init request must throw');
    } catch (e) {
      const code = getHTTPStatusCode(e);
      const confirmationRequired = equals(code, confirmationRequiredHTTPCode);

      if (confirmationRequired) {
        const confirmationToken = getConfirmFromResponseToken(e);
        const confirmationCodeLength = getConfirmCodeLengthToken(e);
        dispatch(setSmsConfirmData({ confirmationToken, confirmationCodeLength }));
        dispatch(nextStep);
      } else {
        dispatch(showTransactionErrorModal());
        throw e;
      }
    }
  };
};

export const transferInit = <T>(requestData: T, request: GenericRequest<T> = paymentRequest): ThunkAction => {
  return (dispatch: Dispatch) => {
    const asyncPayload = makeInitRequestPromise(requestData, dispatch, request);
    dispatch(initAction(asyncPayload));
  };
};

export const failedAttemptHTTPCode = 2000;
export const confirmationAttemptsExceededHTTPCode = 3002;

const makeConfirmPromise = <T>(
  requestData: T,
  confirmationCode: string,
  confirmationToken: string,
  dispatch: any,
  request: GenericRequest<T>,
): APIRequest => {
  return async () => {
    try {
      await request(requestData, {
        'X-Confirmation-Code': confirmationCode,
        'X-Confirmation-Token': confirmationToken,
      });
      dispatch(nextStep);
    } catch (e) {
      const code = getHTTPStatusCode(e);

      switch (code) {
        case failedAttemptHTTPCode: {
          dispatch(smsConfirmFailedAttempt);
          dispatch(clearSMSCodeField());
          break;
        }
        case confirmationAttemptsExceededHTTPCode: {
          dispatch(showTransactionErrorModal());
          dispatch(smsConfirmClearAttempt);
          break;
        }
        default: {
          dispatch(showTransactionErrorModal());
          dispatch(smsConfirmClearAttempt);
          throw e;
        }
      }
    }
  };
};

export const transferConfirm = <T>(
  code: string,
  requestData: T,
  request: GenericRequest<T> = paymentConfirmRequest,
): ThunkAction => {
  return (dispatch: any, getState: getStateType) => {
    const state = getState();
    const token = getConfirmationToken(state);

    const asyncPayload = makeConfirmPromise(requestData, code, token, dispatch, request);

    dispatch(confirmAction(asyncPayload));
  };
};
