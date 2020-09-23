import styled, { css, keyframes } from 'styled-components';

import { Link } from 'react-router-dom';

export const AccountMenuBox = styled<any>('div')`
  width: 100%;
  max-height: ${(props) => (props.maxHeight ? `${props.maxHeight}px` : 'calc(100vh - 200px)')};
  padding: 0 15px;

  ${(props) => props['data-overflow'] && 'overflow: auto;'};
`;

export const widthKey = keyframes`
0%{width: 0;}
100%{width: 360px}
`;

const animationWidth = css`
  animation: ${widthKey} 0.6s ease-out;
`;

export const DropDown = styled.div`
  width: 100%;
  margin-top: 27px;
  text-align: center;
  span {
    letter-spacing: 0.9px;
    padding-right: 2px;
    font-size: 16px;
    color: ${(props) => props.theme.colors.blue};
    background-color: transparent;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const AccountBox = styled.div`
  position: relative;
  &:first-child {
    margin-top: 0 !important;
  }
  margin-top: 22px;
`;

export const AccountType = styled<any>('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  letter-spacing: 0.9px;
  margin-top: ${(props) => props.top || 0}px;
  padding-left: ${(props) => props.left || 0}px;
  padding-bottom: 4px;
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    &:first-child {
      width: 100%;
    }
    &:last-child {
      width: 80px;
      text-transform: lowercase;
    }
  }
`;

export const AccountBlock = styled.div``;

export const AccountCurrenciesBox = styled.div`
  width: 100%;
  cursor: pointer;
  margin: 10px 0 0;
  padding: 0;
  position: relative;
  transition: all 0.2s ease-out;
  &:hover {
    text-shadow: 1px 0 black;
  }

  &:hover a {
    text-shadow: 1px 0 white;
  }

  &.active-account a {
    text-shadow: 1px 0 white;
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 100%;
      width: 360px;
      ${animationWidth};
      will-change: width;
      margin-left: 8px;
      border-bottom: 1px solid ${(props) => props.theme.colors.white};
    }
  }

  &.active-account:hover {
    margin-left: 0;
  }
`;

export const AccountCurrencies = styled.div`
  position: relative;
  font-size: 18px;
  text-decoration: none;
}
`;

export const LinkCurrencies = styled(Link)`
  position: relative;
  font-size: 18px;
  text-decoration: none;
  transition: all 0.25s;
`;
