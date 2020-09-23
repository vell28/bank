import React from 'react';
import { connect } from 'react-redux';

import {
  isInitialLoadingCard,
  getSliderActiveCardId,
  getIsShownDisableLimitsConfirmModal,
  getIsShownIncreaseLimitConfirmModal,
  hasConfirmServerError,
} from 'models/operations/card-settings/redux/selectors';
import {
  disableCardLimitsConfirm,
  toggleDisableCardLimitsConfirmModal,
  toggleIncreaseCardLimitConfirmModal,
  disableCardLimits,
  increaseLimitConfirm,
} from 'models/operations/card-settings/redux/actions';
import {
  getConfirmationCodeLength,
  getConfirmationFailedAttempts,
} from 'models/operations/sms-confirmation/redux/selectors';

import { IStore } from 'modules/store/types';
import PopupSmsConfirm from '../../../../components/common/popup/popup-sms';

interface ICardLimitsProcessProps {
  isLoading: boolean;
  cardId: string;
  isDisable: boolean;
  isIncrease: boolean;
  cardLimitsDisableConfirm: (cardId: string, code: string) => void;
  cardLimitsIncreaceConfirm: (cardId: string, code: string) => void;
  hideDisableModal: () => void;
  hideIncreaceModal: () => void;
  codeLength: number;
  resendSms: (cardId: string) => void;
  attempts: number;
  hasError: boolean;
}

const CardLimitsProcess: React.FC<ICardLimitsProcessProps> = ({
  isDisable,
  isIncrease,
  cardLimitsDisableConfirm,
  cardLimitsIncreaceConfirm,
  hideDisableModal,
  hideIncreaceModal,
  cardId,
  codeLength,
  resendSms,
  isLoading,
  attempts,
  hasError,
}: ICardLimitsProcessProps) => {
  const onSubmit = ({ code }: any) => {
    if (isDisable) {
      cardLimitsDisableConfirm(cardId, code);
    } else {
      cardLimitsIncreaceConfirm(cardId, code);
    }
  };

  const onHideModal = () => {
    if (isDisable) {
      hideDisableModal();
    } else {
      hideIncreaceModal();
    }
  };

  const onResend = () => resendSms(cardId);
  return (
    <PopupSmsConfirm
      onCancel={onHideModal}
      isShown={isDisable || isIncrease}
      codeLength={codeLength}
      onSubmit={onSubmit}
      isLoading={isLoading}
      onResend={onResend}
      attempts={attempts}
      hasError={hasError}
      actionDiscription={isDisable ? 'Disable' : 'Confirm'}
    />
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  cardLimitsDisableConfirm: (cardId: string, code: string) => dispatch(disableCardLimitsConfirm(cardId, code)),
  cardLimitsIncreaceConfirm: (cardId: string, code: string) => dispatch(increaseLimitConfirm(cardId, code)),
  hideDisableModal: () => dispatch(toggleDisableCardLimitsConfirmModal(false)),
  hideIncreaceModal: () => dispatch(toggleIncreaseCardLimitConfirmModal(false)),
  resendSms: (cardId: string) => dispatch(disableCardLimits(cardId)),
});

const mapStateToProps = (store: IStore) => ({
  isLoading: isInitialLoadingCard(store),
  cardId: getSliderActiveCardId(store),
  codeLength: getConfirmationCodeLength(store),
  isDisable: getIsShownDisableLimitsConfirmModal(store),
  isIncrease: getIsShownIncreaseLimitConfirmModal(store),
  attempts: getConfirmationFailedAttempts(store),
  hasError: hasConfirmServerError(store),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardLimitsProcess);
