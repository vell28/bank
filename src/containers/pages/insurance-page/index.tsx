import React from 'react';

import { useTranslation } from 'react-i18next';

import { MainBorderContainer } from 'components/common/app-wrapper/elements';
import {
  Title, Column, Columns, Link, More
} from './elements';

export const InsurancePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <MainBorderContainer>
      <Title>{t('Online Insurance')}</Title>
      <Columns>
        <Column>
          <Link>{t('life')}</Link>
          <Link>{t('car')}</Link>
          <Link>{t('medical & dental')}</Link>
        </Column>
        <Column>
          <Link>{t('home')}</Link>
          <Link>{t('travel')}</Link>
          <Link>{t('personal accident')}</Link>
        </Column>
      </Columns>
      <More href="/">{t('how it works')}</More>
    </MainBorderContainer>
  );
};
