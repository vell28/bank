import React from 'react';

import { Route, Switch } from 'react-router-dom';

import {
  BonusesPage,
  InsurancePage,
  InvestmentsPage,
} from '../pages';

import BusinessPage from '../../containers/pages/business-page';

import NewAccountPage from '../pages/new-account-page';
import ProfilePage from '../pages/profile-page';

import BankingRoutes from './routes/banking';
import { PATHS_CONFIG } from './utils';

const {
  banking,
  banking_account,
  new_account,
  bonuses,
  cryptotrading,
  insurance,
  business,
  profile,
} = PATHS_CONFIG;

export default () => (
  <Switch>
    <Route
      path={[banking.path, banking_account.path]}
      component={BankingRoutes}
      exact
    />
    <Route path={new_account.path} component={NewAccountPage} exact />
    <Route path={bonuses.path} component={BonusesPage} exact />
    <Route path={cryptotrading.path} component={InvestmentsPage} exact />
    <Route path={insurance.path} component={InsurancePage} exact />
    <Route path={business.path} component={BusinessPage} exact />
    <Route path={profile.path} component={ProfilePage} exact />
  </Switch>
);
