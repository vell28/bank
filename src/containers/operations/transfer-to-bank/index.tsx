import React from 'react';
import { connect } from 'react-redux';

import { Step, Steps } from 'components/common/steps';
import { IStore } from 'modules/store/types';
import { getStepMainModal } from '../../../models/main-modal';
import TransferStep1 from './steps/step-1-select-bank-detail';
import TransferStep2 from './steps/step-2-select-amount';
import TransferStep3 from './steps/step-3-sms-code';
import SuccessStep from '../../../components/operations/steps/step-4-success';

export const TRANSFER_BANK_MODAL = 'TRANSFER_BANK_MODAL';
export type TransferBankModalType = 'TRANSFER_BANK_MODAL';

interface ITransferBankProps {
  step: number;
}

export const TransferToBank: React.FC<ITransferBankProps> = ({ step }) => {
  return (
    <Steps stepId={step}>
      <Step id={0}>
        <TransferStep1 />
      </Step>
      <Step id={1}>
        <TransferStep2 title="Transfer / Bank" />
      </Step>
      <Step id={2}>
        <TransferStep3 title="Transfer / Bank" />
      </Step>
      <Step id={3}>
        <SuccessStep title="Transfer / Bank" successText="Successful Transfer!" />
      </Step>
    </Steps>
  );
};

export const mapStateToProps = (store: IStore) => {
  return {
    step: getStepMainModal(store),
  };
};

export default connect(mapStateToProps)(TransferToBank);
