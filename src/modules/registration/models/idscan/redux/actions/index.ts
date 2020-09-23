import { Dispatch } from 'redux';

import { IAsyncAction, getStateType } from 'modules/store/types';

import {
  IIdScanAuthResponse, IIdScanConfigResponse, IIdScanConfig, IIdScanInvestigateResponse
} from '../../entities';

import {
  fetchIdScanConfigRequest,
  idScanAuthRequest,
  investigateDocRequest,
  investigateSelfieRequest,
} from '../../../../modules/api-requests/idScan';

import { prepareImg } from '../../utils';

import { getIdScanConfig } from '../selectors';

export const IDSCAN_AUTHORIZE = 'idscan/AUTHORIZE';
export const IDSCAN_GET_CONFIG = 'idscan/GET_CONFIG';
export const IDSCAN_INVESTIGATE_DOC = 'idscan/INVESTIGATE_DOC';
export const IDSCAN_INVESTIGATE_SELFIE = 'idscan/INVESTIGATE_SELFIE';

export type IIdScanAuthAction = IAsyncAction<IIdScanAuthResponse>;
export type IGetIdScanConfigAction = IAsyncAction<IIdScanConfigResponse>;
export type IInvestigateDocAction = IAsyncAction<IIdScanInvestigateResponse>;
export type IInvestigateSelfieAction = IAsyncAction<IIdScanInvestigateResponse>;

export const idScanAuthAction = (payload?: IIdScanConfig): IIdScanAuthAction => ({
  type: IDSCAN_AUTHORIZE,
  payload: idScanAuthRequest(payload),
});

export const idScanGetConfigAction = (): IGetIdScanConfigAction => ({
  type: IDSCAN_GET_CONFIG,
  payload: fetchIdScanConfigRequest(),
});

export const idScanInvestigateDocAction = (imgBase64: string): IInvestigateDocAction => ({
  type: IDSCAN_INVESTIGATE_DOC,
  payload: investigateDocRequest(prepareImg(imgBase64)),
});

export const idScanInvestigateSelfieAction = (personEntryId: string, imgBase64: string): IInvestigateSelfieAction => ({
  type: IDSCAN_INVESTIGATE_SELFIE,
  payload: investigateSelfieRequest(personEntryId, prepareImg(imgBase64)),
});

export const initIdScan = async (dispatch: Dispatch, getState: getStateType) => {
  await dispatch(idScanGetConfigAction());
  const config = getIdScanConfig(getState());
  await dispatch(idScanAuthAction(config));
};
