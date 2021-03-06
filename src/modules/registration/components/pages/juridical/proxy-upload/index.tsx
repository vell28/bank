import React from 'react';

import { NextButton } from '../../../common/next-button';
import {
  PageOuter, PageHeader, PageContent, NextButtonLine
} from '../../../page-content';

interface IPageProps {
  pageComplete: () => void;
}

export const ProxyUpload: React.FC<IPageProps> = ({ pageComplete }) => {
  return (
    <PageOuter>
      <PageHeader>Proxy upload</PageHeader>
      <PageContent>...content...</PageContent>
      <NextButtonLine>
        <NextButton onClick={pageComplete} arrow>
          Next
        </NextButton>
      </NextButtonLine>
    </PageOuter>
  );
};
