import { combineReducers } from 'redux';

import { registration, IRegistrationState } from './registration/redux/reducers';
import { reduxForms, IRegistrationFormsState } from './registration/redux/reducers/redux-forms';
import { firebaseAuth, IFirebaseAuthState } from './firebase-auth/redux/reducers';
import { registrationPhone, IRegistrationPhoneState } from './pages/physical/phone-number/redux/reducers';

import { idScan, IIdScanState } from './idscan/redux/reducers';
import { IAdditionalConfirmState, additionalConfirm } from './pages/physical/additional-confirm/redux/reducer';

export interface IRegistrationModuleState {
  reduxForms: IRegistrationFormsState;
  registration: IRegistrationState;
  firebaseAuth: IFirebaseAuthState;
  registrationPhone: IRegistrationPhoneState;
  idScan: IIdScanState;
  additionalConfirm: IAdditionalConfirmState;
}

export const registrationModule = combineReducers({
  reduxForms,
  registration,
  firebaseAuth,
  registrationPhone,
  idScan,
  additionalConfirm,
});
