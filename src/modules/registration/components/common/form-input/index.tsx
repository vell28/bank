import React, { memo, Ref } from 'react';
import { WrappedFieldProps } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { TextInput, Error } from './elements';
import { FormLabel } from '../form-label';
import { FormGroup } from '../form-group';
import FieldWrapper, { IFieldWrapper } from '../hoc/with-field-wrap';

interface ICustomFieldData {
  serverError?: string;
  placeholder?: string;
  getRef?: (arg: Ref<HTMLInputElement>) => void;
  type?: string;
  label?: string;
  bold?: boolean;
}

type Props = ICustomFieldData & WrappedFieldProps & IFieldWrapper;

export const Input: React.FC<Props> = memo(
  FieldWrapper(
    ({
      input,
      meta,
      placeholder = '',
      serverError,
      type,
      label = '',
      isTouch,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      getRef = () => {},
      handleChange,
      handleFocus,
      handleBlur,
      ...rest
    }) => {
      const { error, pristine, valid } = meta;
      const isValid = pristine || valid;
      const hasError = isTouch && error;
      const serErr = isTouch && serverError;
      const { t } = useTranslation();
      return (
        <FormGroup>
          {label && <FormLabel>{t(label)}</FormLabel>}
          <TextInput
            {...input}
            {...rest}
            ref={(inputRef: Ref<HTMLInputElement>) => getRef(inputRef)}
            type={type}
            placeholder={t(placeholder)}
            isValid={isValid}
            hasError={hasError}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoComplete="off"
          />
          {hasError && <Error top={-6}>{t(error)}</Error>}
          {serErr && <Error top={-6}>{t(serverError)}</Error>}
        </FormGroup>
      );
    },
  ),
);
