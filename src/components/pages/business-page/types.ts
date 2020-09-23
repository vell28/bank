export interface IBusinessPageDispatchProps {
  onOpenCompanyClick: () => void;
  onBusinessAccountClick: () => void;
  onAccountingClick: () => void;
  onBusinessSoftwareClick: () => void;
  onInsuranceClick: () => void;
  onPersonalAssistingClick: () => void;
  onHowItWorksClick: () => void;
}

// even we know we never be changing this component to show something
// we won't break the pattern
// tslint:disable-next-line: no-empty-interface
export type IBusinessPageProps = IBusinessPageDispatchProps
