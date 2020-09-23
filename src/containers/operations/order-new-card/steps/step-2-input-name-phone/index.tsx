import React from 'react';
import { connect } from 'react-redux';

import { nextStep } from 'models/main-modal/redux/actions';
import { LargeBox } from 'components/operations/steps/elements';
import { IStore } from 'modules/store/types';
import CardOwnerInfoForm, { ICardOwnerFormProps } from '../../../../../components/redux-form/card-owner-info';
import {
  ICardOrderOwner,
  setCardOwnner,
  selectOrderCardProductType,
} from '../../../../../models/operations/order-card';

interface IOrderNewStep2Props extends ICardOwnerFormProps {
  onNext: (data: ICardOrderOwner) => void;
}

export const OrderNewStep2: React.FC<IOrderNewStep2Props> = ({ onNext, productType }) => (
  <LargeBox>
    <CardOwnerInfoForm onSubmit={onNext} productType={productType} />
  </LargeBox>
);

export const mapStateToProps = (state: IStore): ICardOwnerFormProps => {
  const productType = selectOrderCardProductType(state);
  return {
    productType,
  };
};

export const mapDispatchToProps = (dispatch: any) => ({
  onNext: (data: ICardOrderOwner) => {
    dispatch(setCardOwnner(data));
    dispatch(nextStep);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderNewStep2);
