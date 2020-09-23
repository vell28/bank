import React, { memo } from 'react';
import { Field } from 'redux-form';

import { spacesRemove } from '../../../utils/validations';
import { Input } from '.';

interface IInputField {
  name: string;
  serverError?: string;
  placeholder?: string;
  getRef?: (arg: HTMLInputElement | null) => void;
  type?: string;
  label?: string;
  bold?: boolean;
  validate?: any[];
  normalize?: (value: string, previousValue: string) => string;
}

const InputField: React.FC<IInputField> = ({
  name,
  getRef,
  placeholder,
  validate,
  type,
  normalize,
  serverError,
  bold,
  label,
}) => {
  const setRef = (ref: HTMLInputElement | null) => getRef && getRef(ref);

  return (
    <Field
      component={Input}
      name={name}
      getRef={setRef}
      placeholder={placeholder}
      validate={validate}
      type={type}
      normalize={normalize}
      serverError={serverError}
      label={label}
      parser={spacesRemove}
      bold={bold}
    />
  );
};

export default memo(InputField);
