import React from 'react';

import { useTranslation } from 'react-i18next';

export const HomePage: React.FC = () => {
  const { t } = useTranslation();
  return <h1>{t('Banking Page')}</h1>;
};
