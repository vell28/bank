import typeToReducer from 'type-to-reducer';

import { IBaseThunkState } from 'modules/store/types';
import { IApplication } from '../../entities';
import { INIT_APP } from '../actions';

export type IAppState = IBaseThunkState<IApplication>;

export const appInitState: IAppState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  // TODO: remove it, its testing data
  data: {
    applicationId: 'BLACK_CAT_CARD',
    productId: 'BLACK_CAT_CARD',
    Authorization: '79111111111',
    bankName: 'Papaya Ltd',
    BIC: 'PAPYMTMTXXX',
  },
  errors: [],
};

export const application = typeToReducer<IAppState>(
  {
    [INIT_APP]: {
      LOADING: (state: IAppState): IAppState => ({ ...state, isLoading: true }),

      SUCCESS: (state: IAppState, action): IAppState => {
        const { payload } = action;
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          isError: false,
          data: { ...state.data, ...payload.data },
          errors: [],
        };
      },

      ERROR: (state: IAppState, action): IAppState => ({
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errors: action.payload.error,
      }),
    },
  },
  appInitState,
);
