import React from 'react';
import { useTranslation } from 'react-i18next';
import { Arrow, Button, TitleContainer } from './elements';
import { IButtonProps } from './types';

export const RegistrationButton: React.FC<IButtonProps> = ({ onClick }) => {
  const { t } = useTranslation();
  return (
    <Button onClick={onClick}>
      <Arrow />
      <TitleContainer>{t('Registration')}</TitleContainer>
    </Button>
  );
};
