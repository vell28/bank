import React from 'react';
import { InjectedFormProps, Field } from 'redux-form';
import { useTranslation } from 'react-i18next';

import {
  numberMask,
  cvvMask,
  dateMask,
  validateDate,
  isRequired,
  validateCardholder,
  isValidCvv,
  isPapaya,
  isCardNumber,
} from 'utils/redux-form/redux-form';
import { cardNumberRequired, thruValidRequired, cvvRequired } from 'utils/required-names';
import { ICardData } from 'models/operations/transfer/entities';
import { Card } from '../../../card';

import { CardNumberField } from '../../../common/form/card-number';

interface ICardInputProps {
  title?: string;
  onSubmit?: (values: object) => any;
  useCvv?: boolean;
  useCardholder?: boolean;
  useDate?: boolean;
  usePapayaCheck?: boolean;
}

type Props = InjectedFormProps<ICardData, ICardInputProps> & ICardInputProps;

export const CardForm: React.FC<Props> = ({
  handleSubmit,
  error,
  useCardholder = false,
  useCvv = false,
  useDate = false,
  title = '',
  usePapayaCheck,
}) => {
  const { t } = useTranslation();
  const thruLabel = (
    <>
      {t('valid')}
      {' '}
      <br />
      {t('thru')}
    </>
  );

  return (
    <>
      <Card
        title={title}
        handleSubmit={handleSubmit}
        cardNumberComponent={(
          <Field
            component={CardNumberField}
            validate={[cardNumberRequired, usePapayaCheck ? isPapaya : isCardNumber]}
            name="cardNumber"
            type="text"
            serverError={error}
            mask={numberMask}
            placeholder="0000 0000 0000 0000"
          />
)}
        cardDateComponent={
          useDate ? (
            <Field
              component={CardNumberField}
              validate={[thruValidRequired, validateDate]}
              name="expiresDate"
              type="text"
              label={thruLabel}
              serverError={error}
              mask={dateMask}
              placeholder="00/00"
            />
          ) : (
            undefined
          )
        }
        cardCvvComponent={
          useCvv ? (
            <Field
              component={CardNumberField}
              validate={[cvvRequired, isValidCvv]}
              name="cvv"
              type="text"
              label="CVC/CVV"
              serverError={error}
              placeholder="000"
              mask={cvvMask}
            />
          ) : (
            undefined
          )
        }
        cardholderComponent={
          useCardholder ? (
            <Field
              component={CardNumberField}
              validate={[isRequired('Cardholder'), validateCardholder]}
              name="beneficiaryName"
              type="text"
              serverError={error}
              placeholder="cardholder"
            />
          ) : (
            undefined
          )
        }
      />
    </>
  );
};
