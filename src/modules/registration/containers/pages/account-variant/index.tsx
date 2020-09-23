import { connect } from 'react-redux';

// import { IStore } from '../../../../store/types';
import { AccountVariant } from '../../../components/pages/account-variant';
import { physicalNext, juridicalNext } from '../../../models/pages/account-variant/redux/actions';

// const mapStateToProps = (store: IStore) => {
//   return {};
// };

const mapDispatchToProps = (dispatch: any) => ({
  physicalNext: () => dispatch(physicalNext()),
  juridicalNext: () => dispatch(juridicalNext()),
});

// export default connect(mapStateToProps, mapDispatchToProps)(AccountVariant);
export default connect(null, mapDispatchToProps)(AccountVariant);
