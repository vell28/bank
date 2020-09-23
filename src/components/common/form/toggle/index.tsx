import React from 'react';
import { WrappedFieldProps } from 'redux-form';

import { Switch } from '../../switch';

interface ICustomFieldData {
  serverError?: string;
  placeholder?: string;
}

type Props = ICustomFieldData & WrappedFieldProps;

export const Toggle: React.FC<Props> = ({ input, placeholder = '' }) => {
  return (
    <Switch onCheck={input.onChange} isChecked={input.value}>
      {placeholder}
    </Switch>
  );
};
