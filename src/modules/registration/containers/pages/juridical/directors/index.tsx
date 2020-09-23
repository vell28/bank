import { connect } from 'react-redux';

// import { IStore } from '../../../../../store/types';
import { Directors } from '../../../../components/pages/juridical/directors';
import { pageComplete } from '../../../../models/pages/juridical/directors/redux/actions';

// const mapStateToProps = (store: IStore) => {
//   return {};
// };

const mapDispatchToProps = (dispatch: any) => ({
  pageComplete: () => dispatch(pageComplete()),
});

// export default connect(mapStateToProps, mapDispatchToProps)(Directors);
export default connect(null, mapDispatchToProps)(Directors);
