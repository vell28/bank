import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { AccountMenuList } from 'components/account-menu/list';
import { BtnLink } from 'components/common/button/link/elements';
import { Skeleton } from 'components/skeleton';
import { BlockLeftSidebarSkelet } from 'components/skeleton/collections';
import { NEW_ACCOUNT_PATH } from 'containers/routing/utils';

import {
  getPersonalCheckedBalances,
  getBusinessCheckedBalances,
  isAccountLazyLoading,
  getCurrentAccountId,
  getCurrentCurrency,
} from 'models/organizations/redux/selectors';

import { IAccountBalances } from 'models/organizations/entities';
import { IStore } from 'modules/store/types';
import { CurrencyCodes } from 'modules/currencies';
import SidebarDropDown from './dropdown';
import { LeftSidebar as SidebarBox, AccountListBox, NewAccountBox } from './elements';

interface ILeftSidebarProps {
  personalAccountBalances: IAccountBalances;
  businessAccountBalances: IAccountBalances;
  accountId: string;
  currency: CurrencyCodes;
  isLoading: boolean;
}

type Props = ILeftSidebarProps & RouteComponentProps;

export const LeftSidebar: React.FC<Props> = ({
  personalAccountBalances,
  businessAccountBalances,
  accountId,
  currency,
  isLoading,
}) => {
  const { t } = useTranslation();
  return (
    <SidebarBox>
      <SidebarDropDown />
      <AccountListBox>
        <Skeleton isLoading={isLoading} render={<BlockLeftSidebarSkelet />}>
          <AccountMenuList
            personalAccountBalances={personalAccountBalances}
            businessAccountBalances={businessAccountBalances}
            activeId={accountId}
            activeCurrency={currency}
          />
          <NewAccountBox>
            <BtnLink to={NEW_ACCOUNT_PATH}>{t('new account')}</BtnLink>
          </NewAccountBox>
        </Skeleton>
      </AccountListBox>
    </SidebarBox>
  );
};

const mapStateToProps = (store: IStore) => ({
  personalAccountBalances: getPersonalCheckedBalances(store),
  businessAccountBalances: getBusinessCheckedBalances(store),
  accountId: getCurrentAccountId(store),
  currency: getCurrentCurrency(store),
  isLoading: isAccountLazyLoading(store),
});

export default withRouter(connect(mapStateToProps)(LeftSidebar));
