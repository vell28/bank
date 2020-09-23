import React from 'react';
import { WrappedFieldProps } from 'redux-form';

import * as Styled from './elements';
import { FormGroup } from '../../redux-fields/elements';

interface ICustomFieldData {
  serverError?: string;
  placeholder?: string;
  type?: string;
}

type Props = ICustomFieldData & WrappedFieldProps;

export const TextInputField: React.FC<Props> = ({
  input, meta, placeholder = '', serverError, type, ...rest
}) => {
  const {
    touched, error, pristine, valid
  } = meta;
  const isValid = pristine || valid;
  const hasError = touched && error;
  return (
    <FormGroup hasError={hasError || serverError}>
      <Styled.Input
        {...input}
        {...rest}
        type={type}
        placeholder={placeholder}
        isValid={isValid}
        hasError={hasError || serverError}
      />
    </FormGroup>
  );
};

export const { Input } = Styled;
