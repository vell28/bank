import {
  CurrencyCodeType,
} from 'modules/currencies';
import {
  IAction,
} from 'modules/store/types';
import { AccountTypeType } from '../../entities';

export const CREATE_ACCOUNT = 'accounts/CREATE_ACCOUNT';

export type ICreateAccountAction = IAction<{
  account: IAccountData;
}>

export interface IAccountData {
  accountType: AccountTypeType;
  accountCurrency: CurrencyCodeType;
}

export const createAccount = (
  account: IAccountData,
): ICreateAccountAction => ({
  type: CREATE_ACCOUNT,
  payload: { account },
});
