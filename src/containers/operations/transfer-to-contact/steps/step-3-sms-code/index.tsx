import { connect } from 'react-redux';

import { transferToContactConfirm } from 'models/operations/transfer/redux/actions/contact';

import { getConfirmationCodeLength } from 'models/operations/sms-confirmation/redux/selectors';

import { IStore } from 'modules/store/types';
import { getCurrentAccount } from 'models/organizations/redux/selectors';
import TransferStep3, { ICodeFormData } from '../../../../../components/operations/steps/step-3-sms-code';
import { isTransferLoading } from '../../../../../models/operations/transfer';

const mapDispatchToProps = (dispatch: any) => ({
  onNext: ({ code }: ICodeFormData) => {
    dispatch(transferToContactConfirm(code));
  },
});

export const mapStateToProps = (store: IStore) => ({
  account: getCurrentAccount(store),
  codeLength: getConfirmationCodeLength(store),
  isLoading: isTransferLoading(store),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransferStep3);
