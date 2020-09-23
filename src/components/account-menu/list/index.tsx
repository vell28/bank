import React from 'react';
import { useTranslation } from 'react-i18next';
import { equals, and, isEmpty } from 'ramda';

import { getBankingAccountPath } from 'containers/routing/utils';
import { IBalance, IAccountBalances } from 'models/organizations/entities';
import { CurrencySymbols, CurrencyCodeType } from 'modules/currencies';
import {
  AccountMenuBox,
  AccountBox,
  AccountType,
  AccountCurrenciesBox,
  LinkCurrencies,
  AccountBlock,
} from '../elements';

export interface IAccountMenuProps {
  personalAccountBalances: IAccountBalances;
  businessAccountBalances: IAccountBalances;
  activeId: string;
  activeCurrency: CurrencyCodeType;
}

export const AccountMenuList: React.FC<IAccountMenuProps> = ({
  personalAccountBalances,
  businessAccountBalances,
  activeId,
  activeCurrency,
}) => {
  const { t } = useTranslation();
  const currenciesBlock = (id: string, balances: IBalance[]) =>
    balances.map((balance: IBalance) => {
      const isActive = and(equals(id, activeId), equals(activeCurrency, balance.currency));
      return (
        <AccountCurrenciesBox key={`${id}${balance.currency}`} className={isActive ? 'active-account' : ''}>
          <LinkCurrencies to={getBankingAccountPath(id, balance.currency)}>
            {CurrencySymbols[balance.currency]}
            {' '}
            {balance.balance}
          </LinkCurrencies>
        </AccountCurrenciesBox>
      );
    });

  return (
    <AccountMenuBox>
      <AccountBox>
        {!isEmpty(personalAccountBalances) && (
          <>
            <AccountType>
              <span>{t('personal')}</span>
            </AccountType>
            {Object.keys(personalAccountBalances).map((key: string) => (
              <AccountBlock key={key}>{currenciesBlock(key, personalAccountBalances[key])}</AccountBlock>
            ))}
          </>
        )}
        {!isEmpty(businessAccountBalances) && (
          <>
            <AccountType top={30}>
              <span>{t('business')}</span>
            </AccountType>
            {Object.keys(businessAccountBalances).map((key: string) => (
              <AccountBlock key={key}>{currenciesBlock(key, businessAccountBalances[key])}</AccountBlock>
            ))}
          </>
        )}
      </AccountBox>
    </AccountMenuBox>
  );
};
