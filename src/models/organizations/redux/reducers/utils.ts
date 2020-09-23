import {
  findIndex, pathOr, pipe, propEq
} from 'ramda';

import { IAddress } from 'models/operations/order-card/entities';
import { IOrganization } from 'models/organizations/entities';
import getDataServer from '../../../../modules/countries/country-list.json';
import { IServerAddress, IServerOrganization } from '../actions/entities.js';

export const findAccountIndexById = (id: string) =>
  pipe(pathOr([], ['data', 0, 'accounts']), findIndex(propEq('id', id)));

// alias
type countryCode = string;

const parseCountry = (country: string): countryCode => {
  const targetCountry = getDataServer.find(propEq('name', country));
  if (targetCountry) {
    return targetCountry.code;
  }
  throw new Error(`Unknown country ${country}`); // nothing else can do
};

const parseApartmentNumber = (serverRepresentation: string): number => {
  const parsed = parseInt(serverRepresentation, 10);
  // eslint-disable-next-line no-restricted-globals
  if (!isNaN(parsed)) {
    return parsed;
  }
  return 0;
  // throw new Error('Invalid apartmentNumber');
};

// inthis context client means client-side(front-end) application
const parseSingleAddressToClientType = ({
  country = '',
  province,
  city = '',
  postalCode = '',
  street = '',
  streetNumber = '',
  apartmentNumber = '0',
}: IServerAddress): IAddress => ({
  countryCode: parseCountry(country),
  province,
  city,
  postalCode,
  street,
  streetNumber,
  apartmentNumber: parseApartmentNumber(apartmentNumber),
});

export const parseOrganizationsToClientType = (organizations: IServerOrganization[]): IOrganization[] => {
  return organizations.map((item) => {
    return {
      ...item,
      client: {
        ...item.client,
        // we expect server to send us an address
        address: parseSingleAddressToClientType(item.client.address as IServerAddress),
      },
    };
  });
};
