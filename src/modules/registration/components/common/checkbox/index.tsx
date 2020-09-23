import React from 'react';

import { Box, Mark, Content } from './elements';

interface ICheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  hasError?: boolean;
}

// eslint-disable-next-line no-duplicate-imports
export { CheckboxLine } from './elements';

export const Checkbox: React.FC<ICheckboxProps> = ({
  checked, children, onChange, hasError
}) => {
  const onClick = onChange ? () => onChange(!checked) : null;
  return (
    <Box onClick={onClick} checked={checked}>
      <Mark hasError={hasError} />
      <Content>{children}</Content>
    </Box>
  );
};
