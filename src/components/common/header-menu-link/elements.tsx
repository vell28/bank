import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

const linkCss = css`
  display: inline-block;
  padding: 0 23px;
  font-size: 18px;
  color: ${(props: any) => (props['data-active'] ? props.theme.colors.blue : props.theme.colors.white)} !important;
  text-decoration: none;
  opacity: 1;

  &:hover,
  &:focus,
  &:active {
    opacity: 0.5;
    outline: none;
  }
`;

export const HeaderLink = styled<any>(Link)`
  ${linkCss};
`;

export const Anchor = styled.a`
  ${linkCss};
`;
