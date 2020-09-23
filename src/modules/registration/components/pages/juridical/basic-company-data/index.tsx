import React from 'react';

import { NextButton } from '../../../common/next-button';
import {
  PageOuter, PageHeader, PageContent, NextButtonLine
} from '../../../page-content';

interface IPageProps {
  pageComplete: () => void;
}

export const BasicCompanyData: React.FC<IPageProps> = ({ pageComplete }) => {
  return (
    <PageOuter>
      <PageHeader>Basic company data</PageHeader>
      <PageContent>...content...</PageContent>
      <NextButtonLine>
        <NextButton onClick={pageComplete} arrow>
          Next
        </NextButton>
      </NextButtonLine>
    </PageOuter>
  );
};
