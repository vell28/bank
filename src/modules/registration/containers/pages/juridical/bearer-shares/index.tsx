import { connect } from 'react-redux';

// import { IStore } from '../../../../../store/types';
import { BearerShares } from '../../../../components/pages/juridical/bearer-shares';
import { pageComplete } from '../../../../models/pages/juridical/bearer-shares/redux/actions';

// const mapStateToProps = (store: IStore) => {
//   return {};
// };

const mapDispatchToProps = (dispatch: any) => ({
  pageComplete: () => dispatch(pageComplete()),
});

// export default connect(mapStateToProps, mapDispatchToProps)(BearerShares);
export default connect(null, mapDispatchToProps)(BearerShares);
