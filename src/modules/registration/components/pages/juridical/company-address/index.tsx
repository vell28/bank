import React from 'react';

import { NextButton } from '../../../common/next-button';
import {
  PageOuter, PageHeader, PageContent, NextButtonLine
} from '../../../page-content';

interface IPageProps {
  pageComplete: () => void;
}

export const CompanyAddress: React.FC<IPageProps> = ({ pageComplete }) => {
  return (
    <PageOuter>
      <PageHeader>Company address</PageHeader>
      <PageContent>...content...</PageContent>
      <NextButtonLine>
        <NextButton onClick={pageComplete} arrow>
          Next
        </NextButton>
      </NextButtonLine>
    </PageOuter>
  );
};
