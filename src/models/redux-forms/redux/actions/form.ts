import { Dispatch, ThunkAction } from 'utils/utilTypings';
import {
  change, clearFields, reset, untouch
} from 'redux-form';

const resetForm = (formName: string): ThunkAction => (dispatch: Dispatch) => {
  dispatch(reset(formName));
};

const setFormFieldValue = <T>(formName: string, fieldName: string, value: T): ThunkAction => (dispatch: Dispatch) => {
  dispatch(change(formName, fieldName, value, false));
};

const clearFormFields = (formName: string, fieldName: string): ThunkAction => (dispatch: Dispatch) => {
  dispatch(clearFields(formName, false, false, fieldName));
  dispatch(untouch(formName, fieldName));
};

export const resetSmsCodeForm = () => resetForm('selectSmsCodeForm');
export const setSmsCodeToInitialForm = () => setFormFieldValue('selectSmsCodeForm', 'code', '');
export const clearSMSCodeField = () => clearFormFields('selectSmsCodeForm', 'code');
