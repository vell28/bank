import { equals } from 'ramda';
import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { CheckBox } from 'components/common/checkbox';
import {
  Title,
  NextBtnBox,
  NextBtn,
} from 'components/operations/steps/elements';
import {
  ACCOUNTS,
  AccountTypeType,
} from 'models/operations/new-account/entities';
import {
  IAccountData,
} from 'models/operations/new-account/redux/actions';
import {
  CURRENCIES_IN_PROJECT,
  CurrencySymbols,
  CurrencyCodeType,
} from 'modules/currencies';

import * as Styled from './elements';

type ICheckedCurrency = CurrencyCodeType | null;
type ICheckedAccount = AccountTypeType | null;

interface IProps {
  createAccount: (account: IAccountData) => void;
}

/* tslint:disable:jsx-no-lambda */
export const NewAccount: React.FC<IProps> = ({
  createAccount,
}) => {
  const { t } = useTranslation();
  const [checkedCurrency, setCheckedCurrency] = useState<ICheckedCurrency>(null);
  const [checkedAccount, setCheckedAccount] = useState<ICheckedAccount>(null);
  const buttonDisabled = !(checkedCurrency && checkedAccount);
  const handleSubmit = useCallback(() => {
    if (checkedCurrency && checkedAccount) {
      const account = { accountCurrency: checkedCurrency, accountType: checkedAccount };
      createAccount(account);
    }
  }, [checkedCurrency, checkedAccount, createAccount]);

  return (
    <Styled.Box>
      <Title>New Account</Title>
      <Styled.Section>
        {CURRENCIES_IN_PROJECT.map(({ code, name }) => (
          <Styled.CurrencyItem
            key={code}
          >
            <CheckBox
              onCheck={() => setCheckedCurrency(code)}
              isChecked={checkedCurrency === code}
            >
              {t(name)}
              {' '}
              (
              {CurrencySymbols[code]}
              )
            </CheckBox>
          </Styled.CurrencyItem>
        ))}
      </Styled.Section>
      <Styled.Section>
        {ACCOUNTS.map(({ type, name }) => (
          <Styled.AccountItem
            key={type}
          >
            <CheckBox
              onCheck={() => setCheckedAccount(type)}
              isChecked={equals(checkedAccount, type)}
            >
              {t(name)}
            </CheckBox>
          </Styled.AccountItem>
        ))}
      </Styled.Section>
      <NextBtnBox>
        <NextBtn
          onClick={handleSubmit}
          isDisabled={buttonDisabled}
        >
          {t('Next')}
        </NextBtn>
      </NextBtnBox>
    </Styled.Box>
  );
};
/* tslint:enable:jsx-no-lambda */
