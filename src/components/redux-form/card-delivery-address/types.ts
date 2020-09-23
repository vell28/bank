import { CardProductType } from 'models/operations/card-settings/entities';
import { IAddress } from '../../../models/operations/order-card';

export interface IDeliveryAddress extends IAddress {
  changeDeliveryAddress: boolean;
}

export interface IDeliveryAddressStateProps {
  productType: CardProductType;
  clientAddress: IAddress;
}

export interface IDeliveryAddressDispatchProps {
  onNext: (data: IAddress) => void;
}
