import React from 'react';
import { connect } from 'react-redux';

import {
  isInitialLoadingCard,
  getSliderActiveCardId,
  getIsShownDisableLimitsModal,
} from 'models/operations/card-settings/redux/selectors';
import { disableCardLimits, toggleDisableCardLimitsModal } from 'models/operations/card-settings/redux/actions';
import { PopupBlockCard } from 'components/common/popup/popup-dialog';

import { IStore } from 'modules/store/types';

interface ICardDisableLimitsProps {
  isLoading: boolean;
  cardId: string;
  isShownDisable: boolean;
  disableLimits: (cardId: string) => void;
  hideDisable: () => void;
}

const CardDisableLimits: React.FC<ICardDisableLimitsProps> = ({
  isShownDisable,
  disableLimits,
  hideDisable,
  cardId,
  isLoading,
}: ICardDisableLimitsProps) => {
  const onDisable = () => disableLimits(cardId);

  return (
    <PopupBlockCard
      title="Disable Limits Temporarily"
      description="Press «OK» to disable limits for 3 minutes"
      actionText="Ok"
      onCancel={hideDisable}
      onOk={onDisable}
      isShown={isShownDisable}
      isLoading={isLoading}
      addingClassNames="unblock"
    />
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  disableLimits: (cardId: string) => dispatch(disableCardLimits(cardId)),
  hideDisable: () => dispatch(toggleDisableCardLimitsModal(false)),
});

const mapStateToProps = (store: IStore) => ({
  isLoading: isInitialLoadingCard(store),
  cardId: getSliderActiveCardId(store),
  isShownDisable: getIsShownDisableLimitsModal(store),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardDisableLimits);
