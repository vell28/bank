import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { nextStep } from 'models/main-modal/redux/actions';
import { IBankData } from 'models/operations/transfer/entities';
import { updateTransferBankData } from 'models/operations/transfer/redux/actions/bank';
import { bankTransferFormSelector, getIsSwiftTransfer } from 'models/redux-forms/bank-transfer/selectors';
import { IStore } from 'modules/store/types';

import { LargeBox, Title } from 'components/operations/steps/elements';
import BankTransferForm from '../../../../../components/redux-form/bank-detail-form';

interface ITransferStep1Props {
  onNext: (bank: IBankData) => void;
}

export const TransferStep1: React.FC<ITransferStep1Props> = ({ onNext, ...props }) => {
  const { t } = useTranslation();
  return (
    <LargeBox>
      <Title>{t('Transfer / Bank')}</Title>
      <BankTransferForm onSubmit={onNext} isLoading={false} {...props} />
    </LargeBox>
  );
};

const mapStateToProps = (state: IStore) => {
  return {
    isSwiftRequisites: getIsSwiftTransfer(state),
    isIntermediaryBank: bankTransferFormSelector(state, 'isIntermediaryBank'),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onNext: (bank: IBankData) => {
    dispatch(updateTransferBankData(bank));
    dispatch(nextStep);
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TransferStep1));
