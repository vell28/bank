import React from 'react';
import { Field } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { ValidationFunc } from 'utils/redux-form/redux-form';
import {
  AmountBox, AmountTitle, AmountInputBox, AmountCurrency
} from './elements';
import { AmountValueField } from './fields/text-input';

interface ISimpleTextProps {
  label?: string;
  title?: string | JSX.Element;
  isLoading?: boolean;
  mask?: string;
  validateFns?: Array<ValidationFunc<string>>;
  name?: string;
  normalize?: (value: string) => void;
  format?: (value: string) => void;
  type?: string;
  maxLength?: number;
  formMask?: any;
  placeholder?: string;
}

export const SingleTextInput: React.FC<ISimpleTextProps> = React.memo(
  ({
    title = '',
    label,
    mask = null,
    validateFns = [],
    maxLength,
    name = 'value',
    type = 'tel',
    placeholder = '',
    formMask = {},
    ...other
  }) => {
    const { t } = useTranslation();
    return (
      <AmountBox>
        <AmountTitle>{typeof title === 'string' ? t(title) : title}</AmountTitle>
        <AmountInputBox>
          {label && <AmountCurrency>{label}</AmountCurrency>}
          <Field
            component={AmountValueField}
            validate={[...validateFns]}
            name={name}
            type={type}
            maxLength={maxLength}
            placeholder={placeholder}
            mask={mask}
            {...other}
            {...formMask}
          />
        </AmountInputBox>
      </AmountBox>
    );
  },
);
