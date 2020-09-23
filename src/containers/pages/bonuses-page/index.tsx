import React from 'react';

import { useTranslation } from 'react-i18next';
import { Title } from './elements';

export const BonusesPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Title>
      {t('Bonuses Page')}
    </Title>
  );
};
