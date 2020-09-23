import { propEq } from 'ramda';
import { IAddress } from '../models/operations/order-card';
import getDataServer from '../modules/countries/country-list.json';

export const formatCountryCode = (countryCode: string): string => {
  const country = getDataServer.find(propEq('code', countryCode));
  return country ? country.name : countryCode;
};

const formatProvince = (province?: string) => {
  return province ? ` ${province}, ` : '';
};

export const formatAddressForHumen = (address: IAddress): string => {
  const {
    countryCode, city, postalCode, province, street, streetNumber, apartmentNumber
  } = address;
  return `${formatCountryCode(countryCode)}, ${city} ${postalCode},${formatProvince(
    province,
  )}${street} ${streetNumber} ${apartmentNumber}`;
};
