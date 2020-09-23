import { connect } from 'react-redux';

import { getConfirmationCodeLength } from 'models/operations/sms-confirmation/redux/selectors';
import { IStore } from 'modules/store/types';
import { getCurrentAccount } from 'models/organizations/redux/selectors';
import { orderConfirm } from 'models/operations/order-card/redux/actions/newOrder';
import { isOrderLoading } from '../../../../../models/operations/order-card';
import OrderNewStep4, { ICodeFormData } from '../../../../../components/operations/steps/step-3-sms-code';

const mapDispatchToProps = (dispatch: any) => ({
  onNext: ({ code }: ICodeFormData) => {
    dispatch(orderConfirm(code));
  },
});

export const mapStateToProps = (store: IStore) => {
  return {
    account: getCurrentAccount(store),
    codeLength: getConfirmationCodeLength(store),
    isLoading: isOrderLoading(store),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderNewStep4);
