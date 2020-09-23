import React, { useCallback, useEffect, useRef } from 'react';
import { WrappedFieldProps } from 'redux-form';
import flatpickr from 'flatpickr';
import { FormGroup } from '../../redux-fields/elements';

import * as Styled from './elements';
import * as TextInputStyled from '../text-input/elements';

interface ICustomFieldData {
  minDate?: Date;
  maxDate?: Date;
  serverError?: string;
  placeholder?: string;
}

type Props = ICustomFieldData & WrappedFieldProps;

export const DateInputField: React.FC<Props> = ({
  input,
  meta,
  minDate,
  maxDate,
  placeholder,
  serverError,
  ...rest
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const calendar = useRef<flatpickr.Instance>();

  useEffect(() => {
    if (ref.current) {
      calendar.current = flatpickr(ref.current, {
        dateFormat: 'd.m.Y',
        minDate: minDate || undefined,
        maxDate: maxDate || Date.now(),
        defaultDate: input.value || Date.now(),
        static: true,
        onChange: (selectedDates, dateStr) => {
          input.onChange(dateStr);
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = useCallback(() => {
    if (calendar.current) {
      calendar.current.open();
    }
  }, []);

  const {
    touched, error, pristine, valid
  } = meta;
  const isValid = pristine || valid;
  const hasError = touched && error;

  return (
    <Styled.Container>
      <FormGroup ref={ref} hasError={hasError || serverError} onClick={handleClick}>
        <TextInputStyled.Input
          {...input}
          {...rest}
          placeholder={placeholder}
          type="text"
          readOnly
          isValid={isValid}
          hasError={hasError || serverError}
        />
        <Styled.Icon />
      </FormGroup>
    </Styled.Container>
  );
};
