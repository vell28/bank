import React from 'react';
import { Field } from 'redux-form';
import { ISelectFIeldProps, ISelectOption } from './types';
import { SelectFieldLabel, SelectFieldOuter, SelectFieldContainer } from './elements';
import { Select } from '../select/elements';

export const makeOptionsJsx: (options: Array<ISelectOption<any>>) => JSX.Element[] = (
  options: Array<ISelectOption<any>>,
) =>
  options.map((opt: ISelectOption<any>) => (
    <option key={opt.value} value={opt.value}>
      {opt.label}
    </option>
  ));

export const SelectField: <T>(props: ISelectFIeldProps<T>) => React.ReactElement<ISelectFIeldProps<T>> = ({
  label,
  nullable,
  options,
  placeholder,
  name,
}) => {
  return (
    <SelectFieldOuter>
      <SelectFieldLabel>{label || ''}</SelectFieldLabel>
      <SelectFieldContainer>
        <Field name={name} component={Select}>
          {nullable && (
            <option key="default" value="default">
              {placeholder || ''}
            </option>
          )}
          {makeOptionsJsx(options)}
        </Field>
      </SelectFieldContainer>
    </SelectFieldOuter>
  );
};
