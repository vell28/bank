import React from 'react';
import { connect } from 'react-redux';

import { Step, Steps } from 'components/common/steps';
import { getStepMainModal } from 'models/main-modal';
import SuccessStep from 'components/operations/steps/step-4-success';

import { IStore } from 'modules/store/types';
import TransferStep1 from './steps/step-1-select-amount';

export const TRANSFER_EXCHANGE_MODAL = 'TRANSFER_EXCHANGE_MODAL';
export type TransferExchangeModalType = 'TRANSFER_EXCHANGE_MODAL';

interface ITransferExchangeProps {
  step: number;
}

export const TransferToExchange: React.FC<ITransferExchangeProps> = ({
  step,
}) => {
  return (
    <Steps stepId={step}>
      <Step id={0}>
        <TransferStep1 />
      </Step>
      <Step id={1}>
        <SuccessStep title="Transfer / Exchange" successText="Successful Transfer!" />
      </Step>
    </Steps>
  );
};

export const mapStateToProps = (store: IStore) => {
  return {
    step: getStepMainModal(store),
  };
};

export default connect(mapStateToProps)(TransferToExchange);
