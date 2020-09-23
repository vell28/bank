import { IOfferFormData } from '../../../models/pages/offer/entities';

export type command = () => void;

// Links lead you somewhere. We will extend this.
export interface IRegistrationOfferNavigationProps {
  onGeneralTermsAndConditionsClick: command;
  onSecureUsageOfTheCardClick: command;
  onPriceListClick: command;
  onDataProtectionPolicyClick: command;
  onPreContractalInformationClick: command;
}

export interface IRegistrationOfferDispatchProps extends IRegistrationOfferNavigationProps {
  onSubmit: (data: IOfferFormData) => void;
}

// tslint:disable-next-line: no-empty-interface
export type IRegistrationOfferProps = IRegistrationOfferDispatchProps;
