import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { Input } from './elements';
import { FormGroup, Error } from '../../../common/form/elements';
import FieldWrapper, { IFieldWrapper } from '../../../common/form/hoc/FieldWrapper';

interface ICustomFieldData {
  serverError?: string;
  placeholder?: string;
  type?: string;
  mask?: string;
}

type Props = ICustomFieldData & WrappedFieldProps & IFieldWrapper;

export const AmountValueField: React.FC<Props> = FieldWrapper(
  ({
    input, meta, placeholder, type, mask = null, isTouch, handleChange, handleFocus, handleBlur, ...rest
  }) => {
    const { error } = meta;
    const hasError = isTouch && error;

    const { t } = useTranslation();
    return (
      <FormGroup hasError={hasError}>
        <Input
          {...input}
          {...rest}
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          mask={mask}
          maskChar={null}
        />
        {hasError && <Error top={-6}>{t(error)}</Error>}
      </FormGroup>
    );
  },
);
