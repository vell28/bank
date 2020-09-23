import styled from 'styled-components';

export const SliderBox = styled.div`
  position: relative;
  padding: 23px 25px 30px;
  max-width: 100%;
  overflow: hidden;

  .swiper-container {
    overflow: visible !important;
  }
  .arrow-btn {
    background: none !important;
    position: absolute;
    top: 73px;
    z-index: 10;
    cursor: pointer;
    transition: all 0.25s;
    outline: none;
    &.btn-next {
      right: 7px;
    }
    &.btn-prev {
      left: 10px;
    }
  }

  .account-card {
    position: relative;
    width: 210px;
    height: 121px;
    border-radius: 8px;
    background-color: #282929;
    box-shadow: 0 0 48px 0 rgba(0, 0, 0, 0.4);
    animation: 0.35s fadein;
    transition: all 0.5s;
    opacity: 0;
    background-image: url(/img/Card.png);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: contain;
    cursor: pointer;
  }

  .add-card {
    position: relative;
    width: 210px;
    height: 121px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.darkBlue};
    box-shadow: 0 0 48px 0 rgba(0, 0, 0, 0.4);
    animation: 0.35s fadein;
    transition: all 0.5s;
    opacity: 0;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: contain;
    cursor: pointer;
  }

  .swiper-slide:not(.swiper-slide-active) .account-card {
    transform: scale(0.71);
  }

  .swiper-slide:not(.swiper-slide-active) .add-card {
    transform: scale(0.71);
  }

  .swiper-slide {
    &.swiper-slide-prev {
      z-index: 9;
      position: relative;
      .account-card {
        left: -20%;
        opacity: 1;
      }
      .add-card {
        left: -20%;
        opacity: 1;
      }
    }

    &.swiper-slide-active {
      z-index: 10;
      .account-card {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        opacity: 1;
      }
      .add-card {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        opacity: 1;
      }
    }

    &.swiper-slide-next {
      .account-card {
        right: 25%;
        opacity: 1;
      }
      .add-card {
        right: 25%;
        opacity: 1;
      }
    }
  }

  .swiper-pagination {
    bottom: -30px !important;

    .swiper-pagination-bullet {
      width: 5px;
      height: 5px;
      margin: 0 2.5px;
      display: inline-block;
      border-radius: 50%;
      background-color: ${(props) => props.theme.colors.white};
      opacity: 0.4;
      cursor: pointer;
      transition: all 0.25s;
      &.swiper-pagination-bullet-active {
        opacity: 1;
      }
    }
  }
`;
