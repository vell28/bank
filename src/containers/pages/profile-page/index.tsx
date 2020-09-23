import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { MainBorderContainer } from 'components/common/app-wrapper/elements';
import { IStore } from 'modules/store/types';
import { PopupBlockCard } from 'components/common/popup/popup-dialog';
import { getIsShownLogoutConfirmModal } from 'models/authorization/redux/selectors';
import { toggleLogoutModal, goToAuth } from 'models/authorization/redux/actions';
import {
  Title, Column, Columns, Link, More
} from './elements';

interface IProfilePageProps {
  toggleConfirmModal: (isShown: boolean) => void;
  logOut: () => void;
  isShownModal: boolean;
}

interface IStateFromProps {
  isShownModal: boolean;
}

interface IDispatchFromProps {
  toggleConfirmModal: (isShown: boolean) => void;
  logOut: () => void;
}

export const ProfilePage: React.FC<IProfilePageProps> = ({ toggleConfirmModal, logOut, isShownModal }) => {
  const shownModal = () => toggleConfirmModal(true);
  const hideModal = () => toggleConfirmModal(false);

  const { t } = useTranslation();
  return (
    <MainBorderContainer>
      <Title>{t('Profile')}</Title>
      <Columns>
        <Column>
          <Link>{t('identity status')}</Link>
          <Link>{t('personal info')}</Link>
        </Column>
        <Column>
          <Link>{t('my tariff')}</Link>
          <Link>{t('legal notices')}</Link>
        </Column>
      </Columns>
      <More onClick={shownModal}>{t('log out')}</More>
      <PopupBlockCard
        title="Log Out"
        description="Are you sure you want to log out?"
        actionText="Log Out"
        onCancel={hideModal}
        onReject={logOut}
        isShown={isShownModal}
      />
    </MainBorderContainer>
  );
};

const mapDispatchToProps = (dispatch: any): IDispatchFromProps => ({
  toggleConfirmModal: (isShown: boolean) => dispatch(toggleLogoutModal(isShown)),
  logOut: () => dispatch(goToAuth),
});

const mapStateToProps = (store: IStore): IStateFromProps => ({
  isShownModal: getIsShownLogoutConfirmModal(store),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
