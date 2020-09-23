import { connect } from 'react-redux';

// import { IStore } from '../../../../../store/types';
import { BasicCompanyData } from '../../../../components/pages/juridical/basic-company-data';
import { pageComplete } from '../../../../models/pages/juridical/basic-company-data/redux/actions';

// const mapStateToProps = (store: IStore) => {
//   return {};
// };

const mapDispatchToProps = (dispatch: any) => ({
  pageComplete: () => dispatch(pageComplete()),
});

// export default connect(mapStateToProps, mapDispatchToProps)(BasicCompanyData);
export default connect(null, mapDispatchToProps)(BasicCompanyData);
