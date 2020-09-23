import React from 'react';
import { useTranslation } from 'react-i18next';

import * as Styled from './elements';

interface IProps {
  onClick: () => void;
  stream: MediaStream | null;
}

const EnabledVideo: React.FC<IProps> = ({ onClick, stream }) => {
  const { t } = useTranslation();

  const ref = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const videoRef = ref.current;

    if (videoRef) {
      videoRef.srcObject = stream;
      videoRef.play();
    }

    return () => {
      if (stream) {
        stream.getTracks().forEach((item: any) => item.stop());
      }
    };
  });

  return (
    <Styled.Container>
      <Styled.TopWrap>
        <Styled.Title>{t('Hold the card inside the frame')}</Styled.Title>
        <Styled.Cancel onClick={onClick}>{t('cancel')}</Styled.Cancel>
      </Styled.TopWrap>

      <Styled.BottomWrap>
        <Styled.Video ref={ref} />
        <Styled.AngleLeftTop />
        <Styled.AngleLeftBottom />
        <Styled.AngleRightTop />
        <Styled.AngleRightBottom />
      </Styled.BottomWrap>
    </Styled.Container>
  );
};

export default React.memo(EnabledVideo);
