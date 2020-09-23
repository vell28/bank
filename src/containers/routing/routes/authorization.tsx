import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { History } from 'history';

import { AuthorizationPageWrapper } from 'components/pages/authorization/components/authorization-wrapper';
import { AuthorizationPage } from 'components/pages/authorization';
import SignIn from '../../pages/signin';
import SignInConfirm from '../../pages/signin-confirm';

import { PATHS_CONFIG } from '../utils';

interface IProps {
  history: History;
}

export default ({ history }: IProps) => {
  const { location, goBack } = history;
  const isShowBack = location.pathname !== PATHS_CONFIG.authorization.path;

  return (
    <AuthorizationPageWrapper handleBack={goBack} useBackBtn={isShowBack}>
      <Switch>
        <Route path={PATHS_CONFIG.authorization.path} component={AuthorizationPage} exact />
        <Route path={PATHS_CONFIG.signin.path} component={SignIn} exact />
        <Route path={PATHS_CONFIG.signin_confirm.path} component={SignInConfirm} exact />
      </Switch>
    </AuthorizationPageWrapper>
  );
};
