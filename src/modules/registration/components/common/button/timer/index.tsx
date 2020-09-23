import React, { useEffect, useState, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { isBefore, differenceInSeconds } from 'date-fns';

import { Button } from './elements';

const SECOND_INTERVAL = 1000;

interface IProps {
  endDate?: number;
  onClick: (param: any) => void;
  text: string;
}

let interval: number | null = null;

const toTwoDigit = (digit: string) => (digit.length < 2 ? `0${digit}` : digit);

const TimerBtn: React.FC<IProps> = ({ onClick, endDate = 0, text }) => {
  const [timer, increment] = useState<number>(0);

  const { t } = useTranslation();
  const isDisabled: boolean = isBefore(Date.now(), endDate);

  useEffect(() => {
    interval = setInterval(() => {
      increment(timer + 1);
    }, SECOND_INTERVAL);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [endDate, timer]);
  if (!isDisabled && interval) {
    clearInterval(interval);
  }

  const secondDiff = differenceInSeconds(endDate, Date.now());
  return (
    <Button onClick={onClick} disabled={isDisabled} type="submit">
      {!isDisabled ? t(text) : `${Math.floor(secondDiff / 60)}:${toTwoDigit(`${secondDiff % 60}`)}`}
    </Button>
  );
};

export default memo<IProps>(TimerBtn);
