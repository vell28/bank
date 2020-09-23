import React from 'react';
import { slice } from 'ramda';
import { isNotEqual } from 'utils/ramda';

// TODO: check swiper bundle size
import Swiper from 'react-id-swiper';

import { ICard } from 'models/operations/card-settings/entities';
import { CardPreview } from '../../common/card-preview';
import { SliderBox } from './elements';

import { NoTypeCardPreview } from '../../common/no-type-card-preview';

interface ICardSliderProps {
  cards: ICard[];
  onSelectCard: (accountId: string, card: ICard, index: number) => void;
  onCardClick: () => void;
  initIndex?: number;
  accountId: string;
  showOrderNewCardModal: () => void;
}

const defaultParams = {
  slidesPerView: 3,
  spaceBetween: 0,
  normalizeSlideIndex: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return `<span class='${className}'/></span>`;
    },
  },
  breakpoints: {
    1440: { slidesPerView: 3 },
    1280: { slidesPerView: 3 },
    1024: { slidesPerView: 3 },
  },
};

export class CardSlider extends React.Component<ICardSliderProps> {
  private swiper: any = null;

  public shouldComponentUpdate(nextProps: ICardSliderProps) {
    const { accountId } = this.props;
    return isNotEqual(nextProps.accountId, accountId);
  }

  private initSwiper = (swiperIns: any) => {
    const {
      onSelectCard, initIndex, accountId, cards
    } = this.props;
    if (swiperIns) {
      this.swiper = swiperIns;
      swiperIns.slideTo(initIndex);
      swiperIns.on('slideChange', () => {
        onSelectCard(accountId, cards[swiperIns.activeIndex], swiperIns.activeIndex);
      });
    }
  };

  private goNext = () => {
    if (this.swiper) {
      this.swiper.slideNext();
    }
  };

  private goPrev = () => {
    if (this.swiper) {
      this.swiper.slidePrev();
    }
  };

  private makeAddNewCard() {
    const { showOrderNewCardModal } = this.props;
    return (
      <div key="add_new">
        <div className="add-card" onClick={showOrderNewCardModal}>
          <NoTypeCardPreview fontSize="24" />
        </div>
      </div>
    );
  }

  private makeCardsElements() {
    const { cards, onCardClick } = this.props;
    const slicedCards = slice(0, 30, cards);
    return slicedCards.map((item: ICard) => (
      <div key={item.id}>
        <div className="account-card" onClick={onCardClick}>
          <CardPreview
            fontSize="6.3"
            productType={item.productType}
            expireAt={item.expireAt}
            name={item.owner.embossedName}
            cardNumber={item.number}
            status={item.status}
          />
        </div>
      </div>
    ));
  }

  private makeSliderContent() {
    return [...this.makeCardsElements(), this.makeAddNewCard()];
  }

  public render() {
    return (
      <SliderBox>
        <Swiper {...defaultParams} wrapperClass="swiper-wrapper" getSwiper={this.initSwiper}>
          {this.makeSliderContent()}
        </Swiper>
        <div className="arrow-btn btn-prev" onClick={this.goPrev}>
          <i className="fas fa-angle-left" />
        </div>
        <div className="arrow-btn btn-next" onClick={this.goNext}>
          <i className="fas fa-angle-right" />
        </div>
      </SliderBox>
    );
  }
}
