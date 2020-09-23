import { connect } from 'react-redux';

import { transferToCardConfirm } from 'models/operations/transfer/redux/actions/card';

import { getConfirmationCodeLength } from 'models/operations/sms-confirmation/redux/selectors';
import { IStore } from 'modules/store/types';
import TransferStep3, { ICodeFormData } from '../../../../../components/operations/steps/step-3-sms-code';
import { isTransferLoading } from '../../../../../models/operations/transfer';

const mapDispatchToProps = (dispatch: any) => ({
  onNext: ({ code }: ICodeFormData) => {
    dispatch(transferToCardConfirm(code));
  },
});

export const mapStateToProps = (store: IStore) => ({
  codeLength: getConfirmationCodeLength(store),
  isLoading: isTransferLoading(store),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransferStep3);
