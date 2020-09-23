import React from 'react';

import { useTranslation } from 'react-i18next';
import {
  Title, Link, PageSection, LinkContainer, PageButton
} from './elements';
import { IBusinessPageProps } from './types';
import { AppWrapper } from '../../common/app-wrapper';

export const BusinessPage: React.FC<IBusinessPageProps> = ({
  onOpenCompanyClick,
  onBusinessAccountClick,
  onAccountingClick,
  onBusinessSoftwareClick,
  onInsuranceClick,
  onPersonalAssistingClick,
  onHowItWorksClick,
}) => {
  const { t } = useTranslation();
  return (
    <AppWrapper>
      <Title>{t('All For Business')}</Title>
      <PageSection>
        <PageButton onClick={onOpenCompanyClick}>{t('open company')}</PageButton>
        <PageButton onClick={onBusinessAccountClick}>{t('business account')}</PageButton>
      </PageSection>

      <PageSection>
        <PageButton onClick={onAccountingClick}>{t('accounting')}</PageButton>
        <PageButton onClick={onBusinessSoftwareClick}>{t('business software')}</PageButton>
      </PageSection>
      <PageSection>
        <PageButton onClick={onInsuranceClick}>{t('insurance')}</PageButton>
        <PageButton onClick={onPersonalAssistingClick}>{t('personal assisting')}</PageButton>
      </PageSection>
      <LinkContainer>
        <Link onCick={onHowItWorksClick}>{t('how it works')}</Link>
      </LinkContainer>
    </AppWrapper>
  );
};
