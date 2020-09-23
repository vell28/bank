import React from 'react';
import { connect } from 'react-redux';

import { Step, Steps } from 'components/common/steps';
import { IStore } from 'modules/store/types';
import { getStepMainModal } from '../../../models/main-modal';
import TopUpStep1 from './steps/step-1-select-amount';
import TopUpStep2 from './steps/step-2-select-email';
import TopUpSuccess from '../../../components/operations/steps/step-4-success';

export const TOP_UP_REQUEST_MODAL = 'TOP_UP_REQUEST_MODAL';
export type TopUpRequestModalType = 'TOP_UP_REQUEST_MODAL';

interface ITopUpRequestProps {
  step: number;
}

export const TopUpRequest: React.FC<ITopUpRequestProps> = ({ step }) => {
  return (
    <Steps stepId={step}>
      <Step id={0}>
        <TopUpStep1 />
      </Step>
      <Step id={1}>
        <TopUpStep2 />
      </Step>
      <Step id={2}>
        <TopUpSuccess title="Top Up / Request" successText="Successful Request" />
      </Step>
    </Steps>
  );
};

export const mapStateToProps = (store: IStore) => {
  return {
    step: getStepMainModal(store),
  };
};

export default connect(mapStateToProps)(TopUpRequest);
