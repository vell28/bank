import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { maskNumbers, getMaskedCardNumber, formatCardDate } from 'utils/card';

import { ICardUnmasked } from 'models/operations/card-settings/entities';
import {
  CardPreviewBox,
  PreviewTitle,
  PreviewLine,
  CardFieldLabel,
  CardLabelName,
  CardLabelValue,
  SwitchBox,
} from './elements';
import { CheckBox } from '../checkbox';
import { Switch } from '../switch';

interface ICardFieldsType {
  [key: string]: keyof ICardUnmasked;
}

const cardFields: ICardFieldsType = {
  number: 'number',
  expireAt: 'expireAt',
  cvc: 'cvc',
  pin: 'pin',
};

interface IUnmaskedCardPreviewProps {
  card: ICardUnmasked;
}

interface ICheckedState {
  [key: string]: boolean;
}
/* tslint:disable:jsx-no-lambda */
export const UnmaskedCardPreview: React.FC<IUnmaskedCardPreviewProps> = ({ card }) => {
  const { t } = useTranslation();
  const [checked, setChecked] = useState<ICheckedState>({});
  const [isUnmasked, setMasked] = useState(false);

  const onCheck = (key: string) => setChecked({ ...checked, [key]: !checked[key] });
  const isUnmaskedField = (key: string): boolean => checked[key] && isUnmasked;

  const formattedDate = formatCardDate(card.expireAt);
  const maskedCardNumber = getMaskedCardNumber(card.number);
  return (
    <CardPreviewBox>
      <PreviewTitle>{t('Show Card Data')}</PreviewTitle>
      <PreviewLine>
        <CheckBox size={28} isChecked={checked[cardFields.number]} onCheck={() => onCheck(cardFields.number)}>
          <CardFieldLabel>
            <CardLabelName>{t('Card Number')}</CardLabelName>
            <CardLabelValue isShown={isUnmaskedField(cardFields.number)}>
              {isUnmaskedField(cardFields.number) ? card.number : maskedCardNumber}
            </CardLabelValue>
          </CardFieldLabel>
        </CheckBox>
      </PreviewLine>
      <PreviewLine>
        <CheckBox size={28} isChecked={checked[cardFields.expireAt]} onCheck={() => onCheck(cardFields.expireAt)}>
          <CardFieldLabel>
            <CardLabelName>{t('Expiry Date')}</CardLabelName>
            <CardLabelValue isShown={isUnmaskedField(cardFields.expireAt)}>
              {maskNumbers(formattedDate, !isUnmaskedField(cardFields.expireAt))}
            </CardLabelValue>
          </CardFieldLabel>
        </CheckBox>
      </PreviewLine>
      <PreviewLine>
        <CheckBox size={28} isChecked={checked[cardFields.cvc]} onCheck={() => onCheck(cardFields.cvc)}>
          <CardFieldLabel>
            <CardLabelName>{t('CVC')}</CardLabelName>
            <CardLabelValue isShown={isUnmaskedField(cardFields.cvc)}>
              {maskNumbers(card.cvc, !isUnmaskedField(cardFields.cvc))}
            </CardLabelValue>
          </CardFieldLabel>
        </CheckBox>
      </PreviewLine>
      {card.pin && (
        <PreviewLine>
          <CheckBox size={28} isChecked={checked[cardFields.pin]} onCheck={() => onCheck(cardFields.pin)}>
            <CardFieldLabel>
              <CardLabelName>{t('PIN')}</CardLabelName>
              <CardLabelValue isShown={isUnmaskedField(cardFields.pin)}>
                {maskNumbers(card.pin, !isUnmaskedField(cardFields.pin))}
              </CardLabelValue>
            </CardFieldLabel>
          </CheckBox>
        </PreviewLine>
      )}
      <PreviewLine>
        <SwitchBox>
          <Switch onCheck={setMasked} isChecked={isUnmasked} />
        </SwitchBox>
      </PreviewLine>
    </CardPreviewBox>
  );
};
/* tslint:enable:jsx-no-lambda */
