import styled from 'styled-components';

import { Link } from 'react-router-dom';

import WhiteArrowIcon from './arrow-white.svg';
import GreenArrowIcon from './arrow-green.svg';

export const SignBtn = styled<any>('button')`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 44px;
  color: ${(props) => props.theme.colors.white};
  font-family: inherit;
  font-size: 16px;
  letter-spacing: 0.89px;
  border: none;
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.white};
  border-radius: 26px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: right 10px center;
  ${(props) =>
    props.arrow
    && `
    background-image: url(${props.success ? GreenArrowIcon : WhiteArrowIcon});
  `}
  cursor: pointer;
  transition: all 0.3s;
  text-align: center;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.white};
  }
  ${(props) =>
    props.disabled
    && `
    opacity: .8;
    pointer-events: none;
  `};
  ${(props) =>
    props.success
    && `
    color: ${props.theme.colors.asparagus};
    border-color: ${props.theme.colors.asparagus};
    &:hover {
      color: ${props.theme.colors.asparagus};
    }
  `}
`;

export const SignLink = styled(SignBtn)``;

SignLink.defaultProps = {
  as: Link,
};
