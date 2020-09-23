import { fetchOrganizations, updateAllAccountBalance } from 'models/organizations/redux/actions';

import worker from '../background-worker';
import { store } from '../store';

// 10 minutes, for develop 100 мин
// eslint-disable-next-line no-undef
const ACCOUNT_UPDATE_INTERVAL = Number(process.env.REACT_APP_ACCOUNT_UPDATE_INTERVAL) * 60 * 1000;
// 2 minutes, for develop 20 мин
// eslint-disable-next-line no-undef
const ACCOUNTS_BALANCE_UPDATE_INTERVAL = Number(process.env.REACT_APP_ACCOUNTS_BALANCE_UPDATE_INTERVAL) * 60 * 1000;

export const backgroundUpdateAccountTask = () => {
  const task = () => {
    store.dispatch(fetchOrganizations());
  };
  return worker.createTask({
    task,
    interval: ACCOUNT_UPDATE_INTERVAL,
    name: 'Background task of updating organizations data',
  });
};

export const backgroundUpdateAccountsBalance = () => {
  const task = () => {
    updateAllAccountBalance(store.dispatch, store.getState);
  };
  return worker.createTask({
    task,
    interval: ACCOUNTS_BALANCE_UPDATE_INTERVAL,
    name: 'Background task of updating organizations balance',
  });
};
