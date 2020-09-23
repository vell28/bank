import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import { useTranslation } from 'react-i18next';

import {
  Input, FieldError, FormGroup, Prefix
} from './elements';

interface ICustomFieldData {
  serverError?: string;
  placeholder?: string;
  type?: string;
  prefix?: string;
}

type Props = ICustomFieldData & WrappedFieldProps;

export const AuthInputField: React.FC<Props> = ({
  input, meta, placeholder, serverError, type, prefix, ...rest
}) => {
  const {
    touched, error, pristine, valid
  } = meta;
  const isValid = pristine || valid;
  const hasError = touched && (error || serverError);
  const { t } = useTranslation();
  return (
    <FormGroup hasError={hasError}>
      {prefix && (
      <Prefix>
        {prefix}
        {' '}
      </Prefix>
      )}
      <Input {...input} {...rest} type={type} placeholder={placeholder} isValid={isValid} hasError={hasError} />
      {hasError && <FieldError>{t(error || serverError)}</FieldError>}
    </FormGroup>
  );
};
