import React from 'react';
import { connect } from 'react-redux';
import { equals, and } from 'ramda';

import { CloseBtn } from 'components/common/button/close';
import { MainModalContentType } from 'models/main-modal/entities';
import {
  toggleMainModal,
  TRANSACTION_ERROR_MODAL,
} from 'models/main-modal/redux/actions';
import {
  getIsShownMainModal,
  getMainModalContentId,
} from 'models/main-modal/redux/selectors';
import { IStore } from 'modules/store/types';
import TransactionError from '../operations/transaction-error';
import { MainModalBox, MainModalCloseBox } from './elements';

import NewAccount, {
  NEW_ACCOUNT_MODAL,
} from '../operations/new-account';

import TransferToCard, {
  TRANSFER_CARD_MODAL,
} from '../operations/transfer-to-card';

import TransferToContact, {
  TRANSFER_CONTACT_MODAL,
} from '../operations/transfer-to-contact';

import TransferToBank, {
  TRANSFER_BANK_MODAL,
} from '../operations/transfer-to-bank';

import CardDetailInfo, {
  CARD_DETAIL_MODAL,
} from '../operations/card-settings';

import TopUpFromCard, {
  TOP_UP_FROM_CARD_MODAL,
} from '../operations/top-up-from-card';

import TopUpTransfer, {
  TOP_UP_TRANSFER_MODAL,
} from '../operations/top-up-transfer';

import TopUpRequest, {
  TOP_UP_REQUEST_MODAL,
} from '../operations/top-up-request';

import OrderNewCard, {
  ORDER_CARD_MODAL,
} from '../operations/order-new-card';

import TopUpCash, {
  TOP_UP_CASHE_MODAL,
} from '../operations/top-up-cash';

import TransferToExchange, {
  TRANSFER_EXCHANGE_MODAL,
} from '../operations/transfer-to-exchange';

interface ICentralModalProps {
  isShown: boolean;
  contentId: MainModalContentType;
  toggleShown: () => void;
}

// TODO: split it to separate chunk
export const MainCentralModal: React.FC<ICentralModalProps> = ({
  isShown,
  contentId,
  toggleShown,
}) => {
  const shouldShown = (id: MainModalContentType, type: MainModalContentType) =>
    and(equals(id, type), isShown);

  return (
    <MainModalBox isShown={isShown}>
      <MainModalCloseBox>
        <CloseBtn onClick={toggleShown} />
      </MainModalCloseBox>
      {shouldShown(contentId, NEW_ACCOUNT_MODAL) && <NewAccount />}
      {shouldShown(contentId, TRANSFER_CARD_MODAL) && <TransferToCard />}
      {shouldShown(contentId, TRANSFER_CONTACT_MODAL) && <TransferToContact />}
      {shouldShown(contentId, TRANSFER_BANK_MODAL) && <TransferToBank />}
      {shouldShown(contentId, CARD_DETAIL_MODAL) && <CardDetailInfo />}
      {shouldShown(contentId, TOP_UP_FROM_CARD_MODAL) && <TopUpFromCard />}
      {shouldShown(contentId, TOP_UP_TRANSFER_MODAL) && <TopUpTransfer />}
      {shouldShown(contentId, TOP_UP_REQUEST_MODAL) && <TopUpRequest />}
      {shouldShown(contentId, TOP_UP_CASHE_MODAL) && <TopUpCash />}
      {shouldShown(contentId, ORDER_CARD_MODAL) && <OrderNewCard />}
      {shouldShown(contentId, TRANSACTION_ERROR_MODAL) && <TransactionError />}
      {shouldShown(contentId, TRANSFER_EXCHANGE_MODAL) && <TransferToExchange />}
    </MainModalBox>
  );
};

export const mapStateToProps = (store: IStore) => {
  return {
    isShown: getIsShownMainModal(store),
    contentId: getMainModalContentId(store),
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  toggleShown: () => dispatch(toggleMainModal),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainCentralModal);
