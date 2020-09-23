import { getStateType, IAction } from 'modules/store/types';
import { ThunkAction, APIRequest } from 'utils/utilTypings';
import { IAdditionalConfirmFormModel } from 'modules/registration/components/pages/physical/additional-confirm/types';
import { sendAdditionalInformation } from 'modules/registration/modules/api-requests/registration';
import { push } from 'connected-react-router';
import { clearUUID } from './uuidActions';
import { getUUID } from '../selectors/stateSelectors';
import { IAdditionalConfirmRequestData, mapFormModelToRequestData } from '../selectors/mapFormModelToRequestData';
import { REGISTRATION_STEPS } from '../../../../../registration/entities/const';

export const ADDITIONAL_CONFIRM_SEND = 'registration/ADDITIONAL_CONFIRM_SEND';
export const sendAction = (payload: APIRequest): IAction<APIRequest> => ({
  type: ADDITIONAL_CONFIRM_SEND,
  payload,
});

export const makeSendAdditionalConfirmDataAsyncPayload = (
  uuid: string,
  data: IAdditionalConfirmRequestData,
  dispatch: any,
) => {
  return async () => {
    try {
      await sendAdditionalInformation(uuid, data);

      // I think this is more secure or at least error-proof
      dispatch(clearUUID());

      dispatch(push(REGISTRATION_STEPS.registrationStatus.path));
    } catch (e) {
      dispatch(push(REGISTRATION_STEPS.registrationStatus.path));
      // throw e;
    }
  };
};

export const sendAdditionalConfirmData = (data: IAdditionalConfirmFormModel): ThunkAction => {
  return (dispatch: any, getState: getStateType) => {
    const state = getState();
    const uuid = getUUID(state);
    const requestData = mapFormModelToRequestData(data);
    const requestPromise = makeSendAdditionalConfirmDataAsyncPayload(uuid, requestData, dispatch);
    dispatch(sendAction(requestPromise));
  };
};
