import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Box, Title } from 'components/operations/steps/elements';
import { nextStep } from 'models/main-modal/redux/actions';

import { ICardData } from 'models/operations/transfer/entities';

import { updateTransferCardData } from 'models/operations/transfer/redux/actions/card';
import TransferCardForm from '../../../../../components/redux-form/transfer-card-form';

interface ITransferStep1Props {
  onNext: (data: ICardData) => void;
}

export const TransferStep1: React.FC<ITransferStep1Props> = ({ onNext }) => {
  const { t } = useTranslation();
  return (
    <Box>
      <Title>{t('Transfer / Card')}</Title>
      <TransferCardForm title={t('To card')} onSubmit={onNext} />
    </Box>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onNext: (data: ICardData) => {
    dispatch(updateTransferCardData(data));
    dispatch(nextStep);
  },
});

export default connect(null, mapDispatchToProps)(TransferStep1);
