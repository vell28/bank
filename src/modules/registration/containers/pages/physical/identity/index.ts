import { connect } from 'react-redux';
import { change, FormAction } from 'redux-form';

import { IStore } from 'modules/store/types';
import Identity from '../../../../components/pages/physical/identity';
import { IIdentityFormData } from '../../../../models/pages/physical/identity/entities';
import { pageComplete } from '../../../../models/pages/physical/identity/redux/actions';
import { getIdentityFormData, getIdentityFormError } from '../../../../models/pages/physical/identity/redux/selectors';
import { setIdentityFormData } from '../../../../models/registration/redux/actions/redux-forms';
import {
  getIsDocumentNumberFieldIdScanError,
  getIsExpiryDateFieldIdScanError,
  getExpiryDate,
  getIsNoExpired,
} from '../../../../models/registration/redux/selectors/redux-forms';

const mapStateToProps = (store: IStore) => {
  const initialValues: IIdentityFormData | undefined = getIdentityFormData(store);
  return {
    isDocumentNumberFieldIdScanError: getIsDocumentNumberFieldIdScanError(store),
    isExpiryDateFieldIdScanError: getIsExpiryDateFieldIdScanError(store),
    fieldsErrors: getIdentityFormError(store),
    expiryDate: getExpiryDate(store),
    isNoExpired: getIsNoExpired(store),
    initialValues,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onSubmit: (data: IIdentityFormData) => {
    dispatch(setIdentityFormData(data));
    dispatch(pageComplete());
  },
  onFieldChange: (form: string, field: string, value: any): FormAction => dispatch(change(form, field, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Identity);
