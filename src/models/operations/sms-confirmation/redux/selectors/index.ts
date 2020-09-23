import { createSelector } from 'reselect';
import { pathOr } from 'ramda';

import { IStore } from 'modules/store/types';
import { ISmsConfirmationState } from '../reducers';

export const getSmsConfirmationState = (state: IStore): ISmsConfirmationState => state.operations.smsConfirmation;

export const getConfirmationToken = createSelector([getSmsConfirmationState], (state: ISmsConfirmationState): string =>
  pathOr('', ['data', 'confirmationToken'])(state));

export const getConfirmationCodeLength = createSelector(
  [getSmsConfirmationState],
  (state: ISmsConfirmationState): number => pathOr(4, ['data', 'confirmationCodeLength'])(state),
);

export const getConfirmationFailedAttempts = createSelector(
  [getSmsConfirmationState],
  (state: ISmsConfirmationState): number => pathOr(0, ['data', 'attempts'])(state),
);
