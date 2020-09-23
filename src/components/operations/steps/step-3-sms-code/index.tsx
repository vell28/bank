import React from 'react';
import { useTranslation } from 'react-i18next';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { SpinnerWrapper } from '@components/spinner';
import { isValidMinLength, smsMask } from 'utils/redux-form/redux-form';
import { isRequiredCode } from 'utils/required-names';
import { setPlaceholder } from 'utils/setPlaceholderForSms';
import {
  Box, Title, NextBtnBox, TextInputBox
} from '../elements';
import { NextBtn } from '../../../common/button/next/elements';

import { SingleTextInput } from '../../../redux-form/single-text-input';
import { ResendLink } from '../../../common/button/link/elements';

export interface ICodeFormData {
  code: string;
}

interface ITransferStep3Props {
  isLoading: boolean;
  codeLength: number;
  title?: string;
  onNext: ({ code }: ICodeFormData) => void;
  onResend?: () => void;
}

type Props = InjectedFormProps<ICodeFormData, ITransferStep3Props> & ITransferStep3Props;

export const TransferStep3: React.FC<Props> = ({
  handleSubmit,
  isLoading,
  codeLength,
  onNext,
  title = 'Transfer / Card',
  onResend = () => null,
}) => {
  const { t } = useTranslation();
  return (
    <Box>
      <Title>{t(title)}</Title>
      <TextInputBox>
        <SingleTextInput
          title="Sms code"
          isLoading={isLoading}
          validateFns={[isRequiredCode, isValidMinLength(codeLength)]}
          placeholder={setPlaceholder(codeLength)}
          mask={smsMask(codeLength)}
          name="code"
        />
      </TextInputBox>
      <NextBtnBox>
        <NextBtn onClick={handleSubmit(onNext)} isLoading={isLoading}>
          <SpinnerWrapper isLoading={isLoading}>
            {' '}
            {t('Next')}
          </SpinnerWrapper>
        </NextBtn>
      </NextBtnBox>
      <ResendLink onClick={onResend}>{t('Re-send code')}</ResendLink>
    </Box>
  );
};

export default reduxForm<ICodeFormData, ITransferStep3Props>({
  form: 'selectSmsCodeForm',
})(TransferStep3);
