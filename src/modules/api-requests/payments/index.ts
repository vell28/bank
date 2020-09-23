import { IConfirmHeader } from './entities';
import { apiVersion, host } from '../const';
import { ResponseAPI } from '../../api-client/entities';
import { makePostRequest } from '../../api-client/request';

export const paymentRequest = <T>(data: T): Promise<ResponseAPI<any>> =>
  makePostRequest<any>(`${host}/api/${apiVersion}/payment_contact`, {
    data,
  });

export const paymentConfirmRequest = <T>(data: T, header?: IConfirmHeader): Promise<ResponseAPI<any>> =>
  makePostRequest(`${host}/api/${apiVersion}/payment_contact`, {
    data,
    appendHeader: header,
  });
