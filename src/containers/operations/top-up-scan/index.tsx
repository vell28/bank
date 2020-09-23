import React from 'react';

import { DisabledVideo, EnabledVideo } from '../../../components/scan-camera';

const TopUpScan: React.FC = () => {
  const [step, setStep] = React.useState<0 | 1>(0);
  const [stream, setStream] = React.useState<MediaStream | null>(null);

  const handleStepChange = () => setStep(step === 0 ? 1 : 0);

  const handleStream = () => {
    // @ts-ignore
    // eslint-disable-next-line no-self-assign
    navigator.getUserMedia = navigator.getUserMedia;

    // @ts-ignore
    // eslint-disable-next-line no-unused-expressions
    navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.mediaDevices.getUserMedia;
    // TODO: NEED replace
    navigator.getUserMedia(
      { video: true },
      (videoStream) => {
        setStream(videoStream);
        handleStepChange();
      },
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      () => {},
    );
  };

  const handleClick = () => {
    if (step === 0) {
      handleStream();
      return;
    }
    handleStepChange();
  };

  const components = {
    0: <DisabledVideo onClick={handleClick} />,
    1: <EnabledVideo onClick={handleClick} stream={stream} />,
  };

  return components[step];
};

export default React.memo(TopUpScan);
