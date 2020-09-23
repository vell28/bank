import React from 'react';

import Head from '../../containers/head';
import StepList from '../../containers/step-list';
import {
  BoxWide, BoxContent, LeftSide, RightSide
} from '../page-box';

export const commonPage = (Page: React.ComponentType<any>) => () => (
  <BoxWide>
    <Head />
    <BoxContent>
      <LeftSide>
        <StepList />
      </LeftSide>
      <RightSide>
        <Page />
      </RightSide>
    </BoxContent>
  </BoxWide>
);
