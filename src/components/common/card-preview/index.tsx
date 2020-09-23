import React from 'react';
import { equals } from 'ramda';

import { useTranslation } from 'react-i18next';
import { getMaskedCardNumber, formatCardDate } from 'utils/card';

import { CardProductType } from 'models/operations/card-settings/entities';
import { AccountStatusType, AccountStatus } from 'models/organizations/entities';
import {
  CardBox,
  AdaptiveBox,
  InnerBox,
  CardNumber,
  CardHolderName,
  CardExpiredDate,
  BlockBox,
  RoundBox,
} from './elements';

export interface ICardPreviewProps {
  productType?: CardProductType;
  cardNumber?: string;
  name: string;
  expireAt?: string;
  status: AccountStatusType;
  fontSize?: string;
}

export const CardPreview: React.FC<ICardPreviewProps> = ({
  productType = 'MAIN',
  cardNumber = '',
  name,
  expireAt = '',
  fontSize = '10',
  status,
}) => {
  const formattedDate = formatCardDate(expireAt);
  const masked = getMaskedCardNumber(cardNumber);
  const isActive = equals(status, AccountStatus.ACTIVE);
  const { t } = useTranslation();
  return (
    <CardBox fontSize={fontSize}>
      <AdaptiveBox>
        <InnerBox type={productType} isBlocked={!isActive}>
          <CardNumber key={cardNumber}>{masked}</CardNumber>
          <CardHolderName>{name}</CardHolderName>
          <CardExpiredDate>{formattedDate}</CardExpiredDate>
        </InnerBox>
      </AdaptiveBox>
      {!isActive && (
        <BlockBox>
          <RoundBox>+</RoundBox>
          <span>{t('card is blocked')}</span>
        </BlockBox>
      )}
    </CardBox>
  );
};
