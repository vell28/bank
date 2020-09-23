import { combineReducers } from 'redux';

import { transfer, ITransferState } from './transfer';
import { ISmsConfirmationState, smsConfirmation } from './sms-confirmation/redux/reducers';
import { cardSettings, ICardSettingsState } from './card-settings/redux/reducers';
import { topUp, ITopUpState } from './top-up/redux/reducers';
import { cardOrder, ICardOrderState } from './order-card/redux/reducers';

export interface IOperationsState {
  transfer: ITransferState;
  smsConfirmation: ISmsConfirmationState;
  cardSettings: ICardSettingsState;
  topUp: ITopUpState;
  cardOrder: ICardOrderState;
}

export const operations = combineReducers({
  transfer,
  smsConfirmation,
  cardSettings,
  topUp,
  cardOrder,
});
