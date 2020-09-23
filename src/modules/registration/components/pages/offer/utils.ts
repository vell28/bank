import { IRegistrationOfferProps, IRegistrationOfferNavigationProps } from './types';

export const selectNavigationalProps = ({
  onDataProtectionPolicyClick,
  onGeneralTermsAndConditionsClick,
  onPreContractalInformationClick,
  onPriceListClick,
  onSecureUsageOfTheCardClick,
}: IRegistrationOfferProps): IRegistrationOfferNavigationProps => {
  return {
    onDataProtectionPolicyClick,
    onGeneralTermsAndConditionsClick,
    onPreContractalInformationClick,
    onPriceListClick,
    onSecureUsageOfTheCardClick,
  };
};
