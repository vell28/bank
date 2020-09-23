import React from 'react';

import { useTranslation } from 'react-i18next';

export const InvestmentsPage: React.FC = () => {
  const { t } = useTranslation();
  return <h1>{t('Investments Page')}</h1>;
};
