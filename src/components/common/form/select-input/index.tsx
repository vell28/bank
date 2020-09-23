import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import { useTranslation } from 'react-i18next';

import FieldWrapper, { IFieldWrapper } from '../hoc/FieldWrapper';
import {
  Select, SelectLine, Label, LabelLine, FormGroup
} from './elements';
import { Error } from '../elements';

export interface ISelectOption {
  value: string;
  label: string;
}

interface ICustomFieldData {
  serverError?: string;
  placeholder?: string;
  label?: string;
  options: ISelectOption[];
  bold?: boolean;
  isTouch: boolean;
}

type Props = ICustomFieldData & WrappedFieldProps & IFieldWrapper;

export const SelectInput: React.FC<Props> = FieldWrapper(
  ({
    input, meta, placeholder = '', label = '', isTouch, handleFocus, handleBlur, options, ...rest
  }) => {
    const { error, pristine, valid } = meta;
    const isValid = pristine || valid;
    const hasError = isTouch && error;
    const { t } = useTranslation();

    return (
      <FormGroup hasError={hasError}>
        <LabelLine>{label && <Label>{t(label)}</Label>}</LabelLine>
        <SelectLine hasError={hasError}>
          <Select {...input} {...rest} isValid={isValid} hasError={hasError} onFocus={handleFocus} onBlur={handleBlur}>
            <option value="" disabled>
              {t(placeholder)}
            </option>
            {options
              && options.map((item: ISelectOption) => (
                <option key={item.label} value={item.value}>
                  {item.label}
                </option>
              ))}
          </Select>
        </SelectLine>
        {hasError && <Error top={-6}>{t(error)}</Error>}
      </FormGroup>
    );
  },
);
