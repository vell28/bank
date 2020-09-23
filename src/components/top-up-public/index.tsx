import React from 'react';
import { useTranslation } from 'react-i18next';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { CurrencyCodeType } from 'modules/currencies';
import { ICardData } from 'models/operations/top-up/entities';
import { emailRequired } from 'utils/required-names';
import {
  TopUpPublicInner, Title, Line, EmailBox, TopUpPublickBtn, TopUpPublicBox
} from './elements';
import { TwoSideCard } from '../2-side-card';

import logo from '../app-header/logo.svg';
import { SingleTextInput } from '../redux-form/single-text-input';
import { DescriptionTitle } from '../operations/steps/elements';

interface ITopUpPublic {
  name?: string;
  amount?: number;
  description?: string;
  id?: string;
  currency?: CurrencyCodeType;
}

type Props = InjectedFormProps<ICardData> & ITopUpPublic;

export const TopUpPublicPage: React.FC<Props> = ({
  name, amount, description, currency, invalid, handleSubmit
}) => {
  const { t } = useTranslation();

  const descriptionTitle = (
    <DescriptionTitle>
      {t('Email')}
      <span>
        {' '}
        &nbsp;
        {t('(optional)')}
      </span>
    </DescriptionTitle>
  );

  return (
    <TopUpPublicBox>
      <TopUpPublicInner>
        <Title>
          <Line>
            {t('You received a money request from')}
            {' '}
            <br />
            <span>
              {name}
              {' '}
              (
              {amount}
              {' '}
              {currency}
              )
            </span>
          </Line>
          <img src={logo} alt="logo" />
        </Title>
        <Line>
          {t('Purpose of payment')}
          {' '}
          <br />
          <span>{description}</span>
        </Line>
        <TwoSideCard title="Pay from card:" />
        <EmailBox>
          <SingleTextInput title={descriptionTitle} validateFns={[emailRequired]} type="email" />
        </EmailBox>
        <TopUpPublickBtn isDisabled={invalid} onClick={handleSubmit}>
          {t('Pay')}
        </TopUpPublickBtn>
      </TopUpPublicInner>
    </TopUpPublicBox>
  );
};

export default reduxForm<ICardData, ITopUpPublic>({
  form: 'topUpRequestPublicForm',
})(TopUpPublicPage);
