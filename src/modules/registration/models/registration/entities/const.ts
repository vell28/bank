import { propOr } from 'ramda';

import { IStore } from 'modules/store/types';
import { getFirebaseActivePhone } from '../../firebase-auth/redux/selectors';
import { getForms } from '../redux/selectors/redux-forms';
import {
  getRegistrationVariant,
  getPhoneNumberHeader,
  getCompanyNameHeader,
  getPersonalRegistration,
} from '../redux/selectors';
import {
  IRegistrationSteps, RegistrationStepsType, RegistrationVariantsType, IHeader, HeaderSelector
} from '.';

export const REGISTRATION_PATH = '/registration';
export const PHYSICAL_REGISTRATION_PATH = `${REGISTRATION_PATH}/personal-requisites`;
export const JURIDICAL_REGISTRATION_PATH = `${REGISTRATION_PATH}/compamy-requisites`;

const getStaticHeaderSelector = (header: IHeader): HeaderSelector => (): IHeader => header;

const getDefaultPhysicalHeader = getStaticHeaderSelector({
  prefix: 'Registration',
});

const getDefaultJuridicalHeader = getStaticHeaderSelector({
  prefix: 'Get Business Account',
});

const getAccountVariantHeader = getStaticHeaderSelector({
  close: false,
});

export const REGISTRATION_STEPS: IRegistrationSteps = {
  loginStatus: {
    path: `${REGISTRATION_PATH}/login-status`,
  },
  registrationStatus: {
    path: `${REGISTRATION_PATH}/registration-status`,
  },
  accountVariant: {
    path: REGISTRATION_PATH,
    headerSelector: getAccountVariantHeader,
  },
  offer: {
    path: `${REGISTRATION_PATH}/offer`,
  },
  preattention: {
    path: `${REGISTRATION_PATH}/preattention`,
  },
  phoneNumber: {
    path: `${PHYSICAL_REGISTRATION_PATH}/phone-number`,
    name: 'Phone number',
    headerSelector: getDefaultPhysicalHeader,
  },
  personalIdentification: {
    path: `${PHYSICAL_REGISTRATION_PATH}/identification`,
    name: 'Personal identification',
    headerSelector: getPhoneNumberHeader,
  },
  basicPersonalData: {
    path: `${PHYSICAL_REGISTRATION_PATH}/basic-personal-data`,
    name: 'Basic personal data',
    headerSelector: getPhoneNumberHeader,
  },
  personalAddress: {
    path: `${PHYSICAL_REGISTRATION_PATH}/personal-address`,
    name: 'Address info',
    headerSelector: getPhoneNumberHeader,
  },
  identity: {
    path: `${PHYSICAL_REGISTRATION_PATH}/identity`,
    name: 'Identity info',
    headerSelector: getPhoneNumberHeader,
  },
  additional: {
    path: `${PHYSICAL_REGISTRATION_PATH}/additional`,
    name: 'Additional',
    headerSelector: getPhoneNumberHeader,
  },
  additionalConfirm: {
    path: `${PHYSICAL_REGISTRATION_PATH}/additional-confirm`,
    name: 'Additional confirmation',
    headerSelector: getPhoneNumberHeader,
  },
  uploading: {
    path: `${PHYSICAL_REGISTRATION_PATH}/uploading`,
  },
  proxyUpload: {
    path: `${JURIDICAL_REGISTRATION_PATH}/proxy`,
    name: 'Proxy upload',
    headerSelector: getDefaultJuridicalHeader,
  },
  companyType: {
    path: `${JURIDICAL_REGISTRATION_PATH}/company-type`,
    name: 'Company type',
    headerSelector: getDefaultJuridicalHeader,
  },
  activities: {
    path: `${JURIDICAL_REGISTRATION_PATH}/activities`,
    name: 'Economic activities',
    headerSelector: getCompanyNameHeader,
  },
  basicCompanyData: {
    path: `${JURIDICAL_REGISTRATION_PATH}/basic-company-data`,
    name: 'Company info',
    headerSelector: getCompanyNameHeader,
  },
  companyAddress: {
    path: `${JURIDICAL_REGISTRATION_PATH}/company-address`,
    name: 'Registered address',
    headerSelector: getCompanyNameHeader,
  },
  bearerShares: {
    path: `${JURIDICAL_REGISTRATION_PATH}/bearer-shares`,
    name: 'Bearer shares',
    headerSelector: getCompanyNameHeader,
  },
  owners: {
    path: `${JURIDICAL_REGISTRATION_PATH}/owners`,
    name: 'Owners',
    headerSelector: getCompanyNameHeader,
  },
  directors: {
    path: `${JURIDICAL_REGISTRATION_PATH}/directors`,
    name: 'Directors',
    headerSelector: getCompanyNameHeader,
  },
  documents: {
    path: `${JURIDICAL_REGISTRATION_PATH}/documents`,
    name: 'Documents',
    headerSelector: getCompanyNameHeader,
  },
  congratulations: {
    path: `${REGISTRATION_PATH}/congratulations`,
  },
};

export const REGISTRATION_STEPS_LIST: RegistrationStepsType = Object.values(REGISTRATION_STEPS);

export const PHYSICAL_STEPS: RegistrationStepsType = [
  REGISTRATION_STEPS.phoneNumber,
  REGISTRATION_STEPS.personalIdentification,
  REGISTRATION_STEPS.basicPersonalData,
  REGISTRATION_STEPS.personalAddress,
  REGISTRATION_STEPS.identity,
  REGISTRATION_STEPS.additional,
];

export const JURIDICAL_STEPS: RegistrationStepsType = [
  REGISTRATION_STEPS.proxyUpload,
  REGISTRATION_STEPS.companyType,
  REGISTRATION_STEPS.activities,
  REGISTRATION_STEPS.basicCompanyData,
  REGISTRATION_STEPS.companyAddress,
  REGISTRATION_STEPS.bearerShares,
  REGISTRATION_STEPS.owners,
  REGISTRATION_STEPS.directors,
  REGISTRATION_STEPS.documents,
];

export const REGISTRATION_VARIANTS: RegistrationVariantsType = [
  {
    path: PHYSICAL_REGISTRATION_PATH,
    steps: PHYSICAL_STEPS,
  },
  {
    path: JURIDICAL_REGISTRATION_PATH,
    steps: JURIDICAL_STEPS,
  },
];

interface ICompleteRule {
  path: string;
  selector: (store: IStore) => boolean;
}

type StepCompleteRules = ICompleteRule[];

const allow = () => true;

export const stepCompleteRules: StepCompleteRules = [
  {
    path: REGISTRATION_STEPS.loginStatus.path,
    selector: allow,
  },
  {
    path: REGISTRATION_STEPS.registrationStatus.path,
    selector: allow,
  },
  {
    path: REGISTRATION_STEPS.accountVariant.path,
    selector: (store: IStore) => !!getRegistrationVariant(store),
  },
  {
    path: REGISTRATION_STEPS.offer.path,
    selector: (store: IStore) => {
      const registration = getPersonalRegistration(store);
      return propOr(null, 'sendDocumentsToEmail')(registration) != null;
    },
  },
  {
    path: REGISTRATION_STEPS.preattention.path,
    selector: allow,
  },
  {
    path: REGISTRATION_STEPS.preattention.path,
    selector: allow,
  },
  {
    path: REGISTRATION_STEPS.phoneNumber.path,
    selector: (store: IStore) => !!getFirebaseActivePhone(store),
  },
  {
    path: REGISTRATION_STEPS.personalIdentification.path,
    selector: (store: IStore) => !!getForms(store).personalIdentification,
  },
  {
    path: REGISTRATION_STEPS.basicPersonalData.path,
    selector: (store: IStore) => !!getForms(store).basicPersonalData,
  },
  {
    path: REGISTRATION_STEPS.basicPersonalData.path,
    selector: (store: IStore) => !!getForms(store).basicPersonalData,
  },
  {
    path: REGISTRATION_STEPS.personalAddress.path,
    selector: (store: IStore) => !!getForms(store).personalAddress,
  },
  {
    path: REGISTRATION_STEPS.identity.path,
    selector: (store: IStore) => !!getForms(store).identity,
  },
  {
    path: REGISTRATION_STEPS.additional.path,
    selector: (store: IStore) => !!getForms(store).additional,
  },
];
