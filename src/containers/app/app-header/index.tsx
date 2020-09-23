import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { AppHeader } from 'components/app-header';
import { languagesList, getActiveLanguageKey, changeLanguage } from 'modules/localization';
import { mainMenuPaths, getActiveIndex } from '../../routing/utils';

export const AppHeaderContainer: React.FC<RouteComponentProps> = ({ location }) => (
  <AppHeader
    languages={languagesList}
    activeLng={getActiveLanguageKey()}
    onLngChange={changeLanguage}
    activeIndex={getActiveIndex(location.pathname, mainMenuPaths)}
  />
);

export default withRouter(AppHeaderContainer);
