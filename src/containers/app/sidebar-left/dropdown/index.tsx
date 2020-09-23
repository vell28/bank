import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Dispatch, Action } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';

import { IAccount } from 'models/organizations/entities';
import { AccountMenuDropdown } from 'components/account-menu/dropdown';
import { SidebarDropBtn } from 'components/common/button/dropdown';
import { getAccountSidebarMenu, getIsShownSidebar } from 'models/account-sidebar/redux/selectors';
import { toggleSidebar, getSidebarAccountId } from 'models/account-sidebar/redux/actions';
import { Skeleton } from 'components/skeleton';
import { SingleSkelet } from 'components/skeleton/collections';

import { getBusinessAccounts, getPersonalAccounts, isAccountLazyLoading } from 'models/organizations/redux/selectors';
import { IStore } from 'modules/store/types';
import { SidebarDropDown as DropDown } from '../../../../components/dropdown';

interface IChecked {
  [key: string]: boolean;
}

interface ISidebarDropdownProps {
  isShown: boolean;
  toggleShown: (isShown: boolean) => void;
  personalAccounts: IAccount[];
  businessAccounts: IAccount[];
  setCheckedAccounts: (checked: IChecked) => void;
  checked: IChecked;
  isLoading: boolean;
}

type IProps = ISidebarDropdownProps & RouteComponentProps;

export const SidebarDropDown: React.FC<IProps> = ({
  isShown,
  toggleShown,
  businessAccounts,
  personalAccounts,
  checked,
  setCheckedAccounts,
  isLoading,
}) => {
  const { t } = useTranslation();
  const onDone = (checkedItems: IChecked) => {
    toggleShown(false);
    setCheckedAccounts(checkedItems);
  };

  return (
    <Skeleton render={<SingleSkelet height={30} />} isLoading={isLoading}>
      <DropDown
        isShown={isShown}
        render={(
          <AccountMenuDropdown
            onDone={onDone}
            personalAccounts={personalAccounts}
            businessAccounts={businessAccounts}
            checked={checked}
          />
)}
      >
        <SidebarDropBtn onClick={toggleShown} isActive={isShown}>
          {t('accounts')}
        </SidebarDropBtn>
      </DropDown>
    </Skeleton>
  );
};

const mapStateToProps = (store: IStore) => ({
  isShown: getIsShownSidebar(store),
  personalAccounts: getPersonalAccounts(store),
  businessAccounts: getBusinessAccounts(store),
  isLoading: isAccountLazyLoading(store),
  checked: getAccountSidebarMenu(store),
});

const mapDispatchToProps = (dispatch: Dispatch & ThunkDispatch<Action, IStore, any>) => ({
  toggleShown: (isShown: boolean) => dispatch(toggleSidebar(isShown)),
  setCheckedAccounts: (checked: { [key: string]: boolean }) => dispatch(getSidebarAccountId(checked)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SidebarDropDown));
