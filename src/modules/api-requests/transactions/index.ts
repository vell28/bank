import { ITransactionResponse } from 'models/transactions/entities';
import { makeGetRequest } from '../../api-client/request';

import { ResponseAPI } from '../../api-client/entities';

import { host } from '../const';

type SortDirectionType = 'any' | 'incoming' | 'outgoing';

export interface ITransactionQueryParams {
  accounts: string;
  cards?: string;
  from?: string;
  to?: string;
  size?: number;
  page?: number;
  direction?: SortDirectionType;
}

export const fetchTransactionsRequest = (params: ITransactionQueryParams): Promise<ResponseAPI<ITransactionResponse>> =>
  makeGetRequest<ITransactionResponse>(`${host}/api/v2/operations`, {
    query: params,
  });
