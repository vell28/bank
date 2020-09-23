import { IAddress } from 'models/operations/order-card/entities';
import { IOrganization, IClient } from '../../entities';

export const emptyClient: IClient = {
  id: undefined,
  name: undefined,
  address: undefined,
};

export const emptyOrganization: IOrganization = {
  id: -1,
  name: '',
  title: '',
  accounts: [],
  cards: [],
  clientName: '',
  tin: '',
  client: emptyClient,
};

export const emptyAddress: IAddress = {
  apartmentNumber: -1,
  city: '',
  countryCode: '',
  postalCode: '',
  province: undefined,
  street: '',
  streetNumber: '',
};
