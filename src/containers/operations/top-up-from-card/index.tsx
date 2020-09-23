import React from 'react';
import { connect } from 'react-redux';

import { Step, Steps } from 'components/common/steps';
import { IStore } from 'modules/store/types';
import { getStepMainModal } from '../../../models/main-modal';
import TopUpStep1 from './steps/step-1-select-card';
import TopUpStep2 from './steps/step-2-select-amount';
import TopUpStep3 from './steps/step-3-select-confirmation-code';
import TopUpStep4 from '../../../components/operations/steps/step-4-success';

export const TOP_UP_FROM_CARD_MODAL = 'TOP_UP_FROM_CARD_MODAL';
export type TopUpFromCardModalType = 'TOP_UP_FROM_CARD_MODAL';

interface ITopUpFromCardProps {
  step: number;
}

export const TopUpFromCard: React.FC<ITopUpFromCardProps> = ({ step }) => {
  return (
    <Steps stepId={step}>
      <Step id={0}>
        <TopUpStep1 />
      </Step>
      <Step id={1}>
        <TopUpStep2 />
      </Step>
      <Step id={2}>
        <TopUpStep3 />
      </Step>
      <Step id={3}>
        <TopUpStep4 title="Top Up / Card" successText="Successful Top Up!" />
      </Step>
    </Steps>
  );
};

export const mapStateToProps = (store: IStore) => {
  return {
    step: getStepMainModal(store),
  };
};

export default connect(mapStateToProps)(TopUpFromCard);
