import { IServerAddress } from 'models/organizations/redux/actions/entities';
import { IClient } from 'models/organizations/entities';
import { IAddress, ICardOrderOwner } from '../entities';

export const exampleAddress: IAddress = {
  countryCode: 'DE',
  city: 'Cologne',
  postalCode: '50667',
  street: 'Domkloster',
  streetNumber: '4',
  apartmentNumber: 0,
};

export const exampleOrganizationAddress: IAddress = {
  countryCode: 'DE',
  city: 'Cologne',
  postalCode: '50667',
  street: 'Domkloster',
  streetNumber: '4',
  apartmentNumber: 0,
};

export const exampleClientInfo: ICardOrderOwner = {
  embossedName: 'Frank-Walter Steinmeier',
  phoneNumber: '9111111',
};

export const exampleServerAddress: IServerAddress = {
  country: 'Germany',
  province: 'North Rhine-Westphalia',
  city: 'Düsseldorf',
  postalCode: '40479',
  street: 'Gartenstraße',
  streetNumber: '53',
  apartmentNumber: '42',
};

export const exampleClient: IClient = {
  address: exampleOrganizationAddress,
  name: 'Frank-Walter Steinmeier',
  phoneNumber: '9111111',
};
