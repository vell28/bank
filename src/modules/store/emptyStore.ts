import { appInitState } from 'models/application/redux/reducers';
import { authorizationInitState } from 'models/authorization/redux/reducers';
import { organizationsInitState } from 'models/organizations/redux/reducers';
import { accountSidebarInitState } from 'models/account-sidebar/redux/reducers';
import { mainModalInitState } from 'models/main-modal/redux/reducers';
import { transferToCardInitState } from 'models/operations/transfer/redux/reducers';
import { smsConfirmationInitState } from 'models/operations/sms-confirmation/redux/reducers';
import { cardSettingsInitState } from 'models/operations/card-settings/redux/reducers';
import { topUpFromCardInitState } from 'models/operations/top-up/redux/reducers';
import { cardOrderInitialState } from 'models/operations/order-card/redux/reducers';
import { appErrorsInitState } from 'models/errors/redux/reducers';
import { transactionsInitState } from 'models/transactions/redux/reducers';
import { registrationInitState } from '../registration/models/registration/redux/reducers';
import { registrationFormsInitState } from '../registration/models/registration/redux/reducers/redux-forms';
import { firebaseInitState } from '../registration/models/firebase-auth/redux/reducers';
import { registrationPhoneInitState } from '../registration/models/pages/physical/phone-number/redux/reducers';
import { idScanInitState } from '../registration/models/idscan/redux/reducers';

import { IStore } from './types';

export const emptyStore: IStore = {
  application: appInitState,
  authorization: authorizationInitState,
  organizations: organizationsInitState,
  accountSidebar: accountSidebarInitState,
  mainModal: mainModalInitState,
  operations: {
    transfer: transferToCardInitState,
    smsConfirmation: smsConfirmationInitState,
    cardSettings: cardSettingsInitState,
    topUp: topUpFromCardInitState,
    cardOrder: cardOrderInitialState,
  },
  appErrors: appErrorsInitState,
  transactions: transactionsInitState,
  registrationModule: {
    reduxForms: registrationFormsInitState,
    registration: registrationInitState,
    firebaseAuth: firebaseInitState,
    registrationPhone: registrationPhoneInitState,
    idScan: idScanInitState,
    additionalConfirm: {
      isLoadingAddress: false,
      isLoadingProofOfWhelth: false,
      uuid: '',
    },
  },
  router: {
    action: 'PUSH',
    location: {
      pathname: '',
      search: '',
      hash: '',
      key: '',
      state: '',
    },
  },
  form: {},
};
