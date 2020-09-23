import { pathOr } from 'ramda';
import { connect } from 'react-redux';

import { IStore } from 'modules/store/types';
import { Head } from '../../components/head';
import { back, close } from '../../models/registration/redux/actions';
import { IHeader, HeaderSelector } from '../../models/registration/entities';
import { getCurrentStep } from '../../models/registration/redux/selectors';

const defaultHeaderSelector = (): IHeader => ({
  prefix: undefined,
  title: undefined,
});

const mapStateToProps = (store: IStore) => {
  const step = getCurrentStep(store);
  const headerSelector: HeaderSelector = pathOr(defaultHeaderSelector, ['headerSelector'])(step);
  return {
    header: headerSelector(store),
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  back: () => dispatch(back()),
  close: () => dispatch(close()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Head);
