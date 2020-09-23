import { format } from 'date-fns';
import {
  pipe, replace, splitEvery, join
} from 'ramda';

const CARD__FULL_LENGTH = 19;
const CARD_DATE_FORMAT = 'MM/yy';

const maskFullNumber = (cardNumber: string): string => {
  // 5277 6010 0004 4115
  // 5277 60*4 **** *115
  const first = cardNumber.slice(0, 7);
  const last = cardNumber.slice(-4);
  return `${first}* **** ${last}`;
};

const maskCutNumber = (cardNumber: string): string => {
  // 5277 60_3 984 -> 5277 60** **** 3984
  return pipe<string, string, string, string[], string>(
    replace(/\s/g, ''),
    replace('_', '******'),
    splitEvery(4),
    join(' '),
  )(cardNumber);
};

export const getMaskedCardNumber = (cardNumber: string): string => {
  return cardNumber.length === CARD__FULL_LENGTH ? maskFullNumber(cardNumber) : maskCutNumber(cardNumber);
};

export const formatCardDate = (date = ''): string => format(new Date(date), CARD_DATE_FORMAT);

export const maskNumbers = (numbers: string, shouldMask = true): string => {
  if (!shouldMask) {
    return numbers;
  }
  return numbers.replace(/\d/g, '*');
};

export const validateCustomLimit = (value: string): string => {
  return value.replace(/\D+/g, '').slice(0, 10);
};
