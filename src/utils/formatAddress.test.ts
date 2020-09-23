import { IAddress } from 'models/operations/order-card/entities';
import { formatAddressForHumen } from './formatAddress';

describe('product type format tests', () => {
  test('format valid address with province', () => {
    const validAddressWithProvince: IAddress = {
      countryCode: 'DE',
      province: 'Bavaria',
      city: 'Munich',
      postalCode: '80335',
      street: 'Marsstraße',
      streetNumber: '43',
      apartmentNumber: 0,
    };
    const validAddressWithProvinceExpectation = 'Germany, Munich 80335, Bavaria, Marsstraße 43 0';
    const formatted = formatAddressForHumen(validAddressWithProvince);
    expect(formatted).toEqual(validAddressWithProvinceExpectation);
  });

  test('format valid address with no province', () => {
    const validAddressWithNoProvince: IAddress = {
      countryCode: 'MC',
      city: 'Monaco',
      postalCode: '98000',
      street: 'Square Gastaud',
      streetNumber: '2',
      apartmentNumber: 10,
    };
    const validAddressWithNoProvinceExpectation = 'Monaco, Monaco 98000,Square Gastaud 2 10';
    const formatted = formatAddressForHumen(validAddressWithNoProvince);
    expect(formatted).toEqual(validAddressWithNoProvinceExpectation);
  });

  // in this context invalid means no such
  // country code
  // since compiler won't allow us to pass a wrong type

  test('format invalid address with no province', () => {
    const invalidAddressWithProvince: IAddress = {
      countryCode: 'TTT',
      province: 'Test province',
      city: 'TestCity2',
      postalCode: '11111',
      street: 'Test street2',
      streetNumber: '2',
      apartmentNumber: 0,
    };
    const invalidAddressWithProvinceExpectation = 'TTT, TestCity2 11111, Test province, Test street2 2 0';
    const formatted = formatAddressForHumen(invalidAddressWithProvince);
    expect(formatted).toEqual(invalidAddressWithProvinceExpectation);
  });

  test('format invalid address with no province', () => {
    const invalidAddressWithNoProvince: IAddress = {
      countryCode: 'PPP',
      city: 'TestCity1',
      postalCode: '00000',
      street: 'Test street1',
      streetNumber: '1',
      apartmentNumber: 0,
    };
    const invalidAddressWithNoProvinceExpectation = 'PPP, TestCity1 00000,Test street1 1 0';
    const formatted = formatAddressForHumen(invalidAddressWithNoProvince);
    expect(formatted).toEqual(invalidAddressWithNoProvinceExpectation);
  });
});
