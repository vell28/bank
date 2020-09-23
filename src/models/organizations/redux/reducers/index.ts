import typeToReducer from 'type-to-reducer';

import { IBaseThunkState, extractAction } from 'modules/store/types';
import { IOrganization } from '../../entities';
import {
  FETCH_ORGANIZATIONS,
  IFetchOrganizationsAction,
  UPDATE_ACCOUNT_BALANCE,
  IUpdateAccountBalanceAction,
} from '../actions/entities';

import { findAccountIndexById, parseOrganizationsToClientType } from './utils';

export type IOrganizationsState = IBaseThunkState<IOrganization[]>;

export const organizationsInitState: IOrganizationsState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: [],
  errors: [],
};

export const organizations = typeToReducer<IOrganizationsState>(
  {
    [FETCH_ORGANIZATIONS]: {
      LOADING: (state: IOrganizationsState): IOrganizationsState => ({
        ...state,
        isLoading: true,
      }),

      SUCCESS: (state: IOrganizationsState, action: IFetchOrganizationsAction): IOrganizationsState => {
        const { data } = extractAction(action.payload);
        const mappedToClientTypes = parseOrganizationsToClientType(data);
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          isError: false,
          data: mappedToClientTypes,
          errors: [],
        };
      },

      ERROR: (state: IOrganizationsState, action): IOrganizationsState => ({
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errors: action.payload.error,
      }),
    },
    [UPDATE_ACCOUNT_BALANCE]: {
      LOADING: (state: IOrganizationsState): IOrganizationsState => ({
        ...state,
        isLoading: true,
      }),

      SUCCESS: (state: IOrganizationsState, action: IUpdateAccountBalanceAction): IOrganizationsState => {
        const { payload, meta } = action;
        const { data } = extractAction(payload);
        const accountIdx = findAccountIndexById(meta)(state);

        const newStateData = [...state.data];
        if (accountIdx !== -1) {
          newStateData[0].accounts[accountIdx] = {
            ...newStateData[0].accounts[accountIdx],
            balances: data.balances,
          };
        }

        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          isError: false,
          data: newStateData,
          errors: [],
        };
      },

      ERROR: (state: IOrganizationsState, action): IOrganizationsState => ({
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errors: action.payload.error,
      }),
    },
  },
  organizationsInitState,
);
