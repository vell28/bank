import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Container, BtnWrap, Icon } from './elements';

interface IProps {
  text: string;
  onClick: () => void;
}

const BackBtn: React.FC<IProps> = ({ text, onClick }) => {
  const { t } = useTranslation();
  return (
    <Container>
      <BtnWrap onClick={onClick}>
        {t(text)}
        <Icon />
      </BtnWrap>
    </Container>
  );
};

export default memo(BackBtn);
