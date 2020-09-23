import { push, CallHistoryMethodAction } from 'connected-react-router';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { propOr } from 'ramda';

import { IStore, getStateType } from 'modules/store/types';
import { REGISTRATION_STEPS as STEPS } from '../../../../../registration/entities/const';
import { getFirebaseToken } from '../../../../../firebase-auth';
import { fetchRegistrationStatusRequest } from '../../../../../../modules/api-requests/registration';
import {
  IPhoneStatusResponse,
  RegistrationStatuses,
} from '../../../../../../models/pages/physical/phone-number/entities';
import { initIdScan } from '../../../../../idscan/redux/actions';

import { setUUID } from '../../../additional-confirm/redux/actions/uuidActions';

export type IPhoneNumberCompleteAction = ThunkAction<void, IStore, void, CallHistoryMethodAction>;

export const REGISTRATION_PHONE = 'registration/PHONE';
export const SET_REGISTRATION_STATUS = 'registration/SET_REGISTRATION_STATUS';

export const registrationGetPhoneStatusAction = (dispatch: any, getState: getStateType) => {
  return dispatch({
    type: REGISTRATION_PHONE,
    payload: async () => {
      try {
        const token = getFirebaseToken(getState());
        const { data }: IPhoneStatusResponse | any = await fetchRegistrationStatusRequest(token);

        const { registrationStatus, additionalInfoUrl } = data;

        if (registrationStatus === RegistrationStatuses.ADDITIONAL_INFO) {
          const uuid: string = propOr('', 'uuid')(data);
          dispatch(setUUID(uuid));
          dispatch(push(additionalInfoUrl));
        } else if (registrationStatus === 'NONE') {
          dispatch(push(STEPS.personalIdentification.path));
        } else {
          dispatch(push(STEPS.registrationStatus.path));
        }
        dispatch(initIdScan);

        return data;
      } catch (e) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject({
          error: [e],
        });
      }
    },
  });
};

export const setRegistrationStatusAction = (status: string) => ({
  type: SET_REGISTRATION_STATUS,
  payload: status,
});

export const pageComplete = (): IPhoneNumberCompleteAction => (
  dispatch: ThunkDispatch<IStore, void, CallHistoryMethodAction>,
): void => {
  dispatch(push(STEPS.personalIdentification.path));
};
