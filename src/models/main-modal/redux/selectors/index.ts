import { createSelector } from 'reselect';
import { and, equals, pathOr } from 'ramda';

import { getCurrentRouterPath } from 'models/application/redux/selectors';

import { IStore } from 'modules/store/types';
import { IMainModalState } from '../reducers';
import { MainModalContentType } from '../../entities';

export const getMainModalState = (state: IStore): IMainModalState => state.mainModal;

export const getTransferErrorTitle = (state: IStore): string =>
  pathOr('', ['settings', 'title'], getMainModalState(state));

export const getMainModalContentId = createSelector(
  [getMainModalState],
  (state: IMainModalState): MainModalContentType => state.settings.id,
);

// For prevent open modal in another page
export const getIsShownMainModal = createSelector(
  [getMainModalState, getCurrentRouterPath],
  (state: IMainModalState, path): boolean => and(state.isShown, equals(state.settings.bindUrl, path)),
);

export const getStepMainModal = createSelector([getMainModalState], (state: IMainModalState): number => state.step);
