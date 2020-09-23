import { IPersonalAddressData, IAddressData } from '../../../../models/pages/physical/personal-address/entities';

export const getAddress = (addressDeliver: IPersonalAddressData | IAddressData) => {
  const {
    street, houseNumber, city, postalCode
  } = addressDeliver;
  const newStreet = street || houseNumber ? `${street} ${houseNumber}, ` : '';
  const newCity = city ? `${city}, ` : '';

  return {
    address: newStreet || newCity || postalCode ? `${newStreet}${newCity}${postalCode}` : '',
    isFullAddress: street && houseNumber && city && postalCode,
  };
};
