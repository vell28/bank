import React from 'react';
import { WrappedFieldProps } from 'redux-form';

import * as Styled from './elements';
import { FormGroup } from '../../redux-fields/elements';

export interface ISelectOption {
  value: string;
  label: string;
}

interface ICustomFieldData {
  serverError?: string;
  placeholder?: string;
  options: ISelectOption[];
}

type Props = ICustomFieldData & WrappedFieldProps;

export const SelectField: React.FC<Props> = ({
  input, meta, placeholder = '', children, serverError, ...rest
}) => {
  const { touched, error } = meta;
  const hasError = touched && error;
  return (
    <FormGroup hasError={hasError || serverError}>
      <Styled.Select {...input} {...rest} placeholder={placeholder} hasError={hasError || serverError}>
        <option value="" disabled>
          {placeholder}
        </option>
        {children}
      </Styled.Select>
    </FormGroup>
  );
};

export const { Select } = Styled;
