import { RouterState } from 'connected-react-router';

import { IAuthorizationState } from 'models/authorization/redux/reducers';
import { IAppState } from 'models/application/redux/reducers';
import { IAccountSidebarState } from 'models/account-sidebar/redux/reducers';
import { IOrganizationsState } from 'models/organizations/redux/reducers';
import { IMainModalState } from 'models/main-modal/redux/reducers';
import { IOperationsState } from 'models/operations';
import { IAppErrorsState } from 'models/errors/redux/reducers';
import { ITransactionsState } from 'models/transactions/redux/reducers';
import { IServerErrors, ResponseAPI } from '../api-client/entities';
import { IRegistrationModuleState } from '../registration/models';

export type getStateType = () => IStore;

export interface IStore {
  readonly authorization: IAuthorizationState;
  readonly application: IAppState;
  readonly accountSidebar: IAccountSidebarState;
  readonly organizations: IOrganizationsState;
  readonly mainModal: IMainModalState;
  readonly operations: IOperationsState;
  readonly router: RouterState;
  readonly appErrors: IAppErrorsState;
  readonly transactions: ITransactionsState;
  readonly registrationModule: IRegistrationModuleState;
  readonly form: any;
}

export interface IAction<T> {
  type: string;
  payload: T;
}

export interface IAsyncAction<T> {
  type: string;
  payload: Promise<ResponseAPI<T>> | { data: T };
}

export const extractAction = <T>(payload: Promise<ResponseAPI<T>> | { data: T }) => {
  return payload as { data: T };
};

export interface IBaseThunkState<T, E = IServerErrors[]> {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  data: T;
  errors: E;
}
