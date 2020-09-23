import { apiVersion, host } from '../const';
import { ResponseAPI } from '../../api-client/entities';
import { makePostRequest } from '../../api-client/request';
import { IConfirmHeader } from '../../api-requests/payments/entities';

export const orderNewCardInitRequest = <T>(data: T): Promise<ResponseAPI<any>> =>
  makePostRequest(`${host}/api/${apiVersion}/cards`, {
    data,
  });

export const orderNewCardConfirmRequest = <T>(data: T, header?: IConfirmHeader): Promise<ResponseAPI<any>> =>
  makePostRequest(`${host}/api/${apiVersion}/cards`, {
    data,
    appendHeader: header,
  });
