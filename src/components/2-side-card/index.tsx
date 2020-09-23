import React from 'react';
import { useTranslation } from 'react-i18next';
import { Field } from 'redux-form';

import {
  dateMask,
  isCardNumber,
  isOnlyChars,
  numberMask,
  isValidCvv,
  cvvMask,
  validateDate,
} from 'utils/redux-form/redux-form';

import {
  cardNumberRequired, thruValidRequired, cardholderRequired, cvvRequired
} from 'utils/required-names';
import {
  CardBox,
  CardHeader,
  CardTitle,
  CardHolderColumn,
  CardBody,
  CardRow,
  CardColumns,
  CardColumn,
  CardLabel,
  TwoSideBox,
  SecondCard,
  Line,
} from './elements';

import { CardNumberField } from '../common/form/card-number';

interface ICardInputProps {
  title?: string;
}

type Props = ICardInputProps;

export const TwoSideCard: React.FC<Props> = ({ title = '' }) => {
  const { t } = useTranslation();
  return (
    <TwoSideBox>
      <SecondCard>
        <Line />
        <CardRow>
          <CardLabel>{t('cvc/cvv')}</CardLabel>
          <Field
            component={CardNumberField}
            validate={[cvvRequired, isValidCvv]}
            name="cvv"
            type="text"
            placeholder="000"
            mask={cvvMask}
          />
        </CardRow>
      </SecondCard>
      <CardBox>
        <CardHeader>
          <CardTitle>{t(title)}</CardTitle>
        </CardHeader>
        <CardBody>
          <CardRow>
            <CardLabel>{t('card number')}</CardLabel>
            <Field
              component={CardNumberField}
              validate={[cardNumberRequired, isCardNumber]}
              name="cardNumber"
              type="text"
              mask={numberMask}
              placeholder="0000 0000 0000 0000"
            />
          </CardRow>
          <CardRow>
            <CardColumns>
              <CardHolderColumn width={205}>
                <CardLabel>{t('card holder')}</CardLabel>
                <Field
                  component={CardNumberField}
                  validate={[cardholderRequired, isOnlyChars]}
                  name="beneficiaryName"
                  type="text"
                  placeholder="Exactly as on a card (A-z 0-9 only)"
                />
              </CardHolderColumn>
              <CardColumn width={62}>
                <CardLabel>{t('valid thru')}</CardLabel>
                <Field
                  component={CardNumberField}
                  validate={[thruValidRequired, validateDate]}
                  name="expiresDate"
                  type="text"
                  mask={dateMask}
                  placeholder="00/00"
                />
              </CardColumn>
            </CardColumns>
          </CardRow>
        </CardBody>
      </CardBox>
    </TwoSideBox>
  );
};
