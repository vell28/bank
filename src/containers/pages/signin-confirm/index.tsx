import { connect } from 'react-redux';

import { getPhone, hasError, isLoading } from 'models/authorization/redux/selectors';
import { signIn, authRequestCodeAction } from 'models/authorization/redux/actions';
import { getConfirmationFailedAttempts } from 'models/operations/sms-confirmation/redux/selectors';

import { IStore } from 'modules/store/types';
import SignInConfirmForm from '../../../components/redux-form/signin-confirm';

const mapDispatchToProps = (dispatch: any) => ({
  onSubmit: (data: any) => dispatch(signIn(data)),
  onResend: () => dispatch(authRequestCodeAction),
});

export const mapStateToProps = (store: IStore) => {
  return {
    phone: getPhone(store),
    isLoading: isLoading(store),
    hasError: hasError(store),
    attempts: getConfirmationFailedAttempts(store),
    codeLength: 6,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInConfirmForm);
