import React from 'react';
import { useTranslation } from 'react-i18next';

import { NextButton } from '../../common/next-button';
import { PageOuter, Center } from '../../page-content';

import {
  LogoBox, Header, ButtonDescription, DescriptionBlock, ContinueContainer
} from './elements';

import logo from './logo.svg';

interface IPageProps {
  continueRegistration: () => void;
  openNewForm: () => void;
}

export const LoginStatus: React.FC<IPageProps> = ({ continueRegistration, openNewForm }) => {
  const { t } = useTranslation();
  return (
    <PageOuter>
      <Center>
        <LogoBox>
          <img src={logo} alt="logo" />
        </LogoBox>
        <Header>{t('Registration')}</Header>
        <DescriptionBlock>{t('For this number we found an unfinished registration')}</DescriptionBlock>
        <ButtonDescription>{t('You can continue the registration')}</ButtonDescription>
        <ContinueContainer>
          <NextButton onClick={continueRegistration} arrow>
            {t('Continue registration')}
          </NextButton>
        </ContinueContainer>
        <ButtonDescription>{t('Or fill a new form')}</ButtonDescription>
        <NextButton onClick={openNewForm} arrow>
          {t('Fill new form')}
        </NextButton>
      </Center>
    </PageOuter>
  );
};
