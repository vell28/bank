import React from 'react';
import { useTranslation } from 'react-i18next';

import { CardBox, AdaptiveBox, InnerBox } from './elements';

export interface ICardPreviewProps {
  fontSize?: string;
}

const newCardText = '+ new card';

export const NoTypeCardPreview: React.FC<ICardPreviewProps> = ({ fontSize = '10' }) => {
  const { t } = useTranslation();
  return (
    <CardBox fontSize={fontSize}>
      <AdaptiveBox>
        <InnerBox>{t(newCardText)}</InnerBox>
      </AdaptiveBox>
    </CardBox>
  );
};
