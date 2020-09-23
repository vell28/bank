import { subMonths } from 'date-fns';
import {
  EmploymentTypes,
  AddressConfirmationDocumentTypes,
  maxAddressConfirmationDocumentAge,
  EmploymentType,
  AddressConfirmationDocumentType,
} from '../../../../models/registration/entities';
import { ISelectOption } from '../../../common/select-field/types';

const enterpreneurTypeOption: ISelectOption<EmploymentType> = {
  value: EmploymentTypes.ENTREPRENEUR,
  label: 'Enterpreneur',
};

const managerTypeOption: ISelectOption<EmploymentType> = {
  value: EmploymentTypes.MANAGER,
  label: 'Manager',
};

const employeeTypeOption: ISelectOption<EmploymentType> = {
  value: EmploymentTypes.EMPLOYEE,
  label: 'Employee',
};

const retiredTypeOption: ISelectOption<EmploymentType> = {
  value: EmploymentTypes.RETIRED,
  label: 'Retired',
};

const studentTypeOption: ISelectOption<EmploymentType> = {
  value: EmploymentTypes.STUDENT,
  label: 'Student',
};

const unemployedTypeOption: ISelectOption<EmploymentType> = {
  value: EmploymentTypes.UNEMPLOYED,
  label: 'Unemployed',
};

export const employmentTypeOptions: Array<ISelectOption<EmploymentType>> = [
  enterpreneurTypeOption,
  managerTypeOption,
  employeeTypeOption,
  retiredTypeOption,
  studentTypeOption,
  unemployedTypeOption,
];

const bankStatementOption: ISelectOption<AddressConfirmationDocumentType> = {
  value: AddressConfirmationDocumentTypes.BANK_ACCOUNT_STATEMENT,
  label: 'Bank account statement',
};

const utilityBillOption: ISelectOption<AddressConfirmationDocumentType> = {
  value: AddressConfirmationDocumentTypes.UTILITY_BILL,
  label: 'Utility bill',
};

const letterFromGovernmentOption: ISelectOption<AddressConfirmationDocumentType> = {
  value: AddressConfirmationDocumentTypes.LETTER_FROM_GOVERMENT_INSTITUTE,
  label: 'Letter from government institute',
};

export const confirmationDocumentOptions: Array<ISelectOption<AddressConfirmationDocumentType>> = [
  bankStatementOption,
  utilityBillOption,
  letterFromGovernmentOption,
];

const now = Date.now();
export const documentEarliestAcceptableDate = subMonths(now, maxAddressConfirmationDocumentAge);
