export interface IDeliveryAddressFormData {
  countryCode: string | null;
  street: string;
  houseNumber: string;
  apartmentNumber: string;
  city: string;
  province: string;
  postalCode: string;
  isExpressDelivery: boolean;
}

export interface IPersonalAddressFormData {
  countryCode: string | null;
  street: string;
  houseNumber: string;
  apartmentNumber: string;
  city: string;
  province: string;
  postalCode: string;
  isResidence: boolean;
  deliveryAddress: IDeliveryAddressFormData;
}

export interface IAddressData {
  street: string;
  houseNumber: string;
  city: string;
  postalCode: string;
}

export interface IPersonalAddressData {
  street: string;
  houseNumber: string;
  city: string;
  postalCode: string;
  deliveryAddress: IAddressData;
}
