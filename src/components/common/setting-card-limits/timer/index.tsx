import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

import { TimerLable } from './elements';

interface ITimerProps {
  value: number;
  isStart: boolean;
  onTimerEnd: () => void;
}

export const Timer: React.FC<ITimerProps> = ({ value, isStart, onTimerEnd }) => {
  const ONE_SECOND = 1000;
  const [timer, setTimer] = useState(value);
  const formatTimerValue = format(new Date(timer * ONE_SECOND), 'm:ss');

  useEffect(() => {
    let interval: any = null;
    if (isStart) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    }

    if (!timer) {
      clearInterval(interval);
      onTimerEnd();
    }

    return () => clearInterval(interval);
  }, [timer, isStart, onTimerEnd]);

  return <TimerLable isActive={isStart}>{formatTimerValue}</TimerLable>;
};
