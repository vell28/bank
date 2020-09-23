import React from 'react';
import { useTranslation } from 'react-i18next';

import * as Styled from './elements';
import { ScanBtn } from '../../common/button/scan';
import OvalBtn from '../../common/button/oval';

interface IProps {
  onClick: () => void;
}

const DisabledVideo: React.FC<IProps> = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <Styled.Container>
      <ScanBtn onClick={onClick} />
      <Styled.Title>{t('AK Money would like to access your camera')}</Styled.Title>
      <Styled.BtnWrap>
        <OvalBtn title="cancel" />
        <OvalBtn title="go to Settings" />
      </Styled.BtnWrap>
    </Styled.Container>
  );
};

export default React.memo(DisabledVideo);
