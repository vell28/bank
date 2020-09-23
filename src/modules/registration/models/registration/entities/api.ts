import {
  ClientType, EmploymentType, GenderType, DocumentType, AddressConfirmationDocumentType
} from '.';

export interface IAddress {
  apartmentNumber?: string;
  city: string;
  countryCode: string;
  postalCode?: string;
  province?: string;
  street?: string;
  streetNumber?: string;
}

/* tslint:disable-next-line:no-empty-interface */
export type IDeliveryAddres = IAddress;

export interface ICardOrder {
  isExpressDelivery?: boolean;
  deliveryAddress: IDeliveryAddres;
  nameOnCard?: string;
}

export interface IAddressProofDocument {
  fileReferenceInStorage: string;
  issueDate: string;
  number: string;
  type: AddressConfirmationDocumentType;
}

export interface IIdentityDocument {
  countryCode: string; // 'LV';
  expiryDate: string; // '2028-09-05';
  fileReferenceInStorage: string; // 'scanner=f564c2ed-c506-49c1-be92-e6ee051bb1d2';
  issueDate: string; // '2018-09-05';
  issuer: string; // 'LV';
  number: string; // '12356789';
  type: DocumentType;
}

/* tslint:disable-next-line:no-empty-interface */
export type IResidenceAddress = IAddress;

export interface IPersonalRegistrationForm {
  addressProofDocument?: IAddressProofDocument;
  identityDocument: IIdentityDocument;
  residenceAddress: IResidenceAddress;

  birthCountryCode: string; // 'LV';
  birthDate: string; // '1990-01-01';
  birthPlace: string; // 'Latvia';
  clientType: ClientType;
  email: string; // 'test21@test.com';
  employmentType?: EmploymentType;
  gender: GenderType;
  identificationNumber: string;
  institutionId?: number; // 37;
  name: string; // 'Jean';
  surname: string; // 'Marais';
  middleName: string; // 'Batist';
  nationalityCountryCode: string; // 'LV';
  pep: boolean;
  pepInFamily: boolean;
}

export interface IPersonalRegistration {
  phoneNumber: string;
  sendDocumentsToEmail: boolean;
  userPhoto: string;
  promoCode?: string;
  cardOrder: ICardOrder;
  registrationForm: IPersonalRegistrationForm;
}

export interface IPersonalRegistrationAdditional {
  addressProof: {
    fileReferences: string;
  };
  employmentType: EmploymentType;
  proofOfWealth: {
    fileReferences: string;
  };
}

export interface IRegistrationCompleteResponse {
  status: string;
}
