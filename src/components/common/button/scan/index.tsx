import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  ScanBtnBox, AngleLeftTop, AngleLeftBottom, AngleRightTop, AngleRightBottom
} from './elements';

interface IScanBtnProps {
  onClick?: () => any;
}

export const ScanBtn: React.FC<IScanBtnProps> = ({ onClick = () => null }) => {
  const { t } = useTranslation();
  return (
    <ScanBtnBox onClick={onClick}>
      <AngleLeftTop />
      <AngleLeftBottom />
      <span>{t('Scan')}</span>
      <AngleRightTop />
      <AngleRightBottom />
    </ScanBtnBox>
  );
};
