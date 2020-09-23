import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { Input, Label } from './elements';
import { FormGroup, Error } from '../elements';
import FieldWrapper, { IFieldWrapper } from '../hoc/FieldWrapper';

interface ICustomFieldData {
  serverError?: string;
  placeholder?: string;
  type?: string;
  label?: string;
  bold?: boolean;
}

type Props = ICustomFieldData & WrappedFieldProps & IFieldWrapper;

export const TextInput: React.FC<Props> = FieldWrapper(
  ({
    input, meta, placeholder = '', type, label = '', isTouch, handleChange, handleFocus, handleBlur, ...rest
  }) => {
    const { error, pristine, valid } = meta;
    const isValid = pristine || valid;
    const hasError = isTouch && error;
    const { t } = useTranslation();
    return (
      <FormGroup>
        {label && <Label>{t(label)}</Label>}
        <Input
          {...input}
          {...rest}
          type={type}
          placeholder={t(placeholder)}
          isValid={isValid}
          hasError={hasError}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {hasError && <Error top={-6}>{t(error)}</Error>}
      </FormGroup>
    );
  },
);
