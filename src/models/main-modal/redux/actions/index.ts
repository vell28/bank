import { Dispatch } from 'redux';

import { getCurrentRouterPath } from 'models/application/redux/selectors';

import { IAction, getStateType } from 'modules/store/types';
import { getTopUpIsError } from 'models/operations/top-up/redux/selectors';
import { getTransferIsError } from 'models/operations/transfer/redux/selectors';
import { updateTopUpResponse } from 'models/operations/top-up/redux/actions';
import { updateTransferResponse } from 'models/operations/transfer/redux/actions';
import { ERROR_MODAL_TITLE } from 'containers/operations/transaction-error/constant';
import { getMainModalContentId } from '../selectors';
import { IMainModal, MainModalContentType, IMainModalSettings } from '../../entities';

export const TRANSACTION_ERROR_MODAL = 'main-modal/TRANSACTION_ERROR_MODAL';
export const UPDATE_MAIN_MODAL = 'main-modal/UPDATE';
export const TOGGLE_MAIN_MODAL = 'main-modal/TOGGLE';
export const SHOW_WITH_CONTENT_MAIN_MODAL = 'main-modal/SHOW_WITH_CONTENT';
export const NEXT_STEP_MAIN_MODAL = 'main-modal/NEXT_STEP';
export const TARGET_STEP_MAIN_MODAL = 'main-modal/TARGET_STEP';

export type IUpdateMainModalAction = IAction<IMainModal>;
export type IToggleMainModalAction = IAction<null>;
export type IShowContentMainModalAction = IAction<IMainModalSettings>;
export type ITargetStepMainModalAction = IAction<number>;
export interface IErrorClear {
  isError: boolean;
  errors: any[];
}

export const updateMainModal = (data: IMainModal): IUpdateMainModalAction => ({
  type: UPDATE_MAIN_MODAL,
  payload: data,
});

export const toggleMainModal: IToggleMainModalAction = {
  type: TOGGLE_MAIN_MODAL,
  payload: null,
};

export const showModalWithContent = (contentId: MainModalContentType, title?: string) => (
  dispatch: Dispatch,
  getState: getStateType,
): IShowContentMainModalAction => {
  const bindUrl = getCurrentRouterPath(getState());
  return dispatch({
    type: SHOW_WITH_CONTENT_MAIN_MODAL,
    payload: { id: contentId, bindUrl, title },
  });
};

export const showTransactionErrorModal = () => (dispatch: Dispatch, getState: getStateType) => {
  const topUpError = getTopUpIsError(getState());
  const transferError = getTransferIsError(getState());
  const id = getMainModalContentId(getState());
  const payload = { isError: false, errors: [] };

  if (transferError) {
    dispatch(updateTransferResponse({ payload }));
  }

  if (topUpError) {
    dispatch(updateTopUpResponse({ payload }));
  }

  const title = ERROR_MODAL_TITLE[id];

  dispatch<any>(showModalWithContent(TRANSACTION_ERROR_MODAL, title));
};

export const nextStep = {
  type: NEXT_STEP_MAIN_MODAL,
  payload: null,
};

export const targetStep = (step: number): ITargetStepMainModalAction => ({
  type: TARGET_STEP_MAIN_MODAL,
  payload: step,
});
