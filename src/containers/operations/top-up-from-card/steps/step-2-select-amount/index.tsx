import { connect } from 'react-redux';
import { topUpCardInitAction } from 'models/operations/top-up/redux/actions/card';

import { IStore } from 'modules/store/types';
import { getCurrentCurrencyBalance } from 'models/organizations/redux/selectors';
import SelectAmountStep, { IAmountFormData } from '../../../../../components/operations/steps/step-2-select-amount';
import { updateTopUp, isTopUpLoading } from '../../../../../models/operations/top-up';

const mapDispatchToProps = (dispatch: any) => ({
  onNext: async ({ value }: IAmountFormData) => {
    await dispatch(updateTopUp(value));
    dispatch(topUpCardInitAction);
  },
});

export const mapStateToProps = (store: IStore) => ({
  initialValues: {
    value: '',
  },
  balance: getCurrentCurrencyBalance(store),
  isLoading: isTopUpLoading(store),
  title: 'Top Up / Card',
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectAmountStep);
