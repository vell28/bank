import { push, CallHistoryMethodAction } from 'connected-react-router';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { IStore } from 'modules/store/types';
import { REGISTRATION_STEPS as STEPS } from '../../../../../registration/entities/const';

export type ICompanyTypeCompleteAction = ThunkAction<void, IStore, void, CallHistoryMethodAction>;

export const pageComplete = (): ICompanyTypeCompleteAction => (
  dispatch: ThunkDispatch<IStore, void, CallHistoryMethodAction>,
): void => {
  dispatch(push(STEPS.activities.path));
};
