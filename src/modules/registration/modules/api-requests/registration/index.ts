import { propOr } from 'ramda';
import { makeGetRequest, makePostRequest } from 'modules/api-client/request';
import { ResponseAPI } from 'modules/api-client/entities';
import { IAdditionalConfirmRequestData } from 'modules/registration/models/pages/physical/additional-confirm/redux/selectors/mapFormModelToRequestData';
import { IPhoneStatusResponse } from '../../../models/pages/physical/phone-number/entities';
import { IPersonalRegistration, IRegistrationCompleteResponse } from '../../../models/registration/entities/api';
import { host, apiVersion } from '../const';

export const fetchRegistrationStatusRequest = (token: string): Promise<ResponseAPI<IPhoneStatusResponse>> =>
  makeGetRequest<IPhoneStatusResponse>(`${host}/api/${apiVersion}/clients/status`, {
    appendHeader: {
      'token-firebase': `${token}`,
    },
  });

export const fetchRegistrationComplete = (
  token: string,
  phoneNumber: string,
  registrationData: IPersonalRegistration,
  sendDocumentsToEmail: boolean,
): Promise<ResponseAPI<IRegistrationCompleteResponse>> => {
  return makePostRequest<IRegistrationCompleteResponse>(`${host}/api/${apiVersion}/clients`, {
    data: {
      registrationForm: propOr({}, 'registrationForm')(registrationData),
      userPhoto: propOr('', 'userPhoto')(registrationData),
      cardOrder: propOr({}, 'cardOrder')(registrationData),
      phoneNumber,
      sendDocumentsToEmail,
    },
    appendHeader: {
      'token-firebase': `${token}`,
    },
  });
};

export const sendAdditionalInformation = (
  uuid: string,
  data: IAdditionalConfirmRequestData,
): Promise<ResponseAPI<any>> => {
  return makePostRequest<IRegistrationCompleteResponse>(`${host}/api/${apiVersion}/clients/registration/${uuid}/info`, {
    data,
  });
};
