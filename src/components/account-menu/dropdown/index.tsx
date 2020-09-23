import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CurrencySymbols } from 'modules/currencies';
import { IAccount, IBalance } from 'models/organizations/entities';
import {
  AccountMenuBox,
  DropDown,
  AccountBox,
  AccountType,
  AccountCurrenciesBox,
  AccountCurrencies,
} from '../elements';

import { CheckBox } from '../../common/checkbox';

export interface IAccountMenuProps {
  onDone: (checked: ICheckedAccount) => void;
  personalAccounts: IAccount[];
  businessAccounts: IAccount[];
  maxHeight?: number;
  checked?: ICheckedAccount;
}

interface ICheckedAccount {
  [key: string]: boolean;
}
/* tslint:disable:jsx-no-lambda */
export const AccountMenuDropdown: React.FC<IAccountMenuProps> = ({
  onDone,
  personalAccounts,
  businessAccounts,
  maxHeight,
  checked = {},
}) => {
  const { t } = useTranslation();
  const [checkedState, setChecked] = useState<ICheckedAccount>(checked);
  const onCheck = (id: string) => setChecked({ ...checkedState, [id]: !checkedState[id] });

  const currenciesBlock = (account: IAccount) =>
    account.balances.map((balance: IBalance) => {
      const id = `${account.id}${balance.currency}`;
      return (
        <AccountCurrenciesBox key={id}>
          <AccountCurrencies>
            <CheckBox onCheck={() => onCheck(id)} isChecked={!!checkedState[id]}>
              {CurrencySymbols[balance.currency]}
              {balance.balance}
            </CheckBox>
          </AccountCurrencies>
        </AccountCurrenciesBox>
      );
    });

  return (
    <AccountMenuBox maxHeight={maxHeight} data-overflow="true">
      <AccountBox>
        <AccountType left={31}>
          <span>{t('personal')}</span>
        </AccountType>
        {personalAccounts.map((account: IAccount) => currenciesBlock(account))}
        <AccountType top={27} left={31}>
          <span>{t('business')}</span>
        </AccountType>
        {businessAccounts.map((account: IAccount) => currenciesBlock(account))}
      </AccountBox>
      <DropDown onClick={() => onDone(checkedState)}>
        <span>{t('done')}</span>
      </DropDown>
    </AccountMenuBox>
  );
};
/* tslint:enable:jsx-no-lambda */
