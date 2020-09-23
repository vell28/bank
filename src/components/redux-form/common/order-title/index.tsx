import React from 'react';
import { getCardTypeDisplayName } from 'utils/productTypeFormat';
import { CardProductType } from 'models/operations/card-settings/entities';
import { TitleContainer, TitlePartGrey, TitlePart } from './elements';

interface IOwnerInfoTitleProps {
  productType: CardProductType;
}

const prefix = 'Order';
const suffix = 'Card';

export const OrderTitle: React.FC<IOwnerInfoTitleProps> = ({ productType }) => {
  const productTypeDisplayName = getCardTypeDisplayName(productType);
  return (
    <TitleContainer>
      <TitlePart>{prefix}</TitlePart>
      <TitlePartGrey>{` ${productTypeDisplayName} `}</TitlePartGrey>
      <TitlePart>{suffix}</TitlePart>
    </TitleContainer>
  );
};
