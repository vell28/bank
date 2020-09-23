import React from 'react';
import { Field } from 'redux-form';
import { useTranslation } from 'react-i18next';
import { CardProductType } from 'models/operations/card-settings/entities';
import { RadioContainer, FieldLabel, RadioRowContainer } from './elements';
import { RadioInput } from '../../../common/form/radio-input';

interface ICardProductTypeProps {
  value: CardProductType;
  disabled?: boolean;
  label?: string;
  isCustom?: boolean;
}

export const ProductTypeRadioField: React.FC<ICardProductTypeProps> = ({
  value,
  disabled,
  label,
  isCustom,
}) => {
  const { t } = useTranslation();
  const fieldLabel = label || `AK ${t(value).toLowerCase()}`;
  return (
    <RadioContainer>
      <RadioRowContainer>
        <FieldLabel isCustom={isCustom} isDisabled={disabled}>
          <Field
            name="cardProductType"
            component={RadioInput}
            value={value}
            type="radio"
            disabled={disabled}
          />
          <div />
          <span>{fieldLabel}</span>
        </FieldLabel>
      </RadioRowContainer>
    </RadioContainer>
  );
};
