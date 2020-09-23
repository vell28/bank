import React, { memo } from 'react';
import { Field } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { ValidationFunc } from 'utils/redux-form/redux-form';
import {
  AmountBox, AmountTitle, AmountInputBox, AmountCurrency
} from './elements';
import { AuthInputField } from './fields/text-input';

interface ISimpleTextProps {
  label?: string;
  title?: string | JSX.Element;
  isLoading?: boolean;
  mask?: any;
  normalize?: (value: string) => void;
  validateFns?: Array<ValidationFunc<string>>;
  name?: string;
  type?: string;
  placeholder?: string;
  serverError?: string;
  prefix?: string;
  isReadOnly?: boolean;
}

export const AuthTextInput: React.FC<ISimpleTextProps> = memo(
  ({
    title = '',
    label,
    mask = [],
    normalize,
    validateFns = [],
    type = 'tel',
    placeholder = '',
    name = '',
    serverError = '',
    isReadOnly,
    prefix,
  }) => {
    const { t } = useTranslation();
    return (
      <AmountBox>
        <AmountTitle>{typeof title === 'string' ? t(title) : title}</AmountTitle>
        <AmountInputBox>
          {label && <AmountCurrency>{label}</AmountCurrency>}
          <Field
            component={AuthInputField}
            validate={[...validateFns]}
            type={type}
            placeholder={placeholder}
            prefix={prefix}
            normalize={normalize}
            name={name}
            serverError={serverError}
            mask={mask}
            readOnly={isReadOnly}
            autocomplete="off"
          />
        </AmountInputBox>
      </AmountBox>
    );
  },
);
