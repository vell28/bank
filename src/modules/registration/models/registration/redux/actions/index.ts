import { goBack, push, CallHistoryMethodAction } from 'connected-react-router';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Dispatch } from 'redux';

import { history } from 'modules/store';
import { IAction, IStore } from 'modules/store/types';
import {
  fetchRegistrationComplete,
  fetchRegistrationStatusRequest,
} from '../../../../modules/api-requests/registration';
import { IPersonalRegistration } from '../../entities/api';
import { RegistrationVariantType } from '../../entities';

import { REGISTRATION_STEPS as STEPS } from '../../entities/const';

import { getFirebaseToken, getFirebaseActivePhone, getFirebaseActiveCountry } from '../../../../models/firebase-auth';
import { IPhoneStatusResponse } from '../../../../models/pages/physical/phone-number/entities';
import { setRegistrationStatusAction } from '../../../../models/pages/physical/phone-number/redux/actions';
import { setUUID } from '../../../../models/pages/physical/additional-confirm/redux/actions/uuidActions';

export const SET_REGISTRATION_VARIANT = 'registration/SET_REGISTRATION_VARIANT';
export const SEND_REGISTRATION_DATA = 'registration/SEND_REGISTRATION_DATA';
export const CHECK_REGISTRATION_STATUS = 'registration/CHECK_REGISTRATION_STATUS';

export type ISetRegistrationVariantAction = IAction<RegistrationVariantType>;
export type IRegistrationBackAction = ThunkAction<void, IStore, void, CallHistoryMethodAction>;

export const setAccountType = (type: RegistrationVariantType): ISetRegistrationVariantAction => ({
  type: SET_REGISTRATION_VARIANT,
  payload: type,
});

export const back = (): IRegistrationBackAction => (
  dispatch: ThunkDispatch<IStore, void, CallHistoryMethodAction>,
): void => {
  if (history.length) {
    dispatch(goBack());
  } else {
    dispatch(push('/'));
  }
};

export type IRegistrationCloseAction = ThunkAction<void, IStore, void, CallHistoryMethodAction>;

export const close = (): IRegistrationCloseAction => (
  dispatch: ThunkDispatch<IStore, void, CallHistoryMethodAction>,
): void => {
  dispatch(push('/'));
};

export const checkRegistrationStatus = (dispatch: Dispatch, getState: any) =>
  dispatch({
    type: CHECK_REGISTRATION_STATUS,
    payload: async () => {
      try {
        const token = getFirebaseToken(getState());
        const { data }: IPhoneStatusResponse | any = await fetchRegistrationStatusRequest(token);

        const { registrationStatus, uuid } = data;
        if (registrationStatus === 'ADDITIONAL_INFO') {
          dispatch(setUUID(uuid));
          dispatch(push(STEPS.additionalConfirm.path));
        }
        return data;
      } catch (e) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject({
          error: [e],
        });
      }
    },
  });

export const sendRegistrationData = (registrationData: IPersonalRegistration) => (dispatch: Dispatch, getState: any) =>
  dispatch({
    type: SEND_REGISTRATION_DATA,
    payload: async () => {
      dispatch(setRegistrationStatusAction('REGISTERED'));
      dispatch(push(STEPS.registrationStatus.path));

      try {
        const token = getFirebaseToken(getState());
        const activePhone = getFirebaseActivePhone(getState());
        const activeCountry = getFirebaseActiveCountry(getState());
        const phoneNumber = `${activeCountry.dialCode}${activePhone}`;

        const result = await fetchRegistrationComplete(token, phoneNumber, registrationData, true);

        if (result.ok) {
          dispatch(setRegistrationStatusAction('NONE'));
          dispatch(push(STEPS.registrationStatus.path));
        } else {
          dispatch(checkRegistrationStatus(dispatch, getState));
        }
        return result;
      } catch (e) {
        dispatch(setRegistrationStatusAction('CANCELED'));
        dispatch(push(STEPS.registrationStatus.path));
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject({
          error: [e],
        });
      }
    },
  });
