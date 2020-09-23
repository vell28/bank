import { propOr } from 'ramda';

import { makeGetRequest, makePostRequest } from 'modules/api-client/request';
import { ResponseAPI } from 'modules/api-client/entities';
import { fileData } from 'utils/utilTypings';
import {
  IIdScanConfigResponse,
  IIdScanAuthResponse,
  IIdScanConfig,
  IIdScanInvestigateResponse,
} from '../../../models/idscan/entities';

import { host, idScanBaseUrl } from '../const';

export const fetchIdScanConfigRequest = (): Promise<ResponseAPI<IIdScanConfigResponse>> =>
  makeGetRequest<IIdScanConfigResponse>(`${host}/api/v1/id_scan/config`, {});

export const idScanAuthRequest = (config?: IIdScanConfig): Promise<ResponseAPI<IIdScanAuthResponse>> => {
  const username = propOr('', 'login')(config);
  const password = propOr('', 'password')(config);
  const hostIdScan = propOr('', 'host')(config);

  const data = {
    username,
    password,
    area: 'investigation',
    grant_type: 'password',
  };

  return makePostRequest<IIdScanConfigResponse>(`${hostIdScan}/idscanenterprisesvc/token`, {
    data,
    appendHeader: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json, text/plain, */*',
    },
    isFormData: true,
    useCredential: false,
  });
};

export const investigateDocRequest = (img: string | null): Promise<ResponseAPI<IIdScanInvestigateResponse>> => {
  return makePostRequest<IIdScanInvestigateResponse>(`${idScanBaseUrl}/json/iddoc/upload`, {
    data: { data: img },
  });
};

export const investigateSelfieRequest = (
  personEntryId: string,
  img: string | null,
): Promise<ResponseAPI<IIdScanInvestigateResponse>> => {
  return makePostRequest<IIdScanInvestigateResponse>(`${idScanBaseUrl}/json/selfie/upload`, {
    data: { data: img, personEntryId },
  });
};

// url may change
export const uploadImageToScan = (
  personEntryId: string,
  img: fileData,
): Promise<ResponseAPI<IIdScanInvestigateResponse>> => {
  return makePostRequest<IIdScanInvestigateResponse>(`${idScanBaseUrl}/json/iddoc/upload`, {
    data: { data: img, personEntryId },
  });
};
