import { ResponseAPI } from '../../api-client/entities';
import { makePostRequest } from '../../api-client/request';
import { host, apiVersion } from '../const';

type phoneNumber = string;

export interface IFilterContactListBody {
  users: phoneNumber[];
}

export const filterContactsListRequest = (data: IFilterContactListBody): Promise<ResponseAPI<IFilterContactListBody>> =>
  makePostRequest(`${host}/api/${apiVersion}/users/filter/list`, {
    data,
  });
