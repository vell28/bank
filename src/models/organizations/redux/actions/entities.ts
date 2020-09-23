import { IAsyncAction } from 'modules/store/types';
import { ICard } from 'models/operations/card-settings/entities';
import { IUpdateBalanceResponse, IAccount } from '../../entities';

export const FETCH_ORGANIZATIONS = 'organizations/FETCH';
export const UPDATE_ACCOUNT_BALANCE = 'organizations/UPDATE_ACCOUNT_BALANCE';

export interface IUpdateAccountBalanceAction extends IAsyncAction<IUpdateBalanceResponse> {
  meta: string; // account id
}

// this created due to incompability of adresses that server send and consume
// shouldn't be used anywhere except map serverTypes to clientTypes function
export interface IServerAddress {
  apartmentNumber?: string;
  city?: string;
  country?: string;
  postalCode?: string;
  province?: string;
  street?: string;
  streetNumber?: string;
}
export interface IServerClient {
  id?: string;
  email?: string;
  name?: string;
  phoneNumber?: string;
  citizenship?: string;
  address?: IServerAddress;
}

export interface IServerOrganization {
  id: number;
  name: string;
  title: string;
  tin: string;
  clientName: string;
  client: IServerClient;
  accounts: IAccount[];
  cards: ICard[];
}

export type IFetchOrganizationsAction = IAsyncAction<IServerOrganization[]>;
