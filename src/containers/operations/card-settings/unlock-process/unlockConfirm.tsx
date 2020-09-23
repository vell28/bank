import React from 'react';
import { connect } from 'react-redux';

import {
  isInitialLoadingCard,
  getSliderActiveCardId,
  getIsShownUnLockConfirmModal,
  hasConfirmServerError,
} from 'models/operations/card-settings/redux/selectors';
import {
  unblockCardConfirm,
  toggleUnBlockConfirmCardModal,
  unlockCard,
} from 'models/operations/card-settings/redux/actions';
import {
  getConfirmationCodeLength,
  getConfirmationFailedAttempts,
} from 'models/operations/sms-confirmation/redux/selectors';

import { IStore } from 'modules/store/types';
import { getCurrentAccountId } from 'models/organizations/redux/selectors';
import PopupSmsConfirm from '../../../../components/common/popup/popup-sms';

interface ICardUnblockProcessProps {
  isLoading: boolean;
  cardId: string;
  accountId: string;
  isShown: boolean;
  unblockConfirmCard: (cardId: string, accountId: string, code: string) => void;
  hideModal: () => void;
  codeLength: number;
  resendSms: (cardId: string) => void;
  attempts: number;
  hasError: boolean;
}

const CardUnblockProcess: React.FC<ICardUnblockProcessProps> = ({
  isShown,
  unblockConfirmCard,
  hideModal,
  accountId,
  cardId,
  codeLength,
  resendSms,
  isLoading,
  attempts,
  hasError,
}) => {
  const onSubmit = ({ code }: any) => unblockConfirmCard(cardId, accountId, code);
  const onResend = () => resendSms(cardId);
  return (
    <PopupSmsConfirm
      onCancel={hideModal}
      isShown={isShown}
      codeLength={codeLength}
      onSubmit={onSubmit}
      isLoading={isLoading}
      onResend={onResend}
      attempts={attempts}
      hasError={hasError}
    />
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  unblockConfirmCard: (cardId: string, accountId: string, code: string) =>
    dispatch(unblockCardConfirm(cardId, accountId, code)),
  hideModal: () => dispatch(toggleUnBlockConfirmCardModal(false)),
  resendSms: (cardId: string) => dispatch(unlockCard(cardId)),
});

const mapStateToProps = (store: IStore) => ({
  isLoading: isInitialLoadingCard(store),
  cardId: getSliderActiveCardId(store),
  codeLength: getConfirmationCodeLength(store),
  isShown: getIsShownUnLockConfirmModal(store),
  accountId: getCurrentAccountId(store),
  attempts: getConfirmationFailedAttempts(store),
  hasError: hasConfirmServerError(store),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardUnblockProcess);
