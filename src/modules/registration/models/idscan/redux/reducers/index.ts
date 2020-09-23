import { propOr } from 'ramda';
import typeToReducer from 'type-to-reducer';

import { extractAction, IBaseThunkState } from 'modules/store/types';
import { IIdScanAuthResponse, IIdScanConfig, IIdScanInvestigateResponse } from '../../entities';

import {
  IDSCAN_AUTHORIZE,
  IDSCAN_GET_CONFIG,
  IDSCAN_INVESTIGATE_DOC,
  IDSCAN_INVESTIGATE_SELFIE,
  IInvestigateDocAction,
  IInvestigateSelfieAction,
  IGetIdScanConfigAction,
  IIdScanAuthAction,
} from '../actions';

export interface IIdScanEntryData {
  FirstName: string;
  LastName: string;
  BirthDate: string;
  Sex: string;
  DocumentNumber: string;
  ExpiryDate: string;
}

export interface ISelfieEntryData {
  HighLevelResult: string;
}

export interface IIdScanState extends IBaseThunkState<IIdScanInvestigateResponse | undefined> {
  authorization: IIdScanAuthResponse;
  config?: IIdScanConfig;
  personEntryId: string | null;
  idScanEntryData: IIdScanEntryData;
}

export const idScanInitState: IIdScanState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: undefined,
  authorization: {
    'http://schemas.microsoft.com/ws/2008/06/identity/claims/role': 'User',
    'http;://schemas.xmlsoap.org/ws/2005/05/identity/claims/name': 'capturestudio',
    token_type: 'bearer',
  },
  personEntryId: null,
  idScanEntryData: {
    FirstName: '',
    LastName: '',
    BirthDate: '',
    Sex: '',
    DocumentNumber: '',
    ExpiryDate: '',
  },
  errors: [],
};

export const idScan = typeToReducer<IIdScanState>(
  {
    [IDSCAN_INVESTIGATE_DOC]: {
      LOADING: (state: IIdScanState): IIdScanState => ({
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      }),

      SUCCESS: (state: IIdScanState, action: IInvestigateDocAction): IIdScanState => {
        const { payload } = action;
        const { data } = extractAction(payload);
        return {
          ...state,
          data,
          personEntryId: data.PersonEntryId,
          idScanEntryData: {
            FirstName: propOr('', 'ExtractedFields.FirstName')(data.EntryData),
            LastName: propOr('', 'ExtractedFields.LastName')(data.EntryData),
            BirthDate: propOr('', 'ExtractedFields.BirthDate')(data.EntryData),
            Sex: propOr('', 'ExtractedFields.Sex')(data.EntryData),
            DocumentNumber: propOr('', 'ExtractedFields.DocumentNumber')(data.EntryData),
            ExpiryDate: propOr('', 'ExtractedFields.ExpiryDate')(data.EntryData),
          },
          isLoading: false,
          isSuccess: true,
          isError: false,
        };
      },

      ERROR: (state: IIdScanState, action): IIdScanState => ({
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errors: action.payload.error,
      }),
    },
    [IDSCAN_INVESTIGATE_SELFIE]: {
      LOADING: (state: IIdScanState): IIdScanState => ({
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      }),

      SUCCESS: (state: IIdScanState, action: IInvestigateSelfieAction): IIdScanState => {
        const { payload } = action;
        const { data } = extractAction(payload);
        return {
          ...state,
          data,
          isLoading: false,
          isSuccess: true,
          isError: false,
        };
      },

      ERROR: (state: IIdScanState, action): IIdScanState => ({
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errors: action.payload.error,
      }),
    },
    [IDSCAN_GET_CONFIG]: {
      LOADING: (state: IIdScanState): IIdScanState => ({
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      }),

      SUCCESS: (state: IIdScanState, action: IGetIdScanConfigAction): IIdScanState => {
        const { payload } = action;
        return {
          ...state,
          config: {
            ...extractAction(payload).data.idscan,
          },
          isLoading: false,
          isSuccess: true,
          isError: false,
        };
      },

      ERROR: (state: IIdScanState, action): IIdScanState => ({
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errors: action.payload.error,
      }),
    },
    [IDSCAN_AUTHORIZE]: {
      LOADING: (state: IIdScanState): IIdScanState => ({
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      }),

      SUCCESS: (state: IIdScanState, action: IIdScanAuthAction): IIdScanState => {
        const { payload } = action;
        return {
          ...state,
          authorization: {
            ...state.authorization,
            ...extractAction(payload).data,
          },
          isLoading: false,
          isSuccess: true,
          isError: false,
        };
      },

      ERROR: (state: IIdScanState, action): IIdScanState => ({
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errors: action.payload.error,
      }),
    },
  },
  idScanInitState,
);
