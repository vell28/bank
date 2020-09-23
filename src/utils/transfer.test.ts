import { CurrencyCodes } from 'modules/currencies';
import { isSwiftTransfer } from './transfer';

describe('isSwiftTransfer', () => {
  test('should determine if currency and iban are of swift transfer values', () => {
    expect(isSwiftTransfer(CurrencyCodes.EUR, 'LVxxx')).toBe(false);
    expect(isSwiftTransfer(CurrencyCodes.EUR, 'RUxxx')).toBe(true);
    expect(isSwiftTransfer(CurrencyCodes.EUR, '')).toBe(true);
    expect(isSwiftTransfer('xxx', 'LVxxx')).toBe(true);
    expect(isSwiftTransfer('', 'LVxxx')).toBe(true);
    expect(isSwiftTransfer('', '')).toBe(true);
  });
});
