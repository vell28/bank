import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BankingAccountPage from '../../pages/account-banking-page';
import { BankingPage } from '../../pages';

import { PATHS_CONFIG } from '../utils';

export default () => (
  <Switch>
    <Route path={PATHS_CONFIG.banking.path} component={BankingPage} exact />
    <Route path={PATHS_CONFIG.banking_account.path} component={BankingAccountPage} />
  </Switch>
);
