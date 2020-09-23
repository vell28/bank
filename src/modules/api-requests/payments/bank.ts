import { apiVersion, host } from '../const';
import { makePostRequest } from '../../api-client/request';
import { IConfirmHeader, IPaymentSepaData } from './entities';

import { ResponseAPI } from '../../api-client/entities';

export const paymentSepaRequest = <T>(data: T): Promise<ResponseAPI<T>> =>
  makePostRequest(`${host}/api/${apiVersion}/payment_sepa`, {
    data,
  });

export const paymentSepaConfirmRequest = <T>(data: T, header?: IConfirmHeader): Promise<ResponseAPI<any>> =>
  makePostRequest(`${host}/api/${apiVersion}/payment_sepa`, {
    data,
    appendHeader: header,
  });

export const paymentSwiftRequest = <T>(data: T): Promise<ResponseAPI<T>> =>
  makePostRequest(`${host}/api/${apiVersion}/payment_swift`, {
    data,
  });

export const paymentSwiftConfirmRequest = <T>(data: T, header?: IConfirmHeader): Promise<ResponseAPI<any>> =>
  makePostRequest(`${host}/api/${apiVersion}/payment_swift`, {
    data,
    appendHeader: header,
  });

export const paymentSepaCommissionRequest = (data: IPaymentSepaData): Promise<ResponseAPI<any>> =>
  makePostRequest(`${host}/api/${apiVersion}/payment_sepa/commission`, {
    data,
  });
