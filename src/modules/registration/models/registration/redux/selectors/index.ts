import { pathOr } from 'ramda';
import { matchPath } from 'react-router-dom';
import { createSelector } from 'reselect';

import { ICountry } from '@components/popup/popup-select-country/country-list';
import { IStore } from 'modules/store/types';
import { getCurrentRouterPath } from 'models/application/redux/selectors';
import { getFirebaseActivePhone, getFirebaseActiveCountry } from '../../../firebase-auth/redux/selectors';
import { REGISTRATION_VARIANTS, REGISTRATION_STEPS_LIST, stepCompleteRules } from '../../entities/const';
import {
  RegistrationVariantType,
  IRegistrationStep,
  IRegistrationVariant,
  RegistrationCurrentVariantStepsType,
  IHeader,
} from '../../entities';
import {
  ICardOrder,
  IPersonalRegistration,
  IPersonalRegistrationForm,
  IAddressProofDocument,
  IIdentityDocument,
  IResidenceAddress,
} from '../../entities/api';
import { IRegistrationState } from '../reducers';

export const getRegistration = (state: IStore): IRegistrationState => state.registrationModule.registration;

export const getRegistrationVariant = (state: IStore): RegistrationVariantType | null =>
  state.registrationModule.registration.registrationVariant;

export const getCurrentVariant = createSelector([getCurrentRouterPath], (path: string):
  | IRegistrationVariant
  | undefined => {
  return REGISTRATION_VARIANTS.find((registrationVariant) => !!matchPath(path, { path: registrationVariant.path }));
});

export const getCurrentVariantSteps = createSelector(
  [getCurrentRouterPath, getCurrentVariant],
  (path: string, variant: IRegistrationVariant | undefined): RegistrationCurrentVariantStepsType => {
    let completed = true;
    return ((variant && variant.steps) || []).map((step) => {
      let current = false;
      if (completed) {
        const match = matchPath(path, { path: step.path });
        current = !!match;
        completed = !match;
      }
      return {
        ...step,
        completed,
        current,
      };
    });
  },
);

export const getCurrentStep = createSelector([getCurrentRouterPath], (path: string): IRegistrationStep | undefined => {
  return REGISTRATION_STEPS_LIST.find((step) => {
    return !!matchPath(path, { path: step.path, exact: true });
  });
});

export const getPhoneNumberHeader = createSelector(
  [getFirebaseActivePhone, getFirebaseActiveCountry],
  (phone: string, country: ICountry): IHeader => ({
    prefix: 'Registration / ',
    title: `+${country.dialCode}${phone}`,
  }),
);

export const getCompanyName = (): string => 'Galantis Ltd';

export const getCompanyNameHeader = createSelector(
  [getCompanyName],
  (companyName: string): IHeader => {
    return {
      prefix: 'Get Business Account / ',
      title: companyName,
    };
  },
);

export const getPersonalRegistration = createSelector([getRegistration], (registration: IRegistrationState):
  | IPersonalRegistration
  | undefined => pathOr(undefined, ['data'])(registration));

export const getCardOrder = createSelector([getRegistration], (registration: IRegistrationState):
  | ICardOrder
  | undefined => pathOr(undefined, ['data', 'cardOrder'])(registration));

export const getRegistrationForm = createSelector([getRegistration], (registration: IRegistrationState):
  | IPersonalRegistrationForm
  | undefined => pathOr(undefined, ['data', 'registrationForm'])(registration));

export const getAddressProofDocument = createSelector([getRegistration], (registration: IRegistrationState):
  | IAddressProofDocument
  | undefined => pathOr(undefined, ['data', 'registrationForm', 'addressProofDocument'])(registration));

export const getIdentityDocument = createSelector([getRegistration], (registration: IRegistrationState):
  | IIdentityDocument
  | undefined => pathOr(undefined, ['data', 'registrationForm', 'identityDocument'])(registration));

export const getResidenceAddress = createSelector([getRegistration], (registration: IRegistrationState):
  | IResidenceAddress
  | undefined => pathOr(undefined, ['data', 'registrationForm', 'residenceAddress'])(registration));

export const getPageCompleteSelector = createSelector([getCurrentRouterPath], (pathname: string) => {
  let calculated = false;
  let redirect: string | null = null;
  return (store: IStore): string | null => {
    if (calculated) {
      return redirect;
    }
    calculated = true;
    // eslint-disable-next-line no-restricted-syntax
    for (const rule of stepCompleteRules) {
      const { path, selector } = rule;
      if (path === pathname) {
        break;
      }
      if (selector(store)) {
        // eslint-disable-next-line no-continue
        continue;
      }
      return (redirect = path);
    }
    return redirect;
  };
});
