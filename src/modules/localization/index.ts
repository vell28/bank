// @flow

import i18n from 'i18next';
import { find, test } from 'ramda';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// ToDo: need sync to existed locales
import { de, en } from './locales';
import { ILanguage, LangKeysType, LanguageKeys } from './entities';

export const languagesList: ILanguage[] = [
  { key: LanguageKeys.EN, nativeName: 'English' },
  { key: LanguageKeys.DE, nativeName: 'Deutsch' },
];

export const languagesMap = {
  [LanguageKeys.DE]: 'Deutsch',
  [LanguageKeys.EN]: 'English',
  [LanguageKeys.RU]: 'Russian',
};

export const getActiveLanguageKey = (activeLanguage: string = i18n.language): LangKeysType => {
  // When localStorage is empty, activeLanguage='en-GB'
  const item = find((lang: ILanguage) => test(new RegExp(lang.key, 'gi'), activeLanguage), languagesList);
  if (item) {
    return item.key;
  }
  return LanguageKeys.EN;
};

export const changeLanguage = (lng: LangKeysType) => {
  window.location.reload();
  i18n.changeLanguage(lng);
};

/**
 * Detector Options
 * https://github.com/i18next/i18next-browser-languageDetector#detector-options
 */
const detection = {
  caches: ['localStorage'],
};

/**
 * ISO 639
 * https://www.iso.org/iso-639-language-codes.html
 * http://www.loc.gov/standards/iso639-2/php/code_list.php
 */
i18n
  // .use(Locize)
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    ns: ['common'],
    defaultNS: 'common',

    resources: { en, de },

    fallbackLng: LanguageKeys.EN,

    nsSeparator: '::',
    keySeparator: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    detection,
  });

export default i18n;
