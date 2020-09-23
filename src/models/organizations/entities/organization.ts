import { IClient } from './client';
import { ICard } from '../../operations/card-settings/entities';
import { IAccount } from './account';

export interface IOrganization {
  id: number;
  name: string;
  title: string;
  tin: string;
  clientName: string;
  client: IClient;
  accounts: IAccount[];
  cards: ICard[];
}
