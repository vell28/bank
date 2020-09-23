export interface IPhoneStatusResponse {
  registrationStatus: IPhoneRegistrationStatus;
  uuid: string; // filled when registrationStatus is ADDITIONAL_INFO
  additionalInfoUrl: string;
  phoneNumber: string;
  date?: number | string;
}

export type IPhoneRegistrationStatus = 'NONE' | 'REGISTERED' | 'ADDITIONAL_INFO' | 'REJECTED' | 'CARD_ORDERING';

export enum RegistrationStatuses {
  NONE = 'NONE',
  REGISTERED = 'REGISTERED',
  ADDITIONAL_INFO = 'ADDITIONAL_INFO',
  REJECTED = 'REJECTED',
  CARD_ORDERING = 'CARD_ORDERING',
}

export type EmploymentType =
  | RegistrationStatuses.NONE
  | RegistrationStatuses.REGISTERED
  | RegistrationStatuses.ADDITIONAL_INFO
  | RegistrationStatuses.REJECTED
  | RegistrationStatuses.CARD_ORDERING;
