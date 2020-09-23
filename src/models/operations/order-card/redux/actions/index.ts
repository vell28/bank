import { IAction, getStateType } from 'modules/store/types';
import { ICardOrderOwner, IAddress } from '../../entities';
import { CardProductType } from '../../../card-settings/entities';
import { ThunkAction } from './newOrder';
import { selectClientInfo, selectClientAddress } from '../selectors';

export const SET_CARD_PRODUCT_TYPE = 'orderNew/PRODUCT_TYPE';
export const SET_CARD_OWNER = 'orderNew/CARD_OWNER';
export const SET_CARD_DELIVERY_ADDRESS = 'orderNew/DELIVERY_ADDRESS';

export type ISetProductTypeAction = IAction<CardProductType | undefined>;

export const setCardProductType = (type?: CardProductType): ISetProductTypeAction => ({
  type: SET_CARD_PRODUCT_TYPE,
  payload: type,
});

export type ISetOwnerAction = IAction<ICardOrderOwner | undefined>;

export const setCardOwnner = (owner: ICardOrderOwner | undefined): ISetOwnerAction => ({
  type: SET_CARD_OWNER,
  payload: owner,
});

export type ISetDeliveryAddressAction = IAction<IAddress | undefined>;

export const setDeliveryAddress = (address?: IAddress): ISetDeliveryAddressAction => ({
  type: SET_CARD_DELIVERY_ADDRESS,
  payload: address,
});

export const orderCardSetDefaults: ThunkAction = (dispatch: any, getState: getStateType) => {
  const applicationState = getState();
  const ownerInfoByDefault = selectClientInfo(applicationState);
  const ownerAddressByDefault = selectClientAddress(applicationState);
  dispatch(setCardOwnner(ownerInfoByDefault));
  dispatch(setDeliveryAddress(ownerAddressByDefault));
};

export const orderCardCleanupState: ThunkAction = (dispatch: any) => {
  dispatch(setCardOwnner(undefined));
  dispatch(setDeliveryAddress(undefined));
};
