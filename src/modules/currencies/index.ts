export enum CurrencyCodes {
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
  JPY = 'JPY',
  RUB = 'RUB',
  CHF = 'CHF',
  BTC = 'BTC',
  NZD = 'NZD',
  DKK = 'DKK',
  SGD = 'SGD',
  HKD = 'HKD',
  PLN = 'PLN',
  AUD = 'AUD',
  SEK = 'SEK',
  NOK = 'NOK',
  CZK = 'CZK',
  MXN = 'MXN',
  CNH = 'CNH',
}

export type CurrencyCodeType =
  | CurrencyCodes.EUR
  | CurrencyCodes.GBP
  | CurrencyCodes.JPY
  | CurrencyCodes.RUB
  | CurrencyCodes.USD
  | CurrencyCodes.CHF
  | CurrencyCodes.BTC
  | CurrencyCodes.NZD
  | CurrencyCodes.DKK
  | CurrencyCodes.SGD
  | CurrencyCodes.HKD
  | CurrencyCodes.PLN
  | CurrencyCodes.AUD
  | CurrencyCodes.SEK
  | CurrencyCodes.NOK
  | CurrencyCodes.CZK
  | CurrencyCodes.MXN
  | CurrencyCodes.CNH;

export enum CurrencyNames {
  USD = 'Dollar',
  EUR = 'Euro',
  GBP = 'Pound Sterling',
  JPY = 'Yen',
  RUB = 'Ruble',
  CHF = 'Swiss franc',
  BTC = 'Bitcoin',
  NZD = 'NZD',
  DKK = 'DKK',
  SGD = 'SGD',
  HKD = 'HKD',
  PLN = 'PLN',
  AUD = 'AUD',
  SEK = 'SEK',
  NOK = 'NOK',
  CZK = 'CZK',
  MXN = 'MXN',
  CNH = 'CNH',
}

export type CurrencyNameType =
  | CurrencyNames.USD
  | CurrencyNames.EUR
  | CurrencyNames.GBP
  | CurrencyNames.JPY
  | CurrencyNames.RUB
  | CurrencyNames.CHF
  | CurrencyNames.BTC
  | CurrencyNames.NZD
  | CurrencyNames.DKK
  | CurrencyNames.SGD
  | CurrencyNames.HKD
  | CurrencyNames.PLN
  | CurrencyNames.AUD
  | CurrencyNames.SEK
  | CurrencyNames.NOK
  | CurrencyNames.CZK
  | CurrencyNames.MXN
  | CurrencyNames.CNH;

export enum CurrencySymbols {
  USD = '$',
  EUR = '€',
  GBP = '£',
  JPY = '¥',
  RUB = '₽',
  CHF = 'CHF',
  BTC = 'BTC',
  NZD = 'NZD',
  DKK = 'DKK',
  SGD = 'SGD',
  HKD = 'HKD',
  PLN = 'PLN',
  AUD = 'AUD',
  SEK = 'SEK',
  NOK = 'NOK',
  CZK = 'CZK',
  MXN = 'MXN',
  CNH = 'CNH',
}

export type CurrencySymbolType =
  | CurrencySymbols.USD
  | CurrencySymbols.EUR
  | CurrencySymbols.GBP
  | CurrencySymbols.JPY
  | CurrencySymbols.RUB
  | CurrencySymbols.CHF
  | CurrencySymbols.BTC
  | CurrencySymbols.NZD
  | CurrencySymbols.DKK
  | CurrencySymbols.SGD
  | CurrencySymbols.HKD
  | CurrencySymbols.PLN
  | CurrencySymbols.AUD
  | CurrencySymbols.SEK
  | CurrencySymbols.NOK
  | CurrencySymbols.CZK
  | CurrencySymbols.MXN
  | CurrencySymbols.CNH;

export const CURRENCIES_IN_PROJECT: ICurrency[] = [
  {
    name: CurrencyNames.USD,
    symbol: CurrencySymbols.USD,
    code: CurrencyCodes.USD,
  },
  {
    name: CurrencyNames.EUR,
    symbol: CurrencySymbols.EUR,
    code: CurrencyCodes.EUR,
  },
  {
    name: CurrencyNames.GBP,
    symbol: CurrencySymbols.GBP,
    code: CurrencyCodes.GBP,
  },
  {
    name: CurrencyNames.JPY,
    symbol: CurrencySymbols.JPY,
    code: CurrencyCodes.JPY,
  },
  {
    name: CurrencyNames.RUB,
    symbol: CurrencySymbols.RUB,
    code: CurrencyCodes.RUB,
  },
  {
    name: CurrencyNames.CHF,
    symbol: CurrencySymbols.CHF,
    code: CurrencyCodes.CHF,
  },
  {
    name: CurrencyNames.BTC,
    symbol: CurrencySymbols.BTC,
    code: CurrencyCodes.BTC,
  },
  {
    name: CurrencyNames.NZD,
    symbol: CurrencySymbols.NZD,
    code: CurrencyCodes.NZD,
  },
  {
    name: CurrencyNames.DKK,
    symbol: CurrencySymbols.DKK,
    code: CurrencyCodes.DKK,
  },
  {
    name: CurrencyNames.SGD,
    symbol: CurrencySymbols.SGD,
    code: CurrencyCodes.SGD,
  },
  {
    name: CurrencyNames.HKD,
    symbol: CurrencySymbols.HKD,
    code: CurrencyCodes.HKD,
  },
  {
    name: CurrencyNames.PLN,
    symbol: CurrencySymbols.PLN,
    code: CurrencyCodes.PLN,
  },
  {
    name: CurrencyNames.AUD,
    symbol: CurrencySymbols.AUD,
    code: CurrencyCodes.AUD,
  },
  {
    name: CurrencyNames.SEK,
    symbol: CurrencySymbols.SEK,
    code: CurrencyCodes.SEK,
  },
  {
    name: CurrencyNames.NOK,
    symbol: CurrencySymbols.NOK,
    code: CurrencyCodes.NOK,
  },
  {
    name: CurrencyNames.CZK,
    symbol: CurrencySymbols.CZK,
    code: CurrencyCodes.CZK,
  },
  {
    name: CurrencyNames.MXN,
    symbol: CurrencySymbols.MXN,
    code: CurrencyCodes.MXN,
  },
  {
    name: CurrencyNames.CNH,
    symbol: CurrencySymbols.CNH,
    code: CurrencyCodes.CNH,
  },
];

export interface ICurrency {
  name: CurrencyNameType;
  symbol: CurrencySymbolType;
  code: CurrencyCodeType;
}

export interface ICurrencyValue {
  type: ICurrency;
  value: string;
}
