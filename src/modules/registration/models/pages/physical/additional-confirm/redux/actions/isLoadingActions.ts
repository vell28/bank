import { Action } from 'redux';
import { APIRequest } from 'utils/utilTypings';
import { IAction } from 'modules/store/types';

export const UPLOAD_FILE = 'registration/UPLOAD_FILE';

export const IS_LOADING_ADDRESS = 'registration/IS_LOADING_ADDRESS';
export const IS_LOADING_PROOF_OF_WHELTH = 'registration/IS_LOADING_PROOF_OF_WHELTH';

export const DONE_ADDRESS = 'registration/DONE_ADDRESS';
export const DONE_PROOF_OF_WHELTH = 'registration/DONE_PROOF_OF_WHELTH';

export const isLoadingAddressDocument = (): Action => ({
  type: IS_LOADING_ADDRESS,
});
export const doneAddressDocument = (): Action => ({
  type: DONE_ADDRESS,
});

export const isLoadingProofOfWhelthDocument = (): Action => ({
  type: IS_LOADING_PROOF_OF_WHELTH,
});
export const doneProofOfWhelthDocument = (): Action => ({
  type: DONE_PROOF_OF_WHELTH,
});

export const uploadAction = (asyncPayload: APIRequest): IAction<APIRequest> => ({
  type: UPLOAD_FILE,
  payload: asyncPayload,
});
