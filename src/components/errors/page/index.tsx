import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  PageErrorBox, ImgBox, Title, SubTitle, OkBtn, SupportLink, WaitClock
} from './elements';
import keyImg from '../../common/images/icon-keyhole.svg';

interface IPageErrorProps {
  title?: string;
  subtitle?: string;
  onOk?: () => void;
  btnText?: string;
  supportUrl?: string;
}

export const PageError: React.FC<IPageErrorProps> = ({
  title = '',
  subtitle = '',
  onOk,
  btnText = '',
  supportUrl = '',
}) => {
  const { t } = useTranslation();
  return (
    <PageErrorBox>
      <ImgBox>
        <img src={keyImg} alt="key-hole" />
      </ImgBox>
      <div>
        <Title>{t(title)}</Title>
        {subtitle && <SubTitle>{t(subtitle)}</SubTitle>}
      </div>
      {onOk ? <OkBtn onClick={onOk}>{t(btnText)}</OkBtn> : <WaitClock />}
      {supportUrl && (
        <SupportLink href={supportUrl} target="_blank">
          {t('Support')}
        </SupportLink>
      )}
    </PageErrorBox>
  );
};
