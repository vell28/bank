import React from 'react';
import { connect } from 'react-redux';

import {
  isInitialLoadingCard,
  getSliderActiveCardId,
  getIsShownUnLockModal,
} from 'models/operations/card-settings/redux/selectors';
import { unlockCard, toggleUnBlockCardModal } from 'models/operations/card-settings/redux/actions';
import { PopupBlockCard } from 'components/common/popup/popup-dialog';

import { IStore } from 'modules/store/types';

interface ICardUnblockProps {
  isLoading: boolean;
  cardId: string;
  isShownUnblock: boolean;
  unblockCard: (cardId: string) => void;
  hideUnblock: () => void;
}

const CardUnblock: React.FC<ICardUnblockProps> = ({
  isShownUnblock, unblockCard, hideUnblock, cardId, isLoading
}) => {
  const onUnblock = () => unblockCard(cardId);
  return (
    <PopupBlockCard
      title="Unblock Card"
      description="Would you like to unblock card?"
      actionText="Unblock"
      onCancel={hideUnblock}
      onOk={onUnblock}
      isShown={isShownUnblock}
      isLoading={isLoading}
      addingClassNames="unblock"
    />
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  unblockCard: (cardId: string) => dispatch(unlockCard(cardId)),
  hideUnblock: () => dispatch(toggleUnBlockCardModal(false)),
});

const mapStateToProps = (store: IStore) => ({
  isLoading: isInitialLoadingCard(store),
  cardId: getSliderActiveCardId(store),
  isShownUnblock: getIsShownUnLockModal(store),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardUnblock);
