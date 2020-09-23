import React from 'react';
import { useTranslation } from 'react-i18next';

import { SIGNIN_PATH } from 'containers/routing/utils';
import { REGISTRATION_PATH } from 'modules/registration/models/registration/entities/const';
import { languagesList, changeLanguage, getActiveLanguageKey } from 'modules/localization';
import { Select } from '../../common/select';
import { SignLink } from '../../common/button/signin/elements';
import {
  CountrySelection, LanguageLabel, SignInButtons, SupportLink
} from './elements';

export const AuthorizationPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <CountrySelection>
        <LanguageLabel>{t('Choose you language:')}</LanguageLabel>
        <Select options={languagesList} onChange={changeLanguage} activeKey={getActiveLanguageKey()} />
      </CountrySelection>
      <SignInButtons>
        <SignLink to={SIGNIN_PATH} arrow success>
          {t('sign in')}
        </SignLink>
        <SignLink to={REGISTRATION_PATH} arrow>
          {t('new customer')}
        </SignLink>
      </SignInButtons>
      <SupportLink to="#">{t('support')}</SupportLink>
    </>
  );
};
