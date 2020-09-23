import {
  validateDate,
  isValid,
  isRequired,
  isValidMinLength,
  isPapaya,
  isCharacters,
} from 'utils/redux-form/redux-form';

describe('redux-form utils tests', () => {
  test('{mmyy} validate card date', () => {
    const emptyDate = validateDate('');
    expect(emptyDate).not.toEqual(isValid);

    const notValidFirstMonthLetter = validateDate('2');
    expect(notValidFirstMonthLetter).not.toEqual(isValid);

    const notValidMonth = validateDate('13');
    expect(notValidMonth).not.toEqual(isValid);

    const expiredDate = validateDate('12/15');
    expect(expiredDate).not.toEqual(isValid);

    const validDate = validateDate('12/30');
    expect(validDate).toEqual(isValid);
  });
  test('isCharacters field data', () => {
    const value1 = isCharacters('aa1()ss.,A[$');
    expect(value1).toEqual(isValid);

    const value2 = isCharacters('as1A ');
    expect(value2).not.toEqual(isValid);
  });
  test('isRequired field data', () => {
    const hasValue = isRequired('password')('123');
    expect(hasValue).toEqual(isValid);

    const emptyValue = isRequired('password')('');
    expect(emptyValue).not.toEqual(isValid);

    const missValue = isRequired('password')(null);
    expect(missValue).not.toEqual(isValid);
  });

  test('isValidMinLength field data', () => {
    const lessLength = isValidMinLength(4)('123');
    expect(lessLength).not.toEqual(isValid);

    const moreLength = isValidMinLength(2)('123');
    expect(moreLength).toEqual(isValid);

    const requiredLength = isValidMinLength(4)('1234');
    expect(requiredLength).toEqual(isValid);
  });

  test('validate isPapaya card number', () => {
    const validNumberButNotPapaya = isPapaya('4278602000002285');
    expect(validNumberButNotPapaya).not.toEqual(isValid);

    const not16digit = isPapaya('52776020000022');
    expect(not16digit).not.toEqual(isValid);

    const validNumber = isPapaya('5277602000002285');
    expect(validNumber).toEqual(isValid);
  });
});
