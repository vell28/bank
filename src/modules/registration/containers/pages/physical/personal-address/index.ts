import { connect } from 'react-redux';

import { IStore } from 'modules/store/types';
import PersonalAddress from '../../../../components/pages/physical/personal-address';
import { IPersonalAddressFormData } from '../../../../models/pages/physical/personal-address/entities';
import { pageComplete } from '../../../../models/pages/physical/personal-address/redux/actions';
import {
  getPersonalAddressFormError,
  getPersonalAddressFormData,
  getAddressDeliver,
  getIsResidence,
} from '../../../../models/pages/physical/personal-address/redux/selectors';
import { setPersonalAddressFormData } from '../../../../models/registration/redux/actions/redux-forms';

const mapStateToProps = (store: IStore) => {
  const initialValues: IPersonalAddressFormData | undefined = getPersonalAddressFormData(store);
  return {
    isResidence: getIsResidence(store),
    addressDeliver: getAddressDeliver(store),
    fieldsErrors: getPersonalAddressFormError(store),
    initialValues,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onSubmit: (data: IPersonalAddressFormData) => {
    dispatch(setPersonalAddressFormData(data));
    dispatch(pageComplete());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalAddress);
