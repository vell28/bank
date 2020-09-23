import React, { useState } from 'react';
import { connect } from 'react-redux';

import { BigRoundBtn } from 'components/common/button/big-round/elements';
import { doNothing } from 'modules/registration/utils/doNothing';
import { useTranslation } from 'react-i18next';

import { PopupNotification } from '@components/popup/popup-notification';
import { ITopUpCasheProps, ITopUpCasheDispatchProps } from './types';

export const TOP_UP_CASHE_MODAL = 'TOP_UP_CASHE_MODAL';
export type TopUpCasheModalType = 'TOP_UP_CASHE_MODAL';

export const TopUpCash: React.FC<ITopUpCasheProps> = () => {
  const { t } = useTranslation();

  const divStyle = {
    width: '100%',
  };

  const [isShown, setIsShown] = useState<boolean>(false);
  const NOTIFICATION_TIME_OUT = 1000;

  const showNotification = () => {
    setIsShown(true);
    setTimeout(() => {
      setIsShown(false);
    }, NOTIFICATION_TIME_OUT);
  };

  return (
    <div style={divStyle}>
      <BigRoundBtn onClick={showNotification}>{t('Contact a Manager')}</BigRoundBtn>
      <PopupNotification isShown={isShown} title="Feature in development" />
    </div>
  );
};

const mapDispatchToProps = (): ITopUpCasheDispatchProps => ({
  onContactManager: () => doNothing(),
});

export default connect(undefined, mapDispatchToProps)(TopUpCash);
