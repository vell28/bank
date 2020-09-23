import { pathOr, propOr } from 'ramda';
import { createSelector } from 'reselect';

import { IStore } from 'modules/store/types';
import { getClient } from 'models/organizations/redux/selectors';
import {
  IAddress, ICardOrder, IOrderRequestBody, CardFormatType, CardFormat, ICardOrderOwner
} from '../../entities';

import { ICardOrderState } from '../reducers';
import { CardProductType, CardProduct } from '../../../card-settings/entities';
import { IClient } from '../../../../organizations';

const emptyOwner = Object.freeze({
  embossedName: '',
  phoneNumber: '',
});

const emptyAddress = Object.freeze({
  postalCode: '',
  countryCode: '',
  province: undefined,
  city: '',
  street: '',
  streetNumber: '',
  apartmentNumber: -1,
});

const defaultType: CardProductType = CardProduct.MAIN;
const defaultFormat: CardFormatType = CardFormat.PLASTIC;
const isExpressDeliveryDefault = true;

export const getOrderState = (state: IStore): ICardOrderState => state.operations.cardOrder;

export const getOrder = createSelector([getOrderState], (state: ICardOrderState): ICardOrder => state.data.order);

export const selectOrderCardProductType = createSelector(
  [getOrder],
  (order: ICardOrder): CardProductType => propOr(defaultType, 'cardProductType')(order),
);

export const selectCardOwner = createSelector(
  [getOrder],
  (order: ICardOrder): ICardOrderOwner => propOr(emptyOwner, 'cardOwner')(order),
);

export const selectCardOwnerAddress = createSelector(
  [getOrder],
  (order: ICardOrder): IAddress => propOr(emptyAddress, 'deliveryAddress')(order),
);

export const isOrderLoading = createSelector([getOrderState], (state: ICardOrderState): boolean => state.isLoading);

// This should return client's address
// in order to fill delivery address in newCard form
export const selectClientAddress = createSelector(
  [getClient],
  (res: IClient): IAddress => propOr(emptyAddress, 'address')(res),
);

export const selectClientInfo = createSelector([getClient], (res: IClient) => {
  const embossedName: string = propOr('', 'name')(res);
  const phoneNumber: string = propOr('', 'phoneNumber')(res);
  return {
    embossedName,
    phoneNumber,
  };
});

export const selectOrderCardBody = createSelector<IStore, ICardOrder, IOrderRequestBody>(
  [getOrder],
  (selectedValue: ICardOrder) => {
    return {
      type: pathOr(defaultType, ['cardProductType'])(selectedValue),
      format: defaultFormat,
      cardHolderName: pathOr(defaultType, ['cardProductType'])(selectedValue),
      cardHolderPhoneNumber: pathOr(defaultType, ['cardOwner', 'phoneNumber'])(selectedValue),
      deliveryAddress: pathOr(emptyAddress, ['deliveryAddress'])(selectedValue),
      isExpressDelivery: isExpressDeliveryDefault,
    };
  },
);
