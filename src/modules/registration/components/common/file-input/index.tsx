import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import * as Styled from './elements';

interface IProps {
  text: string;
  icon: string;
  name: string;
  onClick: (name?: string) => void;
  disabled?: boolean;
  isFilled: boolean;
}

export const File: React.FC<IProps> = memo(({
  text, onClick, name, icon, disabled, isFilled
}) => {
  const { t } = useTranslation();

  const handleClick = () => onClick(name);

  return (
    <Styled.Container onClick={handleClick} disabled={disabled} isFilled={isFilled} icon={icon}>
      <Styled.Icon icon={icon} />
      <Styled.Text>{t(text)}</Styled.Text>
    </Styled.Container>
  );
});
