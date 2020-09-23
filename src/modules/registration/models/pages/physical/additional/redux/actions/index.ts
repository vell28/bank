import { push, CallHistoryMethodAction } from 'connected-react-router';
import { pathOr } from 'ramda';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { IStore, getStateType } from 'modules/store/types';
import { getSignificantData } from '../../../../../idscan/redux/selectors';
import { REGISTRATION_STEPS as STEPS } from '../../../../../registration/entities/const';
import { getRegistrationForm, getPersonalRegistration } from '../../../../../registration/redux/selectors';
import { checkIdScanFieldError, getFormsIsNoExpiry } from '../../../../../registration/redux/selectors/redux-forms';
import { sendRegistrationData } from '../../../../../registration/redux/actions';
import { IPersonalRegistration } from '../../../../../registration/entities/api';

export type IAdditionalCompleteAction = ThunkAction<void, IStore, void, CallHistoryMethodAction>;

export const pageComplete = (): IAdditionalCompleteAction => (
  dispatch: ThunkDispatch<IStore, void, CallHistoryMethodAction>,
  getState: getStateType,
): void => {
  const store = getState();
  const form = getRegistrationForm(store);
  const idScan = getSignificantData(store);
  const registrationData = getPersonalRegistration(store) as IPersonalRegistration;

  const checkExpiryDate = () =>
    !getFormsIsNoExpiry(store)
    && checkIdScanFieldError(pathOr('', ['identityDocument', 'expiryDate'])(form), idScan.expiryDate);

  switch (true) {
    case checkIdScanFieldError(pathOr('', ['name'])(form), idScan.name):
    case checkIdScanFieldError(pathOr('', ['surname'])(form), idScan.surname):
    case checkIdScanFieldError(pathOr('', ['birthDate'])(form), idScan.birthDate):
      dispatch(push(STEPS.personalIdentification.path));
      return;
    case checkIdScanFieldError(pathOr('', ['gender'])(form), idScan.gender):
      dispatch(push(STEPS.basicPersonalData.path));
      return;
    case checkExpiryDate():
    case checkIdScanFieldError(pathOr('', ['identityDocument', 'number'])(form), idScan.documentNumber):
      dispatch(push(STEPS.identity.path));
      return;
    default:
      dispatch(sendRegistrationData(registrationData));
  }
};
