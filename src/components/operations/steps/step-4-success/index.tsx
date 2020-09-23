import React from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Title, Success } from '../elements';

interface ITransferStep4Props {
  title?: string;
  successText?: string;
}

export const SuccessStep: React.FC<ITransferStep4Props> = ({ title = 'Transfer / Card', successText = '' }) => {
  const { t } = useTranslation();
  return (
    <Box>
      <Title>{t(title)}</Title>
      <Success>{t(successText)}</Success>
    </Box>
  );
};

export default SuccessStep;
