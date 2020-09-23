import { connect } from 'react-redux';

// import { IStore } from '../../../../../store/types';
import { Owners } from '../../../../components/pages/juridical/owners';
import { pageComplete } from '../../../../models/pages/juridical/owners/redux/actions';

// const mapStateToProps = (store: IStore) => {
//   return {};
// };

const mapDispatchToProps = (dispatch: any) => ({
  pageComplete: () => dispatch(pageComplete()),
});

// export default connect(mapStateToProps, mapDispatchToProps)(Owners);
export default connect(null, mapDispatchToProps)(Owners);
