import { EmploymentType, AddressConfirmationDocumentType } from '../../../../registration/entities';

export interface IAdditionalConfirmFormData {
  employmentType: EmploymentType | null;
  documentType: AddressConfirmationDocumentType | null;
  issueDate: string | null;
  addressDocument: string | null;
  wealthProofDocument: string | null;
}
