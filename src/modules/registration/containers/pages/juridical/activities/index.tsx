import { connect } from 'react-redux';

// import { IStore } from '../../../../../store/types';
import { Activities } from '../../../../components/pages/juridical/activities';
import { pageComplete } from '../../../../models/pages/juridical/activities/redux/actions';

// const mapStateToProps = (store: IStore) => {
//   return {};
// };

const mapDispatchToProps = (dispatch: any) => ({
  pageComplete: () => dispatch(pageComplete()),
});

// export default connect(mapStateToProps, mapDispatchToProps)(Activities);
export default connect(null, mapDispatchToProps)(Activities);
