import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { IStore } from 'modules/store/types';
import PhoneNumberComponent, {
  IPhoneNumberFormData,
  IPhoneNumberPageProps,
  ISendCodeData,
} from '../../../../components/pages/physical/phone-number';

import { getRegistrationPhone, getRegistrationCode } from '../../../../models/redux-forms/phone/selectors';

import {
  getFirebaseSendDate,
  isLoadingConfirm,
  isSendSuccess,
  getFirebaseActivePhone,
  getFirebaseActiveCountry,
} from '../../../../models/firebase-auth/redux/selectors';

import {
  sendCodeWithSubmitError,
  confirmCodeWithSubmitError,
  resetStateAction,
} from '../../../../models/firebase-auth/redux/actions';

type PhoneNumberProps = IPhoneNumberPageProps & {
  reset: () => void;
};

const PhoneNumber: React.FC<PhoneNumberProps> = (props: PhoneNumberProps) => {
  useEffect(() => {
    props.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <PhoneNumberComponent {...props} />;
};

const mapStateToProps = (store: IStore) => ({
  phoneValue: getRegistrationPhone(store),
  codeValue: getRegistrationCode(store),
  sendDate: getFirebaseSendDate(store),
  isLoadingConfirm: isLoadingConfirm(store),
  isSendSuccess: isSendSuccess(store),
  initialValues: {
    phone: getFirebaseActivePhone(store),
  },
  initCountry: getFirebaseActiveCountry(store),
});

const mapDispatchToProps = (dispatch: any) => ({
  sendCode: (data: ISendCodeData) => dispatch(sendCodeWithSubmitError(data.phone, data.country)),
  confirmCode: async (data: IPhoneNumberFormData) => dispatch(confirmCodeWithSubmitError(data.code)),
  reset: () => dispatch(resetStateAction),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneNumber);
