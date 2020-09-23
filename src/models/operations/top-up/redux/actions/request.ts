import { sendTopUpRequest } from 'modules/api-requests/top-up';
import { getTopUpRequestData } from 'models/operations/top-up/redux/selectors';

import { ITopUpRequestResponse } from 'modules/api-requests/top-up/entities';
import { getStateType, IAction, IAsyncAction } from 'modules/store/types';
import { ITopUpRequest } from 'models/operations/top-up/entities';
import { nextStep } from 'models/main-modal/redux/actions';

export type IUpdateTopUpRequestAction = IAction<ITopUpRequest>;
export type ISendTopUpRequestAction = IAsyncAction<ITopUpRequestResponse>;

export const UPDATE_TOP_UP_REQUEST = 'topUpRequest/UPDATE_DATA';
export const SEND_TOP_UP_REQUEST = 'topUpRequest/SEND';

export const updateTopUpRequestAction = (email: string): IUpdateTopUpRequestAction => ({
  type: UPDATE_TOP_UP_REQUEST,
  payload: { email },
});

export const sendTopUpRequestAction = (dispatch: any, getState: getStateType): ISendTopUpRequestAction => {
  return dispatch({
    type: SEND_TOP_UP_REQUEST,
    payload: async () => {
      await sendTopUpRequest(getTopUpRequestData(getState()));
      dispatch(nextStep);
    },
  });
};
