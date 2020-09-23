import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { propOr } from 'ramda';
import { useTranslation } from 'react-i18next';

import {
  CardSettingBox,
  CardDataPreviewBox,
  BlockCardBtn,
  BtnsBox,
} from 'components/operations/card-settings/elements';
import { CardPreview } from 'components/common/card-preview';
import { Skeleton } from 'components/skeleton';
import { UnmaskedCardPreview } from 'components/common/unmasked-card-data';

import { AccountStatus } from 'models/organizations/entities';
import { BlockUnmaskedCardSkelet } from 'components/skeleton/collections';
import { SpinnerWrapper } from '@components/spinner';
import { PopupBlockCard } from 'components/common/popup/popup-dialog';
import {
  getFullUnmaskedSelectedCard,
  isInitialLoadingCard,
  getSliderActiveCardId,
  getSliderActiveCard,
  getIsShownLockModal,
} from 'models/operations/card-settings/redux/selectors';
import {
  toggleBlockCardModal,
  toggleUnBlockCardModal,
  fetchUnmaskedCard,
  lockCard,
  toggleDisableCardLimitsTimer,
} from 'models/operations/card-settings/redux/actions';
import { ICardUnmasked, ICard } from 'models/operations/card-settings/entities';
import { IStore } from 'modules/store/types';
import { getCurrentAccountId } from 'models/organizations/redux/selectors';
import UnLockCard from './unlock-process/unlock';
import UnLockConfirmCard from './unlock-process/unlockConfirm';
import DisableCardLimits from './disable-limits-process/disableLimits';
import IncreaseCardLimit from './increase-limit-process/increaseLimit';
import CardLimitsConfirm from './settings-limits-process/settingsLimitsConfirm';

import SettingCardLimits from '../../../components/common/setting-card-limits';

export const CARD_DETAIL_MODAL = 'CARD_DETAIL_MODAL';
export type CardDetailModalType = 'CARD_DETAIL_MODAL';

interface ICardDetailInfoProps {
  fetchCard: (card: string) => void;
  toggleModal: (isShown: boolean) => void;
  blockCard: (cardId: string, accountId: string) => void;
  showUnBlockModal: () => void;
  disableLimitsTimer: () => void;
  unmaskedCard: ICardUnmasked;
  fullCard?: ICard;
  cardId: string;
  accountId: string;
  isLoading: boolean;
  isShownBlock: boolean;
}

export const CardDetailInfo: React.FC<ICardDetailInfoProps> = ({
  fetchCard,
  cardId,
  fullCard,
  isLoading,
  toggleModal,
  showUnBlockModal,
  unmaskedCard,
  accountId,
  blockCard,
  isShownBlock,
  disableLimitsTimer,
}) => {
  useEffect(
    () => {
      fetchCard(cardId);
      disableLimitsTimer();
    },
    [cardId, fetchCard, disableLimitsTimer],
  );

  const { t } = useTranslation();
  const showBlock = () => toggleModal(true);
  const hideBlock = () => toggleModal(false);
  const onBlockCard = () => blockCard(cardId, accountId);
  const status = propOr('', 'status')(fullCard);

  return (
    <CardSettingBox>
      {fullCard && (
        <CardPreview
          cardNumber={fullCard.number}
          expireAt={fullCard.expireAt}
          name={fullCard.owner.embossedName}
          status={fullCard.status}
        />
      )}
      <CardDataPreviewBox>
        <Skeleton isLoading={isLoading} render={<BlockUnmaskedCardSkelet />}>
          <UnmaskedCardPreview card={unmaskedCard} />
        </Skeleton>
        <SettingCardLimits />
      </CardDataPreviewBox>
      <BtnsBox>
        <SpinnerWrapper isLoading={isLoading}>
          {status === AccountStatus.ACTIVE && <BlockCardBtn onClick={showBlock}>{t('block card')}</BlockCardBtn>}
          {status === AccountStatus.LOCKED && (
            <BlockCardBtn onClick={showUnBlockModal}>{t('unblock card')}</BlockCardBtn>
          )}
        </SpinnerWrapper>
      </BtnsBox>
      <PopupBlockCard
        title="Block Card Temporarily"
        description="To block card press the «Block» button. You'll be able to unblock card by yourself."
        actionText="Block"
        onCancel={hideBlock}
        onReject={onBlockCard}
        isShown={isShownBlock}
      />
      <UnLockCard />
      <UnLockConfirmCard />
      <DisableCardLimits />
      <IncreaseCardLimit />
      <CardLimitsConfirm />
    </CardSettingBox>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCard: (cardId: string) => dispatch(fetchUnmaskedCard(cardId)),
  blockCard: (cardId: string, accountId: string) => dispatch(lockCard(cardId, accountId)),
  toggleModal: (isShown: boolean) => dispatch(toggleBlockCardModal(isShown)),
  showUnBlockModal: () => dispatch(toggleUnBlockCardModal(true)),
  disableLimitsTimer: () => dispatch(toggleDisableCardLimitsTimer(false)),
});

export const mapStateToProps = (store: IStore) => ({
  unmaskedCard: getFullUnmaskedSelectedCard(store),
  fullCard: getSliderActiveCard(store),
  cardId: getSliderActiveCardId(store),
  isShownBlock: getIsShownLockModal(store),
  accountId: getCurrentAccountId(store),
  isLoading: isInitialLoadingCard(store),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardDetailInfo);
