import { createNumberMask } from 'redux-form-input-masks';
import {
  always, cond, isEmpty, isNil, propEq, propOr, slice, T
} from 'ramda';
import { format } from 'date-fns';
import cardValidator from 'card-validator';
import memoizeOne from 'memoize-one';

import { CurrencyCodeType } from 'modules/currencies';
import { IAmount } from 'modules/api-requests/payments/entities';
import { CardProductType } from 'models/operations/card-settings/entities';
import { Validator } from 'redux-form';

const NOT_VALID_MONTH = 'Not valid month!';
const ALLOW_A_0_9 = 'Allowed characters A-Z a-z 0-9 - .';

export type ValidationFunc<P> = (value: P) => void | string;

export const isValid: void = undefined;

export const beneficiary = /[^()-.,;:A-Za-z0-9\s]/;
export const comment = /[^(/)-.,;:'"?A-Za-z0-9\s]/;
export const characters = /^([A-Za-z0-9]+\s?)+$/;
export const citySymbols = /[^-().,'"`#№\w\s]/;
export const phoneOrEmail = /[^-+(/\]/)[!$%{|}.,/'"`#№@<>~:;^\w]/;
export const email = /^\S+@\S+$/;
export const password = /[^(.,:;?!*+%-<>@[/\]/{}//\\/{}$#)\w]/;
export const passwordChar = /[^(.,:;?!*+%-<>@[/\]/{}//\\/_{}$#)]/gi;

export const numberMask = '9999 9999 9999 9999';
export const dateMask: any = '99/99';
export const cvvMask: any = '999';
export const phoneMask: any = '+9 (999) 999 9999 9999';
export const cutPhoneMask: any = '999 999 99 999';
export const smsMask = (maxLength: number) => {
  let buf = '';
  let i = 0;

  while (i < maxLength) {
    buf += '9';
    i++;
  }

  return buf;
};

const checkMonth = (value: string) => (+value > 12 || +value < 1 ? NOT_VALID_MONTH : isValid);

const checkFistMonth = (value: string) => (+value !== 0 && +value !== 1 ? NOT_VALID_MONTH : isValid);

const checkMontDate = (value: string) => {
  const curYear = format(new Date(), 'yy');
  const curMonth = format(new Date(), 'LL');
  const cardYear = slice(3, 5)(value);
  const cardMonth = slice(0, 2)(value);
  if (+cardMonth > 12 || +cardMonth <= 0) {
    return NOT_VALID_MONTH;
  }
  const isValidDate = +cardYear > +curYear || (+cardYear === +curYear && cardMonth >= curMonth);

  return isValidDate ? isValid : 'Card is expired!';
};

export const validateDate: ValidationFunc<string> = (value?: string) =>
  cond([
    [isNil, always('Is required!')],
    [isEmpty, always('Is required!')],
    [propEq('length', 1), checkFistMonth],
    [propEq('length', 2), checkMonth],
    [propEq('length', 3), always('Not valid Year!')],
    [propEq('length', 4), always('Not valid Year!')],
    [propEq('length', 5), checkMontDate],
    [T, always('Not valid date!')],
  ])(value);

export const isRequired = memoizeOne((propName?: string) => {
  const errorMessage = propName ? `${propName} is required!` : `Is required!`;
  return (value?: any) => {
    const isValidValue = !!value; // empty string is falsy
    return !isValidValue ? errorMessage : undefined;
  };
});

export const isValidMinLength = memoizeOne(
  (length: number): ValidationFunc<string> => (value?: string) =>
    value && value.length >= length ? isValid : `Must be ${length} characters or more`,
);

export const isValidSmsMinLength = memoizeOne(
  (length: number): ValidationFunc<string> => (value?: string) =>
    value && value.length >= length ? isValid : `Must be ${length} characters`,
);

export const amountMask: any = createNumberMask({
  suffix: '',
  decimalPlaces: 2,
  stringValue: true,
});

export const isNotZero: ValidationFunc<string> = (value: string) =>
  value && +value > 0 ? isValid : 'Should be greater than 0!';

export const isPapaya: ValidationFunc<string> = (value: string) => {
  const clearValue = value.replace(/\s/g, '');
  const valid = cardValidator.number(clearValue);
  if (!valid.isValid) {
    return 'Invalid card number!';
  }

  return /^527760\d+$/.test(clearValue) ? isValid : 'Transfer to this card is currently unavailable';
};

export const isCardNumber: ValidationFunc<string> = (value: string) => {
  const valid = cardValidator.number(value);
  return valid.isValid ? isValid : 'Invalid card number!';
};

export const isOnlyChars: ValidationFunc<string> = (value: string) =>
  /^([A-Za-z]+\s?)+$/.test(value) ? isValid : 'Allowed characters A-Z a-z';

export const validateCardholder: ValidationFunc<string> = (value: string) =>
  characters.test(value) && value.length <= 21 ? isValid : ALLOW_A_0_9;

export const isNotMaxAmount = memoizeOne((amount: number) => (value: string) =>
  +value > amount ? 'Insufficient funds' : isValid);

export const isValidCvv: ValidationFunc<string> = (value: string) =>
  value.length === 3 ? isValid : 'Incorrect CVC/CVV';

export const getPreparedAmount = (amount: string, currency: CurrencyCodeType): IAmount => ({
  sum: {
    currency: {
      code: currency,
    },
    value: amount,
  },
});

export const validateCity: ValidationFunc<string> = (value: string) =>
  !citySymbols.test(value) ? isValid : ALLOW_A_0_9;

export const validatePhoneOrEmail: ValidationFunc<string> = (value: string) =>
  !phoneOrEmail.test(value) ? isValid : 'Invalid phone number or e-mail format';

export const validateEmail: ValidationFunc<string> = (value: string) =>
  !email.test(value) ? isValid : 'Invalid e-mail format';

export const validateComment: ValidationFunc<string> = (value: string) =>
  !comment.test(value) ? isValid : ALLOW_A_0_9;

export const validateBeneficiary: ValidationFunc<string> = (value: string) =>
  !beneficiary.test(value) ? isValid : ALLOW_A_0_9;

export const validatePassword: ValidationFunc<string> = (value: string) =>
  !password.test(value) ? isValid : 'Wrong password. please try again';

export const isUpperLatter: ValidationFunc<string> = (value: string) =>
  /[A-Z]/.test(value) ? isValid : 'Must be at least one uppercase letter';

export const isDigit: ValidationFunc<string> = (value: string) =>
  /[0-9]/.test(value) ? isValid : 'Must be at least one digit';

export const isCharacters: ValidationFunc<string> = (value: string) => {
  const char = value.replace(/[a-zA-Z0-9]/gi, '');
  /* eslint no-useless-escape: 0 */
  return !!char[0] && !passwordChar.test(char)
    ? isValid
    : 'Must be at least one of the following characters: ( . , : ; ? ! * + % - < > @ [ ] { } /  _ {} $ # )';
};

export const commentReplace: ValidationFunc<string> = (value: string) => value.replace(comment, '');

const alolowedNameSymbols = /[a-zA-Z0-9 .]/;
const allowedSymbolsErrorMessage = 'Invalid symbols';

export const allowedSymbols = (value: any) => {
  const isSatisfy = value && alolowedNameSymbols.test(value);
  return !isSatisfy ? allowedSymbolsErrorMessage : undefined;
};

const maxNameLengthSymbols = 21;
const maxNameLengthErrorMessage = `The card holder name must be no longer than ${maxNameLengthSymbols} symbol`;
export const maxNameLength = (value: string) => {
  const valueLength: number = propOr(0, 'length')(value);
  const isSatisfy = valueLength <= maxNameLengthSymbols;
  return !isSatisfy ? maxNameLengthErrorMessage : undefined;
};

// This validation should be added only in case we have restrictions
// on having multiple cards of a given PorductType
export const alreadyHaveCardTiedToPhoneNumber = memoizeOne(
  (productType: CardProductType, phoneNumber: string, restrictClientPhoneCard: boolean) => {
    const errorMessage = `You already have ${productType} card, try to change card type`;
    return (value: any) => {
      if (restrictClientPhoneCard) {
        const isSatisfy = value && value !== phoneNumber;
        return !isSatisfy ? errorMessage : undefined;
      }
      return undefined;
    };
  },
);

// to require turning boolan field checked
const requireAcceptanceErrorMessage = `You must agree to continue`;
export const requiredAcceptance: Validator = (value: any) => {
  return value ? undefined : requireAcceptanceErrorMessage;
};
