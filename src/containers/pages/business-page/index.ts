import { connect } from 'react-redux';
import { BusinessPage } from '../../../components/pages/business-page';
import { IBusinessPageDispatchProps } from '../../../components/pages/business-page/types';
import { doNothing } from '../../../modules/registration/utils/doNothing';

const mapDispatchToProps = (): IBusinessPageDispatchProps => ({
  onOpenCompanyClick: () => doNothing(),
  onBusinessAccountClick: () => doNothing(),
  onAccountingClick: () => doNothing(),
  onBusinessSoftwareClick: () => doNothing(),
  onInsuranceClick: () => doNothing(),
  onPersonalAssistingClick: () => doNothing(),
  onHowItWorksClick: () => doNothing(),
});

export default connect(undefined, mapDispatchToProps)(BusinessPage);
