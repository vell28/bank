import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { AppWrapper } from 'components/common/app-wrapper';

import {
  AccountBlock,
  AccountTabs,
  DetailBox,
  CardsBlock,
} from 'components/account-banking/elements';
import { AccountBtn } from 'components/common/button/account/elements';
import { SidebarDropBtn } from 'components/common/button/dropdown';
import { SidebarDropDown } from 'components/dropdown';
import { AccountDetails } from 'components/account-banking/account-details';

import {
  getCurrentAccount,
  isAccountLazyLoading,
  getActiveCardsByAccount,
} from 'models/organizations/redux/selectors';
import { MainModalContentType } from 'models/main-modal/entities';
import { Skeleton } from 'components/skeleton';
import { Block3Skelet } from 'components/skeleton/collections';
import { showModalWithContent } from 'models/main-modal/redux/actions';
import { IAccount } from 'models/organizations/entities';
import { IStore } from 'modules/store/types';
import { ICard } from 'models/operations/card-settings/entities';
import { getBankName, getBankBIС } from 'models/application/redux/selectors';
import { exportAccountDetails, copyAccountDetails } from 'models/application/redux/actions';
import AccountCardSlider from './slider';

import { TRANSFER_CARD_MODAL } from '../../operations/transfer-to-card';
import { TRANSFER_CONTACT_MODAL } from '../../operations/transfer-to-contact';
import { TRANSFER_BANK_MODAL } from '../../operations/transfer-to-bank';
import { TOP_UP_FROM_CARD_MODAL } from '../../operations/top-up-from-card';
import { TOP_UP_TRANSFER_MODAL } from '../../operations/top-up-transfer';
import { TOP_UP_REQUEST_MODAL } from '../../operations/top-up-request';
import { TRANSFER_EXCHANGE_MODAL } from '../../operations/transfer-to-exchange';

import { TOP_UP_CASHE_MODAL } from '../../operations/top-up-cash';

interface IBankingAccountPageProps {
  account?: IAccount;
  isLoading: boolean;
  activeCards: ICard[];
  showModal: (id: MainModalContentType) => void;
  activeSliderIndex: number;
  onSelectCard: (accountId: string, card: ICard, index: number) => void;
  bankTitle: string;
  bankTin: string;
  onExportAccountDetails: () => void;
  onCopyAccountDetails: () => void;
}

export const BankingAccountPage: React.FC<IBankingAccountPageProps> = ({
  isLoading,
  account,
  showModal,
  activeCards,
  bankTitle,
  bankTin,
  onExportAccountDetails,
  onCopyAccountDetails,
}) => {
  const { t } = useTranslation();
  const [isShownDetail, setShown] = useState(false);

  const showTopUpCard = () => showModal(TOP_UP_FROM_CARD_MODAL);
  const showTransferCard = () => showModal(TRANSFER_CARD_MODAL);
  const showTransferContact = () => showModal(TRANSFER_CONTACT_MODAL);
  const showTransferBank = () => showModal(TRANSFER_BANK_MODAL);
  const showTopUpTransfer = () => showModal(TOP_UP_TRANSFER_MODAL);
  const showTopUpRequest = () => showModal(TOP_UP_REQUEST_MODAL);
  const showTopUpCashe = () => showModal(TOP_UP_CASHE_MODAL);
  const showTransferExhcange = () => showModal(TRANSFER_EXCHANGE_MODAL);
  return (
    <AppWrapper>
      <Skeleton isLoading={isLoading} render={<Block3Skelet />}>
        <AccountBlock>
          <h2>{t('Top Up')}</h2>
          <AccountTabs>
            <AccountBtn onClick={showTopUpCard}>{t('card')}</AccountBtn>
            <AccountBtn onClick={showTopUpTransfer}>{t('transfer')}</AccountBtn>
            <AccountBtn onClick={showTopUpRequest}>{t('request')}</AccountBtn>
            <AccountBtn onClick={showTopUpCashe}>{t('cash')}</AccountBtn>
          </AccountTabs>
        </AccountBlock>
        <AccountBlock>
          <h2>{t('Transfer')}</h2>
          <AccountTabs>
            <AccountBtn onClick={showTransferCard}>{t('card')}</AccountBtn>
            <AccountBtn onClick={showTransferBank}>{t('bank')}</AccountBtn>
            <AccountBtn onClick={showTransferContact}>
              {t('contact')}
            </AccountBtn>
            <AccountBtn onClick={showTransferExhcange}>
              {t('exchange')}
            </AccountBtn>
          </AccountTabs>
        </AccountBlock>
        {account && (
          <CardsBlock>
            <h2>
              {t('Attached Cards')}
              {' '}
              (
              {activeCards.length}
              )
            </h2>
            <AccountCardSlider />
            <DetailBox isShown={isShownDetail}>
              <SidebarDropDown
                isShown={isShownDetail}
                render={(
                  <AccountDetails
                    account={account}
                    bankTitle={bankTitle}
                    bankTin={bankTin}
                    onCopy={onCopyAccountDetails}
                    onExport={onExportAccountDetails}
                  />
)}
                borderRadius={13}
              >
                <SidebarDropBtn onClick={setShown} isActive={isShownDetail}>
                  {t('Bank Account Details')}
                </SidebarDropBtn>
              </SidebarDropDown>
            </DetailBox>
          </CardsBlock>
        )}
      </Skeleton>
    </AppWrapper>
  );
};

export const mapStateToProps = (store: IStore) => ({
  account: getCurrentAccount(store),
  activeCards: getActiveCardsByAccount(store),
  isLoading: isAccountLazyLoading(store),
  bankTitle: getBankName(store),
  bankTin: getBankBIС(store),
});

const mapDispatchToProps = (dispatch: any) => ({
  showModal: (contentId: MainModalContentType) =>
    dispatch(showModalWithContent(contentId)),
  onExportAccountDetails: () => dispatch(exportAccountDetails()),
  onCopyAccountDetails: () => dispatch(copyAccountDetails()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BankingAccountPage);
