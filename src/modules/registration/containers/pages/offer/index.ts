import { connect } from 'react-redux';

import { IStore } from 'modules/store/types';
import { doNothing } from 'modules/registration/utils/doNothing';
import Offer from '../../../components/pages/offer';
import { IRegistrationOfferDispatchProps } from '../../../components/pages/offer/types';
import { pageComplete } from '../../../models/pages/offer/redux/actions';
import { IOfferFormData } from '../../../models/pages/offer/entities';
import { getOfferFormData } from '../../../models/pages/offer/redux/selectors';
import { setOfferFormData } from '../../../models/registration/redux/actions/redux-forms';

const mapStateToProps = (store: IStore) => {
  const initialValues: IOfferFormData | undefined = getOfferFormData(store);
  return {
    initialValues,
  };
};

const mapDispatchToProps = (dispatch: any): IRegistrationOfferDispatchProps => ({
  onSubmit: (data: IOfferFormData) => {
    dispatch(setOfferFormData(data));
    dispatch(pageComplete());
  },
  onDataProtectionPolicyClick: () => doNothing(),
  onGeneralTermsAndConditionsClick: () => doNothing(),
  onPreContractalInformationClick: () => doNothing(),
  onPriceListClick: () => doNothing(),
  onSecureUsageOfTheCardClick: () => doNothing(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Offer);
