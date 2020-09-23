import { Dispatch } from 'redux';

import { IAction } from 'modules/store/types';
import { topUpCardRequest } from 'modules/api-requests/top-up';
import { nextStep, targetStep, showTransactionErrorModal } from 'models/main-modal/redux/actions';
import { updateTopUpRedirectUrl } from './card';

export const UPDATE_TOP_UP = 'topUp/UPDATE';
export const TOP_UP = 'topUp/TOP_UP';
export const CONFIRM_TOP_UP = 'topUp/CONFIRM_TOP_UP';
export const TOP_UP_UPDATE_RESPONSE = 'topUp/TOP_UP_UPDATE_RESPONSE';

export type IUpdateTopUpValueAction = IAction<{
  value: string;
  description?: string;
}>;

export interface IUpdateResponsePayload {
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  errors?: any[];
}

export interface IUpdateResponseAction {
  payload: IUpdateResponsePayload;
}

export interface IUpdateResponsePayload {
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  errors?: any[];
}

export interface IUpdateResponseAction {
  payload: IUpdateResponsePayload;
}

export const updateTopUpResponse = ({ payload }: IUpdateResponseAction): IAction<IUpdateResponsePayload> => ({
  type: TOP_UP_UPDATE_RESPONSE,
  payload,
});

const showSuccessStep = (dispatch: Dispatch) => dispatch(targetStep(3));

export const updateTopUp = (value: string, description = ''): IUpdateTopUpValueAction => ({
  type: UPDATE_TOP_UP,
  payload: { value, description },
});

export const topUpCardInit = <T>(requestData: T, request = topUpCardRequest) => (dispatch: Dispatch) =>
  dispatch({
    type: TOP_UP,
    payload: async () => {
      try {
        const result: any = await request<T>(requestData);
        if (result.data.status === 'COMMITTED' && result.data.type === 'CHARGE') {
          showSuccessStep(dispatch);
        }
        if (result.data.type === 'REDIRECT' && result.data.redirectUrl) {
          dispatch(updateTopUpRedirectUrl(result.data.redirectUrl));
          dispatch(nextStep);
        }
        if (result.data.status === 'FAILED' && result.data.type === 'CHARGE') {
          dispatch<any>(showTransactionErrorModal());

          // eslint-disable-next-line prefer-promise-reject-errors
          return Promise.reject({
            errors: [],
          });
        }
        return result;
      } catch (e) {
        dispatch<any>(showTransactionErrorModal());
        // TODO: Need to eval error
        throw e;
      }
    },
  });
