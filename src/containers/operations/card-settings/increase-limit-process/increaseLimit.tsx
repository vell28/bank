import React from 'react';
import { connect } from 'react-redux';

import { isInitialLoadingCard, getIsShownIncreaseLimitModal } from 'models/operations/card-settings/redux/selectors';
import { toggleDisableCardLimitsModal } from 'models/operations/card-settings/redux/actions';

import { IStore } from 'modules/store/types';

import { PopupDialog } from '@components/popup/popup-overlay';
import { Portal } from '@components/portal';
import { SpinnerWrapper } from '@components/spinner';

import { PopupChildrenBox } from './elements';

interface ICardIncreaseLimitProps {
  isLoading: boolean;
  isShownDisable: boolean;
  hideModal: () => void;
}

const CardIncreaseLimit: React.FC<ICardIncreaseLimitProps> = ({
  isShownDisable,
  hideModal,
  isLoading,
}: ICardIncreaseLimitProps) => {
  return (
    <Portal>
      <PopupDialog isShown={isShownDisable} onCancel={hideModal}>
        <PopupChildrenBox>
          <SpinnerWrapper isLoading={isLoading} />
        </PopupChildrenBox>
      </PopupDialog>
    </Portal>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  hideModal: () => dispatch(toggleDisableCardLimitsModal(false)),
});

const mapStateToProps = (store: IStore) => ({
  isLoading: isInitialLoadingCard(store),
  isShownDisable: getIsShownIncreaseLimitModal(store),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardIncreaseLimit);
