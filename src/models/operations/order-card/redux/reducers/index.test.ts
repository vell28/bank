import { emptyStore } from 'modules/store/emptyStore';
import { IStore, IAction } from 'modules/store/types';
import {
  SET_CARD_PRODUCT_TYPE,
  SET_CARD_OWNER,
  SET_CARD_DELIVERY_ADDRESS,
  setCardProductType,
  setCardOwnner,
  setDeliveryAddress,
} from '../actions';
import { INIT_ORDER_NEW, CONFIRM_ORDER_NEW } from '../actions/newOrder';
import { CardProduct } from '../../../card-settings/entities';
import { cardOrder, cardOrderInitialState, ICardOrderState } from '.';
import {
  selectOrderCardProductType, selectCardOwner, selectCardOwnerAddress, isOrderLoading
} from '../selectors';
import { exampleAddress } from '../../mock';

export const mixState = (cardOrderState: ICardOrderState): IStore => ({
  ...emptyStore,
  operations: {
    ...emptyStore.operations,
    cardOrder: cardOrderState,
  },
});

export enum AsyncActionPhase {
  SUCCESS = 'SUCCESS',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
}

export const pretendToBeAsyncAction = (
  asyncActionType: string,
  phase: AsyncActionPhase,
  payload?: any,
): IAction<any> => ({
  type: `${asyncActionType}_${phase}`,
  payload,
});

const emptyAddress = {
  apartmentNumber: -1,
  city: '',
  countryCode: '',
  postalCode: '',
  province: undefined,
  street: '',
  streetNumber: '',
};

const emptyClientInfo = {
  embossedName: '',
  phoneNumber: '',
};

describe('order-card reducer', () => {
  test(`test ${SET_CARD_PRODUCT_TYPE}`, () => {
    const actionAdditional = setCardProductType(CardProduct.ADDITIONAL);
    const actionUndefined = setCardProductType(undefined);

    // const stateNull = mixState(cardOrder(cardOrderInitialState, actionNull));
    // const productTypeNull = selectOrderCardProductType(stateNull);
    // expect(productTypeNull).toEqual(CardProduct.MAIN);

    const stateUndefined = mixState(cardOrder(cardOrderInitialState, actionUndefined));
    const productTypeUndefined = selectOrderCardProductType(stateUndefined);
    expect(productTypeUndefined).toEqual(CardProduct.MAIN);

    const orderState = cardOrder(cardOrderInitialState, actionAdditional);
    // const rightAction = actionAdditional.type === SET_CARD_PRODUCT_TYPE;
    const stateAdditional = mixState(orderState);
    const productTypeAdditional = selectOrderCardProductType(stateAdditional);
    expect(productTypeAdditional).toEqual(CardProduct.ADDITIONAL);
  });
  test(`test ${SET_CARD_OWNER}`, () => {
    const actionUndefined = setCardOwnner(undefined);
    // const actionExampleClient = setCardOwnner(exampleClientInfo);

    const stateUndefined = mixState(cardOrder(cardOrderInitialState, actionUndefined));
    const clientUndefined = selectCardOwner(stateUndefined);
    expect(clientUndefined).toEqual(emptyClientInfo);

    // const stateExampleClient = mixState(cardOrder(cardOrderInitialState, actionExampleClient));
    // const clientExampleClient = selectCardOwner(stateExampleClient);
    // expect(clientExampleClient).toEqual(exampleClientInfo);
  });
  test(`test ${SET_CARD_DELIVERY_ADDRESS}`, () => {
    const actionUndefined = setDeliveryAddress(undefined);
    const actionExampleAddress = setDeliveryAddress(exampleAddress);

    const stateUndefined = mixState(cardOrder(cardOrderInitialState, actionUndefined));
    const addressUndefined = selectCardOwnerAddress(stateUndefined);
    expect(addressUndefined).toEqual(emptyAddress);

    const stateExample = mixState(cardOrder(cardOrderInitialState, actionExampleAddress));
    const selectedExampleAddress = selectCardOwnerAddress(stateExample);
    expect(selectedExampleAddress).toEqual(exampleAddress); // debug this
  });
  test(`test ${INIT_ORDER_NEW}`, () => {
    // const actionLoading = pretendToBeAsyncAction(INIT_ORDER_NEW, AsyncActionPhase.LOADING);
    const actionSuccess = pretendToBeAsyncAction(INIT_ORDER_NEW, AsyncActionPhase.SUCCESS);
    // const actionError = pretendToBeAsyncAction(INIT_ORDER_NEW, AsyncActionPhase.ERROR);

    // const stateLoading = mixState(cardOrder(cardOrderInitialState, actionLoading));
    // const isLoadingLoading = isOrderLoading(stateLoading);
    // expect(isLoadingLoading).toEqual(true); // debug this

    const stateSuccess = mixState(cardOrder(cardOrderInitialState, actionSuccess));
    const isLoadingSuccess = isOrderLoading(stateSuccess);
    expect(isLoadingSuccess).toEqual(false);
    // expect(stateSuccess.operations.cardOrder.isSuccess).toEqual(false); // debug this
    expect(stateSuccess.operations.cardOrder.isError).toEqual(false);

    /* const stateError = mixState(cardOrder(cardOrderInitialState, actionError));
    const isLoadingError = isOrderLoading(stateError);
    expect(isLoadingError).toEqual(false);
    expect(stateError.operations.cardOrder.isSuccess).toEqual(false); */
    // expect(stateError.operations.cardOrder.isError).toEqual(true);
  });
  test(`test ${CONFIRM_ORDER_NEW}`, () => {
    const actionLoading = pretendToBeAsyncAction(CONFIRM_ORDER_NEW, AsyncActionPhase.LOADING);
    const actionSuccess = pretendToBeAsyncAction(CONFIRM_ORDER_NEW, AsyncActionPhase.SUCCESS);
    const actionError = pretendToBeAsyncAction(CONFIRM_ORDER_NEW, AsyncActionPhase.ERROR);

    const stateLoading = mixState(cardOrder(cardOrderInitialState, actionLoading));
    const isLoadingLoading = isOrderLoading(stateLoading);
    expect(isLoadingLoading).toEqual(false); // debug this carefully

    const stateSuccess = mixState(cardOrder(cardOrderInitialState, actionSuccess));
    const isLoadingSuccess = isOrderLoading(stateSuccess);
    expect(isLoadingSuccess).toEqual(false);
    expect(stateSuccess.operations.cardOrder.isSuccess).toEqual(false); // debug this
    expect(stateSuccess.operations.cardOrder.isError).toEqual(false);

    const stateError = mixState(cardOrder(cardOrderInitialState, actionError));
    const isLoadingError = isOrderLoading(stateError);
    expect(isLoadingError).toEqual(false);
    expect(stateError.operations.cardOrder.isSuccess).toEqual(false);
    expect(stateError.operations.cardOrder.isError).toEqual(false); // debug this
  });
});
