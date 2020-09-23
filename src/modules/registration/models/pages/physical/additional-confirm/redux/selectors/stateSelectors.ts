import { createSelector } from 'reselect';
import { IStore } from 'modules/store/types';
import { IAdditionalConfirmState } from '../reducer';

export const getAdditionalConfirmState = (state: IStore) => state.registrationModule.additionalConfirm;

export const isLoadingAddress = createSelector(
  [getAdditionalConfirmState],
  (result: IAdditionalConfirmState) => result.isLoadingAddress,
);

export const isLoadingProofOfWhelth = createSelector(
  [getAdditionalConfirmState],
  (result: IAdditionalConfirmState) => result.isLoadingProofOfWhelth,
);

export const getUUID = createSelector([getAdditionalConfirmState], (result: IAdditionalConfirmState) => result.uuid);
