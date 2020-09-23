import { ITopUpRequestData, ITopUpRequestResponse } from 'modules/api-requests/top-up/entities';
import { apiVersion, host } from '../const';
import { ResponseAPI } from '../../api-client/entities';
import { makePostRequest } from '../../api-client/request';

export const topUpCardRequest = <T>(data: T): Promise<ResponseAPI<any>> =>
  makePostRequest(`${host}/api/${apiVersion}/topup/process`, {
    data,
  });

export const sendTopUpRequest = (data: ITopUpRequestData): Promise<ResponseAPI<ITopUpRequestResponse>> =>
  makePostRequest<ITopUpRequestResponse>(`${host}/api/v1/money_request`, {
    data,
  });
