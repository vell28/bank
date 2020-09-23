import { addSeconds } from 'date-fns';

import {
  IAuthorization,
  ITokenRefresh,
  ISuccessLogout,
  ICodeRequest,
  IPasswordCheckRequest,
  ISuccessCheckResponse,
} from 'models/authorization/entities';
import { makePostRequest } from '../../api-client/request';

import { ResponseAPI } from '../../api-client/entities';

import { host, apiVersion } from '../const';

export const passwordCheckRequest = (data: IPasswordCheckRequest): Promise<ResponseAPI<ISuccessCheckResponse>> =>
  makePostRequest(`${host}/api/${apiVersion}/password/check`, { data });

export const passwordCodeRequest = (): Promise<ResponseAPI<ICodeRequest>> =>
  makePostRequest(`${host}/api/${apiVersion}/requestCode`, {});

export const signInRequest = (data: ICodeRequest): Promise<ResponseAPI<IAuthorization>> =>
  makePostRequest(`${host}/api/${apiVersion}/signin`, { data });

export const refreshTokenRequest = (): Promise<ResponseAPI<ITokenRefresh>> => {
  return makePostRequest<ITokenRefresh>(`${host}/api/${apiVersion}/refreshToken`, {
    expires: addSeconds(Date.now(), 60).getUTCDate(),
  });
};

export const logoutRequest = (): Promise<ResponseAPI<ISuccessLogout>> =>
  makePostRequest<ISuccessLogout>(`${host}/api/${apiVersion}/refreshToken`, {});
