import { connect } from 'react-redux';

import { getCurrentCurrencyBalance } from 'models/organizations/redux/selectors';
import { transferToBankInit } from 'models/operations/transfer/redux/actions/bank';
import { IStore } from 'modules/store/types';
import SelectAmountStep, { IAmountFormData } from '../../../../../components/operations/steps/step-2-select-amount';

import { updateTransferValue, isTransferLoading } from '../../../../../models/operations/transfer';

const mapDispatchToProps = (dispatch: any) => ({
  onNext: async ({ value }: IAmountFormData) => {
    await dispatch(updateTransferValue(value));
    dispatch(transferToBankInit());
  },
});

export const mapStateToProps = (store: IStore) => ({
  balance: getCurrentCurrencyBalance(store),
  isLoading: isTransferLoading(store),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectAmountStep);
