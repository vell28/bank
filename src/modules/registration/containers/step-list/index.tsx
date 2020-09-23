import { connect } from 'react-redux';

import { IStore } from 'modules/store/types';
import { StepList } from '../../components/step-list';
import { getCurrentVariantSteps } from '../../models/registration/redux/selectors';

const mapStateToProps = (store: IStore) => ({
  steps: getCurrentVariantSteps(store),
});

export default connect(mapStateToProps)(StepList);
