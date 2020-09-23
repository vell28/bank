import React from 'react';
import { Field } from 'redux-form';

import { ValidationFunc } from 'utils/redux-form/redux-form';
import { AmountBox, AmountInputBox, AmountCurrency } from './elements';
import { AuthInputField } from './fields/text-input';

interface ISimpleTextProps {
  label?: string;
  title?: string | JSX.Element;
  isLoading?: boolean;
  mask?: any;
  validateFns?: Array<ValidationFunc<string>>;
  name?: string;
  type?: string;
  placeholder?: string;
  serverError?: string;
  prefix?: string;
  format?: any;
}

export const CountrySelect: React.FC<ISimpleTextProps> = ({
  label,
  mask = {},
  validateFns = [],
  type = 'tel',
  placeholder = '',
  name = '',
  serverError = '',
  prefix,
  format,
}) => (
  <AmountBox>
    <AmountInputBox>
      {label && <AmountCurrency>{label}</AmountCurrency>}
      <Field
        component={AuthInputField}
        validate={[...validateFns]}
        type={type}
        placeholder={placeholder}
        prefix={prefix}
        name={name}
        serverError={serverError}
        format={format}
        {...mask}
      />
    </AmountInputBox>
  </AmountBox>
);
