import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import { useTranslation } from 'react-i18next';

import {
  Input, CardRow, CardLabel, CardError, CardFormGroup
} from './elements';
import FieldWrapper, { IFieldWrapper } from '../hoc/FieldWrapper';

interface ICustomFieldData {
  serverError?: string;
  placeholder?: string;
  type?: string;
  mask?: string;
  label?: string | JSX.Element;
}

type Props = ICustomFieldData & WrappedFieldProps & IFieldWrapper;

export const CardNumberField: React.FC<Props> = FieldWrapper(
  ({
    input,
    meta,
    placeholder = '',
    type,
    isTouch,
    handleFocus,
    handleBlur,
    handleChange,
    mask = null,
    label,
    ...rest
  }) => {
    const { error } = meta;
    const hasError = isTouch && error;

    const { t } = useTranslation();
    return (
      <CardFormGroup hasError={hasError}>
        {hasError && <CardError className="error-field">{t(error)}</CardError>}
        <CardRow>
          {label && <CardLabel>{label}</CardLabel>}
          <Input
            {...input}
            {...rest}
            type={type}
            placeholder={t(placeholder)}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            mask={mask}
            maskChar={null}
          />
        </CardRow>
      </CardFormGroup>
    );
  },
);
