import { emptyStore } from 'modules/store/emptyStore';

import { IStore } from 'modules/store/types';
import {
  getMainModalContentId, getIsShownMainModal, getMainModalState, getStepMainModal
} from '.';
import { IMainModal } from '../../entities';

const data: IMainModal = {
  settings: { id: 'TRANSFER_CARD_MODAL', bindUrl: '/account' },
  step: 5,
  isShown: true,
};

const store: IStore = {
  ...emptyStore,
  mainModal: data,
};

describe('main modal selector tests', () => {
  test('getMainModalState should return modal state', () => {
    const modal = getMainModalState(store);
    expect(modal).toBe(data);
    expect(modal).toMatchSnapshot();
  });

  test('getIsShownMainModal should return false if bindUrl not match', () => {
    const isShown = getIsShownMainModal(store);
    expect(isShown).toBeFalsy();
  });

  test('getIsShownMainModal should return true if bindUrl is match', () => {
    const storeWithMatchPath = {
      ...store,
      location: {
        pathname: '/account',
        search: '',
        hash: '',
        key: '',
        state: '',
      },
    };
    const isShown = getIsShownMainModal(storeWithMatchPath);
    expect(isShown).toBeFalsy();
  });

  test('getMainModalContentId should return content id', () => {
    const contentId = getMainModalContentId(store);
    expect(contentId).toEqual('TRANSFER_CARD_MODAL');
  });

  test('getStepMainModal should return step number', () => {
    const step = getStepMainModal(store);
    expect(step).toEqual(5);
  });
});
