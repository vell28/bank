import { DocumentType } from '../../../../registration/entities';

export interface IIdentityFormData {
  citizenshipCountryCode: string | null;
  documentNumber: string;
  documentType: DocumentType | null;
  issueDate: string | null;
  expiryDate: string | null;
  issuer: string;
  isNoExpired: boolean;
}
