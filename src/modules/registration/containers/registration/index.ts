import { connect } from 'react-redux';

import { IStore } from 'modules/store/types';
import { Registration } from '../../components/registration';
import { getPageCompleteSelector } from '../../models/registration/redux/selectors';

const mapStateToProps = (store: IStore) => ({
  redirect: getPageCompleteSelector(store)(store),
});

export default connect(mapStateToProps)(Registration);
