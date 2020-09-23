import typeToReducer from 'type-to-reducer';

import { IBaseThunkState, extractAction } from 'modules/store/types';
import { ICardUnmasked, ILimitData, Limit } from '../../entities';
import {
  FETCH_CARD_UNMASKED,
  LOCK_CARD,
  UNLOCK_CARD,
  SET_SELECTED_CARD,
  TOGGLE_SHOWN_BLOCK_CARD,
  TOGGLE_SHOWN_UNBLOCK_CARD,
  TOGGLE_SHOWN_UNBLOCK_CONFIRM_CARD,
  TOGGLE_SHOWN_DISABLE_CARD_LIMITS,
  TOGGLE_SHOWN_DISABLE_CARD_LIMITS_CONFIRM,
  TOGGLE_SHOWN_CARD_LIMITS_TIMER,
  IToggleCardModal,
  IFetchUnmaskedAction,
  ISelectCardAction,
  ISelectedCard,
  ILockCardAction,
  ISetIncreasedLimitsAction,
  UNLOCK_CARD_CONFIRM,
  DISABLE_CARD_LIMITS,
  DISABLE_CARD_LIMITS_CONFIRM,
  REDUCTION_CARD_LIMIT,
  SET_INCREASED_CARD_LIMIT,
  INCREASE_CARD_LIMIT,
  INCREASE_CARD_LIMIT_CONFIRM,
  TOGGLE_SHOWN_INCREASE_CARD_LIMIT,
  TOGGLE_SHOWN_INCREASE_CARD_LIMIT_CONFIRM,
} from '../actions';

interface ICardSettingData {
  [key: string]: ICardUnmasked;
}

export interface ICardSettingsState extends IBaseThunkState<ICardSettingData> {
  selectedCard: {
    [key: string]: ISelectedCard;
  };
  modals: {
    isShownLock: boolean;
    isShownUnLock: boolean;
    isShownUnLockConfirm: boolean;
    isShownDisableLimits: boolean;
    isShownDisableLimitsConfirm: boolean;
    isShownIncreaseLimit: boolean;
    isShownIncreaseLimitConfirm: boolean;
  };

  limitsSettings: {
    isShownDisableLimitsTimer: boolean;
    increasedLimit: ILimitData;
  };
}

export const cardSettingsInitState: ICardSettingsState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: {},
  selectedCard: {},
  modals: {
    isShownLock: false,
    isShownUnLock: false,
    isShownUnLockConfirm: false,
    isShownDisableLimits: false,
    isShownDisableLimitsConfirm: false,
    isShownIncreaseLimit: false,
    isShownIncreaseLimitConfirm: false,
  },
  errors: [],
  limitsSettings: {
    isShownDisableLimitsTimer: false,
    increasedLimit: { type: Limit.DAY, maxValue: '' },
  },
};

export const cardSettings = typeToReducer<ICardSettingsState>(
  {
    [SET_SELECTED_CARD]: (state: ICardSettingsState, action: ISelectCardAction): ICardSettingsState => ({
      ...state,
      selectedCard: {
        ...state.selectedCard,
        ...action.payload,
      },
    }),
    [TOGGLE_SHOWN_BLOCK_CARD]: (state: ICardSettingsState, action: IToggleCardModal): ICardSettingsState => ({
      ...state,
      modals: {
        ...state.modals,
        isShownLock: action.payload,
      },
    }),
    [TOGGLE_SHOWN_UNBLOCK_CARD]: (state: ICardSettingsState, action: IToggleCardModal): ICardSettingsState => ({
      ...state,
      modals: {
        ...state.modals,
        isShownUnLock: action.payload,
      },
    }),
    [TOGGLE_SHOWN_UNBLOCK_CONFIRM_CARD]: (state: ICardSettingsState, action: IToggleCardModal): ICardSettingsState => ({
      ...state,
      modals: {
        ...state.modals,
        isShownUnLockConfirm: action.payload,
      },
    }),
    [TOGGLE_SHOWN_DISABLE_CARD_LIMITS]: (state: ICardSettingsState, action: IToggleCardModal): ICardSettingsState => ({
      ...state,
      modals: {
        ...state.modals,
        isShownDisableLimits: action.payload,
      },
    }),
    [TOGGLE_SHOWN_DISABLE_CARD_LIMITS_CONFIRM]: (
      state: ICardSettingsState,
      action: IToggleCardModal,
    ): ICardSettingsState => ({
      ...state,
      modals: {
        ...state.modals,
        isShownDisableLimitsConfirm: action.payload,
      },
    }),
    [TOGGLE_SHOWN_CARD_LIMITS_TIMER]: (state: ICardSettingsState, action: IToggleCardModal): ICardSettingsState => ({
      ...state,
      limitsSettings: {
        ...state.limitsSettings,
        isShownDisableLimitsTimer: action.payload,
      },
    }),
    [TOGGLE_SHOWN_INCREASE_CARD_LIMIT]: (state: ICardSettingsState, action: IToggleCardModal): ICardSettingsState => ({
      ...state,
      modals: {
        ...state.modals,
        isShownIncreaseLimit: action.payload,
      },
    }),
    [TOGGLE_SHOWN_INCREASE_CARD_LIMIT_CONFIRM]: (
      state: ICardSettingsState,
      action: IToggleCardModal,
    ): ICardSettingsState => ({
      ...state,
      modals: {
        ...state.modals,
        isShownIncreaseLimitConfirm: action.payload,
      },
    }),
    [SET_INCREASED_CARD_LIMIT]: (state: ICardSettingsState, action: ISetIncreasedLimitsAction): ICardSettingsState => ({
      ...state,
      limitsSettings: {
        ...state.limitsSettings,
        increasedLimit: action.payload,
      },
    }),
    [FETCH_CARD_UNMASKED]: {
      LOADING: (state: ICardSettingsState): ICardSettingsState => ({
        ...state,
        isLoading: true,
      }),

      SUCCESS: (state: ICardSettingsState, action: IFetchUnmaskedAction): ICardSettingsState => {
        const { payload, meta } = action;
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          isError: false,
          data: {
            ...state.data,
            [meta]: extractAction(payload).data,
          },
          errors: [],
        };
      },

      ERROR: (state: ICardSettingsState, action): ICardSettingsState => ({
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errors: action.payload.error,
      }),
    },
    [LOCK_CARD]: {
      LOADING: (state: ICardSettingsState): ICardSettingsState => ({
        ...state,
        isLoading: true,
        modals: {
          ...state.modals,
          isShownLock: false,
        },
      }),

      SUCCESS: (state: ICardSettingsState, action: ILockCardAction): ICardSettingsState => {
        const { payload, meta } = action;
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          isError: false,
          selectedCard: {
            ...state.selectedCard,
            [meta]: {
              ...state.selectedCard[meta],
              card: extractAction(payload).data,
            },
          },
          errors: [],
        };
      },

      ERROR: (state: ICardSettingsState, action): ICardSettingsState => ({
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errors: action.payload.error,
      }),
    },
    [UNLOCK_CARD]: {
      LOADING: (state: ICardSettingsState): ICardSettingsState => ({
        ...state,
        isLoading: true,
        isError: false,
        errors: [],
      }),

      SUCCESS: (state: ICardSettingsState): ICardSettingsState => {
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          isError: false,
          errors: [],
        };
      },

      ERROR: (state: ICardSettingsState, action): ICardSettingsState => ({
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errors: action.payload.error,
      }),
    },
    [UNLOCK_CARD_CONFIRM]: {
      LOADING: (state: ICardSettingsState): ICardSettingsState => ({
        ...state,
        isLoading: true,
      }),

      SUCCESS: (state: ICardSettingsState, action: ILockCardAction): ICardSettingsState => {
        const { payload, meta } = action;
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          isError: false,
          selectedCard: {
            ...state.selectedCard,
            [meta]: {
              ...state.selectedCard[meta],
              card: extractAction(payload).data,
            },
          },
          modals: {
            ...state.modals,
            isShownUnLockConfirm: false,
          },
          errors: [],
        };
      },

      ERROR: (state: ICardSettingsState, action): ICardSettingsState => ({
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errors: action.payload.errors,
      }),
    },
    [REDUCTION_CARD_LIMIT]: {
      LOADING: (state: ICardSettingsState): ICardSettingsState => ({
        ...state,
        isLoading: true,
      }),

      SUCCESS: (state: ICardSettingsState, action: ILockCardAction): ICardSettingsState => {
        const { payload, meta } = action;
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          isError: false,
          selectedCard: {
            ...state.selectedCard,
            [meta]: {
              ...state.selectedCard[meta],
              card: extractAction(payload).data,
            },
          },
          errors: [],
        };
      },

      ERROR: (state: ICardSettingsState, action): ICardSettingsState => ({
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errors: action.payload.error,
      }),
    },
    [INCREASE_CARD_LIMIT]: {
      LOADING: (state: ICardSettingsState): ICardSettingsState => ({
        ...state,
        isLoading: true,
        isError: false,
        errors: [],
      }),

      SUCCESS: (state: ICardSettingsState): ICardSettingsState => {
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          isError: false,
          errors: [],
        };
      },

      ERROR: (state: ICardSettingsState, action): ICardSettingsState => ({
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errors: action.payload.error,
      }),
    },
    [INCREASE_CARD_LIMIT_CONFIRM]: {
      LOADING: (state: ICardSettingsState): ICardSettingsState => ({
        ...state,
        isLoading: true,
      }),

      SUCCESS: (state: ICardSettingsState, action: ILockCardAction): ICardSettingsState => {
        const { payload, meta } = action;
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          isError: false,
          selectedCard: {
            ...state.selectedCard,
            [meta]: {
              ...state.selectedCard[meta],
              card: extractAction(payload).data,
            },
          },
          modals: {
            ...state.modals,
            isShownIncreaseLimitConfirm: false,
          },
          errors: [],
        };
      },

      ERROR: (state: ICardSettingsState, action): ICardSettingsState => ({
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errors: action.payload.errors,
      }),
    },
    [DISABLE_CARD_LIMITS]: {
      LOADING: (state: ICardSettingsState): ICardSettingsState => ({
        ...state,
        isLoading: true,
        isError: false,
        errors: [],
      }),

      SUCCESS: (state: ICardSettingsState): ICardSettingsState => {
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          isError: false,
          errors: [],
        };
      },

      ERROR: (state: ICardSettingsState, action): ICardSettingsState => ({
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errors: action.payload.error,
      }),
    },
    [DISABLE_CARD_LIMITS_CONFIRM]: {
      LOADING: (state: ICardSettingsState): ICardSettingsState => ({
        ...state,
        isLoading: true,
      }),

      SUCCESS: (state: ICardSettingsState, action: ILockCardAction): ICardSettingsState => {
        const { payload, meta } = action;
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          isError: false,
          selectedCard: {
            ...state.selectedCard,
            [meta]: {
              ...state.selectedCard[meta],
              card: extractAction(payload).data,
            },
          },
          modals: {
            ...state.modals,
            isShownDisableLimitsConfirm: false,
          },
          errors: [],
          limitsSettings: {
            ...state.limitsSettings,
            isShownDisableLimitsTimer: true,
          },
        };
      },

      ERROR: (state: ICardSettingsState, action): ICardSettingsState => ({
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errors: action.payload.error,
      }),
    },
  },
  cardSettingsInitState,
);
