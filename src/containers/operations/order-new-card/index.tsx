import React from 'react';
import { connect } from 'react-redux';

import { Step, Steps } from 'components/common/steps';
import { IStore } from 'modules/store/types';
import { orderCardSetDefaults, orderCardCleanupState } from 'models/operations/order-card/redux/actions';
import { getStepMainModal } from '../../../models/main-modal';

import OrderNewStep1 from './steps/step-1-chose-card-type';
import OrderNewStep2 from './steps/step-2-input-name-phone';
import OrderNewStep3 from './steps/step-3-delivery-address';
import OrderNewStep4 from './steps/step-4-sms-code';
// success step is just a component
import SuccessStep from '../../../components/operations/steps/step-4-success';

import { IOrderCardProps, IOrderCardStateProps, IOrderCardDispatchProps } from './types';

export const ORDER_CARD_MODAL = 'ORDER_CARD_MODAL';
export type OrderCardModalType = 'ORDER_CARD_MODAL';

export const orderNewSuccessStep = 4; // 0 based

export const OrderNewCard: React.FC<IOrderCardProps> = ({ step, orderCardInit, orderCardCleanup }) => {
  React.useEffect(() => {
    orderCardInit(); // initialization code
    return () => {
      orderCardCleanup(); // cleanup code
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // no dependencies -> Works exactley like componentDidMount

  return (
    <Steps stepId={step}>
      <Step id={0}>
        <OrderNewStep1 />
      </Step>
      <Step id={1}>
        <OrderNewStep2 />
      </Step>
      <Step id={2}>
        <OrderNewStep3 />
      </Step>
      <Step id={3}>
        <OrderNewStep4 />
      </Step>
      <Step id={orderNewSuccessStep}>
        <SuccessStep successText="Your card is successfuly ordered!" />
      </Step>
    </Steps>
  );
};

export const mapStateToProps = (store: IStore): IOrderCardStateProps => ({
  step: getStepMainModal(store),
});

export const mapDispatchToProps = (dispatch: any): IOrderCardDispatchProps => ({
  orderCardInit: () => dispatch(orderCardSetDefaults),
  orderCardCleanup: () => dispatch(orderCardCleanupState),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderNewCard);
