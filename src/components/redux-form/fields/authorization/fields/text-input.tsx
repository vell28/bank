import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import { useTranslation } from 'react-i18next';

import {
  Input, FieldError, FormGroup, Prefix
} from './elements';
import FieldWrapper, { IFieldWrapper } from '../../../../../components/common/form/hoc/FieldWrapper';

interface ICustomFieldData {
  serverError?: string;
  placeholder?: string;
  type?: string;
  prefix?: string;
  mask?: string;
}

type Props = ICustomFieldData & WrappedFieldProps & IFieldWrapper;

export const AuthInputField: React.FC<Props> = FieldWrapper(
  ({
    input, meta, placeholder, serverError, type, prefix, isTouch, handleFocus, handleBlur, mask = null, ...rest
  }) => {
    const { error } = meta;
    const hasError = isTouch && (error || serverError);
    const { t } = useTranslation();

    return (
      <FormGroup hasError={hasError}>
        {prefix && (
        <Prefix>
          {prefix}
          {' '}
        </Prefix>
        )}
        <Input
          {...input}
          {...rest}
          type={type}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          mask={mask}
          maskChar={null}
        />
        {hasError && <FieldError>{t(error || serverError)}</FieldError>}
      </FormGroup>
    );
  },
);
