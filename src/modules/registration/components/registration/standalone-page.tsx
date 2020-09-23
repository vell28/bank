import React from 'react';

import Head from '../../containers/head';
import { BoxWide, BoxContent } from '../page-box';

export const standalonePage = (Page: React.ComponentType<any>, withoutHeader?: boolean) => () => (
  <BoxWide>
    {withoutHeader ? null : <Head />}
    <BoxContent>
      <Page />
    </BoxContent>
  </BoxWide>
);
