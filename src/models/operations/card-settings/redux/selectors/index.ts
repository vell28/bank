import { createSelector } from 'reselect';
import {
  defaultTo, slice, pipe, replace, splitEvery, join, pathOr
} from 'ramda';
import memoizeOne from 'memoize-one';

import { isStateLoading } from 'modules/store/utils';
import { getActiveCardsByAccount, getCurrentAccountId } from 'models/organizations/redux/selectors';
import { defaultToEmptyString } from 'utils/ramda';

import { IStore } from 'modules/store/types';
import { ICardSettingsState } from '../reducers';
import {
  ICard, ICardUnmasked, ILimit, ILimitData
} from '../../entities';

const emptyUnmasked = {
  number: '',
  pin: null,
  cvc: '',
  expireAt: '2022-07-01T00:00:00',
  owner: {
    embossedName: '',
  },
};

const defaultToEmptyUnmasked = defaultTo<ICardUnmasked>(emptyUnmasked);

const mergeCardData = (accountCard: ICard, unmasked?: ICardUnmasked): ICardUnmasked => {
  const defaultUnmasked = defaultToEmptyUnmasked(unmasked);
  const middlePart = slice(7, 14, defaultUnmasked.number);
  const cardNumber = pipe<string, string, string, string[], string>(
    replace('_', middlePart),
    replace(/\s/g, ''),
    splitEvery(4),
    join(' '),
  )(defaultToEmptyString(accountCard.number));
  return {
    ...defaultUnmasked,
    number: cardNumber,
  };
};

export const getCardSettingsState = (state: IStore): ICardSettingsState => state.operations.cardSettings;

export const getUnmaskedCardById = memoizeOne((id: string) =>
  createSelector([getCardSettingsState], (state: ICardSettingsState): ICardUnmasked | undefined => state.data[id]));

export const getSliderActiveCard = createSelector(
  [getCardSettingsState, getActiveCardsByAccount, getCurrentAccountId],
  (state: ICardSettingsState, cards: ICard[], accountId: string): ICard | undefined =>
    pathOr(cards[0], ['selectedCard', accountId, 'card'])(state),
);

export const getFullUnmaskedSelectedCard = createSelector(
  [getCardSettingsState, getSliderActiveCard],
  (state: ICardSettingsState, accountCard: ICard | undefined): ICardUnmasked => {
    if (!accountCard) {
      return emptyUnmasked;
    }
    const unmaskedData = state.data[accountCard.id];
    return mergeCardData(accountCard, unmaskedData);
  },
);

export const isInitialLoadingCard = createSelector(
  [getCardSettingsState],
  (state: ICardSettingsState): boolean => isStateLoading(state),
);

export const getSliderActiveIndex = memoizeOne((accountId: string) =>
  createSelector(
    [getCardSettingsState],
    (state: ICardSettingsState): number => pathOr(0, ['selectedCard', accountId, 'index'])(state),
  ));

export const getSliderActiveCardId = createSelector(
  [getSliderActiveCard],
  (card?: ICard): string => {
    return pathOr('', ['id'])(card);
  },
);

export const getCardLimits = createSelector(
  [getSliderActiveCard],
  (card?: ICard): ILimit[] => {
    return pathOr([], ['limits'])(card);
  },
);

export const getCardLimitsDisable = createSelector(
  [getSliderActiveCard],
  (card?: ICard): boolean => {
    return pathOr(false, ['options', 'limits', 'disable'])(card);
  },
);

export const getIsShownDisableLimitsTimer = createSelector(
  [getCardSettingsState],
  (state: ICardSettingsState): boolean => {
    return pathOr(false, ['isShownDisableLimitsTimer'])(state.limitsSettings);
  },
);

export const getIsShownUnLockModal = createSelector(
  [getCardSettingsState],
  (state: ICardSettingsState): boolean => state.modals.isShownUnLock,
);

export const getIsShownUnLockConfirmModal = createSelector(
  [getCardSettingsState],
  (state: ICardSettingsState): boolean => state.modals.isShownUnLockConfirm,
);

export const hasConfirmServerError = createSelector(
  [getCardSettingsState],
  (state: ICardSettingsState): boolean => state.isError,
);

export const getIsShownDisableLimitsModal = createSelector(
  [getCardSettingsState],
  (state: ICardSettingsState): boolean => state.modals.isShownDisableLimits,
);

export const getIsShownDisableLimitsConfirmModal = createSelector(
  [getCardSettingsState],
  (state: ICardSettingsState): boolean => state.modals.isShownDisableLimitsConfirm,
);

export const getIsShownIncreaseLimitModal = createSelector(
  [getCardSettingsState],
  (state: ICardSettingsState): boolean => state.modals.isShownIncreaseLimit,
);

export const getIsShownIncreaseLimitConfirmModal = createSelector(
  [getCardSettingsState],
  (state: ICardSettingsState): boolean => state.modals.isShownIncreaseLimitConfirm,
);

export const getIncreaseLimit = createSelector(
  [getCardSettingsState],
  (state: ICardSettingsState): ILimitData => state.limitsSettings.increasedLimit,
);

export const getIsShownLockModal = createSelector(
  [getCardSettingsState],
  (state: ICardSettingsState): boolean => state.modals.isShownLock,
);
