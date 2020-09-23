import { push, CallHistoryMethodAction } from 'connected-react-router';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { IStore, getStateType } from 'modules/store/types';
import { REGISTRATION_STEPS as STEPS } from '../../../../../registration/entities/const';
import { RegistrationVariantTypes } from '../../../../../registration/entities';
import { getRegistrationVariant } from '../../../../../registration/redux/selectors';

export type IAdditionalConfirmCompleteAction = ThunkAction<void, IStore, void, CallHistoryMethodAction>;

export const pageComplete = (): IAdditionalConfirmCompleteAction => (
  dispatch: ThunkDispatch<IStore, void, CallHistoryMethodAction>,
  getState: getStateType,
): void => {
  const state = getState();
  const registrationVariant = getRegistrationVariant(state);
  if (registrationVariant === RegistrationVariantTypes.JURIDICAL) {
    dispatch(push(STEPS.proxyUpload.path));
  } else {
    dispatch(push(STEPS.congratulations.path));
  }
};
