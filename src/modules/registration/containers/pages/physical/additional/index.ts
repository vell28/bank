import { connect } from 'react-redux';
import { change } from 'redux-form';

import { IStore } from 'modules/store/types';
import Additional from '../../../../components/pages/physical/additional';
import { idScanInvestigateDocAction, idScanInvestigateSelfieAction } from '../../../../models/idscan/redux/actions';
import { getPersonEntryId } from '../../../../models/idscan/redux/selectors';
import { IAdditionalFormData } from '../../../../models/pages/physical/additional/entities';
import { pageComplete } from '../../../../models/pages/physical/additional/redux/actions';
import {
  getDocument,
  getSelfie,
  getAdditionalFormData,
  getAdditionalFormError,
  isLoading,
} from '../../../../models/pages/physical/additional/redux/selectors';
import { setAdditionalFormData } from '../../../../models/registration/redux/actions/redux-forms';

const mapStateToProps = (store: IStore) => {
  const initialValues: IAdditionalFormData | undefined = getAdditionalFormData(store);
  return {
    document: getDocument(store),
    selfie: getSelfie(store),
    personEntryId: getPersonEntryId(store),
    isLoading: isLoading(store),
    fieldsErrors: getAdditionalFormError(store),
    initialValues,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onSubmit: (data: IAdditionalFormData) => {
    dispatch(setAdditionalFormData(data));
    dispatch(pageComplete());
  },
  formChange: (form: string, field: string, value: any) => dispatch(change(form, field, value)),
  idScanInvestigateDocAction: (scan: string) => dispatch(idScanInvestigateDocAction(scan)),
  idScanInvestigateSelfieAction: (personId: string, scan: string) =>
    dispatch(idScanInvestigateSelfieAction(personId, scan)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Additional);
