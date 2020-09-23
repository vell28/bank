import React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { equals } from 'ramda';

import { ICard } from 'models/operations/card-settings/entities';
import { IStore } from 'modules/store/types';
import { getActiveCardsByAccount } from 'models/organizations/redux/selectors';
import { showModalWithContent } from 'models/main-modal/redux/actions';

import { SliderBox } from 'components/account-banking/elements';
import { getSliderActiveIndex } from 'models/operations/card-settings/redux/selectors';
import { selectCardInSlider } from 'models/operations/card-settings/redux/actions';

import { CardSlider } from 'components/account-banking/card-slider';
import { getRouteParamByName } from '../../../routing/utils';
import { CARD_DETAIL_MODAL } from '../../../operations/card-settings';
import { ORDER_CARD_MODAL } from '../../../operations/order-new-card';

interface ISliderContainerProps {
  accountId: string;
  cards: ICard[];
  onCardClick: () => void;
  initIndex: number;
  onSelectCard: (accountId: string, card: ICard, index: number) => void;
  showOrderNewCardModal: () => void;
}

export const AccountCardSlider: React.FC<ISliderContainerProps> = (props: ISliderContainerProps) => {
  const { cards, accountId } = props;

  if (equals(cards.length, 0)) {
    return null;
  }
  return (
    <SliderBox>
      <CardSlider {...props} key={accountId} />
    </SliderBox>
  );
};

export const mapStateToProps = (store: IStore, ownProps: RouteComponentProps) => {
  const accountId = getRouteParamByName('id', ownProps);
  return {
    accountId,
    cards: getActiveCardsByAccount(store),
    initIndex: getSliderActiveIndex(accountId)(store),
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onSelectCard: (accountId: string, card: ICard, index: number) => dispatch(selectCardInSlider(accountId, card, index)),
  onCardClick: () => dispatch(showModalWithContent(CARD_DETAIL_MODAL)),
  showOrderNewCardModal: () => dispatch(showModalWithContent(ORDER_CARD_MODAL)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AccountCardSlider),
);
