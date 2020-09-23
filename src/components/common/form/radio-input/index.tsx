import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import { RadioInputElement } from './elements';

interface IRadioInputOwnProps {
  disabled?: boolean;
}

type Props = WrappedFieldProps & IRadioInputOwnProps;

export const RadioInput: React.FC<Props> = ({ input, disabled }) => (
  <RadioInputElement {...input} type="radio" disabled={disabled} />
);
