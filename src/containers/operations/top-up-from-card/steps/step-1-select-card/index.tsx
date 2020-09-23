import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Box, Title } from 'components/operations/steps/elements';
import { nextStep } from 'models/main-modal/redux/actions';
import { updateTopUpCardData } from 'models/operations/top-up/redux/actions/card';

import { getTopUpCardFormValueFromState } from 'models/redux-forms/topUpCard/selectors';
import { ICardData } from 'models/operations/top-up/entities';
import { IStore } from 'modules/store/types';
import TopUpCardForm from '../../../../../components/redux-form/top-up-card-form';

interface ITopUpStep1Props {
  onNext: (data: ICardData) => void;
  isHolder: boolean;
  initialValues: object;
}

export const TopUpStep1: React.FC<ITopUpStep1Props> = ({ onNext, ...rest }) => {
  const { t } = useTranslation();
  return (
    <Box>
      <Title>{t('Top Up / Card')}</Title>
      <TopUpCardForm title={t('From card')} onSubmit={onNext} {...rest} />
    </Box>
  );
};

export const mapStateToProps = (store: IStore) => {
  return {
    isHolder: getTopUpCardFormValueFromState(store, 'isHolder'),
    initialValues: {
      isHolder: true,
    },
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onNext: (data: ICardData) => {
    dispatch(updateTopUpCardData(data));
    dispatch(nextStep);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TopUpStep1);
