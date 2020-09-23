import { push, CallHistoryMethodAction } from 'connected-react-router';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { IStore } from 'modules/store/types';
import { REGISTRATION_STEPS as STEPS } from '../../../../registration/entities/const';
import { RegistrationVariantTypes } from '../../../../registration/entities';
import { setAccountType, ISetRegistrationVariantAction } from '../../../../registration/redux/actions';

export type IAccountVariantCompleteAction = ThunkAction<void, IStore, void, CallHistoryMethodAction>;

export const physicalNext = (): IAccountVariantCompleteAction => (
  dispatch: ThunkDispatch<IStore, void, ISetRegistrationVariantAction | CallHistoryMethodAction>,
): void => {
  dispatch(setAccountType(RegistrationVariantTypes.PHYSICAL));
  // dispatch(push(STEPS.preattention.path));
  dispatch(push(STEPS.offer.path));
};

export const juridicalNext = (): IAccountVariantCompleteAction => (
  dispatch: ThunkDispatch<IStore, void, ISetRegistrationVariantAction | CallHistoryMethodAction>,
): void => {
  dispatch(setAccountType(RegistrationVariantTypes.JURIDICAL));
  // dispatch(push(STEPS.preattention.path));
  dispatch(push(STEPS.offer.path));
};
