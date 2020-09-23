import { mainModal, IMainModalState } from '.';
import {
  UPDATE_MAIN_MODAL,
  TOGGLE_MAIN_MODAL,
  SHOW_WITH_CONTENT_MAIN_MODAL,
  TARGET_STEP_MAIN_MODAL,
  NEXT_STEP_MAIN_MODAL,
} from '../actions';

const initMainMenu: IMainModalState = {
  isShown: false,
  settings: { id: '', bindUrl: '' },
  step: 0,
};

const data = {
  isShown: true,
  settings: { id: 'TRANSFER_MODAL', bindUrl: '/account' },
  step: 2,
};

describe('mainModal reducers', () => {
  test('mainModal/UPDATE_MAIN_MODAL', () => {
    const action = {
      type: UPDATE_MAIN_MODAL,
      payload: data,
    };

    const newState = mainModal(initMainMenu, action);
    expect(newState.isShown).toBeTruthy();
    expect(newState.step).toEqual(2);
    expect(newState).toMatchSnapshot();
  });

  test('mainModal/TOGGLE_MAIN_MODAL - should hide/open modal', () => {
    const action = {
      type: TOGGLE_MAIN_MODAL,
      payload: null,
    };

    const newState = mainModal(initMainMenu, action);
    expect(newState.isShown).toBeTruthy();
  });

  test('mainModal/should set content id and show modal', () => {
    const action = {
      type: SHOW_WITH_CONTENT_MAIN_MODAL,
      payload: data.settings,
    };

    const newState = mainModal(initMainMenu, action);
    expect(newState.settings.id).toEqual('TRANSFER_MODAL');
    expect(newState.isShown).toBeTruthy();
  });

  test('mainModal/NEXT_STEP_MAIN_MODAL - should next step change', () => {
    const action = {
      type: NEXT_STEP_MAIN_MODAL,
    };

    const newState = mainModal(initMainMenu, action);
    expect(newState.step).toEqual(initMainMenu.step + 1);
  });

  test('mainModal/TARGET_STEP_MAIN_MODAL - should set target step', () => {
    const action = {
      type: TARGET_STEP_MAIN_MODAL,
      payload: 2,
    };

    const newState = mainModal(initMainMenu, action);
    expect(newState.step).toEqual(2);
  });
});
