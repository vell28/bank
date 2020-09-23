import { connect } from 'react-redux';

import { IStore } from 'modules/store/types';
import BasicPersonalData from '../../../../components/pages/physical/basic-personal-data';
import { IBasicPersonalDataFromData } from '../../../../models/pages/physical/basic-personal-data/entities';
import { pageComplete } from '../../../../models/pages/physical/basic-personal-data/redux/actions';
import {
  getBasicPersonalDataFormData,
  getBasicPersonalDataFormError,
} from '../../../../models/pages/physical/basic-personal-data/redux/selectors';
import { setBasicPersonalDataFormData } from '../../../../models/registration/redux/actions/redux-forms';
import { getIsGenderFieldIdScanError } from '../../../../models/registration/redux/selectors/redux-forms';

const mapStateToProps = (store: IStore) => {
  const initialValues: IBasicPersonalDataFromData | undefined = getBasicPersonalDataFormData(store);
  return {
    isGenderFieldIdScanError: getIsGenderFieldIdScanError(store),
    fieldsErrors: getBasicPersonalDataFormError(store),
    initialValues,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onSubmit: (data: IBasicPersonalDataFromData) => {
    dispatch(setBasicPersonalDataFormData(data));
    dispatch(pageComplete());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BasicPersonalData);
