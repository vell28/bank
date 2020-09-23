import React from 'react';
import { connect } from 'react-redux';

import { nextStep } from 'models/main-modal/redux/actions';
import { LargeBox } from 'components/operations/steps/elements';
import { ICardOrder } from 'models/operations/order-card/entities';
import { setCardProductType } from 'models/operations/order-card/redux/actions';
import { IStore } from 'modules/store/types';
import { CardProduct } from 'models/operations/card-settings/entities';
import { accountHasCardOfType } from '../../../../../models/organizations';
import CardProductTypeForm from '../../../../../components/redux-form/card-product-type-select';

interface IOrderNewStep1StateProps {
  accountHasMainCard: boolean;
}

interface IOrderNewStep1DispatchProps {
  onNext: (data: ICardOrder) => void;
}

interface IOrderNewStep1Props extends IOrderNewStep1StateProps, IOrderNewStep1DispatchProps {}

export const OrderNewStep1: React.FC<IOrderNewStep1Props> = ({ onNext, accountHasMainCard }) => {
  return (
    <LargeBox>
      <CardProductTypeForm onSubmit={onNext} accountHasMainCard={accountHasMainCard} />
    </LargeBox>
  );
};

const mapStateToProps = (state: IStore): IOrderNewStep1StateProps => {
  return {
    accountHasMainCard: accountHasCardOfType(CardProduct.MAIN)(state),
  };
};

const mapDispatchToProps = (dispatch: any): IOrderNewStep1DispatchProps => {
  return {
    onNext: (data: ICardOrder) => {
      const { cardProductType } = data;
      dispatch(setCardProductType(cardProductType));
      dispatch(nextStep);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderNewStep1);
