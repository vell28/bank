import React from 'react';
import { useTranslation } from 'react-i18next';

import * as Styled from './elements';
import { Title } from '../elements';

interface IProps {
  title: string;
  onClick: () => void;
}

const OperationsError: React.FC<IProps> = ({ title, onClick }) => {
  const { t } = useTranslation();

  return (
    <Styled.Container>
      <Title>{t(title)}</Title>
      <Styled.ErrorText>{t('Something went wrong. Try later.')}</Styled.ErrorText>
      <Styled.Button onClick={onClick}>{t('Ok')}</Styled.Button>
    </Styled.Container>
  );
};

export default React.memo(OperationsError);
