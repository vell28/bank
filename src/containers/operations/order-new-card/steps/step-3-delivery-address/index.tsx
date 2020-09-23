import React from 'react';
import { connect } from 'react-redux';

import { LargeBox } from 'components/operations/steps/elements';
import { IStore } from 'modules/store/types';
import {
  IDeliveryAddressStateProps,
  IDeliveryAddressDispatchProps,
} from 'components/redux-form/card-delivery-address/types';
import { orderInit } from 'models/operations/order-card/redux/actions/newOrder';
import {
  IAddress,
  setDeliveryAddress,
  selectOrderCardProductType,
  selectClientAddress,
} from '../../../../../models/operations/order-card';
import CardDeliveryAddressForm from '../../../../../components/redux-form/card-delivery-address';

export interface IOrderNewStep3Props extends IDeliveryAddressStateProps, IDeliveryAddressDispatchProps {}

export const OrderNewStep3: React.FC<IOrderNewStep3Props> = ({ onNext, productType, clientAddress }) => (
  <LargeBox>
    <CardDeliveryAddressForm onSubmit={onNext} productType={productType} clientAddress={clientAddress} />
  </LargeBox>
);

export const mapStateToProps = (state: IStore): IDeliveryAddressStateProps => {
  // I know better that it was set on the previos step
  const productType = selectOrderCardProductType(state);

  const clientAddress = selectClientAddress(state);
  return {
    productType,
    clientAddress,
  };
};

export const mapDispatchToProps = (dispatch: any): IDeliveryAddressDispatchProps => {
  return {
    onNext: (data: IAddress) => {
      dispatch(setDeliveryAddress(data));
      dispatch(orderInit);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderNewStep3);
