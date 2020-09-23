import { connect } from 'react-redux';

import { transferToContactInit } from 'models/operations/transfer/redux/actions/contact';
import { getCurrentCurrencyBalance } from 'models/organizations/redux/selectors';

import { IStore } from 'modules/store/types';
import { updateTransferValue, isTransferLoading } from '../../../../../models/operations/transfer';
import SelectAmountStep, { IAmountFormData } from '../../../../../components/operations/steps/step-2-select-amount';

const mapDispatchToProps = (dispatch: any) => ({
  onNext: async ({ value }: IAmountFormData) => {
    await dispatch(updateTransferValue(value));
    dispatch(transferToContactInit());
  },
});

export const mapStateToProps = (store: IStore) => ({
  balance: getCurrentCurrencyBalance(store),
  isLoading: isTransferLoading(store),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectAmountStep);
