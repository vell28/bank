import typeToReducer from 'type-to-reducer';

import { IAppErrors } from '../../entities';
import { SET_APP_ERROR, IAppErrorAction } from '../actions';

export type IAppErrorsState = IAppErrors;

export const appErrorsInitState: IAppErrorsState = {};

export const appErrors = typeToReducer<IAppErrorsState>(
  {
    [SET_APP_ERROR]: (state: IAppErrorsState, action: IAppErrorAction): IAppErrorsState => ({
      ...state,
      ...action.payload,
    }),
  },
  appErrorsInitState,
);
