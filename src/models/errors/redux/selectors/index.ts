import { IStore } from 'modules/store/types';
import { IAppErrors } from '../../entities';

export const getAppErrorsState = (state: IStore): IAppErrors => state.appErrors;
