import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { SpinnerWrapper } from '@components/spinner';

import { isValidSmsMinLength } from 'utils/redux-form/redux-form';
import { smsLimit } from 'utils/normalize';
import { MAX_FAILED_ATTEMPTS } from 'models/operations/card-settings/redux/actions';
import { setPlaceholder } from 'utils/setPlaceholderForSms';
import { SignBtn } from '../../common/button/signin/elements';
import { AuthTextInput } from '../fields/authorization';
import { WhiteLink } from '../../common/button/link/elements';
import {
  LoginForm, Title, Line, InputWrap
} from './elements';

interface ISignInProps {
  phone?: string;
  codeLength?: number;
  onSubmit?: (values: object) => any;
  isLoading?: boolean;
  hasError?: boolean;
  onResend?: () => void;
  attempts?: number;
}

interface ISignInData {
  country: string;
  phone: string;
  password: string;
}

type Props = InjectedFormProps<ISignInData, ISignInProps> & ISignInProps;

export const SignInConfirmForm: React.FC<Props> = ({
  handleSubmit,
  phone = '',
  codeLength = 4,
  isLoading = false,
  attempts = 0,
  onResend,
}) => {
  const { t } = useTranslation();

  return (
    <LoginForm>
      <Title>
        {t('SMS with one-time password was sent to')}
        {' '}
        <br />
        <span>{phone}</span>
        {' '}
        <br />
        <br />
      </Title>
      <InputWrap>
        <AuthTextInput
          name="code"
          type="password"
          title="Enter one-time password below"
          validateFns={[isValidSmsMinLength(codeLength)]}
          placeholder={setPlaceholder(codeLength)}
          normalize={smsLimit(codeLength)}
        />
      </InputWrap>
      <Line>
        <SignBtn onClick={handleSubmit} disabled={isLoading} type="submit">
          <SpinnerWrapper isLoading={isLoading} fill="white">
            {t('Done')}
          </SpinnerWrapper>
        </SignBtn>
      </Line>
      {attempts <= MAX_FAILED_ATTEMPTS && (
        <WhiteLink to="#" onClick={onResend}>
          {t('Re-send one-time password')}
        </WhiteLink>
      )}
    </LoginForm>
  );
};

export default reduxForm<ISignInData, ISignInProps>({
  form: 'signInConfirmForm',
})(SignInConfirmForm);
