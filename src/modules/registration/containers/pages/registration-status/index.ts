import { connect } from 'react-redux';

import { IStore } from 'modules/store/types';
import { StatusPageComponent } from '../../../components/pages/registration-status';
import { getRegistrationPhoneData } from '../../../models/pages/physical/phone-number/redux/selectors';

const mapStateToProps = (state: IStore) => ({
  data: getRegistrationPhoneData(state),
});

export default connect(mapStateToProps)(StatusPageComponent);
