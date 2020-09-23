import React, { useState, useCallback } from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { PopupSelectCountry } from '@components/popup/popup-select-country';
import { phoneRequired, smsRequired } from 'utils/required-names';
import { ICountry } from '@components/popup/popup-select-country/country-list';
import { NextButton } from '../../../common/next-button';
import InputField from '../../../common/form-input/InputField';
import { PageHeader, PageContent, NextButtonLine } from '../../../page-content';
import * as Styled from './elements';
import { TimerBtn } from '../../../common/button';

import { phoneMask, codeValidation } from '../../../../utils/validations';

const MIN_PHONE_LENGTH = 5;
const RESEND_INTERVAL = 120 * 1000;

export interface ISendCodeData {
  phone: string;
  country: ICountry;
}

export interface IPhoneNumberPageProps {
  isSendSuccess: boolean;
  phoneValue: string;
  codeValue: string;
  sendDate?: number;
  sendCode: (data: ISendCodeData) => void;
  confirmCode: (data: IPhoneNumberFormData) => void;
  initCountry: ICountry;
}

export interface IPhoneNumberFormData {
  phone: string;
  code: string;
}

type Props = InjectedFormProps<IPhoneNumberFormData, IPhoneNumberPageProps> & IPhoneNumberPageProps;

const PhoneNumberComponent: React.FC<Props> = ({
  handleSubmit,
  submitting,
  phoneValue,
  codeValue,
  sendCode,
  confirmCode,
  isSendSuccess,
  sendDate,
  initCountry,
}) => {
  const [isModalShow, setIsModalShow] = useState<boolean>(false);
  const [country, setCountry] = useState<ICountry>(initCountry);

  const toggle = () => setIsModalShow(!isModalShow);

  const onSelect = useCallback((selectedCountry: ICountry) => {
    setIsModalShow(false);
    setCountry(selectedCountry);
  }, []);

  const onSendCode = (params: IPhoneNumberFormData) =>
    sendCode({
      phone: params.phone.replace(/-|\s/gi, ''),
      country,
    });

  const { t } = useTranslation();
  return (
    <Styled.Container>
      <Styled.TopWrap>
        <PageHeader>{t('Enter your phone number')}</PageHeader>
        <PageContent>
          <Styled.InputWrap disabled={isSendSuccess}>
            <Styled.PhoneNumber opacity={phoneValue} onClick={toggle}>
              <span>
                +
                {country.dialCode}
              </span>
              <span />
            </Styled.PhoneNumber>
            <InputField
              name="phone"
              placeholder="Phone number…"
              validate={[phoneRequired]}
              type="tel"
              normalize={phoneMask}
            />
            {!!phoneValue && phoneValue.length > MIN_PHONE_LENGTH && (
              <TimerBtn
                text="Send Code"
                onClick={handleSubmit(onSendCode)}
                endDate={sendDate ? sendDate + RESEND_INTERVAL : undefined}
              />
            )}
          </Styled.InputWrap>
          <Styled.InputWrap disabled={!isSendSuccess}>
            <InputField
              name="code"
              placeholder="Enter SMS Code"
              type="text"
              label="SMS code"
              validate={!isSendSuccess ? [] : [smsRequired]}
              normalize={codeValidation}
            />
          </Styled.InputWrap>
        </PageContent>
      </Styled.TopWrap>
      <NextButtonLine>
        <NextButton onClick={handleSubmit(confirmCode)} disabled={!codeValue || submitting} arrow>
          {t('Next')}
        </NextButton>
      </NextButtonLine>

      <PopupSelectCountry isShown={isModalShow} onCancel={toggle} selectedCountry={country} onSelect={onSelect} />
    </Styled.Container>
  );
};

export default reduxForm<IPhoneNumberFormData, IPhoneNumberPageProps>({
  form: 'registerPhoneForm',
})(PhoneNumberComponent);
