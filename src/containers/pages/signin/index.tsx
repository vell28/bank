import { connect } from 'react-redux';
import { change } from 'redux-form';

import { passwordCheckAction } from 'models/authorization/redux/actions';
import { isLoading, hasError } from 'models/authorization/redux/selectors';
import { IStore } from 'modules/store/types';
import { removeSpaces } from 'utils/removeSpaces';
import SignInForm from '../../../components/redux-form/signin';

const mapDispatchToProps = (dispatch: any) => ({
  onSubmit: ({ code, phone, password }: any) =>
    dispatch(passwordCheckAction({ password, phone: removeSpaces(`${code}${phone}`) })),
  onReduxFormChange: (form: string, field: string, value: string) => dispatch(change(form, field, value)),
});

export const mapStateToProps = (store: IStore) => {
  return {
    isLoading: isLoading(store),
    hasError: hasError(store),
    codeLength: 6,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
