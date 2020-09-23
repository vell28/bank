import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import { propOr } from 'ramda';

import { IStore } from 'modules/store/types';
import AdditionalConfirm from '../../../../components/pages/physical/additional-confirm';
import {
  AdditionalInfoFormName,
  IAdditionalConfirmStateProps,
  IAdditionalConfirmDispatchProps,
  IAdditionalConfirmFormModel,
} from '../../../../components/pages/physical/additional-confirm/types';
import {
  isLoadingAddress,
  isLoadingProofOfWhelth,
} from '../../../../models/pages/physical/additional-confirm/redux/selectors/stateSelectors';
import { sendAdditionalConfirmData } from '../../../../models/pages/physical/additional-confirm/redux/actions/apiActions';
import {
  uploadAddressDocumentAction,
  uploadProofOfWhelthDocumentAction,
  clearAddressDocumentAction,
  clearProofOfWhelthDocumentAction,
} from '../../../../models/pages/physical/additional-confirm/redux/actions/uploadFilesActions';

const additionalConfirmFormSelector = getFormValues(AdditionalInfoFormName);

const mapStateToProps = (state: IStore): IAdditionalConfirmStateProps => {
  const formState = additionalConfirmFormSelector(state);
  const addressDocument: string = propOr('', 'addressDocument')(formState);
  const wealthProofDocument: string = propOr('', 'wealthProofDocument')(formState);
  // const initialValues: IAdditionalConfirmFormData | undefined = getAdditionalConfirmFormData(store);
  return {
    isAddressDocumentLoading: isLoadingAddress(state),
    isProofOfWhelthDocumentLoading: isLoadingProofOfWhelth(state),
    addressDocument,
    wealthProofDocument,
  };
};

const mapDispatchToProps = (dispatch: any): IAdditionalConfirmDispatchProps => ({
  onSubmit: (data: IAdditionalConfirmFormModel) => dispatch(sendAdditionalConfirmData(data)),

  uploadAddressDocument: (data) => dispatch(uploadAddressDocumentAction(data)),
  uploadProofOfWhelthDocument: (data) => dispatch(uploadProofOfWhelthDocumentAction(data)),

  clearAddressDocument: () => dispatch(clearAddressDocumentAction),
  clearProofOfWhelthDocument: () => dispatch(clearProofOfWhelthDocumentAction),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalConfirm);
