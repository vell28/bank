import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  PageContainer,
  PageContent,
  PageTitle,
  PageText,
  PageDescription,
  PageLoader,
  LoaderContainer,
} from '../../../status-box';

import './animation.css';

export const UploadingPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <PageContent>
        <PageTitle>AK</PageTitle>
        <PageText>{t('Uploading your request…')}</PageText>
        <PageDescription>{t('Your request will be processed as soon as possible')}</PageDescription>
        <LoaderContainer>
          <PageLoader />
        </LoaderContainer>
      </PageContent>
    </PageContainer>
  );
};
