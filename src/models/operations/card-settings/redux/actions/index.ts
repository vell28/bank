import { Dispatch } from 'redux';

import {
  fetchUnmaskedCardRequest,
  setCardStatusRequest,
  setUnBlockCardRequest,
  ICardStatusData,
  setCardLimitRequest,
  setDisableCardLimitsRequest,
  setIncreaseCardLimitRequest,
} from 'modules/api-requests/cards';

import { AccountStatus } from 'models/organizations/entities';
import { getCurrentAccountId } from 'models/organizations/redux/selectors';
import { getConfirmCodeLengthToken, getConfirmFromResponseToken } from 'modules/api-client/utils';
import { isNotEmpty } from 'utils/ramda';

import { getStateType, IAction, IAsyncAction } from 'modules/store/types';
import { ICardUnmasked, ICard, ILimitData } from '../../entities';
import { getIncreaseLimit } from '../../../card-settings/redux/selectors';
import { getConfirmationToken } from '../../../sms-confirmation/redux/selectors';
import {
  setSmsConfirmData,
  smsConfirmClearAttempt,
  smsConfirmFailedAttempt,
} from '../../../sms-confirmation/redux/actions';

export const MAX_FAILED_ATTEMPTS = 3;

export const FETCH_CARD_UNMASKED = 'cards/FETCH_UNMASKED';
export const LOCK_CARD = 'cards/LOCK';
export const UNLOCK_CARD = 'cards/UN_LOCK';
export const UNLOCK_CARD_CONFIRM = 'cards/UNLOCK_CARD_CONFIRM';
export const SET_SELECTED_CARD = 'cards/SELECT_CARD_IN_SLIDER';

export const TOGGLE_SHOWN_BLOCK_CARD = 'cards/TOGGLE_SHOWN_BLOCK';
export const TOGGLE_SHOWN_UNBLOCK_CARD = 'cards/TOGGLE_SHOWN_UNBLOCK';
export const TOGGLE_SHOWN_UNBLOCK_CONFIRM_CARD = 'cards/TOGGLE_SHOWN_CONFIRM_UNBLOCK';
export const REDUCTION_CARD_LIMIT = 'cards/REDUCTION_LIMIT';
export const SET_INCREASED_CARD_LIMIT = 'cards/SET_INCREASED_LIMIT';
export const INCREASE_CARD_LIMIT = 'cards/INCREASE_LIMIT';
export const INCREASE_CARD_LIMIT_CONFIRM = 'cards/INCREASE_LIMIT_CONFIRM';
export const DISABLE_CARD_LIMITS = 'cards/DISABLE_LIMITS';
export const DISABLE_CARD_LIMITS_CONFIRM = 'cards/DISABLE_LIMITS_CONFIRM';
export const TOGGLE_SHOWN_DISABLE_CARD_LIMITS = 'cards/TOGGLE_SHOWN_DISABLE_LIMITS';
export const TOGGLE_SHOWN_DISABLE_CARD_LIMITS_CONFIRM = 'cards/TOGGLE_SHOWN_DISABLE_LIMITS_CONFIRM';
export const TOGGLE_SHOWN_CARD_LIMITS_TIMER = 'cards/TOGGLE_SHOWN_LIMITS_TIMER';
export const TOGGLE_SHOWN_INCREASE_CARD_LIMIT = 'cards/TOGGLE_SHOWN_INCREASE_LIMIT';
export const TOGGLE_SHOWN_INCREASE_CARD_LIMIT_CONFIRM = 'cards/TOGGLE_SHOWN_INCREASE_LIMIT_CONFIRM';

export interface ISelectedCard {
  card: ICard;
  index: number;
}

export type IToggleCardModal = IAction<boolean>;

export type ISelectCardAction = IAction<{
  [key: string]: ISelectedCard;
}>;

export interface IFetchUnmaskedAction extends IAsyncAction<ICardUnmasked> {
  meta: string;
}

export interface ILockCardAction extends IAsyncAction<ICard> {
  meta: string;
}

export interface IIncreaseCardLimitAction extends IAsyncAction<ICard> {
  meta: string;
}

export type ISetIncreasedLimitsAction = IAction<ILimitData>;

export const fetchUnmaskedCard = (cardId: string): IFetchUnmaskedAction => ({
  type: FETCH_CARD_UNMASKED,
  payload: fetchUnmaskedCardRequest(cardId),
  meta: cardId,
});

export const toggleUnBlockCardModal = (isShown: boolean): IToggleCardModal => ({
  type: TOGGLE_SHOWN_UNBLOCK_CARD,
  payload: isShown,
});

export const toggleUnBlockConfirmCardModal = (isShown: boolean): IToggleCardModal => ({
  type: TOGGLE_SHOWN_UNBLOCK_CONFIRM_CARD,
  payload: isShown,
});

export const lockCard = (cardId: string, accountId: string): ILockCardAction => {
  const requestData: ICardStatusData = {
    data: {
      card: { status: AccountStatus.LOCKED },
    },
  };

  return {
    type: LOCK_CARD,
    payload: setCardStatusRequest(cardId, requestData),
    meta: accountId,
  };
};

export const unlockCard = (cardId: string) => (dispatch: Dispatch) => {
  return dispatch({
    type: UNLOCK_CARD,
    payload: async () => {
      try {
        dispatch(smsConfirmClearAttempt);
        return await setUnBlockCardRequest(cardId, AccountStatus.ACTIVE);
      } catch (e) {
        const confirmationToken = getConfirmFromResponseToken(e);
        if (isNotEmpty(confirmationToken)) {
          const confirmationCodeLength = getConfirmCodeLengthToken(e);
          dispatch(setSmsConfirmData({ confirmationToken, confirmationCodeLength }));
          dispatch(toggleUnBlockCardModal(false));
          dispatch(toggleUnBlockConfirmCardModal(true));
        } else {
          throw e;
        }
      }
    },
  });
};

export const unblockCardConfirm = (cardId: string, accountId: string, code: string) => (
  dispatch: Dispatch,
  getState: getStateType,
) => {
  const state = getState();
  const token = getConfirmationToken(state);
  return dispatch({
    type: UNLOCK_CARD_CONFIRM,
    payload: async () => {
      try {
        const result = await setUnBlockCardRequest(cardId, AccountStatus.ACTIVE, {
          'X-Confirmation-Code': code,
          'X-Confirmation-Token': token,
        });
        dispatch(smsConfirmClearAttempt);
        return result;
      } catch (e) {
        dispatch(smsConfirmFailedAttempt);
        throw e;
      }
    },
    meta: accountId,
  });
};

export const selectCardInSlider = (accountId: string, card: ICard, index: number): ISelectCardAction => ({
  type: SET_SELECTED_CARD,
  payload: { [accountId]: { card, index } },
});

export const toggleBlockCardModal = (isShown: boolean): IToggleCardModal => ({
  type: TOGGLE_SHOWN_BLOCK_CARD,
  payload: isShown,
});

export const toggleDisableCardLimitsModal = (isShown: boolean): IToggleCardModal => ({
  type: TOGGLE_SHOWN_DISABLE_CARD_LIMITS,
  payload: isShown,
});

export const toggleDisableCardLimitsConfirmModal = (isShown: boolean): IToggleCardModal => ({
  type: TOGGLE_SHOWN_DISABLE_CARD_LIMITS_CONFIRM,
  payload: isShown,
});

export const toggleDisableCardLimitsTimer = (isShown: boolean): IToggleCardModal => ({
  type: TOGGLE_SHOWN_CARD_LIMITS_TIMER,
  payload: isShown,
});

export const toggleIncreaseCardLimitModal = (isShown: boolean): IToggleCardModal => ({
  type: TOGGLE_SHOWN_INCREASE_CARD_LIMIT,
  payload: isShown,
});

export const toggleIncreaseCardLimitConfirmModal = (isShown: boolean): IToggleCardModal => ({
  type: TOGGLE_SHOWN_INCREASE_CARD_LIMIT_CONFIRM,
  payload: isShown,
});

export const reductionLimit = (cardId: string, limit: ILimitData) => (dispatch: Dispatch, getState: getStateType) => {
  const state = getState();
  dispatch({
    type: REDUCTION_CARD_LIMIT,
    payload: setCardLimitRequest(cardId, limit),
    meta: getCurrentAccountId(state),
  });
};

export const setIncreasedCardLimit = (limit: ILimitData): ISetIncreasedLimitsAction => ({
  type: SET_INCREASED_CARD_LIMIT,
  payload: limit,
});

export const increaseLimit = (cardId: string, limit: ILimitData) => (dispatch: Dispatch) => {
  dispatch(toggleIncreaseCardLimitModal(true));
  dispatch(setIncreasedCardLimit(limit));
  dispatch({
    type: INCREASE_CARD_LIMIT,
    payload: async () => {
      try {
        const result = await setIncreaseCardLimitRequest(cardId, limit);
        dispatch(smsConfirmClearAttempt);
        return result;
      } catch (e) {
        const confirmationToken = getConfirmFromResponseToken(e);
        if (isNotEmpty(confirmationToken)) {
          const confirmationCodeLength = getConfirmCodeLengthToken(e);
          dispatch(setSmsConfirmData({ confirmationToken, confirmationCodeLength }));
          dispatch(toggleIncreaseCardLimitModal(false));
          dispatch(toggleIncreaseCardLimitConfirmModal(true));
        } else {
          throw e;
        }
      }
    },
  });
};

export const increaseLimitConfirm = (cardId: string, code: string) => (dispatch: Dispatch, getState: getStateType) => {
  const state = getState();
  const token = getConfirmationToken(state);
  const limit = getIncreaseLimit(state);
  return dispatch({
    type: INCREASE_CARD_LIMIT_CONFIRM,
    payload: async () => {
      try {
        const result = await setIncreaseCardLimitRequest(cardId, limit, {
          'X-Confirmation-Code': code,
          'X-Confirmation-Token': token,
        });
        dispatch(smsConfirmClearAttempt);
        return result;
      } catch (e) {
        dispatch(smsConfirmFailedAttempt);
        throw e;
      }
    },
    meta: getCurrentAccountId(state),
  });
};

export const disableCardLimits = (cardId: string) => (dispatch: Dispatch) => {
  return dispatch({
    type: DISABLE_CARD_LIMITS,
    payload: async () => {
      try {
        dispatch(smsConfirmClearAttempt);
        return await setDisableCardLimitsRequest(cardId);
      } catch (e) {
        const confirmationToken = getConfirmFromResponseToken(e);
        if (isNotEmpty(confirmationToken)) {
          const confirmationCodeLength = getConfirmCodeLengthToken(e);
          dispatch(setSmsConfirmData({ confirmationToken, confirmationCodeLength }));
          dispatch(toggleDisableCardLimitsModal(false));
          dispatch(toggleDisableCardLimitsConfirmModal(true));
        } else {
          throw e;
        }
      }
    },
  });
};

export const disableCardLimitsConfirm = (cardId: string, code: string) => (
  dispatch: Dispatch,
  getState: getStateType,
) => {
  const state = getState();
  const token = getConfirmationToken(state);
  return dispatch({
    type: DISABLE_CARD_LIMITS_CONFIRM,
    payload: async () => {
      try {
        const result = await setDisableCardLimitsRequest(cardId, {
          'X-Confirmation-Code': code,
          'X-Confirmation-Token': token,
        });
        dispatch(smsConfirmClearAttempt);
        return result;
      } catch (e) {
        dispatch(smsConfirmFailedAttempt);
        throw e;
      }
    },
    meta: getCurrentAccountId(state),
  });
};
