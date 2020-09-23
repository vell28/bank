import { IStore } from 'modules/store/types';

export type RegistrationVariantType = 'PHYSICAL' | 'JURIDICAL';

export enum RegistrationVariantTypes {
  PHYSICAL = 'PHYSICAL',
  JURIDICAL = 'JURIDICAL',
}

export enum ClientTypes {
  PRIVATE = 'PRIVATE',
  LEGAL = 'LEGAL',
}

export type ClientType = ClientTypes.PRIVATE | ClientTypes.LEGAL;

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export type GenderType = Gender.MALE | Gender.FEMALE;

export enum DocumentTypes {
  PASSPORT = 'Passport',
  ID_CARD = 'ID Card',
  DRIVERS_LICENCE = 'Driver License',
}

export type DocumentType = DocumentTypes.PASSPORT | DocumentTypes.ID_CARD | DocumentTypes.DRIVERS_LICENCE;

export enum EmploymentTypes {
  ENTREPRENEUR = 'ENTREPRENEUR',
  MANAGER = 'MANAGER',
  EMPLOYEE = 'EMPLOYEE',
  STUDENT = 'STUDENT',
  RETIRED = 'RETIRED',
  UNEMPLOYED = 'UNEMPLOYED',
}

export type EmploymentType =
  | EmploymentTypes.ENTREPRENEUR
  | EmploymentTypes.MANAGER
  | EmploymentTypes.EMPLOYEE
  | EmploymentTypes.STUDENT
  | EmploymentTypes.RETIRED
  | EmploymentTypes.UNEMPLOYED;

export enum AddressConfirmationDocumentTypes {
  BANK_ACCOUNT_STATEMENT = 'BANK_ACCOUNT_STATEMENT',
  UTILITY_BILL = 'UTILITY_BILL',
  LETTER_FROM_GOVERMENT_INSTITUTE = 'LETTER_FROM_GOVERMENT_INSTITUTE',
  PERSONAL_VISIT = 'PERSONAL_VISIT',
  CORPORATE_DOCUMENTS = 'CORPORATE_DOCUMENTS',
  ELECTRONIC_DATA_PROVIDERS = 'ELECTRONIC_DATA_PROVIDERS',
}

export type AddressConfirmationDocumentType =
  | AddressConfirmationDocumentTypes.BANK_ACCOUNT_STATEMENT
  | AddressConfirmationDocumentTypes.UTILITY_BILL
  | AddressConfirmationDocumentTypes.LETTER_FROM_GOVERMENT_INSTITUTE
  | AddressConfirmationDocumentTypes.PERSONAL_VISIT
  | AddressConfirmationDocumentTypes.CORPORATE_DOCUMENTS
  | AddressConfirmationDocumentTypes.ELECTRONIC_DATA_PROVIDERS;

// we have buisiness rule about this
type months = number;
export const maxAddressConfirmationDocumentAge: months = 3;

// Step

export interface IRegistrationStep {
  path: string;
  name?: string;
  headerSelector?: HeaderSelector;
}

export interface IRegistrationSteps {
  [key: string]: IRegistrationStep;
}

export type RegistrationStepsType = IRegistrationStep[];

export type RegistrationVariantStepsType = IRegistrationStep[];

export interface IRegistrationVariant {
  path: string;
  steps: RegistrationVariantStepsType;
}

export type RegistrationVariantsType = IRegistrationVariant[];

// Current step

export interface IRegistrationCurrentStep extends IRegistrationStep {
  completed: boolean;
  current: boolean;
}

export type RegistrationCurrentVariantStepsType = IRegistrationCurrentStep[];

// Header

export interface IHeader {
  prefix?: string;
  title?: string;
  back?: boolean;
  close?: boolean;
}

export type HeaderSelector = (state: IStore) => IHeader;

export interface IFieldsType {
  [key: string]: string;
}
