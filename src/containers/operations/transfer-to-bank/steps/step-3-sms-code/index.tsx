import { connect } from 'react-redux';

import { getConfirmationCodeLength } from 'models/operations/sms-confirmation/redux/selectors';
import { transferToBankConfirm } from 'models/operations/transfer/redux/actions/bank';
import { getCurrentAccount } from 'models/organizations/redux/selectors';

import { IStore } from 'modules/store/types';
import TransferStep3 from '../../../../../components/operations/steps/step-3-sms-code';
import { isTransferLoading } from '../../../../../models/operations/transfer';

const mapDispatchToProps = (dispatch: any) => ({
  onNext: ({ code }: { code: string }) => {
    dispatch(transferToBankConfirm(code));
  },
});

export const mapStateToProps = (store: IStore) => ({
  account: getCurrentAccount(store),
  codeLength: getConfirmationCodeLength(store),
  isLoading: isTransferLoading(store),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransferStep3);
