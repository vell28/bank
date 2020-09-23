import { connect } from 'react-redux';

import { LoginStatus } from '../../../components/pages/login-status';
import { continueRegistration, openNewForm } from '../../../models/pages/login-status/redux/actions';

const mapDispatchToProps = (dispatch: any) => ({
  continueRegistration: () => dispatch(continueRegistration()),
  openNewForm: () => dispatch(openNewForm()),
});

export default connect(null, mapDispatchToProps)(LoginStatus);
