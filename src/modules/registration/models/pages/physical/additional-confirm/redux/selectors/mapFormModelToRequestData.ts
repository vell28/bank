import { IFileReferences } from 'utils/utilTypings';
import { EmploymentType } from 'modules/registration/models/registration/entities';
import { IAdditionalConfirmFormModel } from 'modules/registration/components/pages/physical/additional-confirm/types';

// too specific to extract further
export interface IAdditionalConfirmRequestData {
  addressProof: IFileReferences;
  employmentType: EmploymentType | null;
  proofOfWealth: IFileReferences;
}

export const mapFormModelToRequestData = (formData: IAdditionalConfirmFormModel): IAdditionalConfirmRequestData => {
  const addressDocumentRef = formData.addressDocumentId;
  const proofOfWhelthDocumentRef = formData.addressDocumentId;
  const { employmentType } = formData;

  return {
    addressProof: {
      fileReferences: [addressDocumentRef],
    },
    employmentType,
    proofOfWealth: {
      fileReferences: [proofOfWhelthDocumentRef],
    },
  };
};
