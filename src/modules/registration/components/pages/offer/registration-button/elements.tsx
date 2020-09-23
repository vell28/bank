import styled from 'styled-components';
import arrowIcon from './images/arrow.svg';

export const Button = styled.button`
  margin-top: 35px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  width: 280px;
  height: 44px;
  border-radius: 26px;
  background-color: ${(props) => props.theme.colors.green1};
  border-color: ${(props) => props.theme.colors.green1};
  font-family: SFProText, sans-serif;
  font-size: 15px;
  font-weight: 600;
  text-align: center;

  &:focus {
    outline: none;
  }
`;

export const Arrow = styled.div`
  width: 28px;
  height: 28px;
  margin: 0 8px;
  background: url(${arrowIcon}) no-repeat center center;
`;

export const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
`;
