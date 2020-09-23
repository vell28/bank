import { connect } from 'react-redux';

// import { IStore } from '../../../../../store/types';
import { ProxyUpload } from '../../../../components/pages/juridical/proxy-upload';
import { pageComplete } from '../../../../models/pages/juridical/proxy-upload/redux/actions';

// const mapStateToProps = (store: IStore) => {
//   return {};
// };

const mapDispatchToProps = (dispatch: any) => ({
  pageComplete: () => dispatch(pageComplete()),
});

// export default connect(mapStateToProps, mapDispatchToProps)(ProxyUpload);
export default connect(null, mapDispatchToProps)(ProxyUpload);
