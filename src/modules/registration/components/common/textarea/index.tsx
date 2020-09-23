import React from 'react';
import { WrappedFieldProps } from 'redux-form';

import { Textarea } from './elements';
import { FormGroup } from '../../redux-fields/elements';

interface ICustomFieldData {
  serverError?: string;
  placeholder?: string;
}

type Props = ICustomFieldData & WrappedFieldProps;

export const TextAreaField: React.FC<Props> = ({
  input, meta, placeholder = '', serverError, ...rest
}) => {
  const {
    touched, error, pristine, valid
  } = meta;
  const isValid = pristine || valid;
  const hasError = touched && error;
  return (
    <FormGroup hasError={hasError || serverError}>
      <Textarea {...input} {...rest} placeholder={placeholder} isValid={isValid} hasError={hasError || serverError} />
    </FormGroup>
  );
};
