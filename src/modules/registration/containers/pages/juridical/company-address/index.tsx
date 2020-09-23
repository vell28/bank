import { connect } from 'react-redux';

// import { IStore } from '../../../../../store/types';
import { CompanyAddress } from '../../../../components/pages/juridical/company-address';
import { pageComplete } from '../../../../models/pages/juridical/company-address/redux/actions';

// const mapStateToProps = (store: IStore) => {
//   return {};
// };

const mapDispatchToProps = (dispatch: any) => ({
  pageComplete: () => dispatch(pageComplete()),
});

// export default connect(mapStateToProps, mapDispatchToProps)(CompanyAddress);
export default connect(null, mapDispatchToProps)(CompanyAddress);
