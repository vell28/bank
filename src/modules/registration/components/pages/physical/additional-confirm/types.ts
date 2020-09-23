import { IAdditionalConfirmFormData } from 'modules/registration/models/pages/physical/additional-confirm/entities';
import { fileHandeler } from 'utils/utilTypings';

export interface IAdditionalConfirmFormModel extends IAdditionalConfirmFormData {
  addressDocumentId: string;
  wealthProofDocumentId: string;
}

export interface IAdditionalConfirmStateProps {
  addressDocument: string | null;
  wealthProofDocument: string | null;
  isAddressDocumentLoading: boolean;
  isProofOfWhelthDocumentLoading: boolean;
}

export interface IAdditionalConfirmDispatchProps {
  onSubmit: (data: IAdditionalConfirmFormModel) => void;

  uploadAddressDocument: fileHandeler;
  uploadProofOfWhelthDocument: fileHandeler;
  clearAddressDocument: () => void;
  clearProofOfWhelthDocument: () => void;
}

export interface IAdditionalConfirmProps extends IAdditionalConfirmStateProps, IAdditionalConfirmDispatchProps {}

export const AdditionalInfoFormName = 'additionalConfirmPageForm';

export const addressDocumentField = 'addressDocument';
export const wealthProofDocumentField = 'wealthProofDocument';

export const addressDocumentIdField = 'addressDocumentId';
export const wealthProofDocumentIdField = 'wealthProofDocumentId';
