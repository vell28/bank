import React, { useState } from 'react';
import { InjectedFormProps, reduxForm, Field } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { SpinnerWrapper } from '@components/spinner';
import { removeSpaces } from 'utils/normalize';
import { cutPhoneMask, isRequired } from 'utils/redux-form/redux-form';
import { PopupSelectCountry } from '@components/popup/popup-select-country';
import { passwordRequired, countryRequired } from 'utils/required-names';
import { ICountry } from '@components/popup/popup-select-country/country-list';
import { SignBtn } from '../../common/button/signin/elements';
import { AuthTextInput } from '../fields/authorization';
import {
  LoginForm, Line, CountryBox, SelectLine
} from './elements';

interface ISignInProps {
  onSubmit?: (values: object) => any;
  showModal?: () => void;
  onReduxFormChange: (form: string, field: string, value: string) => void;
  isLoading?: boolean;
  hasError?: boolean;
}

export interface IFormData {
  country: string;
  phone: string;
  password: string;
  code: string;
}

type Props = InjectedFormProps<IFormData, ISignInProps> & ISignInProps;

export const SignInForm: React.FC<Props> = ({
  handleSubmit, onReduxFormChange, form, isLoading = false
}: Props) => {
  const { t } = useTranslation();
  const [isShown, setShown] = useState<boolean>(false);
  const [country, setCountry] = useState<ICountry>({});

  const toggle = () => setShown(!isShown);

  const onSetCountry = (newCountry: ICountry) => {
    setCountry(newCountry);
    toggle();
    onReduxFormChange(form, 'country', newCountry.name || '');
    onReduxFormChange(form, 'code', `+${newCountry.dialCode}`);
  };

  return (
    <LoginForm>
      <SelectLine onClick={toggle}>
        <AuthTextInput
          title="Country"
          name="country"
          type="text"
          validateFns={[countryRequired]}
          placeholder={t('select country')}
          isReadOnly
        />
      </SelectLine>
      <Line>
        <AuthTextInput
          title="Phone number"
          name="phone"
          type="tel"
          prefix={`+${country.dialCode || '000'}`}
          mask={cutPhoneMask}
          validateFns={[isRequired('Phone number')]}
        />
      </Line>
      <Line>
        <AuthTextInput
          title="Password"
          name="password"
          type="password"
          placeholder={t('enter password')}
          validateFns={[passwordRequired]}
          normalize={removeSpaces}
        />
      </Line>
      <Line>
        <SignBtn onClick={handleSubmit} disabled={isLoading} type="submit">
          <SpinnerWrapper isLoading={isLoading} fill="white">
            {t('sign in')}
          </SpinnerWrapper>
        </SignBtn>
      </Line>
      <CountryBox>
        <PopupSelectCountry isShown={isShown} onCancel={toggle} selectedCountry={country} onSelect={onSetCountry} />
      </CountryBox>
      <Field name="code" component="input" type="hidden" />
    </LoginForm>
  );
};

export default reduxForm<IFormData, ISignInProps>({
  form: 'signInConfirmForm',
})(SignInForm);
