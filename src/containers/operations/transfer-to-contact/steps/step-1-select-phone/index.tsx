import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import {
  Box, Title, NextBtnBox, NextBtn, TextInputBox
} from 'components/operations/steps/elements';
import { nextStep } from 'models/main-modal/redux/actions';
import { SingleTextInput } from 'components/redux-form/single-text-input';

import { setFromAccountPhone } from 'models/operations/transfer/redux/actions/contact';
import { isRequired, phoneMask } from 'utils/redux-form/redux-form';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { isPhoneBelongToClient } from './async-validation/isPhoneBelongToClient';

export interface IFormData {
  phone: string;
}

export interface ITransferStep1Props {
  onSubmit: (phone: IFormData) => void;
}

type Props = InjectedFormProps<IFormData, ITransferStep1Props> & ITransferStep1Props;

export const TransferStep1: React.FC<Props> = ({ handleSubmit }) => {
  const { t } = useTranslation();
  return (
    <Box>
      <Title>{t('Transfer / Contact')}</Title>
      <TextInputBox textWrap="normal">
        <SingleTextInput
          title="Phone number"
          isLoading={false}
          validateFns={[isRequired('Phone number')]}
          mask={phoneMask}
          name="phone"
        />
      </TextInputBox>
      <NextBtnBox>
        <NextBtn onClick={handleSubmit}>{t('Next')}</NextBtn>
      </NextBtnBox>
    </Box>
  );
};

const form = reduxForm<IFormData, ITransferStep1Props>({
  form: 'transferToContactForm',
  asyncValidate: isPhoneBelongToClient,
  asyncBlurFields: ['phone'],
})(TransferStep1);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSubmit: ({ phone }: IFormData) => {
    dispatch(setFromAccountPhone(phone.replace(/\D+/g, '')));
    dispatch(nextStep);
  },
});

export default connect(null, mapDispatchToProps)(form);
