import { connect } from 'react-redux';

import { RouteComponentProps, withRouter } from 'react-router-dom';
import { CurrencyCodes } from 'modules/currencies';

import { IStore } from 'modules/store/types';
import { getRouteParamByName } from '../../routing/utils';
import TopUpPublicPage from '../../../components/top-up-public';

export const mapStateToProps = (store: IStore, ownProps: RouteComponentProps) => {
  const id = getRouteParamByName('id', ownProps);
  return {
    name: 'Jessica Smith',
    amount: 100,
    description: 'Loan Charges',
    currency: CurrencyCodes.EUR,
    id,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  loadRequest: (id: string) => dispatch(id),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopUpPublicPage));
