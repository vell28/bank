import { cardData } from 'models/organizations/mock';
import { cardSettings, ICardSettingsState } from '.';
import { lockedStatus } from '../../../../organizations/entities';
import {
  IFetchUnmaskedAction,
  FETCH_CARD_UNMASKED,
  SET_SELECTED_CARD,
  IToggleCardModal,
  LOCK_CARD,
  UNLOCK_CARD_CONFIRM,
  TOGGLE_SHOWN_UNBLOCK_CONFIRM_CARD,
  TOGGLE_SHOWN_UNBLOCK_CARD,
  TOGGLE_SHOWN_BLOCK_CARD,
  TOGGLE_SHOWN_DISABLE_CARD_LIMITS,
  TOGGLE_SHOWN_DISABLE_CARD_LIMITS_CONFIRM,
  TOGGLE_SHOWN_INCREASE_CARD_LIMIT,
  TOGGLE_SHOWN_INCREASE_CARD_LIMIT_CONFIRM,
  TOGGLE_SHOWN_CARD_LIMITS_TIMER,
  ILockCardAction,
  IIncreaseCardLimitAction,
  ISetIncreasedLimitsAction,
  DISABLE_CARD_LIMITS_CONFIRM,
  INCREASE_CARD_LIMIT_CONFIRM,
  REDUCTION_CARD_LIMIT,
  SET_INCREASED_CARD_LIMIT,
} from '../actions';

import { ICard, Limit } from '../../entities';

const initCardState: ICardSettingsState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: {},
  selectedCard: {},
  modals: {
    isShownLock: true,
    isShownUnLock: true,
    isShownUnLockConfirm: true,
    isShownDisableLimits: true,
    isShownDisableLimitsConfirm: true,
    isShownIncreaseLimit: true,
    isShownIncreaseLimitConfirm: true,
  },
  errors: [],
  limitsSettings: {
    isShownDisableLimitsTimer: true,
    increasedLimit: { type: Limit.DAY, maxValue: '' },
  },
};

const unmaskedData = {
  number: '**** **10 0004 ****',
  pin: null,
  cvc: '675',
  expireAt: '2022-05-01T00:00:00',
  owner: {
    embossedName: 'RALF WILLIAMS',
  },
};

const cardLimit = {
  type: Limit.DAY,
  maxValue: '500',
};

const cardId = 'test123';
const accountId = 'account123';

describe('cardSettings reducers', () => {
  test('cardSettings/FETCH_CARD_UNMASKED', () => {
    const action: IFetchUnmaskedAction = {
      type: `${FETCH_CARD_UNMASKED}_SUCCESS`,
      payload: { data: unmaskedData },
      meta: cardId,
    };

    const newState = cardSettings(initCardState, action);
    expect(newState.data[cardId]).toBe(unmaskedData);
    expect(newState).toMatchSnapshot();
  });
  test('cardSettings/SET_SELECTED_CARD', () => {
    const action = {
      type: SET_SELECTED_CARD,
      payload: {
        [accountId]: {
          index: 1,
          card: cardData,
        },
      },
    };

    const newState = cardSettings(initCardState, action);
    expect(newState.selectedCard[accountId].index).toEqual(1);
    expect(newState.selectedCard[accountId].card).toBe(cardData);
  });
  test('cardSettings/TOGGLE_SHOWN_UNBLOCK_CONFIRM_CARD', () => {
    const action: IToggleCardModal = {
      type: TOGGLE_SHOWN_UNBLOCK_CONFIRM_CARD,
      payload: false,
    };

    const newState = cardSettings(initCardState, action);
    expect(newState.modals.isShownUnLockConfirm).toBeFalsy();
  });
  test('cardSettings/TOGGLE_SHOWN_BLOCK_CARD', () => {
    const action: IToggleCardModal = {
      type: TOGGLE_SHOWN_BLOCK_CARD,
      payload: false,
    };

    const newState = cardSettings(initCardState, action);
    expect(newState.modals.isShownLock).toBeFalsy();
  });
  test('cardSettings/TOGGLE_SHOWN_UNBLOCK_CARD', () => {
    const action: IToggleCardModal = {
      type: TOGGLE_SHOWN_UNBLOCK_CARD,
      payload: false,
    };

    const newState = cardSettings(initCardState, action);
    expect(newState.modals.isShownUnLock).toBeFalsy();
  });
  test('cardSettings/LOCK_CARD', () => {
    const blockedCard: ICard = {
      ...cardData,
      status: lockedStatus,
    };
    const action: ILockCardAction = {
      type: `${LOCK_CARD}_SUCCESS`,
      payload: { data: blockedCard },
      meta: accountId,
    };

    const newState = cardSettings(initCardState, action);
    expect(newState.selectedCard[accountId].card).toBe(blockedCard);
    expect(newState).toMatchSnapshot();
  });

  test('cardSettings/UNLOCK_CARD_CONFIRM', () => {
    const action: ILockCardAction = {
      type: `${UNLOCK_CARD_CONFIRM}_SUCCESS`,
      payload: { data: cardData },
      meta: accountId,
    };

    const newState = cardSettings(initCardState, action);
    expect(newState.selectedCard[accountId].card).toBe(cardData);
    expect(newState.modals.isShownUnLockConfirm).toBeFalsy();
    expect(newState).toMatchSnapshot();
  });

  test('cardSettings/DISABLE_CARD_LIMITS_CONFIRM', () => {
    const action: ILockCardAction = {
      type: `${DISABLE_CARD_LIMITS_CONFIRM}_SUCCESS`,
      payload: { data: cardData },
      meta: accountId,
    };

    const newState = cardSettings(initCardState, action);
    expect(newState.selectedCard[accountId].card).toBe(cardData);
    expect(newState.modals.isShownDisableLimitsConfirm).toBeFalsy();
    expect(newState).toMatchSnapshot();
  });

  test('cardSettings/INCREASE_CARD_LIMIT_CONFIRM', () => {
    const action: ILockCardAction = {
      type: `${INCREASE_CARD_LIMIT_CONFIRM}_SUCCESS`,
      payload: { data: cardData },
      meta: accountId,
    };

    const newState = cardSettings(initCardState, action);
    expect(newState.selectedCard[accountId].card).toBe(cardData);
    expect(newState.modals.isShownIncreaseLimitConfirm).toBeFalsy();
    expect(newState).toMatchSnapshot();
  });

  test('cardSettings/TOGGLE_SHOWN_DISABLE_CARD_LIMITS', () => {
    const action: IToggleCardModal = {
      type: TOGGLE_SHOWN_DISABLE_CARD_LIMITS,
      payload: false,
    };

    const newState = cardSettings(initCardState, action);
    expect(newState.modals.isShownDisableLimits).toBeFalsy();
  });

  test('cardSettings/TOGGLE_SHOWN_DISABLE_CARD_LIMITS_CONFIRM', () => {
    const action: IToggleCardModal = {
      type: TOGGLE_SHOWN_DISABLE_CARD_LIMITS_CONFIRM,
      payload: false,
    };

    const newState = cardSettings(initCardState, action);
    expect(newState.modals.isShownDisableLimitsConfirm).toBeFalsy();
  });

  test('cardSettings/TOGGLE_SHOWN_INCREASE_CARD_LIMIT', () => {
    const action: IToggleCardModal = {
      type: TOGGLE_SHOWN_INCREASE_CARD_LIMIT,
      payload: false,
    };

    const newState = cardSettings(initCardState, action);
    expect(newState.modals.isShownIncreaseLimit).toBeFalsy();
  });

  test('cardSettings/TOGGLE_SHOWN_INCREASE_CARD_LIMIT_CONFIRM', () => {
    const action: IToggleCardModal = {
      type: TOGGLE_SHOWN_INCREASE_CARD_LIMIT_CONFIRM,
      payload: false,
    };

    const newState = cardSettings(initCardState, action);
    expect(newState.modals.isShownIncreaseLimitConfirm).toBeFalsy();
  });

  test('cardSettings/TOGGLE_SHOWN_CARD_LIMITS_TIMER', () => {
    const action: IToggleCardModal = {
      type: TOGGLE_SHOWN_CARD_LIMITS_TIMER,
      payload: false,
    };

    const newState = cardSettings(initCardState, action);
    expect(newState.limitsSettings.isShownDisableLimitsTimer).toBeFalsy();
  });

  test('cardSettings/REDUCTION_CARD_LIMIT', () => {
    const action: IIncreaseCardLimitAction = {
      type: `${REDUCTION_CARD_LIMIT}_SUCCESS`,
      payload: { data: cardData },
      meta: accountId,
    };

    const newState = cardSettings(initCardState, action);
    expect(newState).toMatchSnapshot();
  });

  test('cardSettings/SET_INCREASED_CARD_LIMIT', () => {
    const action: ISetIncreasedLimitsAction = {
      type: `${SET_INCREASED_CARD_LIMIT}_SUCCESS`,
      payload: cardLimit,
    };

    const newState = cardSettings(initCardState, action);
    expect(newState).toMatchSnapshot();
  });
});
