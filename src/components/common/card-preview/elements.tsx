import styled, { css } from 'styled-components';

export const cardTextStyle = css`
  color: #fff;
  font-family: 'ocra';
  background: linear-gradient(
    to bottom,
    #c8c8c8 0%,
    #c8c8c8 14.28%,
    white 28.56%,
    white 42.84%,
    #c8c8c8 57.12%,
    #c8c8c8 71.4%,
    white 85.68%,
    white 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const CardBox = styled<any>('div')`
  width: 100%;
  max-width: 340px;
  position: relative;
  font-size: ${(props) => props.fontSize}px;
`;

export const AdaptiveBox = styled.div`
  padding-bottom: 57.7%;
`;

export const InnerBox = styled<any>('div')`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.darkBlue};
  background-image: url('/img/cards/${(props) => props.type}.png');
  background-size: cover;
  ${(props) =>
    props.isBlocked
    && `
      content: "";
    -webkit-filter: blur(4px);
    filter: blur(4px);
    box-shadow: 0 0 48px 0 rgba(0, 0, 0, 0.4);
  `};
`;

export const CardNumber = styled.div`
  position: absolute;
  font-size: 250%;
  ${cardTextStyle};
  padding-left: 10%;
  width: 100%;
  top: 46%;
  letter-spacing: -1.1px;
`;

export const CardHolderName = styled.div`
  position: absolute;
  font-size: 140%;
  ${cardTextStyle};
  top: 78%;
  text-transform: uppercase;
  padding-left: 8%;
`;

export const CardExpiredDate = styled.div`
  position: absolute;
  font-size: 140%;
  ${cardTextStyle};
  top: 66%;
  text-transform: uppercase;
  padding-left: 43%;
`;

export const BlockBox = styled.div`
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  span {
    color: ${(props) => props.theme.colors.red};
    font-size: 17px;
  }
`;

export const RoundBox = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.red};
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-315deg);
  font-size: 30px;
`;
