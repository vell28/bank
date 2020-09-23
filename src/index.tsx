import React from 'react';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom';
import { withTranslation } from 'react-i18next';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store, history } from 'modules/store';
import './modules/localization';
import { mainDarkTheme } from 'modules/themes';
import {
  ERROR_PATH, TOPUP_PUBLIC_PATH, AUTHORIZATION_PATH, userIsAuthenticated
} from 'containers/routing/utils';
import { REGISTRATION_PATH } from 'modules/registration/models/registration/entities/const';

import { ErrorBoundary } from 'components/errors/error-boundary';
import { GlobalStyle } from 'modules/global-styles';
import App from './containers/app';
import TopUpPublicPage from './containers/pages/topup-public';
import SignPages from './containers/routing/routes/authorization';
import AppErrorsPage from './containers/pages/errors';
import RegistrationPage from './modules/registration/containers/registration';

import './modules/app-background-tasks';

const Index: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={mainDarkTheme}>
            <ErrorBoundary>
              <GlobalStyle />
              <Switch>
                <Route path={AUTHORIZATION_PATH} component={SignPages} />
                <Route path={ERROR_PATH} component={AppErrorsPage} exact />
                <Route path={TOPUP_PUBLIC_PATH} component={TopUpPublicPage} exact />
                <Route path={REGISTRATION_PATH} component={RegistrationPage} />
                <Route path="*" component={userIsAuthenticated(App)} />
              </Switch>
            </ErrorBoundary>
          </ThemeProvider>
        </PersistGate>
      </ConnectedRouter>
    </Provider>
  );
};

const WithTranslate = withTranslation()(Index);

ReactDOM.render(<WithTranslate />, document.getElementById('root'));
