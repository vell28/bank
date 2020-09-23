import { change } from 'redux-form';
import { fileData } from 'utils/utilTypings';
import {
  AdditionalInfoFormName,
  addressDocumentField,
  wealthProofDocumentField,
  addressDocumentIdField,
  wealthProofDocumentIdField,
} from '../../../../components/pages/physical/additional-confirm/types';

export const setFormAddressDocument = (data: fileData) => change(AdditionalInfoFormName, addressDocumentField, data);
export const setFormWealthProofDocument = (id: fileData) =>
  change(AdditionalInfoFormName, wealthProofDocumentField, id);

export const setFormAddressDocumentId = (data: string) => change(AdditionalInfoFormName, addressDocumentIdField, data);
export const setFormWealthProofDocumentId = (id: string) =>
  change(AdditionalInfoFormName, wealthProofDocumentIdField, id);
