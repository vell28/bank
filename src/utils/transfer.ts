import { CurrencyCodes } from 'modules/currencies';
import { SEPA_COUNTRIES_CODES } from 'modules/countries';

const getCountryCodeByIban = (iban: string): string => iban.slice(0, 2);

export const isSwiftTransfer = (currency: string, iban: string): boolean => {
  const country = getCountryCodeByIban(iban);
  return currency !== CurrencyCodes.EUR || !SEPA_COUNTRIES_CODES.includes(country);
};
