import { makeGetRequest } from '../../api-client/request';
import { ResponseAPI } from '../../api-client/entities';
import { host, apiVersion } from '../const';
import { IRates } from 'models/operations/transfer/entities';

const path = `/api/${apiVersion}/deals/conversion/rates/`

interface IRatesResponse {
  rates: IRates[];
}

export const fetchExchangeRatesRequest = (accountId: string): Promise<ResponseAPI<IRatesResponse>> =>
  makeGetRequest(`${host}${path}${accountId}`, {
    query: undefined,
  });
