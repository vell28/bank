import React from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from './elements';

interface IProps {
  title: string;
  onClick?: () => void;
}

const OvalBtn: React.FC<IProps> = ({ title, onClick }) => {
  const { t } = useTranslation();

  return <Container onClick={onClick}>{t(title)}</Container>;
};

export default React.memo(OvalBtn);
