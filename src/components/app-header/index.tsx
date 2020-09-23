import React from 'react';
import { useTranslation } from 'react-i18next';
import { equals } from 'ramda';

import { ILanguage, LangKeysType } from 'modules/localization/entities';
import { PATHS_CONFIG } from 'containers/routing/utils';
import {
  Header,
  HeaderWrap,
  HeaderLogo,
  HeaderNav,
  HeaderMenu,
  MenuItem,
  HeaderLngSelector,
  LinkChildren,
} from './elements';
import logo from './logo.svg';
import { HeaderLink, Anchor } from '../common/header-menu-link/elements';
import { LanguageSelector } from '../common/language-selector';

interface IHeaderProps {
  activeLng: LangKeysType;
  languages: ILanguage[];
  onLngChange: (lang: LangKeysType) => void;
  activeIndex: number;
}

export const AppHeader: React.FC<IHeaderProps> = ({
  languages,
  activeLng,
  onLngChange,
  activeIndex,
}) => {
  const { t } = useTranslation();
  return (
    <Header>
      <HeaderWrap>
        <HeaderLogo>
          <LinkChildren
            to="/"
          >
            <img src={logo} alt="logo" />
          </LinkChildren>
        </HeaderLogo>
        <HeaderNav>
          <HeaderMenu>
            <MenuItem>
              <HeaderLink
                to={PATHS_CONFIG.banking.path}
                data-active={equals(0, activeIndex)}
              >
                {t(PATHS_CONFIG.banking.name)}
              </HeaderLink>
            </MenuItem>
            <MenuItem>
              <HeaderLink
                to={PATHS_CONFIG.bonuses.path}
                data-active={equals(1, activeIndex)}
              >
                {t(PATHS_CONFIG.bonuses.name)}
              </HeaderLink>
            </MenuItem>
            <MenuItem>
              <HeaderLink
                to={PATHS_CONFIG.business.path}
                data-active={equals(2, activeIndex)}
              >
                {t(PATHS_CONFIG.business.name)}
              </HeaderLink>
            </MenuItem>
            <MenuItem>
              <Anchor href={PATHS_CONFIG.cryptotrading.path} target="_blank">
                {t(PATHS_CONFIG.cryptotrading.name)}
              </Anchor>
            </MenuItem>
            <MenuItem>
              <HeaderLink
                to={PATHS_CONFIG.insurance.path}
                data-active={equals(4, activeIndex)}
              >
                {t(PATHS_CONFIG.insurance.name)}
              </HeaderLink>
            </MenuItem>
            <MenuItem>
              <HeaderLink
                to={PATHS_CONFIG.profile.path}
                data-active={equals(5, activeIndex)}
              >
                {t(PATHS_CONFIG.profile.name)}
              </HeaderLink>
            </MenuItem>
          </HeaderMenu>
        </HeaderNav>
        <HeaderLngSelector>
          <LanguageSelector
            languages={languages}
            onLngChange={onLngChange}
            activeLng={activeLng}
          />
        </HeaderLngSelector>
      </HeaderWrap>
    </Header>
  );
};
