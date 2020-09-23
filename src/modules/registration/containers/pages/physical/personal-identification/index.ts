import { connect } from 'react-redux';

import { IStore } from 'modules/store/types';
import PersonalIdentification from '../../../../components/pages/physical/personal-identification';
import { IPersonalIdentificationFormData } from '../../../../models/pages/physical/personal-identification/entities';
import { pageComplete } from '../../../../models/pages/physical/personal-identification/redux/actions';
import {
  getPersonalIdentificationFormData,
  getPersonalIdentificationFormError,
} from '../../../../models/pages/physical/personal-identification/redux/selectors';
import { setPersonalIdentificationFormData } from '../../../../models/registration/redux/actions/redux-forms';
import {
  getIsNameFieldIdScanError,
  getIsSurnameFieldIdScanError,
  getIsBirthDateFieldIdScanError,
} from '../../../../models/registration/redux/selectors/redux-forms';

const mapStateToProps = (store: IStore) => {
  const initialValues: IPersonalIdentificationFormData | undefined = getPersonalIdentificationFormData(store);
  return {
    isNameFieldIdScanError: getIsNameFieldIdScanError(store),
    isSurnameFieldIdScanError: getIsSurnameFieldIdScanError(store),
    isBirthDateFieldIdScanError: getIsBirthDateFieldIdScanError(store),
    fieldsErrors: getPersonalIdentificationFormError(store),
    initialValues,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onSubmit: (data: IPersonalIdentificationFormData) => {
    dispatch(setPersonalIdentificationFormData(data));
    dispatch(pageComplete());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalIdentification);
