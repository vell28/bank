export enum LanguageKeys {
  EN = 'en',
  DE = 'de',
  RU = 'ru',
}

export type LangKeysType = LanguageKeys.EN | LanguageKeys.DE | LanguageKeys.RU;

export interface ILanguage {
  key: LangKeysType;
  nativeName: string;
}
