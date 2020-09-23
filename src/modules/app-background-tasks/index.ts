import { idleLogout } from './idleLogout';
import { backgroundUpdateAccountsBalance, backgroundUpdateAccountTask } from './accounts';

// TODO: add here loading profile, loading history, etc..
export default {
  accounts: backgroundUpdateAccountTask(),
  accountsBalance: backgroundUpdateAccountsBalance(),
  idle: idleLogout(),
};
