import React from 'react';

import * as Styled from './elements';

export interface ISelectyInputOption {
  value: string;
  label: string;
}

interface ISelectyInputProps {
  options: ISelectyInputOption[];
  value?: string | null;
  placeholder?: string;
  onClick: () => void;
  hasError?: boolean;
}

export const SelectyInput: React.FC<ISelectyInputProps> = ({
  options,
  value,
  placeholder,
  onClick,
  hasError = false,
}) => {
  const option = options.find((o) => o.value === value);
  const displayValue = option ? option.label : '';

  return (
    <Styled.SelectyInput
      value={displayValue}
      placeholder={placeholder}
      onClick={onClick}
      readOnly
      hasError={hasError}
    />
  );
};
