import { connect } from 'react-redux';

import { IStore } from 'modules/store/types';
import { Preattention } from '../../../components/pages/preattention';
import { pageComplete } from '../../../models/pages/preattention/redux/actions';
import { getRegistrationVariant } from '../../../models/registration/redux/selectors';

const mapStateToProps = (store: IStore) => {
  return {
    registrationVariant: getRegistrationVariant(store),
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  pageComplete: () => dispatch(pageComplete()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Preattention);
