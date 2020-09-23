import { IUpdateBalanceResponse } from 'models/organizations/entities';
import { IServerOrganization } from 'models/organizations/redux/actions/entities';
import { makeGetRequest } from '../../api-client/request';

import { ResponseAPI } from '../../api-client/entities';

import { host, apiVersion } from '../const';

export const fetchAccountBalanceRequest = (accountId: string): Promise<ResponseAPI<IUpdateBalanceResponse>> =>
  makeGetRequest<IUpdateBalanceResponse>(`${host}/api/${apiVersion}/accounts/${accountId}/balances`, {});

export const fetchOrganizationRequest = (): Promise<ResponseAPI<IServerOrganization[]>> =>
  makeGetRequest<IServerOrganization[]>(`${host}/api/v2/organizations`, {});
