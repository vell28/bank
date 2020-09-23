import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  CardBox, CardHeader, CardTitle, CardLogo, CardBody, CardRow, CardColumns, CardColumn
} from './elements';
import CardTypeLogo from '../../containers/operations/card-type-logo';

interface ICardInputProps {
  title?: string;
  cardNumberComponent?: JSX.Element;
  cardDateComponent?: JSX.Element;
  cardCvvComponent?: JSX.Element;
  cardholderComponent?: JSX.Element;
  handleSubmit: (object: any) => void;
}

type Props = ICardInputProps;

export const Card: React.FC<Props> = ({
  title = '',
  cardNumberComponent,
  cardDateComponent,
  cardCvvComponent,
  cardholderComponent,
}) => {
  const { t } = useTranslation();
  const showRow = cardDateComponent || cardCvvComponent;
  return (
    <CardBox>
      <CardHeader>
        <CardTitle>{t(title)}</CardTitle>
        <CardLogo>
          <CardTypeLogo />
        </CardLogo>
      </CardHeader>
      <CardBody>
        {cardNumberComponent && <CardRow>{cardNumberComponent}</CardRow>}
        {showRow && (
          <CardColumns>
            {cardDateComponent && <CardColumn>{cardDateComponent}</CardColumn>}
            {cardCvvComponent && <CardColumn>{cardCvvComponent}</CardColumn>}
          </CardColumns>
        )}
        {cardholderComponent && (
          <CardRow>
            <CardColumn isFullSize>{cardholderComponent}</CardColumn>
          </CardRow>
        )}
      </CardBody>
    </CardBox>
  );
};
