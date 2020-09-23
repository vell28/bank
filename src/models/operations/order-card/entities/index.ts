import { CardProductType, ICardOwner } from '../../card-settings/entities/index';

export interface ICardOrderOwner extends ICardOwner {
  phoneNumber: string;
}

export interface IAddress {
  apartmentNumber: number;
  city: string;
  countryCode: string;
  postalCode: string;
  province?: string;
  street: string;
  streetNumber: string;
}

export interface ICardOrder {
  cardProductType?: CardProductType;
  cardOwner?: ICardOrderOwner;
  deliveryAddress?: IAddress;
}

export enum CardFormat {
  VIRTUAL = 'VIRTUAL',
  PLASTIC = 'PLASTIC',
}

export type CardFormatType = CardFormat.VIRTUAL | CardFormat.PLASTIC;

export interface IOrderRequestBody {
  type: CardProductType;
  format: CardFormatType;
  cardHolderName: string;
  cardHolderPhoneNumber: string;
  isExpressDelivery: boolean;
  deliveryAddress: IAddress;
}
