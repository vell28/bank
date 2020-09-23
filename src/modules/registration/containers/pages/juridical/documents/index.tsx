import { connect } from 'react-redux';

// import { IStore } from '../../../../../store/types';
import { Documents } from '../../../../components/pages/juridical/documents';
import { pageComplete } from '../../../../models/pages/juridical/documents/redux/actions';

// const mapStateToProps = (store: IStore) => {
//   return {};
// };

const mapDispatchToProps = (dispatch: any) => ({
  pageComplete: () => dispatch(pageComplete()),
});

// export default connect(mapStateToProps, mapDispatchToProps)(Documents);
export default connect(null, mapDispatchToProps)(Documents);
