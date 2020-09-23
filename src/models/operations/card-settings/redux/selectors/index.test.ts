import { accountsData, cardData } from 'models/organizations/mock';
import { emptyStore } from 'modules/store/emptyStore';
import { IStore } from 'modules/store/types';
import {
  getUnmaskedCardById,
  getFullUnmaskedSelectedCard,
  getSliderActiveIndex,
  getSliderActiveCard,
  getIsShownLockModal,
  getIsShownUnLockConfirmModal,
  getIsShownUnLockModal,
  getIsShownDisableLimitsModal,
  getIsShownDisableLimitsConfirmModal,
  getIsShownIncreaseLimitModal,
  getIsShownIncreaseLimitConfirmModal,
  getIncreaseLimit,
  getIsShownDisableLimitsTimer,
  getCardLimitsDisable,
} from '.';
import { Limit } from '../../entities';

const unMasked = {
  number: '**** **10 0004 ****',
  pin: null,
  cvc: '000',
  expireAt: '2022-07-01T00:00:00',
  owner: {
    embossedName: 'Card holder',
  },
};

const store: IStore = {
  ...emptyStore,
  organizations: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    data: [
      {
        clientName: 'Ralf Williams',
        id: 1,
        name: 'papaya',
        tin: 'PAPYMTMTXXX',
        title: 'Papaya Ltd',
        accounts: accountsData,
        cards: [cardData],
        client: {},
      },
    ],
    errors: [],
  },
  operations: {
    ...emptyStore.operations,
    cardSettings: {
      isLoading: false,
      isSuccess: false,
      isError: false,
      data: { [cardData.id]: unMasked },
      selectedCard: {
        [accountsData[0].id]: {
          card: cardData,
          index: 5,
        },
      },
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
        increasedLimit: { type: Limit.DAY, maxValue: '1000' },
      },
    },
  },
  router: {
    action: 'PUSH',
    location: {
      pathname: `/banking/account/${accountsData[0].id}/EUR`,
      search: '',
      hash: '',
      key: '',
      state: '',
    },
  },
};

describe('unmasked card selector test', () => {
  test('getUnmaskedCardById should return unmasked card || undefined', () => {
    const card = getUnmaskedCardById(cardData.id)(store);
    expect(card).toBe(unMasked);

    const anotherCard = getUnmaskedCardById('another')(store);
    expect(anotherCard).toBeUndefined();
  });

  test('getFullUnmaskedSelectedCard should return card with unmasked number', () => {
    const card = getFullUnmaskedSelectedCard(store);
    expect(card.number.indexOf('*')).toBe(-1);
    expect(card).toMatchSnapshot();
  });

  test('getSliderActiveIndex should return active slider index by Account', () => {
    const index = getSliderActiveIndex(accountsData[0].id)(store);
    expect(index).toEqual(5);
  });
  test('getSliderActiveCard should return active card in slider', () => {
    const card = getSliderActiveCard(store);
    expect(card).toEqual(cardData);
  });
  test('getIsShownLockModal should return true', () => {
    const isShown = getIsShownLockModal(store);
    expect(isShown).toBeTruthy();
  });
  test('getIsShownUnLockConfirmModal should return true', () => {
    const isShown = getIsShownUnLockConfirmModal(store);
    expect(isShown).toBeTruthy();
  });
  test('getIsShownUnLockModal should return true', () => {
    const isShown = getIsShownUnLockModal(store);
    expect(isShown).toBeTruthy();
  });
  test('getIsShownDisableLimitsModal should return true', () => {
    const isShown = getIsShownDisableLimitsModal(store);
    expect(isShown).toBeTruthy();
  });
  test('getIsShownDisableLimitsConfirmModal should return true', () => {
    const isShown = getIsShownDisableLimitsConfirmModal(store);
    expect(isShown).toBeTruthy();
  });
  test('getIsShownIncreaseLimitModal should return true', () => {
    const isShown = getIsShownIncreaseLimitModal(store);
    expect(isShown).toBeTruthy();
  });
  test('getIsShownIncreaseLimitConfirmModal should return true', () => {
    const isShown = getIsShownIncreaseLimitConfirmModal(store);
    expect(isShown).toBeTruthy();
  });
  test('getIncreaseLimit should return limit', () => {
    const limit = getIncreaseLimit(store);
    expect(limit).toEqual({ type: 'DAY', maxValue: '1000' });
  });
  test('getIsShownDisableLimitsTimer should return true', () => {
    const isShown = getIsShownDisableLimitsTimer(store);
    expect(isShown).toBeTruthy();
  });
  test('getCardLimitsDisable should return false', () => {
    const isDisable = getCardLimitsDisable(store);
    expect(!isDisable).toBeTruthy();
  });
});
