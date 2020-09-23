import { IStore } from 'modules/store/types';
import { emptyStore } from 'modules/store/emptyStore';
import { IOrganization } from 'models/organizations/entities';
import { accountsData, cardData } from 'models/organizations/mock';
import { ICardOrder } from '../../entities';
import { ICardOrderState, ICardOrderData } from '../reducers';
import {
  getOrderState,
  getOrder,
  selectOrderCardProductType,
  selectCardOwner,
  selectCardOwnerAddress,
  isOrderLoading,
  selectClientAddress,
  selectClientInfo,
  selectOrderCardBody,
} from '.';
import { exampleAddress, exampleClientInfo, exampleClient } from '../../mock';
import { CardProduct } from '../../../card-settings/entities';

const cardOrder: ICardOrder = {
  cardProductType: CardProduct.MAIN,
  deliveryAddress: exampleAddress,
  cardOwner: exampleClientInfo,
};

const data: ICardOrderData = {
  order: cardOrder,
};

const cardOrderState: ICardOrderState = {
  isLoading: true,
  isSuccess: false,
  isError: false,
  data,
  errors: [],
};

const mockClientOrganization: IOrganization = {
  clientName: 'Ralf Williams',
  id: 1,
  name: 'papaya',
  tin: 'PAPYMTMTXXX',
  title: 'Papaya Ltd',
  accounts: accountsData,
  cards: [cardData],
  client: exampleClient,
};

const mockState: IStore = {
  ...emptyStore,
  operations: {
    ...emptyStore.operations,
    cardOrder: cardOrderState,
  },
  organizations: {
    ...emptyStore.organizations,
    data: [mockClientOrganization],
  },
};

const exampleRequestBody = {
  cardHolderName: 'MAIN',
  cardHolderPhoneNumber: '9111111',
  deliveryAddress: {
    apartmentNumber: 0,
    city: 'Cologne',
    countryCode: 'DE',
    postalCode: '50667',
    street: 'Domkloster',
    streetNumber: '4',
  },
  format: 'PLASTIC',
  isExpressDelivery: true,
  type: 'MAIN',
};

describe('order new card selector tests', () => {
  test('getOrderState returns order state', () => {
    const selectedOrderState = getOrderState(mockState);
    expect(selectedOrderState).toEqual(cardOrderState);
  });

  test('get order returns card order', () => {
    const selectedOrder = getOrder(mockState);
    expect(selectedOrder).toEqual(cardOrder);
  });

  test('get productType returns productType', () => {
    const selectedCardProductType = selectOrderCardProductType(mockState);
    expect(selectedCardProductType).toEqual(cardOrder.cardProductType);
  });

  test('get owner returns order owner', () => {
    const selectedCardOwner = selectCardOwner(mockState);
    expect(selectedCardOwner).toEqual(cardOrder.cardOwner);
  });

  test('get owner address returns card delivery address', () => {
    const selectedCardOwnerAddress = selectCardOwnerAddress(mockState);
    expect(selectedCardOwnerAddress).toEqual(cardOrder.deliveryAddress);
  });

  test('isOrderLoading returns isLoading', () => {
    const selectedIsOrderLoading = isOrderLoading(mockState);
    expect(selectedIsOrderLoading).toEqual(true);
  });

  test('selected client address from organizations is compatible with order address', () => {
    const selectedClientAddress = selectClientAddress(mockState);
    expect(selectedClientAddress).toEqual(exampleAddress);
  });

  test('get client info returns client info', () => {
    const selectedClientInfo = selectClientInfo(mockState);
    expect(selectedClientInfo).toEqual(exampleClientInfo);
  });

  test('get order body selects request body from app state', () => {
    const selectedOrderCardBody = selectOrderCardBody(mockState);
    expect(selectedOrderCardBody).toEqual(exampleRequestBody);
  });
});
