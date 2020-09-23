import { push, CallHistoryMethodAction } from 'connected-react-router';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { IStore } from 'modules/store/types';
import { REGISTRATION_STEPS as STEPS } from '../../../../registration/entities/const';

export type ILoginStatusCompleteAction = ThunkAction<void, IStore, void, CallHistoryMethodAction>;

export const continueRegistration = (): ILoginStatusCompleteAction => (
  dispatch: ThunkDispatch<IStore, void, CallHistoryMethodAction>,
): void => {
  dispatch(push(STEPS.personalIdentification.path));
};

export const openNewForm = (): ILoginStatusCompleteAction => (
  dispatch: ThunkDispatch<IStore, void, CallHistoryMethodAction>,
): void => {
  dispatch(push(STEPS.offer.path));
};
