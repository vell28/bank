import styled from 'styled-components';
import WhiteArrowIcon from '../signin/arrow-white.svg';

export const Container = styled.div<any>`
  font-family: AvenirNext;
  font-size: 13px;
  font-weight: normal;
  position: absolute;
  width: 52px;
  left: 50px;
  top: 47px;
  cursor: pointer;
`;

export const BtnWrap = styled.div<any>`
  font-family: AvenirNext;
  font-size: 13px;
  font-weight: normal;
  position: relative;
  text-transform: capitalize;
  text-align: right;

  &: hover {
    opacity: 0.7;
  }
`;

export const Icon = styled.span<any>`
  background: url(${WhiteArrowIcon}) no-repeat;
  width: 24px;
  height: 18px;
  background-size: contain;
  background-position: center;
  transform: rotate(180deg);
  position: absolute;
  left: 0;
`;
