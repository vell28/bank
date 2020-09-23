import typeToReducer from 'type-to-reducer';

import { IMainModal } from '../../entities';
import {
  SHOW_WITH_CONTENT_MAIN_MODAL,
  TOGGLE_MAIN_MODAL,
  UPDATE_MAIN_MODAL,
  NEXT_STEP_MAIN_MODAL,
  TARGET_STEP_MAIN_MODAL,
  IUpdateMainModalAction,
  IShowContentMainModalAction,
  ITargetStepMainModalAction,
} from '../actions';

export type IMainModalState = IMainModal;

export const mainModalInitState: IMainModalState = {
  settings: {
    id: '',
    bindUrl: '',
  },
  step: 0,
  isShown: false,
};

export const mainModal = typeToReducer<IMainModalState>(
  {
    [UPDATE_MAIN_MODAL]: (state: IMainModalState, action: IUpdateMainModalAction): IMainModalState => ({
      ...state,
      ...action.payload,
    }),
    [TOGGLE_MAIN_MODAL]: (state: IMainModalState): IMainModalState => ({
      ...state,
      isShown: !state.isShown,
      step: 0,
    }),
    [SHOW_WITH_CONTENT_MAIN_MODAL]: (state: IMainModalState, action: IShowContentMainModalAction): IMainModalState => ({
      ...state,
      settings: action.payload,
      isShown: true,
      step: 0,
    }),
    [NEXT_STEP_MAIN_MODAL]: (state: IMainModalState): IMainModalState => ({
      ...state,
      step: state.step + 1,
    }),
    [TARGET_STEP_MAIN_MODAL]: (state: IMainModalState, action: ITargetStepMainModalAction): IMainModalState => ({
      ...state,
      step: action.payload,
    }),
  },
  mainModalInitState,
);
