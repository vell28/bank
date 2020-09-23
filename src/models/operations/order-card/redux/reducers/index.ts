import typeToReducer from 'type-to-reducer';
import { IBaseThunkState } from 'modules/store/types';
import { ICardOrder } from '../../entities';
import {
  SET_CARD_PRODUCT_TYPE,
  SET_CARD_OWNER,
  SET_CARD_DELIVERY_ADDRESS,
  ISetDeliveryAddressAction,
  ISetOwnerAction,
  ISetProductTypeAction,
} from '../actions/index';
import { INIT_ORDER_NEW, CONFIRM_ORDER_NEW } from '../actions/newOrder';

export interface ICardOrderData {
  order: ICardOrder;
}

export type ICardOrderState = IBaseThunkState<ICardOrderData>;

export const cardOrderInitialState: ICardOrderState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: {
    order: {
      cardOwner: undefined,
      cardProductType: undefined,
      deliveryAddress: undefined,
    },
  },
  errors: [],
};

export const cardOrder = typeToReducer<ICardOrderState>(
  {
    [SET_CARD_PRODUCT_TYPE]: (state: ICardOrderState, action: ISetProductTypeAction) => {
      return {
        ...state,
        data: {
          ...state.data,
          order: {
            ...state.data.order,
            cardProductType: action.payload,
          },
        },
      };
    },
    [SET_CARD_OWNER]: (state: ICardOrderState, action: ISetOwnerAction) => {
      return {
        ...state,
        data: {
          ...state.data,
          order: {
            ...state.data.order,
            cardOwner: action.payload,
          },
        },
      };
    },
    [SET_CARD_DELIVERY_ADDRESS]: (state: ICardOrderState, action: ISetDeliveryAddressAction) => {
      return {
        ...state,
        data: {
          ...state.data,
          order: {
            ...state.data.order,
            deliveryAddress: action.payload,
          },
        },
      };
    },
    [INIT_ORDER_NEW]: {
      SUCCESS: (state: ICardOrderState): ICardOrderState => {
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          isError: false,
          errors: [],
        };
      },
      LOADING: (state: ICardOrderState): ICardOrderState => {
        return {
          ...state,
          isLoading: true,
        };
      },
      ERROR: (state: ICardOrderState, action): ICardOrderState => {
        return {
          ...state,
          isLoading: false,
          isSuccess: false,
          isError: true,
          errors: action.payload.errors,
        };
      },
      [CONFIRM_ORDER_NEW]: {
        SUCCESS: (state: ICardOrderState): ICardOrderState => {
          return {
            ...state,
            isLoading: false,
            isSuccess: true,
            isError: false,
            errors: [],
          };
        },
        LOADING: (state: ICardOrderState): ICardOrderState => {
          return {
            ...state,
            isLoading: true,
          };
        },
        ERROR: (state: ICardOrderState, action): ICardOrderState => {
          return {
            ...state,
            isLoading: false,
            isSuccess: false,
            isError: true,
            errors: action.payload.errors,
          };
        },
      },
    },
  },
  cardOrderInitialState,
);
