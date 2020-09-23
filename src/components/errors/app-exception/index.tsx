import React from 'react';

import { ErrorBox } from './elements';

// TODO: fix component, after design
export const AppExceptionError: React.FC = () => {
  return (
    <ErrorBox>
      <h1>Unexpected Error. Please contact to support</h1>
    </ErrorBox>
  );
};
