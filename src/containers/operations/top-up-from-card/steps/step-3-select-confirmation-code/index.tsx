import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { IStore } from 'modules/store/types';

import { LargeBox, Title } from 'components/operations/steps/elements';
import { nextStep } from 'models/main-modal/redux/actions';
import { TopUpConfirmation } from 'components/operations/confirmation';
import { getRedirectUrl } from '../../../../../models/operations/top-up';

interface ITopUpStepConfirmationProps {
  onNext: () => void;
  redirectUrl: string;
}

export const TopUpStepConfirmation: React.FC<ITopUpStepConfirmationProps> = ({ onNext, redirectUrl }) => {
  const { t } = useTranslation();
  return (
    <LargeBox>
      <Title>{t('Top Up / Card')}</Title>
      <TopUpConfirmation url={redirectUrl} onSuccess={onNext} />
    </LargeBox>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  onNext: () => {
    dispatch(nextStep);
  },
});

export const mapStateToProps = (store: IStore) => ({
  redirectUrl: getRedirectUrl(store),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopUpStepConfirmation));
