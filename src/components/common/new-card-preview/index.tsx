import React from 'react';

import { CardProductType } from 'models/operations/card-settings/entities';
import { CardPreview, ICardPreviewProps } from '../card-preview/index';
import { NoTypeCardPreview } from '../no-type-card-preview';
import { AccountStatus } from '../../../models/organizations';

const defaultCardProps: ICardPreviewProps = {
  cardNumber: '5554 70** **** ****',
  expireAt: '2021-04-01T00:00:00',
  name: 'CARDHOLDER NAME',
  status: AccountStatus.ACTIVE,
};

export interface INewCardPreviewProps {
  productType?: CardProductType;
  name?: string;
}

export const NewCardPreview: React.FC<INewCardPreviewProps> = (props) => {
  const { productType } = props;
  const cardPreviewProps: ICardPreviewProps = {
    ...defaultCardProps,
    ...props,
  };
  const hasProductType = !!productType;
  return hasProductType ? <CardPreview {...cardPreviewProps} /> : <NoTypeCardPreview {...cardPreviewProps} />;
};
