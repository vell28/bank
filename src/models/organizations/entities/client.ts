import { IAddress } from '../../operations/order-card';

export interface IClient {
  id?: string;
  email?: string;
  name?: string;
  phoneNumber?: string;
  citizenship?: string;
  address?: IAddress;
}
