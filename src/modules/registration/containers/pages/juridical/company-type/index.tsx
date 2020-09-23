import { connect } from 'react-redux';

// import { IStore } from '../../../../../store/types';
import { CompanyType } from '../../../../components/pages/juridical/company-type';
import { pageComplete } from '../../../../models/pages/juridical/company-type/redux/actions';

// const mapStateToProps = (store: IStore) => {
//   return {};
// };

const mapDispatchToProps = (dispatch: any) => ({
  pageComplete: () => dispatch(pageComplete()),
});

// export default connect(mapStateToProps, mapDispatchToProps)(CompanyType);
export default connect(null, mapDispatchToProps)(CompanyType);
