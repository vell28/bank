import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import { useTranslation } from 'react-i18next';

import {
  Input, Label, FormGroup, LabelLine
} from './elements';
import { Error } from '../elements';
import FieldWrapper, { IFieldWrapper } from '../hoc/FieldWrapper';

interface ICustomFieldData {
  serverError?: string;
  placeholder?: string;
  type?: string;
  label?: string;
  bold?: boolean;
  change: any;
}

type Props = ICustomFieldData & WrappedFieldProps & IFieldWrapper;

export const TextInputTopUp: React.FC<Props> = FieldWrapper(
  ({
    input, meta, placeholder = '', type, isTouch, handleChange, handleFocus, handleBlur, label = '', ...rest
  }) => {
    const { error, pristine, valid } = meta;
    const isValid = pristine || valid;
    const hasError = isTouch && error;

    const { t } = useTranslation();

    return (
      <FormGroup>
        <LabelLine>{label && <Label>{t(label)}</Label>}</LabelLine>
        <Input
          {...input}
          {...rest}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={handleChange}
          type={type}
          placeholder={t(placeholder)}
          isValid={isValid}
          hasError={hasError}
        />
        {hasError && <Error top={-6}>{t(error)}</Error>}
      </FormGroup>
    );
  },
);
