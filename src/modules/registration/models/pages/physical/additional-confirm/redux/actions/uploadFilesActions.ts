import {
  ThunkAction, Dispatch, fileHandeler, fileData
} from 'utils/utilTypings';
import { getStateType } from 'modules/store/types';
import { uploadImageToScan } from 'modules/registration/modules/api-requests/idScan';
import { prepareImg } from 'modules/registration/models/idscan/utils';
import { IIdScanInvestigateResponse } from 'modules/registration/models/idscan/entities';
import { ISuccess } from 'modules/api-client/entities/responce';
import { scannerId } from 'modules/registration/utils/scannerId';
import { getPersonEntryId } from 'modules/registration/models/idscan/redux/selectors';
import {
  setFormAddressDocument,
  setFormAddressDocumentId,
  setFormWealthProofDocument,
  setFormWealthProofDocumentId,
} from '../../../../../../containers/pages/physical/additional-confirm/additionalConfirmFormActions';
import {
  doneAddressDocument,
  uploadAction,
  doneProofOfWhelthDocument,
  isLoadingAddressDocument,
  isLoadingProofOfWhelthDocument,
} from './isLoadingActions';

export const makeUploadAddressAsyncPayload = (imgBase64: fileData, personEntryId: string, dispatch: Dispatch) => {
  return async () => {
    dispatch(isLoadingAddressDocument());
    try {
      const result = await uploadImageToScan(personEntryId, prepareImg(imgBase64 as string));
      const success = result as ISuccess<IIdScanInvestigateResponse>;
      const id = success.data.PersonEntryId;

      dispatch(setFormAddressDocument(imgBase64));
      dispatch(setFormAddressDocumentId(scannerId(id)));
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
    dispatch(doneAddressDocument());
  };
};

export const uploadAddressDocumentAction: fileHandeler = (document): ThunkAction => {
  return (dispatch: any, getState: getStateType) => {
    const personEntryId = getPersonEntryId(getState());
    if (personEntryId && document) {
      dispatch(uploadAction(makeUploadAddressAsyncPayload(document, personEntryId, dispatch)));
    } else {
      // throw ?
    }
  };
};

export const makeUploadProofOfWhelthAsyncPayload = (imgBase64: fileData, personEntryId: string, dispatch: Dispatch) => {
  return async () => {
    dispatch(isLoadingProofOfWhelthDocument());
    try {
      const result = await uploadImageToScan(personEntryId, prepareImg(imgBase64 as string));
      const success = result as ISuccess<IIdScanInvestigateResponse>;
      const id = success.data.PersonEntryId;

      dispatch(setFormWealthProofDocument(imgBase64));
      dispatch(setFormWealthProofDocumentId(scannerId(id)));
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
    dispatch(doneProofOfWhelthDocument());
  };
};

export const uploadProofOfWhelthDocumentAction = (document: fileData) => {
  return (dispatch: any, getState: getStateType) => {
    const personEntryId = getPersonEntryId(getState());
    if (personEntryId) {
      dispatch(uploadAction(makeUploadProofOfWhelthAsyncPayload(document, personEntryId, dispatch)));
    } else {
      // throw ?
    }
  };
};

export const clearAddressDocumentAction: ThunkAction = (dispatch: any) => {
  dispatch(setFormAddressDocument(''));
  dispatch(setFormAddressDocumentId(''));
};

export const clearProofOfWhelthDocumentAction: ThunkAction = (dispatch: any) => {
  dispatch(setFormWealthProofDocument(''));
  dispatch(setFormWealthProofDocumentId(''));
};
