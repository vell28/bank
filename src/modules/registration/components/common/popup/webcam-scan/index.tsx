import React, { useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Webcam from 'react-webcam';

import { Portal } from '../../portal';
import { PopupDialog } from '../overlay';
import { PopupTitle, PopupBtn } from '../elements';
import { Container, PopupBtnWrap, VideoWrap } from './elements';

interface IProps {
  onCancel: () => any;
  isShown: boolean;
  onClick: (screen: any) => any;
}

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
};

export const PopupWebcam: React.FC<IProps> = ({ isShown, onCancel, onClick }) => {
  const { t } = useTranslation();

  const webcamRef = useRef<Webcam | any>(null);

  const handleScreenshot = useCallback(() => {
    if (webcamRef && webcamRef.current) {
      const imageSrc = webcamRef && webcamRef.current.getScreenshot();
      onClick(imageSrc);
      onCancel();
    }
  }, [webcamRef, onClick, onCancel]);

  return (
    <Portal>
      <PopupDialog isShown={isShown} onCancel={onCancel} className="webcam" minHeight="350">
        <Container>
          <PopupTitle>{t('Take a photo by your webcam')}</PopupTitle>
          <VideoWrap>
            {isShown && (
              <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" videoConstraints={videoConstraints} />
            )}
          </VideoWrap>
          <PopupBtnWrap>
            <PopupBtn onClick={onCancel}>{t('Cancel')}</PopupBtn>
            <PopupBtn onClick={handleScreenshot}>{t('Take a photo')}</PopupBtn>
          </PopupBtnWrap>
        </Container>
      </PopupDialog>
    </Portal>
  );
};
