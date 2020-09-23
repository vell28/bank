import { goBack } from 'connected-react-router';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { NewAccount } from 'components/operations/new-account';
import {
  IAccountData,
  createAccount,
} from 'models/operations/new-account/redux/actions';

export const NEW_ACCOUNT_MODAL = 'NEW_ACCOUNT_MODAL';
export type NewAccountModalType = 'NEW_ACCOUNT_MODAL';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createAccount: (account: IAccountData) => {
    dispatch(createAccount(account));
    dispatch(goBack());
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(NewAccount);
